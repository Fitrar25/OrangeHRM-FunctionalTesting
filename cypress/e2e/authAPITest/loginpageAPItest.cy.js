describe('Fake Store API - 12 Request (Mixed Methods)', () => {
  const baseUrl = 'https://api.escuelajs.co/api/v1'

  it('TC-01 GET categories', () => {
    cy.request('GET', `${baseUrl}/categories`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0]).to.have.property('name')
    })
  })

  it('TC-02 GET category by ID', () => {
    cy.request('GET', `${baseUrl}/categories/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('name')
    })
  })

  it('TC-03 POST new category', () => {
    cy.request('POST', `${baseUrl}/categories`, {
      name: 'Test Category lagi dan lagi',
      image: 'image.jpg'
    }).then((response) => {
      expect(response.status).to.eq(201) // created
      expect(response.body).to.have.property('name', 'Test Category lagi dan lagi')
      expect(response.body).to.have.property('id')
    })
  })


  it('TC-04 DELETE category', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/categories/5`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204, 404])
    })
  })

  it('TC-05 GET products', () => {
    cy.request('GET', `${baseUrl}/products`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0]).to.have.property('title')
      expect(response.body[0]).to.have.property('price')
    })
  })

  it('TC-06 POST product', () => {
    cy.request('POST', `${baseUrl}/products`, {
      title: 'New Product lagi dan lagi',
      price: 99,
      description: 'A product created by lagi dan lagi',
      categoryId: 1,
      images: ['product.jpg']
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', 'New Product lagi dan lagi')
      expect(response.body).to.have.property('price', 99)
      expect(response.body).to.have.property('id')
    })
  })

  it('TC-07 DELETE product', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/products/10`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204, 404])
    })
  })

  it('TC-08 GET users', () => {
    cy.request('GET', `${baseUrl}/users`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0]).to.have.property('name')
      expect(response.body[0]).to.have.property('email')
    })
  })

  it('TC-09 POST user', () => {
    cy.request('POST', `${baseUrl}/users`, {
      name: 'lagi dan lagi User',
      email: `lagi dan lagi userlaginih@example.com`,
      password: 'password123',
      avatar: 'avatar.jpg'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name', 'lagi dan lagi User')
      expect(response.body).to.have.property('email')
      expect(response.body).to.have.property('id')
    })
  })

    it('TC-10 DELETE user', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/10`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204, 404])
    })
  })

  it('TC-11 GET locations', () => {
    cy.request('GET', `${baseUrl}/locations`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      expect(response.body[0]).to.have.property('id')
    })
  })
  
  it('TC-12 check available email', () => {
    cy.request('GET', `${baseUrl}/users/is-available`, {
        email: 'panda@example.com'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('isAvailable')
    })
  })

})