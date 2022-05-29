const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')

describe('05.TokenSale', () => {
  it('test', async () => {
    const { sut: coin } = await makeSut('Coin')
    console.log(coin.address)
    const { sut } = await makeSut('TokenSale', [100, coin.address])
    const [owner, addr1] = await getAccounts()
    await coin.transfer(sut.address, ethers.BigNumber.from('500' + Array(18).fill(0).join('')))
    console.log(addr1.address)
    await sut.connect(addr1).buy(10, { value: 1000 })
    expect(await coin.balanceOf(addr1.address)).to.be.equal(ethers.BigNumber.from('10000000000000000000'))
    expect(await coin.balanceOf(owner.address)).to.be.equal(ethers.BigNumber.from('999500000000000000000000'))

    console.log(await addr1.getBalance())
    console.log(await owner.getBalance())
    await sut.endSold()
    console.log(await owner.getBalance())
    console.log(sut)
    
  })

})
