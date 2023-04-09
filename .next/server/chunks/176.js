"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 4432:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _asyncToGenerator;
    }
}));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


/***/ }),

/***/ 7688:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _extends;
    }
}));
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 1644:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireWildcard;
    }
}));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}


/***/ }),

/***/ 2495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 5971:
/***/ ((module) => {

/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function isArray(value) {
  return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
} // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js

var INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
function toString(value) {
  return value == null ? '' : baseToString(value);
}
function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return typeof value === 'number';
} // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js

function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
}
function isObject(value) {
  return _typeof(value) === 'object';
} // Checks if `value` is object-like.

function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
} // Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js

function getTag(value) {
  return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
}

var EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key) {
  return "Invalid value for key ".concat(key);
};
var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE(max) {
  return "Pattern length exceeds max of ".concat(max, ".");
};
var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY(name) {
  return "Missing ".concat(name, " property in key");
};
var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE(key) {
  return "Property 'weight' in key '".concat(key, "' must be a positive integer");
};

var hasOwn = Object.prototype.hasOwnProperty;

var KeyStore = /*#__PURE__*/function () {
  function KeyStore(keys) {
    var _this = this;

    _classCallCheck(this, KeyStore);

    this._keys = [];
    this._keyMap = {};
    var totalWeight = 0;
    keys.forEach(function (key) {
      var obj = createKey(key);
      totalWeight += obj.weight;

      _this._keys.push(obj);

      _this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    }); // Normalize weights so that their sum is equal to 1

    this._keys.forEach(function (key) {
      key.weight /= totalWeight;
    });
  }

  _createClass(KeyStore, [{
    key: "get",
    value: function get(keyId) {
      return this._keyMap[keyId];
    }
  }, {
    key: "keys",
    value: function keys() {
      return this._keys;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return JSON.stringify(this._keys);
    }
  }]);

  return KeyStore;
}();
function createKey(key) {
  var path = null;
  var id = null;
  var src = null;
  var weight = 1;
  var getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'));
    }

    var name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return {
    path: path,
    id: id,
    weight: weight,
    src: src,
    getFn: getFn
  };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split('.');
}
function createKeyId(key) {
  return isArray(key) ? key.join('.') : key;
}

function get(obj, path) {
  var list = [];
  var arr = false;

  var deepGet = function deepGet(obj, path, index) {
    if (!isDefined(obj)) {
      return;
    }

    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      var key = path[index];
      var value = obj[key];

      if (!isDefined(value)) {
        return;
      } // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list


      if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true; // Search each item in the array.

        for (var i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  }; // Backwards compatibility (since path used to be a string)


  deepGet(obj, isString(path) ? path.split('.') : path, 0);
  return arr ? list : list[0];
}

var MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
var BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: function sortFn(a, b) {
    return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
  }
};
var FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
var AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);

var SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.

function norm() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var mantissa = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var cache = new Map();
  var m = Math.pow(10, mantissa);
  return {
    get: function get(value) {
      var numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      } // Default function is 1/sqrt(x), weight makes that variable


      var norm = 1 / Math.pow(numTokens, 0.5 * weight); // In place of `toFixed(mantissa)`, for faster computation

      var n = parseFloat(Math.round(norm * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear: function clear() {
      cache.clear();
    }
  };
}

var FuseIndex = /*#__PURE__*/function () {
  function FuseIndex() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn,
        _ref$fieldNormWeight = _ref.fieldNormWeight,
        fieldNormWeight = _ref$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref$fieldNormWeight;

    _classCallCheck(this, FuseIndex);

    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }

  _createClass(FuseIndex, [{
    key: "setSources",
    value: function setSources() {
      var docs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.docs = docs;
    }
  }, {
    key: "setIndexRecords",
    value: function setIndexRecords() {
      var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.records = records;
    }
  }, {
    key: "setKeys",
    value: function setKeys() {
      var _this = this;

      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.keys = keys;
      this._keysMap = {};
      keys.forEach(function (key, idx) {
        _this._keysMap[key.id] = idx;
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this2 = this;

      if (this.isCreated || !this.docs.length) {
        return;
      }

      this.isCreated = true; // List is Array<String>

      if (isString(this.docs[0])) {
        this.docs.forEach(function (doc, docIndex) {
          _this2._addString(doc, docIndex);
        });
      } else {
        // List is Array<Object>
        this.docs.forEach(function (doc, docIndex) {
          _this2._addObject(doc, docIndex);
        });
      }

      this.norm.clear();
    } // Adds a doc to the end of the index

  }, {
    key: "add",
    value: function add(doc) {
      var idx = this.size();

      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    } // Removes the doc at the specified index of the index

  }, {
    key: "removeAt",
    value: function removeAt(idx) {
      this.records.splice(idx, 1); // Change ref index of every subsquent doc

      for (var i = idx, len = this.size(); i < len; i += 1) {
        this.records[i].i -= 1;
      }
    }
  }, {
    key: "getValueForItemAtKeyId",
    value: function getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
  }, {
    key: "size",
    value: function size() {
      return this.records.length;
    }
  }, {
    key: "_addString",
    value: function _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }

      var record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
  }, {
    key: "_addObject",
    value: function _addObject(doc, docIndex) {
      var _this3 = this;

      var record = {
        i: docIndex,
        $: {}
      }; // Iterate over every key (i.e, path), and fetch the value at that key

      this.keys.forEach(function (key, keyIndex) {
        var value = key.getFn ? key.getFn(doc) : _this3.getFn(doc, key.path);

        if (!isDefined(value)) {
          return;
        }

        if (isArray(value)) {
          (function () {
            var subRecords = [];
            var stack = [{
              nestedArrIndex: -1,
              value: value
            }];

            while (stack.length) {
              var _stack$pop = stack.pop(),
                  nestedArrIndex = _stack$pop.nestedArrIndex,
                  _value = _stack$pop.value;

              if (!isDefined(_value)) {
                continue;
              }

              if (isString(_value) && !isBlank(_value)) {
                var subRecord = {
                  v: _value,
                  i: nestedArrIndex,
                  n: _this3.norm.get(_value)
                };
                subRecords.push(subRecord);
              } else if (isArray(_value)) {
                _value.forEach(function (item, k) {
                  stack.push({
                    nestedArrIndex: k,
                    value: item
                  });
                });
              } else ;
            }

            record.$[keyIndex] = subRecords;
          })();
        } else if (isString(value) && !isBlank(value)) {
          var subRecord = {
            v: value,
            n: _this3.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  }]);

  return FuseIndex;
}();
function createIndex(keys, docs) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$getFn = _ref2.getFn,
      getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn,
      _ref2$fieldNormWeight = _ref2.fieldNormWeight,
      fieldNormWeight = _ref2$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref2$fieldNormWeight;

  var myIndex = new FuseIndex({
    getFn: getFn,
    fieldNormWeight: fieldNormWeight
  });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$getFn = _ref3.getFn,
      getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn,
      _ref3$fieldNormWeight = _ref3.fieldNormWeight,
      fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;

  var keys = data.keys,
      records = data.records;
  var myIndex = new FuseIndex({
    getFn: getFn,
    fieldNormWeight: fieldNormWeight
  });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}

function computeScore$1(pattern) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
      _ref$ignoreLocation = _ref.ignoreLocation,
      ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

  var accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy;
  }

  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
}

function convertMaskToIndices() {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.minMatchCharLength;
  var indices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];

    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;

      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }

      start = -1;
    }
  } // (i-1 - start) + 1 => i - start


  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices;
}

// Machine word size
var MAX_BITS = 32;

function search(text, pattern, patternAlphabet) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? Config.location : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
      _ref$includeMatches = _ref.includeMatches,
      includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
      _ref$ignoreLocation = _ref.ignoreLocation,
      ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }

  var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

  var textLen = text.length; // Handle the case when location > text.length

  var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

  var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

  var bestLocation = expectedLocation; // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.

  var computeMatches = minMatchCharLength > 1 || includeMatches; // A mask of the matches, used for building the indices

  var matchMask = computeMatches ? Array(textLen) : [];
  var index; // Get all exact matches, here for speed up

  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    var score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation: expectedLocation,
      distance: distance,
      ignoreLocation: ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      var i = 0;

      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  } // Reset the best location


  bestLocation = -1;
  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;
  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score2 = computeScore$1(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance,
        ignoreLocation: ignoreLocation
      });

      if (_score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    } // Use the result from this iteration as the maximum for the next.


    binMax = binMid;
    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

    var bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      } // First pass: exact match


      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

      if (_i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance,
          ignoreLocation: ignoreLocation
        }); // This match will almost certainly be better than any existing match.
        // But check anyway.

        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

          if (bestLocation <= expectedLocation) {
            break;
          } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    } // No hope for a (better) match at greater error levels.


    var _score = computeScore$1(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance,
      ignoreLocation: ignoreLocation
    });

    if (_score > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  var result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    var indices = convertMaskToIndices(matchMask, minMatchCharLength);

    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result;
}

function createPatternAlphabet(pattern) {
  var mask = {};

  for (var i = 0, len = pattern.length; i < len; i += 1) {
    var _char = pattern.charAt(i);

    mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
  }

  return mask;
}

var BitapSearch = /*#__PURE__*/function () {
  function BitapSearch(pattern) {
    var _this = this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? Config.location : _ref$location,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
        _ref$ignoreLocation = _ref.ignoreLocation,
        ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

    _classCallCheck(this, BitapSearch);

    this.options = {
      location: location,
      threshold: threshold,
      distance: distance,
      includeMatches: includeMatches,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      isCaseSensitive: isCaseSensitive,
      ignoreLocation: ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];

    if (!this.pattern.length) {
      return;
    }

    var addChunk = function addChunk(pattern, startIndex) {
      _this.chunks.push({
        pattern: pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex: startIndex
      });
    };

    var len = this.pattern.length;

    if (len > MAX_BITS) {
      var i = 0;
      var remainder = len % MAX_BITS;
      var end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        var startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  _createClass(BitapSearch, [{
    key: "searchIn",
    value: function searchIn(text) {
      var _this$options = this.options,
          isCaseSensitive = _this$options.isCaseSensitive,
          includeMatches = _this$options.includeMatches;

      if (!isCaseSensitive) {
        text = text.toLowerCase();
      } // Exact match


      if (this.pattern === text) {
        var _result = {
          isMatch: true,
          score: 0
        };

        if (includeMatches) {
          _result.indices = [[0, text.length - 1]];
        }

        return _result;
      } // Otherwise, use Bitap algorithm


      var _this$options2 = this.options,
          location = _this$options2.location,
          distance = _this$options2.distance,
          threshold = _this$options2.threshold,
          findAllMatches = _this$options2.findAllMatches,
          minMatchCharLength = _this$options2.minMatchCharLength,
          ignoreLocation = _this$options2.ignoreLocation;
      var allIndices = [];
      var totalScore = 0;
      var hasMatches = false;
      this.chunks.forEach(function (_ref2) {
        var pattern = _ref2.pattern,
            alphabet = _ref2.alphabet,
            startIndex = _ref2.startIndex;

        var _search = search(text, pattern, alphabet, {
          location: location + startIndex,
          distance: distance,
          threshold: threshold,
          findAllMatches: findAllMatches,
          minMatchCharLength: minMatchCharLength,
          includeMatches: includeMatches,
          ignoreLocation: ignoreLocation
        }),
            isMatch = _search.isMatch,
            score = _search.score,
            indices = _search.indices;

        if (isMatch) {
          hasMatches = true;
        }

        totalScore += score;

        if (isMatch && indices) {
          allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
        }
      });
      var result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };

      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }

      return result;
    }
  }]);

  return BitapSearch;
}();

var BaseMatch = /*#__PURE__*/function () {
  function BaseMatch(pattern) {
    _classCallCheck(this, BaseMatch);

    this.pattern = pattern;
  }

  _createClass(BaseMatch, [{
    key: "search",
    value: function
      /*text*/
    search() {}
  }], [{
    key: "isMultiMatch",
    value: function isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
  }, {
    key: "isSingleMatch",
    value: function isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
  }]);

  return BaseMatch;
}();

