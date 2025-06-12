import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);
const { expect } = chai;

//  Use  login token 
const token = 'token_here';

describe(' Category API Tests', () => {
  let createdCategoryId = null;

  //  Add a new category
  it('should create a new category', (done) => {
    chai
      .request(app)
      .post('/api/category/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        categoryName: 'Test Category 001',
        categoryDescription: 'This is a test category',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message', 'Category added successfully');
        createdCategoryId = res.body.category?._id; 
        done();
      });
  });

  //  Get all categories
  it('should fetch all categories', (done) => {
    chai
      .request(app)
      .get('/api/category/all')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.categories).to.be.an('array');
        done();
      });
  });

  //  Update the category
  it('should update the category', (done) => {
    chai
      .request(app)
      .put(`/api/category/update/${createdCategoryId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        categoryName: 'Updated Test Category',
        categoryDescription: 'Updated description',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Category updated successfully');
        done();
      });
  });

  //  Delete the category
  it('should delete the category', (done) => {
    chai
      .request(app)
      .delete(`/api/category/delete/${createdCategoryId}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Category deleted successfully');
        done();
      });
  });
});
