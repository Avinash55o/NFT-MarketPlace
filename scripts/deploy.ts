import { ethers } from "hardhat";

async function main() {
  const NFTMarketPlace = await ethers.getContractFactory("NFTMarketPlace");
  const nftMarketPlace = await NFTMarketPlace.deploy(); 

  await nftMarketPlace.waitForDeployment();
  console.log("Contract deployed to:", await nftMarketPlace.getAddress()); //represents the location of the deployed smart contract.
  
}

main().catch((error) => { //error handling
  console.error(error);
  process.exitCode = 1;
});
