const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('GlobalVariables')
  const sut = await Sut.deploy()
  return {
    sut
  }
}

describe('GlobalVariables', () => {
  it('test', async () => {
    const { sut } = await makeSut()
    const [sender, timestamp, blockNum] = await sut.globalVars()
    expect(sender).to.exist
    expect(timestamp).to.exist
    expect(blockNum).to.exist

  })
})