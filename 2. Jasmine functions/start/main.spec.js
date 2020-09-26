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
    beforeAll(function() {
      const element = document.getElementById("div");
      element.getAttribute("id", "result");

      document.body.appendChild(element);
      this.element = element;
    });

    afterAll(function() {
      document.body.removeChild(element);
    });

    it('adds result to DOM element', function() {
      updateResult('5');
      expect(this.element.innerText).toBe('5');
    });
  });
});