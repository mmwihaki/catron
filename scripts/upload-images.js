const fs = require("fs");
const path = require("path");

// Configuration
const IMAGE_FOLDER = "./product-images"; // Place your images here
const OUTPUT_FILE = "./app/data/image-urls.json";

// Expected folder structure:
// product-images/
//   ├── SKU1/
//   │   ├── main.jpg
//   │   ├── alt1.jpg
//   │   └── alt2.jpg
//   ├── SKU2/
//   │   ├── main.jpg
//   │   └── alt1.jpg

function generateImageMappings() {
  const imageData = {};

  if (!fs.existsSync(IMAGE_FOLDER)) {
    console.error(`Folder ${IMAGE_FOLDER} does not exist`);
    return;
  }

  const skuFolders = fs.readdirSync(IMAGE_FOLDER);

  skuFolders.forEach((sku) => {
    const skuPath = path.join(IMAGE_FOLDER, sku);

    if (fs.statSync(skuPath).isDirectory()) {
      const images = fs
        .readdirSync(skuPath)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort();

      if (images.length > 0) {
        const mainImage =
          images.find((img) => img.startsWith("main.")) || images[0];
        const additionalImages = images.filter((img) => img !== mainImage);

        imageData[sku] = {
          main: `/images/products/${sku}/${mainImage}`,
          additional: additionalImages.map(
            (img) => `/images/products/${sku}/${img}`,
          ),
        };
      }
    }
  });

  // Save mapping file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(imageData, null, 2));
  console.log(
    `Generated image mappings for ${Object.keys(imageData).length} products`,
  );
  console.log(`Saved to ${OUTPUT_FILE}`);

  return imageData;
}

// Usage example for updating products.ts
function generateProductUpdates() {
  const imageData = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"));

  console.log("\n// Add this to your products.ts to update images:");
  console.log("const imageUrls = {");

  Object.entries(imageData).forEach(([sku, urls]) => {
    console.log(`  "${sku}": {`);
    console.log(`    image: "${urls.main}",`);
    if (urls.additional.length > 0) {
      console.log(
        `    images: [${urls.additional.map((url) => `"${url}"`).join(", ")}],`,
      );
    }
    console.log(`  },`);
  });

  console.log("};");
  console.log("\n// Then update each product:");
  console.log("// ...product, ...imageUrls[product.sku]");
}

if (require.main === module) {
  generateImageMappings();
  if (fs.existsSync(OUTPUT_FILE)) {
    generateProductUpdates();
  }
}

module.exports = { generateImageMappings, generateProductUpdates };
