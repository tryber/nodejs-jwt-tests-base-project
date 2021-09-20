 const chai = require('chai');
 const sinon = require('sinon');
 
 const chaiHttp = require('chai-http');
 chai.use(chaiHttp);
 
 const { expect } = chai;
 
 const server = require('../index');
 
 describe('POST /api/login', () => {
  describe('Quando não é passada pessoa usuária e senha', () => {
    before(async () => {
    });

    after(async () => {
    });
    
    it('retorna código de status "401"', () => {
    });
    
    it('retorna um objeto no body', () => {
    });
    
    it('objeto de resposta possui a propriedade "message"', () => {
    });
    
    it('a propriedade "message" tem o valor "É necessário pessoa usuária e senha para fazer login"', () => {
    });
  });
  
  describe('Quando pessoa usuária não existe ou senha é inválida', () => {
    before(async () => {
    });
    
    after(async () => {
    });
    
    it('retorna código de status "401"', () => {
    });
    
    it('retorna um objeto no body', () => {
    });
    
    it('objeto de resposta possui a propriedade "message"', () => {
    });
    
    it('a propriedade "message" tem o valor "Pessoa usuária não existe ou senha inválida"', () => {
    });
  });
  
  describe('Quando login é feito com sucesso', () => {
    before(async () => {
    });
    
    it('retorna código de status "200"', () => {
    });
    
    it('retorna um objeto no body', () => {
    });
    
    it('objeto de resposta possui a propriedade "message"', () => {
    });
    
    it('a propriedade "message" não está vazia', () => {
    });
  });
});
