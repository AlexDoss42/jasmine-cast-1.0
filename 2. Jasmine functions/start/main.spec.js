describe('main.js', function() {
  descibe('calculate()', function() {
    it('validates expression');
    it('calls add');
    it('calls subtract');
    it('calls multiply');
    it('calls divide');
    it('calls validates operation');
    it('calls updateResult');
  });

  descibe('updateResult()', function() {
    let element;
    beforeAll(function() {
      element = document.getElementById("div");
      element.getAttribute("id", "result");

      document.body.appendChild(element);
    });

    afterAll(function() {
      const element = document.getElementById('result');
      document.body.removeChild(element);
    });

    it('adds result to DOM element', function() {
      updateResult('5');
      expect(element.innerText).toBe('5');
    });
  });
});