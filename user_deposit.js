const { ethers } = require("hardhat");
const { POOL_ADDRESS } = require("./config");

async function main() {
    const Pool = await ethers.getContractAt("StakingPool", POOL_ADDRESS);
    
    // Deposit 1 ETH
    const amount = ethers.utils.parseEther("1.0");
    
    console.log("Depositing 1 ETH...");
    const tx = await Pool.deposit({ value: amount });
    
    console.log(`Tx Sent: ${tx.hash}`);
    await tx.wait();
    console.log("Deposit Success! lsETH Minted.");
}

main();
