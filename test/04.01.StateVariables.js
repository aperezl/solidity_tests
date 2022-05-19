const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('StateVariables')
  const sut = await Sut.deploy()
  return {
    sut
  }
}

describe('StateVariables', () => {
  it('test', async () => {
    const { sut } = await makeSut()
    expect(await sut.myUint()).to.equal(123)
  })
})