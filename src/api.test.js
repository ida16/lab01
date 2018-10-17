//const require = require("supertest");

const request = require("supertest");
const api = require("../app");

describe("GET /greeting/:name endpoint", () => {
    it("should return a 200 OK status code", async() => {
        const res = await request(api).get("/greeting/_");
        //console.log(re.status);
        expect(res.status).toBe(200);
    });

});


/*Efsta línan var fyrst, bætti við "../app" í staðinn fyrir einn punkt og kommentaði út console log*/

/*    it("should return the greeting in a object", async () => {
        const res = await request(api).get("/greeting/Diana");
        expect(res.body.greeting).toBe("Hello, Diana!");
    });*/