import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const dotenv = require("dotenv")

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",

  networks: {
    "truffle-dashboard": {
      url: "http://localhost:24012/rpc"
    }
  },

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY ?? ''
    }
  }
};

export default config;
