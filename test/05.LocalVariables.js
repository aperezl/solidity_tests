const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('LocalVariables')
  const sut = await Sut.deploy()
  return {
    sut
  }
}

describe('LocalVariables', () => {
  it('test', async () => {
    const { sut } = await makeSut()
    expect(await sut.i()).to.equal(0)
    expect(await sut.b()).to.equal(false)
    expect(await sut.myAddress()).to.equal('0x0000000000000000000000000000000000000000')    
    await sut.foo()
    expect(await sut.i()).to.equal(123)
    expect(await sut.b()).to.equal(true)
    expect(await sut.myAddress()).to.equal('0x0000000000000000000000000000000000000001')     
  })
})