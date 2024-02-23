const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();

describe("VerifySignature", function () {
  it("Check signature", async function () {
    // get an account from ethers.js library
    const account = await ethers.getSigners();

    // get the contract abi using ethers.js library
    const VerifySignature = await ethers.getContractFactory("VerifySignature");
    // deploy contract on hardhat local ethereum network
    const contract = await VerifySignature.deploy();
    // wait
    await contract.waitForDeployment();

    // private key of central bank for digital signature
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY);

    // parameters
    const to = account[0].address;
    const amount = 999;
    const message = "Hello";
    const nonce = 123;

    // get message hash
    const hash = await contract.getMessageHash(to, amount, message, nonce);

    // sign the message hash but first convert "hash" variable into bytes
    const sig = await signer.signMessage(ethers.getBytes(hash));

    // complete hashed message
    const ethHash = await contract.getEthSignedMessageHash(hash);

    // output
    console.log("P.K OF CENTRAL BANK=", signer.address);
    console.log("RECOVERED P.K=", await contract.recoverSigner(ethHash, sig));

    // test cases
    expect(
      await contract.verify(signer.address, to, amount, message, nonce, sig)
    ).to.equal(true);

    // Incorrect message returns false
    expect(
      await contract.verify(signer.address, to, amount + 1, message, nonce, sig)
    ).to.equal(false);
  });
});
