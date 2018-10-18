//greeting.test.js

const greeting = require('./greeting');

test("returns greeting with custom name", () => {
    expect(greeting("Diana")).toBe("Hello, Diana!");
});