function getMatch(pattern, exp) {
  var matches = pattern.match(exp);
  return matches ? matches[1] : null;
}

var ExactMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(ExactMatch, _BaseMatch);

  var _super = _createSuper(ExactMatch);

  function ExactMatch(pattern) {
    _classCallCheck(this, ExactMatch);

    return _super.call(this, pattern);
  }

  _createClass(ExactMatch, [{
    key: "search",
    value: function search(text) {
      var isMatch = text === this.pattern;
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'exact';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^="(.*)"$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^=(.*)$/;
    }
  }]);

  return ExactMatch;
}(BaseMatch);

var InverseExactMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(InverseExactMatch, _BaseMatch);

  var _super = _createSuper(InverseExactMatch);

  function InverseExactMatch(pattern) {
    _classCallCheck(this, InverseExactMatch);

    return _super.call(this, pattern);
  }

  _createClass(InverseExactMatch, [{
    key: "search",
    value: function search(text) {
      var index = text.indexOf(this.pattern);
      var isMatch = index === -1;
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'inverse-exact';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^!"(.*)"$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^!(.*)$/;
    }
  }]);

  return InverseExactMatch;
}(BaseMatch);

var PrefixExactMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(PrefixExactMatch, _BaseMatch);

  var _super = _createSuper(PrefixExactMatch);

  function PrefixExactMatch(pattern) {
    _classCallCheck(this, PrefixExactMatch);

    return _super.call(this, pattern);
  }

  _createClass(PrefixExactMatch, [{
    key: "search",
    value: function search(text) {
      var isMatch = text.startsWith(this.pattern);
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'prefix-exact';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^\^"(.*)"$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^\^(.*)$/;
    }
  }]);

  return PrefixExactMatch;
}(BaseMatch);

var InversePrefixExactMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(InversePrefixExactMatch, _BaseMatch);

  var _super = _createSuper(InversePrefixExactMatch);

  function InversePrefixExactMatch(pattern) {
    _classCallCheck(this, InversePrefixExactMatch);

    return _super.call(this, pattern);
  }

  _createClass(InversePrefixExactMatch, [{
    key: "search",
    value: function search(text) {
      var isMatch = !text.startsWith(this.pattern);
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'inverse-prefix-exact';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^!\^"(.*)"$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^!\^(.*)$/;
    }
  }]);

  return InversePrefixExactMatch;
}(BaseMatch);

var SuffixExactMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(SuffixExactMatch, _BaseMatch);

  var _super = _createSuper(SuffixExactMatch);

  function SuffixExactMatch(pattern) {
    _classCallCheck(this, SuffixExactMatch);

    return _super.call(this, pattern);
  }

  _createClass(SuffixExactMatch, [{
    key: "search",
    value: function search(text) {
      var isMatch = text.endsWith(this.pattern);
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'suffix-exact';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^"(.*)"\$$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^(.*)\$$/;
    }
  }]);

  return SuffixExactMatch;
}(BaseMatch);

var InverseSuffixExactMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(InverseSuffixExactMatch, _BaseMatch);

  var _super = _createSuper(InverseSuffixExactMatch);

  function InverseSuffixExactMatch(pattern) {
    _classCallCheck(this, InverseSuffixExactMatch);

    return _super.call(this, pattern);
  }

  _createClass(InverseSuffixExactMatch, [{
    key: "search",
    value: function search(text) {
      var isMatch = !text.endsWith(this.pattern);
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'inverse-suffix-exact';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^!"(.*)"\$$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^!(.*)\$$/;
    }
  }]);

  return InverseSuffixExactMatch;
}(BaseMatch);

var FuzzyMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(FuzzyMatch, _BaseMatch);

  var _super = _createSuper(FuzzyMatch);

  function FuzzyMatch(pattern) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? Config.location : _ref$location,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
        _ref$ignoreLocation = _ref.ignoreLocation,
        ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

    _classCallCheck(this, FuzzyMatch);

    _this = _super.call(this, pattern);
    _this._bitapSearch = new BitapSearch(pattern, {
      location: location,
      threshold: threshold,
      distance: distance,
      includeMatches: includeMatches,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      isCaseSensitive: isCaseSensitive,
      ignoreLocation: ignoreLocation
    });
    return _this;
  }

  _createClass(FuzzyMatch, [{
    key: "search",
    value: function search(text) {
      return this._bitapSearch.searchIn(text);
    }
  }], [{
    key: "type",
    get: function get() {
      return 'fuzzy';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^"(.*)"$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^(.*)$/;
    }
  }]);

  return FuzzyMatch;
}(BaseMatch);

var IncludeMatch = /*#__PURE__*/function (_BaseMatch) {
  _inherits(IncludeMatch, _BaseMatch);

  var _super = _createSuper(IncludeMatch);

  function IncludeMatch(pattern) {
    _classCallCheck(this, IncludeMatch);

    return _super.call(this, pattern);
  }

  _createClass(IncludeMatch, [{
    key: "search",
    value: function search(text) {
      var location = 0;
      var index;
      var indices = [];
      var patternLen = this.pattern.length; // Get all exact matches

      while ((index = text.indexOf(this.pattern, location)) > -1) {
        location = index + patternLen;
        indices.push([index, location - 1]);
      }

      var isMatch = !!indices.length;
      return {
        isMatch: isMatch,
        score: isMatch ? 0 : 1,
        indices: indices
      };
    }
  }], [{
    key: "type",
    get: function get() {
      return 'include';
    }
  }, {
    key: "multiRegex",
    get: function get() {
      return /^'"(.*)"$/;
    }
  }, {
    key: "singleRegex",
    get: function get() {
      return /^'(.*)$/;
    }
  }]);

  return IncludeMatch;
}(BaseMatch);

var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
var searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = '|'; // Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

function parseQuery(pattern) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return pattern.split(OR_TOKEN).map(function (item) {
    var query = item.trim().split(SPACE_RE).filter(function (item) {
      return item && !!item.trim();
    });
    var results = [];

    for (var i = 0, len = query.length; i < len; i += 1) {
      var queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

      var found = false;
      var idx = -1;

      while (!found && ++idx < searchersLen) {
        var searcher = searchers[idx];
        var token = searcher.isMultiMatch(queryItem);

        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue;
      } // 2. Handle single query matches (i.e, once that are *not* quoted)


      idx = -1;

      while (++idx < searchersLen) {
        var _searcher = searchers[idx];

        var _token = _searcher.isSingleMatch(queryItem);

        if (_token) {
          results.push(new _searcher(_token, options));
          break;
        }
      }
    }

    return results;
  });
}

// to a singl match

var MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */

var ExtendedSearch = /*#__PURE__*/function () {
  function ExtendedSearch(pattern) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
        _ref$ignoreLocation = _ref.ignoreLocation,
        ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? Config.location : _ref$location,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance;

    _classCallCheck(this, ExtendedSearch);

    this.query = null;
    this.options = {
      isCaseSensitive: isCaseSensitive,
      includeMatches: includeMatches,
      minMatchCharLength: minMatchCharLength,
      findAllMatches: findAllMatches,
      ignoreLocation: ignoreLocation,
      location: location,
      threshold: threshold,
      distance: distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  _createClass(ExtendedSearch, [{
    key: "searchIn",
    value: function searchIn(text) {
      var query = this.query;

      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }

      var _this$options = this.options,
          includeMatches = _this$options.includeMatches,
          isCaseSensitive = _this$options.isCaseSensitive;
      text = isCaseSensitive ? text : text.toLowerCase();
      var numMatches = 0;
      var allIndices = [];
      var totalScore = 0; // ORs

      for (var i = 0, qLen = query.length; i < qLen; i += 1) {
        var searchers = query[i]; // Reset indices

        allIndices.length = 0;
        numMatches = 0; // ANDs

        for (var j = 0, pLen = searchers.length; j < pLen; j += 1) {
          var searcher = searchers[j];

          var _searcher$search = searcher.search(text),
              isMatch = _searcher$search.isMatch,
              indices = _searcher$search.indices,
              score = _searcher$search.score;

          if (isMatch) {
            numMatches += 1;
            totalScore += score;

            if (includeMatches) {
              var type = searcher.constructor.type;

              if (MultiMatchSet.has(type)) {
                allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        } // OR condition, so if TRUE, return


        if (numMatches) {
          var result = {
            isMatch: true,
            score: totalScore / numMatches
          };

          if (includeMatches) {
            result.indices = allIndices;
          }

          return result;
        }
      } // Nothing was matched


      return {
        isMatch: false,
        score: 1
      };
    }
  }], [{
    key: "condition",
    value: function condition(_, options) {
      return options.useExtendedSearch;
    }
  }]);

  return ExtendedSearch;
}();

var registeredSearchers = [];
function register() {
  registeredSearchers.push.apply(registeredSearchers, arguments);
}
function createSearcher(pattern, options) {
  for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
    var searcherClass = registeredSearchers[i];

    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }

  return new BitapSearch(pattern, options);
}

var LogicalOperator = {
  AND: '$and',
  OR: '$or'
};
var KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

var isExpression = function isExpression(query) {
  return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
};

var isPath = function isPath(query) {
  return !!query[KeyType.PATH];
};

var isLeaf = function isLeaf(query) {
  return !isArray(query) && isObject(query) && !isExpression(query);
};

var convertToExplicit = function convertToExplicit(query) {
  return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function (key) {
    return _defineProperty({}, key, query[key]);
  }));
}; // When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance


