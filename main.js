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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nh1 {\n    font-weight: 200;\n}\n\nh2 {\n    font-weight: 400;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column-reverse nowrap;\n    align-items: flex-end;\n    justify-content: flex-end;\n    gap: 20px;\n    min-width: 400px;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Add Modal Btn */\n\n#main-content .add-todo-btn {\n    width: 100px;\n    padding: 1em .5em;\n    background: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n.highlight,\n#add-project {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    font-weight: 400;\n    text-align: left;\n}\n\n.highlight:hover,\n#add-project:hover,\n#main-content .add-todo-btn:hover,\n.aux-container button:hover {\n    background-color: #a1a1a183;\n}\n\n\n/* New Project Prompt */\n\n#new-project-prompt {\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n}\n\n#new-project-prompt div {\n    display: flex;\n}\n\n#new-project-prompt input {\n    height: 1.3em;\n    font-size: 1.3em;\n    border-radius: 5px;\n}\n\n#new-project-prompt button {\n    width: 50%;\n    height: 30px;\n    border-radius: 5px;\n}\n\n#add-new-project {\n    background-color: #44ec2281;\n}\n\n#cancel-new-project {\n    background-color: #e72d2d8e;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button,\n#add-project:hover,\n#main-content .add-todo-btn:hover {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.close-button {\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 1s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* TODO card */\n\n.todo-card {\n    background-color: #cecece;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-partial {\n    background-color: #dddddd;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-partial .aux-container {\n    display: flex;\n    gap: 10px;\n}\n\n.aux-container button {\n    cursor: pointer;\n    border-radius: 10px;\n    border: none;\n    background-color: transparent;\n    padding: 0 5px;\n}\n\n.card-extended {\n    display: none;\n}\n\n.card-extended.active {\n    display: block;\n}\n\n#inbox-container .highlight.active,\n.highlight.active {\n    background-color: #c2bebe;\n    font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,cAAc;IACd,oDAAoD;AACxD;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,SAAS;IACT,aAAa;IACb,aAAa;IACb,gCAAgC;IAChC,qBAAqB;IACrB,yBAAyB;IACzB,SAAS;IACT,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;;AAGA,kBAAkB;;AAElB;IACI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;;AAGA,UAAU;;AAEV;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;IAGI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;;;IAII,2BAA2B;AAC/B;;;AAGA,uBAAuB;;AAEvB;IACI,aAAa;IACb,iBAAiB;IACjB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,eAAe;IACf,wDAAwD;AAC5D;;;AAGA,kBAAkB;;AAElB;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yEAAyE;AAC7E;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,oBAAoB;IACpB,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,2BAA2B;IAC3B,wDAAwD;AAC5D;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,sEAAsE;AAC1E;;;AAGA,cAAc;;AAEd;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,yBAAyB;IACzB,gBAAgB;AACpB","sourcesContent":["* {\n    box-sizing: inherit;\n}\n\nbody,\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    box-sizing: border-box;\n    background-color: #eeeeee;\n    color: #333333;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\nheader {\n    background-color: #333333;\n    padding: 30px;\n    color: #eeeeee;\n}\n\nh1 {\n    font-weight: 200;\n}\n\nh2 {\n    font-weight: 400;\n}\n\nmain {\n    display: flex;\n    flex-flow: nowrap row;\n    min-height: calc(100vh - 100px);\n}\n\nmain>div {\n    flex: 1;\n}\n\nmain div#menu {\n    max-width: 300px;\n    min-width: 200px;\n    background-color: #dddddd;\n    display: flex;\n    flex-direction: column;\n    padding: 20px\n}\n\nmain div#main-content {\n    flex: 2.5;\n    padding: 20px;\n    display: flex;\n    flex-flow: column-reverse nowrap;\n    align-items: flex-end;\n    justify-content: flex-end;\n    gap: 20px;\n    min-width: 400px;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\nmain div#main-content>* {\n    margin: 0 auto;\n    width: 70%;\n}\n\n\n/* Add Modal Btn */\n\n#main-content .add-todo-btn {\n    width: 100px;\n    padding: 1em .5em;\n    background: transparent;\n    border: none;\n    border-radius: 5px;\n}\n\n\n/* Inbox */\n\n#inbox-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project,\n.highlight,\n#add-project {\n    padding: 15px;\n    margin-bottom: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: transparent;\n    font-size: 13px;\n    font-weight: 400;\n    text-align: left;\n}\n\n.highlight:hover,\n#add-project:hover,\n#main-content .add-todo-btn:hover,\n.aux-container button:hover {\n    background-color: #a1a1a183;\n}\n\n\n/* New Project Prompt */\n\n#new-project-prompt {\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n}\n\n#new-project-prompt div {\n    display: flex;\n}\n\n#new-project-prompt input {\n    height: 1.3em;\n    font-size: 1.3em;\n    border-radius: 5px;\n}\n\n#new-project-prompt button {\n    width: 50%;\n    height: 30px;\n    border-radius: 5px;\n}\n\n#add-new-project {\n    background-color: #44ec2281;\n}\n\n#cancel-new-project {\n    background-color: #e72d2d8e;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project p,\n#inbox-container button,\n#add-project:hover,\n#main-content .add-todo-btn:hover {\n    cursor: pointer;\n}\n\n.project-exit-btn {\n    display: none;\n}\n\n.project-exit-btn.active {\n    display: block;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    cursor: pointer;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n\n/* Modal Content */\n\n.modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.438);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 50%;\n    border-radius: 0.5rem;\n}\n\n.close-button {\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n    font-family: 'Nunito', 'Courier New', Courier, monospace;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 1s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n\n/* TODO card */\n\n.todo-card {\n    background-color: #cecece;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-partial {\n    background-color: #dddddd;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-partial .aux-container {\n    display: flex;\n    gap: 10px;\n}\n\n.aux-container button {\n    cursor: pointer;\n    border-radius: 10px;\n    border: none;\n    background-color: transparent;\n    padding: 0 5px;\n}\n\n.card-extended {\n    display: none;\n}\n\n.card-extended.active {\n    display: block;\n}\n\n#inbox-container .highlight.active,\n.highlight.active {\n    background-color: #c2bebe;\n    font-weight: 500;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCOEI7O0FBRTlCLGlFQUFlO0FBQ2Ysa0JBQWtCLG9DQUFvQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUM2Qjs7QUFFVDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw4Q0FBTSxHQUFHLDBCQUEwQjs7QUFFdkMsSUFBSSxpREFBUztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxpRUFBaUIsR0FBRyxzQkFBc0I7O0FBRTlDLElBQUksc0RBQWM7QUFDbEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSxcXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGNvbG9yOiAjZWVlZWVlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogbm93cmFwIHJvdztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG59XFxuXFxubWFpbj5kaXYge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5tYWluIGRpdiNtZW51IHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweFxcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2Ugbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbm1haW4gZGl2I21haW4tY29udGVudD4qIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcblxcbi8qIEFkZCBNb2RhbCBCdG4gKi9cXG5cXG4jbWFpbi1jb250ZW50IC5hZGQtdG9kby1idG4ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDFlbSAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi8qIEluYm94ICovXFxuXFxuI2luYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LFxcbi5oaWdobGlnaHQsXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5oaWdobGlnaHQ6aG92ZXIsXFxuI2FkZC1wcm9qZWN0OmhvdmVyLFxcbiNtYWluLWNvbnRlbnQgLmFkZC10b2RvLWJ0bjpob3ZlcixcXG4uYXV4LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExODM7XFxufVxcblxcblxcbi8qIE5ldyBQcm9qZWN0IFByb21wdCAqL1xcblxcbiNuZXctcHJvamVjdC1wcm9tcHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcm9tcHQgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXByb21wdCBpbnB1dCB7XFxuICAgIGhlaWdodDogMS4zZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXByb21wdCBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZC1uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGVjMjI4MTtcXG59XFxuXFxuI2NhbmNlbC1uZXctcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzJkMmQ4ZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0IHAsXFxuI2luYm94LWNvbnRhaW5lciBidXR0b24sXFxuI2FkZC1wcm9qZWN0OmhvdmVyLFxcbiNtYWluLWNvbnRlbnQgLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1leGl0LWJ0bi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5cXG4vKiBUT0RPIGNhcmQgKi9cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1wYXJ0aWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2FyZC1wYXJ0aWFsIC5hdXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXV4LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY2FyZC1leHRlbmRlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkLWV4dGVuZGVkLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaW5ib3gtY29udGFpbmVyIC5oaWdobGlnaHQuYWN0aXZlLFxcbi5oaWdobGlnaHQuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYmViZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7OztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQSxVQUFVOztBQUVWO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7OztJQUlJLDJCQUEyQjtBQUMvQjs7O0FBR0EsdUJBQXVCOztBQUV2QjtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOzs7O0lBSUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZUFBZTtJQUNmLHdEQUF3RDtBQUM1RDs7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlFQUF5RTtBQUM3RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixzRUFBc0U7QUFDMUU7OztBQUdBLGNBQWM7O0FBRWQ7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBjb2xvcjogI2VlZWVlZTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IG5vd3JhcCByb3c7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxufVxcblxcbm1haW4+ZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxubWFpbiBkaXYjbWVudSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHhcXG59XFxuXFxubWFpbiBkaXYjbWFpbi1jb250ZW50IHtcXG4gICAgZmxleDogMi41O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5tYWluIGRpdiNtYWluLWNvbnRlbnQ+KiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5cXG4vKiBBZGQgTW9kYWwgQnRuICovXFxuXFxuI21haW4tY29udGVudCAuYWRkLXRvZG8tYnRuIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxZW0gLjVlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4vKiBJbmJveCAqL1xcblxcbiNpbmJveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4uaGlnaGxpZ2h0LFxcbiNhZGQtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaGlnaGxpZ2h0OmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4jbWFpbi1jb250ZW50IC5hZGQtdG9kby1idG46aG92ZXIsXFxuLmF1eC1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTgzO1xcbn1cXG5cXG5cXG4vKiBOZXcgUHJvamVjdCBQcm9tcHQgKi9cXG5cXG4jbmV3LXByb2plY3QtcHJvbXB0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtcHJvbXB0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcm9tcHQgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuM2VtO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcm9tcHQgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGQtbmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRlYzIyODE7XFxufVxcblxcbiNjYW5jZWwtbmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTcyZDJkOGU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdCBwLFxcbiNpbmJveC1jb250YWluZXIgYnV0dG9uLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4jbWFpbi1jb250ZW50IC5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWV4aXQtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZXhpdC1idG4uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uc2hvdy1tb2RhbCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuXFxuLyogVE9ETyBjYXJkICovXFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtcGFydGlhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhcmQtcGFydGlhbCAuYXV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmF1eC1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmNhcmQtZXh0ZW5kZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FyZC1leHRlbmRlZC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2luYm94LWNvbnRhaW5lciAuaGlnaGxpZ2h0LmFjdGl2ZSxcXG4uaGlnaGxpZ2h0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmJlYmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViJztcbi8vV2lsbCBiZSB1c2luZyBsb2NhbFN0b3JhZ2UgdG8gY2hlY2sgaWYgcHJvamVjdG5hbWUgaXMgYXZhaWJsZS5cblxuXG4vL0Z1bmN0aW9uIHRoYXQgaGFuZGxlcyBhbGwgZXZlbnQgbGlzdGVuZXJzIG9mIHRoZSBtb2RhbHNcbmNvbnN0IGV2ZW50TWFuYWdlck1vZGFsID0gKG1vZGFsLCBwdWJzdWJGdW5jKSA9PiB7XG5cblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG4gICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gzJykuZGF0YXNldC5wcm9qZWN0TmFtZTtcbiAgICAvLyBnZXRzIGFsbCByZXF1aXJlZCBpbnB1dHMgKHRpdGxlLHByaW9yaXR5LGRlc2NyaXB0aW9uKVxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkJykpO1xuXG5cbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1vZGFsXCIpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB3aW5kb3dPbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vV2lsbCB1dGlsaXplIHRoaXMgbGF0ZXIgb24gdGhlIGNsb3NpbmcgdGhlIGFkZCBwcm9qZWN0XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkTm90UmVxdWlyZWRWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIC8vIG9wdGlvbmFsIGlmIGRhdGUgaXMgYWxzbyBpbnB1dCBtYWtlIGl0IGludG8gYW5vdGhlciBmdW5jdGlvblxuICAgICAgICBpZiAoZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3JtSW5wdXRzLnB1c2goZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tGb3JtVmFsaWRpdHkgPSAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgZm9ybUlucHV0cykge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBXaWxsIGNoYW5nZSBsYXRlciBpbnRvIHdhcm5pbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgYWxsIGZpZWxkcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElucHV0VmFsdWVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm9ybUlucHV0cy5yZWR1Y2UoKG9iaiwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIG9ialtpbnB1dC5pZF0gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pXG4gICAgfTtcbiAgICAvL3Nob3cgbW9kYWwga2luZGEgcmVkdW5kYW50XG4gICAgc2hvd01vZGFsKCk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZU1vZGFsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xuXG4gICAgLy9mb3JtIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy9SZW1vdmVzIHRoZSBkZWZhdWx0IHJlZmVyZXNoIG9uIHRoZSBmb3JtIHRhZ1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZE5vdFJlcXVpcmVkVmFsdWVzKCk7XG4gICAgICAgIGlmIChjaGVja0Zvcm1WYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGdldElucHV0VmFsdWVzKCk7XG4gICAgICAgICAgICAvLyBXaWxsIGFkZCB0b2RvIHRvIHByb2plY3QgY29udGFpbmVyICFcbiAgICAgICAgICAgIHB1YnN1YkZ1bmMoeyBkYXRhOiB7Li4uZm9ybURhdGEgfSwgcHJvamVjdDogcHJvamVjdE5hbWUgfSk7XG5cbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH0pXG59O1xuXG5cbmNvbnN0IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUgPSAobmFtZSwgbW9kYWxUaXRsZSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzIGRhdGEtcHJvamVjdC1uYW1lPVwiJHtuYW1lfVwiPiR7bW9kYWxUaXRsZX08L2gzPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1idXR0b25cIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cInRvZG8tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPVwiNFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiBzZWxlY3RlZD5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uIGZvcm09XCJ0b2RvLWZvcm1cIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJmb3JtLXN1Ym1pdC1idG5cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gbW9kYWw7XG59O1xuXG5cbi8vVG9EbyBNb2RhbCBNb2R1bGVcbmNvbnN0IHJlbmRlck5ld1RvRG9Nb2RhbCA9ICh7IG5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBgTmV3IFRhc2sgKCR7bmFtZX0pYDtcbiAgICBjb25zdCBtb2RhbCA9IG1ha2VUb0RvTW9kYWxTdHJ1Y3R1cmUobmFtZSwgbW9kYWxUaXRsZSk7XG4gICAgZXZlbnRNYW5hZ2VyTW9kYWwobW9kYWwsICh7IGRhdGEsIHByb2plY3QgfSkgPT4ge1xuICAgICAgICBwdWJzdWIucHVibGlzaCgnYWRkLXRvZG8nLCB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxufTtcblxuLy9Ub0RvIE1vZGFsIE1vZHVsZVxuY29uc3QgcmVuZGVyVXBkYXRlVG9Eb01vZGFsID0gKHsgbmFtZSwgY29udGFpbmVyLCB0b2RvTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGBVcGRhdGUgVGFzayAoJHtuYW1lfSlgO1xuICAgIGNvbnN0IG1vZGFsID0gbWFrZVRvRG9Nb2RhbFN0cnVjdHVyZShuYW1lLCBtb2RhbFRpdGxlKTtcbiAgICBldmVudE1hbmFnZXJNb2RhbChtb2RhbCwgKHsgZGF0YSwgcHJvamVjdCB9KSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd1cGRhdGUtdG9kbycsIHsgZGF0YSwgcHJvamVjdCwgdG9kb05hbWUgfSk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IFRvRG9VSSA9ICh7IGNvbnRhaW5lciB9KSA9PiB7XG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiAoZGF0ZSkgPyBkYXRlIDogJ25vIGRhdGUnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRvZG8gPSAoeyBwcm9qZWN0TmFtZSwgdG9kbyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSB9ID0gdG9kbztcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnKTtcbiAgICAgICAgY2FyZC5kYXRhc2V0Lmluc2lkZVByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGFydGlhbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRpdGxlXCIgZGF0YS10b2RvLW5hbWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1eC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS10b2RvLWJ0blwiPlg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kaWZ5LXRvZG8tYnRuXCI+ZWRpdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1leHRlbmRlZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtcHJpb3JpdHlcIj4ke3ByaW9yaXR5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICBjb25zdCBwYXJ0aWFsID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wYXJ0aWFsJyk7XG4gICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWV4dGVuZGVkJyk7XG4gICAgICAgIHBhcnRpYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoaWRkZW5FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5yZW1vdmUtdG9kby1idG4nKTtcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3JlbW92ZS10b2RvJywgeyBwcm9qZWN0TmFtZSwgdG9kbyB9KTtcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubW9kaWZ5LXRvZG8tYnRuJyk7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJVcGRhdGVUb0RvTW9kYWwoeyBuYW1lOiBwcm9qZWN0TmFtZSwgY29udGFpbmVyLCB0b2RvTmFtZTogdG9kby50aXRsZSB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlckludmFsaWRUb2RvID0gKHsgdGl0bGUgfSkgPT4ge1xuICAgICAgICBhbGVydChgXCIke3RpdGxlfVwiIGlzIGFscmVhZHkgYmVlbiB1c2VkISB1c2UgZGlmZmVyZW50IHRpdGxlIWApXG5cbiAgICB9O1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVuZGVyLXRvZG8nLCByZW5kZXJUb2RvKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdpbnZhbGlkLXRvZG8nLCByZW5kZXJJbnZhbGlkVG9kbyk7XG59O1xuXG5cblxuXG5cblxuY29uc3QgUHJvamVjdFVJID0gKHsgcm9vdCwgdG9kb0NvbnRhaW5lciB9KSA9PiB7XG5cbiAgICBjb25zdCBtYWtlVG9Eb0J0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1zcXVhcmVcIj48L2k+IEFkZCBUYXNrYDtcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWJ0bicpO1xuICAgICAgICByZXR1cm4gYWRkQnRuO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDb250ZW50cyA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgYDtcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZUFjdGl2ZVN0YXR1cyA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENsaWNrYWJsZUJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKSk7XG4gICAgICAgIGFsbENsaWNrYWJsZUJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBlbGVtZW50LmRhdGFzZXQubmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvblByb2plY3RTaW5nbGVDbGljayA9IChuYW1lKSA9PiB7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRzKCk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZVN0YXR1cyhuYW1lKTtcbiAgICAgICAgcmVuZGVyQnRuKHsgbmFtZSB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEkgd2lsbCBub3cgZmV0Y2ggdG9kb3MgZnJvbSAke3RhcmdldH1gKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3QtY2xpY2snLCB7IG5hbWUgfSk7XG4gICAgfTtcblxuXG4gICAgLy8gY29uc3Qgb25Qcm9qZWN0RG91YmxlQ2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnSSBhbSBkb3VibGUgY2xpY2snKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuICAgIC8vIH07XG5cblxuICAgIGNvbnN0IHJlbmRlckJ0biA9ICh7IG5hbWUsIGNvbnRhaW5lciA9IHRvZG9Db250YWluZXIgfSkgPT4ge1xuICAgICAgICAvLyBXaWxsIGFsd2F5cyBydW4gc2luY2Ugd2lsbCB3aXBlIG1haW4gY29udGVudCBmb3IgZXZlcnkgY2xpY2tcbiAgICAgICAgaWYgKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidG4gPSBtYWtlVG9Eb0J0bihuYW1lKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ21ha2UtbW9kYWwnLCB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIC8vcHVic3ViIHRvIHJlbW92ZSBwcm9qZWN0IG9uIHRoZSBwcm9qZWN0IGxpc3RcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVByb2plY3RFbGVtZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWUgXCIgZGF0YS1uYW1lPVwiJHtuYW1lfVwiID48aSBjbGFzcz1cImZhcyBmYS10YXNrc1wiPjwvaT4gJHtuYW1lfTwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtZXhpdC1idG5cIj54PC9pPjwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH07XG5cblxuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdERpdiA9ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbWFrZVByb2plY3RFbGVtZW50KG5hbWUpXG4gICAgICAgIGNvbnN0IGV4aXRCdG4gPSBuZXdQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWV4aXQtYnRuJyk7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaEVsZW1lbnQgPSBuZXdQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblxuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGV4aXRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGV4aXRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGV4aXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIG9uUHJvamVjdFNpbmdsZUNsaWNrKHRhcmdldC5kYXRhc2V0Lm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcGFyYWdyYXBoRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uUHJvamVjdERvdWJsZUNsaWNrKVxuICAgICAgICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW1vdmUtcHJvamVjdCcsIHsgbmFtZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgLy93aWwgZWRpdCBsYXRlclxuICAgICAgICByZW5kZXJCdG4oeyBuYW1lIH0pO1xuICAgIH07XG4gICAgcHVic3ViLnN1YnNjcmliZSgnZGVmYXVsdC1wcm9qZWN0Jywgb25Qcm9qZWN0U2luZ2xlQ2xpY2spO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2FkZC1uZXctcHJvamVjdCcsIHJlbmRlclByb2plY3REaXYpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3JlbW92ZS1wcm9qZWN0JywgcmVtb3ZlQ29udGVudHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ21ha2UtbW9kYWwnLCByZW5kZXJOZXdUb0RvTW9kYWwpO1xuXG59O1xuXG5cblxuXG4vL0hhbmRsZXMgdGhlIFBvcHVwIFxuY29uc3QgcHJvamVjdElucHV0VUkgPSBmdW5jdGlvbih7IERPTWJ0biwgRE9NbGlzdCB9KSB7XG4gICAgY29uc3QgbWFpbkJ0biA9IERPTWJ0bi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBjb25zdCBoaWRlQnRuID0gKGJ0bikgPT4geyBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfTtcbiAgICBjb25zdCBzaG93QnRuID0gKGJ0bikgPT4geyBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgfTtcblxuICAgIC8vIENoZWNrcyB0aGUgZGF0YSBhdHRyaWJ1dGUgb2YgYWxsIGVsZW1zIG9mICBwcm9qZWN0IGxpc3QgXG4gICAgY29uc3QgaXNQcm9qZWN0TmFtZVZhbGlkID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaXNBdmFpbGFibGUgPSBET01saXN0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke25hbWV9XCJdYCk7XG4gICAgICAgIC8vI1dpbGwgQWRkIGxhdGVyOiB1c2UgQVBJIHRvIGNoZWNrIFxuICAgICAgICAvL2xvY2FsU3RvcmFnZSBpZiBwcm9wZXJ0eSBpcyBhbHJlYWR5IHVzZWQuXG4gICAgICAgIHJldHVybiAhIWlzQXZhaWxhYmxlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1N0clZhbGlkaXR5ID0gKHN0cikgPT4ge1xuICAgICAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgYSB2YWxpZCBwcm9qZWN0IG5hbWUuJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvamVjdE5hbWVWYWxpZChzdHIpKSB7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBOYW1lIG11c3QgYmUgZGlmZmVyZW50JylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL0FkZCBhbm90aGVyIGNvbmRpdGlvbmlhbCBpZiB0aGVyZSBpcyBhIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBpZihsb2NhbFN0b3JhZ2UpIC4uLlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnSXMgdmFsaWQhJywgc3RyKSAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlcklucHV0UHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gJ25ldy1wcm9qZWN0LXByb21wdCdcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1uZXctcHJvamVjdFwiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtbmV3LXByb2plY3RcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgY29uc3QgYWRkQnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3LXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtbmV3LXByb2plY3QnKTtcblxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBkaXYucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSBjaGVja1N0clZhbGlkaXR5KGlucHV0VGV4dCk7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBzaG93QnRuKG1haW5CdG4pO1xuICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGQtbmV3LXByb2plY3QnLCB7IG5hbWU6IGlucHV0VGV4dCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgc2hvd0J0bihtYWluQnRuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIERPTWJ0bi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgaW5wdXQgZGl2IGlmIHVzZXIgY2xpY2tlZCBvdXRzaWRlIHRoZSBkaXZcblxuICAgIH1cbiAgICBjb25zdCBvbkFkZFByb2plY3QgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBoaWRlQnRuKHRhcmdldCk7XG4gICAgICAgIHJlbmRlcklucHV0UHJvamVjdCgpO1xuICAgIH1cblxuICAgIG1haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFkZFByb2plY3QpO1xuXG5cblxufVxuXG5cbmV4cG9ydCB7IHByb2plY3RJbnB1dFVJLCBQcm9qZWN0VUksIFRvRG9VSSB9IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi90b2RvJ1xuXG5cbi8vTG9jYWwgU3RvcmFnZSBTdHVmZlxuY29uc3Qgc2F2ZWRQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdCcpO1xuICAgIGlmICghZGVmYXVsdFByb2plY3QpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHQnLCBKU09OLnN0cmluZ2lmeShuZXcgUHJvamVjdCgnZGVmYXVsdCcpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IEpTT05Qcm9qZWN0ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT05Qcm9qZWN0KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0KVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbXlDb250YWluZXIgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgW3Byb2plY3ROYW1lLCBwcm9qZWN0XSBvZiBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICBwcm9qZWN0ID0gSlNPTi5wYXJzZShwcm9qZWN0KTtcbiAgICAgICAgICAgIG15Q29udGFpbmVyW3Byb2plY3ROYW1lXSA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgWywgdG9kb09ial0gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdC5jb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKHRvZG9PYmopO1xuICAgICAgICAgICAgICAgIG15Q29udGFpbmVyW3Byb2plY3ROYW1lXS5hZGQobmV3VG9kbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXlDb250YWluZXI7XG4gICAgfTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2ZldGNoLWxvY2FsLXN0b3JhZ2UnLCBnZXRQcm9qZWN0cylcblxuICAgIHJldHVybiB7IGdldFByb2plY3RzLCB1cGRhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH1cbn0pKCk7XG5cblxuY29uc3QgaW5pdGlhbGl6ZVN0b3JhZ2UgPSBmdW5jdGlvbih7IGluYm94LCB0b2RvQ29udGFpbmVyIH0pIHtcblxuICAgIGxldCBjb250YWluZXI7XG5cbiAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICBjb250YWluZXIgPSBzYXZlZFByb2plY3RzLmdldFByb2plY3RzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvL2lmIHRoZXJlIGlzIG5vIGxvY2FsIGZ1bmN0aW9uIGNhbGxlZCBzYXZlZFByb2plY3RzXG4gICAgICAgIGNvbnRhaW5lciA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG5ldyBQcm9qZWN0KCdkZWZhdWx0JylcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vICNUT0RPIE1vdmUgdG8gYXBwcm9wcmlhdGUgbW9kdWxlXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBwdWJzdWIucHVibGlzaCgnZGVmYXVsdC1wcm9qZWN0JywgdGFyZ2V0LmRhdGFzZXQubmFtZSk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoeyBuYW1lOiBwcm9qZWN0TmFtZSB9KSA9PiB7XG4gICAgICAgIC8vIGhtbSBjaGVja3MgaWYgdGhlcmUgaXMgc2FtZSBuYW1lXG4gICAgICAgIGlmIChjb250YWluZXJbcHJvamVjdE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXJbcHJvamVjdE5hbWVdID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAvL1VwZGF0ZXMgdGhlIGtleSBpbiB0aGUgbG9jYWwgU3RvcmFnZVxuICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgc2F2ZWRQcm9qZWN0cy51cGRhdGVQcm9qZWN0KGNvbnRhaW5lcltwcm9qZWN0TmFtZV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXJbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgc2F2ZWRQcm9qZWN0cy5yZW1vdmVQcm9qZWN0KG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGNvbnRhaW5lcltuYW1lXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXJbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXJbbmFtZV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgcHVic3ViLnN1YnNjcmliZSgndXBkYXRlLXRvZG8nLCAoeyBkYXRhLCBwcm9qZWN0LCB0b2RvTmFtZSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdldFByb2plY3QocHJvamVjdCkucmVtb3ZlKHRvZG9OYW1lKSk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb0RvID0gbmV3IFRvRG8oZGF0YSk7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBnZXRQcm9qZWN0KHByb2plY3QpLmFkZCh1cGRhdGVkVG9Ebyk7XG4gICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICBzYXZlZFByb2plY3RzLnVwZGF0ZVByb2plY3QoZ2V0UHJvamVjdChwcm9qZWN0KSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZWQgb24gbG9jYWxTdG9yYWdlJylcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgICAgLy8gbXVzdCB1c2UgZGVmYXVsdCBwcm9qZWN0IC4gQnV0IHdlIGNhbid0IGdldCBwcm9qZWN0IGJ1dHRvblxuICAgICAgICBwdWJzdWIucHVibGlzaCgnZGVmYXVsdC1wcm9qZWN0JywgcHJvamVjdCk7XG5cbiAgICB9KTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2FkZC10b2RvJywgKHsgZGF0YSwgcHJvamVjdCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG15UHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGlmIChteVByb2plY3QpIHtcbiAgICAgICAgICAgIC8vZXJyb3IgaGFuZGxpbmcgZm9yIGJsb2NraW5nIHNhbWUgbmFtZSB0b2RvXG4gICAgICAgICAgICBpZiAobXlQcm9qZWN0LmdldChkYXRhLnRpdGxlKSkge1xuICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdpbnZhbGlkLXRvZG8nLCB7IHRpdGxlOiBkYXRhLnRpdGxlIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgYmxvY2tlZCEnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oZGF0YSlcbiAgICAgICAgICAgIG15UHJvamVjdC5hZGQobmV3VG9kbyk7XG4gICAgICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHNhdmVkUHJvamVjdHMudXBkYXRlUHJvamVjdChteVByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3JlbmRlci10b2RvJywgeyBwcm9qZWN0TmFtZTogbXlQcm9qZWN0Lm5hbWUsIHRvZG86IG5ld1RvZG8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVtb3ZlLXRvZG8nLCAoeyBwcm9qZWN0TmFtZSwgdG9kbyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBzYXZlZFByb2plY3RzLnVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdC1jbGljaycsICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChuYW1lKTtcbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0LmdldEFsbCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGFsbFRhc2tzKS5sZW5ndGggPT09IDAgJiYgYWxsVGFza3MuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0kgaGF2ZSBubyB0YXNrcyEnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYWxsVGFza3MpKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgncmVuZGVyLXRvZG8nLCB7IHByb2plY3ROYW1lOiBuYW1lLCB0b2RvOiB2YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdmZXRjaC1wcm9qZWN0cycsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5XSBvZiBPYmplY3QuZW50cmllcyhjb250YWluZXIpKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcpIGNvbnRpbnVlXG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnYWRkLW5ldy1wcm9qZWN0JywgeyBuYW1lOiBrZXkgfSlcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdhZGQtbmV3LXByb2plY3QnLCBhZGRQcm9qZWN0KTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdyZW1vdmUtcHJvamVjdCcsIHJlbW92ZVByb2plY3QpO1xuICAgIC8vcmVuZGVycyB0aGUgaW5ib3ggcHJvamVjdCBhdCBET01Mb2FkXG4gICAgcHVic3ViLnB1Ymxpc2goJ2RlZmF1bHQtcHJvamVjdCcsIGluYm94LmRhdGFzZXQubmFtZSk7XG4gICAgcHVic3ViLnB1Ymxpc2goJ2ZldGNoLXByb2plY3RzJylcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdFxuICAgIH1cbn07XG5cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVN0b3JhZ2UgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBuYW1lID0gdGhpcy5uYW1lO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRhaW5lciA9IHt9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJba2V5XTtcbiAgICB9XG4gICAgcmVwbGFjZShvYmopIHtcbiAgICAgICAgaWYgKCEhdGhpcy5jb250YWluZXJbb2JqLnRpdGxlXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyW29iai50aXRsZV0gPSBvYmo7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGlmICghIXRoaXMuY29udGFpbmVyW29iai50aXRsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lcltvYmoudGl0bGVdID0gb2JqO1xuICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRhaW5lcltrZXldO1xuICAgICAgICByZXR1cm4gLS10aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIHN0YXRpYyBzdWJzY3JpYmVycyA9IHt9O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIHN0YXRpYyBzdWJzY3JpYmUodG9waWMsIGNiKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW3RvcGljXSkpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10ucHVzaChjYik7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10ubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHB1Ymxpc2godG9waWMsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1t0b3BpY10uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSB9KSB7XG4gICAgICAgIC8vZGF0ZSBtYXkgYmUgdW5kZWZpbmVkXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHByb2plY3RJbnB1dFVJLCBQcm9qZWN0VUksIFRvRG9VSSB9IGZyb20gJy4vVUkuanMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpO1xuXG4gICAgVG9Eb1VJKHsgY29udGFpbmVyOiB0b2RvQ29udGFpbmVyIH0pO1xuXG4gICAgUHJvamVjdFVJKHtcbiAgICAgICAgcm9vdDogcHJvamVjdENvbnRhaW5lcixcbiAgICAgICAgdG9kb0NvbnRhaW5lclxuICAgIH0pXG4gICAgaW5pdGlhbGl6ZVN0b3JhZ2UoeyBpbmJveCwgdG9kb0NvbnRhaW5lciB9KTtcblxuICAgIHByb2plY3RJbnB1dFVJKHtcbiAgICAgICAgRE9NYnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1idG4tY29udGFpbmVyJyksXG4gICAgICAgIERPTWxpc3Q6IHByb2plY3RDb250YWluZXIsXG4gICAgfSk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==