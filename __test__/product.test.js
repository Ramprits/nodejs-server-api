const request = require("supertest")
const app = require("../src/app")

describe('Test GET request of /product api', () => {
    test('should return 200 OK', async () => {
        const response = await request(app)
            .get("/product")
            .expect("Content-Type", /json/)
            .expect(200)
    })
})