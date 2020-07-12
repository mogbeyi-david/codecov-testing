const functions =  require(".");

describe("", () => {
    it("should return the addition of two numbers", () => {
        expect(functions.add(2, 3)).toEqual(5)
    });


    it("should return the addition of two numbers", () => {
        expect(functions.getDifference(2, 3)).toEqual(1)
    });


    it("should return the addition of two numbers", () => {
        expect(functions.multiply(2, 3)).toEqual(6)
    });

    it("should return the addition of two numbers", () => {
        expect(functions.getQuotient(6, 3)).toEqual(2)
    });
});
