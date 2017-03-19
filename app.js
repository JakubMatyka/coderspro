Date.prototype.addDay = function () {
  return new Date(this.setDate(this.getDate() + 1));
};

var now = new Date();

now.addDay();