# Liquid Staking Core (LSD) 💧

![Solidity](https://img.shields.io/badge/Solidity-0.8.19-black) ![DeFi](https://img.shields.io/badge/Sector-LSD-blue) ![ETH2](https://img.shields.io/badge/Network-Ethereum-gray)

## Protocol Architecture

**Liquid Staking Core** solves the liquidity problem of locked staking. When users deposit ETH, they instantly receive `lsETH` (Liquid Staked ETH). Unlike standard ERC20s, the value of `lsETH` increases over time relative to ETH as staking rewards are added to the pool.

### Core Mechanics

1.  **Minting (Deposit)**:
    User sends 1 ETH. Protocol calculates exchange rate. User gets ~0.99 lsETH (if pool has accrued rewards).
2.  **Burning (Withdraw)**:
    User burns lsETH. Protocol sends back ETH + Share of Rewards.
3.  **Oracle Update**:
    A trusted node reports the total balance on the Beacon Chain (Validator Rewards). This updates the `totalPooledEther`, increasing the value of everyone's shares.

### Math
The Share/ETH exchange rate is determined by:
$$shares = \frac{amount \times totalShares}{totalPooledEther}$$

## Deployment

1.  **Deploy Contracts**:
    Run `deploy.js` to launch the Token and Pool.
2.  **Simulate Rewards**:
    Run `oracle_update.js` to simulate validator rewards coming in.
3.  **Track Value**:
    Run `check_rate.js` to see the price of lsETH go up vs ETH.

---
*Next-Gen Staking Infrastructure.*
