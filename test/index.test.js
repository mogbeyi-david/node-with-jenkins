const request = require("supertest");
const app = require("../index.js");



describe("GET /", function () {
    it("respond with hello world", async (done) => {
        //navigate to root and check the the response is "hello world"
        const result = await request(app).get("/");
        expect(result.body.message).toBe("hello world");
        done();
    });

    it("respond with hello world", async (done) => {
        //navigate to root and check the the response is "hello world"
        const result = await request(app).get("/");
        expect(result.body.status).toBe(200);
        done();
    });
});
