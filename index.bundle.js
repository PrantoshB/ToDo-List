(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_crud_js__WEBPACK_IMPORTED_MODULE_1__);






/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgb(234 250 254);\n}\n\n.todo-list {\n  width: 50vw;\n  background: white;\n  margin-top: 5%;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80vh;\n  -webkit-box-shadow: -2px 20px 19px -3px rgba(4, 91, 110, 0.37);\n  -moz-box-shadow: -2px 20px 19px -3px rgba(4, 91, 110, 0.37);\n  box-shadow: -2px 20px 19px -3px rgba(4, 91, 110, 0.37);\n}\n\nh3 {\n  padding: 3% 5%;\n  font-size: 1.2rem;\n  margin: 0;\n  color: rgb(255, 255, 255);\n  font-weight: 600;\n  width: 90.1%;\n  font-weight: 500;\n}\n\n.lists {\n  display: flex;\n  flex-direction: column;\n  height: 72%;\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.lists::-webkit-scrollbar {\n  display: none;\n}\n\n.add-to-list {\n  outline: none;\n  width: 90%;\n  border: none;\n  background: none;\n  font-style: italic;\n  font-size: 1.2rem;\n  padding: 4% 0;\n  font-size: 0.99rem;\n  color: rgb(0, 77, 140);\n}\n\nhr {\n  border: 0.5px solid rgba(0, 119, 231, 0.104);\n  margin: 0;\n  width: 100%;\n}\n\n.inputcontainer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  margin-top: 2%;\n}\n\n#removeicon,\n.material-icons {\n  color: rgba(0, 142, 194, 1);\n  font-size: 1.2rem;\n  margin-right: 3%;\n  cursor: pointer;\n}\n\n.save,\n.edit {\n  margin-right: 5%;\n  color: rgba(0, 142, 194, 1);\n}\n\nbutton,\ninput[type=checkbox] {\n  cursor: pointer;\n}\n\n.titleholder {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(277deg, rgba(0, 142, 194, 1) 0%, rgba(27, 192, 209, 0.8133903133903134) 56%, rgba(0, 212, 255, 1) 100%);\n  height: 13vh;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.clear-all {\n  width: 100%;\n  margin: 0;\n  padding: 3%;\n  text-align: center;\n  background: rgba(0, 0, 5, 0.887);\n  border: none;\n  color: rgb(255, 255, 255);\n  font-size: 1rem;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  height: 9vh;\n}\n\nh3,\ninput {\n  margin-left: 4% !important;\n}\n\n.mainlist {\n  padding: 4% 0;\n  border-bottom: 0.5px solid rgba(0, 142, 194, 0.121);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 10%;\n}\n\ninput.check {\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: none;\n}\n\n.listitem {\n  width: 80%;\n  border: none;\n  outline: none;\n  font-size: 1.2rem;\n  background: transparent;\n}\n\n.save {\n  display: none;\n}\n\n.checked {\n  text-decoration: line-through;\n  color: rgba(0, 142, 194, 1);\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    margin: 0;\n  }\n\n  .todo-list {\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n  }\n\n  .todo-list,\n  .clear-all,\n  .titleholder {\n    border-radius: 0%;\n  }\n\n  .lists {\n    height: 90%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ (() => {

const ListData = document.querySelector(".lists");
const InputField = document.querySelector(".add-to-list");
const ClearAll = document.querySelector(".clear-all");
let today = new Date();
const DateField = document.querySelector('#show-date')
let day = today.getDay()
let date = today.getDate()
let month = today.getMonth()
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
let monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



let completed = false,
  index = 0;
let ToDoData = [];

InputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && InputField.value.length != 0) {
    let storedData = localStorage.getItem("To-Do");

    if (storedData === null) {
      ToDoData = [];
    } else {
      ToDoData = JSON.parse(storedData);
      index = ToDoData.length === 0 ? 0 : ToDoData.length;
    }

    const LocalData = {
      index: index,
      description: InputField.value,
      completed: completed,
    };
    ToDoData.push(LocalData);
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
});

function addToList() {
  ListData.innerHTML = "";
  ToDoData.forEach((element) => {


    if (element.completed == true) {
      ListData.innerHTML += `
      <div class="mainlist">
      <input type="checkbox" class="check" id="check${element.index}" onclick="Check(${element.index});" checked>
      <input class="listitem checked" id="list${element.index}" value="${element.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
           <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
      <i id="removeicon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
      </div>
     `;

    }
    else {
      ListData.innerHTML += `
      <div class="mainlist">
      <input type="checkbox" class="check" id="check${element.index}" onclick="Check(${element.index});">
      <input class="listitem" id="list${element.index}" value="${element.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
           <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
      <i id="removeicon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
      </div>
     `;
    }
    InputField.value = "";
  });
}


window.Check = (index) => {
  const CheckIfChecked = document.getElementById("check" + index + "");
  const specList = document.getElementById("list" + index + "");
  if (CheckIfChecked.checked) {
    specList.style.textDecoration = 'line-through'
    specList.style.color = 'gray'
    let storedData = localStorage.getItem("To-Do");
    ToDoData = JSON.parse(storedData);
    ToDoData[index].completed = true;
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
  else {
    specList.style.textDecoration = 'none'
    specList.style.color = 'inherit'
    let storedData = localStorage.getItem("To-Do");
    ToDoData = JSON.parse(storedData);
    ToDoData[index].completed = false;
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
}


window.editList = (index) => {
  const editBtn = document.getElementById("edit" + index + "");
  const saveBtn = document.getElementById("save" + index + "");

  saveBtn.style.display = "block";
  editBtn.style.display = "none";
  const specList = document.getElementById("list" + index + "");
  specList.removeAttribute("readonly");
  const length = specList.value.length;
  specList.setSelectionRange(length, length);
  specList.focus();
  return specList;
};

window.saveList = (index) => {
  const editBtn = document.getElementById("edit" + index + "");
  const saveBtn = document.getElementById("save" + index + "");

  saveBtn.style.display = "none";
  editBtn.style.display = "block";

  const specList = document.getElementById("list" + index + "");
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  ToDoData[index].description = specList.value;

  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
};

window.Remove = (index) => {
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  ToDoData.splice(index, 1);
  for (let i = 0; i < ToDoData.length; i++) {
    ToDoData[i].index = i;
  }

  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
};

window.onload = () => {
  DateField.innerHTML = `${date} ${monthlist[month]}, ${daylist[day]}`;
  if (localStorage.getItem("To-Do")) {
    ToDoData = JSON.parse(localStorage.getItem("To-Do"));
  }
  addToList()
};

ClearAll.addEventListener('click', () => {
  console.log('clicked')
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  let ClearedData = ToDoData.filter((element) => element.completed === false);
  ToDoData = ClearedData;
  for (let i = 0; i < ToDoData.length; i++) {
    ToDoData[i].index = i;
  }
  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
})

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);