function parse(query, options) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$auto = _ref3.auto,
      auto = _ref3$auto === void 0 ? true : _ref3$auto;

  var next = function next(query) {
    var keys = Object.keys(query);
    var isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query));
    }

    if (isLeaf(query)) {
      var key = isQueryPath ? query[KeyType.PATH] : keys[0];
      var pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }

      var obj = {
        keyId: createKeyId(key),
        pattern: pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj;
    }

    var node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach(function (key) {
      var value = query[key];

      if (isArray(value)) {
        value.forEach(function (item) {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query);
}

function computeScore(results, _ref) {
  var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm,
      ignoreFieldNorm = _ref$ignoreFieldNorm === void 0 ? Config.ignoreFieldNorm : _ref$ignoreFieldNorm;
  results.forEach(function (result) {
    var totalScore = 1;
    result.matches.forEach(function (_ref2) {
      var key = _ref2.key,
          norm = _ref2.norm,
          score = _ref2.score;
      var weight = key ? key.weight : null;
      totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
    });
    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  var matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return;
  }

  matches.forEach(function (match) {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }

    var indices = match.indices,
        value = match.value;
    var obj = {
      indices: indices,
      value: value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(results, docs) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$includeMatches = _ref.includeMatches,
      includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
      _ref$includeScore = _ref.includeScore,
      includeScore = _ref$includeScore === void 0 ? Config.includeScore : _ref$includeScore;

  var transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map(function (result) {
    var idx = result.idx;
    var data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach(function (transformer) {
        transformer(result, data);
      });
    }

    return data;
  });
}

var Fuse$1 = /*#__PURE__*/function () {
  function Fuse(docs) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var index = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Fuse);

    this.options = _objectSpread2(_objectSpread2({}, Config), options);

    if (this.options.useExtendedSearch && !true) {}

    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }

  _createClass(Fuse, [{
    key: "setCollection",
    value: function setCollection(docs, index) {
      this._docs = docs;

      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }

      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
  }, {
    key: "add",
    value: function add(doc) {
      if (!isDefined(doc)) {
        return;
      }

      this._docs.push(doc);

      this._myIndex.add(doc);
    }
  }, {
    key: "remove",
    value: function remove() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function
        /* doc, idx */
      () {
        return false;
      };
      var results = [];

      for (var i = 0, len = this._docs.length; i < len; i += 1) {
        var doc = this._docs[i];

        if (predicate(doc, i)) {
          this.removeAt(i);
          i -= 1;
          len -= 1;
          results.push(doc);
        }
      }

      return results;
    }
  }, {
    key: "removeAt",
    value: function removeAt(idx) {
      this._docs.splice(idx, 1);

      this._myIndex.removeAt(idx);
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this._myIndex;
    }
  }, {
    key: "search",
    value: function search(query) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$limit = _ref.limit,
          limit = _ref$limit === void 0 ? -1 : _ref$limit;

      var _this$options = this.options,
          includeMatches = _this$options.includeMatches,
          includeScore = _this$options.includeScore,
          shouldSort = _this$options.shouldSort,
          sortFn = _this$options.sortFn,
          ignoreFieldNorm = _this$options.ignoreFieldNorm;
      var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, {
        ignoreFieldNorm: ignoreFieldNorm
      });

      if (shouldSort) {
        results.sort(sortFn);
      }

      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }

      return format(results, this._docs, {
        includeMatches: includeMatches,
        includeScore: includeScore
      });
    }
  }, {
    key: "_searchStringList",
    value: function _searchStringList(query) {
      var searcher = createSearcher(query, this.options);
      var records = this._myIndex.records;
      var results = []; // Iterate over every string in the index

      records.forEach(function (_ref2) {
        var text = _ref2.v,
            idx = _ref2.i,
            norm = _ref2.n;

        if (!isDefined(text)) {
          return;
        }

        var _searcher$searchIn = searcher.searchIn(text),
            isMatch = _searcher$searchIn.isMatch,
            score = _searcher$searchIn.score,
            indices = _searcher$searchIn.indices;

        if (isMatch) {
          results.push({
            item: text,
            idx: idx,
            matches: [{
              score: score,
              value: text,
              norm: norm,
              indices: indices
            }]
          });
        }
      });
      return results;
    }
  }, {
    key: "_searchLogical",
    value: function _searchLogical(query) {
      var _this = this;

      var expression = parse(query, this.options);

      var evaluate = function evaluate(node, item, idx) {
        if (!node.children) {
          var keyId = node.keyId,
              searcher = node.searcher;

          var matches = _this._findMatches({
            key: _this._keyStore.get(keyId),
            value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher: searcher
          });

          if (matches && matches.length) {
            return [{
              idx: idx,
              item: item,
              matches: matches
            }];
          }

          return [];
        }

        var res = [];

        for (var i = 0, len = node.children.length; i < len; i += 1) {
          var child = node.children[i];
          var result = evaluate(child, item, idx);

          if (result.length) {
            res.push.apply(res, _toConsumableArray(result));
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }

        return res;
      };

      var records = this._myIndex.records;
      var resultMap = {};
      var results = [];
      records.forEach(function (_ref3) {
        var item = _ref3.$,
            idx = _ref3.i;

        if (isDefined(item)) {
          var expResults = evaluate(expression, item, idx);

          if (expResults.length) {
            // Dedupe when adding
            if (!resultMap[idx]) {
              resultMap[idx] = {
                idx: idx,
                item: item,
                matches: []
              };
              results.push(resultMap[idx]);
            }

            expResults.forEach(function (_ref4) {
              var _resultMap$idx$matche;

              var matches = _ref4.matches;

              (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
            });
          }
        }
      });
      return results;
    }
  }, {
    key: "_searchObjectList",
    value: function _searchObjectList(query) {
      var _this2 = this;

      var searcher = createSearcher(query, this.options);
      var _this$_myIndex = this._myIndex,
          keys = _this$_myIndex.keys,
          records = _this$_myIndex.records;
      var results = []; // List is Array<Object>

      records.forEach(function (_ref5) {
        var item = _ref5.$,
            idx = _ref5.i;

        if (!isDefined(item)) {
          return;
        }

        var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

        keys.forEach(function (key, keyIndex) {
          matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
            key: key,
            value: item[keyIndex],
            searcher: searcher
          })));
        });

        if (matches.length) {
          results.push({
            idx: idx,
            item: item,
            matches: matches
          });
        }
      });
      return results;
    }
  }, {
    key: "_findMatches",
    value: function _findMatches(_ref6) {
      var key = _ref6.key,
          value = _ref6.value,
          searcher = _ref6.searcher;

      if (!isDefined(value)) {
        return [];
      }

      var matches = [];

      if (isArray(value)) {
        value.forEach(function (_ref7) {
          var text = _ref7.v,
              idx = _ref7.i,
              norm = _ref7.n;

          if (!isDefined(text)) {
            return;
          }

          var _searcher$searchIn2 = searcher.searchIn(text),
              isMatch = _searcher$searchIn2.isMatch,
              score = _searcher$searchIn2.score,
              indices = _searcher$searchIn2.indices;

          if (isMatch) {
            matches.push({
              score: score,
              key: key,
              value: text,
              idx: idx,
              norm: norm,
              indices: indices
            });
          }
        });
      } else {
        var text = value.v,
            norm = value.n;

        var _searcher$searchIn3 = searcher.searchIn(text),
            isMatch = _searcher$searchIn3.isMatch,
            score = _searcher$searchIn3.score,
            indices = _searcher$searchIn3.indices;

        if (isMatch) {
          matches.push({
            score: score,
            key: key,
            value: text,
            norm: norm,
            indices: indices
          });
        }
      }

      return matches;
    }
  }]);

  return Fuse;
}();

Fuse$1.version = '6.6.2';
Fuse$1.createIndex = createIndex;
Fuse$1.parseIndex = parseIndex;
Fuse$1.config = Config;

{
  Fuse$1.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

var Fuse = Fuse$1;

module.exports = Fuse;


/***/ }),

