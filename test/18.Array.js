const { expect } = require("chai");
const { makeSut } = require('./util')

describe.only('Array ', () => {
  
  it('push', async () => {
    const { sut } = await makeSut('Array')
    await sut.pushNum()
    const nums = await sut.getNums()
    expect(nums[0]).to.equal(1)
    expect(nums[1]).to.equal(2)
    expect(nums[2]).to.equal(3)
    expect(nums[3]).to.equal(4)
  })

  it('delete', async () => {
    const { sut } = await makeSut('Array')
    await sut.deleteNum()
    const nums = await sut.getNums()
    expect(nums[0]).to.equal(1)
    expect(nums[1]).to.equal(0)
    expect(nums[2]).to.equal(3)
  })

  it('pop', async () => {
    const { sut } = await makeSut('Array')
    await sut.popNum()
    const nums = await sut.getNums()
    expect(nums[0]).to.equal(1)
    expect(nums[1]).to.equal(2)
    expect(nums.length).to.equal(2)
  })

  it('length', async () => {
    const { sut } = await makeSut('Array')
    await sut.lengthNum()
    const nums = await sut.getNums()
    expect(nums.length).to.equal(3)
  })

  it('array in memory', async () => {
    const { sut } = await makeSut('Array')
    const nums = await sut.inMemoryArray()
    expect(nums.length).to.equal(5)
    expect(nums[0]).to.equal(1)
    expect(nums[1]).to.equal(2)
    expect(nums[2]).to.equal(3)
  })
})