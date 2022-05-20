const { expect } = require("chai");
const { makeSut } = require('./util')


describe('HelloWorld', () => {
  it('deploy contract', async () => {
    const { sut } = await makeSut('HelloWorld')
    expect(await sut.myString()).to.equal('Hello World')

  })
})