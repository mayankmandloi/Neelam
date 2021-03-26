import { ProductRange } from "./ProductRange";
import {ProductList} from "./ProductList";

const { OurProductBanner } = require("./OurProductBanner");

export const OurProducts = () => {
  const data = {
    banner: {
      headingFirstLine: " Our Products",
      headingSecondLine: "HOME/Products",
      image:
        "industrial-estate-refinery-factory-oil-storage-tank-petrochemical-plant-area-with-beautify-sky-sunset.jpg",
    },
    product: {
      heading: "OUR PRODUCTS RANGE",
      text:
        "Our excellent quality product line of machines is uniform and accurate for water discharge and it is resistant to any chemical. All our products are produced with a high quality virgin material and it has no environmental effect. We have unique designs and high durability of products.",
      image: "",
    },
    productList: [
      { name: "DRIP LINE MACHINE", image: "" },
      { name: "EXTRUDER MACHINE", image: "" },
      { name: "INJECTION MOULDING MACHINE", image: "" },
      { name: "PIPE PRODUCTION LINE MACHINE", image: "" },
      { name: "SINGLE SCREW EXTRUDERS", image: "" },
      { name: "PANEL EXTRUSIONS LINE", image: "" },
      { name: "ROUND DRIP PIPE MACHINE", image: "" },
      { name: "PARALAL TWIN SCREW EXTRUDERS", image: "" },
      { name: "BLOW MOULDING MACHINE", image: "" },
    ],
  };

  return (
    <>
      <OurProductBanner item={data.banner} />
      <ProductRange/>
      <ProductList products={data.productList}/>
    </>
  );
};
