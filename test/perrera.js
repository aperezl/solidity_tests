const { expect } = require("chai");
const { ethers } = require("hardhat");

describe.skip("Perrera", () => {
  it("Test 1", async () => {
    const Perrera = await ethers.getContractFactory("Perrera")
    const perrera = await Perrera.deploy()
    await perrera.deployed()
    const accounts = await ethers.getSigners()
    console.log(accounts[0].address)
    const [owner, addr1, addr2] = await ethers.getSigners()
    await perrera.connect(addr1).subscribe("user1", "1", 50)
    await perrera.connect(addr2).subscribe("user2", "2", 50)

    // await perrera.connect(addr1).getData()
    // await perrera.connect(addr2).getData()
    
    await perrera.connect(addr1).subscribeDog('dog1', 'breed', 1, 50)
    await perrera.connect(addr2).subscribeDog('dog2', 'breed', 2, 50)

    const dog = await perrera.connect(addr2).getDogData()
    console.log({ dog })
  })
})
