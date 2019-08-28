/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var O = 'object';
var check = function check(it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
// eslint-disable-next-line no-undef
check((typeof globalThis === 'undefined' ? 'undefined' : _typeof(globalThis)) == O && globalThis) || check((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == O && window) || check((typeof self === 'undefined' ? 'undefined' : _typeof(self)) == O && self) || check((typeof global === 'undefined' ? 'undefined' : _typeof(global)) == O && global) ||
// eslint-disable-next-line no-new-func
Function('return this')();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(31).f;
var hide = __webpack_require__(4);
var redefine = __webpack_require__(35);
var setGlobal = __webpack_require__(18);
var copyConstructorProperties = __webpack_require__(58);
var isForced = __webpack_require__(64);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if ((typeof sourceProperty === 'undefined' ? 'undefined' : _typeof(sourceProperty)) === (typeof targetProperty === 'undefined' ? 'undefined' : _typeof(targetProperty))) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || targetProperty && targetProperty.sham) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(2);
var definePropertyModule = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(25);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(8);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }return it;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(13);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);
var classof = __webpack_require__(15);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var setGlobal = __webpack_require__(18);
var IS_PURE = __webpack_require__(65);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requireObjectCoercible = __webpack_require__(5);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(30);
var anObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(38);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(74);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var hide = __webpack_require__(4);

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  }return value;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(11);
var requireObjectCoercible = __webpack_require__(5);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var shared = __webpack_require__(12);
var uid = __webpack_require__(39);
var NATIVE_SYMBOL = __webpack_require__(66);