/***/ 1399:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createProxy = createProxy;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js
const CLIENT_REFERENCE = Symbol.for("react.client.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const deepProxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            case "displayName":
                return undefined;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw new Error(`Cannot render a Client Context Provider on the Server. ` + `Instead, you can export a Client Component wrapper ` + `that itself renders a Client Context Provider.`);
            default:
                break;
        }
        const expression = String(target.name) + "." + String(name);
        throw new Error(`Cannot access ${expression} on the server. ` + "You cannot dot into a client module from a server component. " + "You can only pass the imported name through.");
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                const moduleId = target.$$id;
                target.default = Object.defineProperties(function() {
                    throw new Error(`Attempted to call the default export of ${moduleId} from the server ` + `but it's on the client. It's not possible to invoke a client function from ` + `the server, it can only be rendered as a Component or passed to props of a ` + `Client Component.`);
                }, {
                    $$typeof: {
                        value: CLIENT_REFERENCE
                    },
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    $$id: {
                        value: target.$$id + "#"
                    },
                    $$async: {
                        value: target.$$async
                    }
                });
                return true;
            case "then":
                if (target.then) {
                    // Use a cached value
                    return target.then;
                }
                if (!target.$$async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const clientReference = Object.defineProperties({}, {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: true
                        }
                    });
                    const proxy = new Proxy(clientReference, proxyHandlers);
                    // Treat this as a resolved Promise for React's use()
                    target.status = "fulfilled";
                    target.value = proxy;
                    const then = target.then = Object.defineProperties(function then(resolve, _reject) {
                        // Expose to React.
                        return Promise.resolve(resolve(proxy));
                    }, // export then we should treat it as a reference to that name.
                    {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: false
                        }
                    });
                    return then;
                } else {
                    // Since typeof .then === 'function' is a feature test we'd continue recursing
                    // indefinitely if we return a function. Instead, we return an object reference
                    // if we check further.
                    return undefined;
                }
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            const reference = Object.defineProperties(function() {
                throw new Error(`Attempted to call ${String(name)}() from the server but ${String(name)} is on the client. ` + `It's not possible to invoke a client function from the server, it can ` + `only be rendered as a Component or passed to props of a Client Component.`);
            }, {
                $$typeof: {
                    value: CLIENT_REFERENCE
                },
                $$id: {
                    value: target.$$id + "#" + name
                },
                $$async: {
                    value: target.$$async
                }
            });
            cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const clientReference = Object.defineProperties({}, {
        $$typeof: {
            value: CLIENT_REFERENCE
        },
        // Represents the whole Module object instead of a particular import.
        $$id: {
            value: moduleId
        },
        $$async: {
            value: false
        }
    });
    return new Proxy(clientReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 2286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/Users/junping.yao/workspace_others/ai-chat/wx-web-chat/node_modules/next/dist/client/components/app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 7340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/Users/junping.yao/workspace_others/ai-chat/wx-web-chat/node_modules/next/dist/client/components/error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 5717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/Users/junping.yao/workspace_others/ai-chat/wx-web-chat/node_modules/next/dist/client/components/layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 8353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/Users/junping.yao/workspace_others/ai-chat/wx-web-chat/node_modules/next/dist/client/components/render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(1094), f = "function" === typeof AsyncLocalStorage, ba = f ? new AsyncLocalStorage : null, m = null, n = 0;
function p(a, b) {
    if (0 !== b.length) if (512 < b.length) 0 < n && (a.enqueue(new Uint8Array(m.buffer, 0, n)), m = new Uint8Array(512), n = 0), a.enqueue(b);
    else {
        var c = m.length - n;
        c < b.length && (0 === c ? a.enqueue(m) : (m.set(b.subarray(0, c), n), a.enqueue(m), b = b.subarray(c)), m = new Uint8Array(512), n = 0);
        m.set(b, n);
        n += b.length;
    }
    return !0;
}
var q = new TextEncoder;
function r(a) {
    return q.encode(a);
}
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var t = JSON.stringify;
function da(a, b, c) {
    a = t(c, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
function u(a, b, c) {
    a = t(c);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
var w = Symbol.for("react.client.reference"), ea = Symbol.for("react.server.reference"), y = Symbol.for("react.element"), fa = Symbol.for("react.fragment"), ja = Symbol.for("react.provider"), ka = Symbol.for("react.server_context"), la = Symbol.for("react.forward_ref"), ma = Symbol.for("react.suspense"), na = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), pa = Symbol.for("react.default_value"), qa = Symbol.for("react.memo_cache_sentinel"), ra = Symbol.iterator;
function A(a, b, c, d, e, g, h) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = g;
    this.removeEmptyString = h;
}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    new A(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    new A(a[0], 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    new A(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    new A(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    new A(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    new A(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    new A(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    new A(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    new A(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var B = /[\-:]([a-z])/g;
function C(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering transform-origin underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    new A(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    new A(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
var D = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    scale: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, sa = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(D).forEach(function(a) {
    sa.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        D[b] = D[a];
    });
});
var E = Array.isArray;
r('"></template>');
r("<script>");
r("</script>");
r('<script src="');
r('<script type="module" src="');
r('" integrity="');
r('" async=""></script>');
r("<!-- -->");
r(' style="');
r(":");
r(";");
r(" ");
r('="');
r('"');
r('=""');
r(">");
r("/>");
r(' selected=""');
r("\n");
r("<!DOCTYPE html>");
r("</");
r(">");
r('<template id="');
r('"></template>');
r("<!--$-->");
r('<!--$?--><template id="');
r('"></template>');
r("<!--$!-->");
r("<!--/$-->");
r("<template");
r('"');
r(' data-dgst="');
r(' data-msg="');
r(' data-stck="');
r("></template>");
r('<div hidden id="');
r('">');
r("</div>");
r('<svg aria-hidden="true" style="display:none" id="');
r('">');
r("</svg>");
r('<math aria-hidden="true" style="display:none" id="');
r('">');
r("</math>");
r('<table hidden id="');
r('">');
r("</table>");
r('<table hidden><tbody id="');
r('">');
r("</tbody></table>");
r('<table hidden><tr id="');
r('">');
r("</tr></table>");
r('<table hidden><colgroup id="');
r('">');
r("</colgroup></table>");
r('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("');
r('$RS("');
r('","');
r('")</script>');
r('<template data-rsi="" data-sid="');
r('" data-pid="');
r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("');
r('$RC("');
r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this.s=n}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=y[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var e=f[m++];if(a=p.get(e)){var d=a._p;c=!0}else{a=r.createElement("link");a.href=e;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];d=f[m++];)a.setAttribute(d,f[m++]);d=a._p=new Promise(function(n,z){a.onload=n;a.onerror=z});d.then(v.bind(d,"l"),v.bind(d,"e"));p.set(e,a)}e=a.getAttribute("media");!d||"l"===d.s||e&&!matchMedia(e).matches||h.push(d);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
r('$RM=new Map;\n$RR=function(t,u,y){function v(n){this.s=n}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=y[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var e=f[m++];if(a=p.get(e)){var d=a._p;c=!0}else{a=r.createElement("link");a.href=e;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];d=f[m++];)a.setAttribute(d,f[m++]);d=a._p=new Promise(function(n,z){a.onload=n;a.onerror=z});d.then(v.bind(d,"l"),v.bind(d,"e"));p.set(e,a)}e=a.getAttribute("media");!d||"l"===d.s||e&&!matchMedia(e).matches||h.push(d);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
r('$RR("');
r('","');
r('",');
r('"');
r(")</script>");
r('<template data-rci="" data-bid="');
r('<template data-rri="" data-bid="');
r('" data-sid="');
r('" data-sty="');
r('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("');
r('$RX("');
r('"');
r(",");
r(")</script>");
r('<template data-rxi="" data-bid="');
r('" data-dgst="');
r('" data-msg="');
r('" data-stck="');
r('<style media="not all" data-precedence="');
r('" data-href="');
r('">');
r("</style>");
r('<style data-precedence="');
r('" data-href="');
r(" ");
r('">');
r("</style>");
r("[");
r(",[");
r(",");
r("]");
var G = null;
function H(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
            if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            H(a, c);
            b.context._currentValue = b.value;
        }
    }
}
function ta(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && ta(a);
}
function ua(a) {
    var b = a.parent;
    null !== b && ua(b);
    a.context._currentValue = a.value;
}
function va(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? H(a, b) : va(a, b);
}
function wa(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? H(a, c) : wa(a, c);
    b.context._currentValue = b.value;
}
function I(a) {
    var b = G;
    b !== a && (null === b ? ua(a) : null === a ? ta(b) : b.depth === a.depth ? H(b, a) : b.depth > a.depth ? va(b, a) : wa(b, a), G = a);
}
function xa(a, b) {
    var c = a._currentValue;
    a._currentValue = b;
    var d = G;
    return G = a = {
        parent: d,
        depth: null === d ? 0 : d.depth + 1,
        context: a,
        parentValue: c,
        value: b
    };
}
var J = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function ya() {}
function za(a, b, c) {
    c = a[c];
    void 0 === c ? a.push(b) : c !== b && (b.then(ya, ya), b = c);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(d) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = d;
                }
            }, function(d) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = d;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            K = b;
            throw J;
    }
}
var K = null;
function Aa() {
    if (null === K) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = K;
    K = null;
    return a;
}
var L = null, N = 0, O = null;
function Ba() {
    var a = O;
    O = null;
    return a;
}
function Ca(a) {
    return a._currentValue;
}
var Ga = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: P,
    useTransition: P,
    readContext: Ca,
    useContext: Ca,
    useReducer: P,
    useRef: P,
    useState: P,
    useInsertionEffect: P,
    useLayoutEffect: P,
    useImperativeHandle: P,
    useEffect: P,
    useId: Da,
    useMutableSource: P,
    useSyncExternalStore: P,
    useCacheRefresh: function() {
        return Ea;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), c = 0; c < a; c++)b[c] = qa;
        return b;
    },
    use: Fa
};
function P() {
    throw Error("This Hook is not supported in Server Components.");
}
function Ea() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Da() {
    if (null === L) throw Error("useId can only be used while React is rendering");
    var a = L.identifierCount++;
    return ":" + L.identifierPrefix + "S" + a.toString(32) + ":";
}
function Fa(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = N;
            N += 1;
            null === O && (O = []);
            return za(O, a, b);
        }
        if (a.$$typeof === ka) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Q() {
    return (new AbortController).signal;
}
function Ha() {
    if (R) return R;
    if (f) {
        var a = ba.getStore();
        if (a) return a;
    }
    return new Map;
}
var Ia = {
    getCacheSignal: function() {
        var a = Ha(), b = a.get(Q);
        void 0 === b && (b = Q(), a.set(Q, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ha(), c = b.get(a);
        void 0 === c && (c = a(), b.set(a, c));
        return c;
    }
}, R = null, S = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = S.ContextRegistry, Ja = S.ReactCurrentDispatcher, Ka = S.ReactCurrentCache;
function La(a) {
    console.error(a);
}
function Ma(a, b, c, d, e) {
    if (null !== Ka.current && Ka.current !== Ia) throw Error("Currently React only supports one RSC renderer at a time.");
    Ka.current = Ia;
    var g = new Set, h = [], k = {
        status: 0,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        abortableTasks: g,
        pingedTasks: h,
        completedImportChunks: [],
        completedJSONChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === c ? La : c,
        toJSON: function(l, v) {
            return Na(k, this, l, v);
        }
    };
    k.pendingChunks++;
    b = Oa(d);
    a = Pa(k, a, b, g);
    h.push(a);
    return k;
}
var Qa = {};
function Ra(a, b) {
    a.pendingChunks++;
    var c = Pa(a, null, G, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return c.model = b.value, Sa(a, c), c.id;
        case "rejected":
            var d = U(a, b.reason);
            V(a, c.id, d);
            return c.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        c.model = e;
        Sa(a, c);
    }, function(e) {
        c.status = 4;
        e = U(a, e);
        V(a, c.id, e);
        null !== a.destination && W(a, a.destination);
    });
    return c.id;
}
function Ta(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function Ua(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: z,
        _payload: a,
        _init: Ta
    };
}
function X(a, b, c, d, e, g) {
    if (null !== d && void 0 !== d) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === w) return [
            y,
            b,
            c,
            e
        ];
        N = 0;
        O = g;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : Ua(e) : e;
    }
    if ("string" === typeof b) return [
        y,
        b,
        c,
        e
    ];
    if ("symbol" === typeof b) return b === fa ? e.children : [
        y,
        b,
        c,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === w) return [
            y,
            b,
            c,
            e
        ];
        switch(b.$$typeof){
            case z:
                var h = b._init;
                b = h(b._payload);
                return X(a, b, c, d, e, g);
            case la:
                return a = b.render, N = 0, O = g, a(e, void 0);
            case oa:
                return X(a, b.type, c, d, e, g);
            case ja:
                return xa(b._context, e.value), [
                    y,
                    b,
                    c,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: Qa
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Va(b));
}
function Sa(a, b) {
    var c = a.pingedTasks;
    c.push(b);
    1 === c.length && setTimeout(function() {
        return Wa(a);
    }, 0);
}
function Pa(a, b, c, d) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: c,
        ping: function() {
            return Sa(a, e);
        },
        thenableState: null
    };
    d.add(e);
    return e;
}
function Xa(a, b, c, d) {
    var e = d.$$async ? d.$$id + "#async" : d.$$id, g = a.writtenClientReferences, h = g.get(e);
    if (void 0 !== h) return b[0] === y && "1" === c ? "$L" + h.toString(16) : "$" + h.toString(16);
    try {
        var k = a.bundlerConfig[d.$$id];
        var l = d.$$async ? {
            id: k.id,
            chunks: k.chunks,
            name: k.name,
            async: !0
        } : k;
        a.pendingChunks++;
        var v = a.nextChunkId++, ha = t(l), x = v.toString(16) + ":I" + ha + "\n";
        var M = q.encode(x);
        a.completedImportChunks.push(M);
        g.set(e, v);
        return b[0] === y && "1" === c ? "$L" + v.toString(16) : "$" + v.toString(16);
    } catch (ia) {
        return a.pendingChunks++, b = a.nextChunkId++, c = U(a, ia), V(a, b, c), "$" + b.toString(16);
    }
}
function Ya(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, c) {
        return c;
    });
}
function Va(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.substr(0, 10) + "...");
        case "object":
            if (E(a)) return "[...]";
            a = Ya(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function Y(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case ma:
            return "Suspense";
        case na:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case la:
            return Y(a.render);
        case oa:
            return Y(a.type);
        case z:
            var b = a._payload;
            a = a._init;
            try {
                return Y(a(b));
            } catch (c) {}
    }
    return "";
}
function Z(a, b) {
    var c = Ya(a);
    if ("Object" !== c && "Array" !== c) return c;
    c = -1;
    var d = 0;
    if (E(a)) {
        var e = "[";
        for(var g = 0; g < a.length; g++){
            0 < g && (e += ", ");
            var h = a[g];
            h = "object" === typeof h && null !== h ? Z(h) : Va(h);
            "" + g === b ? (c = e.length, d = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === y) e = "<" + Y(a.type) + "/>";
    else {
        e = "{";
        g = Object.keys(a);
        for(h = 0; h < g.length; h++){
            0 < h && (e += ", ");
            var k = g[h], l = JSON.stringify(k);
            e += ('"' + k + '"' === l ? k : l) + ": ";
            l = a[k];
            l = "object" === typeof l && null !== l ? Z(l) : Va(l);
            k === b ? (c = e.length, d = l.length, e += l) : e = 10 > l.length && 40 > e.length + l.length ? e + l : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < c && 0 < d ? (a = " ".repeat(c) + "^".repeat(d), "\n  " + e + "\n  " + a) : "\n  " + e;
}
function Na(a, b, c, d) {
    switch(d){
        case y:
            return "$";
    }
    for(; "object" === typeof d && null !== d && (d.$$typeof === y || d.$$typeof === z);)try {
        switch(d.$$typeof){
            case y:
                var e = d;
                d = X(a, e.type, e.key, e.ref, e.props, null);
                break;
            case z:
                var g = d._init;
                d = g(d._payload);
        }
    } catch (h) {
        c = h === J ? Aa() : h;
        if ("object" === typeof c && null !== c && "function" === typeof c.then) return a.pendingChunks++, a = Pa(a, d, G, a.abortableTasks), d = a.ping, c.then(d, d), a.thenableState = Ba(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        d = a.nextChunkId++;
        c = U(a, c);
        V(a, d, c);
        return "$L" + d.toString(16);
    }
    if (null === d) return null;
    if ("object" === typeof d) {
        if (d.$$typeof === w) return Xa(a, b, c, d);
        if ("function" === typeof d.then) return "$@" + Ra(a, d).toString(16);
        if (d.$$typeof === ja) return d = d._context._globalName, b = a.writtenProviders, c = b.get(c), void 0 === c && (a.pendingChunks++, c = a.nextChunkId++, b.set(d, c), d = u(a, c, "$P" + d), a.completedJSONChunks.push(d)), "$" + c.toString(16);
        if (d === Qa) {
            a = G;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === pa ? a.context._defaultValue : d;
            G = a.parent;
            return;
        }
        return !E(d) && (null === d || "object" !== typeof d ? a = null : (a = ra && d[ra] || d["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(d) : d;
    }
    if ("string" === typeof d) return a = "$" === d[0] ? "$" + d : d, a;
    if ("boolean" === typeof d || "number" === typeof d || "undefined" === typeof d) return d;
    if ("function" === typeof d) {
        if (d.$$typeof === w) return Xa(a, b, c, d);
        if (d.$$typeof === ea) return c = a.writtenServerReferences, b = c.get(d), void 0 !== b ? a = "$F" + b.toString(16) : (b = d.$$bound, e = {
            id: d.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a.pendingChunks++, b = a.nextChunkId++, e = da(a, b, e), a.completedJSONChunks.push(e), c.set(d, b), a = "$F" + b.toString(16)), a;
        if (/^on[A-Z]/.test(c)) throw Error("Event handlers cannot be passed to Client Component props." + Z(b, c) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + Z(b, c));
    }
    if ("symbol" === typeof d) {
        e = a.writtenSymbols;
        g = e.get(d);
        if (void 0 !== g) return "$" + g.toString(16);
        g = d.description;
        if (Symbol.for(g) !== d) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (d.description + ") cannot be found among global symbols.") + Z(b, c));
        a.pendingChunks++;
        c = a.nextChunkId++;
        b = u(a, c, "$S" + g);
        a.completedImportChunks.push(b);
        e.set(d, c);
        return "$" + c.toString(16);
    }
    if ("bigint" === typeof d) throw Error("BigInt (" + d + ") is not yet supported in Client Component props." + Z(b, c));
    throw Error("Type " + typeof d + " is not supported in Client Component props." + Z(b, c));
}
function U(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function Za(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function V(a, b, c) {
    c = {
        digest: c
    };
    b = b.toString(16) + ":E" + t(c) + "\n";
    b = q.encode(b);
    a.completedErrorChunks.push(b);
}
function Wa(a) {
    var b = Ja.current, c = R;
    Ja.current = Ga;
    R = a.cache;
    L = a;
    try {
        var d = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < d.length; e++){
            var g = d[e];
            var h = a;
            if (0 === g.status) {
                I(g.context);
                try {
                    var k = g.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === y) {
                        var l = k, v = g.thenableState;
                        g.model = k;
                        k = X(h, l.type, l.key, l.ref, l.props, v);
                        for(g.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === y;)l = k, g.model = k, k = X(h, l.type, l.key, l.ref, l.props, null);
                    }
                    var ha = da(h, g.id, k);
                    h.completedJSONChunks.push(ha);
                    h.abortableTasks.delete(g);
                    g.status = 1;
                } catch (F) {
                    var x = F === J ? Aa() : F;
                    if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                        var M = g.ping;
                        x.then(M, M);
                        g.thenableState = Ba();
                    } else {
                        h.abortableTasks.delete(g);
                        g.status = 4;
                        var ia = U(h, x);
                        V(h, g.id, ia);
                    }
                }
            }
        }
        null !== a.destination && W(a, a.destination);
    } catch (F) {
        U(a, F), Za(a, F);
    } finally{
        Ja.current = b, R = c, L = null;
    }
}
function W(a, b) {
    m = new Uint8Array(512);
    n = 0;
    try {
        for(var c = a.completedImportChunks, d = 0; d < c.length; d++)a.pendingChunks--, p(b, c[d]);
        c.splice(0, d);
        var e = a.completedJSONChunks;
        for(d = 0; d < e.length; d++)a.pendingChunks--, p(b, e[d]);
        e.splice(0, d);
        var g = a.completedErrorChunks;
        for(d = 0; d < g.length; d++)a.pendingChunks--, p(b, g[d]);
        g.splice(0, d);
    } finally{
        m && 0 < n && (b.enqueue(new Uint8Array(m.buffer, 0, n)), m = null, n = 0);
    }
    0 === a.pendingChunks && b.close();
}
function $a(a) {
    f ? setTimeout(function() {
        return ba.run(a.cache, Wa, a);
    }, 0) : setTimeout(function() {
        return Wa(a);
    }, 0);
}
function ab(a, b) {
    try {
        var c = a.abortableTasks;
        if (0 < c.size) {
            var d = U(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            V(a, e, d);
            c.forEach(function(g) {
                g.status = 3;
                var h = "$" + e.toString(16);
                g = u(a, g.id, h);
                a.completedErrorChunks.push(g);
            });
            c.clear();
        }
        null !== a.destination && W(a, a.destination);
    } catch (g) {
        U(a, g), Za(a, g);
    }
}
function Oa(a) {
    if (a) {
        var b = G;
        I(null);
        for(var c = 0; c < a.length; c++){
            var d = a[c], e = d[0];
            d = d[1];
            T[e] || (T[e] = aa.createServerContext(e, pa));
            xa(T[e], d);
        }
        a = G;
        I(b);
        return a;
    }
    return null;
}
exports.renderToReadableStream = function(a, b, c) {
    var d = Ma(a, b, c ? c.onError : void 0, c ? c.context : void 0, c ? c.identifierPrefix : void 0);
    if (c && c.signal) {
        var e = c.signal;
        if (e.aborted) ab(d, e.reason);
        else {
            var g = function() {
                ab(d, e.reason);
                e.removeEventListener("abort", g);
            };
            e.addEventListener("abort", g);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            $a(d);
        },
        pull: function(h) {
            if (1 === d.status) d.status = 2, ca(h, d.fatalError);
            else if (2 !== d.status && null === d.destination) {
                d.destination = h;
                try {
                    W(d, h);
                } catch (k) {
                    U(d, k), Za(d, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 8378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(200);
} else {}


/***/ }),

/***/ 8193:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var f = __webpack_require__(1094), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;


/***/ }),

/***/ 5044:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = new Request(a, b);
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-next-3706edb81-20230308";


/***/ }),

/***/ 4458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(8193);
} else {}


/***/ }),

/***/ 1094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(5044);
} else {}


/***/ }),

/***/ 3231:
/***/ ((module) => {


(function(factory) {
    if (true) {
        // Node/CommonJS
        module.exports = factory();
    } else { var glob; }
})(function(undefined) {
    "use strict";
    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */ /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */ var add32 = function(a, b) {
        return a + b & 0xFFFFFFFF;
    }, hex_chr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
    }
    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    function md5blk(s) {
        var md5blks = [], i; /* Andy King said do it this way. */ 
        for(i = 0; i < 64; i += 4){
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }
    function md5blk_array(a) {
        var md5blks = [], i; /* Andy King said do it this way. */ 
        for(i = 0; i < 64; i += 4){
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }
    function md51(s) {
        var n = s.length, state = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ], i, length, tail, tmp, lo, hi;
        for(i = 64; i <= n; i += 64){
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for(i = 0; i < length; i += 1){
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 0x80 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for(i = 0; i < 16; i += 1){
                tail[i] = 0;
            }
        }
        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function md51_array(a) {
        var n = a.length, state = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ], i, length, tail, tmp, lo, hi;
        for(i = 64; i <= n; i += 64){
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for(i = 0; i < length; i += 1){
            tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 0x80 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for(i = 0; i < 16; i += 1){
                tail[i] = 0;
            }
        }
        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function rhex(n) {
        var s = "", j;
        for(j = 0; j < 4; j += 1){
            s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
        }
        return s;
    }
    function hex(x) {
        var i;
        for(i = 0; i < x.length; i += 1){
            x[i] = rhex(x[i]);
        }
        return x.join("");
    }
    // In some cases the fast add32 function cannot be used..
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 0xFFFF;
        };
    }
    // ---------------------------------------------------
    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */ if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0);
                }
                return Math.min(val, length);
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length);
                }
                if (begin > end) {
                    return new ArrayBuffer(0);
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target;
            };
        })();
    }
    // ---------------------------------------------------
    /**
     * Helpers.
     */ function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }
        return str;
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for(i = 0; i < length; i += 1){
            arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for(x = 0; x < length - 1; x += 2){
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
    }
    // ---------------------------------------------------
    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */ function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }
    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.append = function(str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));
        return this;
    };
    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for(i = 64; i <= length; i += 64){
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], ret;
        for(i = 0; i < length; i += 1){
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
            ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */ SparkMD5.prototype.getState = function() {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
        };
    };
    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
    };
    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */ SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };
    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */ SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 0x80 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for(i = 0; i < 16; i += 1){
                tail[i] = 0;
            }
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };
    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} [raw] True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.hash = function(str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };
    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    // ---------------------------------------------------
    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */ SparkMD5.ArrayBuffer = function() {
        // call reset to init the instance
        this.reset();
    };
    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for(i = 64; i <= length; i += 64){
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], i, ret;
        for(i = 0; i < length; i += 1){
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
            ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */ SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */ SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    return SparkMD5;
});


