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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n#inbox-container button {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    text-align: left;\n}\n\n#inbox-container button:hover {\n    background-color: #cecece;\n}\n\n\n/* #inbox-container button.active, */\n\n\n/* div.project.active */\n\n.highlight.active {\n    background-color: #cecece;\n    font-weight: bold;\n}\n\n\n/* \n.project,\n#inbox-container button {} */\n\n.project {\n    background-color: #cecece;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.close-button {\n    float: right;\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* TODO card */\n\n\n/*           <div class=\"card-partial\">\n            <p class=\"card-title\" data-todo-name=\"${title}\">${title}</p>\n            <p class=\"card-date\">${formattedDate}</p>\n          </div>\n          <div class=\"card-extended\">\n            <p class=\"card-description\">${description}</p>\n            <p class=\"card-priority\">${priority}</p>\n          </div> */\n\n.todo-card {\n    background-color: #cecece;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    /* flex: 1; */\n}\n\n.card-partial {\n    background-color: #dddddd;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-extended {\n    display: none;\n}\n\n.card-extended.active {\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,SAAS;IACT,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;;AAGA,UAAU;;AAEV;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA,oCAAoC;;;AAGpC,uBAAuB;;AAEvB;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;;AAGA;;4BAE4B;;AAE5B;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,eAAe;AACnB;;;AAGA,kBAAkB;;AAElB;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yEAAyE;AAC7E;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,oBAAoB;IACpB,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,sEAAsE;AAC1E;;;AAGA,cAAc;;;AAGd;;;;;;;kBAOkB;;AAElB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n#inbox-container button {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    text-align: left;\n}\n\n#inbox-container button:hover {\n    background-color: #cecece;\n}\n\n\n/* #inbox-container button.active, */\n\n\n/* div.project.active */\n\n.highlight.active {\n    background-color: #cecece;\n    font-weight: bold;\n}\n\n\n/* \n.project,\n#inbox-container button {} */\n\n.project {\n    background-color: #cecece;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.close-button {\n    float: right;\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* TODO card */\n\n\n/*           <div class=\"card-partial\">\n            <p class=\"card-title\" data-todo-name=\"${title}\">${title}</p>\n            <p class=\"card-date\">${formattedDate}</p>\n          </div>\n          <div class=\"card-extended\">\n            <p class=\"card-description\">${description}</p>\n            <p class=\"card-priority\">${priority}</p>\n          </div> */\n\n.todo-card {\n    background-color: #cecece;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    /* flex: 1; */\n}\n\n.card-partial {\n    background-color: #dddddd;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-extended {\n    display: none;\n}\n\n.card-extended.active {\n    display: block;\n}"],"sourceRoot":""}]);
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
    const toggleActiveStatus = (name) => {
        const allClickableBtns = Array.from(document.querySelectorAll('.highlight'));
        console.log(allClickableBtns)
        allClickableBtns.forEach((element) => {
            element.classList.remove('active');
            if (name === element.dataset.name) {
                console.log('element!')
                element.classList.add('active');
            }
        });
    };

    const onProjectSingleClick = (name) => {
        removeContents();
        toggleActiveStatus(name);
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
        element.classList.add('highlight');
        element.dataset.name = name;
        element.innerHTML = `
        <p class="project-name " data-name="${name}" ><i class="fas fa-tasks"></i> ${name}</p>
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
        paragraphElement.addEventListener('click', ({ target }) => {
            onProjectSingleClick(target.dataset.name);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDBCQUEwQixHQUFHLGNBQWMsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsNkJBQTZCLGdDQUFnQyxxQkFBcUIsR0FBRyxZQUFZLGdDQUFnQyxvQkFBb0IscUJBQXFCLEdBQUcsVUFBVSxvQkFBb0IsNEJBQTRCLHNDQUFzQyxHQUFHLGNBQWMsY0FBYyxHQUFHLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixvQkFBb0IsK0JBQStCLGdCQUFnQixHQUFHLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUNBQXVDLG9CQUFvQiw2QkFBNkIsR0FBRyx3Q0FBd0Msb0JBQW9CLHlCQUF5QixtQkFBbUIsMEJBQTBCLG9DQUFvQyxzQkFBc0IsdUJBQXVCLEdBQUcsbUNBQW1DLGdDQUFnQyxHQUFHLGdHQUFnRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsaURBQWlELGdCQUFnQixnQ0FBZ0Msb0JBQW9CLHFDQUFxQyxHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsOEJBQThCLHFCQUFxQixtQkFBbUIsb0NBQW9DLHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLDZDQUE2QyxpQkFBaUIseUJBQXlCLDRCQUE0QixnRkFBZ0YsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1Qyw4QkFBOEIsMkJBQTJCLGlCQUFpQiw0QkFBNEIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0NBQWtDLEdBQUcseUJBQXlCLGlDQUFpQyxHQUFHLGlCQUFpQixpQkFBaUIsMEJBQTBCLDRCQUE0Qiw2RUFBNkUsR0FBRyw2SEFBNkgsTUFBTSxLQUFLLE1BQU0sMkNBQTJDLGNBQWMsNkdBQTZHLFlBQVksK0NBQStDLFNBQVMseUNBQXlDLGdDQUFnQyxtQkFBbUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSyxtQkFBbUIsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLE9BQU8saUZBQWlGLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLGNBQWMsY0FBYyxNQUFNLFlBQVksYUFBYSxRQUFRLE1BQU0sUUFBUSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsUUFBUSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsWUFBWSxXQUFXLFFBQVEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLDZCQUE2QiwwQkFBMEIsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLDZCQUE2QixnQ0FBZ0MscUJBQXFCLEdBQUcsWUFBWSxnQ0FBZ0Msb0JBQW9CLHFCQUFxQixHQUFHLFVBQVUsb0JBQW9CLDRCQUE0QixzQ0FBc0MsR0FBRyxjQUFjLGNBQWMsR0FBRyxtQkFBbUIsdUJBQXVCLHVCQUF1QixnQ0FBZ0Msb0JBQW9CLDZCQUE2QixzQkFBc0IsMkJBQTJCLGdCQUFnQixvQkFBb0Isb0JBQW9CLCtCQUErQixnQkFBZ0IsR0FBRyw2QkFBNkIscUJBQXFCLGlCQUFpQixHQUFHLHVDQUF1QyxvQkFBb0IsNkJBQTZCLEdBQUcsd0NBQXdDLG9CQUFvQix5QkFBeUIsbUJBQW1CLDBCQUEwQixvQ0FBb0Msc0JBQXNCLHVCQUF1QixHQUFHLG1DQUFtQyxnQ0FBZ0MsR0FBRyxnR0FBZ0csZ0NBQWdDLHdCQUF3QixHQUFHLGlEQUFpRCxnQkFBZ0IsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLDhCQUE4QixxQkFBcUIsbUJBQW1CLG9DQUFvQyxzQkFBc0Isc0JBQXNCLEdBQUcscUNBQXFDLHNCQUFzQixjQUFjLGFBQWEsa0JBQWtCLG1CQUFtQiw2Q0FBNkMsaUJBQWlCLHlCQUF5Qiw0QkFBNEIsZ0ZBQWdGLEdBQUcsb0JBQW9CLHlCQUF5QixlQUFlLGdCQUFnQix1Q0FBdUMsOEJBQThCLDJCQUEyQixpQkFBaUIsNEJBQTRCLEdBQUcsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLHlCQUF5QixzQkFBc0IsNkJBQTZCLGtDQUFrQyxHQUFHLHlCQUF5QixpQ0FBaUMsR0FBRyxpQkFBaUIsaUJBQWlCLDBCQUEwQiw0QkFBNEIsNkVBQTZFLEdBQUcsNkhBQTZILE1BQU0sS0FBSyxNQUFNLDJDQUEyQyxjQUFjLDZHQUE2RyxZQUFZLCtDQUErQyxTQUFTLHlDQUF5QyxnQ0FBZ0MsbUJBQW1CLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEtBQUssbUJBQW1CLGdDQUFnQyxvQkFBb0IscUNBQXFDLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLDJCQUEyQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDaHZRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjhCO0FBQzlCOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU8sYUFBYSx3QkFBd0I7O0FBRXJFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLLElBQUksV0FBVztBQUN6RCw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDhCQUE4QixpQkFBaUI7QUFDL0Msb0NBQW9DLEtBQUs7QUFDekM7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQyxRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLDJCQUEyQjtBQUM1RCx1Q0FBdUMsS0FBSztBQUM1QztBQUNBLGdDQUFnQyxlQUFlO0FBQy9DLFFBQVEsdURBQWMsa0JBQWtCLHlCQUF5QjtBQUNqRSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG1CQUFtQjtBQUM3QyxnQkFBZ0IscUNBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxNQUFNLElBQUksTUFBTTtBQUNwRSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsWUFBWSx1REFBYyxrQkFBa0IsbUJBQW1CO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQW9EOztBQUV4RixTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEMsa0JBQWtCLE1BQU07O0FBRXhCOztBQUVBLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCO0FBQ3BCOzs7Ozs7O0FBT0EscUJBQXFCLHFCQUFxQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQixzREFBc0QsT0FBTztBQUM3RCxRQUFRLHVEQUFjLG9CQUFvQixNQUFNO0FBQ2hEOzs7QUFHQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7OztBQUdBLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFjO0FBQzFCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsS0FBSyxrQ0FBa0MsS0FBSztBQUMxRjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGdDQUFnQyxNQUFNO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHNEQUFzRCxRQUFRO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWMscUJBQXFCLE1BQU07QUFDckQsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQixJQUFJLHlEQUFnQjtBQUNwQixJQUFJLHlEQUFnQjtBQUNwQixJQUFJLHlEQUFnQjs7QUFFcEI7Ozs7O0FBS0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0EsK0JBQStCO0FBQy9CLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBLGlFQUFpRSxLQUFLO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFjLHNCQUFzQixpQkFBaUI7QUFDckU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0V2dDO0FBQ0Y7QUFDTDs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdEQUFPO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0RBQU87O0FBRWxEO0FBQ0Esb0NBQW9DLDZDQUFJO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQWdCOztBQUVwQixhQUFhO0FBQ2IsQ0FBQzs7O0FBR0QscUNBQXFDLHNCQUFzQjs7QUFFM0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0MsUUFBUSx1REFBYztBQUN0QixLQUFLOzs7QUFHTCwwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdEQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHlEQUFnQixtQkFBbUIseUJBQXlCO0FBQ2hFO0FBQ0EsZ0NBQWdDLDZDQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYzs7QUFFdEIsS0FBSzs7QUFFTCxJQUFJLHlEQUFnQixnQkFBZ0IsZUFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBYyxtQkFBbUIsbUJBQW1CO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsNkNBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFjLGtCQUFrQiw0Q0FBNEM7QUFDeEY7QUFDQSxLQUFLOzs7QUFHTCxJQUFJLHlEQUFnQixtQkFBbUIsbUJBQW1CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsSUFBSSx5REFBZ0IscUJBQXFCLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWMsa0JBQWtCLGdDQUFnQztBQUM1RTtBQUNBLEtBQUs7O0FBRUwsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQWMsc0JBQXNCLFdBQVc7QUFDM0Q7QUFDQSxLQUFLOzs7QUFHTCxJQUFJLHlEQUFnQjtBQUNwQixJQUFJLHlEQUFnQjtBQUNwQjtBQUNBLElBQUksdURBQWM7QUFDbEIsSUFBSSx1REFBYzs7O0FBR2xCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLQSxpRUFBZTtBQUNmO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JDQSxpRUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekI4Qjs7QUFFOUIsaUVBQWU7QUFDZixrQkFBa0Isb0NBQW9DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzZCOztBQUVUOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDhDQUFNLEdBQUcsMEJBQTBCOztBQUV2QyxJQUFJLGlEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGlFQUFpQixHQUFHLHNCQUFzQjs7QUFFOUMsSUFBSSxzREFBYztBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgY29sb3I6ICNlZWVlZWU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IG5vd3JhcCByb3c7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxufVxcblxcbm1haW4+ZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxubWFpbiBkaXYjbWVudSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHhcXG59XFxuXFxubWFpbiBkaXYjbWFpbi1jb250ZW50IHtcXG4gICAgZmxleDogMi41O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxubWFpbiBkaXYjbWFpbi1jb250ZW50Pioge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuXFxuLyogSW5ib3ggKi9cXG5cXG4jaW5ib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2luYm94LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbn1cXG5cXG5cXG4vKiAjaW5ib3gtY29udGFpbmVyIGJ1dHRvbi5hY3RpdmUsICovXFxuXFxuXFxuLyogZGl2LnByb2plY3QuYWN0aXZlICovXFxuXFxuLmhpZ2hsaWdodC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuLyogXFxuLnByb2plY3QsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24ge30gKi9cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QgcCxcXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1leGl0LWJ0bi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzOCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5cXG4vKiBUT0RPIGNhcmQgKi9cXG5cXG5cXG4vKiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1wYXJ0aWFsXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCIgZGF0YS10b2RvLW5hbWU9XFxcIiR7dGl0bGV9XFxcIj4ke3RpdGxlfTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1kYXRlXFxcIj4ke2Zvcm1hdHRlZERhdGV9PC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1leHRlbmRlZFxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtZGVzY3JpcHRpb25cXFwiPiR7ZGVzY3JpcHRpb259PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXByaW9yaXR5XFxcIj4ke3ByaW9yaXR5fTwvcD5cXG4gICAgICAgICAgPC9kaXY+ICovXFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZmxleDogMTsgKi9cXG59XFxuXFxuLmNhcmQtcGFydGlhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhcmQtZXh0ZW5kZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FyZC1leHRlbmRlZC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7OztBQUdBLFVBQVU7O0FBRVY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBR0Esb0NBQW9DOzs7QUFHcEMsdUJBQXVCOztBQUV2QjtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7OztBQUdBOzs0QkFFNEI7O0FBRTVCO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlFQUF5RTtBQUM3RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixzRUFBc0U7QUFDMUU7OztBQUdBLGNBQWM7OztBQUdkOzs7Ozs7O2tCQU9rQjs7QUFFbEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBjb2xvcjogI2VlZWVlZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogbm93cmFwIHJvdztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG59XFxuXFxubWFpbj5kaXYge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5tYWluIGRpdiNtZW51IHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweFxcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQ+KiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5cXG4vKiBJbmJveCAqL1xcblxcbiNpbmJveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxufVxcblxcblxcbi8qICNpbmJveC1jb250YWluZXIgYnV0dG9uLmFjdGl2ZSwgKi9cXG5cXG5cXG4vKiBkaXYucHJvamVjdC5hY3RpdmUgKi9cXG5cXG4uaGlnaGxpZ2h0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4vKiBcXG4ucHJvamVjdCxcXG4jaW5ib3gtY29udGFpbmVyIGJ1dHRvbiB7fSAqL1xcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdCBwLFxcbiNpbmJveC1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1leGl0LWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWV4aXQtYnRuLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcblxcbi8qIFRPRE8gY2FyZCAqL1xcblxcblxcbi8qICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhcnRpYWxcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIiBkYXRhLXRvZG8tbmFtZT1cXFwiJHt0aXRsZX1cXFwiPiR7dGl0bGV9PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWRhdGVcXFwiPiR7Zm9ybWF0dGVkRGF0ZX08L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWV4dGVuZGVkXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1kZXNjcmlwdGlvblxcXCI+JHtkZXNjcmlwdGlvbn08L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtcHJpb3JpdHlcXFwiPiR7cHJpb3JpdHl9PC9wPlxcbiAgICAgICAgICA8L2Rpdj4gKi9cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBmbGV4OiAxOyAqL1xcbn1cXG5cXG4uY2FyZC1wYXJ0aWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2FyZC1leHRlbmRlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkLWV4dGVuZGVkLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yic7XG4vL1dpbGwgYmUgdXNpbmcgbG9jYWxTdG9yYWdlIHRvIGNoZWNrIGlmIHByb2plY3RuYW1lIGlzIGF2YWlibGUuXG5cblxuLy9GdW5jdGlvbiB0aGF0IGhhbmRsZXMgYWxsIGV2ZW50IGxpc3RlbmVycyBvZiB0aGUgbW9kYWxzXG5jb25zdCBldmVudE1hbmFnZXJNb2RhbCA9IChtb2RhbCwgcHVic3ViRnVuYykgPT4ge1xuXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdoMycpLmRhdGFzZXQucHJvamVjdE5hbWU7XG4gICAgLy8gZ2V0cyBhbGwgcmVxdWlyZWQgaW5wdXRzICh0aXRsZSxwcmlvcml0eSxkZXNjcmlwdGlvbilcbiAgICBjb25zdCBmb3JtSW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyZXF1aXJlZCcpKTtcblxuXG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tb2RhbFwiKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2luZG93T25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvL1dpbGwgdXRpbGl6ZSB0aGlzIGxhdGVyIG9uIHRoZSBjbG9zaW5nIHRoZSBhZGQgcHJvamVjdFxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZE5vdFJlcXVpcmVkVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICAvLyBvcHRpb25hbCBpZiBkYXRlIGlzIGFsc28gaW5wdXQgbWFrZSBpdCBpbnRvIGFub3RoZXIgZnVuY3Rpb25cbiAgICAgICAgaWYgKGZvcm0ucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSkge1xuICAgICAgICAgICAgZm9ybUlucHV0cy5wdXNoKGZvcm0ucXVlcnlTZWxlY3RvcignI2RhdGUnKSlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IGNoZWNrRm9ybVZhbGlkaXR5ID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGZvcm1JbnB1dHMpIHtcbiAgICAgICAgICAgIGlmICghaW5wdXQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gV2lsbCBjaGFuZ2UgbGF0ZXIgaW50byB3YXJuaW5nIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IGFsbCBmaWVsZHMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRJbnB1dFZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZvcm1JbnB1dHMucmVkdWNlKChvYmosIGlucHV0KSA9PiB7XG4gICAgICAgICAgICBvYmpbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH0sIHt9KVxuICAgIH07XG4gICAgLy9zaG93IG1vZGFsIGtpbmRhIHJlZHVuZGFudFxuICAgIHNob3dNb2RhbCgpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVNb2RhbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3aW5kb3dPbkNsaWNrKTtcblxuICAgIC8vZm9ybSBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vUmVtb3ZlcyB0aGUgZGVmYXVsdCByZWZlcmVzaCBvbiB0aGUgZm9ybSB0YWdcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGROb3RSZXF1aXJlZFZhbHVlcygpO1xuICAgICAgICBpZiAoY2hlY2tGb3JtVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBnZXRJbnB1dFZhbHVlcygpO1xuICAgICAgICAgICAgLy8gV2lsbCBhZGQgdG9kbyB0byBwcm9qZWN0IGNvbnRhaW5lciAhXG4gICAgICAgICAgICBwdWJzdWJGdW5jKHsgZGF0YTogey4uLmZvcm1EYXRhIH0sIHByb2plY3Q6IHByb2plY3ROYW1lIH0pO1xuXG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICB9KVxufTtcblxuXG5jb25zdCBtYWtlVG9Eb01vZGFsU3RydWN0dXJlID0gKG5hbWUsIG1vZGFsVGl0bGUpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMyBkYXRhLXByb2plY3QtbmFtZT1cIiR7bmFtZX1cIj4ke21vZGFsVGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJ0b2RvLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgc2VsZWN0ZWQ+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiID5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiID5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJ1dHRvbiBmb3JtPVwidG9kby1mb3JtXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiZm9ybS1zdWJtaXQtYnRuXCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIG1vZGFsO1xufTtcblxuXG4vL1RvRG8gTW9kYWwgTW9kdWxlXG5jb25zdCByZW5kZXJOZXdUb0RvTW9kYWwgPSAoeyBuYW1lLCBjb250YWluZXIgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBgTmV3IFRhc2sgKCR7bmFtZX0pYDtcbiAgICBjb25zdCBtb2RhbCA9IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUobmFtZSwgbW9kYWxUaXRsZSk7XG4gICAgZXZlbnRNYW5hZ2VyTW9kYWwobW9kYWwsICh7IGRhdGEsIHByb2plY3QgfSkgPT4ge1xuICAgICAgICBwdWJzdWIucHVibGlzaCgnYWRkLXRvZG8nLCB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG59O1xuXG4vL1RvRG8gTW9kYWwgTW9kdWxlXG5jb25zdCByZW5kZXJVcGRhdGVUb0RvTW9kYWwgPSAoeyBuYW1lLCBjb250YWluZXIsIHRvZG9OYW1lIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbFRpdGxlID0gYFVwZGF0ZSBUYXNrICgke25hbWV9KWA7XG4gICAgY29uc3QgbW9kYWwgPSBtYWtlVG9Eb01vZGFsU3RydWN0dXJlKG5hbWUsIG1vZGFsVGl0bGUpO1xuICAgIGV2ZW50TWFuYWdlck1vZGFsKG1vZGFsLCAoeyBkYXRhLCBwcm9qZWN0IH0pID0+IHtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3VwZGF0ZS10b2RvJywgeyBkYXRhLCBwcm9qZWN0LCB0b2RvTmFtZSB9KTtcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xufTtcblxuY29uc3QgVG9Eb1VJID0gKHsgY29udGFpbmVyIH0pID0+IHtcbiAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChkYXRlKSA/IGRhdGUgOiAnbm8gZHVlIGRhdGUnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRvZG8gPSAoeyBwcm9qZWN0TmFtZSwgdG9kbyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSB9ID0gdG9kbztcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnKTtcbiAgICAgICAgY2FyZC5kYXRhc2V0Lmluc2lkZVByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGFydGlhbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRpdGxlXCIgZGF0YS10b2RvLW5hbWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtdG9kby1idG5cIj5YPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGlmeS10b2RvLWJ0blwiPmVkaXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZXh0ZW5kZWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXByaW9yaXR5XCI+JHtwcmlvcml0eX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgY29uc3QgcGFydGlhbCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtcGFydGlhbCcpO1xuICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1leHRlbmRlZCcpO1xuICAgICAgICBwYXJ0aWFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24ucmVtb3ZlLXRvZG8tYnRuJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW1vdmUtdG9kbycsIHsgcHJvamVjdE5hbWUsIHRvZG8gfSk7XG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvcignYnV0dG9uLm1vZGlmeS10b2RvLWJ0bicpO1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVXBkYXRlVG9Eb01vZGFsKHsgbmFtZTogcHJvamVjdE5hbWUsIGNvbnRhaW5lciwgdG9kb05hbWU6IHRvZG8udGl0bGUgfSk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJJbnZhbGlkVG9kbyA9ICh7IHRpdGxlIH0pID0+IHtcbiAgICAgICAgYWxlcnQoYFwiJHt0aXRsZX1cIiBpcyBhbHJlYWR5IGJlZW4gdXNlZCEgdXNlIGRpZmZlcmVudCB0aXRsZSFgKVxuXG4gICAgfTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3JlbmRlci10b2RvJywgcmVuZGVyVG9kbyk7XG4gICAgcHVic3ViLnN1YnNjcmliZSgnaW52YWxpZC10b2RvJywgcmVuZGVySW52YWxpZFRvZG8pO1xufTtcblxuXG5cblxuXG5cbmNvbnN0IFByb2plY3RVSSA9ICh7IHJvb3QsIHRvZG9Db250YWluZXIgfSkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRvRG9CdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIigrKSBBZGQgVGFza1wiO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJyk7XG4gICAgICAgIHJldHVybiBhZGRCdG47XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNvbnRlbnRzID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IGBgO1xuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlQWN0aXZlU3RhdHVzID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ2xpY2thYmxlQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsQ2xpY2thYmxlQnRucylcbiAgICAgICAgYWxsQ2xpY2thYmxlQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IGVsZW1lbnQuZGF0YXNldC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQhJylcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Qcm9qZWN0U2luZ2xlQ2xpY2sgPSAobmFtZSkgPT4ge1xuICAgICAgICByZW1vdmVDb250ZW50cygpO1xuICAgICAgICB0b2dnbGVBY3RpdmVTdGF0dXMobmFtZSk7XG4gICAgICAgIHJlbmRlckJ0bih7IG5hbWUgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIHdpbGwgbm93IGZldGNoIHRvZG9zIGZyb20gJHt0YXJnZXR9YCk7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0LWNsaWNrJywgeyBuYW1lIH0pO1xuICAgIH07XG5cblxuICAgIC8vIGNvbnN0IG9uUHJvamVjdERvdWJsZUNsaWNrID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0kgYW0gZG91YmxlIGNsaWNrJyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICAvLyB9O1xuXG5cbiAgICBjb25zdCByZW5kZXJCdG4gPSAoeyBuYW1lLCBjb250YWluZXIgPSB0b2RvQ29udGFpbmVyIH0pID0+IHtcbiAgICAgICAgLy8gV2lsbCBhbHdheXMgcnVuIHNpbmNlIHdpbGwgd2lwZSBtYWluIGNvbnRlbnQgZm9yIGV2ZXJ5IGNsaWNrXG4gICAgICAgIGlmIChjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnRuID0gbWFrZVRvRG9CdG4obmFtZSk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdtYWtlLW1vZGFsJywge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAvL3B1YnN1YiB0byByZW1vdmUgcHJvamVjdCBvbiB0aGUgcHJvamVjdCBsaXN0XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VQcm9qZWN0RWxlbWVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lIFwiIGRhdGEtbmFtZT1cIiR7bmFtZX1cIiA+PGkgY2xhc3M9XCJmYXMgZmEtdGFza3NcIj48L2k+ICR7bmFtZX08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0LWV4aXQtYnRuXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfTtcblxuXG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0RGl2ID0gKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBtYWtlUHJvamVjdEVsZW1lbnQobmFtZSlcbiAgICAgICAgY29uc3QgZXhpdEJ0biA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3QtZXhpdC1idG4nKTtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoRWxlbWVudCA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcigncCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgZXhpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgZXhpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZXhpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFncmFwaEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgb25Qcm9qZWN0U2luZ2xlQ2xpY2sodGFyZ2V0LmRhdGFzZXQubmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwYXJhZ3JhcGhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25Qcm9qZWN0RG91YmxlQ2xpY2spXG4gICAgICAgIGV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3JlbW92ZS1wcm9qZWN0JywgeyBuYW1lIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICAvL3dpbCBlZGl0IGxhdGVyXG4gICAgICAgIHJlbmRlckJ0bih7IG5hbWUgfSk7XG4gICAgfTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdkZWZhdWx0LXByb2plY3QnLCBvblByb2plY3RTaW5nbGVDbGljayk7XG4gICAgcHVic3ViLnN1YnNjcmliZSgnYWRkLW5ldy1wcm9qZWN0JywgcmVuZGVyUHJvamVjdERpdik7XG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVtb3ZlLXByb2plY3QnLCByZW1vdmVDb250ZW50cyk7XG4gICAgcHVic3ViLnN1YnNjcmliZSgnbWFrZS1tb2RhbCcsIHJlbmRlck5ld1RvRG9Nb2RhbCk7XG5cbn07XG5cblxuXG5cbi8vSGFuZGxlcyB0aGUgUG9wdXAgXG5jb25zdCBwcm9qZWN0SW5wdXRVSSA9IGZ1bmN0aW9uKHsgRE9NYnRuLCBET01saXN0IH0pIHtcbiAgICBjb25zdCBtYWluQnRuID0gRE9NYnRuLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGhpZGVCdG4gPSAoYnRuKSA9PiB7IGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9O1xuICAgIGNvbnN0IHNob3dCdG4gPSAoYnRuKSA9PiB7IGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyB9O1xuXG4gICAgLy8gQ2hlY2tzIHRoZSBkYXRhIGF0dHJpYnV0ZSBvZiBhbGwgZWxlbXMgb2YgIHByb2plY3QgbGlzdCBcbiAgICBjb25zdCBpc1Byb2plY3ROYW1lVmFsaWQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0F2YWlsYWJsZSA9IERPTWxpc3QucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7bmFtZX1cIl1gKTtcbiAgICAgICAgLy8jV2lsbCBBZGQgbGF0ZXI6IHVzZSBBUEkgdG8gY2hlY2sgXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlIGlmIHByb3BlcnR5IGlzIGFscmVhZHkgdXNlZC5cbiAgICAgICAgcmV0dXJuICEhaXNBdmFpbGFibGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrU3RyVmFsaWRpdHkgPSAoc3RyKSA9PiB7XG4gICAgICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBhIHZhbGlkIHByb2plY3QgbmFtZS4nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9qZWN0TmFtZVZhbGlkKHN0cikpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IE5hbWUgbXVzdCBiZSBkaWZmZXJlbnQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vQWRkIGFub3RoZXIgY29uZGl0aW9uaWFsIGlmIHRoZXJlIGlzIGEgbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGlmKGxvY2FsU3RvcmFnZSkgLi4uXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJcyB2YWxpZCEnLCBzdHIpICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVySW5wdXRQcm9qZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCA+XG4gICAgICAgIDxidXR0b24gaWQ9XCJhZGQtbmV3LXByb2plY3RcIiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtbmV3LXByb2plY3RcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBhZGRCdG4gPSBkaXYucXVlcnlTZWxlY3RvcignI2FkZC1uZXctcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkaXYucXVlcnlTZWxlY3RvcignI2NhbmNlbC1uZXctcHJvamVjdCcpO1xuXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IGNoZWNrU3RyVmFsaWRpdHkoaW5wdXRUZXh0KTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNob3dCdG4obWFpbkJ0bik7XG4gICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2FkZC1uZXctcHJvamVjdCcsIHsgbmFtZTogaW5wdXRUZXh0IH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICBzaG93QnRuKG1haW5CdG4pO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NYnRuLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBjbG9zZSBpbnB1dCBkaXYgaWYgdXNlciBjbGlja2VkIG91dHNpZGUgdGhlIGRpdlxuXG4gICAgfVxuICAgIGNvbnN0IG9uQWRkUHJvamVjdCA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGhpZGVCdG4odGFyZ2V0KTtcbiAgICAgICAgcmVuZGVySW5wdXRQcm9qZWN0KCk7XG4gICAgfVxuXG4gICAgbWFpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkUHJvamVjdCk7XG5cblxuXG59XG5cblxuZXhwb3J0IHsgcHJvamVjdElucHV0VUksIFByb2plY3RVSSwgVG9Eb1VJIH0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQgVG9EbyBmcm9tICcuL3RvZG8nXG5cblxuLy9Mb2NhbCBTdG9yYWdlIFN0dWZmXG5jb25zdCBzYXZlZFByb2plY3RzID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0Jyk7XG4gICAgaWYgKCFkZWZhdWx0UHJvamVjdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdCcsIEpTT04uc3RyaW5naWZ5KG5ldyBQcm9qZWN0KCdkZWZhdWx0JykpKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgSlNPTlByb2plY3QgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTlByb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QpXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBteUNvbnRhaW5lciA9IHt9O1xuICAgICAgICBmb3IgKGxldCBbcHJvamVjdE5hbWUsIHByb2plY3RdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHByb2plY3QgPSBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgICAgICAgICAgbXlDb250YWluZXJbcHJvamVjdE5hbWVdID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBbLCB0b2RvT2JqXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0LmNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odG9kb09iaik7XG4gICAgICAgICAgICAgICAgbXlDb250YWluZXJbcHJvamVjdE5hbWVdLmFkZChuZXdUb2RvKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBteUNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnZmV0Y2gtbG9jYWwtc3RvcmFnZScsIGdldFByb2plY3RzKVxuXG4gICAgcmV0dXJuIHsgZ2V0UHJvamVjdHMsIHVwZGF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfVxufSkoKTtcblxuXG5jb25zdCBpbml0aWFsaXplU3RvcmFnZSA9IGZ1bmN0aW9uKHsgaW5ib3gsIHRvZG9Db250YWluZXIgfSkge1xuXG4gICAgbGV0IGNvbnRhaW5lcjtcblxuICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IHNhdmVkUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaWYgdGhlcmUgaXMgbm8gbG9jYWwgZnVuY3Rpb24gY2FsbGVkIHNhdmVkUHJvamVjdHNcbiAgICAgICAgY29udGFpbmVyID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogbmV3IFByb2plY3QoJ2RlZmF1bHQnKVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gI1RPRE8gTW92ZSB0byBhcHByb3ByaWF0ZSBtb2R1bGVcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdkZWZhdWx0LXByb2plY3QnLCB0YXJnZXQuZGF0YXNldC5uYW1lKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh7IG5hbWU6IHByb2plY3ROYW1lIH0pID0+IHtcbiAgICAgICAgLy8gaG1tIGNoZWNrcyBpZiB0aGVyZSBpcyBzYW1lIG5hbWVcbiAgICAgICAgaWYgKGNvbnRhaW5lcltwcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lcltwcm9qZWN0TmFtZV0gPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vVXBkYXRlcyB0aGUga2V5IGluIHRoZSBsb2NhbCBTdG9yYWdlXG4gICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICBzYXZlZFByb2plY3RzLnVwZGF0ZVByb2plY3QoY29udGFpbmVyW3Byb2plY3ROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBzYXZlZFByb2plY3RzLnJlbW92ZVByb2plY3QobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgY29udGFpbmVyW25hbWVdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcltuYW1lXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCd1cGRhdGUtdG9kbycsICh7IGRhdGEsIHByb2plY3QsIHRvZG9OYW1lIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0UHJvamVjdChwcm9qZWN0KS5yZW1vdmUodG9kb05hbWUpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvRG8gPSBuZXcgVG9EbyhkYXRhKTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGdldFByb2plY3QocHJvamVjdCkuYWRkKHVwZGF0ZWRUb0RvKTtcbiAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgIHNhdmVkUHJvamVjdHMudXBkYXRlUHJvamVjdChnZXRQcm9qZWN0KHByb2plY3QpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlZCBvbiBsb2NhbFN0b3JhZ2UnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgICAvLyBtdXN0IHVzZSBkZWZhdWx0IHByb2plY3QgLiBCdXQgd2UgY2FuJ3QgZ2V0IHByb2plY3QgYnV0dG9uXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdkZWZhdWx0LXByb2plY3QnLCBwcm9qZWN0KTtcblxuICAgIH0pO1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnYWRkLXRvZG8nLCAoeyBkYXRhLCBwcm9qZWN0IH0pID0+IHtcbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgaWYgKG15UHJvamVjdCkge1xuICAgICAgICAgICAgLy9lcnJvciBoYW5kbGluZyBmb3IgYmxvY2tpbmcgc2FtZSBuYW1lIHRvZG9cbiAgICAgICAgICAgIGlmIChteVByb2plY3QuZ2V0KGRhdGEudGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2ludmFsaWQtdG9kbycsIHsgdGl0bGU6IGRhdGEudGl0bGUgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBibG9ja2VkIScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhkYXRhKVxuICAgICAgICAgICAgbXlQcm9qZWN0LmFkZChuZXdUb2RvKTtcbiAgICAgICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgc2F2ZWRQcm9qZWN0cy51cGRhdGVQcm9qZWN0KG15UHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgncmVuZGVyLXRvZG8nLCB7IHByb2plY3ROYW1lOiBteVByb2plY3QubmFtZSwgdG9kbzogbmV3VG9kbyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdyZW1vdmUtdG9kbycsICh7IHByb2plY3ROYW1lLCB0b2RvIH0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmUodG9kby50aXRsZSk7XG4gICAgICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHNhdmVkUHJvamVjdHMudXBkYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0LWNsaWNrJywgKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KG5hbWUpO1xuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0QWxsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYWxsVGFza3MpLmxlbmd0aCA9PT0gMCAmJiBhbGxUYXNrcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSSBoYXZlIG5vIHRhc2tzIScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhbGxUYXNrcykpIHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW5kZXItdG9kbycsIHsgcHJvamVjdE5hbWU6IG5hbWUsIHRvZG86IHZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2ZldGNoLXByb2plY3RzJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXldIG9mIE9iamVjdC5lbnRyaWVzKGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JykgY29udGludWVcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGQtbmV3LXByb2plY3QnLCB7IG5hbWU6IGtleSB9KVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2FkZC1uZXctcHJvamVjdCcsIGFkZFByb2plY3QpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3JlbW92ZS1wcm9qZWN0JywgcmVtb3ZlUHJvamVjdCk7XG4gICAgLy9yZW5kZXJzIHRoZSBpbmJveCBwcm9qZWN0IGF0IERPTUxvYWRcbiAgICBwdWJzdWIucHVibGlzaCgnZGVmYXVsdC1wcm9qZWN0JywgaW5ib3guZGF0YXNldC5uYW1lKTtcbiAgICBwdWJzdWIucHVibGlzaCgnZmV0Y2gtcHJvamVjdHMnKVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0XG4gICAgfVxufTtcblxuXG5leHBvcnQgeyBpbml0aWFsaXplU3RvcmFnZSB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29udGFpbmVyID0ge30pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltrZXldO1xuICAgIH1cbiAgICByZXBsYWNlKG9iaikge1xuICAgICAgICBpZiAoISF0aGlzLmNvbnRhaW5lcltvYmoudGl0bGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJbb2JqLnRpdGxlXSA9IG9iajtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFkZChvYmopIHtcbiAgICAgICAgaWYgKCEhdGhpcy5jb250YWluZXJbb2JqLnRpdGxlXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyW29iai50aXRsZV0gPSBvYmo7XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGFpbmVyW2tleV07XG4gICAgICAgIHJldHVybiAtLXRoaXMubGVuZ3RoO1xuICAgIH1cbiAgICBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgc3RhdGljIHN1YnNjcmliZXJzID0ge307XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG4gICAgc3RhdGljIHN1YnNjcmliZSh0b3BpYywgY2IpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5wdXNoKGNiKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5sZW5ndGggLSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcHVibGlzaCh0b3BpYywgZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1t0b3BpY10pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlIH0pIHtcbiAgICAgICAgLy9kYXRlIG1heSBiZSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdElucHV0VUksIFByb2plY3RVSSwgVG9Eb1VJIH0gZnJvbSAnLi9VSS5qcyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemVTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG4oKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQnKTtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XG5cbiAgICBUb0RvVUkoeyBjb250YWluZXI6IHRvZG9Db250YWluZXIgfSk7XG5cbiAgICBQcm9qZWN0VUkoe1xuICAgICAgICByb290OiBwcm9qZWN0Q29udGFpbmVyLFxuICAgICAgICB0b2RvQ29udGFpbmVyXG4gICAgfSlcbiAgICBpbml0aWFsaXplU3RvcmFnZSh7IGluYm94LCB0b2RvQ29udGFpbmVyIH0pO1xuXG4gICAgcHJvamVjdElucHV0VUkoe1xuICAgICAgICBET01idG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ0bi1jb250YWluZXInKSxcbiAgICAgICAgRE9NbGlzdDogcHJvamVjdENvbnRhaW5lcixcbiAgICB9KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9