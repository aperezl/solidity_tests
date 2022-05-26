const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')

describe('03.Lottery', () => {
  it('test', async () => {
    const { sut } = await makeSut('Lottery', [5, 10])
    const [owner, addr1] = await getAccounts()
    const result = await sut.connect(addr1).callStatic.participate({ value: 10 })
    console.log(result)
  })
})