/***/ }),

/***/ 6281:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(3056);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 8158:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FLIGHT_PARAMETERS = exports.RSC_VARY_HEADER = exports.RSC_CONTENT_TYPE_HEADER = exports.FETCH_CACHE_HEADER = exports.NEXT_ROUTER_PREFETCH = exports.NEXT_ROUTER_STATE_TREE = exports.ACTION = exports.RSC = void 0;
const RSC = "RSC";
exports.RSC = RSC;
const ACTION = "Next-Action";
exports.ACTION = ACTION;
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
exports.NEXT_ROUTER_STATE_TREE = NEXT_ROUTER_STATE_TREE;
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
exports.NEXT_ROUTER_PREFETCH = NEXT_ROUTER_PREFETCH;
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
exports.FETCH_CACHE_HEADER = FETCH_CACHE_HEADER;
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
exports.RSC_CONTENT_TYPE_HEADER = RSC_CONTENT_TYPE_HEADER;
const RSC_VARY_HEADER = `${RSC}, ${NEXT_ROUTER_STATE_TREE}, ${NEXT_ROUTER_PREFETCH}`;
exports.RSC_VARY_HEADER = RSC_VARY_HEADER;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
exports.FLIGHT_PARAMETERS = FLIGHT_PARAMETERS;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 5958:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = AppRouter;
exports.urlToUrlWithoutFlightMarker = urlToUrlWithoutFlightMarker;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _appRouterContext = __webpack_require__(3280);
var _routerReducer = __webpack_require__(8331);
var _routerReducerTypes = __webpack_require__(7389);
var _createHrefFromUrl = __webpack_require__(6082);
var _hooksClientContext = __webpack_require__(9274);
var _useReducerWithDevtools = __webpack_require__(5002);
var _errorBoundary = __webpack_require__(1551);
var _createInitialRouterState = __webpack_require__(84);
var _fetchServerResponse = __webpack_require__(4883);
var _isBot = __webpack_require__(1897);
var _addBasePath = __webpack_require__(6281);
function AppRouter(props) {
    const { globalErrorComponent  } = props, rest = _object_without_properties_loose(props, [
        "globalErrorComponent"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, Object.assign({}, rest)));
}
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    // TODO-APP: handle .rsc for static export case
    return urlWithoutFlightParameters;
}
const HotReloader =  true ? null : 0;
const prefetched = new Set();
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
/**
 * The global router that wraps the application components.
 */ function Router({ initialHead , initialTree , initialCanonicalUrl , children , assetPrefix  }) {
    const initialState = (0, _react).useMemo(()=>(0, _createInitialRouterState).createInitialRouterState({
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree , cache , prefetchCache , pushRef , focusAndScrollRef , canonicalUrl  }, dispatch, sync] = (0, _useReducerWithDevtools).useReducerWithReduxDevtools(_routerReducer.reducer, initialState);
    (0, _react).useEffect(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams , pathname  } = (0, _react).useMemo(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    /**
   * Server response that only patches the cache and tree.
   */ const changeByServerResponse = (0, _react).useCallback((previousTree, flightData, overrideCanonicalUrl)=>{
        dispatch({
            type: _routerReducerTypes.ACTION_SERVER_PATCH,
            flightData,
            previousTree,
            overrideCanonicalUrl,
            cache: {
                status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                data: null,
                subTreeData: null,
                parallelRoutes: new Map()
            },
            mutable: {}
        });
    }, [
        dispatch
    ]);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react).useMemo(()=>{
        const navigate = (href, navigateType, forceOptimisticNavigation)=>{
            const url = new URL((0, _addBasePath).addBasePath(href), location.origin);
            return dispatch({
                type: _routerReducerTypes.ACTION_NAVIGATE,
                url,
                isExternalUrl: isExternalURL(url),
                locationSearch: location.search,
                forceOptimisticNavigation,
                navigateType,
                cache: {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                },
                mutable: {}
            });
        };
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: _async_to_generator(function*(href) {
                const hrefWithBasePath = (0, _addBasePath).addBasePath(href);
                // If prefetch has already been triggered, don't trigger it again.
                if (prefetched.has(hrefWithBasePath) ||  false && 0) {
                    return;
                }
                prefetched.add(hrefWithBasePath);
                const url = new URL(hrefWithBasePath, location.origin);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                try {
                    var ref;
                    const routerTree = ((ref = window.history.state) == null ? void 0 : ref.tree) || initialTree;
                    const serverResponse = yield (0, _fetchServerResponse).fetchServerResponse(url, routerTree, true);
                    // @ts-ignore startTransition exists
                    _react.default.startTransition(()=>{
                        dispatch({
                            type: _routerReducerTypes.ACTION_PREFETCH,
                            url,
                            tree: routerTree,
                            serverResponse
                        });
                    });
                } catch (err) {
                    console.error("PREFETCH ERROR", err);
                }
            }),
            replace: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation));
                });
            },
            push: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation));
                });
            },
            refresh: ()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    dispatch({
                        type: _routerReducerTypes.ACTION_REFRESH,
                        cache: {
                            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                            data: null,
                            subTreeData: null,
                            parallelRoutes: new Map()
                        },
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            }
        };
        return routerInstance;
    }, [
        dispatch,
        initialTree
    ]);
    (0, _react).useEffect(()=>{
        // When mpaNavigation flag is set do a hard navigation to the new url.
        if (pushRef.mpaNavigation) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            return;
        }
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createHrefFromUrl).createHrefFromUrl(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    // Add `window.nd` for debugging purposes.
    // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
    if (false) {}
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react).useCallback(({ state  })=>{
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        _react.default.startTransition(()=>{
            dispatch({
                type: _routerReducerTypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react).useEffect(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const content = /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, cache.subTreeData);
    return /*#__PURE__*/ _react.default.createElement(_hooksClientContext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksClientContext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.GlobalLayoutRouterContext.Provider, {
        value: {
            changeByServerResponse,
            tree,
            focusAndScrollRef
        }
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl,
            headRenderedAboveThisLevel: false
        }
    }, HotReloader ? /*#__PURE__*/ _react.default.createElement(HotReloader, {
        assetPrefix: assetPrefix
    }, content) : content)))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 1646:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(7704);
var _staticGenerationAsyncStorage = __webpack_require__(9029);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 8105:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.clientHookInServerComponentError = clientHookInServerComponentError;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 1551:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = GlobalError;
exports.ErrorBoundary = ErrorBoundary;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
function GlobalError({ error  }) {
    return /*#__PURE__*/ _react.default.createElement("html", null, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a client-side exception has occurred (see the browser console for more information)."), (error == null ? void 0 : error.digest) && /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, `Digest: ${error.digest}`)))));
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        textAlign: "left"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "3em",
        margin: 0
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null
        };
    }
}
exports.ErrorBoundaryHandler = ErrorBoundaryHandler;
function ErrorBoundary({ errorComponent , errorStyles , children  }) {
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 9830:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInfinitePromise = createInfinitePromise;
/**
 * Used to cache in createInfinitePromise
 */ let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 8950:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = OuterLayoutRouter;
exports.InnerLayoutRouter = InnerLayoutRouter;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _reactDom = _interop_require_default(__webpack_require__(8704));
var _appRouterContext = __webpack_require__(3280);
var _fetchServerResponse = __webpack_require__(4883);
var _infinitePromise = __webpack_require__(9830);
var _errorBoundary = __webpack_require__(1551);
var _matchSegments = __webpack_require__(7587);
var _navigation = __webpack_require__(616);
var _handleSmoothScroll = __webpack_require__(1668);
var _redirect = __webpack_require__(9053);
var _findHeadInCache = __webpack_require__(9718);
function OuterLayoutRouter({ parallelRouterKey , segmentPath , childProp , error , errorStyles , templateStyles , loading , loadingStyles , hasLoading , template , notFound , notFoundStyles  }) {
    const context = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes , tree , url , headRenderedAboveThisLevel  } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = Array.isArray(childProp.segment) ? childProp.segment[1] : childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegment = Array.isArray(treeSegment) ? treeSegment[1] : treeSegment;
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        currentChildSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, preservedSegments.map((preservedSegment)=>{
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_appRouterContext.TemplateContext.Provider, {
            key: preservedSegment,
            value: /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: childPropSegment === preservedSegment ? childProp : null,
                segmentPath: segmentPath,
                path: preservedSegment,
                isActive: currentChildSegment === preservedSegment,
                headRenderedAboveThisLevel: headRenderedAboveThisLevel
            })))))
        }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, templateStyles, template)));
    }));
}
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchSegments).matchSegment(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        _extends({}, treeToRecreate[1], {
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        })
                    ];
                }
                return [
                    treeToRecreate[0],
                    _extends({}, treeToRecreate[1], {
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    })
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (false) {}
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactDom.default.findDOMNode(instance);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
class ScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
        const { focusAndScrollRef  } = this.props;
        // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
        // This already caused a bug where the first child was a <link/> in head.
        const domNode = findDOMNode(this);
        if (focusAndScrollRef.apply && domNode instanceof HTMLElement) {
            // State is mutated to ensure that the focus and scroll is applied only once.
            focusAndScrollRef.apply = false;
            (0, _handleSmoothScroll).handleSmoothScroll(()=>{
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                // If the element's top edge is already in the viewport, exit early.
                if (topOfElementInViewport(domNode, viewportHeight)) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (!topOfElementInViewport(domNode, viewportHeight)) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true
            });
            // Set focus on the element
            domNode.focus();
        }
    }
    render() {
        return this.props.children;
    }
}
function InnerLayoutRouter({ parallelRouterKey , url , childNodes , childProp , segmentPath , tree , // isActive,
path , headRenderedAboveThisLevel  }) {
    const context = (0, _react).useContext(_appRouterContext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { changeByServerResponse , tree: fullTree , focusAndScrollRef  } = context;
    const head = (0, _react).useMemo(()=>{
        if (headRenderedAboveThisLevel) {
            return null;
        }
        return (0, _findHeadInCache).findHeadInCache(childNodes, tree[1]);
    }, [
        childNodes,
        tree,
        headRenderedAboveThisLevel
    ]);
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(path);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.status = _appRouterContext.CacheStates.READY;
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.subTreeData = childProp.current;
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
        } else {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNodes.set(path, {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            });
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
            // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
            childNode = childNodes.get(path);
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(path, {
            status: _appRouterContext.CacheStates.DATA_FETCH,
            data: (0, _fetchServerResponse).fetchServerResponse(new URL(url, location.origin), refetchTree),
            subTreeData: null,
            head: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        });
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(path);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react).use(childNode.data);
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            window.location.href = url;
            return null;
        }
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            // @ts-ignore startTransition exists
            _react.default.startTransition(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            headRenderedAboveThisLevel: true
        }
    }, head, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
        focusAndScrollRef: focusAndScrollRef
    }, subtree);
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ children , loading , loadingStyles , hasLoading  }) {
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function HandleRedirect({ redirect  }) {
    const router = (0, _navigation).useRouter();
    (0, _react).useEffect(()=>{
        router.replace(redirect, {});
    }, [
        redirect,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect).isRedirectError(error)) {
            const url = (0, _redirect).getURLFromRedirectError(error);
            return {
                redirect: url
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const redirect = this.state.redirect;
        if (redirect !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        };
    }
}
function RedirectBoundary({ children  }) {
    const router = (0, _navigation).useRouter();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: false
        };
    }
}
function NotFoundBoundary({ notFound , notFoundStyles , children  }) {
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        notFound: notFound,
        notFoundStyles: notFoundStyles
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 7587:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.matchSegment = void 0;
const matchSegment = (existingSegment, segment)=>{
    // Common case: segment is just a string
    if (typeof existingSegment === "string" && typeof segment === "string") {
        return existingSegment === segment;
    }
    // Dynamic parameter case: segment is an array with param/value. Both param and value are compared.
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
exports.matchSegment = matchSegment;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 616:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(8038);
var _appRouterContext = __webpack_require__(3280);
var _hooksClientContext = __webpack_require__(9274);
var _clientHookInServerComponentError = __webpack_require__(8105);
var _serverInsertedHtml = __webpack_require__(3349);
var _redirect = __webpack_require__(9053);
var _notFound = __webpack_require__(8721);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
exports.ReadonlyURLSearchParams = ReadonlyURLSearchParams;
function useSearchParams() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSearchParams");
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react).useMemo(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering  } = __webpack_require__(1646);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useRouter");
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegments");
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 8721:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.isNotFoundError = isNotFoundError;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 9053:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.isRedirectError = isRedirectError;
exports.getURLFromRedirectError = getURLFromRedirectError;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = `${REDIRECT_ERROR_CODE};${url}`;
    throw error;
}
function isRedirectError(error) {
    return typeof (error == null ? void 0 : error.digest) === "string" && error.digest.startsWith(REDIRECT_ERROR_CODE + ";") && error.digest.length > REDIRECT_ERROR_CODE.length + 1;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.slice(REDIRECT_ERROR_CODE.length + 1);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 2513:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = RenderFromTemplateContext;
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _appRouterContext = __webpack_require__(3280);
function RenderFromTemplateContext() {
    const children = (0, _react).useContext(_appRouterContext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 9748:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.applyRouterStatePatchToTree = applyRouterStatePatchToTree;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _matchSegments = __webpack_require__(7587);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [segment, parallelRoutes] = initialTree;
    if ((0, _matchSegments).matchSegment(segment, patchTree[0])) {
        const newParallelRoutes = {};
        for(const key in parallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchTree[1][key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(parallelRoutes[key], patchTree[1][key]);
            } else {
                newParallelRoutes[key] = parallelRoutes[key];
            }
        }
        for(const key1 in patchTree[1]){
            if (newParallelRoutes[key1]) {
                continue;
            }
            newParallelRoutes[key1] = patchTree[1][key1];
        }
        const tree = [
            segment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = treePatch;
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        _extends({}, parallelRoutes, {
            [parallelRouteKey]: parallelRoutePatch
        })
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 6082:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createHrefFromUrl = createHrefFromUrl;
function createHrefFromUrl(url) {
    return url.pathname + url.search + url.hash;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 84:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInitialRouterState = createInitialRouterState;
var _appRouterContext = __webpack_require__(3280);
var _createHrefFromUrl = __webpack_require__(6082);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(2800);
function createInitialRouterState({ initialTree , children , initialCanonicalUrl , initialParallelRoutes , isServer , location , initialHead  }) {
    const cache = {
        status: _appRouterContext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(cache, undefined, initialTree, initialHead);
    }
    return {
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createHrefFromUrl).createHrefFromUrl(location) : initialCanonicalUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 4401:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createOptimisticTree = createOptimisticTree;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _matchSegments = __webpack_require__(7587);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchSegments).matchSegment(existingSegment, segment);
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    if (!isLastSegment) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        _extends({}, parallelRoutes, childTree ? {
            children: childTree
        } : {})
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 8855:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createRecordFromThenable = createRecordFromThenable;
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 4883:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fetchServerResponse = fetchServerResponse;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _client = __webpack_require__(7897);
var _appRouterHeaders = __webpack_require__(8158);
var _appRouter = __webpack_require__(5958);
function fetchServerResponse(url, flightRouterState, prefetch) {
    return _fetchServerResponse.apply(this, arguments);
}
function _fetchServerResponse() {
    _fetchServerResponse = _async_to_generator(function*(url, flightRouterState, prefetch) {
        const headers = {
            // Enable flight response
            [_appRouterHeaders.RSC]: "1",
            // Provide the current router state
            [_appRouterHeaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(flightRouterState)
        };
        if (prefetch) {
            // Enable prefetch response
            headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH] = "1";
        }
        try {
            const res = yield fetch(url.toString(), {
                // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
                credentials: "same-origin",
                headers
            });
            const canonicalUrl = res.redirected ? (0, _appRouter).urlToUrlWithoutFlightMarker(res.url) : undefined;
            const isFlightResponse = res.headers.get("content-type") === _appRouterHeaders.RSC_CONTENT_TYPE_HEADER;
            // If fetch returns something different than flight response handle it like a mpa navigation
            if (!isFlightResponse) {
                return [
                    res.url,
                    undefined
                ];
            }
            // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
            const flightData = yield (0, _client).createFromFetch(Promise.resolve(res));
            return [
                flightData,
                canonicalUrl
            ];
        } catch (err) {
            console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
            // If fetch fails handle it like a mpa navigation
            // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
            // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
            return [
                url.toString(),
                undefined
            ];
        }
    });
    return _fetchServerResponse.apply(this, arguments);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 540:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillCacheWithDataProperty = fillCacheWithDataProperty;
var _appRouterContext = __webpack_require__(3280);
function fillCacheWithDataProperty(newCache, existingCache, segments, fetchResponse) {
    const isLastEntry = segments.length === 1;
    const parallelRouteKey = "children";
    const [segment] = segments;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segment);
    let childCacheNode = childSegmentMap.get(segment);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segment, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, segments.slice(1), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 2674:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillCacheWithNewSubTreeData = fillCacheWithNewSubTreeData;
var _appRouterContext = __webpack_require__(3280);
var _invalidateCacheByRouterState = __webpack_require__(5756);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(2800);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidateCacheByRouterState).invalidateCacheByRouterState(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4]);
            childSegmentMap.set(segmentForCache, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 2800:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillLazyItemsTillLeafWithHead = fillLazyItemsTillLeafWithHead;
var _appRouterContext = __webpack_require__(3280);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                parallelRouteCacheNode.delete(cacheKey);
                const newCacheNode = {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 8460:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invalidateCacheBelowFlightSegmentPath = invalidateCacheBelowFlightSegmentPath;
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(segmentForCache);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 5756:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invalidateCacheByRouterState = invalidateCacheByRouterState;
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 2545:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isNavigatingToNewRootLayout = isNavigatingToNewRootLayout;
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 4860:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.readRecordValue = readRecordValue;
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 9718:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.findHeadInCache = findHeadInCache;
function findHeadInCache(childSegmentMap, parallelRoutes) {
    if (!childSegmentMap) {
        return undefined;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const isLastItem = Object.keys(childParallelRoutes).length === 0;
        const cacheKey = Array.isArray(segment) ? segment[1] : segment;
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        if (isLastItem && cacheNode.head) return cacheNode.head;
        const segmentMap = cacheNode.parallelRoutes.get(key);
        if (segmentMap) {
            const item = findHeadInCache(segmentMap, childParallelRoutes);
            if (item) {
                return item;
            }
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 8131:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleMutable = handleMutable;
exports.applyFlightData = applyFlightData;
exports.handleExternalUrl = handleExternalUrl;
exports.navigateReducer = navigateReducer;
var _appRouterContext = __webpack_require__(3280);
var _fetchServerResponse = __webpack_require__(4883);
var _createRecordFromThenable = __webpack_require__(8855);
var _readRecordValue = __webpack_require__(4860);
var _createHrefFromUrl = __webpack_require__(6082);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(2800);
var _fillCacheWithNewSubtreeData = __webpack_require__(2674);
var _invalidateCacheBelowFlightSegmentpath = __webpack_require__(8460);
var _fillCacheWithDataProperty = __webpack_require__(540);
var _createOptimisticTree = __webpack_require__(4401);
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _shouldHardNavigate = __webpack_require__(1206);
var _isNavigatingToNewRootLayout = __webpack_require__(2545);
function handleMutable(state, mutable) {
    return {
        // Set href.
        canonicalUrl: typeof mutable.canonicalUrl !== "undefined" ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: typeof mutable.pendingPush !== "undefined" ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: typeof mutable.mpaNavigation !== "undefined" ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: typeof mutable.applyFocusAndScroll !== "undefined" ? mutable.applyFocusAndScroll : state.focusAndScrollRef.apply
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: state.prefetchCache,
        // Apply patched router state.
        tree: typeof mutable.patchedTree !== "undefined" ? mutable.patchedTree : state.tree
    };
}
function applyFlightData(state, cache, flightDataPath) {
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = state.cache.subTreeData;
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillCacheWithNewSubtreeData).fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
    }
    return true;
}
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.applyFocusAndScroll = false;
    return handleMutable(state, mutable);
}
function navigateReducer(state, action) {
    const { url , isExternalUrl , locationSearch , navigateType , cache , mutable , forceOptimisticNavigation  } = action;
    const { pathname , search  } = url;
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    const pendingPush = navigateType === "push";
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return handleMutable(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = state.prefetchCache.get(href);
    if (prefetchValues) {
        // The one before last item is the router state tree patch
        const { flightData , tree: newTree , canonicalUrlOverride  } = prefetchValues;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        if (newTree !== null) {
            if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
            const flightDataPath = flightData[0];
            const flightSegmentPath = flightDataPath.slice(0, -3);
            const applied = applyFlightData(state, cache, flightDataPath);
            const hardNavigate = search !== locationSearch || (0, _shouldHardNavigate).shouldHardNavigate([
                "",
                ...flightSegmentPath
            ], state.tree);
            if (hardNavigate) {
                cache.status = _appRouterContext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = state.cache.subTreeData;
                (0, _invalidateCacheBelowFlightSegmentpath).invalidateCacheBelowFlightSegmentPath(cache, state.cache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            mutable.previousTree = state.tree;
            mutable.patchedTree = newTree;
            mutable.applyFocusAndScroll = true;
            mutable.canonicalUrl = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : href;
            mutable.pendingPush = pendingPush;
            return handleMutable(state, mutable);
        }
    }
    // When doing a hard push there can be two cases: with optimistic tree and without
    // The with optimistic tree case only happens when the layouts have a loading state (loading.js)
    // The without optimistic tree case happens when there is no loading state, in that case we suspend in this reducer
    // forceOptimisticNavigation is used for links that have `prefetch={false}`.
    if (forceOptimisticNavigation) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createOptimisticTree).createOptimisticTree(segments, state.tree, false);
        // Copy subTreeData for the root node of the cache.
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = state.cache.subTreeData;
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillCacheWithDataProperty).fillCacheWithDataProperty(cache, state.cache, segments.slice(1), ()=>(0, _fetchServerResponse).fetchServerResponse(url, optimisticTree));
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.applyFocusAndScroll = true;
            mutable.cache = cache;
            mutable.canonicalUrl = href;
            return handleMutable(state, mutable);
        }
    }
    // Below is the not-optimistic case. Data is fetched at the root and suspended there without a suspense boundary.
    // If no in-flight fetch at the top, start it.
    if (!cache.data) {
        cache.data = (0, _createRecordFromThenable).createRecordFromThenable((0, _fetchServerResponse).fetchServerResponse(url, state.tree));
    }
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readRecordValue).readRecordValue(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // The one before last item is the router state tree patch
    const [treePatch] = flightDataPath.slice(-3, -2);
    // Path without the last segment, router state, and the subTreeData
    const flightSegmentPath = flightDataPath.slice(0, -4);
    // Create new tree based on the flightSegmentPath and router state patch
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return handleExternalUrl(state, mutable, href, pendingPush);
    }
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : href;
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.applyFocusAndScroll = true;
    mutable.pendingPush = pendingPush;
    const applied = applyFlightData(state, cache, flightDataPath);
    if (applied) {
        mutable.cache = cache;
    }
    return handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 7131:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prefetchReducer = prefetchReducer;
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _createHrefFromUrl = __webpack_require__(6082);
function prefetchReducer(state, action) {
    const { url , serverResponse  } = action;
    const [flightData, canonicalUrlOverride] = serverResponse;
    if (typeof flightData === "string") {
        return state;
    }
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // The one before last item is the router state tree patch
    const [treePatch] = flightDataPath.slice(-3);
    const flightSegmentPath = flightDataPath.slice(0, -3);
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    // Patch did not apply correctly
    if (newTree === null) {
        return state;
    }
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        flightData,
        // Create new tree based on the flightSegmentPath and router state patch
        tree: newTree,
        canonicalUrlOverride
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 9034:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.refreshReducer = refreshReducer;
var _fetchServerResponse = __webpack_require__(4883);
var _createRecordFromThenable = __webpack_require__(8855);
var _readRecordValue = __webpack_require__(4860);
var _createHrefFromUrl = __webpack_require__(6082);
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _isNavigatingToNewRootLayout = __webpack_require__(2545);
var _navigateReducer = __webpack_require__(8131);
function refreshReducer(state, action) {
    const { cache , mutable , origin  } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _navigateReducer).handleMutable(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createRecordFromThenable).createRecordFromThenable((0, _fetchServerResponse).fetchServerResponse(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ]));
    }
    const [flightData, canonicalUrlOverride] = (0, _readRecordValue).readRecordValue(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // FlightDataPath with more than two items means unexpected Flight data was returned
    if (flightDataPath.length !== 3) {
        // TODO-APP: handle this case better
        console.log("REFRESH FAILED");
        return state;
    }
    // Given the path can only have two items the items are only the router state and subTreeData for the root.
    const [treePatch] = flightDataPath;
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        ""
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, href, state.pushRef.pendingPush);
    }
    const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : undefined;
    if (canonicalUrlOverride) {
        mutable.canonicalUrl = canonicalUrlOverrideHref;
    }
    const applied = (0, _navigateReducer).applyFlightData(state, cache, flightDataPath);
    if (applied) {
        mutable.cache = cache;
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.canonicalUrl = href;
    return (0, _navigateReducer).handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 1838:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.restoreReducer = restoreReducer;
var _createHrefFromUrl = __webpack_require__(6082);
function restoreReducer(state, action) {
    const { url , tree  } = action;
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    return {
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 524:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serverPatchReducer = serverPatchReducer;
var _createHrefFromUrl = __webpack_require__(6082);
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _isNavigatingToNewRootLayout = __webpack_require__(2545);
var _navigateReducer = __webpack_require__(8131);
function serverPatchReducer(state, action) {
    const { flightData , previousTree , overrideCanonicalUrl , cache , mutable  } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _navigateReducer).handleMutable(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
    const flightSegmentPath = flightDataPath.slice(0, -4);
    const [treePatch] = flightDataPath.slice(-3, -2);
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
    }
    const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createHrefFromUrl).createHrefFromUrl(overrideCanonicalUrl) : undefined;
    if (canonicalUrlOverrideHref) {
        mutable.canonicalUrl = canonicalUrlOverrideHref;
    }
    (0, _navigateReducer).applyFlightData(state, cache, flightDataPath);
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.cache = cache;
    return (0, _navigateReducer).handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 7389:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ACTION_PREFETCH = exports.ACTION_SERVER_PATCH = exports.ACTION_RESTORE = exports.ACTION_NAVIGATE = exports.ACTION_REFRESH = void 0;
const ACTION_REFRESH = "refresh";
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_NAVIGATE = "navigate";
exports.ACTION_NAVIGATE = ACTION_NAVIGATE;
const ACTION_RESTORE = "restore";
exports.ACTION_RESTORE = ACTION_RESTORE;
const ACTION_SERVER_PATCH = "server-patch";
exports.ACTION_SERVER_PATCH = ACTION_SERVER_PATCH;
const ACTION_PREFETCH = "prefetch";
exports.ACTION_PREFETCH = ACTION_PREFETCH;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 8331:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reducer = void 0;
var _routerReducerTypes = __webpack_require__(7389);
var _navigateReducer = __webpack_require__(8131);
var _serverPatchReducer = __webpack_require__(524);
var _restoreReducer = __webpack_require__(1838);
var _refreshReducer = __webpack_require__(9034);
var _prefetchReducer = __webpack_require__(7131);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerReducerTypes.ACTION_NAVIGATE:
            {
                return (0, _navigateReducer).navigateReducer(state, action);
            }
        case _routerReducerTypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverPatchReducer).serverPatchReducer(state, action);
            }
        case _routerReducerTypes.ACTION_RESTORE:
            {
                return (0, _restoreReducer).restoreReducer(state, action);
            }
        case _routerReducerTypes.ACTION_REFRESH:
            {
                return (0, _refreshReducer).refreshReducer(state, action);
            }
        case _routerReducerTypes.ACTION_PREFETCH:
            {
                return (0, _prefetchReducer).prefetchReducer(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
exports.reducer = reducer;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 1206:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.shouldHardNavigate = shouldHardNavigate;
var _matchSegments = __webpack_require__(7587);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 5002:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useReducerWithReduxDevtools = void 0;
var _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react).useReducer(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react).useRef();
    const enabledRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react).useReducer(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react).useCallback(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
exports.useReducerWithReduxDevtools = useReducerWithReduxDevtools;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 3056:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 6101:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = dynamic;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _loadable = _interop_require_default(__webpack_require__(8162));
function dynamic(dynamicOptions, options) {
    const loadableFn = _loadable.default;
    const loadableOptions = {
        // A loading component is not required, so we default it
        loading: ({ error , isLoading , pastDelay  })=>{
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    }
    Object.assign(loadableOptions, options);
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));
    return loadableFn(_extends({}, loadableOptions, {
        loader: loader
    }));
}
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    var ref;
    return {
        default: ((ref = mod) == null ? void 0 : ref.default) || mod
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map


/***/ }),

/***/ 7704:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.suspense = suspense;
exports.NoSSR = NoSSR;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _noSsrError = __webpack_require__(1409);
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR({ children  }) {
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 8162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _dynamicNoSsr = __webpack_require__(7704);
function Loadable(options) {
    const opts = Object.assign({
        loader: null,
        loading: null,
        ssr: true
    }, options);
    opts.lazy = /*#__PURE__*/ _react.default.lazy(opts.loader);
    function LoadableComponent(props) {
        const Loading = opts.loading;
        const fallbackElement = /*#__PURE__*/ _react.default.createElement(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        });
        const Wrap = opts.ssr ? _react.default.Fragment : _dynamicNoSsr.NoSSR;
        const Lazy = opts.lazy;
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: fallbackElement
        }, /*#__PURE__*/ _react.default.createElement(Wrap, null, /*#__PURE__*/ _react.default.createElement(Lazy, Object.assign({}, props))));
    }
    LoadableComponent.displayName = "LoadableComponent";
    return LoadableComponent;
}
var _default = Loadable;
exports["default"] = _default; //# sourceMappingURL=loadable.js.map


/***/ }),

