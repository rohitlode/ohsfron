const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');

//Assertions
chai.should();

chai.use(chaiHttp);


describe('Doctors API ', () => {

// TEST GET ALL DOCTORS
    describe("GET /api/doctors/", () => {
        it("It should get all the doctors ", (done) => {
            chai.request(server)
            .get("/api/doctors")
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(18);
            done();
            })
        })
    })

//

// TEST GET DOCTOR BY ID

describe("GET /api/doctors/:id", () => {
    it("It should get doctor by doctor ID ", (done) => {
        const did = "607a25cd7d53bf68d31c5ba4"
        chai.request(server)
        .get("/api/doctors/"+did)
        .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('_id');
            response.body.should.have.property('qualifications');
            response.body.should.have.property('specialities');
            response.body.should.have.property('practiceStartDate');
            response.body.should.have.property('dob');
            response.body.should.have.property('address');
            response.body.should.have.property('email');
            response.body.should.have.property('_id').eq(did)
        done();
        })
    })



    it("It should throw a error when doctor ID not found", (done) => {
        const did = "607ba857b1f134234f056e3efd"
        chai.request(server)
        .get("/api/doctors"+did)
        .end((error, response) => {
            response.should.have.status(404);
        done();
        })
    })


});


//TEST POST ROUTES

describe("POST /api/doctors", () => {
    it("It should add a doctor to the database", (done) => {
        const doctor = {
                "name": {"first": "Kamine", "last": "DDD"},
                "email": "paulduminy@gmail.com"
        };
        chai.request(server)
        .post("/api/doctors")
        .send(doctor)
        .end((error, response) => {
            response.should.have.status(201);
            response.should.be.a('object')
        done();
        }) //CHAI END
    })//IT END
}); //DESCRIBE END



//TEST PATCH ROUTES
describe("PATCH /api/doctors/:id", () => {
    it("It should update a doctor given doctor ID ", (done) => {
        const did = "607a26c17d53bf68d31c5ba5"
        const doctor = {
            "mobile": 5126186687
        };
        chai.request(server)
        .patch("/api/doctors/"+did)
        .send(doctor)
        .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('mobile').eq(5126186687)
        done();
        })
    });

});




//TEST DELETE ROUTES
describe("DELETE /api/doctors/:id", () => {
    it("It should get doctor by doctor ID ", (done) => {
        const did = "608893a45ce60673a45118fb"
        chai.request(server)
        .delete("/api/doctors/"+did)
        .end((error, response) => {
            response.should.have.status(200);
        done();
        })
    });

});



});


