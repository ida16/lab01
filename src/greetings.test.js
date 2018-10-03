//greetings.test.js

const greetings = require('./greetings');

test("returns greetings with custom name", () => {
    expect(greetings("Bei")).toBe("hello, Mei!");
});