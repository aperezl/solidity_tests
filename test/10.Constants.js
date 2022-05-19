const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('Constants')
  const sut = await Sut.deploy()
  return {
    sut
  }
}
describe('Constants', () => {
  
  it('test', async () => {
    const { sut } = await makeSut()
    expect(await sut.MY_ADRRESS()).to.equal('0x1234567890123456789012345678901234567890')
    expect(await sut.MY_UINT()).to.equal(123)
  })
})