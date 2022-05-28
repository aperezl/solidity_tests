const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')

describe('04.Coin', () => {
  it('deploy contract should assign totalSupply to owner account', async () => {
    const [owner] = await getAccounts()
    const { sut } = await makeSut('Coin')
    const totalSupply = ethers.BigNumber.from('1000000' + Array(18).fill(0).join(''))
    expect(await sut.name()).to.be.equal('MyCoin')
    expect(await sut.symbol()).to.be.equal('MC')
    expect(await sut.decimals()).to.be.equal(18)
    expect(await sut.totalSupply()).to.be.equal(totalSupply)
    expect(await sut.balanceOf(owner.address)).to.be.equal(totalSupply)
  })

  it('Owner can transfer 10 MC to addr1', async () => {
    const [owner, addr1] = await getAccounts()
    const { sut } = await makeSut('Coin')
    await sut.transfer(addr1.address, ethers.BigNumber.from('10' + Array(18).fill(0).join('')))
    expect(await sut.balanceOf(owner.address)).to.be.equal(ethers.BigNumber.from('999990000000000000000000'))
    expect(await sut.balanceOf(addr1.address)).to.be.equal(ethers.BigNumber.from('10000000000000000000'))
  })

  it('Addr1 can allow onwer', async () => {
    const [owner, addr1, addr2] = await getAccounts()
    const { sut } = await makeSut('Coin')
    await sut.connect(addr1).approve(owner.address, ethers.BigNumber.from('50000000000000000000'))
    await sut.transfer(addr1.address, ethers.BigNumber.from('50000000000000000000'))
    await sut.transferFrom(addr1.address, addr2.address, ethers.BigNumber.from('50000000000000000000'))
    expect(await sut.balanceOf(owner.address)).to.be.equal(ethers.BigNumber.from('999950000000000000000000'))
    expect(await sut.balanceOf(addr1.address)).to.be.equal(ethers.BigNumber.from('0'))
    expect(await sut.balanceOf(addr2.address)).to.be.equal(ethers.BigNumber.from('50000000000000000000'))

  })
})
