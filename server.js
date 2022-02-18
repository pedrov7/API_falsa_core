const express = require('express');
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');
// const fs = require('fs');


class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.gender = faker.name.gender();
        this.job = faker.name.jobArea();
    }
}

class Companies {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
    }
}

class Company {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.gender = faker.name.gender();
        this.job = faker.name.jobArea();
        this.name = faker.commerce.productName();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
    }
}





app.get('/api/users/new', (req, res) => {
    res.json(new User());
    console.log("User API has been called");
});

app.get('/api/companies/new', (req, res) => {
    res.json(new Companies());
    console.log("Companies API has been called");
});

app.get('/api/user/company', (req, res) => {
    res.json({
        user: new User(),
        company:new Companies()
    });
    console.log("Company API has been called");
});



app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});