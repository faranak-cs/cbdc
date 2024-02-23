// imports
const { ethers } = require("hardhat");

// async main function
async function main() {
  const VerifySignature = await ethers.getContractFactory("VerifySignature");
  console.log("Deploying smart contract...");
  const verifySignature = await VerifySignature.deploy();
  await verifySignature.waitForDeployment();
  console.log(`Deployed to: ${verifySignature.target}`);
}

// call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
