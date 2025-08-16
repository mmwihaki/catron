import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Go Back Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link href="/shop" className="text-red-500 hover:text-red-600">
              Browse Products
            </Link>
            {" | "}
            <Link href="/contact" className="text-red-500 hover:text-red-600">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
