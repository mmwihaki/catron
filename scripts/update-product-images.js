const fs = require("fs");
const path = require("path");

// Raw product data from user input
const rawProductData = `
RIDEX Oil Filter	Oil Filter	E12/K13/N17	7O0026 	RIDEX	68	1,300	 upto 10k kms	7O0026 RIDEX Oil Filter with one anti-return valve, Spin-on Filter ▷ AUTODOC price and review
RIDEX Plus Oil Filter	Oil Filter	E12/K13/N17	7O0026P	Ridex Plus	30	1,800	Upto 15k kms	https://en.ridex.eu/product/18743865
STARK  Oil Filter	Oil Filter	E12/K13/N17	SKOF-0860025	STARK 	7	1,800	Upto 15k kms	https://www.autodoc.co.uk/stark/7989008
KAVO Air Filter	Air Filter	Teana L33 QR25de	 NA-2650 	KAVO	0	4,500	Aftermarket OE Qualityup-to 15k kms	https://www.autodoc.co.uk/kavo-parts/13863456?search=KAVO%20PARTS%20Air%20filter%20(NA-2650)
KAVO Cabin Filter	Cabin Filter	Teana L33 QR25de	NC-2037	KAVO	1	4,000	Aftermarket OE Quality - up-to 15k kms	https://www.autodoc.co.uk/kavo-parts/13863570?search=KAVO%20PARTS%20Pollen%20filter%20(NC-2037)
KAVO Cabin Filter	Cabin Filter	Teana L33 QR25de	NC-2037C	KAVO	0	6,500	Aftermarket OE Quality - up-to 30k kms	https://www.autodoc.co.uk/kavo-parts/13863571?search=KAVO%20PARTS%20Pollen%20filter%20(NC-2037C)
RIDEX HEPA Cabin Filter	Cabin Filter	E12/K13/N17	424I0259	RIDEX	50	1,200		https://www.autodoc.co.uk/ridex/8059207
GS-P Arm Bushing - Large	Arm Bushing - Large	Teana L33 QR25de	516473	GS-P	2	5,000		https://www.autodoc.co.uk/gsp/9865218?search=GSP%20Control%20Arm-%20/%20Trailing%20Arm%20Bush%20(516473)
GS-P Arm Bushing - Small	Arm Bushing - Small	Teana L33 QR25de	532407	GS-P	2	3,200		https://www.autodoc.co.uk/gsp/13922081?search=GSP%20Control%20Arm-%20/%20Trailing%20Arm%20Bush%20(532407)
RIDEX  Stabilizer links	Stabilizer links	Teana L33 QR25de	3229S0117	RIDEX 	4	3,800		https://www.autodoc.co.uk/ridex/8000270?search=RIDEX%20Anti%20roll%20bar%20link%20(3229S0117)
OSRAM Headlight bulbs	Headlight bulbs	H4 models	NB200H4 	OSRAM	0	7,500	(pack of 2)	https://www.osram.com/ecat/NIGHT%20BREAKER%20200-Halogen%20headlight%20lamps-Car%20lighting-Automotive/com/en/GPS01_3495633/ZMP_4062357/
OSRAM Headlight bulbs	Headlight bulbs	H4 models	CBI100H4	OSRAM	14	5,500	 (pack of 2)	https://www.osram.com/ecat/COOL%20BLUE%20INTENSE%20(NEXT%20GEN)-Halogen%20headlight%20lamps-Car%20lighting-Automotive/com/en/GPS01_3570150/
OSRAM Headlight bulbs	Headlight bulbs	H4 models	NB220H4	OSRAM	5	8,500	(pack of 2)	https://www.osram.com/ecat/NIGHT%20BREAKER%20220-Halogen%20headlight%20lamps-Car%20lighting-Automotive/com/en/GPS01_4099561/
OSRAM Parking lights	Parking lights	H4 models	W5W - CBI 	OSRAM	6	2,500	(pack of 2)	https://dammedia.osram.info/media/resource/900/osram-dam-20577281/COOL%20BLUE%20INTENSE%20W5W%202825CBN-02B.jpg
JAPKO Air filter	Air filter	DIG-S	20148	JAPKO	1	2,300	Aftermarket OE Quality - upto 10k kms	https://www.autodoc.co.uk/japko/9178528
TOPRAN Air filter	Air filter	DIG-S	701527	TOPRAN	7	2,950	Aftermarket OE Quality - upto 15k kms	https://www.autodoc.co.uk/topran/10136263?search=TOPRAN%20Air%20filter%20(701%20527)
JPN Air filter	Air filter	DIG-S		JPN	9	2,300		
RIDEX Air filter	Air filter	Puredrive	8A0074	RIDEX	60	2,200	Aftermarket OE Quality - upto 15k kms	https://www.autodoc.co.uk/ridex/8000845?search=RIDEX%20Air%20filter%20(8A0074)
RIDEX Air filter	Air filter	T32	8A0461	RIDEX	1	2,650		
JPN Cabin Filter	Cabin Filter	E12/K13/N17	40F1025-JPN	JPN	0	2,200	Normal	https://www.trodo.com/filter-cabin-air-jpn-40f1025-jpn
Kamoka Cabin Filter	Cabin Filter	E12/K13/N18	F518801	KAMOKA 	3	2,200	Normal	
Denkermann  Cabin Filter	Cabin Filter	E12/K13/N17	M110850K 	Denkermann 	0	3,000	 Activated Carbon/Charcoal	https://www.autodoc.co.uk/denckermann/17234692?search=DENCKERMANN%20Pollen%20filter%20(M110850K)
Denkermann Cabin Filter	Cabin Filter	E12/K13/N17	M110850A 	Denkermann	0	4,200	Antibacterial, Pollen Filter, Anti-Allergen P.M.2.5	https://www.autodoc.co.uk/denckermann/17234691?search=DENCKERMANN%20Pollen%20filter%20(M110850A)
RIDEX ActivCab Cabin Filter	Cabin Filter	E12/K13/N17	424I0678	RIDEX	2	1,500		https://www.autodoc.co.uk/ridex/16418296
RIDEX HEPA Cabin Filter	Cabin Filter	T32	424I0390	RIDEX	1	1,550		
TOPRAN CVT Filter	CVT Filter	E12/K13/N17/L33, etc	702466	TOPRAN	0	2,250	Aftermarket OE Quality	https://www.trodo.com/hydraulic-filter-automatic-transmission-topran-702-466
BLUEPRINT CVT Filter	CVT Filter	E12/K13/N17/L33, etc	ADN12141	BLUEPRINT	1	2,250		
LPR Brake Pads	Brake Pads	E12/K13/N17	LPR 05P1686	LPR	0	7,500	Aftermarket OE Quality - 15k - 30k kms	https://www.autodoc.co.uk/lpr/15833801?search=LPR%20Brake%20pad%20set%20(05P1686)
JAPKO Brake Pads	Brake Pads	E12/K13/N18	501002	JAPKO	0	7,500	Aftermarket OE Quality - 15k - 30k kms	https://www.autodoc.co.uk/japko/13039679
KAVO Brake Pads	Brake Pads	E12/K13/N19	KBP-6613	KAVO	0	7,500	Aftermarket OE Quality - 15k - 30k kms	https://www.autodoc.co.uk/kavo-parts/11556378?search=KAVO%20PARTS%20Brake%20pad%20set%20(KBP-6613)
RIDEX Brake Pads	Brake Pads	E12/K13/N17	402B0234	RIDEX	15	4,000		https://en.ridex.eu/product/7999897
RIDEX PLUS Brake Pads	Brake Pads	E12/K13/N17	402B0234P	RIDEX PLUS	10	6,200		https://en.ridex.eu/product/7999897
Brembo Brake Shoes - Rear	Brake Shoes - Rear	E12/K13/N17	S 56 510	Brembo	2	5,950		https://www.autodoc.co.uk/brembo/1662328?search=BREMBO%20Brake%20Shoe%20Set%20(S%2056%20510)
RIDEX  V-belt - Alternator 6PK2080	V-belt - Alternator 6PK2080	DIG-S	305P0095	RIDEX 	58	3,200		https://www.autodoc.co.uk/ridex/8098417?search=RIDEX%20V-ribbed%20belt%20(305P0095)
BOSCH V-belt - Alternator 6PK2081	V-belt - Alternator 6PK2081	DIG-S		BOSCH	8	3,200		
RIDEX V-belt - Alternator	V-Belt Alternator 7PK1988	E124wd	305P0310	RIDEX	27	3,200		https://www.autodoc.co.uk/ridex/8099120
DAYCO V-belt - Supercharger 3PK800	V-belt - Supercharger 3PK800	DIG-S	3PK800	DAYCO	20	2,200		https://www.autodoc.co.uk/dayco/225157?search=DAYCO%20V-ribbed%20belt%20(3PK800)
KAMOKA  V-belt - Alternator 7PK1165	V-belt - Alternator 7PK1165	E12/K13/N17	KA07017009	KAMOKA 	19	2,950		https://www.rexbo.co.uk/kamoka/v-ribbed-belt-7017009
STARK  Rear Wiper	Rear Wiper	E12/K13/N17	SKWIB-0940152	STARK 	4	1,500		https://www.autodoc.co.uk/stark/12755536?search=STARK%20Wiper%20Blade%20(SKWIB-0940152)
BOSCH Front Wiper Set	Front Wiper Set	E12/K13/N17	3397014128	BOSCH	0	5,950	(Pack of 2)	https://www.autodoc.co.uk/bosch/9464770?search=BOSCH%20Wiper%20Blade%20(3%20397%20014%20128)
NGK Spark plugs	Spark plugs	Note E12 DIG-S	 DILKAR7E11HS (97439) 	NGK	65	4600		https://www.sparkplugs.co.uk/ngk-spark-plug-dilkar7e11hs-97439
NGK Spark plugs	Spark plugs	Note E12 Puredrive, March K13, Latio N17, X-Trail T30, Dualis J10	DILKAR6A11 (9029)	NGK	12	4250		https://www.sparkplugs.co.uk/ngk-spark-plug-dilkar6a11-9029-5
NGK Spark plugs	Spark plugs	Note E11 1.5L, Tiida C11/SC11, AD/Wingroad, Teana L33 	DILZKAR6A11 (91691)	NGK	22	3450		https://www.sparkplugs.co.uk/ngk-spark-plug-dilzkar6a11-91691-5
NGK Spark plugs	Spark plugs	E-power	LZKAR6AP-11 (6643)	NGK	0	4250		https://www.sparkplugs.co.uk/ngk-spark-plug-lzkar6ap-11-6643-5
NGK Spark plugs	Spark plugs	Mazda Skyactive	ILKAR7L11 (94124)	NGK	24	4650		https://www.sparkplugs.co.uk/ngk-spark-plug-ilkar7l11-94124-5
NGK Spark plugs	Spark plugs	Mercedes Benz	SILZKFR8E7S (90654)	NGK	16	2750		https://www.sparkplugs.co.uk/ngk-spark-plug-silzkfr8e7s-90654-5
NGK Spark plugs	Spark plugs	Xtrail T30, B15, WingRoad Y11	LFR5A-11 (6376)	NGK	16	1850		https://www.sparkplugs.co.uk/ngk-spark-plug-lfr5a-11-6376-5
NGK Spark plugs	Spark plugs	Xtrail T32	DILKAR7D11H (90565)	NGK	24	4500		https://www.sparkplugs.co.uk/ngk-spark-plug-90565-5
NGK Spark plugs	Spark plugs		ILFR6A (3588)	NGK	4	3000		
RIDEX glasses holders 	Accessories	All	100207A0002	RIDEX	29	850		https://en.ridex.eu/product/17152690
RIDEX Keychain	Accessories	All	100202A0003	RIDEX	30	850		https://en.ridex.eu/product/17371417
Ring Invertor	Accessories	All		RING	6	3500		
CVT Strainer	Transmission	E12/		4	5000		
`;

