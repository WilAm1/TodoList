/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n#inbox-container button {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    text-align: left;\n}\n\n#inbox-container button:hover {\n    background-color: #cecece;\n}\n\n#inbox-container button.active,\ndiv.project.active {\n    background-color: #cecece;\n    font-weight: bold;\n}\n\n\n/* \n.project,\n#inbox-container button {} */\n\n.project {\n    background-color: #cecece;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.close-button {\n    float: right;\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* TODO card */\n\n\n/*           <div class=\"card-partial\">\n            <p class=\"card-title\" data-todo-name=\"${title}\">${title}</p>\n            <p class=\"card-date\">${formattedDate}</p>\n          </div>\n          <div class=\"card-extended\">\n            <p class=\"card-description\">${description}</p>\n            <p class=\"card-priority\">${priority}</p>\n          </div> */\n\n.todo-card {\n    background-color: #cecece;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    /* flex: 1; */\n}\n\n.card-partial {\n    background-color: #dddddd;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-extended {\n    display: none;\n}\n\n.card-extended.active {\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,SAAS;IACT,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;;AAGA,UAAU;;AAEV;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,yBAAyB;IACzB,iBAAiB;AACrB;;;AAGA;;4BAE4B;;AAE5B;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,eAAe;AACnB;;;AAGA,kBAAkB;;AAElB;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yEAAyE;AAC7E;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,oBAAoB;IACpB,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,sEAAsE;AAC1E;;;AAGA,cAAc;;;AAGd;;;;;;;kBAOkB;;AAElB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n#inbox-container button {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    text-align: left;\n}\n\n#inbox-container button:hover {\n    background-color: #cecece;\n}\n\n#inbox-container button.active,\ndiv.project.active {\n    background-color: #cecece;\n    font-weight: bold;\n}\n\n\n/* \n.project,\n#inbox-container button {} */\n\n.project {\n    background-color: #cecece;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.close-button {\n    float: right;\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* TODO card */\n\n\n/*           <div class=\"card-partial\">\n            <p class=\"card-title\" data-todo-name=\"${title}\">${title}</p>\n            <p class=\"card-date\">${formattedDate}</p>\n          </div>\n          <div class=\"card-extended\">\n            <p class=\"card-description\">${description}</p>\n            <p class=\"card-priority\">${priority}</p>\n          </div> */\n\n.todo-card {\n    background-color: #cecece;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    /* flex: 1; */\n}\n\n.card-partial {\n    background-color: #dddddd;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-extended {\n    display: none;\n}\n\n.card-extended.active {\n    display: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectInputUI": () => (/* binding */ projectInputUI),
/* harmony export */   "ProjectUI": () => (/* binding */ ProjectUI),
/* harmony export */   "ToDoUI": () => (/* binding */ ToDoUI)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");

//Will be using localStorage to check if projectname is avaible.


//Function that handles all event listeners of the modals
const eventManagerModal = (modal, pubsubFunc) => {


    const closeButton = modal.querySelector(".close-button");
    const form = modal.querySelector('form');
    const projectName = modal.querySelector('h3').dataset.projectName;
    // gets all required inputs (title,priority,description)
    const formInputs = Array.from(form.querySelectorAll('[required'));


    const showModal = () => {
        modal.classList.toggle("show-modal");
    };
    const removeModal = () => {
        modal.remove();
    };

    const windowOnClick = (event) => {
        //Will utilize this later on the closing the add project
        if (event.target === modal) {
            modal.remove();
        }
    };
    const addNotRequiredValues = () => {
        // optional if date is also input make it into another function
        if (form.querySelector('#date').value) {
            formInputs.push(form.querySelector('#date'))
        };
    };
    const checkFormValidity = () => {
        for (const input of formInputs) {
            if (!input.value.trim()) {
                // Will change later into warning element
                alert('Please input all fields');
                return false;
            }
        }
        return true;
    };
    const getInputValues = () => {
        return formInputs.reduce((obj, input) => {
            obj[input.id] = input.value;
            return obj
        }, {})
    };
    //show modal kinda redundant
    showModal();
    closeButton.addEventListener("click", removeModal);
    window.addEventListener("click", windowOnClick);

    //form event listeners
    const submitBtn = modal.querySelector('button[type="submit"]');
    submitBtn.addEventListener('click', (e) => {
        //Removes the default referesh on the form tag
        e.preventDefault();
        addNotRequiredValues();
        if (checkFormValidity()) {
            const formData = getInputValues();
            // Will add todo to project container !
            pubsubFunc({ data: {...formData }, project: projectName });

            modal.remove();
        };
    })
};


