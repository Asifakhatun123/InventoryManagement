
import * as chai from 'chai';         
import chaiHttp from 'chai-http';     
import app from '../index.js';

chai.use(chaiHttp);                    
const { expect } = chai;

//  Add your real JWT token here
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzkyYTBjM2Y2ZWZmZjVkOGE1ODM2NSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0OTY5NjMxNiwiZXhwIjoxNzQ5NzgyNzE2fQ.uLe4vZ_JMR5bjBxBeDHki8ptcGqgPufmk7uCxu_Q64g';

//  Replace these IDs with existing ones in  DB
const categoryId = '683ac2ffab52849111a023cc';
const supplierId = '683acb194d81337330ac3abf';

describe('🧪 Product API Tests', () => {
  let createdProductId = null;

  //  Add product
  it('should create a new product', (done) => {
    chai
      .request(app)
      .post('/api/product/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        productName: 'Test Product 101',
        productDescription: 'Unit test product',
        price: 499,
        stock: 25,
        category: categoryId,
        supplier: supplierId,
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message').eql('Product added successfully');
        expect(res.body.product).to.have.property('_id');
        createdProductId = res.body.product._id;
        done();
      });
  });

  //  Get all products
  it('should fetch all products', (done) => {
    chai
      .request(app)
      .get('/api/product/all')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.products).to.be.an('array');
        done();
      });
  });

  //  Update product
  it('should update the product', (done) => {
    chai
      .request(app)
      .put(`/api/product/update/${createdProductId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        productName: 'Test Product 101 Updated',
        price: 599,
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.eql('Product updated successfully');
        done();
      });
  });

  //  Delete product
  it('should delete the product', (done) => {
    chai
      .request(app)
      .delete(`/api/product/delete/${createdProductId}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.eql('Product deleted successfully');
        done();
      });
  });
});
