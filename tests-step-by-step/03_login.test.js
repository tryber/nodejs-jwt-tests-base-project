const chai = require('chai');
const sinon = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

const { MongoClient } = require('mongodb');
const { getConnection } = require('./connectionMock');

const server = require('../index');

describe('POST /api/login', () => {
  let connectionMock;

before(async () => {
  connectionMock = await getConnection();
  sinon.stub(MongoClient, 'connect').resolves(connectionMock);
});

after(async () => {
  MongoClient.connect.restore();
});

 describe('Quando não é passada pessoa usuária e senha', () => {
   let response;
   before(async () => {
     response = await chai.request(server)
     .post('/api/login')
     .send({});
   });
   
   it('retorna código de status "401"', () => {
     expect(response).to.have.status(401);
   });
   
   it('retorna um objeto no body', () => {
     expect(response.body).to.be.an('object');
   });
   
   it('objeto de resposta possui a propriedade "message"', () => {
     expect(response.body).to.have.property('message');
   });
   
   it('a propriedade "message" tem o valor "É necessário pessoa usuária e senha para fazer login"', () => {
     expect(response.body.message).to.be.equals('É necessário pessoa usuária e senha para fazer login');
   });
 });
 
 // describe('Quando pessoa usuária não existe ou senha é inválida', () => {
 //   before(async () => {
 //   });
   
 //   after(async () => {
 //   });
   
 //   it('retorna código de status "401"', () => {
 //   });
   
 //   it('retorna um objeto no body', () => {
 //   });
   
 //   it('objeto de resposta possui a propriedade "message"', () => {
 //   });
   
 //   it('a propriedade "message" tem o valor "Pessoa usuária não existe ou senha inválida"', () => {
 //   });
 // });
 
 // describe('Quando login é feito com sucesso', () => {
 //   before(async () => {
 //   });
   
 //   it('retorna código de status "200"', () => {
 //   });
   
 //   it('retorna um objeto no body', () => {
 //   });
   
 //   it('objeto de resposta possui a propriedade "message"', () => {
 //   });
   
 //   it('a propriedade "message" não está vazia', () => {
 //   });
 // });
});
