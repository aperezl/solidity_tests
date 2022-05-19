const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('Counter')
  const sut = await Sut.deploy()
  return {
    sut
  }
}
describe('Counter', () => {
  
  it('ensure count return 0 when initializate contract', async () => {
    const { sut } = await makeSut()
    const count = await sut.count()
    expect(count).to.equal(0)
  })

  it('ensure count return 1 when inc Counter', async () => {
    const { sut } = await makeSut()
    await sut.inc()
    const count = await sut.count()
    expect(count).to.equal(1)
  })

  it('ensure count return 0 when dec Counter with count 0', async () => {
    const { sut } = await makeSut()
    await sut.dec()
    const count = await sut.count()
    expect(count).to.equal(0)
  })

  it('ensure count return 2 when dec Counter with count 3', async () => {
    const { sut } = await makeSut()
    await sut.inc()
    await sut.inc()
    await sut.inc()
    await sut.dec()
    const count = await sut.count()
    expect(count).to.equal(2)
  })
})