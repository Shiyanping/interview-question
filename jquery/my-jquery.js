(function(window) {
  var jQuery = function(selector) {
    return new jQuery.fn.init(selector)
  }

  jQuery.fn = {
    css: function(key, value) {
      console.log(key + ',' + value);
    },
    html: function(value) {
      return value
    }
  }

  var init = jQuery.fn.init = function(selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))

    var index , len = dom ? dom.length : 0
    
    for (index = 0; index < len; index++) {
      this[index] = dom[index]
    }

    this.selector = selector || ''
    this.length = len
  }

  init.prototype = jQuery.fn

  window.$ = jQuery
})(window)