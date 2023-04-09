"use strict";
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 9928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Markdown": () => (/* binding */ Markdown),
/* harmony export */   "PreCode": () => (/* binding */ PreCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2711);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4095);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1645);
/* harmony import */ var remark_breaks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(415);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9056);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6231);
/* harmony import */ var rehype_highlight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(172);










function PreCode(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "copy-code-button",
                onClick: ()=>{
                    if (ref.current) {
                        const code = ref.current.innerText;
                        (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .copyToClipboard */ .vQ)(code);
                    }
                }
            }),
            props.children
        ]
    });
}
const useLazyLoad = (ref)=>{
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect();
            }
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, [
        ref
    ]);
    return isIntersecting;
};
function Markdown(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4__/* .ReactMarkdown */ .D, {
        remarkPlugins: [
            remark_math__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            remark_gfm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            remark_breaks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
        ],
        rehypePlugins: [
            rehype_katex__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            [
                rehype_highlight__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                {
                    detect: false,
                    ignoreMissing: true
                }
            ]
        ],
        components: {
            pre: PreCode
        },
        linkTarget: "_blank",
        children: props.content
    });
}


/***/ })

};
;