const makeToDoModalStructure = (name, modalTitle) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3 data-project-name="${name}">${modalTitle}</h3>
            <span class="close-button">&times;</span>
          </div>
          <div class="modal-body">
            <form id="todo-form">
                <label for="title">Title:</label>
                <input type="text" required id="title">
                <label for="description">Description:</label>
                <textarea id="description" rows="4" required></textarea>
                <label for="date">Due Date:</label>
                <input type="date" id="date" >
                <label for="priority">Priority:</label>
                <select id="priority" required>
                <option value="low" selected>Low</option>
                <option value="medium" >Medium</option>
                <option value="high" >High</option>
                </select>
             </form>
            <button form="todo-form" type="submit" id="form-submit-btn">Add Task</button>
           </div>
        </div>`;
    return modal;
};


//ToDo Modal Module
const renderNewToDoModal = ({ name, container }) => {
    const modalTitle = `New Task (${name})`;
    const modal = makeToDoModalStructure(name, modalTitle);
    eventManagerModal(modal, ({ data, project }) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('add-todo', {
            data,
            project,
        })
    });
    container.appendChild(modal);

};

//ToDo Modal Module
const renderUpdateToDoModal = ({ name, container, todoName }) => {
    const modalTitle = `Update Task (${name})`;
    const modal = makeToDoModalStructure(name, modalTitle);
    eventManagerModal(modal, ({ data, project }) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('update-todo', { data, project, todoName });
    });
    container.appendChild(modal);
};

const ToDoUI = ({ container }) => {
    const formatDate = (date) => {
        return (date) ? date : 'no due date'
    };

    const renderTodo = ({ projectName, todo }) => {
        const { title, description, date, priority } = todo;
        const card = document.createElement('div');
        const formattedDate = formatDate(date);
        card.classList.add('todo-card');
        card.dataset.insideProject = projectName;
        card.innerHTML = `
          <div class="card-partial">
            <p class="card-title" data-todo-name="${title}">${title}</p>
            <p class="card-date">${formattedDate}</p>
            <div class="todo-btn-container">
                <button class="remove-todo-btn">X</button>
                <button class="modify-todo-btn">edit</button>

            </div>
          </div>
          <div class="card-extended">
            <p class="card-description">${description}</p>
            <p class="card-priority">${priority}</p>
          </div>
                `;
        const partial = card.querySelector('.card-partial');
        const hiddenElement = card.querySelector('.card-extended');
        partial.addEventListener('click', () => {
            hiddenElement.classList.toggle('active');
        });

        const removeBtn = card.querySelector('button.remove-todo-btn');
        removeBtn.addEventListener('click', () => {
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('remove-todo', { projectName, todo });
            card.remove();
        });
        const editBtn = card.querySelector('button.modify-todo-btn');
        editBtn.addEventListener('click', () => {
            renderUpdateToDoModal({ name: projectName, container, todoName: todo.title });

        });


        container.appendChild(card);
    };
    const renderInvalidTodo = ({ title }) => {
        alert(`"${title}" is already been used! use different title!`)

    };

    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('render-todo', renderTodo);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('invalid-todo', renderInvalidTodo);
};






const ProjectUI = ({ root, todoContainer }) => {

    const makeToDoBtn = () => {
        const addBtn = document.createElement('button');
        addBtn.textContent = "(+) Add Task";
        addBtn.classList.add('add-todo-btn');
        return addBtn;
    };

    const removeContents = () => {
        todoContainer.innerHTML = ``;
    };

    const onProjectSingleClick = (name) => {
        removeContents();
        renderBtn({ name });
        // console.log(`I will now fetch todos from ${target}`);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('project-click', { name });
    };


    // const onProjectDoubleClick = ({ target }) => {
    //     console.log('I am double click');
    //     console.log(target)
    // };


    const renderBtn = ({ name, container = todoContainer }) => {
        // Will always run since will wipe main content for every click
        if (container.querySelector('button')) return;
        const btn = makeToDoBtn(name);
        btn.addEventListener('click', () => {
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('make-modal', {
                name,
                container
            });
        });
        container.appendChild(btn);
        //pubsub to remove project on the project list
    };

    const makeProjectElement = (name) => {
        const element = document.createElement('div');
        element.classList.add('project');
        element.dataset.name = `${name}-container`;
        element.innerHTML = `
        <p class="project-name" data-name="${name}"><i class="fas fa-tasks"></i> ${name}</p>
        <button class="project-exit-btn"><i class="fas fa-times"></i></button>
        `;
        return element
    };



    const renderProjectDiv = ({ name }) => {
        const newProject = makeProjectElement(name)
        const exitBtn = newProject.querySelector('.project-exit-btn');
        const paragraphElement = newProject.querySelector('p');

        newProject.addEventListener('mouseover', () => {
            exitBtn.style.display = 'block';
            exitBtn.classList.add('active');
        });
        newProject.addEventListener('mouseout', () => {
            exitBtn.style.display = 'none';
            exitBtn.classList.remove('active');
        });
        paragraphElement.addEventListener('click', ({ target }) => (onProjectSingleClick(target.dataset.name)));
        // paragraphElement.addEventListener('dblclick', onProjectDoubleClick)
        exitBtn.addEventListener('click', () => {
            newProject.remove();
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('remove-project', { name });
        });

        root.appendChild(newProject);
        //wil edit later
        renderBtn({ name });
    };
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('default-project', onProjectSingleClick);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('add-new-project', renderProjectDiv);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('remove-project', removeContents);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('make-modal', renderNewToDoModal);

};




//Handles the Popup 
const projectInputUI = function({ DOMbtn, DOMlist }) {
    const mainBtn = DOMbtn.querySelector('button');
    const hideBtn = (btn) => { btn.style.display = 'none'; };
    const showBtn = (btn) => { btn.style.display = "block"; };

    // Checks the data attribute of all elems of  project list 
    const isProjectNameValid = (name) => {
        const isAvailable = DOMlist.querySelector(`[data-name="${name}"]`);
        //#Will Add later: use API to check 
        //localStorage if property is already used.
        return !!isAvailable;
    };

    const checkStrValidity = (str) => {
        str = str.trim();
        if (!str) {
            console.log('invalid');
            alert('Please input a valid project name.');
            return false;
        }
        if (isProjectNameValid(str)) {
            alert('Project Name must be different')
            return false;
        }
        //Add another conditionial if there is a localStorage
        // if(localStorage) ...
        // console.log('Is valid!', str)    
        return true;
    };

    const renderInputProject = function() {
        const div = document.createElement('div');
        div.innerHTML = `
        <input type="text" required >
        <button id="add-new-project" type="submit">Add</button>
        <button id="cancel-new-project">Cancel</button>
        `;

        const addBtn = div.querySelector('#add-new-project');
        const cancelBtn = div.querySelector('#cancel-new-project');

        addBtn.addEventListener('click', () => {
            const inputText = div.querySelector('input').value;
            const isValid = checkStrValidity(inputText);
            if (isValid) {
                div.remove();
                showBtn(mainBtn);
                _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('add-new-project', { name: inputText })
            }
        });
        cancelBtn.addEventListener('click', () => {
            div.remove();
            showBtn(mainBtn);
        });
        DOMbtn.appendChild(div);
        // Add event listener to close input div if user clicked outside the div

    }
    const onAddProject = ({ target }) => {
        hideBtn(target);
        renderInputProject();
    }

    mainBtn.addEventListener('click', onAddProject);



}




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeStorage": () => (/* binding */ initializeStorage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





//Local Storage Stuff
const savedProjects = (() => {
    const defaultProject = localStorage.getItem('default');
    if (!defaultProject) {
        localStorage.setItem('default', JSON.stringify(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('default')));
    }

    const updateProject = (project) => {
        const name = project.name;
        const JSONProject = JSON.stringify(project);
        localStorage.setItem(name, JSONProject);
    };
    const removeProject = (project) => {
        localStorage.removeItem(project)
    };

    const getProjects = () => {
        const myContainer = {};
        for (let [projectName, project] of Object.entries(localStorage)) {
            project = JSON.parse(project);
            myContainer[projectName] = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);

            for (let [, todoObj] of Object.entries(project.container)) {
                const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](todoObj);
                myContainer[projectName].add(newTodo);
            }

        }
        return myContainer;
    };

    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('fetch-local-storage', getProjects)

    return { getProjects, updateProject, removeProject }
})();


const initializeStorage = function({ inbox, todoContainer }) {

    let container;

    if (savedProjects) {
        container = savedProjects.getProjects();
        console.log(container);

    } else {
        //if there is no local function called savedProjects
        container = {
            default: new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('default')
        };
    }


    // #TODO Move to appropriate module
    inbox.addEventListener('click', ({ target }) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('default-project', target.dataset.name);
    });


    const addProject = ({ name: projectName }) => {
        // hmm checks if there is same name
        if (container[projectName]) {
            return
        }
        container[projectName] = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
        //Updates the key in the local Storage
        if (savedProjects) {
            savedProjects.updateProject(container[projectName]);
        }
    };
    const removeProject = ({ name }) => {
        if (container[name]) {
            if (savedProjects) {
                savedProjects.removeProject(name);
            }
            delete container[name];
        }
    };
    const getProject = (name) => {
        if (container[name]) {
            return container[name]
        }
        return null;
    };

    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('update-todo', ({ data, project, todoName }) => {
        console.log(getProject(project).remove(todoName));
        const updatedToDo = new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](data);
        const success = getProject(project).add(updatedToDo);
        if (savedProjects) {
            savedProjects.updateProject(getProject(project));
            console.log('saved on localStorage')
        }
        console.log(success);
        // must use default project . But we can't get project button
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('default-project', project);

    });

    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('add-todo', ({ data, project }) => {
        const myProject = getProject(project);
        if (myProject) {
            //error handling for blocking same name todo
            if (myProject.get(data.title)) {
                _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('invalid-todo', { title: data.title });
                console.log('successfully blocked!')
                return
            }

            const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](data)
            myProject.add(newTodo);
            if (savedProjects) {
                savedProjects.updateProject(myProject);
            }
            _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('render-todo', { projectName: myProject.name, todo: newTodo });
        }
    });


    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('remove-todo', ({ projectName, todo }) => {
        const project = getProject(projectName);
        if (project) {
            project.remove(todo.title);
            if (savedProjects) {
                savedProjects.updateProject(project);
            }
        }
    });


    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project-click', ({ name }) => {
        const project = getProject(name);
        const allTasks = project.getAll();
        console.log(allTasks)
        if (Object.keys(allTasks).length === 0 && allTasks.constructor === Object) {
            console.log('I have no tasks!')
            return
        }
        for (const [, value] of Object.entries(allTasks)) {
            _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('render-todo', { projectName: name, todo: value })
        }
    });

    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('fetch-projects', () => {
        for (const [key] of Object.entries(container)) {
            if (key === 'default') continue
            _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('add-new-project', { name: key })
        }
    });


    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('add-new-project', addProject);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('remove-project', removeProject);
    //renders the inbox project at DOMLoad
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('default-project', inbox.dataset.name);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('fetch-projects')


    return {
        getProject
    }
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    name = this.name;
    constructor(name, container = {}) {
        this.name = name;
        this.container = container;
        this.length = 0;

    }
    get(key) {
        return this.container[key];
    }
    replace(obj) {
        if (!!this.container[obj.title]) {
            return false;
        }
        this.container[obj.title] = obj;
        return true;
    }
    add(obj) {
        if (!!this.container[obj.title]) {
            return false;
        }
        this.container[obj.title] = obj;
        this.length++;
        return true;
    }
    remove(key) {
        if (!this.container[key]) {
            return null;
        }
        delete this.container[key];
        return --this.length;
    }
    getAll() {
        return this.container;
    }

});

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    static subscribers = {};
    constructor() {

    }
    static subscribe(topic, cb) {
        if (!Array.isArray(this.subscribers[topic])) {
            this.subscribers[topic] = [];
        }
        this.subscribers[topic].push(cb);
        const index = this.subscribers[topic].length - 1;
        return {
            unsubscribe() {
                this.subscribers[topic].splice(index, 1);
            }
        }
    }
    static publish(topic, data) {
        if (!Array.isArray(this.subscribers[topic])) {
            return
        }
        this.subscribers[topic].forEach(callback => {
            callback(data)
        });
    }
});

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor({ title, description, priority, date }) {
        //date may be undefined
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





(() => {
    const projectContainer = document.querySelector('#project-list');
    const todoContainer = document.querySelector('#main-content');
    const inbox = document.querySelector("#inbox");

    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.ToDoUI)({ container: todoContainer });

    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.ProjectUI)({
        root: projectContainer,
        todoContainer
    })
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.initializeStorage)({ inbox, todoContainer });

    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.projectInputUI)({
        DOMbtn: document.querySelector('#project-btn-container'),
        DOMlist: projectContainer,
    });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDBCQUEwQixHQUFHLGNBQWMsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsNkJBQTZCLGdDQUFnQyxxQkFBcUIsR0FBRyxZQUFZLGdDQUFnQyxvQkFBb0IscUJBQXFCLEdBQUcsVUFBVSxvQkFBb0IsNEJBQTRCLHNDQUFzQyxHQUFHLGNBQWMsY0FBYyxHQUFHLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixvQkFBb0IsK0JBQStCLGdCQUFnQixHQUFHLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUNBQXVDLG9CQUFvQiw2QkFBNkIsR0FBRyx3Q0FBd0Msb0JBQW9CLHlCQUF5QixtQkFBbUIsMEJBQTBCLG9DQUFvQyxzQkFBc0IsdUJBQXVCLEdBQUcsbUNBQW1DLGdDQUFnQyxHQUFHLHlEQUF5RCxnQ0FBZ0Msd0JBQXdCLEdBQUcsaURBQWlELGdCQUFnQixnQ0FBZ0Msb0JBQW9CLHFDQUFxQyxHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsOEJBQThCLHFCQUFxQixtQkFBbUIsb0NBQW9DLHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLDZDQUE2QyxpQkFBaUIseUJBQXlCLDRCQUE0QixnRkFBZ0YsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1Qyw4QkFBOEIsMkJBQTJCLGlCQUFpQiw0QkFBNEIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0NBQWtDLEdBQUcseUJBQXlCLGlDQUFpQyxHQUFHLGlCQUFpQixpQkFBaUIsMEJBQTBCLDRCQUE0Qiw2RUFBNkUsR0FBRyw2SEFBNkgsTUFBTSxLQUFLLE1BQU0sMkNBQTJDLGNBQWMsNkdBQTZHLFlBQVksK0NBQStDLFNBQVMseUNBQXlDLGdDQUFnQyxtQkFBbUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSyxtQkFBbUIsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLE9BQU8saUZBQWlGLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFFBQVEsTUFBTSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxZQUFZLFdBQVcsUUFBUSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsNkJBQTZCLDBCQUEwQixHQUFHLGNBQWMsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsNkJBQTZCLGdDQUFnQyxxQkFBcUIsR0FBRyxZQUFZLGdDQUFnQyxvQkFBb0IscUJBQXFCLEdBQUcsVUFBVSxvQkFBb0IsNEJBQTRCLHNDQUFzQyxHQUFHLGNBQWMsY0FBYyxHQUFHLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixvQkFBb0IsK0JBQStCLGdCQUFnQixHQUFHLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUNBQXVDLG9CQUFvQiw2QkFBNkIsR0FBRyx3Q0FBd0Msb0JBQW9CLHlCQUF5QixtQkFBbUIsMEJBQTBCLG9DQUFvQyxzQkFBc0IsdUJBQXVCLEdBQUcsbUNBQW1DLGdDQUFnQyxHQUFHLHlEQUF5RCxnQ0FBZ0Msd0JBQXdCLEdBQUcsaURBQWlELGdCQUFnQixnQ0FBZ0Msb0JBQW9CLHFDQUFxQyxHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsOEJBQThCLHFCQUFxQixtQkFBbUIsb0NBQW9DLHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLDZDQUE2QyxpQkFBaUIseUJBQXlCLDRCQUE0QixnRkFBZ0YsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1Qyw4QkFBOEIsMkJBQTJCLGlCQUFpQiw0QkFBNEIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0NBQWtDLEdBQUcseUJBQXlCLGlDQUFpQyxHQUFHLGlCQUFpQixpQkFBaUIsMEJBQTBCLDRCQUE0Qiw2RUFBNkUsR0FBRyw2SEFBNkgsTUFBTSxLQUFLLE1BQU0sMkNBQTJDLGNBQWMsNkdBQTZHLFlBQVksK0NBQStDLFNBQVMseUNBQXlDLGdDQUFnQyxtQkFBbUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSyxtQkFBbUIsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLG1CQUFtQjtBQUNyb1E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEI7QUFDOUI7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTyxhQUFhLHdCQUF3Qjs7QUFFckU7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEtBQUssSUFBSSxXQUFXO0FBQ3pELDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQyxvQ0FBb0MsS0FBSztBQUN6QztBQUNBLGdDQUFnQyxlQUFlO0FBQy9DLFFBQVEsdURBQWM7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsMkJBQTJCO0FBQzVELHVDQUF1QyxLQUFLO0FBQzVDO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0MsUUFBUSx1REFBYyxrQkFBa0IseUJBQXlCO0FBQ2pFLEtBQUs7QUFDTDtBQUNBOztBQUVBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsbUJBQW1CO0FBQzdDLGdCQUFnQixxQ0FBcUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU0sSUFBSSxNQUFNO0FBQ3BFLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RCx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxZQUFZLHVEQUFjLGtCQUFrQixtQkFBbUI7QUFDL0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9DQUFvQyxvREFBb0Q7O0FBRXhGLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QyxrQkFBa0IsTUFBTTs7QUFFeEI7O0FBRUEsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSx5REFBZ0I7QUFDcEI7Ozs7Ozs7QUFPQSxxQkFBcUIscUJBQXFCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQixzREFBc0QsT0FBTztBQUM3RCxRQUFRLHVEQUFjLG9CQUFvQixNQUFNO0FBQ2hEOzs7QUFHQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7OztBQUdBLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFjO0FBQzFCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsS0FBSztBQUN2QztBQUNBLDZDQUE2QyxLQUFLLGlDQUFpQyxLQUFLO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYyxxQkFBcUIsTUFBTTtBQUNyRCxTQUFTOztBQUVUO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCOztBQUVwQjs7Ozs7QUFLQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQSwrQkFBK0I7QUFDL0IsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0EsaUVBQWlFLEtBQUs7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWMsc0JBQXNCLGlCQUFpQjtBQUNyRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWZ0M7QUFDRjtBQUNMOzs7QUFHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0RBQU87QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnREFBTzs7QUFFbEQ7QUFDQSxvQ0FBb0MsNkNBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5REFBZ0I7O0FBRXBCLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxxQ0FBcUMsc0JBQXNCOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEM7QUFDQTs7O0FBR0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQyxRQUFRLHVEQUFjO0FBQ3RCLEtBQUs7OztBQUdMLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0RBQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQWdCLG1CQUFtQix5QkFBeUI7QUFDaEU7QUFDQSxnQ0FBZ0MsNkNBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFjOztBQUV0QixLQUFLOztBQUVMLElBQUkseURBQWdCLGdCQUFnQixlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFjLG1CQUFtQixtQkFBbUI7QUFDcEU7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2Q0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWMsa0JBQWtCLDRDQUE0QztBQUN4RjtBQUNBLEtBQUs7OztBQUdMLElBQUkseURBQWdCLG1CQUFtQixtQkFBbUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxJQUFJLHlEQUFnQixxQkFBcUIsTUFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYyxrQkFBa0IsZ0NBQWdDO0FBQzVFO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBYyxzQkFBc0IsV0FBVztBQUMzRDtBQUNBLEtBQUs7OztBQUdMLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCO0FBQ3BCO0FBQ0EsSUFBSSx1REFBYztBQUNsQixJQUFJLHVEQUFjOzs7QUFHbEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtBLGlFQUFlO0FBQ2Y7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckNBLGlFQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QjhCOztBQUU5QixpRUFBZTtBQUNmLGtCQUFrQixvQ0FBb0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDNkI7O0FBRVQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksOENBQU0sR0FBRywwQkFBMEI7O0FBRXZDLElBQUksaURBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksaUVBQWlCLEdBQUcsc0JBQXNCOztBQUU5QyxJQUFJLHNEQUFjO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBjb2xvcjogI2VlZWVlZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogbm93cmFwIHJvdztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG59XFxuXFxubWFpbj5kaXYge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5tYWluIGRpdiNtZW51IHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweFxcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQ+KiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5cXG4vKiBJbmJveCAqL1xcblxcbiNpbmJveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxufVxcblxcbiNpbmJveC1jb250YWluZXIgYnV0dG9uLmFjdGl2ZSxcXG5kaXYucHJvamVjdC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuLyogXFxuLnByb2plY3QsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24ge30gKi9cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QgcCxcXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1leGl0LWJ0bi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzOCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5cXG4vKiBUT0RPIGNhcmQgKi9cXG5cXG5cXG4vKiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1wYXJ0aWFsXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCIgZGF0YS10b2RvLW5hbWU9XFxcIiR7dGl0bGV9XFxcIj4ke3RpdGxlfTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1kYXRlXFxcIj4ke2Zvcm1hdHRlZERhdGV9PC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1leHRlbmRlZFxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtZGVzY3JpcHRpb25cXFwiPiR7ZGVzY3JpcHRpb259PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXByaW9yaXR5XFxcIj4ke3ByaW9yaXR5fTwvcD5cXG4gICAgICAgICAgPC9kaXY+ICovXFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZmxleDogMTsgKi9cXG59XFxuXFxuLmNhcmQtcGFydGlhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhcmQtZXh0ZW5kZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FyZC1leHRlbmRlZC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7OztBQUdBLFVBQVU7O0FBRVY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOzs7QUFHQTs7NEJBRTRCOztBQUU1QjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0VBQXNFO0FBQzFFOzs7QUFHQSxjQUFjOzs7QUFHZDs7Ozs7OztrQkFPa0I7O0FBRWxCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgY29sb3I6ICNlZWVlZWU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IG5vd3JhcCByb3c7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxufVxcblxcbm1haW4+ZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxubWFpbiBkaXYjbWVudSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHhcXG59XFxuXFxubWFpbiBkaXYjbWFpbi1jb250ZW50IHtcXG4gICAgZmxleDogMi41O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxubWFpbiBkaXYjbWFpbi1jb250ZW50Pioge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuXFxuLyogSW5ib3ggKi9cXG5cXG4jaW5ib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2luYm94LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbn1cXG5cXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbi5hY3RpdmUsXFxuZGl2LnByb2plY3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbi8qIFxcbi5wcm9qZWN0LFxcbiNpbmJveC1jb250YWluZXIgYnV0dG9uIHt9ICovXFxuXFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0IHAsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWV4aXQtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uc2hvdy1tb2RhbCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuXFxuLyogVE9ETyBjYXJkICovXFxuXFxuXFxuLyogICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtcGFydGlhbFxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiIGRhdGEtdG9kby1uYW1lPVxcXCIke3RpdGxlfVxcXCI+JHt0aXRsZX08L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtZGF0ZVxcXCI+JHtmb3JtYXR0ZWREYXRlfTwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZXh0ZW5kZWRcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWRlc2NyaXB0aW9uXFxcIj4ke2Rlc2NyaXB0aW9ufTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1wcmlvcml0eVxcXCI+JHtwcmlvcml0eX08L3A+XFxuICAgICAgICAgIDwvZGl2PiAqL1xcblxcbi50b2RvLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGZsZXg6IDE7ICovXFxufVxcblxcbi5jYXJkLXBhcnRpYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jYXJkLWV4dGVuZGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcmQtZXh0ZW5kZWQuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViJztcbi8vV2lsbCBiZSB1c2luZyBsb2NhbFN0b3JhZ2UgdG8gY2hlY2sgaWYgcHJvamVjdG5hbWUgaXMgYXZhaWJsZS5cblxuXG4vL0Z1bmN0aW9uIHRoYXQgaGFuZGxlcyBhbGwgZXZlbnQgbGlzdGVuZXJzIG9mIHRoZSBtb2RhbHNcbmNvbnN0IGV2ZW50TWFuYWdlck1vZGFsID0gKG1vZGFsLCBwdWJzdWJGdW5jKSA9PiB7XG5cblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG4gICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gzJykuZGF0YXNldC5wcm9qZWN0TmFtZTtcbiAgICAvLyBnZXRzIGFsbCByZXF1aXJlZCBpbnB1dHMgKHRpdGxlLHByaW9yaXR5LGRlc2NyaXB0aW9uKVxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkJykpO1xuXG5cbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1vZGFsXCIpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB3aW5kb3dPbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vV2lsbCB1dGlsaXplIHRoaXMgbGF0ZXIgb24gdGhlIGNsb3NpbmcgdGhlIGFkZCBwcm9qZWN0XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkTm90UmVxdWlyZWRWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIC8vIG9wdGlvbmFsIGlmIGRhdGUgaXMgYWxzbyBpbnB1dCBtYWtlIGl0IGludG8gYW5vdGhlciBmdW5jdGlvblxuICAgICAgICBpZiAoZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3JtSW5wdXRzLnB1c2goZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tGb3JtVmFsaWRpdHkgPSAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgZm9ybUlucHV0cykge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBXaWxsIGNoYW5nZSBsYXRlciBpbnRvIHdhcm5pbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgYWxsIGZpZWxkcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0VmFsdWVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm9ybUlucHV0cy5yZWR1Y2UoKG9iaiwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIG9ialtpbnB1dC5pZF0gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pXG4gICAgfTtcbiAgICAvL3Nob3cgbW9kYWwga2luZGEgcmVkdW5kYW50XG4gICAgc2hvd01vZGFsKCk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZU1vZGFsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xuXG4gICAgLy9mb3JtIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy9SZW1vdmVzIHRoZSBkZWZhdWx0IHJlZmVyZXNoIG9uIHRoZSBmb3JtIHRhZ1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZE5vdFJlcXVpcmVkVmFsdWVzKCk7XG4gICAgICAgIGlmIChjaGVja0Zvcm1WYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGdldElucHV0VmFsdWVzKCk7XG4gICAgICAgICAgICAvLyBXaWxsIGFkZCB0b2RvIHRvIHByb2plY3QgY29udGFpbmVyICFcbiAgICAgICAgICAgIHB1YnN1YkZ1bmMoeyBkYXRhOiB7Li4uZm9ybURhdGEgfSwgcHJvamVjdDogcHJvamVjdE5hbWUgfSk7XG5cbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH0pXG59O1xuXG5cbmNvbnN0IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUgPSAobmFtZSwgbW9kYWxUaXRsZSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzIGRhdGEtcHJvamVjdC1uYW1lPVwiJHtuYW1lfVwiPiR7bW9kYWxUaXRsZX08L2gzPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1idXR0b25cIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cInRvZG8tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPVwiNFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiBzZWxlY3RlZD5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uIGZvcm09XCJ0b2RvLWZvcm1cIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJmb3JtLXN1Ym1pdC1idG5cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gbW9kYWw7XG59O1xuXG5cbi8vVG9EbyBNb2RhbCBNb2R1bGVcbmNvbnN0IHJlbmRlck5ld1RvRG9Nb2RhbCA9ICh7IG5hbWUsIGNvbnRhaW5lciB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGBOZXcgVGFzayAoJHtuYW1lfSlgO1xuICAgIGNvbnN0IG1vZGFsID0gbWFrZVRvRG9Nb2RhbFN0cnVjdHVyZShuYW1lLCBtb2RhbFRpdGxlKTtcbiAgICBldmVudE1hbmFnZXJNb2RhbChtb2RhbCwgKHsgZGF0YSwgcHJvamVjdCB9KSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGQtdG9kbycsIHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbn07XG5cbi8vVG9EbyBNb2RhbCBNb2R1bGVcbmNvbnN0IHJlbmRlclVwZGF0ZVRvRG9Nb2RhbCA9ICh7IG5hbWUsIGNvbnRhaW5lciwgdG9kb05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBgVXBkYXRlIFRhc2sgKCR7bmFtZX0pYDtcbiAgICBjb25zdCBtb2RhbCA9IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUobmFtZSwgbW9kYWxUaXRsZSk7XG4gICAgZXZlbnRNYW5hZ2VyTW9kYWwobW9kYWwsICh7IGRhdGEsIHByb2plY3QgfSkgPT4ge1xuICAgICAgICBwdWJzdWIucHVibGlzaCgndXBkYXRlLXRvZG8nLCB7IGRhdGEsIHByb2plY3QsIHRvZG9OYW1lIH0pO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG59O1xuXG5jb25zdCBUb0RvVUkgPSAoeyBjb250YWluZXIgfSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGRhdGUpID8gZGF0ZSA6ICdubyBkdWUgZGF0ZSdcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVG9kbyA9ICh7IHByb2plY3ROYW1lLCB0b2RvIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5IH0gPSB0b2RvO1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZCcpO1xuICAgICAgICBjYXJkLmRhdGFzZXQuaW5zaWRlUHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wYXJ0aWFsXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGl0bGVcIiBkYXRhLXRvZG8tbmFtZT1cIiR7dGl0bGV9XCI+JHt0aXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS10b2RvLWJ0blwiPlg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kaWZ5LXRvZG8tYnRuXCI+ZWRpdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1leHRlbmRlZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtcHJpb3JpdHlcIj4ke3ByaW9yaXR5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICBjb25zdCBwYXJ0aWFsID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wYXJ0aWFsJyk7XG4gICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWV4dGVuZGVkJyk7XG4gICAgICAgIHBhcnRpYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoaWRkZW5FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5yZW1vdmUtdG9kby1idG4nKTtcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3JlbW92ZS10b2RvJywgeyBwcm9qZWN0TmFtZSwgdG9kbyB9KTtcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubW9kaWZ5LXRvZG8tYnRuJyk7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJVcGRhdGVUb0RvTW9kYWwoeyBuYW1lOiBwcm9qZWN0TmFtZSwgY29udGFpbmVyLCB0b2RvTmFtZTogdG9kby50aXRsZSB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlckludmFsaWRUb2RvID0gKHsgdGl0bGUgfSkgPT4ge1xuICAgICAgICBhbGVydChgXCIke3RpdGxlfVwiIGlzIGFscmVhZHkgYmVlbiB1c2VkISB1c2UgZGlmZmVyZW50IHRpdGxlIWApXG5cbiAgICB9O1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVuZGVyLXRvZG8nLCByZW5kZXJUb2RvKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdpbnZhbGlkLXRvZG8nLCByZW5kZXJJbnZhbGlkVG9kbyk7XG59O1xuXG5cblxuXG5cblxuY29uc3QgUHJvamVjdFVJID0gKHsgcm9vdCwgdG9kb0NvbnRhaW5lciB9KSA9PiB7XG5cbiAgICBjb25zdCBtYWtlVG9Eb0J0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiKCspIEFkZCBUYXNrXCI7XG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idG4nKTtcbiAgICAgICAgcmV0dXJuIGFkZEJ0bjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ29udGVudHMgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gYGA7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uUHJvamVjdFNpbmdsZUNsaWNrID0gKG5hbWUpID0+IHtcbiAgICAgICAgcmVtb3ZlQ29udGVudHMoKTtcbiAgICAgICAgcmVuZGVyQnRuKHsgbmFtZSB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEkgd2lsbCBub3cgZmV0Y2ggdG9kb3MgZnJvbSAke3RhcmdldH1gKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3QtY2xpY2snLCB7IG5hbWUgfSk7XG4gICAgfTtcblxuXG4gICAgLy8gY29uc3Qgb25Qcm9qZWN0RG91YmxlQ2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnSSBhbSBkb3VibGUgY2xpY2snKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuICAgIC8vIH07XG5cblxuICAgIGNvbnN0IHJlbmRlckJ0biA9ICh7IG5hbWUsIGNvbnRhaW5lciA9IHRvZG9Db250YWluZXIgfSkgPT4ge1xuICAgICAgICAvLyBXaWxsIGFsd2F5cyBydW4gc2luY2Ugd2lsbCB3aXBlIG1haW4gY29udGVudCBmb3IgZXZlcnkgY2xpY2tcbiAgICAgICAgaWYgKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidG4gPSBtYWtlVG9Eb0J0bihuYW1lKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ21ha2UtbW9kYWwnLCB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIC8vcHVic3ViIHRvIHJlbW92ZSBwcm9qZWN0IG9uIHRoZSBwcm9qZWN0IGxpc3RcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVByb2plY3RFbGVtZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0Lm5hbWUgPSBgJHtuYW1lfS1jb250YWluZXJgO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIiBkYXRhLW5hbWU9XCIke25hbWV9XCI+PGkgY2xhc3M9XCJmYXMgZmEtdGFza3NcIj48L2k+ICR7bmFtZX08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0LWV4aXQtYnRuXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfTtcblxuXG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0RGl2ID0gKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBtYWtlUHJvamVjdEVsZW1lbnQobmFtZSlcbiAgICAgICAgY29uc3QgZXhpdEJ0biA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3QtZXhpdC1idG4nKTtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoRWxlbWVudCA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcigncCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgZXhpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgZXhpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZXhpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFncmFwaEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4gKG9uUHJvamVjdFNpbmdsZUNsaWNrKHRhcmdldC5kYXRhc2V0Lm5hbWUpKSk7XG4gICAgICAgIC8vIHBhcmFncmFwaEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvblByb2plY3REb3VibGVDbGljaylcbiAgICAgICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgncmVtb3ZlLXByb2plY3QnLCB7IG5hbWUgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgICAgIC8vd2lsIGVkaXQgbGF0ZXJcbiAgICAgICAgcmVuZGVyQnRuKHsgbmFtZSB9KTtcbiAgICB9O1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2RlZmF1bHQtcHJvamVjdCcsIG9uUHJvamVjdFNpbmdsZUNsaWNrKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdhZGQtbmV3LXByb2plY3QnLCByZW5kZXJQcm9qZWN0RGl2KTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdyZW1vdmUtcHJvamVjdCcsIHJlbW92ZUNvbnRlbnRzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdtYWtlLW1vZGFsJywgcmVuZGVyTmV3VG9Eb01vZGFsKTtcblxufTtcblxuXG5cblxuLy9IYW5kbGVzIHRoZSBQb3B1cCBcbmNvbnN0IHByb2plY3RJbnB1dFVJID0gZnVuY3Rpb24oeyBET01idG4sIERPTWxpc3QgfSkge1xuICAgIGNvbnN0IG1haW5CdG4gPSBET01idG4ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgY29uc3QgaGlkZUJ0biA9IChidG4pID0+IHsgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH07XG4gICAgY29uc3Qgc2hvd0J0biA9IChidG4pID0+IHsgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IH07XG5cbiAgICAvLyBDaGVja3MgdGhlIGRhdGEgYXR0cmlidXRlIG9mIGFsbCBlbGVtcyBvZiAgcHJvamVjdCBsaXN0IFxuICAgIGNvbnN0IGlzUHJvamVjdE5hbWVWYWxpZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXZhaWxhYmxlID0gRE9NbGlzdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtuYW1lfVwiXWApO1xuICAgICAgICAvLyNXaWxsIEFkZCBsYXRlcjogdXNlIEFQSSB0byBjaGVjayBcbiAgICAgICAgLy9sb2NhbFN0b3JhZ2UgaWYgcHJvcGVydHkgaXMgYWxyZWFkeSB1c2VkLlxuICAgICAgICByZXR1cm4gISFpc0F2YWlsYWJsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tTdHJWYWxpZGl0eSA9IChzdHIpID0+IHtcbiAgICAgICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IGEgdmFsaWQgcHJvamVjdCBuYW1lLicpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb2plY3ROYW1lVmFsaWQoc3RyKSkge1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgTmFtZSBtdXN0IGJlIGRpZmZlcmVudCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9BZGQgYW5vdGhlciBjb25kaXRpb25pYWwgaWYgdGhlcmUgaXMgYSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gaWYobG9jYWxTdG9yYWdlKSAuLi5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lzIHZhbGlkIScsIHN0cikgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJJbnB1dFByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkID5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1uZXctcHJvamVjdFwiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1uZXctcHJvamVjdFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRpdi5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRpdi5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gY2hlY2tTdHJWYWxpZGl0eShpbnB1dFRleHQpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgc2hvd0J0bihtYWluQnRuKTtcbiAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnYWRkLW5ldy1wcm9qZWN0JywgeyBuYW1lOiBpbnB1dFRleHQgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNob3dCdG4obWFpbkJ0bik7XG4gICAgICAgIH0pO1xuICAgICAgICBET01idG4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIGlucHV0IGRpdiBpZiB1c2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgZGl2XG5cbiAgICB9XG4gICAgY29uc3Qgb25BZGRQcm9qZWN0ID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgaGlkZUJ0bih0YXJnZXQpO1xuICAgICAgICByZW5kZXJJbnB1dFByb2plY3QoKTtcbiAgICB9XG5cbiAgICBtYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25BZGRQcm9qZWN0KTtcblxuXG5cbn1cblxuXG5leHBvcnQgeyBwcm9qZWN0SW5wdXRVSSwgUHJvamVjdFVJLCBUb0RvVUkgfSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViJztcbmltcG9ydCBUb0RvIGZyb20gJy4vdG9kbydcblxuXG4vL0xvY2FsIFN0b3JhZ2UgU3R1ZmZcbmNvbnN0IHNhdmVkUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHQnKTtcbiAgICBpZiAoIWRlZmF1bHRQcm9qZWN0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0JywgSlNPTi5zdHJpbmdpZnkobmV3IFByb2plY3QoJ2RlZmF1bHQnKSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBjb25zdCBKU09OUHJvamVjdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OUHJvamVjdCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdClcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG15Q29udGFpbmVyID0ge307XG4gICAgICAgIGZvciAobGV0IFtwcm9qZWN0TmFtZSwgcHJvamVjdF0gb2YgT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKSkge1xuICAgICAgICAgICAgcHJvamVjdCA9IEpTT04ucGFyc2UocHJvamVjdCk7XG4gICAgICAgICAgICBteUNvbnRhaW5lcltwcm9qZWN0TmFtZV0gPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IFssIHRvZG9PYmpdIG9mIE9iamVjdC5lbnRyaWVzKHByb2plY3QuY29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9Ebyh0b2RvT2JqKTtcbiAgICAgICAgICAgICAgICBteUNvbnRhaW5lcltwcm9qZWN0TmFtZV0uYWRkKG5ld1RvZG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29udGFpbmVyO1xuICAgIH07XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdmZXRjaC1sb2NhbC1zdG9yYWdlJywgZ2V0UHJvamVjdHMpXG5cbiAgICByZXR1cm4geyBnZXRQcm9qZWN0cywgdXBkYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9XG59KSgpO1xuXG5cbmNvbnN0IGluaXRpYWxpemVTdG9yYWdlID0gZnVuY3Rpb24oeyBpbmJveCwgdG9kb0NvbnRhaW5lciB9KSB7XG5cbiAgICBsZXQgY29udGFpbmVyO1xuXG4gICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgY29udGFpbmVyID0gc2F2ZWRQcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBubyBsb2NhbCBmdW5jdGlvbiBjYWxsZWQgc2F2ZWRQcm9qZWN0c1xuICAgICAgICBjb250YWluZXIgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBuZXcgUHJvamVjdCgnZGVmYXVsdCcpXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyAjVE9ETyBNb3ZlIHRvIGFwcHJvcHJpYXRlIG1vZHVsZVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2RlZmF1bHQtcHJvamVjdCcsIHRhcmdldC5kYXRhc2V0Lm5hbWUpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHsgbmFtZTogcHJvamVjdE5hbWUgfSkgPT4ge1xuICAgICAgICAvLyBobW0gY2hlY2tzIGlmIHRoZXJlIGlzIHNhbWUgbmFtZVxuICAgICAgICBpZiAoY29udGFpbmVyW3Byb2plY3ROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyW3Byb2plY3ROYW1lXSA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgLy9VcGRhdGVzIHRoZSBrZXkgaW4gdGhlIGxvY2FsIFN0b3JhZ2VcbiAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgIHNhdmVkUHJvamVjdHMudXBkYXRlUHJvamVjdChjb250YWluZXJbcHJvamVjdE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHNhdmVkUHJvamVjdHMucmVtb3ZlUHJvamVjdChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBjb250YWluZXJbbmFtZV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyW25hbWVdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3VwZGF0ZS10b2RvJywgKHsgZGF0YSwgcHJvamVjdCwgdG9kb05hbWUgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhnZXRQcm9qZWN0KHByb2plY3QpLnJlbW92ZSh0b2RvTmFtZSkpO1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9EbyA9IG5ldyBUb0RvKGRhdGEpO1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gZ2V0UHJvamVjdChwcm9qZWN0KS5hZGQodXBkYXRlZFRvRG8pO1xuICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgc2F2ZWRQcm9qZWN0cy51cGRhdGVQcm9qZWN0KGdldFByb2plY3QocHJvamVjdCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVkIG9uIGxvY2FsU3RvcmFnZScpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XG4gICAgICAgIC8vIG11c3QgdXNlIGRlZmF1bHQgcHJvamVjdCAuIEJ1dCB3ZSBjYW4ndCBnZXQgcHJvamVjdCBidXR0b25cbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2RlZmF1bHQtcHJvamVjdCcsIHByb2plY3QpO1xuXG4gICAgfSk7XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdhZGQtdG9kbycsICh7IGRhdGEsIHByb2plY3QgfSkgPT4ge1xuICAgICAgICBjb25zdCBteVByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBpZiAobXlQcm9qZWN0KSB7XG4gICAgICAgICAgICAvL2Vycm9yIGhhbmRsaW5nIGZvciBibG9ja2luZyBzYW1lIG5hbWUgdG9kb1xuICAgICAgICAgICAgaWYgKG15UHJvamVjdC5nZXQoZGF0YS50aXRsZSkpIHtcbiAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnaW52YWxpZC10b2RvJywgeyB0aXRsZTogZGF0YS50aXRsZSB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IGJsb2NrZWQhJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKGRhdGEpXG4gICAgICAgICAgICBteVByb2plY3QuYWRkKG5ld1RvZG8pO1xuICAgICAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBzYXZlZFByb2plY3RzLnVwZGF0ZVByb2plY3QobXlQcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW5kZXItdG9kbycsIHsgcHJvamVjdE5hbWU6IG15UHJvamVjdC5uYW1lLCB0b2RvOiBuZXdUb2RvIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3JlbW92ZS10b2RvJywgKHsgcHJvamVjdE5hbWUsIHRvZG8gfSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZSh0b2RvLnRpdGxlKTtcbiAgICAgICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgc2F2ZWRQcm9qZWN0cy51cGRhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3QtY2xpY2snLCAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QobmFtZSk7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdC5nZXRBbGwoKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza3MpXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhbGxUYXNrcykubGVuZ3RoID09PSAwICYmIGFsbFRhc2tzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJIGhhdmUgbm8gdGFza3MhJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgWywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFsbFRhc2tzKSkge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3JlbmRlci10b2RvJywgeyBwcm9qZWN0TmFtZTogbmFtZSwgdG9kbzogdmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnZmV0Y2gtcHJvamVjdHMnLCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleV0gb2YgT2JqZWN0LmVudHJpZXMoY29udGFpbmVyKSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnKSBjb250aW51ZVxuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2FkZC1uZXctcHJvamVjdCcsIHsgbmFtZToga2V5IH0pXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnYWRkLW5ldy1wcm9qZWN0JywgYWRkUHJvamVjdCk7XG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVtb3ZlLXByb2plY3QnLCByZW1vdmVQcm9qZWN0KTtcbiAgICAvL3JlbmRlcnMgdGhlIGluYm94IHByb2plY3QgYXQgRE9NTG9hZFxuICAgIHB1YnN1Yi5wdWJsaXNoKCdkZWZhdWx0LXByb2plY3QnLCBpbmJveC5kYXRhc2V0Lm5hbWUpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdmZXRjaC1wcm9qZWN0cycpXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb2plY3RcbiAgICB9XG59O1xuXG5cbmV4cG9ydCB7IGluaXRpYWxpemVTdG9yYWdlIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgbmFtZSA9IHRoaXMubmFtZTtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250YWluZXIgPSB7fSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2tleV07XG4gICAgfVxuICAgIHJlcGxhY2Uob2JqKSB7XG4gICAgICAgIGlmICghIXRoaXMuY29udGFpbmVyW29iai50aXRsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lcltvYmoudGl0bGVdID0gb2JqO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYWRkKG9iaikge1xuICAgICAgICBpZiAoISF0aGlzLmNvbnRhaW5lcltvYmoudGl0bGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJbb2JqLnRpdGxlXSA9IG9iajtcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5jb250YWluZXJba2V5XTtcbiAgICAgICAgcmV0dXJuIC0tdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBzdGF0aWMgc3Vic2NyaWJlcnMgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBzdGF0aWMgc3Vic2NyaWJlKHRvcGljLCBjYikge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1t0b3BpY10pKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RvcGljXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdLnB1c2goY2IpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBwdWJsaXNoKHRvcGljLCBkYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW3RvcGljXSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUgfSkge1xuICAgICAgICAvL2RhdGUgbWF5IGJlIHVuZGVmaW5lZFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3NzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0SW5wdXRVSSwgUHJvamVjdFVJLCBUb0RvVUkgfSBmcm9tICcuL1VJLmpzJztcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZVN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKTtcblxuICAgIFRvRG9VSSh7IGNvbnRhaW5lcjogdG9kb0NvbnRhaW5lciB9KTtcblxuICAgIFByb2plY3RVSSh7XG4gICAgICAgIHJvb3Q6IHByb2plY3RDb250YWluZXIsXG4gICAgICAgIHRvZG9Db250YWluZXJcbiAgICB9KVxuICAgIGluaXRpYWxpemVTdG9yYWdlKHsgaW5ib3gsIHRvZG9Db250YWluZXIgfSk7XG5cbiAgICBwcm9qZWN0SW5wdXRVSSh7XG4gICAgICAgIERPTWJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtYnRuLWNvbnRhaW5lcicpLFxuICAgICAgICBET01saXN0OiBwcm9qZWN0Q29udGFpbmVyLFxuICAgIH0pO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=