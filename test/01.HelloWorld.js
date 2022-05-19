const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('HelloWorld', () => {
  it('deploy contract', async () => {
    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const sut = await HelloWorld.deploy()
    expect(await sut.myString()).to.equal('Hello World')

  })
})