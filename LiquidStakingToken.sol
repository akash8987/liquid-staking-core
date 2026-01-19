// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LiquidStakingToken is ERC20, Ownable {
    // Only the Pool contract can mint/burn
    address public pool;

    constructor() ERC20("Liquid Staked ETH", "lsETH") {}

    function setPool(address _pool) external onlyOwner {
        pool = _pool;
    }

    modifier onlyPool() {
        require(msg.sender == pool, "Caller is not the pool");
        _;
    }

    function mint(address _to, uint256 _amount) external onlyPool {
        _mint(_to, _amount);
    }

    function burn(address _from, uint256 _amount) external onlyPool {
        _burn(_from, _amount);
    }
}
