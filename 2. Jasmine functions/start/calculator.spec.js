describe('calculator.js', function() {
  it('should add numbers to total', function() {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  it('should subtract numbers to total', function() {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);

    expect(calculator.total).toBe(25);
  });

  it('should multiply total by number', function() {

  });

  it('should divide total by number', function() {

  });
});

