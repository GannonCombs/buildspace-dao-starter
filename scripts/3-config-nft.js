import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xaF1D2F10a06aF5f12bf9232Ef8Df56BD3a905616", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "World Domination Token",
        description: "This NFT will give you access to WorldDominationDAO!",
        image: readFileSync("scripts/assets/world_domination.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();