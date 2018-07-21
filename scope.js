// es5没有块级作用域
if (true) {
  var name = 'shi';
}
console.log(name);

//函数作用域及自由变量，自由变量会根据根据作用域网上找
var a = 100;
function fn() {
  var b = 200;
  function fn2() {
    var c = 300;
    console.log(a);  // 100
    console.log(b);  // 200
    console.log(c);  // 300
  }
  fn2();
}
fn();

// 闭包
// 函数作为返回值
// 函数作为变量传递
function F1() {
  var a = 100;
  return function() {
    console.log(a); //自由变量，去父作用域中找a
  };
}

var f1 = F1();
var a = 200;
f1(); // 100

// 闭包再实际中的应用
// 判断一个数字是否出现过
function isFirst() {
  var _list = [];
  return function(id) {
    if (_list.indexOf(id) >= 0) {
      return false;
    } else {
      _list.push(id);
      return true;
    }
  };
}

var first = isFirst();
first(10);
first(10);
first(20);

// 生成十个a，点击输出对应的值
// 这个是错误的写法
var i, a;
for (i = 0; i < 10; i++) {
  a = document.createElement('a');
  a.innerHTML = i + '<br>';
  a.addEventListener('click', function(e) {
    e.preventDefault();
    alert(i); //自由变量，会从父元素找i，点击时，其实i已经执行完变成了10
  });
  document.body.appendChild(a);
}

// 使用闭包改进
var i;
for (i = 0; i < 10; i++) {
  (function(i) {
    // 函数作用域
    var a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click', function(e) {
      e.preventDefault();
      alert(i);
    });
    document.body.appendChild(a);
  })(i);
}
