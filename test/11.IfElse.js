const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('IfElse')
  const sut = await Sut.deploy()
  return {
    sut
  }
}
describe('IfElse', () => {
  
  it('test example function', async () => {
    const { sut } = await makeSut()
    expect(await sut.example(5)).to.equal(1)
    expect(await sut.example(15)).to.equal(2)
    expect(await sut.example(25)).to.equal(3)
  })

  it('test ternary function', async () => {
    const { sut } = await makeSut()
    expect(await sut.ternary(5)).to.equal(1)
    expect(await sut.ternary(15)).to.equal(2)
  })
})