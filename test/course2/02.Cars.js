const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')

describe('02.Cars', () => {
  it('test', async () => {
    const { sut } = await makeSut('Cars', [10])
    const [owner, addr1] = await getAccounts()
    console.log(await sut.getIds())
    await sut.addCar(1, 'Audi', 300, 30000, { value: 10 })
    await sut.connect(addr1).addCar(2, 'Toyota', 200, 12000, { value: 10 })
    console.log(await sut.getIds())
    console.log(await sut.getCar())
    console.log(await sut.connect(addr1).getCar())
  })
})