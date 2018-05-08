webpackJsonp([1,0],[
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Greeter = function () {
	    function Greeter(greeting) {
	        _classCallCheck(this, Greeter);

	        this.greeting = greeting;
	    }

	    Greeter.prototype.greet = function greet() {
	        return '<h1>' + this.greeting + '</h1>';
	    };

	    return Greeter;
	}();

	var greeter = new Greeter('Hello, world!');
	document.body.innerHTML = greeter.greet();

/***/ })
]);