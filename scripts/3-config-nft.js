import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7Cbb977cB1ceC9716808Ef155EBE4F67306b7371",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Bundle O Balls",
        description: "This NFT will give you access to SportsDAO!",
        image: readFileSync("scripts/assets/sportsBalls.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()