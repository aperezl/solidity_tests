const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('ValueTypes', () => {
  it('deploy contract', async () => {
    const ValueTypes = await ethers.getContractFactory('ValueTypes')
    const sut = await ValueTypes.deploy()
    expect(await sut.b()).to.equal(true)
    expect(await sut.u()).to.equal(123);
    expect(await sut.i()).to.equal(-123);
    expect(sut.minInt).to.exist
    expect(sut.maxInt).to.exist
    expect(await sut.addr()).to.equal('0x1234567890123456789012345678901234567890')
    expect(await sut.b32()).to.equal(ethers.utils.formatBytes32String(''))
  })
})