var _Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && _Symbol[name] || (NATIVE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var charAt = __webpack_require__(76).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $forEach = __webpack_require__(24).forEach;
var sloppyArrayMethod = __webpack_require__(37);

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(57);
var IndexedObject = __webpack_require__(11);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(9);
var arraySpeciesCreate = __webpack_require__(56);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function createMethod(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return value; // find
              case 6:
                return index; // findIndex
              case 2:
                push.call(target, value); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(4);
var redefine = __webpack_require__(35);
var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(20);
var regexpExec = __webpack_require__(17);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () {
    return originalExec.apply(this, arguments);
  };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () {
      execCalled = true;return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return regexMethod.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return regexMethod.call(string, this);
    });
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(12);

module.exports = shared('native-function-to-string', Function.toString);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(2);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(59);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(2);
var propertyIsEnumerableModule = __webpack_require__(34);
var createPropertyDescriptor = __webpack_require__(25);
var toIndexedObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(38);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(30);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {/* empty */}
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(7);
var toIndexedObject = __webpack_require__(19);
var indexOf = __webpack_require__(53).indexOf;
var hiddenKeys = __webpack_require__(29);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var shared = __webpack_require__(12);
var hide = __webpack_require__(4);
var has = __webpack_require__(7);
var setGlobal = __webpack_require__(18);
var nativeFunctionToString = __webpack_require__(28);
var InternalStateModule = __webpack_require__(62);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;else hide(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var classof = __webpack_require__(15);
var regexpExec = __webpack_require__(17);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(8);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// OffCanvas global settings
Foundation.OffCanvas.defaults.transitionTime = '.2s';
Foundation.OffCanvas.defaults.transition = 'overlap';

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(119);

__webpack_require__(91);

__webpack_require__(92);

__webpack_require__(94);

__webpack_require__(93);

console.log('%c Welcome to the console of your dreams 🍆 ', 'color: #1D1075; font-size: 10px'); // docs.js only imports and code goes here

console.log('%c Developed by Smithy 🍺 🦄 ', 'background: #222; color: #bada55; font-size: 20px;padding: 5px;');

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

module.exports = canUseDOM;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function ($) {

  'use strict';

  $.fn.fitVids = function (options) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if (!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if (options) {
      $.extend(settings, options);
    }

    return this.each(function () {
      var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if (settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function () {
        var $this = $(this);
        if ($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
          return;
        }
        if (!$this.css('height') && !$this.css('width') && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = this.tagName.toLowerCase() === 'object' || $this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if (!$this.attr('name')) {
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', aspectRatio * 100 + '%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };

  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;

  // Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__factory, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (e, t) {
   true ? !(__WEBPACK_LOCAL_MODULE_0__factory = (t), (__WEBPACK_LOCAL_MODULE_0__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_LOCAL_MODULE_0__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module)) : __WEBPACK_LOCAL_MODULE_0__factory), (__WEBPACK_LOCAL_MODULE_0__module.loaded = true), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t();
}("undefined" != typeof window ? window : undefined, function () {
  function e() {}var t = e.prototype;return t.on = function (e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
          n = i[e] = i[e] || [];return n.indexOf(t) == -1 && n.push(t), this;
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);var i = this._onceEvents = this._onceEvents || {},
          n = i[e] = i[e] || {};return n[t] = !0, this;
    }
  }, t.off = function (e, t) {
    var i = this._events && this._events[e];if (i && i.length) {
      var n = i.indexOf(t);return n != -1 && i.splice(n, 1), this;
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];if (i && i.length) {
      i = i.slice(0), t = t || [];for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
        var r = i[o],
            s = n && n[r];s && (this.off(e, r), delete n[r]), r.apply(this, t);
      }return this;
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, e;
}), function (e, t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = function (i) {
    return t(e, i);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
}("undefined" != typeof window ? window : undefined, function (e, t) {
  function i(e, t) {
    for (var i in t) {
      e[i] = t[i];
    }return e;
  }function n(e) {
    if (Array.isArray(e)) return e;var t = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.length;return t ? d.call(e) : [e];
  }function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);var s = e;return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e));
  }function r(e) {
    this.img = e;
  }function s(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];this.addImage(o);
      }if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);for (n = 0; n < r.length; n++) {
          var s = r[n];this.addElementBackgroundImages(s);
        }
      }
    }
  };var u = { 1: !0, 9: !0, 11: !0 };return o.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
      var o = n && n[2];o && this.addBackground(o, e), n = i.exec(t.backgroundImage);
    }
  }, o.prototype.addImage = function (e) {
    var t = new r(e);this.images.push(t);
  }, o.prototype.addBackground = function (e, t) {
    var i = new s(e, t);this.images.push(i);
  }, o.prototype.check = function () {
    function e(e, i, n) {
      setTimeout(function () {
        t.progress(e, i, n);
      });
    }var t = this;return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : void this.complete();
  }, o.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t);
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[t](this);
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
    var e = this.getIsImageComplete();return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, r.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
  }, r.prototype.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;var e = this.getIsImageComplete();e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
      var i = new o(this, e, t);return i.jqDeferred.promise(h(this));
    });
  }, o.makeJQueryPlugin(), o;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(120)], __WEBPACK_AMD_DEFINE_RESULT__ = function (i) {
    return e(t, i);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
          s = "$()." + i + '("' + e + '")';return t.each(function (t, u) {
        var h = a.data(u, i);if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);var d = h[e];if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");var l = d.apply(h, o);n = void 0 === n ? l : n;
      }), void 0 !== n ? n : t;
    }function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
      });
    }a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);return u(this, t, e);
      }return h(this, t), this;
    }, o(a));
  }function o(t) {
    !t || t && t.bridget || (t.bridget = i);
  }var n = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function () {} : function (t) {
    s.error(t);
  };return o(e || t.jQuery), i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_1__factory = (e), (__WEBPACK_LOCAL_MODULE_1__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)) : __WEBPACK_LOCAL_MODULE_1__factory), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : undefined, function () {
  function t() {}var e = t.prototype;return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          o = i[t] = i[t] || [];return o.indexOf(e) == -1 && o.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
          o = i[t] = i[t] || {};return o[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];if (i && i.length) {
      var o = i.indexOf(e);return o != -1 && i.splice(o, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];if (i && i.length) {
      i = i.slice(0), e = e || [];for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
            r = o && o[s];r && (this.off(t, s), delete o[s]), s.apply(this, e);
      }return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_2__ = (function () {
    return e();
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";
  function t(t) {
    var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);return i && e;
  }function e() {}function i() {
    for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
      var i = u[e];t[i] = 0;
    }return t;
  }function o(t) {
    var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
  }function n() {
    if (!d) {
      d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var n = o(e);s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e);
    }
  }function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
      var s = o(e);if ("none" == s.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
            c = s[f],
            m = parseFloat(c);a[f] = isNaN(m) ? 0 : m;
      }var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          x = t(s.width);x !== !1 && (a.width = x + (z ? 0 : p + _));var S = t(s.height);return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
    }
  }var r,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      h = u.length,
      d = !1;return s;
}), function (t, e) {
  "use strict";
   true ? !(__WEBPACK_LOCAL_MODULE_3__factory = (e), (__WEBPACK_LOCAL_MODULE_3__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)) : __WEBPACK_LOCAL_MODULE_3__factory), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
          n = o + "MatchesSelector";if (t[n]) return n;
    }
  }();return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = (function (i) {
    return e(t, i);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var i = {};i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  }, i.makeArray = function (t) {
    var e = [];if (Array.isArray(t)) e = t;else if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);return e;
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);i != -1 && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, i.filterFindElements = function (t, o) {
    t = i.makeArray(t);var n = [];return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);e(t, o) && n.push(t);for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
          n.push(i[s]);
        }
      }
    }), n;
  }, i.debounceMethod = function (t, e, i) {
    var o = t.prototype[e],
        n = e + "Timeout";t.prototype[e] = function () {
      var t = this[n];t && clearTimeout(t);var e = arguments,
          s = this;this[n] = setTimeout(function () {
        o.apply(s, e), delete s[n];
      }, i || 100);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };var o = t.console;return i.htmlInit = function (e, n) {
    i.docReady(function () {
      var s = i.toDashed(n),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          u = document.querySelectorAll(".js-" + s),
          h = i.makeArray(a).concat(i.makeArray(u)),
          d = r + "-options",
          l = t.jQuery;h.forEach(function (t) {
        var i,
            s = t.getAttribute(r) || t.getAttribute(d);try {
          i = s && JSON.parse(s);
        } catch (a) {
          return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a));
        }var u = new e(t, i);l && l.data(t, n, u);
      });
    });
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_5__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
  "use strict";
  function i(t) {
    for (var e in t) {
      return !1;
    }return e = null, !0;
  }function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
  }function n(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
      h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
      d = o.prototype = Object.create(t.prototype);d.constructor = o, d._create = function () {
    this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, d.getSize = function () {
    this.size = e(this.element);
  }, d.css = function (t) {
    var e = this.element.style;for (var i in t) {
      var o = h[i] || i;e[o] = t[i];
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        o = t[e ? "left" : "right"],
        n = t[i ? "top" : "bottom"],
        s = this.layout.size,
        r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
        a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a;
  }, d.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop"),
        n = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[n];e[s] = this.getXValue(a), e[r] = "";var u = o ? "paddingTop" : "paddingBottom",
        h = o ? "top" : "bottom",
        d = o ? "bottom" : "top",
        l = this.position.y + t[u];e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, d._transitionTo = function (t, e) {
    this.getPosition();var i = this.position.x,
        o = this.position.y,
        n = parseInt(t, 10),
        s = parseInt(e, 10),
        r = n === this.position.x && s === this.position.y;if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();var a = t - i,
        u = e - o,
        h = {};h.transform = this.getTranslate(a, u), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop");return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }if (t.from) {
      this.css(t.from);var o = this.element.offsetHeight;o = null;
    }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };var l = "opacity," + n(a);d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t);
  };var f = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          o = f[t.propertyName] || t.propertyName;if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];n.call(this), delete e.onEnd[o];
      }this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
  }, d._removeStyles = function (t) {
    var e = {};for (var i in t) {
      e[i] = "";
    }this.css(e);
  };var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
    this.css(c);
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
  }, d.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function () {
    delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
      return i;
    }
  }, d.hide = function () {
    this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
  }, d.destroy = function () {
    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
  }, o;
}), function (t, e) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_6__ = (function (i, o, n, s) {
    return e(t, i, o, n, s);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
  "use strict";
  function s(t, e) {
    var i = o.getQueryElement(t);if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);var n = ++l;this.element.outlayerGUID = n, f[n] = this, this._create();var s = this._getOption("initLayout");s && this.layout();
  }function r(t) {
    function e() {
      t.apply(this, arguments);
    }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }function a(t) {
    if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];if (!i.length) return 0;i = parseFloat(i);var n = m[o] || 1;return i * n;
  }var u = t.console,
      h = t.jQuery,
      d = function d() {},
      l = 0,
      f = {};s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var c = s.prototype;o.extend(c, e.prototype), c.option = function (t) {
    o.extend(this.options, t);
  }, c._getOption = function (t) {
    var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
  }, c.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, c._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
          r = new i(s, this);o.push(r);
    }return o;
  }, c._filterFindItemElements = function (t) {
    return o.filterFindElements(t, this.options.itemSelector);
  }, c.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, c.layout = function () {
    this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, c._init = c.layout, c._resetLayout = function () {
    this.getSize();
  }, c.getSize = function () {
    this.size = i(this.element);
  }, c._getMeasurement = function (t, e) {
    var o,
        n = this.options[t];n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
  }, c.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, c._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, c._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];t.forEach(function (t) {
        var o = this._getItemLayoutPosition(t);o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
      }, this), this._processLayoutQueue(i);
    }
  }, c._getItemLayoutPosition = function () {
    return { x: 0, y: 0 };
  }, c._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, c.updateStagger = function () {
    var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, c._positionItem = function (t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
  }, c._postLayout = function () {
    this.resizeContainer();
  }, c.resizeContainer = function () {
    var t = this._getOption("resizeContainer");if (t) {
      var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, c._emitCompleteOnItems = function (t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e]);
    }function o() {
      r++, r == s && i();
    }var n = this,
        s = e.length;if (!e || !s) return void i();var r = 0;e.forEach(function (e) {
      e.once(t, o);
    });
  }, c.dispatchEvent = function (t, e, i) {
    var o = e ? [e].concat(i) : i;if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
      var n = h.Event(e);n.type = t, this.$element.trigger(n, i);
    } else this.$element.trigger(t, i);
  }, c.ignore = function (t) {
    var e = this.getItem(t);e && (e.isIgnored = !0);
  }, c.unignore = function (t) {
    var e = this.getItem(t);e && delete e.isIgnored;
  }, c.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, c.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      o.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, c._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
  }, c._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, c._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
  }, c._manageStamp = d, c._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        o = this._boundingRect,
        n = i(t),
        s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };return s;
  }, c.handleEvent = o.handleEvent, c.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, c.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, c.onresize = function () {
    this.resize();
  }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, c.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
  }, c.addItems = function (t) {
    var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
  }, c.appended = function (t) {
    var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, c.prepended = function (t) {
    var e = this._itemize(t);if (e.length) {
      var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, c.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, c.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, c.revealItemElements = function (t) {
    var e = this.getItems(t);this.reveal(e);
  }, c.hideItemElements = function (t) {
    var e = this.getItems(t);this.hide(e);
  }, c.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];if (i.element == t) return i;
    }
  }, c.getItems = function (t) {
    t = o.makeArray(t);var e = [];return t.forEach(function (t) {
      var i = this.getItem(t);i && e.push(i);
    }, this), e;
  }, c.remove = function (t) {
    var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), o.removeFrom(this.items, t);
    }, this);
  }, c.destroy = function () {
    var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();var e = this.element.outlayerGUID;delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    t = o.getQueryElement(t);var e = t && t.outlayerGUID;return e && f[e];
  }, s.create = function (t, e) {
    var i = r(s);return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
  };var m = { ms: 1, s: 1e3 };return s.Item = n, s;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_7__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
  "use strict";
  function e() {
    t.Item.apply(this, arguments);
  }var i = e.prototype = Object.create(t.Item.prototype),
      o = i._create;i._create = function () {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();var t = this.layout.options.getSortData,
          e = this.layout._sorters;for (var i in t) {
        var o = e[i];this.sortData[i] = o(this.element, this);
      }
    }
  };var n = i.destroy;return i.destroy = function () {
    n.apply(this, arguments), this.css({ display: "" });
  }, e;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_6__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_8__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
  "use strict";
  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }var o = i.prototype,
      n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];return n.forEach(function (t) {
    o[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), o.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element),
        i = this.isotope.size && e;return i && e.innerHeight != this.isotope.size.innerHeight;
  }, o._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, o.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, o.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, o.getSegmentSize = function (t, e) {
    var i = t + e,
        o = "outer" + e;if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();this[i] = n && n[o] || this.isotope.size["inner" + e];
    }
  }, o.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];return e && e.element && t(e.element);
  }, o.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, o.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function n() {
      i.apply(this, arguments);
    }return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_9__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
  var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var o = i.prototype;return o._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }this.maxY = 0, this.horizontalColIndex = 0;
  }, o.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }var o = this.columnWidth += this.gutter,
        n = this.containerWidth + this.gutter,
        s = n / o,
        r = o - n % o,
        a = r && r < 1 ? "round" : "floor";s = Math[a](s), this.cols = Math.max(s, 1);
  }, o.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        o = e(i);this.containerWidth = o && o.innerWidth;
  }, o._getItemLayoutPosition = function (t) {
    t.getSize();var e = t.size.outerWidth % this.columnWidth,
        i = e && e < 1 ? "round" : "ceil",
        o = Math[i](t.size.outerWidth / this.columnWidth);o = Math.min(o, this.cols);for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
      this.colYs[h] = a;
    }return r;
  }, o._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
  }, o._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
      e[o] = this._getColGroupY(o, t);
    }return e;
  }, o._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
  }, o._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
        o = t > 1 && i + t > this.cols;i = o ? 0 : i;var n = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
  }, o._manageStamp = function (t) {
    var i = e(t),
        o = this._getElementOffset(t),
        n = this._getOption("originLeft"),
        s = n ? o.left : o.right,
        r = s + i.outerWidth,
        a = Math.floor(s / this.columnWidth);a = Math.max(0, a);var u = Math.floor(r / this.columnWidth);u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
      this.colYs[l] = Math.max(d, this.colYs[l]);
    }
  }, o._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, o._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }return (this.cols - t) * this.columnWidth - this.gutter;
  }, o.needsResizeLayout = function () {
    var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_9__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_10__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
  "use strict";
  var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var s in e.prototype) {
    n[s] || (o[s] = e.prototype[s]);
  }var r = o.measureColumns;o.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this);
  };var a = o._getOption;return o._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_11__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";
  var e = t.create("fitRows"),
      i = e.prototype;return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);var o = { x: this.x, y: this.y };return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
  }, i._getContainerSize = function () {
    return { height: this.maxY };
  }, e;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_12__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";
  var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;return i._resetLayout = function () {
    this.y = 0;
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;return this.y += t.size.outerHeight, { x: e, y: i };
  }, i._getContainerSize = function () {
    return { height: this.y };
  }, e;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_7__, __WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_10__, __WEBPACK_LOCAL_MODULE_11__, __WEBPACK_LOCAL_MODULE_12__], __WEBPACK_AMD_DEFINE_RESULT__ = function (i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;return (r > a ? 1 : -1) * h;
        }
      }return 0;
    };
  }var u = t.jQuery,
      h = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });d.Item = s, d.LayoutMode = r;var l = d.prototype;l._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];for (var t in r.modes) {
      this._initLayoutMode(t);
    }
  }, l.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, l._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];o.id = this.itemGUID++;
    }return this._updateItemsSortData(t), t;
  }, l._initLayoutMode = function (t) {
    var e = r.modes[t],
        i = this.options[t] || {};this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
  }, l.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
  }, l._layout = function () {
    var t = this._getIsInstant();this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, l.arrange = function (t) {
    this.option(t), this._getIsInstant();var e = this._filter(this.items);this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
  }, l._init = l.arrange, l._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, l._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;return this._isInstant = e, e;
  }, l._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
    }var e,
        i,
        o,
        n = this;this.once("layoutComplete", function () {
      e = !0, t();
    }), this.once("hideComplete", function () {
      i = !0, t();
    }), this.once("revealComplete", function () {
      o = !0, t();
    });
  }, l._filter = function (t) {
    var e = this.options.filter;e = e || "*";for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];if (!a.isIgnored) {
        var u = s(a);u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
      }
    }return { matches: i, needReveal: o, needHide: n };
  }, l._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element);
    } : function (e) {
      return o(e.element, t);
    };
  }, l.updateSortData = function (t) {
    var e;t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
  }, l._getSorters = function () {
    var t = this.options.getSortData;for (var e in t) {
      var i = t[e];this._sorters[e] = f(i);
    }
  }, l._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];o.updateSortData();
    }
  };var f = function () {
    function t(t) {
      if ("string" != typeof t) return t;var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];return t = a ? function (t) {
        return t && a(r(t));
      } : function (t) {
        return t && r(t);
      };
    }function e(t, e) {
      return t ? function (e) {
        return e.getAttribute(t);
      } : function (t) {
        var i = t.querySelector(e);return i && i.textContent;
      };
    }return t;
  }();d.sortDataParsers = { parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }), parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    }) }, l._sort = function () {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = a(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
    }
  }, l._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] != this.sortHistory[e]) return !1;
    }return !0;
  }, l._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];if (!e) throw new Error("No layout mode: " + t);return e.options = this.options[t], e;
  }, l._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, l._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, l._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, l.appended = function (t) {
    var e = this.addItems(t);if (e.length) {
      var i = this._filterRevealAdded(e);this.filteredItems = this.filteredItems.concat(i);
    }
  }, l.prepended = function (t) {
    var e = this._itemize(t);if (e.length) {
      this._resetLayout(), this._manageStamps();var i = this._filterRevealAdded(e);this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, l._filterRevealAdded = function (t) {
    var e = this._filter(t);return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, l.insert = function (t) {
    var e = this.addItems(t);if (e.length) {
      var i,
          o,
          n = e.length;for (i = 0; i < n; i++) {
        o = e[i], this.element.appendChild(o.element);
      }var s = this._filter(e).matches;for (i = 0; i < n; i++) {
        e[i].isLayoutInstant = !0;
      }for (this.arrange(), i = 0; i < n; i++) {
        delete e[i].isLayoutInstant;
      }this.reveal(s);
    }
  };var c = l.remove;return l.remove = function (t) {
    t = n.makeArray(t);var e = this.getItems(t);c.call(this, t);for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];n.removeFrom(this.filteredItems, s);
    }
  }, l.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];e.sortData.random = Math.random();
    }this.options.sortBy = "random", this._sort(), this._layout();
  }, l._noTransition = function (t, e) {
    var i = this.options.transitionDuration;this.options.transitionDuration = 0;var o = t.apply(this, e);return this.options.transitionDuration = i, o;
  }, l.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element;
    });
  }, d;
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = throttle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return (/** @class */function () {
            function class_1() {
                this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function get() {
                    return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                    this.__entries__[index][1] = value;
                } else {
                    this.__entries__.push([key, value]);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                    entries.splice(index, 1);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
                this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
                if (ctx === void 0) {
                    ctx = null;
                }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    callback.call(ctx, entry[1], entry[0]);
                }
            };
            return class_1;
        }()
    );
}();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
}();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) {
        return setTimeout(function () {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle(callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName,
            propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function defineConfigurable(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function getWindowOf(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
};

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
        clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x,
        y = _a.y,
        width = _a.width,
        height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();

var ResizeObserverEntry = /** @class */function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}();

var ResizeObserverSPI = /** @class */function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
}();

exports.default = index;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
	} else {
		(root.jQuery || root).scrollbarWidth = factory();
	}
})(undefined, function () {
	'use strict';

	function scrollbarWidth() {
		if (typeof document === 'undefined') {
			return 0;
		}

		var body = document.body,
		    box = document.createElement('div'),
		    boxStyle = box.style,
		    width;

		boxStyle.position = 'absolute';
		boxStyle.top = boxStyle.left = '-9999px';
		boxStyle.width = boxStyle.height = '100px';
		boxStyle.overflow = 'scroll';

		body.appendChild(box);

		width = box.offsetWidth - box.clientWidth;

		body.removeChild(box);

		return width;
	}

	return scrollbarWidth;
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(86);

__webpack_require__(87);

__webpack_require__(88);

var _scrollbarwidth = __webpack_require__(51);

var _scrollbarwidth2 = _interopRequireDefault(_scrollbarwidth);

var _lodash = __webpack_require__(49);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(47);

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = __webpack_require__(48);

var _lodash6 = _interopRequireDefault(_lodash5);

var _resizeObserverPolyfill = __webpack_require__(50);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _canUseDom = __webpack_require__(43);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SimpleBar.js - v4.0.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

var SimpleBar =
/*#__PURE__*/
function () {
  function SimpleBar(element, options) {
    var _this = this;

    this.onScroll = function () {
      if (!_this.scrollXTicking) {
        window.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }

      if (!_this.scrollYTicking) {
        window.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis('y');
      }
    };

    this.onMouseLeave = function () {
      _this.onMouseMove.cancel();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis('y');
      }

      _this.mouseX = -1;
      _this.mouseY = -1;
    };

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = (0, _scrollbarwidth2.default)();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinBoundsY, isWithinBoundsX;
      _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
      _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinBoundsX = _this.isWithinBounds(_this.axis.x.scrollbar.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinBoundsY = _this.isWithinBounds(_this.axis.y.scrollbar.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinBoundsY || isWithinBoundsX) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinBoundsY) {
            _this.onDragStart(e, 'y');
          }

          if (isWithinBoundsX) {
            _this.onDragStart(e, 'x');
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / track.rect[_this.axis[_this.draggedAxis].sizeAttr]; // Scroll the content by the same percentage.

      var scrollPos = dragPerc * _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr]; // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

      document.removeEventListener('mousemove', _this.drag, true);
      document.removeEventListener('mouseup', _this.onEndDrag, true);
      _this.removePreventClickId = window.setTimeout(function () {
        // Remove these asynchronously so we still suppress click events
        // generated simultaneously with mouseup.
        document.removeEventListener('click', _this.preventClick, true);
        document.removeEventListener('dblclick', _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };

    this.preventClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    this.el = element;
    this.flashTimeout;
    this.contentEl;
    this.contentWrapperEl;
    this.offsetEl;
    this.maskEl;
    this.globalObserver;
    this.mutationObserver;
    this.resizeObserver;
    this.scrollbarWidth;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
    this.isRtl;
    this.axis = {
      x: {
        scrollOffsetAttr: 'scrollLeft',
        sizeAttr: 'width',
        scrollSizeAttr: 'scrollWidth',
        offsetAttr: 'left',
        overflowAttr: 'overflowX',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: 'scrollTop',
        sizeAttr: 'height',
        scrollSizeAttr: 'scrollHeight',
        offsetAttr: 'top',
        overflowAttr: 'overflowY',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null; // Don't re-instantiate over an existing one

    if (this.el.SimpleBar) {
      return;
    }

    this.recalculate = (0, _lodash2.default)(this.recalculate.bind(this), 64);
    this.onMouseMove = (0, _lodash2.default)(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = (0, _lodash4.default)(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = (0, _lodash4.default)(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = (0, _lodash6.default)(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */

  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.initHtmlApi = function initHtmlApi() {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

    if (typeof MutationObserver !== 'undefined') {
      // Mutation observer to observe dynamically added elements
      this.globalObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
            if (addedNode.nodeType === 1) {
              if (addedNode.hasAttribute('data-simplebar')) {
                !addedNode.SimpleBar && new SimpleBar(addedNode, SimpleBar.getElOptions(addedNode));
              } else {
                Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
                  !el.SimpleBar && new SimpleBar(el, SimpleBar.getElOptions(el));
                });
              }
            }
          });
          Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
            if (removedNode.nodeType === 1) {
              if (removedNode.hasAttribute('data-simplebar')) {
                removedNode.SimpleBar && removedNode.SimpleBar.unMount();
              } else {
                Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar]'), function (el) {
                  el.SimpleBar && el.SimpleBar.unMount();
                });
              }
            }
          });
        });
      });
      this.globalObserver.observe(document, {
        childList: true,
        subtree: true
      });
    } // Taken from jQuery `ready` function
    // Instantiate elements already present on the page


    if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
      // Handle it asynchronously to allow scripts the opportunity to delay init
      window.setTimeout(this.initDOMLoadedElements);
    } else {
      document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
      window.addEventListener('load', this.initDOMLoadedElements);
    }
  } // Helper function to retrieve options from element attributes
  ;

  SimpleBar.getElOptions = function getElOptions(el) {
    var options = Array.prototype.reduce.call(el.attributes, function (acc, attribute) {
      var option = attribute.name.match(/data-simplebar-(.+)/);

      if (option) {
        var key = option[1].replace(/\W+(.)/g, function (x, chr) {
          return chr.toUpperCase();
        });

        switch (attribute.value) {
          case 'true':
            acc[key] = true;
            break;

          case 'false':
            acc[key] = false;
            break;

          case undefined:
            acc[key] = true;
            break;

          default:
            acc[key] = attribute.value;
        }
      }

      return acc;
    }, {});
    return options;
  };

  SimpleBar.removeObserver = function removeObserver() {
    this.globalObserver.disconnect();
  };

  SimpleBar.initDOMLoadedElements = function initDOMLoadedElements() {
    document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
    window.removeEventListener('load', this.initDOMLoadedElements);
    Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
      if (!el.SimpleBar) new SimpleBar(el, SimpleBar.getElOptions(el));
    });
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    this.el.SimpleBar = this; // We stop here on server-side

    if (_canUseDom2.default) {
      this.initDOM();
      this.scrollbarWidth = (0, _scrollbarwidth2.default)();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this;

    // make sure this element doesn't have the elements yet
    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.el.querySelector("." + this.classNames.contentWrapper);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.contentEl = this.el.querySelector("." + this.classNames.contentEl);
      this.placeholderEl = this.el.querySelector("." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    // Event listeners
    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    window.addEventListener('resize', this.onWindowResize);
    this.resizeObserver = new _resizeObserverPolyfill2.default(this.recalculate);
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
  };

  _proto.recalculate = function recalculate() {
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    this.elStyles = window.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? this.contentEl.offsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = this.contentEl.scrollHeight + "px"; // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    this.axis.x.isOverflowing = this.contentWrapperEl.scrollWidth > this.contentWrapperEl.offsetWidth;
    this.axis.y.isOverflowing = this.contentWrapperEl.scrollHeight > this.contentWrapperEl.offsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = this.elStyles.overflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = this.elStyles.overflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar();
    this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect();
    this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect();
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var contentSize = this.scrollbarWidth ? this.contentWrapperEl[this.axis[axis].scrollSizeAttr] : this.contentWrapperEl[this.axis[axis].scrollSizeAttr] - this.minScrollbarWidth;
    var trackSize = this.axis[axis].track.rect[this.axis[axis].sizeAttr];
    var scrollbarSize;

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.rect[this.axis[axis].sizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0; // If floating scrollbar

    if (!this.scrollbarWidth) {
      var paddingDirection = [this.isRtl ? 'paddingLeft' : 'paddingRight'];
      this.contentWrapperEl.style[paddingDirection] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? this.minScrollbarWidth + "px" : 0;
      this.contentWrapperEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? this.minScrollbarWidth + "px" : 0;
    }
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };

  /**
   * Show scrollbar
   */
  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;

  /**
   * on scrollbar handle drag movement starts
   */
  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.getBoundingClientRect()[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    document.addEventListener('mousemove', this.drag, true);
    document.addEventListener('mouseup', this.onEndDrag, true);

    if (this.removePreventClickId === null) {
      document.addEventListener('click', this.preventClick, true);
      document.addEventListener('dblclick', this.preventClick, true);
    } else {
      window.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  }
  /**
   * Drag scrollbar handle
   */
  ;

  /**
   * Getter for content element
   */
  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.removeListeners = function removeListeners() {
    var _this4 = this;

    // Event listeners
    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this4.el.removeEventListener(e, _this4.onPointerEvent);
    });
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onWindowResize);
    this.mutationObserver && this.mutationObserver.disconnect();
    this.resizeObserver.disconnect(); // Cancel all debounced functions

    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    this.el.SimpleBar = null;
  }
  /**
   * Recursively walks up the parent nodes looking for this.el
   */
  ;

  _proto.isChildNode = function isChildNode(el) {
    if (el === null) return false;
    if (el === this.el) return true;
    return this.isChildNode(el.parentNode);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  };

  return SimpleBar;
}();
/**
 * HTML API
 * Called only in a browser env.
 */

