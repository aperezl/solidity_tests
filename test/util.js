const { ethers } = require("hardhat");
const crypto = require('crypto')
module.exports = {
   makeSut: async (contract, options = []) => {
    const Sut = await ethers.getContractFactory(contract)
    const sut = await Sut.deploy(...options)
    return {
      sut
    }
  },
  makeWallet: () => {
    const id = crypto.randomBytes(32).toString('hex')
    const privateKey = '0x' + id
    const wallet = new ethers.Wallet(privateKey)
    return {
      privateKey,
      wallet
    }
  }
}