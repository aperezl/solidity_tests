const { expect } = require("chai");
const { makeSut } = require('./util')


describe('GlobalVariables', () => {
  it('test', async () => {
    const { sut } = await makeSut('GlobalVariables')
    const [sender, timestamp, blockNum] = await sut.globalVars()
    expect(sender).to.exist
    expect(timestamp).to.exist
    expect(blockNum).to.exist

  })
})