SimpleBar.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  classNames: {
    contentEl: 'simplebar-content',
    contentWrapper: 'simplebar-content-wrapper',
    offset: 'simplebar-offset',
    mask: 'simplebar-mask',
    wrapper: 'simplebar-wrapper',
    placeholder: 'simplebar-placeholder',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track',
    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
    heightAutoObserverEl: 'simplebar-height-auto-observer',
    visible: 'simplebar-visible',
    horizontal: 'simplebar-horizontal',
    vertical: 'simplebar-vertical',
    hover: 'simplebar-hover',
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};

if (_canUseDom2.default) {
  SimpleBar.initHtmlApi();
}

exports.default = SimpleBar;
//# sourceMappingURL=simplebar.esm.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(19);
var toLength = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(78);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(20);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(21);
var toObject = __webpack_require__(14);
var IndexedObject = __webpack_require__(11);
var toLength = __webpack_require__(9);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function createMethod(IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
      if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
    }return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(8);
var isArray = __webpack_require__(63);
var wellKnownSymbol = __webpack_require__(20);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(21);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(7);
var ownKeys = __webpack_require__(71);
var getOwnPropertyDescriptorModule = __webpack_require__(31);
var definePropertyModule = __webpack_require__(16);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var isObject = __webpack_require__(8);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(73);
var global = __webpack_require__(0);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_WEAK_MAP = __webpack_require__(67);
var global = __webpack_require__(0);
var isObject = __webpack_require__(8);
var hide = __webpack_require__(4);
var objectHas = __webpack_require__(7);
var sharedKey = __webpack_require__(75);
var hiddenKeys = __webpack_require__(29);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function set(it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function get(it) {
    return wmget.call(store, it) || {};
  };
  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function set(it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(15);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var nativeFunctionToString = __webpack_require__(28);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(2);
var fails = __webpack_require__(1);
var objectKeys = __webpack_require__(70);
var getOwnPropertySymbolsModule = __webpack_require__(32);
var propertyIsEnumerableModule = __webpack_require__(34);
var toObject = __webpack_require__(14);
var IndexedObject = __webpack_require__(11);

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }return T;
} : nativeAssign;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var internalObjectKeys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(26);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var internalObjectKeys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(26);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(61);
var getOwnPropertyNamesModule = __webpack_require__(69);
var getOwnPropertySymbolsModule = __webpack_require__(32);
var anObject = __webpack_require__(6);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var trim = __webpack_require__(77).trim;
var whitespaces = __webpack_require__(40);

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : nativeParseInt;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(0);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(6);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(12);
var uid = __webpack_require__(39);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(13);
var requireObjectCoercible = __webpack_require__(5);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requireObjectCoercible = __webpack_require__(5);
var whitespaces = __webpack_require__(40);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function createMethod(TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(13);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
var $filter = __webpack_require__(24).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(54);

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
var forEach = __webpack_require__(23);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
var $reduce = __webpack_require__(55).left;
var sloppyArrayMethod = __webpack_require__(37);

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(2);
var defineProperty = __webpack_require__(16).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function get() {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
var assign = __webpack_require__(68);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
var parseIntImplementation = __webpack_require__(72);

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
var exec = __webpack_require__(17);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(27);
var anObject = __webpack_require__(6);
var toLength = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(5);
var advanceStringIndex = __webpack_require__(22);
var regExpExec = __webpack_require__(36);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
  // `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = regexp == undefined ? undefined : regexp[MATCH];
    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  },
  // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative(nativeMatch, regexp, this);
    if (res.done) return res.value;

    var rx = anObject(regexp);
    var S = String(this);

    if (!rx.global) return regExpExec(rx, S);

    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;
    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }
    return n === 0 ? null : A;
  }];
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(27);
var anObject = __webpack_require__(6);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(9);
var toInteger = __webpack_require__(13);
var requireObjectCoercible = __webpack_require__(5);
var advanceStringIndex = __webpack_require__(22);
var regExpExec = __webpack_require__(36);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
  // `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  },
  // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
    if (res.done) return res.value;

    var rx = anObject(regexp);
    var S = String(this);

    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);

    var global = rx.global;
    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }
    var results = [];
    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;

      results.push(result);
      if (!global) break;

      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;
    for (var i = 0; i < results.length; i++) {
      result = results[i];

      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = [];
      // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }var namedCaptures = result.groups;
      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }
      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }
    return accumulatedResult + S.slice(nextSourcePosition);
  }];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return str.slice(0, position);
        case "'":
          return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(60);
