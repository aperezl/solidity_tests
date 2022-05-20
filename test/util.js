const { ethers } = require("hardhat");

module.exports = {
   makeSut: async (contract) => {
    const Sut = await ethers.getContractFactory(contract)
    const sut = await Sut.deploy()
    return {
      sut
    }
  }
}