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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nh1 {\n    font-weight: 200;\n}\n\nh2 {\n    font-weight: 400;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\ntextarea {\n    resize: vertical;\n    min-width: 30px;\n    width: 50%;\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column-reverse nowrap;\n    align-items: flex-end;\n    justify-content: flex-end;\n    gap: 20px;\n    min-width: 400px;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Add Modal Btn */\n\n#main-content .add-todo-btn {\n    width: 100px;\n    padding: 1em .5em;\n    background: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n.highlight,\n#add-project {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    font-weight: 400;\n    text-align: left;\n}\n\n.highlight:hover,\n#add-project:hover,\n#main-content .add-todo-btn:hover,\n.aux-container button:hover {\n    background-color: #a1a1a183;\n}\n\n\n/* New Project Prompt */\n\n#new-project-prompt {\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n}\n\n#new-project-prompt div {\n    display: flex;\n}\n\n#new-project-prompt input {\n    height: 1.3em;\n    font-size: 1.3em;\n    border-radius: 5px;\n}\n\n#new-project-prompt button {\n    width: 50%;\n    height: 30px;\n    border-radius: 5px;\n}\n\n#add-new-project {\n    background-color: #44ec2281;\n}\n\n#cancel-new-project {\n    background-color: #e72d2d8e;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button,\n#add-project:hover,\n#main-content .add-todo-btn:hover {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 44%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.modal-header span {\n    border: none;\n    background-color: transparent;\n    width: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 10px;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n\n/* TODO Form */\n\n#todo-form {\n    display: flex;\n    flex-direction: column;\n}\n\n#todo-form .input-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 1s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* Sumbit Form Button */\n\n#form-submit-btn {\n    margin: 30px auto;\n    display: block;\n    padding: 1em 2em;\n    background-color: #333;\n    color: #c2bebe;\n    font-weight: 700;\n    border-radius: 10px;\n}\n\n\n/* TODO card */\n\n.todo-card {\n    background-color: #333;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 11px;\n    padding: 5px;\n}\n\n.todo-card button {\n    color: #ddd;\n}\n\n.todo-card button:active {\n    line-height: 4;\n    transition-duration: calc(1);\n}\n\n.card-partial {\n    background-color: transparent;\n    color: #ddd;\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n}\n\n.card-partial .aux-container {\n    display: flex;\n    gap: 10px;\n}\n\n.aux-container button {\n    cursor: pointer;\n    border-radius: 10px;\n    border: none;\n    background-color: transparent;\n    padding: 0 5px;\n}\n\n.card-extended {\n    display: none;\n    background-color: #ddd;\n    color: #333;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.card-extended.active {\n    display: block;\n}\n\n#inbox-container .highlight.active,\n.highlight.active {\n    background-color: #c2bebe;\n    font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nh1 {\n    font-weight: 200;\n}\n\nh2 {\n    font-weight: 400;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\ntextarea {\n    resize: vertical;\n    min-width: 30px;\n    width: 50%;\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column-reverse nowrap;\n    align-items: flex-end;\n    justify-content: flex-end;\n    gap: 20px;\n    min-width: 400px;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Add Modal Btn */\n\n#main-content .add-todo-btn {\n    width: 100px;\n    padding: 1em .5em;\n    background: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n.highlight,\n#add-project {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    font-weight: 400;\n    text-align: left;\n}\n\n.highlight:hover,\n#add-project:hover,\n#main-content .add-todo-btn:hover,\n.aux-container button:hover {\n    background-color: #a1a1a183;\n}\n\n\n/* New Project Prompt */\n\n#new-project-prompt {\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n}\n\n#new-project-prompt div {\n    display: flex;\n}\n\n#new-project-prompt input {\n    height: 1.3em;\n    font-size: 1.3em;\n    border-radius: 5px;\n}\n\n#new-project-prompt button {\n    width: 50%;\n    height: 30px;\n    border-radius: 5px;\n}\n\n#add-new-project {\n    background-color: #44ec2281;\n}\n\n#cancel-new-project {\n    background-color: #e72d2d8e;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button,\n#add-project:hover,\n#main-content .add-todo-btn:hover {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 44%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.modal-header span {\n    border: none;\n    background-color: transparent;\n    width: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 10px;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n\n/* TODO Form */\n\n#todo-form {\n    display: flex;\n    flex-direction: column;\n}\n\n#todo-form .input-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 1s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* Sumbit Form Button */\n\n#form-submit-btn {\n    margin: 30px auto;\n    display: block;\n    padding: 1em 2em;\n    background-color: #333;\n    color: #c2bebe;\n    font-weight: 700;\n    border-radius: 10px;\n}\n\n\n/* TODO card */\n\n.todo-card {\n    background-color: #333;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 11px;\n    padding: 5px;\n}\n\n.todo-card button {\n    color: #ddd;\n}\n\n.todo-card button:active {\n    line-height: 4;\n    transition-duration: calc(1);\n}\n\n.card-partial {\n    background-color: transparent;\n    color: #ddd;\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n}\n\n.card-partial .aux-container {\n    display: flex;\n    gap: 10px;\n}\n\n.aux-container button {\n    cursor: pointer;\n    border-radius: 10px;\n    border: none;\n    background-color: transparent;\n    padding: 0 5px;\n}\n\n.card-extended {\n    display: none;\n    background-color: #ddd;\n    color: #333;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.card-extended.active {\n    display: block;\n}\n\n#inbox-container .highlight.active,\n.highlight.active {\n    background-color: #c2bebe;\n    font-weight: 500;\n}"],"sourceRoot":""}]);
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
                <div class="input-container">
                    <label for="title">Title:</label>
                    <input type="text" required id="title">
                </div>
                <div class="input-container">
                    <label for="description">Description:</label>
                    <textarea id="description" cols="20" required></textarea>               
                </div>
                <div class="input-container">
                    <label for="date">Due Date:</label>
                    <input type="date" id="date" >
                </div>
                <div class="input-container">
                    <label for="priority">Priority:</label>
                    <select id="priority" required>
                    <option value="low" selected>Low</option>
                    <option value="medium" >Medium</option>
                    <option value="high" >High</option>
                    </select>
                </div>

             </form>
            <button form="todo-form" type="submit" id="form-submit-btn">Add Task</button>
           </div>
        </div>`;
    return modal;
};


//ToDo Modal Module
const renderNewToDoModal = ({ name }) => {
    const modalTitle = `New Task (${name})`;
    const modal = makeToDoModalStructure(name, modalTitle);
    eventManagerModal(modal, ({ data, project }) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('add-todo', {
            data,
            project,
        })
    });
    document.body.appendChild(modal);

};

//ToDo Modal Module
const renderUpdateToDoModal = ({ name, todoName }) => {
    const modalTitle = `Update Task (${name})`;
    const modal = makeToDoModalStructure(name, modalTitle);
    eventManagerModal(modal, ({ data, project }) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('update-todo', { data, project, todoName });
    });
    document.body.appendChild(modal);
};

const ToDoUI = ({ container }) => {
    const formatDate = (date) => {
        return (date) ? date : 'no date'
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
            <div class="aux-container">
                <p class="card-date">${formattedDate}</p>
                <button class="modify-todo-btn">edit</button>
                <button class="remove-todo-btn">X</button>

            </div>
          </div>
          <div class="card-extended">
            <p class="card-description">Description: ${description}</p>
            <p class="card-priority">Priority: ${priority}</p>
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
            renderUpdateToDoModal({ name: projectName, todoName: todo.title });

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
        addBtn.innerHTML = `<i class="fas fa-plus-square"></i> Add Task`;
        addBtn.classList.add('add-todo-btn');
        return addBtn;
    };

    const removeContents = () => {
        todoContainer.innerHTML = ``;
    };
    const toggleActiveStatus = (name) => {
        const allClickableBtns = Array.from(document.querySelectorAll('.highlight'));
        allClickableBtns.forEach((element) => {
            element.classList.remove('active');
            if (name === element.dataset.name) {
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
        <button class="project-exit-btn">x</i></button>
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
        div.id = 'new-project-prompt'
        div.innerHTML = `
        <input type="text" required >
        <div>
            <button id="add-new-project" type="submit">Add</button>
            <button id="cancel-new-project">Cancel</button>
        </div>
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
        // console.log(container);

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
        // console.log(allTasks)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUs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ekI4Qjs7QUFFOUIsaUVBQWU7QUFDZixrQkFBa0Isb0NBQW9DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzZCOztBQUVUOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDhDQUFNLEdBQUcsMEJBQTBCOztBQUV2QyxJQUFJLGlEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGlFQUFpQixHQUFHLHNCQUFzQjs7QUFFOUMsSUFBSSxzREFBYztBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgY29sb3I6ICNlZWVlZWU7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBub3dyYXAgcm93O1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgIG1pbi13aWR0aDogMzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxubWFpbj5kaXYge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5tYWluIGRpdiNtZW51IHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweFxcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2Ugbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbm1haW4gZGl2I21haW4tY29udGVudD4qIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcblxcbi8qIEFkZCBNb2RhbCBCdG4gKi9cXG5cXG4jbWFpbi1jb250ZW50IC5hZGQtdG9kby1idG4ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDFlbSAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi8qIEluYm94ICovXFxuXFxuI2luYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LFxcbi5oaWdobGlnaHQsXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5oaWdobGlnaHQ6aG92ZXIsXFxuI2FkZC1wcm9qZWN0OmhvdmVyLFxcbiNtYWluLWNvbnRlbnQgLmFkZC10b2RvLWJ0bjpob3ZlcixcXG4uYXV4LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExODM7XFxufVxcblxcblxcbi8qIE5ldyBQcm9qZWN0IFByb21wdCAqL1xcblxcbiNuZXctcHJvamVjdC1wcm9tcHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcm9tcHQgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXByb21wdCBpbnB1dCB7XFxuICAgIGhlaWdodDogMS4zZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXByb21wdCBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZC1uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGVjMjI4MTtcXG59XFxuXFxuI2NhbmNlbC1uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzJkMmQ4ZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0IHAsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24sXFxuI2FkZC1wcm9qZWN0OmhvdmVyLFxcbiNtYWluLWNvbnRlbnQgLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1leGl0LWJ0bi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDQlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciBzcGFuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG5cXG4vKiBUT0RPIEZvcm0gKi9cXG5cXG4jdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RvZG8tZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcblxcbi8qIFN1bWJpdCBGb3JtIEJ1dHRvbiAqL1xcblxcbiNmb3JtLXN1Ym1pdC1idG4ge1xcbiAgICBtYXJnaW46IDMwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjYzJiZWJlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBUT0RPIGNhcmQgKi9cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLWNhcmQgYnV0dG9uIHtcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcbi50b2RvLWNhcmQgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiA0O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBjYWxjKDEpO1xcbn1cXG5cXG4uY2FyZC1wYXJ0aWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZGRkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmQtcGFydGlhbCAuYXV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmF1eC1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmNhcmQtZXh0ZW5kZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNhcmQtZXh0ZW5kZWQuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNpbmJveC1jb250YWluZXIgLmhpZ2hsaWdodC5hY3RpdmUsXFxuLmhpZ2hsaWdodC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJiZWJlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lB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OztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSxcXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGNvbG9yOiAjZWVlZWVlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogbm93cmFwIHJvdztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbm1haW4+ZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxubWFpbiBkaXYjbWVudSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHhcXG59XFxuXFxubWFpbiBkaXYjbWFpbi1jb250ZW50IHtcXG4gICAgZmxleDogMi41O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQ+KiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5cXG4vKiBBZGQgTW9kYWwgQnRuICovXFxuXFxuI21haW4tY29udGVudCAuYWRkLXRvZG8tYnRuIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxZW0gLjVlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4vKiBJbmJveCAqL1xcblxcbiNpbmJveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4uaGlnaGxpZ2h0LFxcbiNhZGQtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaGlnaGxpZ2h0OmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4jbWFpbi1jb250ZW50IC5hZGQtdG9kby1idG46aG92ZXIsXFxuLmF1eC1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTgzO1xcbn1cXG5cXG5cXG4vKiBOZXcgUHJvamVjdCBQcm9tcHQgKi9cXG5cXG4jbmV3LXByb2plY3QtcHJvbXB0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtcHJvbXB0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcm9tcHQgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuM2VtO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcm9tcHQgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGQtbmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRlYzIyODE7XFxufVxcblxcbiNjYW5jZWwtbmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTcyZDJkOGU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdCBwLFxcbiNpbmJveC1jb250YWluZXIgYnV0dG9uLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4jbWFpbi1jb250ZW50IC5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWV4aXQtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ0JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC1oZWFkZXIgc3BhbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuXFxuLyogVE9ETyBGb3JtICovXFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0b2RvLWZvcm0gLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5cXG4vKiBTdW1iaXQgRm9ybSBCdXR0b24gKi9cXG5cXG4jZm9ybS1zdWJtaXQtYnRuIHtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2MyYmViZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLyogVE9ETyBjYXJkICovXFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby1jYXJkIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG4udG9kby1jYXJkIGJ1dHRvbjphY3RpdmUge1xcbiAgICBsaW5lLWhlaWdodDogNDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogY2FsYygxKTtcXG59XFxuXFxuLmNhcmQtcGFydGlhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2RkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkLXBhcnRpYWwgLmF1eC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hdXgtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5jYXJkLWV4dGVuZGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkLWV4dGVuZGVkLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaW5ib3gtY29udGFpbmVyIC5oaWdobGlnaHQuYWN0aXZlLFxcbi5oaWdobGlnaHQuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYmViZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWInO1xuLy9XaWxsIGJlIHVzaW5nIGxvY2FsU3RvcmFnZSB0byBjaGVjayBpZiBwcm9qZWN0bmFtZSBpcyBhdmFpYmxlLlxuXG5cbi8vRnVuY3Rpb24gdGhhdCBoYW5kbGVzIGFsbCBldmVudCBsaXN0ZW5lcnMgb2YgdGhlIG1vZGFsc1xuY29uc3QgZXZlbnRNYW5hZ2VyTW9kYWwgPSAobW9kYWwsIHB1YnN1YkZ1bmMpID0+IHtcblxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ1dHRvblwiKTtcbiAgICBjb25zdCBmb3JtID0gbW9kYWwucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbW9kYWwucXVlcnlTZWxlY3RvcignaDMnKS5kYXRhc2V0LnByb2plY3ROYW1lO1xuICAgIC8vIGdldHMgYWxsIHJlcXVpcmVkIGlucHV0cyAodGl0bGUscHJpb3JpdHksZGVzY3JpcHRpb24pXG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWQnKSk7XG5cblxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbW9kYWxcIik7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdpbmRvd09uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy9XaWxsIHV0aWxpemUgdGhpcyBsYXRlciBvbiB0aGUgY2xvc2luZyB0aGUgYWRkIHByb2plY3RcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGROb3RSZXF1aXJlZFZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgLy8gb3B0aW9uYWwgaWYgZGF0ZSBpcyBhbHNvIGlucHV0IG1ha2UgaXQgaW50byBhbm90aGVyIGZ1bmN0aW9uXG4gICAgICAgIGlmIChmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUpIHtcbiAgICAgICAgICAgIGZvcm1JbnB1dHMucHVzaChmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBjaGVja0Zvcm1WYWxpZGl0eSA9ICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBmb3JtSW5wdXRzKSB7XG4gICAgICAgICAgICBpZiAoIWlucHV0LnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIC8vIFdpbGwgY2hhbmdlIGxhdGVyIGludG8gd2FybmluZyBlbGVtZW50XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBhbGwgZmllbGRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SW5wdXRWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmb3JtSW5wdXRzLnJlZHVjZSgob2JqLCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgb2JqW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9LCB7fSlcbiAgICB9O1xuICAgIC8vc2hvdyBtb2RhbCBraW5kYSByZWR1bmRhbnRcbiAgICBzaG93TW9kYWwoKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlTW9kYWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2luZG93T25DbGljayk7XG5cbiAgICAvL2Zvcm0gZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uc3Qgc3VibWl0QnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvL1JlbW92ZXMgdGhlIGRlZmF1bHQgcmVmZXJlc2ggb24gdGhlIGZvcm0gdGFnXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkTm90UmVxdWlyZWRWYWx1ZXMoKTtcbiAgICAgICAgaWYgKGNoZWNrRm9ybVZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gZ2V0SW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgICAgIC8vIFdpbGwgYWRkIHRvZG8gdG8gcHJvamVjdCBjb250YWluZXIgIVxuICAgICAgICAgICAgcHVic3ViRnVuYyh7IGRhdGE6IHsuLi5mb3JtRGF0YSB9LCBwcm9qZWN0OiBwcm9qZWN0TmFtZSB9KTtcblxuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfSlcbn07XG5cblxuY29uc3QgbWFrZVRvRG9Nb2RhbFN0cnVjdHVyZSA9IChuYW1lLCBtb2RhbFRpdGxlKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDMgZGF0YS1wcm9qZWN0LW5hbWU9XCIke25hbWV9XCI+JHttb2RhbFRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxmb3JtIGlkPVwidG9kby1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIGNvbHM9XCIyMFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgc2VsZWN0ZWQ+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiA+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uIGZvcm09XCJ0b2RvLWZvcm1cIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJmb3JtLXN1Ym1pdC1idG5cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gbW9kYWw7XG59O1xuXG5cbi8vVG9EbyBNb2RhbCBNb2R1bGVcbmNvbnN0IHJlbmRlck5ld1RvRG9Nb2RhbCA9ICh7IG5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBgTmV3IFRhc2sgKCR7bmFtZX0pYDtcbiAgICBjb25zdCBtb2RhbCA9IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUobmFtZSwgbW9kYWxUaXRsZSk7XG4gICAgZXZlbnRNYW5hZ2VyTW9kYWwobW9kYWwsICh7IGRhdGEsIHByb2plY3QgfSkgPT4ge1xuICAgICAgICBwdWJzdWIucHVibGlzaCgnYWRkLXRvZG8nLCB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxufTtcblxuLy9Ub0RvIE1vZGFsIE1vZHVsZVxuY29uc3QgcmVuZGVyVXBkYXRlVG9Eb01vZGFsID0gKHsgbmFtZSwgdG9kb05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBgVXBkYXRlIFRhc2sgKCR7bmFtZX0pYDtcbiAgICBjb25zdCBtb2RhbCA9IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUobmFtZSwgbW9kYWxUaXRsZSk7XG4gICAgZXZlbnRNYW5hZ2VyTW9kYWwobW9kYWwsICh7IGRhdGEsIHByb2plY3QgfSkgPT4ge1xuICAgICAgICBwdWJzdWIucHVibGlzaCgndXBkYXRlLXRvZG8nLCB7IGRhdGEsIHByb2plY3QsIHRvZG9OYW1lIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufTtcblxuY29uc3QgVG9Eb1VJID0gKHsgY29udGFpbmVyIH0pID0+IHtcbiAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChkYXRlKSA/IGRhdGUgOiAnbm8gZGF0ZSdcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVG9kbyA9ICh7IHByb2plY3ROYW1lLCB0b2RvIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5IH0gPSB0b2RvO1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZCcpO1xuICAgICAgICBjYXJkLmRhdGFzZXQuaW5zaWRlUHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wYXJ0aWFsXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGl0bGVcIiBkYXRhLXRvZG8tbmFtZT1cIiR7dGl0bGV9XCI+JHt0aXRsZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kaWZ5LXRvZG8tYnRuXCI+ZWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtdG9kby1idG5cIj5YPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWV4dGVuZGVkXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtcHJpb3JpdHlcIj5Qcmlvcml0eTogJHtwcmlvcml0eX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgY29uc3QgcGFydGlhbCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtcGFydGlhbCcpO1xuICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1leHRlbmRlZCcpO1xuICAgICAgICBwYXJ0aWFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24ucmVtb3ZlLXRvZG8tYnRuJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW1vdmUtdG9kbycsIHsgcHJvamVjdE5hbWUsIHRvZG8gfSk7XG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvcignYnV0dG9uLm1vZGlmeS10b2RvLWJ0bicpO1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVXBkYXRlVG9Eb01vZGFsKHsgbmFtZTogcHJvamVjdE5hbWUsIHRvZG9OYW1lOiB0b2RvLnRpdGxlIH0pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH07XG4gICAgY29uc3QgcmVuZGVySW52YWxpZFRvZG8gPSAoeyB0aXRsZSB9KSA9PiB7XG4gICAgICAgIGFsZXJ0KGBcIiR7dGl0bGV9XCIgaXMgYWxyZWFkeSBiZWVuIHVzZWQhIHVzZSBkaWZmZXJlbnQgdGl0bGUhYClcblxuICAgIH07XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdyZW5kZXItdG9kbycsIHJlbmRlclRvZG8pO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2ludmFsaWQtdG9kbycsIHJlbmRlckludmFsaWRUb2RvKTtcbn07XG5cblxuXG5cblxuXG5jb25zdCBQcm9qZWN0VUkgPSAoeyByb290LCB0b2RvQ29udGFpbmVyIH0pID0+IHtcblxuICAgIGNvbnN0IG1ha2VUb0RvQnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1wbHVzLXNxdWFyZVwiPjwvaT4gQWRkIFRhc2tgO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJyk7XG4gICAgICAgIHJldHVybiBhZGRCdG47XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNvbnRlbnRzID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IGBgO1xuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlQWN0aXZlU3RhdHVzID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ2xpY2thYmxlQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpKTtcbiAgICAgICAgYWxsQ2xpY2thYmxlQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IGVsZW1lbnQuZGF0YXNldC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uUHJvamVjdFNpbmdsZUNsaWNrID0gKG5hbWUpID0+IHtcbiAgICAgICAgcmVtb3ZlQ29udGVudHMoKTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlU3RhdHVzKG5hbWUpO1xuICAgICAgICByZW5kZXJCdG4oeyBuYW1lIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSSB3aWxsIG5vdyBmZXRjaCB0b2RvcyBmcm9tICR7dGFyZ2V0fWApO1xuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdC1jbGljaycsIHsgbmFtZSB9KTtcbiAgICB9O1xuXG5cbiAgICAvLyBjb25zdCBvblByb2plY3REb3VibGVDbGljayA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdJIGFtIGRvdWJsZSBjbGljaycpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgLy8gfTtcblxuXG4gICAgY29uc3QgcmVuZGVyQnRuID0gKHsgbmFtZSwgY29udGFpbmVyID0gdG9kb0NvbnRhaW5lciB9KSA9PiB7XG4gICAgICAgIC8vIFdpbGwgYWx3YXlzIHJ1biBzaW5jZSB3aWxsIHdpcGUgbWFpbiBjb250ZW50IGZvciBldmVyeSBjbGlja1xuICAgICAgICBpZiAoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJ0biA9IG1ha2VUb0RvQnRuKG5hbWUpO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnbWFrZS1tb2RhbCcsIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgLy9wdWJzdWIgdG8gcmVtb3ZlIHByb2plY3Qgb24gdGhlIHByb2plY3QgbGlzdFxuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUHJvamVjdEVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICBlbGVtZW50LmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtbmFtZSBcIiBkYXRhLW5hbWU9XCIke25hbWV9XCIgPjxpIGNsYXNzPVwiZmFzIGZhLXRhc2tzXCI+PC9pPiAke25hbWV9PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1leGl0LWJ0blwiPng8L2k+PC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfTtcblxuXG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0RGl2ID0gKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBtYWtlUHJvamVjdEVsZW1lbnQobmFtZSlcbiAgICAgICAgY29uc3QgZXhpdEJ0biA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3QtZXhpdC1idG4nKTtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoRWxlbWVudCA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcigncCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgZXhpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgZXhpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZXhpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFncmFwaEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgb25Qcm9qZWN0U2luZ2xlQ2xpY2sodGFyZ2V0LmRhdGFzZXQubmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwYXJhZ3JhcGhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25Qcm9qZWN0RG91YmxlQ2xpY2spXG4gICAgICAgIGV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3JlbW92ZS1wcm9qZWN0JywgeyBuYW1lIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICAvL3dpbCBlZGl0IGxhdGVyXG4gICAgICAgIHJlbmRlckJ0bih7IG5hbWUgfSk7XG4gICAgfTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdkZWZhdWx0LXByb2plY3QnLCBvblByb2plY3RTaW5nbGVDbGljayk7XG4gICAgcHVic3ViLnN1YnNjcmliZSgnYWRkLW5ldy1wcm9qZWN0JywgcmVuZGVyUHJvamVjdERpdik7XG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVtb3ZlLXByb2plY3QnLCByZW1vdmVDb250ZW50cyk7XG4gICAgcHVic3ViLnN1YnNjcmliZSgnbWFrZS1tb2RhbCcsIHJlbmRlck5ld1RvRG9Nb2RhbCk7XG5cbn07XG5cblxuXG5cbi8vSGFuZGxlcyB0aGUgUG9wdXAgXG5jb25zdCBwcm9qZWN0SW5wdXRVSSA9IGZ1bmN0aW9uKHsgRE9NYnRuLCBET01saXN0IH0pIHtcbiAgICBjb25zdCBtYWluQnRuID0gRE9NYnRuLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGhpZGVCdG4gPSAoYnRuKSA9PiB7IGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9O1xuICAgIGNvbnN0IHNob3dCdG4gPSAoYnRuKSA9PiB7IGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyB9O1xuXG4gICAgLy8gQ2hlY2tzIHRoZSBkYXRhIGF0dHJpYnV0ZSBvZiBhbGwgZWxlbXMgb2YgIHByb2plY3QgbGlzdCBcbiAgICBjb25zdCBpc1Byb2plY3ROYW1lVmFsaWQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0F2YWlsYWJsZSA9IERPTWxpc3QucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7bmFtZX1cIl1gKTtcbiAgICAgICAgLy8jV2lsbCBBZGQgbGF0ZXI6IHVzZSBBUEkgdG8gY2hlY2sgXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlIGlmIHByb3BlcnR5IGlzIGFscmVhZHkgdXNlZC5cbiAgICAgICAgcmV0dXJuICEhaXNBdmFpbGFibGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrU3RyVmFsaWRpdHkgPSAoc3RyKSA9PiB7XG4gICAgICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBhIHZhbGlkIHByb2plY3QgbmFtZS4nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9qZWN0TmFtZVZhbGlkKHN0cikpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IE5hbWUgbXVzdCBiZSBkaWZmZXJlbnQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vQWRkIGFub3RoZXIgY29uZGl0aW9uaWFsIGlmIHRoZXJlIGlzIGEgbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGlmKGxvY2FsU3RvcmFnZSkgLi4uXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJcyB2YWxpZCEnLCBzdHIpICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVySW5wdXRQcm9qZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaWQgPSAnbmV3LXByb2plY3QtcHJvbXB0J1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLW5ldy1wcm9qZWN0XCIgdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1uZXctcHJvamVjdFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBhZGRCdG4gPSBkaXYucXVlcnlTZWxlY3RvcignI2FkZC1uZXctcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkaXYucXVlcnlTZWxlY3RvcignI2NhbmNlbC1uZXctcHJvamVjdCcpO1xuXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IGNoZWNrU3RyVmFsaWRpdHkoaW5wdXRUZXh0KTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNob3dCdG4obWFpbkJ0bik7XG4gICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2FkZC1uZXctcHJvamVjdCcsIHsgbmFtZTogaW5wdXRUZXh0IH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICBzaG93QnRuKG1haW5CdG4pO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NYnRuLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBjbG9zZSBpbnB1dCBkaXYgaWYgdXNlciBjbGlja2VkIG91dHNpZGUgdGhlIGRpdlxuXG4gICAgfVxuICAgIGNvbnN0IG9uQWRkUHJvamVjdCA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGhpZGVCdG4odGFyZ2V0KTtcbiAgICAgICAgcmVuZGVySW5wdXRQcm9qZWN0KCk7XG4gICAgfVxuXG4gICAgbWFpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQWRkUHJvamVjdCk7XG5cblxuXG59XG5cblxuZXhwb3J0IHsgcHJvamVjdElucHV0VUksIFByb2plY3RVSSwgVG9Eb1VJIH0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQgVG9EbyBmcm9tICcuL3RvZG8nXG5cblxuLy9Mb2NhbCBTdG9yYWdlIFN0dWZmXG5jb25zdCBzYXZlZFByb2plY3RzID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0Jyk7XG4gICAgaWYgKCFkZWZhdWx0UHJvamVjdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdCcsIEpTT04uc3RyaW5naWZ5KG5ldyBQcm9qZWN0KCdkZWZhdWx0JykpKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgSlNPTlByb2plY3QgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTlByb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QpXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBteUNvbnRhaW5lciA9IHt9O1xuICAgICAgICBmb3IgKGxldCBbcHJvamVjdE5hbWUsIHByb2plY3RdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHByb2plY3QgPSBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgICAgICAgICAgbXlDb250YWluZXJbcHJvamVjdE5hbWVdID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBbLCB0b2RvT2JqXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0LmNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odG9kb09iaik7XG4gICAgICAgICAgICAgICAgbXlDb250YWluZXJbcHJvamVjdE5hbWVdLmFkZChuZXdUb2RvKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBteUNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnZmV0Y2gtbG9jYWwtc3RvcmFnZScsIGdldFByb2plY3RzKVxuXG4gICAgcmV0dXJuIHsgZ2V0UHJvamVjdHMsIHVwZGF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfVxufSkoKTtcblxuXG5jb25zdCBpbml0aWFsaXplU3RvcmFnZSA9IGZ1bmN0aW9uKHsgaW5ib3gsIHRvZG9Db250YWluZXIgfSkge1xuXG4gICAgbGV0IGNvbnRhaW5lcjtcblxuICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IHNhdmVkUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGFpbmVyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaWYgdGhlcmUgaXMgbm8gbG9jYWwgZnVuY3Rpb24gY2FsbGVkIHNhdmVkUHJvamVjdHNcbiAgICAgICAgY29udGFpbmVyID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogbmV3IFByb2plY3QoJ2RlZmF1bHQnKVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gI1RPRE8gTW92ZSB0byBhcHByb3ByaWF0ZSBtb2R1bGVcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdkZWZhdWx0LXByb2plY3QnLCB0YXJnZXQuZGF0YXNldC5uYW1lKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh7IG5hbWU6IHByb2plY3ROYW1lIH0pID0+IHtcbiAgICAgICAgLy8gaG1tIGNoZWNrcyBpZiB0aGVyZSBpcyBzYW1lIG5hbWVcbiAgICAgICAgaWYgKGNvbnRhaW5lcltwcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lcltwcm9qZWN0TmFtZV0gPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vVXBkYXRlcyB0aGUga2V5IGluIHRoZSBsb2NhbCBTdG9yYWdlXG4gICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICBzYXZlZFByb2plY3RzLnVwZGF0ZVByb2plY3QoY29udGFpbmVyW3Byb2plY3ROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBzYXZlZFByb2plY3RzLnJlbW92ZVByb2plY3QobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgY29udGFpbmVyW25hbWVdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcltuYW1lXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCd1cGRhdGUtdG9kbycsICh7IGRhdGEsIHByb2plY3QsIHRvZG9OYW1lIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0UHJvamVjdChwcm9qZWN0KS5yZW1vdmUodG9kb05hbWUpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvRG8gPSBuZXcgVG9EbyhkYXRhKTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGdldFByb2plY3QocHJvamVjdCkuYWRkKHVwZGF0ZWRUb0RvKTtcbiAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgIHNhdmVkUHJvamVjdHMudXBkYXRlUHJvamVjdChnZXRQcm9qZWN0KHByb2plY3QpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlZCBvbiBsb2NhbFN0b3JhZ2UnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgICAvLyBtdXN0IHVzZSBkZWZhdWx0IHByb2plY3QgLiBCdXQgd2UgY2FuJ3QgZ2V0IHByb2plY3QgYnV0dG9uXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdkZWZhdWx0LXByb2plY3QnLCBwcm9qZWN0KTtcblxuICAgIH0pO1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnYWRkLXRvZG8nLCAoeyBkYXRhLCBwcm9qZWN0IH0pID0+IHtcbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgaWYgKG15UHJvamVjdCkge1xuICAgICAgICAgICAgLy9lcnJvciBoYW5kbGluZyBmb3IgYmxvY2tpbmcgc2FtZSBuYW1lIHRvZG9cbiAgICAgICAgICAgIGlmIChteVByb2plY3QuZ2V0KGRhdGEudGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2ludmFsaWQtdG9kbycsIHsgdGl0bGU6IGRhdGEudGl0bGUgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBibG9ja2VkIScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhkYXRhKVxuICAgICAgICAgICAgbXlQcm9qZWN0LmFkZChuZXdUb2RvKTtcbiAgICAgICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgc2F2ZWRQcm9qZWN0cy51cGRhdGVQcm9qZWN0KG15UHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgncmVuZGVyLXRvZG8nLCB7IHByb2plY3ROYW1lOiBteVByb2plY3QubmFtZSwgdG9kbzogbmV3VG9kbyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdyZW1vdmUtdG9kbycsICh7IHByb2plY3ROYW1lLCB0b2RvIH0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmUodG9kby50aXRsZSk7XG4gICAgICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHNhdmVkUHJvamVjdHMudXBkYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0LWNsaWNrJywgKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KG5hbWUpO1xuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0QWxsKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYWxsVGFza3MpLmxlbmd0aCA9PT0gMCAmJiBhbGxUYXNrcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSSBoYXZlIG5vIHRhc2tzIScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhbGxUYXNrcykpIHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW5kZXItdG9kbycsIHsgcHJvamVjdE5hbWU6IG5hbWUsIHRvZG86IHZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2ZldGNoLXByb2plY3RzJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXldIG9mIE9iamVjdC5lbnRyaWVzKGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JykgY29udGludWVcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGQtbmV3LXByb2plY3QnLCB7IG5hbWU6IGtleSB9KVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2FkZC1uZXctcHJvamVjdCcsIGFkZFByb2plY3QpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3JlbW92ZS1wcm9qZWN0JywgcmVtb3ZlUHJvamVjdCk7XG4gICAgLy9yZW5kZXJzIHRoZSBpbmJveCBwcm9qZWN0IGF0IERPTUxvYWRcbiAgICBwdWJzdWIucHVibGlzaCgnZGVmYXVsdC1wcm9qZWN0JywgaW5ib3guZGF0YXNldC5uYW1lKTtcbiAgICBwdWJzdWIucHVibGlzaCgnZmV0Y2gtcHJvamVjdHMnKVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0XG4gICAgfVxufTtcblxuXG5leHBvcnQgeyBpbml0aWFsaXplU3RvcmFnZSB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29udGFpbmVyID0ge30pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltrZXldO1xuICAgIH1cbiAgICByZXBsYWNlKG9iaikge1xuICAgICAgICBpZiAoISF0aGlzLmNvbnRhaW5lcltvYmoudGl0bGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJbb2JqLnRpdGxlXSA9IG9iajtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFkZChvYmopIHtcbiAgICAgICAgaWYgKCEhdGhpcy5jb250YWluZXJbb2JqLnRpdGxlXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyW29iai50aXRsZV0gPSBvYmo7XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGFpbmVyW2tleV07XG4gICAgICAgIHJldHVybiAtLXRoaXMubGVuZ3RoO1xuICAgIH1cbiAgICBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgc3RhdGljIHN1YnNjcmliZXJzID0ge307XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG4gICAgc3RhdGljIHN1YnNjcmliZSh0b3BpYywgY2IpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5wdXNoKGNiKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5sZW5ndGggLSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcHVibGlzaCh0b3BpYywgZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1t0b3BpY10pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RvcGljXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlIH0pIHtcbiAgICAgICAgLy9kYXRlIG1heSBiZSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdElucHV0VUksIFByb2plY3RVSSwgVG9Eb1VJIH0gZnJvbSAnLi9VSS5qcyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemVTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG4oKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQnKTtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XG5cbiAgICBUb0RvVUkoeyBjb250YWluZXI6IHRvZG9Db250YWluZXIgfSk7XG5cbiAgICBQcm9qZWN0VUkoe1xuICAgICAgICByb290OiBwcm9qZWN0Q29udGFpbmVyLFxuICAgICAgICB0b2RvQ29udGFpbmVyXG4gICAgfSlcbiAgICBpbml0aWFsaXplU3RvcmFnZSh7IGluYm94LCB0b2RvQ29udGFpbmVyIH0pO1xuXG4gICAgcHJvamVjdElucHV0VUkoe1xuICAgICAgICBET01idG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ0bi1jb250YWluZXInKSxcbiAgICAgICAgRE9NbGlzdDogcHJvamVjdENvbnRhaW5lcixcbiAgICB9KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9