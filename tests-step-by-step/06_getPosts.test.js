const chai = require('chai');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

const server = require('../index');

describe('GET /api/posts', () => {
  describe('Quando não é passado um JWT para autenticação', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
      .get('/api/posts')
      .set('authorization', '');
    });
    
    it('retorna código de status "401"', () => {
      expect(response).to.have.status(401);
    });
    
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    
    it('objeto de resposta possui a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });
    
    it('a propriedade "error" possui a mensagem "Token não encontrado ou informado"', () => {
      expect(response.body.error).to.be.equal('Token não encontrado ou informado');
    });
  });
});