var forEach = __webpack_require__(23);
var hide = __webpack_require__(4);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    hide(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */

;(function (window, document, $, undefined) {

	$.swipebox = function (elem, options) {

		// Default options
		var ui,
		    defaults = {
			useCSS: true,
			useSVG: true,
			initialIndexOnArray: 0,
			removeBarsOnMobile: true,
			hideCloseButtonOnMobile: false,
			hideBarsDelay: 3000,
			videoMaxWidth: 1140,
			vimeoColor: 'cccccc',
			beforeOpen: null,
			afterOpen: null,
			afterClose: null,
			afterMedia: null,
			nextSlide: null,
			prevSlide: null,
			loopAtEnd: false,
			autoplayVideos: false,
			queryStringData: {},
			toggleClassOnLoad: '',
			selector: null
		},
		    plugin = this,
		    elements = [],
		    // slides array [ { href:'...', title:'...' }, ...],
		$elem,
		    isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
		    isTouch = isMobile !== null || document.createTouch !== undefined || 'ontouchstart' in window || 'onmsgesturechange' in window || navigator.msMaxTouchPoints,
		    supportSVG = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect,
		    winWidth = window.innerWidth ? window.innerWidth : $(window).width(),
		    winHeight = window.innerHeight ? window.innerHeight : $(window).height(),
		    currentX = 0,

		/* jshint multistr: true */
		html = '<div id="swipebox-overlay">\
					<div id="swipebox-container">\
						<div id="swipebox-slider"></div>\
						<div id="swipebox-top-bar">\
							<div id="swipebox-title"></div>\
						</div>\
						<div id="swipebox-bottom-bar">\
							<div id="swipebox-arrows">\
								<a id="swipebox-prev"></a>\
								<a id="swipebox-next"></a>\
							</div>\
						</div>\
						<a id="swipebox-close"></a>\
					</div>\
			</div>';

		plugin.settings = {};

		$.swipebox.close = function () {
			ui.closeSlide();
		};

		$.swipebox.extend = function () {
			return ui;
		};

		plugin.init = function () {

			plugin.settings = $.extend({}, defaults, options);

			if ($.isArray(elem)) {

				elements = elem;
				ui.target = $(window);
				ui.init(plugin.settings.initialIndexOnArray);
			} else {

				$(elem).on('click', plugin.settings.selector, function (event) {

					// console.log( isTouch );

					if (event.target.parentNode.className === 'slide current') {

						return false;
					}

					ui.destroy();

					if (plugin.settings.selector === null) {
						$elem = $(elem);
					} else {
						$elem = $(elem).find(plugin.settings.selector);
					}

					elements = [];
					var index, relType, relVal;

					// Allow for HTML5 compliant attribute before legacy use of rel
					if (!relVal) {
						relType = 'data-rel';
						relVal = $(this).attr(relType);
					}

					if (!relVal) {
						relType = 'rel';
						relVal = $(this).attr(relType);
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						$elem = $elem.filter('[' + relType + '="' + relVal + '"]');
					}

					$elem.each(function () {

						var title = null,
						    href = null;

						if ($(this).attr('title')) {
							title = $(this).attr('title');
						}

						if ($(this).attr('href')) {
							href = $(this).attr('href');
						}

						elements.push({
							href: href,
							title: title
						});
					});

					index = $elem.index($(this));
					event.preventDefault();
					event.stopPropagation();
					ui.target = $(event.target);
					ui.init(index);
				});
			}
		};

		ui = {

			/**
    * Initiate Swipebox
    */
			init: function init(index) {
				if (plugin.settings.beforeOpen) {
					plugin.settings.beforeOpen();
				}
				this.target.trigger('swipebox-start');
				$.swipebox.isOpen = true;
				this.build();
				this.openSlide(index);
				this.openMedia(index);
				this.preloadMedia(index + 1);
				this.preloadMedia(index - 1);
				if (plugin.settings.afterOpen) {
					plugin.settings.afterOpen(index);
				}
			},

			/**
    * Built HTML containers and fire main functions
    */
			build: function build() {
				var $this = this,
				    bg;

				$('body').append(html);

				if (supportSVG && plugin.settings.useSVG === true) {
					bg = $('#swipebox-close').css('background-image');
					bg = bg.replace('png', 'svg');
					$('#swipebox-prev, #swipebox-next, #swipebox-close').css({
						'background-image': bg
					});
				}

				if (isMobile && plugin.settings.removeBarsOnMobile) {
					$('#swipebox-bottom-bar, #swipebox-top-bar').remove();
				}

				$.each(elements, function () {
					$('#swipebox-slider').append('<div class="slide"></div>');
				});

				$this.setDim();
				$this.actions();

				if (isTouch) {
					$this.gesture();
				}

				// Devices can have both touch and keyboard input so always allow key events
				$this.keyboard();

				$this.animBars();
				$this.resize();
			},

			/**
    * Set dimensions depending on windows width and height
    */
			setDim: function setDim() {

				var width,
				    height,
				    sliderCss = {};

				// Reset dimensions on mobile orientation change
				if ('onorientationchange' in window) {

					window.addEventListener('orientationchange', function () {
						if (window.orientation === 0) {
							width = winWidth;
							height = winHeight;
						} else if (window.orientation === 90 || window.orientation === -90) {
							width = winHeight;
							height = winWidth;
						}
					}, false);
				} else {

					width = window.innerWidth ? window.innerWidth : $(window).width();
					height = window.innerHeight ? window.innerHeight : $(window).height();
				}

				sliderCss = {
					width: width,
					height: height
				};

				$('#swipebox-overlay').css(sliderCss);
			},

			/**
    * Reset dimensions on window resize envent
    */
			resize: function resize() {
				var $this = this;

				$(window).resize(function () {
					$this.setDim();
				}).resize();
			},

			/**
    * Check if device supports CSS transitions
    */
			supportTransition: function supportTransition() {

				var prefixes = 'transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition'.split(' '),
				    i;

				for (i = 0; i < prefixes.length; i++) {
					if (document.createElement('div').style[prefixes[i]] !== undefined) {
						return prefixes[i];
					}
				}
				return false;
			},

			/**
    * Check if CSS transitions are allowed (options + devicesupport)
    */
			doCssTrans: function doCssTrans() {
				if (plugin.settings.useCSS && this.supportTransition()) {
					return true;
				}
			},

			/**
    * Touch navigation
    */
			gesture: function gesture() {

				var $this = this,
				    index,
				    hDistance,
				    vDistance,
				    hDistanceLast,
				    vDistanceLast,
				    hDistancePercent,
				    vSwipe = false,
				    hSwipe = false,
				    hSwipMinDistance = 10,
				    vSwipMinDistance = 50,
				    startCoords = {},
				    endCoords = {},
				    bars = $('#swipebox-top-bar, #swipebox-bottom-bar'),
				    slider = $('#swipebox-slider');

				bars.addClass('visible-bars');
				$this.setTimeout();

				$('body').bind('touchstart', function (event) {

					$(this).addClass('touching');
					index = $('#swipebox-slider .slide').index($('#swipebox-slider .slide.current'));
					endCoords = event.originalEvent.targetTouches[0];
					startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
					startCoords.pageY = event.originalEvent.targetTouches[0].pageY;

					$('#swipebox-slider').css({
						'-webkit-transform': 'translate3d(' + currentX + '%, 0, 0)',
						'transform': 'translate3d(' + currentX + '%, 0, 0)'
					});

					$('.touching').bind('touchmove', function (event) {
						event.preventDefault();
						event.stopPropagation();
						endCoords = event.originalEvent.targetTouches[0];

						if (!hSwipe) {
							vDistanceLast = vDistance;
							vDistance = endCoords.pageY - startCoords.pageY;
							if (Math.abs(vDistance) >= vSwipMinDistance || vSwipe) {
								var opacity = 0.75 - Math.abs(vDistance) / slider.height();

								slider.css({ 'top': vDistance + 'px' });
								slider.css({ 'opacity': opacity });

								vSwipe = true;
							}
						}

						hDistanceLast = hDistance;
						hDistance = endCoords.pageX - startCoords.pageX;
						hDistancePercent = hDistance * 100 / winWidth;

						if (!hSwipe && !vSwipe && Math.abs(hDistance) >= hSwipMinDistance) {
							$('#swipebox-slider').css({
								'-webkit-transition': '',
								'transition': ''
							});
							hSwipe = true;
						}

						if (hSwipe) {

							// swipe left
							if (0 < hDistance) {

								// first slide
								if (0 === index) {
									// console.log( 'first' );
									$('#swipebox-overlay').addClass('leftSpringTouch');
								} else {
									// Follow gesture
									$('#swipebox-overlay').removeClass('leftSpringTouch').removeClass('rightSpringTouch');
									$('#swipebox-slider').css({
										'-webkit-transform': 'translate3d(' + (currentX + hDistancePercent) + '%, 0, 0)',
										'transform': 'translate3d(' + (currentX + hDistancePercent) + '%, 0, 0)'
									});
								}

								// swipe rught
							} else if (0 > hDistance) {

								// last Slide
								if (elements.length === index + 1) {
									// console.log( 'last' );
									$('#swipebox-overlay').addClass('rightSpringTouch');
								} else {
									$('#swipebox-overlay').removeClass('leftSpringTouch').removeClass('rightSpringTouch');
									$('#swipebox-slider').css({
										'-webkit-transform': 'translate3d(' + (currentX + hDistancePercent) + '%, 0, 0)',
										'transform': 'translate3d(' + (currentX + hDistancePercent) + '%, 0, 0)'
									});
								}
							}
						}
					});

					return false;
				}).bind('touchend', function (event) {
					event.preventDefault();
					event.stopPropagation();

					$('#swipebox-slider').css({
						'-webkit-transition': '-webkit-transform 0.4s ease',
						'transition': 'transform 0.4s ease'
					});

					vDistance = endCoords.pageY - startCoords.pageY;
					hDistance = endCoords.pageX - startCoords.pageX;
					hDistancePercent = hDistance * 100 / winWidth;

					// Swipe to bottom to close
					if (vSwipe) {
						vSwipe = false;
						if (Math.abs(vDistance) >= 2 * vSwipMinDistance && Math.abs(vDistance) > Math.abs(vDistanceLast)) {
							var vOffset = vDistance > 0 ? slider.height() : -slider.height();
							slider.animate({ top: vOffset + 'px', 'opacity': 0 }, 300, function () {
								$this.closeSlide();
							});
						} else {
							slider.animate({ top: 0, 'opacity': 1 }, 300);
						}
					} else if (hSwipe) {

						hSwipe = false;

						// swipeLeft
						if (hDistance >= hSwipMinDistance && hDistance >= hDistanceLast) {

							$this.getPrev();

							// swipeRight
						} else if (hDistance <= -hSwipMinDistance && hDistance <= hDistanceLast) {

							$this.getNext();
						}
					} else {
						// Top and bottom bars have been removed on touchable devices
						// tap
						if (!bars.hasClass('visible-bars')) {
							$this.showBars();
							$this.setTimeout();
						} else {
							$this.clearTimeout();
							$this.hideBars();
						}
					}

					$('#swipebox-slider').css({
						'-webkit-transform': 'translate3d(' + currentX + '%, 0, 0)',
						'transform': 'translate3d(' + currentX + '%, 0, 0)'
					});

					$('#swipebox-overlay').removeClass('leftSpringTouch').removeClass('rightSpringTouch');
					$('.touching').off('touchmove').removeClass('touching');
				});
			},

			/**
    * Set timer to hide the action bars
    */
			setTimeout: function setTimeout() {
				if (plugin.settings.hideBarsDelay > 0) {
					var $this = this;
					$this.clearTimeout();
					$this.timeout = window.setTimeout(function () {
						$this.hideBars();
					}, plugin.settings.hideBarsDelay);
				}
			},

			/**
    * Clear timer
    */
			clearTimeout: function clearTimeout() {
				window.clearTimeout(this.timeout);
				this.timeout = null;
			},

			/**
    * Show navigation and title bars
    */
			showBars: function showBars() {
				var bars = $('#swipebox-top-bar, #swipebox-bottom-bar');
				if (this.doCssTrans()) {
					bars.addClass('visible-bars');
				} else {
					$('#swipebox-top-bar').animate({ top: 0 }, 500);
					$('#swipebox-bottom-bar').animate({ bottom: 0 }, 500);
					setTimeout(function () {
						bars.addClass('visible-bars');
					}, 1000);
				}
			},

			/**
    * Hide navigation and title bars
    */
			hideBars: function hideBars() {
				var bars = $('#swipebox-top-bar, #swipebox-bottom-bar');
				if (this.doCssTrans()) {
					bars.removeClass('visible-bars');
				} else {
					$('#swipebox-top-bar').animate({ top: '-50px' }, 500);
					$('#swipebox-bottom-bar').animate({ bottom: '-50px' }, 500);
					setTimeout(function () {
						bars.removeClass('visible-bars');
					}, 1000);
				}
			},

			/**
    * Animate navigation and top bars
    */
			animBars: function animBars() {
				var $this = this,
				    bars = $('#swipebox-top-bar, #swipebox-bottom-bar');

				bars.addClass('visible-bars');
				$this.setTimeout();

				$('#swipebox-slider').click(function () {
					if (!bars.hasClass('visible-bars')) {
						$this.showBars();
						$this.setTimeout();
					}
				});

				$('#swipebox-bottom-bar').hover(function () {
					$this.showBars();
					bars.addClass('visible-bars');
					$this.clearTimeout();
				}, function () {
					if (plugin.settings.hideBarsDelay > 0) {
						bars.removeClass('visible-bars');
						$this.setTimeout();
					}
				});
			},

			/**
    * Keyboard navigation
    */
			keyboard: function keyboard() {
				var $this = this;
				$(window).bind('keyup', function (event) {
					event.preventDefault();
					event.stopPropagation();

					if (event.keyCode === 37) {

						$this.getPrev();
					} else if (event.keyCode === 39) {

						$this.getNext();
					} else if (event.keyCode === 27) {

						$this.closeSlide();
					}
				});
			},

			/**
    * Navigation events : go to next slide, go to prevous slide and close
    */
			actions: function actions() {
				var $this = this,
				    action = 'touchend click'; // Just detect for both event types to allow for multi-input

				if (elements.length < 2) {

					$('#swipebox-bottom-bar').hide();

					if (undefined === elements[1]) {
						$('#swipebox-top-bar').hide();
					}
				} else {
					$('#swipebox-prev').bind(action, function (event) {
						event.preventDefault();
						event.stopPropagation();
						$this.getPrev();
						$this.setTimeout();
					});

					$('#swipebox-next').bind(action, function (event) {
						event.preventDefault();
						event.stopPropagation();
						$this.getNext();
						$this.setTimeout();
					});
				}

				$('#swipebox-close').bind(action, function () {
					$this.closeSlide();
				});
			},

			/**
    * Set current slide
    */
			setSlide: function setSlide(index, isFirst) {

				isFirst = isFirst || false;

				var slider = $('#swipebox-slider');

				currentX = -index * 100;

				if (this.doCssTrans()) {
					slider.css({
						'-webkit-transform': 'translate3d(' + -index * 100 + '%, 0, 0)',
						'transform': 'translate3d(' + -index * 100 + '%, 0, 0)'
					});
				} else {
					slider.animate({ left: -index * 100 + '%' });
				}

				$('#swipebox-slider .slide').removeClass('current');
				$('#swipebox-slider .slide').eq(index).addClass('current');
				this.setTitle(index);

				if (isFirst) {
					slider.fadeIn();
				}

				$('#swipebox-prev, #swipebox-next').removeClass('disabled');

				if (index === 0) {
					$('#swipebox-prev').addClass('disabled');
				} else if (index === elements.length - 1 && plugin.settings.loopAtEnd !== true) {
					$('#swipebox-next').addClass('disabled');
				}
			},

			/**
    * Open slide
    */
			openSlide: function openSlide(index) {
				$('html').addClass('swipebox-html');
				if (isTouch) {
					$('html').addClass('swipebox-touch');

					if (plugin.settings.hideCloseButtonOnMobile) {
						$('html').addClass('swipebox-no-close-button');
					}
				} else {
					$('html').addClass('swipebox-no-touch');
				}
				$(window).trigger('resize'); // fix scroll bar visibility on desktop
				this.setSlide(index, true);
			},

			/**
    * Set a time out if the media is a video
    */
			preloadMedia: function preloadMedia(index) {
				var $this = this,
				    src = null;

				if (elements[index] !== undefined) {
					src = elements[index].href;
				}

				if (!$this.isVideo(src)) {
					setTimeout(function () {
						$this.openMedia(index);
					}, 1000);
				} else {
					$this.openMedia(index);
				}
			},

			/**
    * Open
    */
			openMedia: function openMedia(index) {
				var $this = this,
				    src,
				    slide;

				if (elements[index] !== undefined) {
					src = elements[index].href;
				}

				if (index < 0 || index >= elements.length) {
					return false;
				}

				slide = $('#swipebox-slider .slide').eq(index);

				if (!$this.isVideo(src)) {
					slide.addClass('slide-loading');
					$this.loadMedia(src, function () {
						slide.removeClass('slide-loading');
						slide.html(this);

						if (plugin.settings.afterMedia) {
							plugin.settings.afterMedia(index);
						}
					});
				} else {
					slide.html($this.getVideo(src));

					if (plugin.settings.afterMedia) {
						plugin.settings.afterMedia(index);
					}
				}
			},

			/**
    * Set link title attribute as caption
    */
			setTitle: function setTitle(index) {
				var title = null;

				$('#swipebox-title').empty();

				if (elements[index] !== undefined) {
					title = elements[index].title;
				}

				if (title) {
					$('#swipebox-top-bar').show();
					$('#swipebox-title').append(title);
				} else {
					$('#swipebox-top-bar').hide();
				}
			},

			/**
    * Check if the URL is a video
    */
			isVideo: function isVideo(src) {

				if (src) {
					if (src.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || src.match(/vimeo\.com\/([0-9]*)/) || src.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) {
						return true;
					}

					if (src.toLowerCase().indexOf('swipeboxvideo=1') >= 0) {

						return true;
					}
				}
			},

			/**
    * Parse URI querystring and:
    * - overrides value provided via dictionary
    * - rebuild it again returning a string
    */
			parseUri: function parseUri(uri, customData) {
				var a = document.createElement('a'),
				    qs = {};

				// Decode the URI
				a.href = decodeURIComponent(uri);

				// QueryString to Object
				if (a.search) {
					qs = JSON.parse('{"' + a.search.toLowerCase().replace('?', '').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
				}

				// Extend with custom data
				if ($.isPlainObject(customData)) {
					qs = $.extend(qs, customData, plugin.settings.queryStringData); // The dev has always the final word
				}

				// Return querystring as a string
				return $.map(qs, function (val, key) {
					if (val && val > '') {
						return encodeURIComponent(key) + '=' + encodeURIComponent(val);
					}
				}).join('&');
			},

			/**
    * Get video iframe code from URL
    */
			getVideo: function getVideo(url) {
				var iframe = '',
				    youtubeUrl = url.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),
				    youtubeShortUrl = url.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
				    vimeoUrl = url.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
				    qs = '';
				if (youtubeUrl || youtubeShortUrl) {
					if (youtubeShortUrl) {
						youtubeUrl = youtubeShortUrl;
					}
					qs = ui.parseUri(url, {
						'autoplay': plugin.settings.autoplayVideos ? '1' : '0',
						'v': ''
					});
					iframe = '<iframe width="560" height="315" src="//' + youtubeUrl[1] + '/embed/' + youtubeUrl[2] + '?' + qs + '" frameborder="0" allowfullscreen></iframe>';
				} else if (vimeoUrl) {
					qs = ui.parseUri(url, {
						'autoplay': plugin.settings.autoplayVideos ? '1' : '0',
						'byline': '0',
						'portrait': '0',
						'color': plugin.settings.vimeoColor
					});
					iframe = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + vimeoUrl[1] + '?' + qs + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
				} else {
					iframe = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
				}

				return '<div class="swipebox-video-container" style="max-width:' + plugin.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + iframe + '</div></div>';
			},

			/**
    * Load image
    */
			loadMedia: function loadMedia(src, callback) {
				// Inline content
				if (src.trim().indexOf('#') === 0) {
					callback.call($('<div>', {
						'class': 'swipebox-inline-container'
					}).append($(src).clone().toggleClass(plugin.settings.toggleClassOnLoad)));
				}
				// Everything else
				else {
						if (!this.isVideo(src)) {
							var img = $('<img>').on('load', function () {
								callback.call(img);
							});

							img.attr('src', src);
						}
					}
			},

			/**
    * Get next slide
    */
			getNext: function getNext() {
				var $this = this,
				    src,
				    index = $('#swipebox-slider .slide').index($('#swipebox-slider .slide.current'));
				if (index + 1 < elements.length) {

					src = $('#swipebox-slider .slide').eq(index).contents().find('iframe').attr('src');
					$('#swipebox-slider .slide').eq(index).contents().find('iframe').attr('src', src);
					index++;
					$this.setSlide(index);
					$this.preloadMedia(index + 1);
					if (plugin.settings.nextSlide) {
						plugin.settings.nextSlide(index);
					}
				} else {

					if (plugin.settings.loopAtEnd === true) {
						src = $('#swipebox-slider .slide').eq(index).contents().find('iframe').attr('src');
						$('#swipebox-slider .slide').eq(index).contents().find('iframe').attr('src', src);
						index = 0;
						$this.preloadMedia(index);
						$this.setSlide(index);
						$this.preloadMedia(index + 1);
						if (plugin.settings.nextSlide) {
							plugin.settings.nextSlide(index);
						}
					} else {
						$('#swipebox-overlay').addClass('rightSpring');
						setTimeout(function () {
							$('#swipebox-overlay').removeClass('rightSpring');
						}, 500);
					}
				}
			},

			/**
    * Get previous slide
    */
			getPrev: function getPrev() {
				var index = $('#swipebox-slider .slide').index($('#swipebox-slider .slide.current')),
				    src;
				if (index > 0) {
					src = $('#swipebox-slider .slide').eq(index).contents().find('iframe').attr('src');
					$('#swipebox-slider .slide').eq(index).contents().find('iframe').attr('src', src);
					index--;
					this.setSlide(index);
					this.preloadMedia(index - 1);
					if (plugin.settings.prevSlide) {
						plugin.settings.prevSlide(index);
					}
				} else {
					$('#swipebox-overlay').addClass('leftSpring');
					setTimeout(function () {
						$('#swipebox-overlay').removeClass('leftSpring');
					}, 500);
				}
			},
			/* jshint unused:false */
			nextSlide: function nextSlide(index) {
				// Callback for next slide
			},

			prevSlide: function prevSlide(index) {
				// Callback for prev slide
			},

			/**
    * Close
    */
			closeSlide: function closeSlide() {
				$('html').removeClass('swipebox-html');
				$('html').removeClass('swipebox-touch');
				$(window).trigger('resize');
				this.destroy();
			},

			/**
    * Destroy the whole thing
    */
			destroy: function destroy() {
				$(window).unbind('keyup');
				$('body').unbind('touchstart');
				$('body').unbind('touchmove');
				$('body').unbind('touchend');
				$('#swipebox-slider').unbind();
				$('#swipebox-overlay').remove();

				if (!$.isArray(elem)) {
					elem.removeData('_swipebox');
				}

				if (this.target) {
					this.target.trigger('swipebox-destroy');
				}

				$.swipebox.isOpen = false;

				if (plugin.settings.afterClose) {
					plugin.settings.afterClose();
				}
			}
		};

		plugin.init();
	};

	$.fn.swipebox = function (options) {

		if (!$.data(this, '_swipebox')) {
			var swipebox = new $.swipebox(this, options);
			this.data('_swipebox', swipebox);
		}
		return this.data('_swipebox');
	};
})(window, document, jQuery);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.4.0 - built 2017-01-04
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2017 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    var defaults = {
        slide: 0,
        delay: 5000,
        loop: true,
        preload: false,
        preloadImage: false,
        preloadVideo: false,
        timer: true,
        overlay: false,
        autoplay: true,
        shuffle: false,
        cover: true,
        color: null,
        align: 'center',
        valign: 'center',
        firstTransition: null,
        firstTransitionDuration: null,
        transition: 'fade',
        transitionDuration: 1000,
        transitionRegister: [],
        animation: null,
        animationDuration: 'auto',
        animationRegister: [],
        slidesToKeep: 1,
        init: function init() {},
        play: function play() {},
        pause: function pause() {},
        walk: function walk() {},
        slides: [
            // {
            //  src:                null,
            //  color:              null,
            //  delay:              null,
            //  align:              null,
            //  valign:             null,
            //  transition:         null,
            //  transitionDuration: null,
            //  animation:          null,
            //  animationDuration:  null,
            //  cover:              true,
            //  video: {
            //      src: [],
            //      mute: true,
            //      loop: true
            // }
            // ...
        ]
    };

    var videoCache = {};

    var Vegas = function Vegas(elmt, options) {
        this.elmt = elmt;
        this.settings = $.extend({}, defaults, $.vegas.defaults, options);
        this.slide = this.settings.slide;
        this.total = this.settings.slides.length;
        this.noshow = this.total < 2;
        this.paused = !this.settings.autoplay || this.noshow;
        this.ended = false;
        this.$elmt = $(elmt);
        this.$timer = null;
        this.$overlay = null;
        this.$slide = null;
        this.timeout = null;
        this.first = true;

        this.transitions = ['fade', 'fade2', 'blur', 'blur2', 'flash', 'flash2', 'negative', 'negative2', 'burn', 'burn2', 'slideLeft', 'slideLeft2', 'slideRight', 'slideRight2', 'slideUp', 'slideUp2', 'slideDown', 'slideDown2', 'zoomIn', 'zoomIn2', 'zoomOut', 'zoomOut2', 'swirlLeft', 'swirlLeft2', 'swirlRight', 'swirlRight2'];

        this.animations = ['kenburns', 'kenburnsLeft', 'kenburnsRight', 'kenburnsUp', 'kenburnsUpLeft', 'kenburnsUpRight', 'kenburnsDown', 'kenburnsDownLeft', 'kenburnsDownRight'];

        if (this.settings.transitionRegister instanceof Array === false) {
            this.settings.transitionRegister = [this.settings.transitionRegister];
        }

        if (this.settings.animationRegister instanceof Array === false) {
            this.settings.animationRegister = [this.settings.animationRegister];
        }

        this.transitions = this.transitions.concat(this.settings.transitionRegister);
        this.animations = this.animations.concat(this.settings.animationRegister);

        this.support = {
            objectFit: 'objectFit' in document.body.style,
            transition: 'transition' in document.body.style || 'WebkitTransition' in document.body.style,
            video: $.vegas.isVideoCompatible()
        };

        if (this.settings.shuffle === true) {
            this.shuffle();
        }

        this._init();
    };

    Vegas.prototype = {
        _init: function _init() {
            var $wrapper,
                $overlay,
                $timer,
                isBody = this.elmt.tagName === 'BODY',
                timer = this.settings.timer,
                overlay = this.settings.overlay,
                self = this;

            // Preloading
            this._preload();

            // Wrapper with content
            if (!isBody) {
                this.$elmt.css('height', this.$elmt.css('height'));

                $wrapper = $('<div class="vegas-wrapper">').css('overflow', this.$elmt.css('overflow')).css('padding', this.$elmt.css('padding'));

                // Some browsers don't compute padding shorthand
                if (!this.$elmt.css('padding')) {
                    $wrapper.css('padding-top', this.$elmt.css('padding-top')).css('padding-bottom', this.$elmt.css('padding-bottom')).css('padding-left', this.$elmt.css('padding-left')).css('padding-right', this.$elmt.css('padding-right'));
                }

                this.$elmt.clone(true).children().appendTo($wrapper);
                this.elmt.innerHTML = '';
            }

            // Timer
            if (timer && this.support.transition) {
                $timer = $('<div class="vegas-timer"><div class="vegas-timer-progress">');
                this.$timer = $timer;
                this.$elmt.prepend($timer);
            }

            // Overlay
            if (overlay) {
                $overlay = $('<div class="vegas-overlay">');

                if (typeof overlay === 'string') {
                    $overlay.css('background-image', 'url(' + overlay + ')');
                }

                this.$overlay = $overlay;
                this.$elmt.prepend($overlay);
            }

            // Container
            this.$elmt.addClass('vegas-container');

            if (!isBody) {
                this.$elmt.append($wrapper);
            }

            setTimeout(function () {
                self.trigger('init');
                self._goto(self.slide);

                if (self.settings.autoplay) {
                    self.trigger('play');
                }
            }, 1);
        },

        _preload: function _preload() {
            var img, i;

            for (i = 0; i < this.settings.slides.length; i++) {
                if (this.settings.preload || this.settings.preloadImages) {
                    if (this.settings.slides[i].src) {
                        img = new Image();
                        img.src = this.settings.slides[i].src;
                    }
                }

                if (this.settings.preload || this.settings.preloadVideos) {
                    if (this.support.video && this.settings.slides[i].video) {
                        if (this.settings.slides[i].video instanceof Array) {
                            this._video(this.settings.slides[i].video);
                        } else {
                            this._video(this.settings.slides[i].video.src);
                        }
                    }
                }
            }
        },

        _random: function _random(array) {
            return array[Math.floor(Math.random() * array.length)];
        },

        _slideShow: function _slideShow() {
            var self = this;

            if (this.total > 1 && !this.ended && !this.paused && !this.noshow) {
                this.timeout = setTimeout(function () {
                    self.next();
                }, this._options('delay'));
            }
        },

        _timer: function _timer(state) {
            var self = this;

            clearTimeout(this.timeout);

            if (!this.$timer) {
                return;
            }

            this.$timer.removeClass('vegas-timer-running').find('div').css('transition-duration', '0ms');

            if (this.ended || this.paused || this.noshow) {
                return;
            }

            if (state) {
                setTimeout(function () {
                    self.$timer.addClass('vegas-timer-running').find('div').css('transition-duration', self._options('delay') - 100 + 'ms');
                }, 100);
            }
        },

        _video: function _video(srcs) {
            var video,
                source,
                cacheKey = srcs.toString();

            if (videoCache[cacheKey]) {
                return videoCache[cacheKey];
            }

            if (srcs instanceof Array === false) {
                srcs = [srcs];
            }

            video = document.createElement('video');
            video.preload = true;

            srcs.forEach(function (src) {
                source = document.createElement('source');
                source.src = src;
                video.appendChild(source);
            });

            videoCache[cacheKey] = video;

            return video;
        },

        _fadeOutSound: function _fadeOutSound(video, duration) {
            var self = this,
                delay = duration / 10,
                volume = video.volume - 0.09;

            if (volume > 0) {
                video.volume = volume;

                setTimeout(function () {
                    self._fadeOutSound(video, duration);
                }, delay);
            } else {
                video.pause();
            }
        },

        _fadeInSound: function _fadeInSound(video, duration) {
            var self = this,
                delay = duration / 10,
                volume = video.volume + 0.09;

            if (volume < 1) {
                video.volume = volume;

                setTimeout(function () {
                    self._fadeInSound(video, duration);
                }, delay);
            }
        },

        _options: function _options(key, i) {
            if (i === undefined) {
                i = this.slide;
            }

            if (this.settings.slides[i][key] !== undefined) {
                return this.settings.slides[i][key];
            }

            return this.settings[key];
        },

        _goto: function _goto(nb) {
            if (typeof this.settings.slides[nb] === 'undefined') {
                nb = 0;
            }

            this.slide = nb;

            var $slide,
                $inner,
                $video,
                $slides = this.$elmt.children('.vegas-slide'),
                src = this.settings.slides[nb].src,
                videoSettings = this.settings.slides[nb].video,
                delay = this._options('delay'),
                align = this._options('align'),
                valign = this._options('valign'),
                cover = this._options('cover'),
                color = this._options('color') || this.$elmt.css('background-color'),
                self = this,
                total = $slides.length,
                video,
                img;

            var transition = this._options('transition'),
                transitionDuration = this._options('transitionDuration'),
                animation = this._options('animation'),
                animationDuration = this._options('animationDuration');

            if (this.settings.firstTransition && this.first) {
                transition = this.settings.firstTransition || transition;
            }

            if (this.settings.firstTransitionDuration && this.first) {
                transitionDuration = this.settings.firstTransitionDuration || transitionDuration;
            }

            if (this.first) {
                this.first = false;
            }

            if (cover !== 'repeat') {
                if (cover === true) {
                    cover = 'cover';
                } else if (cover === false) {
                    cover = 'contain';
                }
            }

            if (transition === 'random' || transition instanceof Array) {
                if (transition instanceof Array) {
                    transition = this._random(transition);
                } else {
                    transition = this._random(this.transitions);
                }
            }

            if (animation === 'random' || animation instanceof Array) {
                if (animation instanceof Array) {
                    animation = this._random(animation);
                } else {
                    animation = this._random(this.animations);
                }
            }

            if (transitionDuration === 'auto' || transitionDuration > delay) {
                transitionDuration = delay;
            }

            if (animationDuration === 'auto') {
                animationDuration = delay;
            }

            $slide = $('<div class="vegas-slide"></div>');

            if (this.support.transition && transition) {
                $slide.addClass('vegas-transition-' + transition);
            }

            // Video

            if (this.support.video && videoSettings) {
                if (videoSettings instanceof Array) {
                    video = this._video(videoSettings);
                } else {
                    video = this._video(videoSettings.src);
                }

                video.loop = videoSettings.loop !== undefined ? videoSettings.loop : true;
                video.muted = videoSettings.mute !== undefined ? videoSettings.mute : true;

                if (video.muted === false) {
                    video.volume = 0;
                    this._fadeInSound(video, transitionDuration);
                } else {
                    video.pause();
                }

                $video = $(video).addClass('vegas-video').css('background-color', color);

                if (this.support.objectFit) {
                    $video.css('object-position', align + ' ' + valign).css('object-fit', cover).css('width', '100%').css('height', '100%');
                } else if (cover === 'contain') {
                    $video.css('width', '100%').css('height', '100%');
                }

                $slide.append($video);

                // Image
            } else {
                img = new Image();

                $inner = $('<div class="vegas-slide-inner"></div>').css('background-image', 'url("' + src + '")').css('background-color', color).css('background-position', align + ' ' + valign);

                if (cover === 'repeat') {
                    $inner.css('background-repeat', 'repeat');
                } else {
                    $inner.css('background-size', cover);
                }

                if (this.support.transition && animation) {
                    $inner.addClass('vegas-animation-' + animation).css('animation-duration', animationDuration + 'ms');
                }

                $slide.append($inner);
            }

            if (!this.support.transition) {
                $slide.css('display', 'none');
            }

            if (total) {
                $slides.eq(total - 1).after($slide);
            } else {
                this.$elmt.prepend($slide);
            }

            $slides.css('transition', 'all 0ms').each(function () {
                this.className = 'vegas-slide';

                if (this.tagName === 'VIDEO') {
                    this.className += ' vegas-video';
                }

                if (transition) {
                    this.className += ' vegas-transition-' + transition;
                    this.className += ' vegas-transition-' + transition + '-in';
                }
            });

            self._timer(false);

            function go() {
                self._timer(true);

                setTimeout(function () {
                    if (transition) {
                        if (self.support.transition) {
                            $slides.css('transition', 'all ' + transitionDuration + 'ms').addClass('vegas-transition-' + transition + '-out');

                            $slides.each(function () {
                                var video = $slides.find('video').get(0);

                                if (video) {
                                    video.volume = 1;
                                    self._fadeOutSound(video, transitionDuration);
                                }
                            });

                            $slide.css('transition', 'all ' + transitionDuration + 'ms').addClass('vegas-transition-' + transition + '-in');
                        } else {
                            $slide.fadeIn(transitionDuration);
                        }
                    }

                    for (var i = 0; i < $slides.length - self.settings.slidesToKeep; i++) {
                        $slides.eq(i).remove();
                    }

                    self.trigger('walk');
                    self._slideShow();
                }, 100);
            }
            if (video) {
                if (video.readyState === 4) {
                    video.currentTime = 0;
                }

                video.play();
                go();
            } else {
                img.src = src;

                if (img.complete) {
                    go();
                } else {
                    img.onload = go;
                }
            }
        },

        _end: function _end() {
            this.ended = true;
            this._timer(false);
            this.trigger('end');
        },

        shuffle: function shuffle() {
            var temp, rand;

            for (var i = this.total - 1; i > 0; i--) {
                rand = Math.floor(Math.random() * (i + 1));
                temp = this.settings.slides[i];

                this.settings.slides[i] = this.settings.slides[rand];
                this.settings.slides[rand] = temp;
            }
        },

        play: function play() {
            if (this.paused) {
                this.paused = false;
                this.next();
                this.trigger('play');
            }
        },

        pause: function pause() {
            this._timer(false);
            this.paused = true;
            this.trigger('pause');
        },

        toggle: function toggle() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        },

        playing: function playing() {
            return !this.paused && !this.noshow;
        },

        current: function current(advanced) {
            if (advanced) {
                return {
                    slide: this.slide,
                    data: this.settings.slides[this.slide]
                };
            }
            return this.slide;
        },

        jump: function jump(nb) {
            if (nb < 0 || nb > this.total - 1 || nb === this.slide) {
                return;
            }

            this.slide = nb;
            this._goto(this.slide);
        },

        next: function next() {
            this.slide++;

            if (this.slide >= this.total) {
                if (!this.settings.loop) {
                    return this._end();
                }

                this.slide = 0;
            }

            this._goto(this.slide);
        },

        previous: function previous() {
            this.slide--;

            if (this.slide < 0) {
                if (!this.settings.loop) {
                    this.slide++;
                    return;
                } else {
                    this.slide = this.total - 1;
                }
            }

            this._goto(this.slide);
        },

        trigger: function trigger(fn) {
            var params = [];

            if (fn === 'init') {
                params = [this.settings];
            } else {
                params = [this.slide, this.settings.slides[this.slide]];
            }

            this.$elmt.trigger('vegas' + fn, params);

            if (typeof this.settings[fn] === 'function') {
                this.settings[fn].apply(this.$elmt, params);
            }
        },

        options: function options(key, value) {
            var oldSlides = this.settings.slides.slice();

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                this.settings = $.extend({}, defaults, $.vegas.defaults, key);
            } else if (typeof key === 'string') {
                if (value === undefined) {
                    return this.settings[key];
                }
                this.settings[key] = value;
            } else {
                return this.settings;
            }

            // In case slides have changed
            if (this.settings.slides !== oldSlides) {
                this.total = this.settings.slides.length;
                this.noshow = this.total < 2;
                this._preload();
            }
        },

        destroy: function destroy() {
            clearTimeout(this.timeout);

            this.$elmt.removeClass('vegas-container');
            this.$elmt.find('> .vegas-slide').remove();
            this.$elmt.find('> .vegas-wrapper').clone(true).children().appendTo(this.$elmt);
            this.$elmt.find('> .vegas-wrapper').remove();

            if (this.settings.timer) {
                this.$timer.remove();
            }

            if (this.settings.overlay) {
                this.$overlay.remove();
            }

            this.elmt._vegas = null;
        }
    };

    $.fn.vegas = function (options) {
        var args = arguments,
            error = false,
            returns;

        if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            return this.each(function () {
                if (!this._vegas) {
                    this._vegas = new Vegas(this, options);
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var instance = this._vegas;

                if (!instance) {
                    throw new Error('No Vegas applied to this element.');
                }

                if (typeof instance[options] === 'function' && options[0] !== '_') {
                    returns = instance[options].apply(instance, [].slice.call(args, 1));
                } else {
                    error = true;
                }
            });

            if (error) {
                throw new Error('No method "' + options + '" in Vegas.');
            }

            return returns !== undefined ? returns : this;
        }
    };

    $.vegas = {};
    $.vegas.defaults = defaults;

    $.vegas.isVideoCompatible = function () {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
    };
})(window.jQuery || window.Zepto);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Code for specific docs examples.

