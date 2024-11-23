"use strict";
(self["webpackChunkjupyter_hover_tooltip"] = self["webpackChunkjupyter_hover_tooltip"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const disposable_1 = __webpack_require__(/*! @lumino/disposable */ "webpack/sharing/consume/default/@lumino/disposable");
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const rendermime_interfaces_1 = __webpack_require__(/*! @jupyterlab/rendermime-interfaces */ "webpack/sharing/consume/default/@jupyterlab/rendermime-interfaces");
const PLUGIN_ID = 'jupyter-hover-tooltip:plugin';
exports["default"] = {
    id: PLUGIN_ID,
    autoStart: true,
    activate: (app) => {
        app.docRegistry.addWidgetExtension('Notebook', {
            createNew: (notebook) => {
                function processCell(cell) {
                    if (cell instanceof cells_1.MarkdownCell) {
                        const links = cell.node.getElementsByTagName('a');
                        Array.from(links).forEach(link => {
                            if (link.href.endsWith('.py')) {
                                link.addEventListener('mouseover', (e) => __awaiter(this, void 0, void 0, function* () {
                                    const response = yield fetch(link.href);
                                    const content = yield response.text();
                                    // Create tooltip
                                    const tooltip = document.createElement('div');
                                    tooltip.className = 'jp-tooltip';
                                    tooltip.style.position = 'absolute';
                                    tooltip.style.zIndex = '1000';
                                    tooltip.innerHTML = `<pre>${content}</pre>`;
                                    document.body.appendChild(tooltip);
                                }));
                            }
                        });
                    }
                }
                notebook.model.cells.changed.connect((_, args) => {
                    if (args.type === 'add') {
                        processCell(notebook.widgets[args.newIndex]);
                    }
                });
                return new disposable_1.DisposableDelegate(() => { });
            }
        });
    }
};


/***/ })

}]);
//# sourceMappingURL=lib_index_js.02da860f50f2e5c6840e.js.map