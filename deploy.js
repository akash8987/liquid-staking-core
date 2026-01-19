const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying LSD Protocol with:", deployer.address);

    // 1. Deploy Token
    const Token = await ethers.getContractFactory("LiquidStakingToken");
    const token = await Token.deploy();
    await token.deployed();
    console.log("lsETH Token deployed to:", token.address);

    // 2. Deploy Pool
    const Pool = await ethers.getContractFactory("StakingPool");
    const pool = await Pool.deploy(token.address);
    await pool.deployed();
    console.log("StakingPool deployed to:", pool.address);

    // 3. Link Pool to Token
    await token.setPool(pool.address);
    console.log("Ownership transferred to Pool");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