/***/ 1409:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NEXT_DYNAMIC_NO_SSR_CODE = void 0;
const NEXT_DYNAMIC_NO_SSR_CODE = "DYNAMIC_SERVER_USAGE";
exports.NEXT_DYNAMIC_NO_SSR_CODE = NEXT_DYNAMIC_NO_SSR_CODE; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y1": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports useDebounce, useThrottledCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function c(u,e,c){var i=this,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(u),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){d.current=u},[u]);var g=!e&&0!==e&&"undefined"!=typeof window;if("function"!=typeof u)throw new TypeError("Expected a function");e=+e||0;var w=!!(c=c||{}).leading,s=!("trailing"in c)||!!c.trailing,x="maxWait"in c,y=x?Math.max(+c.maxWait||0,e):null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]);var h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){var r=function(r){var n=l.current,t=m.current;return l.current=m.current=null,o.current=r,v.current=d.current.apply(t,n)},n=function(r,n){g&&cancelAnimationFrame(f.current),f.current=g?requestAnimationFrame(r):setTimeout(r,n)},t=function(r){if(!p.current)return!1;var n=r-a.current;return!a.current||n>=e||n<0||x&&r-o.current>=y},u=function(n){return f.current=null,s&&l.current?r(n):(l.current=m.current=null,v.current)},c=function r(){var c=Date.now();if(t(c))return u(c);if(p.current){var i=e-(c-a.current),f=x?Math.min(i,y-(c-o.current)):i;n(r,f)}},h=function(){var u=Date.now(),d=t(u);if(l.current=[].slice.call(arguments),m.current=i,a.current=u,d){if(!f.current&&p.current)return o.current=a.current,n(c,e),w?r(a.current):v.current;if(x)return n(c,e),r(a.current)}return f.current||n(c,e),v.current};return h.cancel=function(){f.current&&(g?cancelAnimationFrame(f.current):clearTimeout(f.current)),o.current=0,l.current=a.current=m.current=f.current=null},h.isPending=function(){return!!f.current},h.flush=function(){return f.current?u(Date.now()):v.current},h},[w,x,e,y,s,g]);return h}function i(r,n){return r===n}function a(r){return"function"==typeof r?function(){return r}:r}function o(n,t,o){var f,l,m=o&&o.equalityFn||i,v=(f=e(a(n)),l=f[1],[f[0],u(function(r){return l(a(r))},[])]),d=v[0],p=v[1],g=c(u(function(r){return p(r)},[p]),t,o),w=r(n);return m(w.current,n)||(g(n),w.current=n),[d,g]}function f(r,n,t){var u=void 0===t?{}:t,e=u.leading,i=u.trailing;return c(r,n,{maxWait:n,leading:void 0===e||e,trailing:void 0===i||i})}
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ 6079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(8038);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 9303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(8038),n=__webpack_require__(1448);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),

