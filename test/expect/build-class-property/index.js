webpackJsonp([1,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _class, _temp;

	__webpack_require__(1);

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Parent = function Parent() {
	  _classCallCheck(this, Parent);

	  console.log('Parent constructor');
	  this.name = 'john';
	};

	var A = (_temp = _class = function (_Parent) {
	  _inherits(A, _Parent);

	  function A() {
	    _classCallCheck(this, A);

	    console.log('Child constructor');
	    return _possibleConstructorReturn(this, _Parent.call(this));
	  }

	  A.method = function method(obj) {
	    console.log('method', obj);
	  };

	  A.prototype.foo = function foo() {
	    console.log('foo', this.name);
	  };

	  return A;
	}(Parent), _class.propTypes = 1, _temp);


	var a = new A();
	a.foo();
	A.method('haha');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1.html";

/***/ })
]);