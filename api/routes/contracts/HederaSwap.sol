pragma solidity >=0.5.0;
import "./SafeMath.sol";

/**
 * @title Owner
 * @dev Set & change owner
 */
contract HederaSwap {

    address private owner;
    uint256 public basePercent = 300;

    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // modifier to check if caller is owner
    modifier isOwner() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    /**
     * @dev Set contract deployer as owner
     */
    constructor() public {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    function hederaPayable(address _seller) public payable {
      // Consider using call.value to cusomize .gase(100) max
      uint256 cut = threePercent(msg.value);

      payable(owner).transfer(cut);
      payable(_seller).transfer(msg.value - cut);
      emit OwnershipTransferred(_seller, msg.sender);
    }

    function threePercent(uint256 _value) public view returns (uint256)  {
        uint256 roundValue = SafeMath.ceil(_value, basePercent);

        uint256 _threePercent = SafeMath.div(SafeMath.mul(roundValue, basePercent), 10000);
        return _threePercent;
    }

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    /**
     * @dev Return owner address
     * @return address of owner
     */
    function getOwner() external view returns (address) {
        return owner;
    }
}
