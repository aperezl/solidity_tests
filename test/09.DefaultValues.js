const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('DefaultValues')
  const sut = await Sut.deploy()
  return {
    sut
  }
}
describe('DefaultValues', () => {
  
  it('test', async () => {
    const { sut } = await makeSut()
    expect(await sut.b()).to.equal(false)
    expect(await sut.u()).to.equal(0)
    expect(await sut.i()).to.equal(0)
    expect(await sut.a()).to.equal('0x0000000000000000000000000000000000000000')
    expect(await sut.b32()).to.equal('0x0000000000000000000000000000000000000000000000000000000000000000')
  })
})