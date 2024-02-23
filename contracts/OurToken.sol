// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20, ERC20Permit {
    constructor() ERC20("OurToken", "OT") ERC20Permit("OurToken") {}

    function mint(address _to, uint _amount) external {
        _mint(_to, _amount);
    }
}