/***/ 1448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(6079);
} else {}


/***/ }),

/***/ 5020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(9303);
} else {}


/***/ }),

/***/ 3998:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ue": () => (/* binding */ create)
});

// UNUSED EXPORTS: createStore, default, useStore

;// CONCATENATED MODULE: ./node_modules/zustand/esm/vanilla.mjs
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (true) {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState) => {
  if (true) {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
    );
  }
  return createStore(createState);
};



// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/with-selector.js
var with_selector = __webpack_require__(5020);
;// CONCATENATED MODULE: ./node_modules/zustand/esm/index.mjs





const { useSyncExternalStoreWithSelector } = with_selector;
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0,react_.useDebugValue)(slice);
  return slice;
}
const createImpl = (createState) => {
  if ( true && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var react = (createState) => {
  if (true) {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    );
  }
  return create(createState);
};




/***/ }),

/***/ 8658:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tJ": () => (/* binding */ persist)
/* harmony export */ });
/* unused harmony exports combine, createJSONStorage, devtools, redux, subscribeWithSelector */
const reduxImpl = (reducer, initial) => (set, _get, api) => {
  api.dispatch = (action) => {
    set((state) => reducer(state, action), false, action);
    return action;
  };
  api.dispatchFromDevtools = true;
  return { dispatch: (...a) => api.dispatch(...a), ...initial };
};
const redux = (/* unused pure expression or super */ null && (reduxImpl));