function parseProductData() {
  const lines = rawProductData
    .trim()
    .split("\n")
    .filter((line) => line.trim());
  const products = [];

  lines.forEach((line) => {
    const columns = line.split("\t");
    if (columns.length >= 8) {
      const [
        name,
        category,
        carModel,
        sku,
        brand,
        qty,
        price,
        description,
        imageLink,
      ] = columns;

      // Clean and normalize SKU for matching
      const cleanSku = sku.trim().replace(/\s+/g, "");

      products.push({
        name: name.trim(),
        category: category.trim(),
        carModel: carModel.trim(),
        sku: cleanSku,
        brand: brand.trim(),
        stockLevel: parseInt(qty) || 0,
        inStock: parseInt(qty) > 0,
        price: parseInt(price.replace(/,/g, "")) || 0,
        description: description.trim(),
        imageLink:
          imageLink && imageLink.trim() !== "" ? imageLink.trim() : null,
      });
    }
  });

  return products;
}

function generateImageMap() {
  const parsedProducts = parseProductData();
  const imageMap = {};

  parsedProducts.forEach((product) => {
    if (product.imageLink && product.sku) {
      imageMap[product.sku] = {
        image: product.imageLink,
        stockLevel: product.stockLevel,
        inStock: product.inStock,
        price: product.price,
      };
    }
  });

  console.log(
    "Generated image mappings for",
    Object.keys(imageMap).length,
    "products",
  );
  console.log("\nSample mappings:");
  console.log(
    JSON.stringify(
      Object.fromEntries(Object.entries(imageMap).slice(0, 3)),
      null,
      2,
    ),
  );

  return imageMap;
}

function generateUpdateCode() {
  const imageMap = generateImageMap();

  console.log("\n// Copy this object to use in your products.ts update:");
  console.log("const updatedProductData = {");

  Object.entries(imageMap).forEach(([sku, data]) => {
    console.log(`  "${sku}": {`);
    console.log(`    image: "${data.image}",`);
    console.log(`    stockLevel: ${data.stockLevel},`);
    console.log(`    inStock: ${data.inStock},`);
    console.log(`    price: ${data.price},`);
    console.log(`  },`);
  });

  console.log("};");

  console.log("\n// Use this to update your products:");
  console.log("// const updatedProducts = allProducts.map(product => ({");
  console.log("//   ...product,");
  console.log("//   ...(updatedProductData[product.sku] || {})");
  console.log("// }));");

  return imageMap;
}

if (require.main === module) {
  generateUpdateCode();
}

module.exports = { parseProductData, generateImageMap, generateUpdateCode };
