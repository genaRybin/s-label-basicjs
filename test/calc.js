it('Calc test', function (done) {
	var calc = new Calc();
	expect(calc.result).toBe(0);
	calc.add(5);
	expect(calc.result).toBe(5);
	done();
});