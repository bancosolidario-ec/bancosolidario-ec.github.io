describe("titleCase", function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("keeps the first letter of word capitalized if it already is capitalized", function() {
        expect(titleCase("Cat")).to.equal("Cat");
    });

    it("capitalizes the first letter of each word in a two-word string", function() {
        expect(titleCase("cat hat")).to.equal("Cat Hat");
        });

    it("does not capitalize article 'the'", function() {
        expect(titleCase("cat the")).to.equal("Cat the");
    });

    it("does not capitalize articles 'a' or 'an'", function() {
        expect(titleCase("cat the")).to.equal("Cat the");
    });

    it("does not capitalize conjunctions 'and' and 'with'", function() {
        expect(titleCase("cat the with hat and")).to.equal("Cat the with Hat and");
    });

    it("capitalizes articles and conjunctions when they are the first word of a sentence", function() {
        expect(titleCase("the cat with the hat")).to.equal("The Cat with the Hat");
    });
});
