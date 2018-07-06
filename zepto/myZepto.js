(function(window) {
  var zepto = {};

  function Z(dom, selector) {
    var index,
      len = dom.length ? dom.length : 0;
    for (index = 0; index < len; index++) {
      this[index] = dom[index];
    }
    this.selector = selector;
    this.length = len;
  }

  zepto.Z = function(dom, selector) {
    return new Z(dom, selector);
  };

  zepto.init = function(selector) {
    var slice = Array.prototype.slice;
    var dom = slice.call(document.querySelectorAll(selector));
    return zepto.Z(dom, selector);
  };

  var $ = function(selector) {
    return zepto.init(selector);
  };

  $.fn = {
    css: function(style, value) {
      console.log(this)
      alert(style + ',' + value);
    },
    html: function(value) {
      alert(value);
    }
  };

  Z.prototype = $.fn

  window.$ = $;
})(window);
