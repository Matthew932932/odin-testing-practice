const { sum, mult, capitalize, reverseString, cypher, calculator, arrayAnal } = require("./testing-prac.js");
//really interestingly something (VS, babel module??) auto 
//included the above line when I entered in console log for 
//calculator. just require("./testing-prac.js") was enough 
//for the ones pointing to the functions but not for the 
//functions within the calc obj... hmm ok seems I only need 
//to export calculator because I suppose it is contained in 
//an object. And somehwo calling require provides ref to the 
//other functions even though I am not exporting them and = the 
//require directly to const {calculator}
//??? strange quirk for mine...
//tested changing mult to a function and not a refernece to 
//an arrow and it needs to be exported??
//^^^^^^^^^SOLVED!! : it is because I wasn't declaring const 
//in front of the arrow function declaration. I still don't
//know why it is accessible if not given a type but I would guess
//it's absolutely not good practise


//require("./testing-prac.js");

//multLoc = myModule.mult;
//console.log(calculator);


test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("mult 2 x 2 to equal 4", () => {
  expect(mult(2, 2)).toBe(4);
});

test("capitalize", () => {
  expect(capitalize("bobby")).toBe("Bobby");
});

test("reverse string", () => {
  expect(reverseString("bobby")).toBe("ybbob");
});

test("sum Ob", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("cypher", () => {
  expect(cypher("abc",3)).toBe("def");
})

// test("cypher2", () => {
//   expect(cypher("def",3)).toBe("ghi");
// })

// test("cypher3", () => {
//   expect(cypher("xyz",3)).toBe("abc");
// })

test("cypher4", () => {
  expect(cypher("GronkNuTs",3)).toBe("JurqnQxWv");
})

test("Array Anal", () => {
  expect(arrayAnal([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
})