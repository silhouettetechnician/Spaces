process.env.NODE_ENV = 'test'

const chai = require('chai')
const supertest = require('supertest')
const app = require('../index')

global.should = chai.should()
global.expect = chai.expect
global.api = supertest(app)
