let app = require('./server');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

chai.request(app)
.get('/')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'Hello Armstrong!', "Response did not have the correct text")
        console.log('All tests for "Hello Armstrong" have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/1')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/1' did not have the correct text")
        console.log('All tests for route /1 have passed')
        return
    }
})

chai.request(app)
.get('/2')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/2' did not have the correct text")
        console.log('All tests for route /2 have passed')
        return
    }
})

chai.request(app)
.get('/3')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/3' did not have the correct text")
        console.log('All tests for route /3 have passed')
        return
    }
})

chai.request(app)
.get('/4')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/4' did not have the correct text")
        console.log('All tests for route /4 have passed')
        return
    }
})

chai.request(app)
.get('/5')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/5' did not have the correct text")
        console.log('All tests for route /5 have passed')
        return
    }
})

chai.request(app)
.get('/6')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/6' did not have the correct text")
        console.log('All tests for route /6 have passed')
        return
    }
})

chai.request(app)
.get('/7')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/7' did not have the correct text")
        console.log('All tests for route /7 have passed')
        return
    }
})

chai.request(app)
.get('/8')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/8' did not have the correct text")
        console.log('All tests for route /8 have passed')
        return
    }
})
chai.request(app)
.get('/9')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/9' did not have the correct text")
        console.log('All tests for route /9 have passed')
        return
    }
})

chai.request(app)
.get('/153')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/153' did not have the correct text")
        console.log('All tests for route /153 have passed')
        return
    }
})

chai.request(app)
.get('/370')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/370' did not have the correct text")
        console.log('All tests for route /370 have passed')
        return
    }
})

chai.request(app)
.get('/371')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/371' did not have the correct text")
        console.log('All tests for route /371 have passed')
        return
    }
})

chai.request(app)
.get('/407')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/407' did not have the correct text")
        console.log('All tests for route /407 have passed')
        return
    }
})

chai.request(app)
.get('/1634')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/1634' did not have the correct text")
        console.log('All tests for route /1634 have passed')
        return
    }
})

chai.request(app)
.get('/8208')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/8208' did not have the correct text")
        console.log('All tests for route /8208 have passed')
        return
    }
})

chai.request(app)
.get('/9474')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'true', "Response for '/9474' did not have the correct text")
        console.log('All tests for route /9474 have passed')
        return
    }
})