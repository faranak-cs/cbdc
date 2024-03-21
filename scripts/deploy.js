// imports
const { ethers } = require("hardhat");

// async main function
async function main() {
  // OurToken.sol
  const OurToken = await ethers.getContractFactory("OurToken");
  console.log("Deploying OurToken.sol ...");
  const ourToken = await OurToken.deploy();
  await ourToken.waitForDeployment();
  console.log(`Deployed to: ${ourToken.target}`);

  // Vault.sol
  const Vault = await ethers.getContractFactory("Vault");
  console.log("Deploying Vault.sol ...");
  const vault = await Vault.deploy(ourToken.target);
  await vault.waitForDeployment();
  console.log(`Deployed to: ${vault.target}`);
}

// call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
