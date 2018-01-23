Object.defineProperty(global.Image.prototype, "onload", {
  get: function() {
    return this._onload;
  },
  set: function(fn) {
    this._onload = fn;
    fn();
  }
});
