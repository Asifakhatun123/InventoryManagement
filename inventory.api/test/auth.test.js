// test/auth.test.js

import * as chai from 'chai';          
import chaiHttp from 'chai-http';    
import app from '../index.js';

chai.use(chaiHttp);                    
const { expect } = chai;

describe('POST /api/auth/login', () => {
  it('should login successfully with valid credentials', (done) => {
    chai
      .request(app)
      .post('/api/auth/login')
     .send({
              email: 'admin@gmail.com',
               password: 'admin123', 
       })
      .end((err, res) => {
        console.log(" Response body:");
        console.log(res?.body);
        console.log(" Error (if any):", err);

        try {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').eql('Login successful');
          expect(res.body).to.have.property('token');
          done();
        } catch (error) {
          done(error); 
        }
      });
  });
});



