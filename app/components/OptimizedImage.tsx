"use client";

import React, { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  lazy = true,
  priority = false,
  quality = 85,
  sizes = "100vw",
}) => {
  const [loaded, setLoaded] = useState(!lazy || priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate srcset for different DPI ratios
  const generateSrcSet = (baseSrc: string) => {
    // Check if it's an Unsplash URL and can be optimized
    if (baseSrc.includes("images.unsplash.com")) {
      const url = new URL(baseSrc);
      const baseWidth = width || 800;
      const baseHeight = height || 600;

      // Generate optimized URLs for different DPR
      const srcSet = [
        `${url.origin}${url.pathname}?w=${baseWidth}&h=${baseHeight}&fit=crop&q=${quality} 1x`,
        `${url.origin}${url.pathname}?w=${baseWidth * 2}&h=${baseHeight * 2}&fit=crop&q=${quality} 2x`,
        `${url.origin}${url.pathname}?w=${baseWidth * 3}&h=${baseHeight * 3}&fit=crop&q=${quality} 3x`,
      ].join(", ");

      return srcSet;
    }

    // For other images, assume we have @2x and @3x versions available
    const baseName = baseSrc.split(".").slice(0, -1).join(".");
    const extension = baseSrc.split(".").pop();

    return [
      `${baseSrc} 1x`,
      `${baseName}@2x.${extension} 2x`,
      `${baseName}@3x.${extension} 3x`,
    ].join(", ");
  };

  // Generate optimized src for current device
  const getOptimizedSrc = (baseSrc: string) => {
    if (baseSrc.includes("images.unsplash.com")) {
      const url = new URL(baseSrc);
      const dpr =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const effectiveWidth = (width || 800) * dpr;
      const effectiveHeight = (height || 600) * dpr;

      return `${url.origin}${url.pathname}?w=${effectiveWidth}&h=${effectiveHeight}&fit=crop&q=${quality}&dpr=${dpr}`;
    }

    return baseSrc;
  };

  useEffect(() => {
    if (!lazy || priority) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Placeholder while loading
  const PlaceholderDiv = () => (
    <div
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        aspectRatio: width && height ? `${width}/${height}` : "auto",
      }}
    >
      <svg
        className="w-8 h-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );

  if (error) {
    return <PlaceholderDiv />;
  }

  return (
    <div className="relative overflow-hidden">
      {!loaded && lazy && !priority && <PlaceholderDiv />}

      <img
        ref={imgRef}
        src={getOptimizedSrc(src)}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          loaded || !lazy || priority ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : lazy ? "lazy" : "eager"}
        decoding="async"
        style={{
          imageRendering: "crisp-edges",
        }}
        data-pixel-perfect
      />
    </div>
  );
};

export default OptimizedImage;