const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name) => {
  const api = trackedConnections.get(name);
  if (!api)
    return {};
  return Object.fromEntries(
    Object.entries(api.stores).map(([key, api2]) => [key, api2.getState()])
  );
};
const extractConnectionInformation = (store, extensionConnector, options) => {
  if (store === void 0) {
    return {
      type: "untracked",
      connection: extensionConnector.connect(options)
    };
  }
  const existingConnection = trackedConnections.get(options.name);
  if (existingConnection) {
    return { type: "tracked", store, ...existingConnection };
  }
  const newConnection = {
    connection: extensionConnector.connect(options),
    stores: {}
  };
  trackedConnections.set(options.name, newConnection);
  return { type: "tracked", store, ...newConnection };
};
const devtoolsImpl = (fn, devtoolsOptions = {}) => (set, get, api) => {
  const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
  let extensionConnector;
  try {
    extensionConnector = (enabled != null ? enabled : (/* unsupported import.meta.env */ undefined && 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (e) {
  }
  if (!extensionConnector) {
    if ( true && enabled) {
      console.warn(
        "[zustand devtools middleware] Please install/enable Redux devtools extension"
      );
    }
    return fn(set, get, api);
  }
  const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
  let isRecording = true;
  api.setState = (state, replace, nameOrAction) => {
    const r = set(state, replace);
    if (!isRecording)
      return r;
    const action = nameOrAction === void 0 ? { type: anonymousActionType || "anonymous" } : typeof nameOrAction === "string" ? { type: nameOrAction } : nameOrAction;
    if (store === void 0) {
      connection == null ? void 0 : connection.send(action, get());
      return r;
    }
    connection == null ? void 0 : connection.send(
      {
        ...action,
        type: `${store}/${action.type}`
      },
      {
        ...getTrackedConnectionState(options.name),
        [store]: api.getState()
      }
    );
    return r;
  };
  const setStateFromDevtools = (...a) => {
    const originalIsRecording = isRecording;
    isRecording = false;
    set(...a);
    isRecording = originalIsRecording;
  };
  const initialState = fn(api.setState, get, api);
  if (connectionInformation.type === "untracked") {
    connection == null ? void 0 : connection.init(initialState);
  } else {
    connectionInformation.stores[connectionInformation.store] = api;
    connection == null ? void 0 : connection.init(
      Object.fromEntries(
        Object.entries(connectionInformation.stores).map(([key, store2]) => [
          key,
          key === connectionInformation.store ? initialState : store2.getState()
        ])
      )
    );
  }
  if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
    let didWarnAboutReservedActionType = false;
    const originalDispatch = api.dispatch;
    api.dispatch = (...a) => {
      if ( true && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
        console.warn(
          '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
        );
        didWarnAboutReservedActionType = true;
      }
      originalDispatch(...a);
    };
  }
  connection.subscribe((message) => {
    var _a;
    switch (message.type) {
      case "ACTION":
        if (typeof message.payload !== "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return parseJsonThen(
          message.payload,
          (action) => {
            if (action.type === "__setState") {
              if (store === void 0) {
                setStateFromDevtools(action.state);
                return;
              }
              if (Object.keys(action.state).length !== 1) {
                console.error(
                  `
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
                );
              }
              const stateFromDevtools = action.state[store];
              if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                setStateFromDevtools(stateFromDevtools);
              }
              return;
            }
            if (!api.dispatchFromDevtools)
              return;
            if (typeof api.dispatch !== "function")
              return;
            api.dispatch(action);
          }
        );
      case "DISPATCH":
        switch (message.payload.type) {
          case "RESET":
            setStateFromDevtools(initialState);
            if (store === void 0) {
              return connection == null ? void 0 : connection.init(api.getState());
            }
            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
          case "COMMIT":
            if (store === void 0) {
              connection == null ? void 0 : connection.init(api.getState());
              return;
            }
            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
          case "ROLLBACK":
            return parseJsonThen(message.state, (state) => {
              if (store === void 0) {
                setStateFromDevtools(state);
                connection == null ? void 0 : connection.init(api.getState());
                return;
              }
              setStateFromDevtools(state[store]);
              connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return parseJsonThen(message.state, (state) => {
              if (store === void 0) {
                setStateFromDevtools(state);
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                setStateFromDevtools(state[store]);
              }
            });
          case "IMPORT_STATE": {
            const { nextLiftedState } = message.payload;
            const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
            if (!lastComputedState)
              return;
            if (store === void 0) {
              setStateFromDevtools(lastComputedState);
            } else {
              setStateFromDevtools(lastComputedState[store]);
            }
            connection == null ? void 0 : connection.send(
              null,
              // FIXME no-any
              nextLiftedState
            );
            return;
          }
          case "PAUSE_RECORDING":
            return isRecording = !isRecording;
        }
        return;
    }
  });
  return initialState;
};
const devtools = (/* unused pure expression or super */ null && (devtoolsImpl));
const parseJsonThen = (stringified, f) => {
  let parsed;
  try {
    parsed = JSON.parse(stringified);
  } catch (e) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      e
    );
  }
  if (parsed !== void 0)
    f(parsed);
};

const subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};
const subscribeWithSelector = (/* unused pure expression or super */ null && (subscribeWithSelectorImpl));

const combine = (initialState, create) => (...a) => Object.assign({}, initialState, create(...a));

function createJSONStorage(getStorage) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(name, JSON.stringify(newValue)),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const oldImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (e) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
      errorInSync = e;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const newImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if (true) {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
const persist = persistImpl;




/***/ })

};
;