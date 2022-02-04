//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

//Require the dev-dependencies
let chai = require('chai') //accertion library that works with mocha
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp);

//parent block describes what is benig tested as a whole
describe("Stocks", () => {
    //subdescribe describes what is being tested individually
    describe('/GET Stocks', () => {
        it('it should be able to access get /stocks', (done) => {
            chai.request(server).get('/stocks')
            .end((err, res) => {
                res.should.have.status(200)
                done();
            })
        })
        it('should have all stocks', (done) => {
            chai.request(server).get('/stocks')
            .end((err, res) => {
                Object.keys(res.body).length.should.be.eql(4143)
                done();
            })
        })
    })
})