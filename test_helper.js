let dotenv = require('dotenv');
dotenv.load();

process.env.NODE_ENV = 'test';

let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe('test user case', () => {
  it('should return true', function(done) {
    expect(userModel.validatePassword(true).to.be.true 
    done()
    
  })
})