!function () {

  $('[data-docs-example-ofc]').click(function () {
    $('#offCanvasLeft').toggleClass('reveal-for-large');
    $('.sticky').foundation('_calc', true);
  });

  $('[data-docs-example-series]').click(function () {
    $('#series-example').addClass('is-animating');
  });

  var $transitionDemo = $('.docs-transition-demo');
  $('.docs-transitions').change(function () {
    var value = $(this).val();
    var method = value.match('-in') ? 'animateIn' : 'animateOut';

    Foundation.Motion[method]($transitionDemo, value, function () {
      $transitionDemo.show();
    });
  });
  var stickyMag = $('#sticky-magellan');
  stickyMag.on('sticky.zf.stuckto:top', function () {
    stickyMag.find('nav').addClass('stuck-mag');
  }).on('sticky.zf.unstuckfrom:top', function (e) {
    stickyMag.find('nav').removeClass('stuck-mag');
  });
}();

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  var loaded = false;
  $('#docs-example-interchange').on('replaced.zf.interchange', function () {
    if (Foundation.MediaQuery.atLeast('large')) {
      if (!loaded) {
        $.getScript("https://maps.googleapis.com/maps/api/js?key=rr3&sensor=false&callback=initializeMaps").done(function () {
          loaded = true;
        });
      } else {
        window.initializeMaps();
      }
    }
  });

  window.initializeMaps = function () {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 13,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(-34.9206501, 138.6044516), // University of Adelaide

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{ 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#acbcc9' }] }, { 'featureType': 'landscape', 'stylers': [{ 'color': '#f2e5d4' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#c5c6c6' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#e4d7c6' }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#fbfaf7' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#c5dac6' }] }, { 'featureType': 'administrative', 'stylers': [{ 'visibility': 'on' }, { 'lightness': 33 }] }, { 'featureType': 'road' }, { 'featureType': 'poi.park', 'elementType': 'labels', 'stylers': [{ 'visibility': 'on' }, { 'lightness': 20 }] }, {}, { 'featureType': 'road', 'stylers': [{ 'lightness': 20 }] }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var markerOptions = {
      map: map,
      position: { lat: -34.9206501, lng: 138.6044516 },
      title: 'University of Adelaide'
    };
    var marker = new google.maps.Marker(markerOptions);
  };
}();

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).foundation();

