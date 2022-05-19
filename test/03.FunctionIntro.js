const { expect } = require("chai");
const { ethers } = require("hardhat");

const makeSut = async () => {
  const Sut = await ethers.getContractFactory('FunctionIntro')
  const sut = await Sut.deploy()
  return {
    sut
  }
}

describe('Function Intro', async  () => {
  
  it('should return 3 when params are 1 and 2', async () => {
    const { sut } = await makeSut()
    expect(await sut.add(1, 2)).to.equal(3)
  })

  it('should return 2 when params are 3 and 1', async () => {
    const { sut } = await makeSut()
    expect(await sut.sub(3, 1)).to.equal(2)
  })
})