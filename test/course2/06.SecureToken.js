const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')

describe('06.SecureToken', () => {
  it('deploy contract should assign totalSupply to owner account', async () => {
    const [owner] = await getAccounts()
    const { sut } = await makeSut('SecureToken')
    const totalSupply = ethers.BigNumber.from('1000000' + Array(18).fill(0).join(''))
    expect(await sut.name()).to.be.equal('MyToken')
    expect(await sut.symbol()).to.be.equal('MT')
    expect(await sut.decimals()).to.be.equal(18)
    expect(await sut.totalSupply()).to.be.equal(totalSupply)
    expect(await sut.balanceOf(owner.address)).to.be.equal(totalSupply)
  })

  it('Owner can transfer 10 MC to addr1', async () => {
    const [owner, addr1] = await getAccounts()
    const { sut } = await makeSut('SecureToken')
    await sut.transfer(addr1.address, ethers.BigNumber.from('10' + Array(18).fill(0).join('')))
    expect(await sut.balanceOf(owner.address)).to.be.equal(ethers.BigNumber.from('999990000000000000000000'))
    expect(await sut.balanceOf(addr1.address)).to.be.equal(ethers.BigNumber.from('10000000000000000000'))
  })

  it('Addr1 can allow onwer', async () => {
    const [owner, addr1, addr2] = await getAccounts()
    const { sut } = await makeSut('SecureToken')
    await sut.connect(addr1).approve(owner.address, ethers.BigNumber.from('50000000000000000000'))
    await sut.transfer(addr1.address, ethers.BigNumber.from('50000000000000000000'))
    await sut.transferFrom(addr1.address, addr2.address, ethers.BigNumber.from('50000000000000000000'))
    expect(await sut.balanceOf(owner.address)).to.be.equal(ethers.BigNumber.from('999950000000000000000000'))
    expect(await sut.balanceOf(addr1.address)).to.be.equal(ethers.BigNumber.from('0'))
    expect(await sut.balanceOf(addr2.address)).to.be.equal(ethers.BigNumber.from('50000000000000000000'))
  })
  it('withdraw dividen', async () => {
    const [owner, addr1, addr2] = await getAccounts()
    const { sut } = await makeSut('SecureToken')
    await sut.deposit({ value: ethers.BigNumber.from('30000000000000000000') })
    await sut.transfer(addr1.address, ethers.BigNumber.from('10000000000000000000'))
    await sut.transfer(addr2.address, ethers.BigNumber.from('20000000000000000000'))
    expect(await sut.balanceOf(owner.address)).to.be.equal(ethers.BigNumber.from('999970000000000000000000'))
    expect(await sut.balanceOf(addr1.address)).to.be.equal(ethers.BigNumber.from('10000000000000000000'))
    expect(await sut.balanceOf(addr2.address)).to.be.equal(ethers.BigNumber.from('20000000000000000000'))
    await sut.connect(addr1).withdraw()
    expect(await owner.getBalance()).to.lt(ethers.BigNumber.from('10000000000000000000000'))
    expect(await addr1.getBalance()).to.gt(ethers.BigNumber.from('10000000000000000000000'))
    expect(await addr2.getBalance()).to.equal(ethers.BigNumber.from('10000000000000000000000'))
  })
})