// [TODO] Remove this when possible
$(function () {
  // Equalizer test
  var counter = 0;
  $('#test-eq').on('postEqualized.zf.Equalizer', function () {
    counter++;
    console.log(counter);
  });
  $('#pokemonRed').on('invalid.fndtn.abide', function (e, data) {
    console.log(data);
  });
});

$(function () {
  $('[data-docs-version]').text('v' + Foundation.version);
});

var ACCORDION_KEY = 'docs-accordion-expandall';
var expandAccordion = function expandAccordion($a) {
  $a.parent('.accordion').find('.accordion-item, .accordion-content').addClass('is-active');
  $a.text('Collapse');
  $a.data('expandAll', false);
  if (localStorage) {
    localStorage.setItem(ACCORDION_KEY, 'true');
  }
};

var contractAccordion = function contractAccordion($a) {
  $a.parent('.accordion').find('.accordion-item, .accordion-content').removeClass('is-active');
  $a.text('Expand');
  $a.data('expandAll', true);
  if (localStorage) {
    localStorage.setItem(ACCORDION_KEY, 'false');
  }
};

$('[data-expand-all]').on('click', function () {
  var $a = $(this);
  if ($a.data().expandAll === true) {
    expandAccordion($a);
  } else {
    contractAccordion($a);
  }
});

if (localStorage.getItem(ACCORDION_KEY) === 'true') {
  expandAccordion($('[data-expand-all]'));
} else {
  $('[data-expand-all]').text('Expand');
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Manually build the pagination
(function ($) {
  var current = void 0;
  var itemsArray = [];

  // Loop each docs left menu item and push each item into the itemsArray.
  // Find the current page menu item which has the class of 'current'.
  $('.docs-nav-container .docs-nav-subcategory li').each(function (i) {
    itemsArray.push(this);
    if ($(this).hasClass('current')) {
      current = this;
      this.index = i;
    }
  });

  // get the previous and next items in the array, based on the current index
  // as well as get the href and text of the previous and next items
  var previous = itemsArray[current.index - 1];
  var next = itemsArray[current.index + 1];
  var previous_text = $(previous).find('a').children().remove().end().text();
  var next_text = $(next).find('a').children().remove().end().text();
  var previous_href = $(previous).find('a').attr('href');
  var next_href = $(next).find('a').attr('href');

  // The pagination menu items
  var pagination_prev = $('.docs-pagination-prev').find('a').first();
  var pagination_next = $('.docs-pagination-next').find('a').first();

  // Set the previous and next item, if they exists in the array,
  // otherwise hide dud previous or next pagination item markup
  if (typeof previous !== 'undefined') {
    pagination_prev.find('span').text(previous_text);
    pagination_prev.attr('href', previous_href);
  } else {
    pagination_prev.hide();
  }
  if (typeof next !== 'undefined') {
    pagination_next.find('span').text(next_text);
    pagination_next.attr('href', next_href);
  } else {
    pagination_next.hide();
  }
})(jQuery);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *  ua_audioplaylist() an HTML5 <audio> playlist plugin
 *
 *  A table of mp3 references listed below an <audio> element which can update the current playing audio and auto play.
 *
 *  Options:
 *  - audio_playlist (string): a string which defines the player CSS class name.
 *  - audio_playlist_track (string): a string which defines the track CSS class name.
 *  - active_track_class (string): a string which defines the active track CSS class name.
 *  - current_track_name (string): a string which defines the current track CSS class name.
 *  - playlist (string): a string which defines the playlist CSS class name.
 *  - player_start_volume (number): a number whicih defines the starting volume setting for the audio player.
 *  - is_playing_text (string): text to display before the track title when audio player is playing.
 *  - is_paused_text (string): text to display before the track title when audio player is paused.
 *
 *  Made by Andrew Smith andrew.smith03@adelaide.edu.au
 *
 */

/* global mejs*/
/* eslint strict: ["error", "function"] */

(function ($) {
  'use strict';

  var pluginName = 'ua_audioplaylist';
  var defaults = {
    audio_playlist: 'c-audio-playlist__audio',
    audio_playlist_track: 'c-audio-playlist__track',
    active_track_class: 'is-active',
    current_track_name: 'c-audio-playlist__track-info-text',
    playlist: 'c-audio-playlist__playlist',
    player_start_volume: .50,
    track_info_text: true,
    is_playing_text: 'Currently playing',
    is_paused_text: 'Ready to play'
  };

  // The actual plugin constructor
  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, {

    init: function init() {
      var self = this;
      var $el = $(self.element);
      var $link;
      var $audio = $el.find('.' + self.settings.audio_playlist)[0];
      var $playlist = $el.find('.' + self.settings.playlist);
      var $tracks = $playlist.find('.' + self.settings.audio_playlist_track);
      var tracksLength = $tracks.length - 1;
      self.settings.tracksLength = tracksLength;
      self.settings.playing_state = false;
      self.settings.current = 0;

      $el.each(function () {
        var $tracks = $el.find('.' + self.settings.audio_playlist_track);
        var $activeElement;
        var activeTrackHTML;
        var activeClassExists = false;
        var current;
        var autoPlay;

        // Check for the active class on page load.
        // If so, assign current index to the index of this track.
        $tracks.each(function (index) {
          this.index = index;
          if ($(this).hasClass(self.settings.active_track_class)) {
            self.settings.current = this.index;
            activeClassExists = true;
            $activeElement = $(this);
          }
        });

        // If active class wasn't set in HTML on page load,
        // assign the current index to the first tracks index
        // and give the first track the active class.
        current = self.settings.current;
        if (!activeClassExists) {
          $activeElement = $($tracks[current]);
        }

        // If use track help text is true, add element to the DOM and pass the
        // default active track to the update Track Info Text method.
        if (self.settings.track_info_text) {
          activeTrackHTML = $($activeElement).html();
          $el.prepend('<p class="' + self.settings.current_track_name + '"</p>');
          self.updateTrackInfoText(activeTrackHTML);
        }

        // Detect whether the pollyfill is in use - mediaelement.js
        // The pollyfill has slightly different API methods than native HTML5 JavaScript API.
        if ($.fn.mediaelementplayer) {
          var whichplayer = $el.find('.mejs__container').attr('id');
          var playerInUse = mejs.players[whichplayer];
          $audio = playerInUse.media;
          $audio.setVolume(self.settings.player_start_volume);
        } else {
          $audio.volume = self.settings.player_start_volume;
        }

        // Set the audio player source with the current track
        // but do not start playing automatically.
        self.run($activeElement, $audio, false);

        // Listen for native HTML5 API play or pause events
        // and then update the track info text accordingly.
        function playPause(playing_state) {
          activeTrackHTML = $playlist.find($('.' + self.settings.active_track_class)).html();
          self.settings.playing_state = playing_state;
          self.updateTrackInfoText(activeTrackHTML);
        }
        $($audio).on('play', function () {
          playPause(true);
        });
        $($audio).on('pause', function () {
          playPause(false);
        });

        // Send the clicked audio link href to the run method in order
        // to update the current audio player source and begin playing.
        $tracks.click(function (e) {
          e.preventDefault();
          current = this.index;
          self.settings.current = current;
          self.settings.user_clicked = true;
          self.run($(this), $audio, true);
        });

        // Begin playing the next audio track in the playlist once the currently playing audio is ended.
        $audio.addEventListener('ended', function () {
          current++;
          if (current > tracksLength) {
            current = 0;
            autoPlay = false;
            $link = $playlist.find('.' + self.settings.audio_playlist_track)[0];

            // Ensure the track info text is updated after last track ended.
            self.updateTrackInfoText($($link).html());
          } else {
            $link = $playlist.find('.' + self.settings.audio_playlist_track)[current];
            autoPlay = true;
          }
          self.settings.current = current;
          self.settings.user_clicked = false;
          self.run($($link), $audio, autoPlay);
        });
      });
    },
    run: function run(link, player, autoPlay) {
      var self = this;
      var $el = $(self.element);
      var newSrc = link.attr('href');

      // Switch the active class to the newly playing audio track.
      $el.find('.' + self.settings.audio_playlist_track).removeClass(self.settings.active_track_class);
      link.addClass(self.settings.active_track_class);

      // Again, slightly different way to set the src to the audio player
      // depending on whether using native or the pollyfill API.
      if ($.fn.mediaelementplayer) {
        player.setSrc(newSrc);
      } else {
        player.src = newSrc;
      }

      // Load and then play the new audio track.
      // Both native and pollyfill API use the same method names for this functionality.
      player.load();

      // Only play if autoplay is passed in as true.
      // False is passed in when its the initial page load and
      // also when the last track finishes playing.
      if (autoPlay) {
        player.play();
      }

      return false;
    },
    updateTrackInfoText: function updateTrackInfoText(element) {
      var self = this;
      var $el = $(self.element);
      var playingText;
      var playing_state = self.settings.playing_state;

      // Store the track info text in a variable depending on playing state.
      if (playing_state) {
        playingText = self.settings.is_playing_text;
      } else {
        playingText = self.settings.is_paused_text;
      }

      // Set up the new track info text and update the HTML.
      var helpText = playingText + ': <strong>' + element + '</strong>';
      $el.find('.' + self.settings.current_track_name).html(helpText);

      return false;
    }
  });

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This code is copied from the following js plugin files from SG V1 and combined temporarily:
// - js/plugins/ua-ext-icons.js
// - js/plugins/ua-linkie.js

// TODO: This needs to be written as ES6 module and also needs more work for exclude custom domains

(function ($) {

  var externalLinkClass = 'fa-external-link';
  var newWindowIconClass = 'fa-window-restore';
  var excludeIconsClass = 'js-hide-icon';
  var hiddenTextClass = 'u-hidden-text';

  var hostnameString = location.hostname.toLowerCase();
  var excludeExternalLink = ['adelaide.edu.au']; // needs to be able to be customised
  // var includeExternalLink = []

  var fileIconExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];
  var fileLinkSelectors = fileIconExtensions.map(function (type) {
    return '.o-layout__main a[href$=".' + type + '"]';
  });

  // File extensions icons.
  // ========================
  $(fileLinkSelectors.join()).each(function () {
    var extension = $(this).attr('href').split('.').pop();
    var spanClasses = ['fa-file-' + extension + '-o'];
    if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
      spanClasses.push(hiddenTextClass);
    }
    $(this).append(' <i class="fa fa-ext fa-fw ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
  });

  // New window icon.
  // ========================
  $('.o-layout__main a[target="_blank"]').each(function () {
    var spanClasses = [newWindowIconClass];
    if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
      spanClasses.push(hiddenTextClass);
    }
    $(this).append(' <i class="fa fa-ext fa-fw ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
  });

  // External link icon.
  // ========================
  $('.o-layout__main a[href^="http"], .o-layout__main a[href^="//"]').each(function () {
    var href = $(this).attr('href');
    var isExternalLinkInHref = true;
    var i;
    var len;

    for (i = 0, len = excludeExternalLink.length; i < len; i++) {
      if (href.indexOf(excludeExternalLink[i]) > -1) {
        isExternalLinkInHref = false;
        break;
      }
    }

    // for (i = 0, len = includeExternalLink.length; i < len; i++) {
    //   if (href.indexOf(includeExternalLink[i]) > -1) {
    //     isExternalLinkInHref = true;
    //     break;
    //   }
    // }

    if (href.indexOf(hostnameString) < 0 && isExternalLinkInHref === true) {
      var spanClasses = [externalLinkClass];
      if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
        spanClasses.push(hiddenTextClass);
      }
      $(this).append(' <i class="fa fa-ext ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
    }
  });
})(jQuery);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var _this = this;

  var $accordion = $('.js-accordion');
  var $accordionNested = $('.js-accordion-nested');
  var accordionOptions = {
    allowAllClosed: true,
    multiExpand: true,
    deepLink: true,
    deepLinkSmudge: true,
    deepLinkSmudgeDelay: 600
  };
  // Create new instance of accordion
  var accordion = new Foundation.Accordion($accordion, accordionOptions); // eslint-disable-line no-unused-vars 

  // Create new settings for new nested instance of accordion
  var nestedAccordionOptions = {
    deepLink: false
  };
  var newNestedAccordionOptions = $.extend({}, accordionOptions, nestedAccordionOptions);
  var accordionNested = new Foundation.Accordion($accordionNested, newNestedAccordionOptions); // eslint-disable-line no-unused-vars 

  // Toggle expand or collapse
  var accordionToggle = function accordionToggle($element) {
    var $this = $element;
    var $items = $($this).find('.c-accordion__item');
    var allExpanded = false;
    var $toggleButton = $($this).find('[data-expand-all]');
    var expandText = 'Expand';
    var collapseText = 'Collapse';
    $this.accordionItemOpenArray = [];

    var expandAccordion = function expandAccordion($thisToggleButton) {
      $thisToggleButton.parent($accordion).find('.c-accordion__title').not('[aria-expanded=true]').click();
      $thisToggleButton.text(collapseText);
      allExpanded = true;
    };

    var contractAccordion = function contractAccordion($thisToggleButton) {
      $thisToggleButton.parent($accordion).find('.c-accordion__title').not('[aria-expanded=false]').click();
      $thisToggleButton.text(expandText);
      allExpanded = false;
    };

    var handleClickToggle = function handleClickToggle(itemHasClass, itemIndex, accordionArray) {
      if (itemHasClass) {
        accordionArray.push(itemIndex);
      } else {
        accordionArray.splice($.inArray(itemIndex, accordionArray), 1);
      }
      if (accordionArray.length === $items.length) {
        allExpanded = true;
        $toggleButton.text(collapseText).attr('aria-expanded', true);
      }
      if (accordionArray.length === 0) {
        allExpanded = false;
        $toggleButton.text(expandText).attr('aria-expanded', true);
      }
    };

    // Toggle all when click toggle buttons
    $toggleButton.on('click', function () {
      var $thisToggleButton = $(this);
      if (allExpanded === false) {
        expandAccordion($thisToggleButton);
      } else {
        contractAccordion($thisToggleButton);
      }
    });

    // Set toggle button text on page load
    $toggleButton.text(expandText);

    // Set index and click handler for each toggle item
    $.each($items, function (itemIndex) {
      this.index = itemIndex;
      var accordiontItemindex = this.index;
      var $anchor = $(this).find('> a');
      var $parentAccordion = $(this).parent();

      $anchor.on('click', function () {
        var itemHasClass = $(this).parent().hasClass('is-active');
        // Send this item index and this item parent array instances to handleClickToggle method
        handleClickToggle(itemHasClass, accordiontItemindex, $parentAccordion[0].accordionItemOpenArray, $toggleButton);
      });
    });

    // Check for an open element on load()
    $(window).on('load', function () {
      $.each($items, function () {
        if ($(this).hasClass('is-active')) {
          $(this).parent()[0].accordionItemOpenArray.push(this.index);
        }
      });
    });

    // Need to reinit equaliser nested within accordion
    if (!$(_this).closest('.js-equalize').length) {
      $($accordion).on('down.zf.accordion', function () {
        var reinitEqualiser = new Foundation.Equalizer($(this).find('.js-equalize')); // eslint-disable-line no-unused-vars
      });
    }
  };

  // Loop the accordion or nested accordion elements and call the toggle function
  $.each($accordion, function () {
    accordionToggle(this);
  });
  $.each($accordionNested, function () {
    accordionToggle(this);
  });
})(jQuery);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var disableClass = 'is-disabled';
  var azBodyClass = '.c-az-list__body';
  var azMenuClass = '.c-az-list__menu > li > a';
  var anchorElement = '.c-az-list__content-item';

  $(function () {
    var $azBody = $(azBodyClass);
    // Foreach azBody we want find all anchor elements and return each heading 2 tag id attribute.
    var $activeHeadings = $azBody.find(anchorElement).map(function () {
      return $(this).attr('id');
    }).get();
    var $azMenu = $(azMenuClass);
    // Loop over each a to z menu - anything that is not in activeHeadings will have disabled class
    // added to it.
    $.each($azMenu, function (index, value) {
      if ($(this).attr('href')) {
        var href = $(value).attr('href').split('#')[1];
        if ($.inArray(href, $activeHeadings) === -1) {
          $(this).parent().addClass(disableClass);
          $(this).removeAttr('href');
        }
      }
    });
    // Smooth scroll for the menu items
    $(azMenuClass).foundation();
  });
})(jQuery);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(95);

