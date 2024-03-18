const { expect } = require("chai");
const { ethers } = require("hardhat");

async function getPermitSignature(signer, token, spender, value, deadline) {
  const [nonce, name, version, chainId] = await Promise.all([
    token.nonces(signer.address),
    token.name(),
    "1",
    31337,
  ]);

  return ethers.Signature.from(
    await signer.signTypedData(
      {
        // EIP712DOMAIN
        name,
        version,
        chainId,
        verifyingContract: token.target,
      },
      {
        Permit: [
          {
            name: "owner",
            type: "address",
          },
          {
            name: "spender",
            type: "address",
          },
          {
            name: "value",
            type: "uint256",
          },
          {
            name: "nonce",
            type: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
          },
        ],
      },
      {
        owner: signer.address,
        spender,
        value,
        nonce,
        deadline,
      }
    )
  );
}

describe("ERC20Permit", function () {
  it("ERC20 permit", async function () {
    const accounts = await ethers.getSigners(1);
    const signer = accounts[0];

    const OurToken = await ethers.getContractFactory("OurToken");
    const ourToken = await OurToken.deploy();
    await ourToken.waitForDeployment();

    // assign the token contract address to vault contract

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy(ourToken.target);
    await vault.waitForDeployment();

    // amount of tokens to be minted
    const amount = 1000;
    // call mint function
    await ourToken.mint(signer.address, amount);

    const deadline = ethers.MaxUint256;

    const { v, r, s } = await getPermitSignature(
      signer,
      ourToken,
      vault.target,
      amount,
      deadline
    );

    await vault.depositWithPermit(amount, deadline, v, r, s);

    console.log("Amount of tokens: ", await ourToken.balanceOf(vault.target));

    // test cases
    expect(await ourToken.balanceOf(vault.target)).to.equal(amount);
  });
});
