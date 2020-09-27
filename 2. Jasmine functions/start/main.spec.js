describe('main.js', function() {
  descibe('calculate()', function() {
    it('validates expression when the first number is invalid', function() {
      spyOn(window, 'updateResult').and.stub();

      calculate('a+3');

      expect(window.updateResult).toHaveBeenCalled();
    });

    it('validates expression when the second number is invalid', function() {
      spyOn(window, 'updateResult');

      calculate('3+a');

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
    });

    it('validates expression when operation is invalid', function() {
      spyOn(window, 'updateResult');

      calculate('3_4');

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
    });

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