(function ($) {
  var $audioPlaylist = $('.js-audio-playlist');

  var loadCSS = function loadCSS(href) {

    var cssLink = $("<link>");
    $("head").append(cssLink); //IE hack: append before setting href

    cssLink.attr({
      rel: "stylesheet",
      type: "text/css",
      href: href
    });
  };

  // Init the audio playlist plugin
  $audioPlaylist.ua_audioplaylist();

  if ($('audio').length && !Modernizr.audio.mp3) {
    // eslint-disable-line no-undef
    loadCSS("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/mediaelementplayer.css");

    $.getScript("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/mediaelement-and-player.js", function () {
      $('audio').mediaelementplayer();
    });
  }

  // Quick pollyfill for video, just in case. I tried using mediaelementplayer but its too buggy and not worth the hassle.
  if ($('video').length && !Modernizr.video.h264) {
    // eslint-disable-line no-undef
    $.getScript("http://api.html5media.info/1.1.8/html5media.min.js");
  }
})(jQuery);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  classNames: {
    dataset: 'c-autocomplete__results is-active',
    suggestion: 'c-autocomplete__results-item',
    cursor: 'is-active'
  },
  linkLimit: 10,
  // Flag to turn on forwards to google search.
  noResults: false,
  noResultsParams: {
    sitePath: '',
    url: ''
  },
  templates: {
    notFound: '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" href="{{noResults}}"><em>Search for {{link}}</em></a>',
    suggestion: function suggestion(link) {
      if (link.hasOwnProperty('target')) {
        return '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" target="' + link.target + '" href="' + link.href + '">' + link.text + '</a></div>';
      }
      return '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" href="' + link.href + '">' + link.text + '</a></div>';
    }
  }
};

// Create a scope alias of jQuery.
var $ = jQuery;

var AutocompleteSearch = function () {
  function AutocompleteSearch(element, options) {
    _classCallCheck(this, AutocompleteSearch);

    this.element = element;
    this.$element = $(element);
    this.$links = this.$element.find('a[href]:not([href^="#"])').not(':has(img)');
    this.$input = this.$element.find('input[name="autocomplete"]');
    this.$go = this.$element.find('button[type="submit"]');
    this.selectedLink = false;
    this.settings = $.extend(true, defaults, options);
    this.init();
  }

  _createClass(AutocompleteSearch, [{
    key: 'init',
    value: function init() {
      // Google search is being used.
      if (this.settings.noResults) {
        // Template to be complied.
        this.settings.noResultsParams.template = this.settings.templates.notFound;
        this.settings.templates.notFound = this.buildNoResultsTemplate.bind(this);
      }

      this.$input.typeahead({
        highlight: true,
        classNames: this.settings.classNames
      }, {
        name: 'links',
        limit: this.settings.linkLimit,
        // Bind the context to this method. That way we have access to Plugin scope.
        source: this.suggestions.bind(this),
        display: this.display,
        templates: this.settings.templates
      });
      this.bindTypeaheadEvents();
    }
  }, {
    key: 'suggestions',
    value: function suggestions(query, callback) {
      var text = void 0;
      var link = void 0;
      var matches = [];
      var regex = new RegExp(query, 'i');
      this.$links.each(function () {
        text = $(this).text();
        if (regex.test(text)) {
          link = { text: text, href: $(this).attr('href'), target: $(this).attr('target') };
          matches.push(link);
        }
      });
      callback(matches);
    }
  }, {
    key: 'display',
    value: function display(link) {
      return link.text;
    }
  }, {
    key: 'bindTypeaheadEvents',
    value: function bindTypeaheadEvents() {
      var context = this;

      this.$input.bind('typeahead:autocomplete', function (event, link) {
        context.selectedLink = link;
      });

      this.$input.bind('typeahead:render', this.focusFirstItem.bind(this));

      this.$input.bind('typeahead:open', function () {
        context.$element.find('.tt-menu').width('100%');
      });

      this.$input.bind('typeahead:cursorchange', function (event, link) {
        context.selectedLink = link;
      });

      this.$input.bind('typeahead:select', function (event, link) {
        context.goToLink(link);
      });

      this.$input.on('keypress', function (event) {
        if (event.which === 13) {
          event.preventDefault();
          if (context.selectedLink) {
            context.goToLink(context.selectedLink);
          }
        }
      });
      this.$go.on('click', function (event) {
        event.preventDefault();
        if (context.selectedLink) {
          context.goToLink(context.selectedLink);
        }
      });

      $('.twitter-typeahead').css('display', 'block');
    }
  }, {
    key: 'focusFirstItem',
    value: function focusFirstItem(event, suggestions) {
      // eslint-disable-line no-unused-vars
      var $firstItem = this.$input.parent().find('.c-autocomplete__results-item:first');
      $firstItem.addClass('is-active');
      $firstItem.focus();
      this.selectedLink = $firstItem.find('a')[0]; // Pull the native javascript element here.
    }
  }, {
    key: 'goToLink',
    value: function goToLink(link) {
      // Respect target blank.
      if (link.hasOwnProperty('target') && link.target) {
        window.open(link.href, link.target);
        return;
      }
      window.location = link.href;
    }
  }, {
    key: 'buildNoResultsTemplate',
    value: function buildNoResultsTemplate(query) {
      var template = this.settings.noResultsParams.template;
      template = template.replace('{{noResults}}', this.buildNoResultsSearchUrl(query.query));
      template = template.replace('{{link}}', query.query);
      return template;
    }
  }, {
    key: 'buildNoResultsSearchUrl',
    value: function buildNoResultsSearchUrl(query) {
      var url = this.settings.noResultsParams.url;
      var sitePath = this.settings.noResultsParams.sitePath;
      url = url.replace('{{site}}', sitePath);
      url = url.replace('{{query}}', query);
      return url;
    }
  }]);

  return AutocompleteSearch;
}();

exports.default = AutocompleteSearch;


window.AutocompleteSearch = AutocompleteSearch;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _autocompleteSearchPlugin = __webpack_require__(100);

var _autocompleteSearchPlugin2 = _interopRequireDefault(_autocompleteSearchPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autocompleteSettings = {
  noResults: true,
  noResultsParams: {
    sitePath: 'adelaide.edu.au',
    url: 'https://search.adelaide.edu.au/s/search.html?collection=uoa-search&q={{query}}&sitesearch={{site}}'
  }
};

var autocomplete = new _autocompleteSearchPlugin2.default($('.js-autocomplete__search-wrapper'), autocompleteSettings); // eslint-disable-line no-unused-vars

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  apiBaseUrl: 'https://www.adelaide.edu.au/webteam/dfsearch/',
  locationBaseUrl: 'https://www.adelaide.edu.au/degree-finder/',
  advancedContentSelector: '.js-degree-finder-advanced',
  advancedToggleSelector: '.js-degree-finder-advanced-toggle'
};

// Create a scope alias of jQuery.
var $ = jQuery;

var DegreeFinder = function () {
  function DegreeFinder(element, options) {
    _classCallCheck(this, DegreeFinder);

    this.options = $.extend(true, defaults, options);
    this.dfDataRequested = false;

    this.$searchField = $(element);
    this.$advanced = $(this.options.advancedContentSelector);
    this.$advanced.hide();

    this.searchYear = this.$searchField.data('js-year') ? parseInt(this.$searchField.data('js-year'), 10) : new Date().getYear() + 1900;

    this.searchList = [];

    this.init();
  }

  _createClass(DegreeFinder, [{
    key: 'init',
    value: function init() {
      this.bindAdvancedToggleEvent();
      this.createWidget();
      this.bindSearchFieldEvents();
    }
  }, {
    key: 'bindAdvancedToggleEvent',
    value: function bindAdvancedToggleEvent() {
      var _this = this;

      $(this.options.advancedToggleSelector).on('click', function (e) {
        e.preventDefault();
        _this.$advanced.toggle();
      });
    }
  }, {
    key: 'createWidget',
    value: function createWidget() {
      $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create: function _create() {
          this._super();
          this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        _renderMenu: function _renderMenu(ul, items) {
          var that = this,
              currentCategory = "";
          $.each(items, function (index, item) {
            var li = void 0;
            if (item.category !== currentCategory) {
              ul.append('<li class=\'ui-autocomplete-category\'>' + item.category + '</li>');
              currentCategory = item.category;
            }
            li = that._renderItemData(ul, item);
            if (item.category) {
              li.attr("aria-label", item.category + ' : ' + item.label);
            }
          });
        },
        _renderItem: function _renderItem(ul, item) {
          return $('<li />').data('item.autocomplete', item).append($('<a />').text(item.label)).appendTo(ul);
        }
      });
    }
  }, {
    key: 'dfSearchForm',
    value: function dfSearchForm(action, searchVal) {
      var params = {
        m: 'view',
        dsn: 'program.source_program',
        year: this.searchYear,
        // eslint-disable-next-line camelcase
        v_avail_comm: 1
      };
      params[action] = searchVal;
      window.location = this.options.locationBaseUrl + '?' + jQuery.param(params);
    }
  }, {
    key: 'bindSearchFieldEvents',
    value: function bindSearchFieldEvents() {
      var _this2 = this;

      this.$searchField.catcomplete({
        source: this.searchList
      });

      // triggers on every focus
      this.$searchField.focus(function () {
        // Only will call the ajax post until we have a successful retrieve, hopefully only once.
        if (!_this2.dfDataRequested) {
          _this2.dfDataRequested = true;

          // Ajax call to get JSON object.
          $.ajax({
            type: 'GET',
            async: false,
            url: _this2.options.apiBaseUrl + _this2.searchYear,
            dataType: 'json',
            cache: true,
            success: function success(json) {
              _this2.searchList = json.data;
            }
          });

          _this2.$searchField.catcomplete({
            disabled: false,
            source: _this2.searchList,
            minLength: 2,
            select: function select(event, ui) {
              if (ui.item.category === 'Undergraduate Programs' || ui.item.category === 'Postgraduate Coursework Programs' || ui.item.category === 'Higher Degrees by Research') {
                window.location = _this2.options.locationBaseUrl + ui.item.dest + '.html';
              } else if (ui.item.category === 'Careers') {
                _this2.dfSearchForm('v_career', ui.item.dest);
              } else if (ui.item.category === 'Subjects') {
                _this2.dfSearchForm('v_subject', ui.item.dest);
              }

              return true;
            }
          });
        }
      });
    }
  }]);

  return DegreeFinder;
}();

