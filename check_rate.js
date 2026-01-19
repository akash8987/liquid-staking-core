const { ethers } = require("hardhat");
const { POOL_ADDRESS } = require("./config");

async function main() {
    const Pool = await ethers.getContractAt("StakingPool", POOL_ADDRESS);

    // Check how much 1 lsETH is worth now
    const oneShare = ethers.utils.parseEther("1.0");
    const ethValue = await Pool.getPooledEthByShares(oneShare);

    console.log("--- Exchange Rate ---");
    console.log(`1 lsETH = ${ethers.utils.formatEther(ethValue)} ETH`);
    
    if (ethValue.gt(oneShare)) {
        console.log("(Premium detected: Rewards have accrued)");
    }
}

main();
