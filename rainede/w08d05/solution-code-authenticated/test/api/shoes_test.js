require('../spec_helper');

const Shoe = require('../../models/shoe');
const User = require('../../models/user');

let token;

describe('Shoe tests', () => {

  beforeEach(done => {
    Shoe.collection.remove();
    done();
  });

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/shoes', () => {

    beforeEach(done => {
      const shoe = new Shoe({
        brand: 'Nike',
        color: 'Black',
        laced: true,
        material: 'leather',
        price: 49.99
      });
      shoe.save((err, shoe) => {
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get('/api/shoes')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api.get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of shoes', done => {
      api.get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of shoe objects', done => {
      api.get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'brand',
              'color',
              'laced',
              'material',
              'price',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('todo objects should have properities: _id, brand, color, laced, material, price, createdAt, updatedAt', done => {
      api.get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstShoe = res.body[0];

          expect(firstShoe)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(firstShoe)
            .to.have.property('brand')
            .and.to.be.a('string');

          expect(firstShoe)
            .to.have.property('color')
            .and.to.be.a('string');

          expect(firstShoe)
            .to.have.property('laced')
            .and.to.be.a('boolean');

          expect(firstShoe)
            .to.have.property('material')
            .and.to.be.a('string');

          expect(firstShoe)
            .to.have.property('price')
            .and.to.be.a('number');

          expect(firstShoe)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(firstShoe)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });
    });
  });

  describe('POST /api/shoes without token', () => {

    it('should return a 401 response', done => {
      api.post('/api/shoes')
        .set('Accept', 'application/json')
        .send({
          shoe: {
            brand: 'Nike',
            color: 'Black',
            laced: true,
            material: 'leather',
            price: 49.99
          }
        }).expect(401, done);
    });

  });

  describe('POST /api/shoes with token', () => {

    beforeEach(done => {
      const user = new User({
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      });

      user.save((err, user) => {
        api.post('/api/login')
          .set('Accept', 'application/json')
          .send({
            email: 'test@test.com',
            password: 'password'
          }).end((err, res) => {
            token = res.body.token;
            done();
          });
      });
    });

    it('should return a 201 response', done => {
      api.post('/api/shoes')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          shoe: {
            brand: 'Nike',
            color: 'Black',
            laced: true,
            material: 'leather',
            price: 49.99
          }
        }).expect(201, done);
    });
  });

  describe('GET /api/shoes/:id', () => {

    let shoe;

    beforeEach(done => {
      shoe = new Shoe({
        brand: 'Nike',
        color: 'Black',
        laced: true,
        material: 'leather',
        price: 49.99
      });

      shoe.save((err, shoe) => {
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get(`/api/shoes/${shoe.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('DELETE /api/shoes/:id without token', () => {

    let shoe;

    beforeEach(done => {
      shoe = new Shoe({
        brand: 'Nike',
        color: 'Black',
        laced: true,
        material: 'leather',
        price: 49.99
      });

      shoe.save((err, shoe) => {
        done();
      });
    });

    it('should return a 401 response', done => {
      api.delete(`/api/shoes/${shoe.id}`)
        .set('Accept', 'application/json')
        .expect(401, done);
    });

  });

  describe('DELETE /api/shoes/:id with token', () => {

    beforeEach(done => {
      const user = new User({
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      });

      user.save((err, user) => {
        api.post('/api/login')
          .set('Accept', 'application/json')
          .send({
            email: 'test@test.com',
            password: 'password'
          }).end((err, res) => {
            token = res.body.token;
            done();
          });
      });
    });

    it('should return a 204 response', done => {
      const shoe = new Shoe({
        brand: 'Nike',
        color: 'Black',
        laced: true,
        material: 'leather',
        price: 49.99
      });

      shoe.save((err, shoe) => {
        api.delete(`/api/shoes/${shoe.id}`)
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect(204, done);
      });
    });
  });

});
