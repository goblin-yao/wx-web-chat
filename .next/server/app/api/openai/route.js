"use strict";
(() => {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 3449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "handlers": () => (/* reexport */ route_namespaceObject),
  "headerHooks": () => (/* reexport */ headers),
  "requestAsyncStorage": () => (/* reexport */ request_async_storage.requestAsyncStorage),
  "resolvedPagePath": () => (/* binding */ resolvedPagePath),
  "serverHooks": () => (/* reexport */ hooks_server_context),
  "staticGenerationAsyncStorage": () => (/* reexport */ static_generation_async_storage.staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* reexport */ static_generation_bailout.staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/openai/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET),
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(7376);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(139);
;// CONCATENATED MODULE: ./app/api/common.ts
const OPENAI_URL = "https://api.openai.com";
const BASE_URL = process.env.BASE_URL ?? OPENAI_URL;
async function requestOpenai(req) {
    const apiKey = req.headers.get("token");
    const openaiPath = req.headers.get("path");
    console.log("[Proxy] ", openaiPath);
    return fetch(`${BASE_URL}/${openaiPath}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        method: req.method,
        body: req.body
    });
}

;// CONCATENATED MODULE: ./app/api/openai/route.ts


async function makeRequest(req) {
    try {
        const api = await requestOpenai(req);
        const res = new server.NextResponse(api.body);
        res.headers.set("Content-Type", "application/json");
        res.headers.set("Cache-Control", "no-cache");
        return res;
    } catch (e) {
        console.error("[OpenAI] ", req.body, e);
        return server.NextResponse.json({
            error: true,
            msg: JSON.stringify(e)
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    return makeRequest(req);
}
async function GET(req) {
    return makeRequest(req);
}

// EXTERNAL MODULE: ./node_modules/next/dist/client/components/static-generation-async-storage.js
var static_generation_async_storage = __webpack_require__(9029);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/hooks-server-context.js
var hooks_server_context = __webpack_require__(4065);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/static-generation-bailout.js
var static_generation_bailout = __webpack_require__(224);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/headers.js
var headers = __webpack_require__(5153);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/request-async-storage.js
var request_async_storage = __webpack_require__(2458);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Froute&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Froute.ts&appDir=%2FUsers%2Fjunping.yao%2Fworkspace_others%2Fai-chat%2Fwx-web-chat%2Fapp&appPaths=%2Fapi%2Fopenai%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=!

    

    
    const resolvedPagePath = "/Users/junping.yao/workspace_others/ai-chat/wx-web-chat/app/api/openai/route.ts"

    
  
    
    
    
    
    
  
    
  

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [359,360], () => (__webpack_exec__(3449)));
module.exports = __webpack_exports__;

})();