exports.default = DegreeFinder;


window.DegreeFinder = DegreeFinder;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _degreeFinderPlugin = __webpack_require__(102);

var _degreeFinderPlugin2 = _interopRequireDefault(_degreeFinderPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {
  apiBaseUrl: '/webteam/dfsearch/'
};

if ($('#df-searchfield').length) {
  var autocomplete = new _degreeFinderPlugin2.default($('#df-searchfield'), settings); // eslint-disable-line no-unused-vars
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

(function ($) {
  var $equalizer = $('.js-equalize');

  // Create new instance of equalizer
  var equalizerOptions = {
    equalizeByRow: true,
    equalizeOn: 'medium'
  };

  $equalizer.imagesLoaded(function () {
    var equalizer = new Foundation.Equalizer($equalizer, equalizerOptions); // eslint-disable-line no-unused-vars
  });
})(jQuery);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(96);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(46);

(function ($) {

  var isotopeSettings = {
    itemSelector: '.c-filter-nav__column',
    percentPosition: true,
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function weight(itemElem) {
        var weight = $(itemElem).find('.weight').text();
        return parseFloat(weight.replace(/[\(\)]/g, ''));
      }
    }
  };

  // for each filters
  $('.c-filter-nav__container').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    var $grid = $buttonGroup.next('.c-filter-nav');
    var $loadFirst = $buttonGroup.find('.u-filter-load-first');
    var $buttonGroupFilter = $buttonGroup.find('.js-filter-nav-filter');
    var $buttonGroupFilterCombination = $buttonGroup.find('.js-filter-nav-filter-combination');

    // init Isotope
    $grid.isotope(isotopeSettings);

    // bind sort button click
    $buttonGroup.find('.js-filter-nav-sorts').on('click', '.c-filter-nav__button', function () {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });

    // change is-checked class on buttons
    $buttonGroup.find('.c-filter-nav__group').each(function (j, filterButtonGroup) {
      var $filterButtonGroup = $(filterButtonGroup);
      $filterButtonGroup.on('click', '.c-filter-nav__button', function () {
        $filterButtonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });

    // if standard filter
    // bind filter button click
    $buttonGroupFilter.on('click', '.c-filter-nav__button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // if combination filter
    // store filter for each group
    var filters = {};

    $buttonGroupFilterCombination.on('click', '.c-filter-nav__button', function (event) {
      var $button = $(event.currentTarget);
      filterFunction($button);
    });

    //  Check for combination filters
    if ($buttonGroupFilterCombination.length) {
      // Check for loadFirst className
      if ($loadFirst.length) {
        $.each($loadFirst, function () {
          var $loadFirstButton = $(this);
          filterFunction($loadFirstButton);
        });
      }
    } else {
      // if not combination filter, just filter with data-filter attribute
      if ($loadFirst.length) {
        $grid.isotope({ filter: $loadFirst.attr('data-filter') });
      }
    }

    // Setting up the filter object on pageLoad or click
    function filterFunction($filterButtonContext) {
      // get group key
      var $parentButtonGroup = $filterButtonContext.parents('.c-filter-nav__group');
      var filterGroup = $parentButtonGroup.attr('data-filter-group');
      // set filter for group
      filters[filterGroup] = $filterButtonContext.attr('data-filter');
      // concatenate the filter object into the format required for isotope
      var filterValue = concatValues(filters);
      // set filter for Isotope
      return $grid.isotope({ filter: filterValue });
    }

    // flatten object by concatting values
    function concatValues(obj) {
      var value = '';
      for (var prop in obj) {
        // eslint-disable-line guard-for-in
        value += obj[prop];
      }
      return value;
    }
  });
})(jQuery);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  // Custom form validation instance
  var formSettings = { formErrorSelector: '.c-form__error-text' };
  var form = new Foundation.Abide($('.c-form--validate'), formSettings); // eslint-disable-line no-unused-vars
})(jQuery);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(89);

(function ($) {

  $('.js-image-gallery-item').swipebox({
    removeBarsOnMobile: false,
    hideBarsDelay: 0
  });
})(jQuery);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  // Get the media query styles string and parse to object
  var extractedStyles = $('.foundation-mq').css('font-family');
  var namedQueries = void 0;
  namedQueries = parseStyleToObject(extractedStyles);

  // Define new custom queries to be used interchange elements
  Foundation.Interchange.SPECIAL_QUERIES.smallRetina = buildMediaQueryString(namedQueries.small);
  Foundation.Interchange.SPECIAL_QUERIES.mediumRetina = buildMediaQueryString(namedQueries.medium);
  Foundation.Interchange.SPECIAL_QUERIES.largeRetina = buildMediaQueryString(namedQueries.large);
  Foundation.Interchange.SPECIAL_QUERIES.xlargeRetina = buildMediaQueryString(namedQueries.xlarge);
  Foundation.Interchange.SPECIAL_QUERIES.xxlargeRetina = buildMediaQueryString(namedQueries.xxlarge);

  // Build the size and retina media query string
  function buildMediaQueryString(minWidth) {
    return 'only screen and (min-width: ' + minWidth + ') and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (min--moz-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: ' + minWidth + ') and (min-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (min-resolution: 192dpi), only screen and (min-width: ' + minWidth + ') and (min-resolution: 2dppx)';
  }

  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    var styleObject = {};

    if (typeof str !== 'string') {
      return styleObject;
    }

    str = str.trim().slice(1, -1); // browsers re-quote string style values

    if (!str) {
      return styleObject;
    }

    styleObject = str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});

    return styleObject;
  }

  // Activate Foundation on interchange elements
  $('.js-interchange').foundation();
})(jQuery);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  var $picture = $('picture');

  if ($picture.length && !Modernizr.srcset && !Modernizr.picture) {
    // eslint-disable-line no-undef
    $.getScript("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/picturefill.min.js");
  }
})(jQuery);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(44);

(function ($) {

  $(function () {
    $(".js-responsive-video-embed").fitVids();
  });
})(jQuery);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(41);

(function ($) {
  var $serviceMenu = $('.js-services-menu');

  if ($serviceMenu.length) {
    var serviceMenu = new Foundation.OffCanvas($serviceMenu); // eslint-disable-line no-unused-vars
  }
})(jQuery);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(41);

(function ($) {
  var $siteMenu = $('.js-site-menu');
  var $siteMenu2 = $('.js-site-menu-toggle-both');
  var $siteMenu3 = $('.js-site-menu-toggle-item-only');
  var $siteMenuOffCanvas = $('.js-site-menu-offcanvas');
  var $siteMenuItem = $('.c-site-menu__item').not('.is-current');

  // Site menu Options object
  var siteMenuOptions = {
    submenuToggle: true
  };

  // Offcanvas functionality required for all site menus
  if ($siteMenuOffCanvas.length) {
    var siteMenuOffCanvas = new Foundation.OffCanvas($siteMenuOffCanvas); // eslint-disable-line no-unused-vars
  }

  // Default/recommended option - linked submenu parent item with toggle button
  if ($siteMenu.length) {
    var siteMenu = new Foundation.AccordionMenu($siteMenu, siteMenuOptions); // eslint-disable-line no-unused-vars
  }

  // Both the submenu parent item and toggle button will toggle the submenu
  if ($siteMenu2.length) {
    var siteMenu2 = new Foundation.AccordionMenu($siteMenu2, siteMenuOptions); // eslint-disable-line no-unused-vars

    // Custom toggle link for siteMenu2
    $siteMenu2.find('li').each(function () {
      var $submenu = $(this).children('[data-submenu]');
      if ($submenu.length) {
        $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
          e.preventDefault();
          $siteMenu2.foundation('toggle', $submenu);
        });
      }
    });
  }

  // No toggle button and the submenu parent item will toggle the submenu
  if ($siteMenu3.length) {
    var siteMenu3 = new Foundation.AccordionMenu($siteMenu3); // eslint-disable-line no-unused-vars
  }

  // Toggle class for style
  $siteMenuItem.on('click', '.submenu-toggle', function () {
    $(this).parent().toggleClass('is-open');
  });

  // Override the keyboard events
  Foundation.Keyboard.register('AccordionMenu', {
    'ENTER': 'toggle',
    'SPACE': 'toggle',
    // 'ARROW_RIGHT': 'open',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    // 'ARROW_LEFT': 'close',
    'ESCAPE': 'closeAll'
  });
})(jQuery);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var $smoothScrollElement = $('.js-smooth-scroll');

  if ($smoothScrollElement.length) {
    var smoothScroll = new Foundation.SmoothScroll($smoothScrollElement); // eslint-disable-line no-unused-vars
  }

  var $backTopGlobal = $('.js-back-top');
  $backTopGlobal.hide();

  var idleTimer = null;
  var idleWait = 2000;

  $(window).on('mousemove mousewheel DOMMouseScroll keydown scroll', function () {
    clearTimeout(idleTimer);

    if ($(this).scrollTop() >= 100 && $(this).scrollTop() !== 0) {
      $backTopGlobal.fadeIn();
    }

    idleTimer = setTimeout(function () {
      $backTopGlobal.fadeOut();
    }, idleWait);
  });

  $('body').trigger('mousemove');
})(jQuery);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _simplebar = __webpack_require__(52);

var _simplebar2 = _interopRequireDefault(_simplebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (Modernizr.hiddenscroll && !Modernizr.cssscrollbar) {
  // eslint-disable-line no-undef
  $.each($('table:not(.js-table-sortable)'), function (i, element) {
    var tableScrollbar = new _simplebar2.default(element, { autoHide: false }); // eslint-disable-line no-unused-vars
  });
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var tabsOptions = {
    linkClass: 'c-tabs__title',
    panelClass: 'c-tabs__panel',
    deepLink: true,
    deepLinkSmudge: true,
    linkActiveClass: 'is-active-item',
    panelActiveClass: 'is-active-panel'
  };

  $('.js-tabs').each(function () {
    var $tabs = new Foundation.Tabs($(this), tabsOptions); // eslint-disable-line no-unused-vars
  });
})(jQuery);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  // FD tooltip
  // ============
  var $tooltip = $('.js-tooltip');
  // Create new instance of tooltip
  var tooltipOptions = {
    tooltipClass: "c-tooltip"
  };

  if ($tooltip.length) {
    var tooltip = new Foundation.Tooltip($tooltip, tooltipOptions); // eslint-disable-line no-unused-vars
  }
})(jQuery);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(90);

// Vegas slider
// =========================================
(function ($) {

  var $vegasSliderElement = $('.js-vegas-slider');
  var $fixedVegasSliderElement = $('.js-vegas-slider-is-fixed');
  var vegasSlidesData = $vegasSliderElement.data('vegas-slides');
  var fixedvegasSlidesData = $fixedVegasSliderElement.data('vegas-slides');
  var sliderNavigation = $('.js-vegas-slider__navigation');
  var sliderTransitionDuration = $vegasSliderElement.data('vegas-transition-duration');
  var sliderOverlay = $vegasSliderElement.data('vegas-overlay');

  // The vegas plugin init
  function loadVegasSlider($element, slidesData) {

    $element.vegas({
      preload: true,
      overlay: sliderOverlay ? sliderOverlay : '//global.adelaide.edu.au/v/style-guide2/assets/img/overlay/01.png',
      transitionDuration: 4000,
      delay: 10000,
      slides: slidesData,
      transition: 'fade',
      firstTransition: 'fade',
      firstTransitionDuration: 2000,
      init: function init() {
        this.removeAttr('data-vegas-slides');
      }
    });

    if (sliderNavigation.length) {
      $element.vegas('options', 'transition', 'slideLeft2');
    }

    if (sliderTransitionDuration !== 'undefined') {
      $element.vegas('options', 'transitionDuration', sliderTransitionDuration);
    }

    $('#vegas-slider-previous').on('click', function (e) {
      e.preventDefault();
      $element.vegas('options', 'transition', 'slideRight2').vegas('previous');
      $element.vegas('options', 'transition', 'slideLeft2');
    });

    $('#vegas-slider-next').on('click', function (e) {
      e.preventDefault();
      $element.vegas('options', 'transition', 'slideLeft2').vegas('next');
    });
  }

  $(function () {
    loadVegasSlider($vegasSliderElement, vegasSlidesData);

    if (Foundation.MediaQuery.is('medium') && $fixedVegasSliderElement.length) {
      loadVegasSlider($fixedVegasSliderElement, fixedvegasSlidesData);
    }
  });

  // Check for window resize and load imagie plugin if medium and above
  $(window).on('changed.zf.mediaquery', function (event, newSize) {
    // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
    if (newSize === 'medium' || newSize === 'large' || newSize === 'xlarge' || newSize === 'xxlarge') {
      if ($vegasSliderElement.length) {
        loadVegasSlider($vegasSliderElement, vegasSlidesData);
      } else if ($fixedVegasSliderElement.length) {
        loadVegasSlider($fixedVegasSliderElement, fixedvegasSlidesData);
      }
    }
    // Destroy the plugin if resize to small breakpoint
    else if (newSize === 'small') {
        $fixedVegasSliderElement.vegas('destroy');
      }
  });
})(jQuery);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(97);

__webpack_require__(99);

__webpack_require__(101);

__webpack_require__(98);

__webpack_require__(103);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(107);

__webpack_require__(106);

__webpack_require__(108);

__webpack_require__(109);

__webpack_require__(110);

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(113);

__webpack_require__(114);

__webpack_require__(116);

__webpack_require__(115);

__webpack_require__(117);

__webpack_require__(118);

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ })
/******/ ]);