const { calculator } = require("./testing-prac.js");
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