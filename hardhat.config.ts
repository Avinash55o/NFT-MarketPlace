import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks:{
    hardhat:{
      chainId:31337
    },
    sepolia:{
      url:"",
      accounts:[],
    }
  }
};

export default config;
