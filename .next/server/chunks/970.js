exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 5522:
/***/ ((module) => {

// Exports
module.exports = {
	"input-range": "input-range_input-range__QBkD1"
};


/***/ }),

/***/ 1345:
/***/ ((module) => {

// Exports
module.exports = {
	"window-header": "settings_window-header__w7XTu",
	"window-header-title": "settings_window-header-title__fmVkZ",
	"window-header-main-title": "settings_window-header-main-title__7Ns_y",
	"window-header-sub-title": "settings_window-header-sub-title__KdcZf",
	"window-actions": "settings_window-actions__Yr5r3",
	"window-action-button": "settings_window-action-button__qv6O1",
	"settings": "settings_settings__dC7Vo",
	"settings-title": "settings_settings-title__2ADwu",
	"settings-sub-title": "settings_settings-sub-title__m9yD8",
	"avatar": "settings_avatar__yApsT",
	"password-input": "settings_password-input__Y6OWC",
	"password-eye": "settings_password-eye__yIfSb"
};


/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Settings": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/emoji-picker-react/dist/index.js
var dist = __webpack_require__(480);
// EXTERNAL MODULE: ./app/components/settings.module.scss
var settings_module = __webpack_require__(1345);
var settings_module_default = /*#__PURE__*/__webpack_require__.n(settings_module);
;// CONCATENATED MODULE: ./app/icons/reload.svg
var _defs, _mask;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgReload = function SvgReload(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _defs || (_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "reload_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, _mask || (_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "reload_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#reload_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#reload_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(14 2.667)",
    d: "M0 0v5.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 8)",
    d: "M0 0v5.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 2)",
    d: "M12.003 6a6.005 6.005 0 0 0-10.32-4.17M0 6a6.005 6.005 0 0 0 10.17 4.32"
  }))));
};
/* harmony default export */ const reload = (SvgReload);
// EXTERNAL MODULE: ./app/icons/close.svg
var icons_close = __webpack_require__(4299);
;// CONCATENATED MODULE: ./app/icons/clear.svg
var clear_defs, clear_mask;
function clear_extends() { clear_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return clear_extends.apply(this, arguments); }

var SvgClear = function SvgClear(props) {
  return /*#__PURE__*/react_.createElement("svg", clear_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), clear_defs || (clear_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "clear_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, clear_mask || (clear_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "clear_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#clear_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#clear_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2.667 5)",
    d: "M1 9.67h8.67l1-9.67H0l1 9.67Z"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(6.667 8.334)",
    d: "M0 0v3.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(9.334 8.333)",
    d: "M0 0v3.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(4 1)",
    d: "m0 4 5.44-4L8 4"
  }))));
};
/* harmony default export */ const clear = (SvgClear);
;// CONCATENATED MODULE: ./app/icons/eye.svg
var _path;
function eye_extends() { eye_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return eye_extends.apply(this, arguments); }

var SvgEye = function SvgEye(props) {
  return /*#__PURE__*/React.createElement("svg", eye_extends({
    width: 800,
    height: 800,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.301 15.577C4.778 14.268 3.691 12.773 3.18 12c.51-.773 1.598-2.268 3.121-3.577C7.874 7.072 9.816 6 12 6c2.184 0 4.126 1.072 5.699 2.423 1.523 1.309 2.61 2.804 3.121 3.577-.51.773-1.598 2.268-3.121 3.577C16.126 16.928 14.184 18 12 18c-2.184 0-4.126-1.072-5.699-2.423ZM12 4C9.148 4 6.757 5.395 4.998 6.906c-1.765 1.517-2.99 3.232-3.534 4.064a1.876 1.876 0 0 0 0 2.06c.544.832 1.769 2.547 3.534 4.064C6.758 18.605 9.148 20 12 20c2.852 0 5.243-1.395 7.002-2.906 1.765-1.517 2.99-3.232 3.534-4.064.411-.628.411-1.431 0-2.06-.544-.832-1.769-2.547-3.534-4.064C17.242 5.395 14.852 4 12 4Zm-2 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    fill: "#000"
  })));
};
/* harmony default export */ const eye = ((/* unused pure expression or super */ null && (SvgEye)));
;// CONCATENATED MODULE: ./app/icons/eye-off.svg
var eye_off_path;
function eye_off_extends() { eye_off_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return eye_off_extends.apply(this, arguments); }

var SvgEyeOff = function SvgEyeOff(props) {
  return /*#__PURE__*/React.createElement("svg", eye_off_extends({
    width: 800,
    height: 800,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), eye_off_path || (eye_off_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.707 5.707a1 1 0 0 0-1.414-1.414l-4.261 4.26a4 4 0 0 0-5.478 5.478l-4.261 4.262a1 1 0 1 0 1.414 1.414l4.261-4.26a4 4 0 0 0 5.478-5.478l4.261-4.262Zm-7.189 4.36a2 2 0 0 0-2.45 2.45l2.45-2.45Zm-1.036 3.865 2.45-2.45a2 2 0 0 1-2.45 2.45Zm4.283-9.111C14.63 4.32 13.367 4 12 4 9.148 4 6.757 5.395 4.998 6.906c-1.765 1.517-2.99 3.232-3.534 4.064a1.876 1.876 0 0 0 0 2.06 20.304 20.304 0 0 0 2.748 3.344l1.414-1.414A18.315 18.315 0 0 1 3.18 12c.51-.773 1.598-2.268 3.121-3.577C7.874 7.072 9.816 6 12 6a7.06 7.06 0 0 1 2.22.367l1.545-1.546ZM12 18a7.06 7.06 0 0 1-2.22-.367L8.236 19.18c1.136.5 2.398.821 3.765.821 2.852 0 5.243-1.395 7.002-2.906 1.765-1.517 2.99-3.232 3.534-4.064.411-.628.411-1.431 0-2.06a20.303 20.303 0 0 0-2.748-3.344L18.374 9.04A18.312 18.312 0 0 1 20.82 12c-.51.773-1.598 2.268-3.121 3.577C16.126 16.928 14.184 18 12 18Z",
    fill: "#000"
  })));
};
/* harmony default export */ const eye_off = ((/* unused pure expression or super */ null && (SvgEyeOff)));
// EXTERNAL MODULE: ./app/components/ui-lib.tsx + 1 modules
var ui_lib = __webpack_require__(5818);
// EXTERNAL MODULE: ./app/components/button.tsx
var components_button = __webpack_require__(45);
// EXTERNAL MODULE: ./app/store/index.ts + 2 modules
var store = __webpack_require__(6388);
// EXTERNAL MODULE: ./app/components/chat.tsx + 5 modules
var chat = __webpack_require__(3728);
// EXTERNAL MODULE: ./app/locales/index.ts + 3 modules
var locales = __webpack_require__(5148);
// EXTERNAL MODULE: ./app/utils.ts
var utils = __webpack_require__(172);
// EXTERNAL MODULE: ./app/store/prompt.ts
var store_prompt = __webpack_require__(5273);
// EXTERNAL MODULE: ./app/requests.ts
var requests = __webpack_require__(6154);
// EXTERNAL MODULE: ./app/components/error.tsx + 1 modules
var error = __webpack_require__(6667);
// EXTERNAL MODULE: ./app/components/input-range.module.scss
var input_range_module = __webpack_require__(5522);
var input_range_module_default = /*#__PURE__*/__webpack_require__.n(input_range_module);
;// CONCATENATED MODULE: ./app/components/input-range.tsx



function InputRange({ onChange , title , value , className , min , max , step  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (input_range_module_default())["input-range"] + ` ${className ?? ""}`,
        children: [
            title || value,
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                title: title,
                value: value,
                min: min,
                max: max,
                step: step,
                onChange: onChange
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/settings.tsx



















function SettingItem(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* ListItem */.HC, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default())["settings-title"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: props.title
                    }),
                    props.subTitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (settings_module_default())["settings-sub-title"],
                        children: props.subTitle
                    })
                ]
            }),
            props.children
        ]
    });
}
function PasswordInput(props) {
    const [visible, setVisible] = useState(false);
    function changeVisibility() {
        setVisible(!visible);
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: styles["password-input"],
        children: [
            /*#__PURE__*/ _jsx(IconButton, {
                icon: visible ? /*#__PURE__*/ _jsx(EyeIcon, {}) : /*#__PURE__*/ _jsx(EyeOffIcon, {}),
                onClick: changeVisibility,
                className: styles["password-eye"]
            }),
            /*#__PURE__*/ _jsx("input", {
                ...props,
                type: visible ? "text" : "password"
            })
        ]
    });
}
function Settings(props) {
    const [showEmojiPicker, setShowEmojiPicker] = (0,react_.useState)(false);
    const [config, updateConfig, resetConfig, clearAllData, clearSessions] = (0,store/* useChatStore */.aK)((state)=>[
            state.config,
            state.updateConfig,
            state.resetConfig,
            state.clearAllData,
            state.clearSessions
        ]);
    const updateStore = (0,store/* useUpdateStore */.u2)();
    const [checkingUpdate, setCheckingUpdate] = (0,react_.useState)(false);
    const currentId = (0,utils/* getCurrentVersion */.w1)();
    const remoteId = updateStore.remoteId;
    const hasNewVersion = currentId !== remoteId;
    function checkUpdate(force = false) {
        setCheckingUpdate(true);
        updateStore.getLatestCommitId(force).then(()=>{
            setCheckingUpdate(false);
        });
    }
    const [usage, setUsage] = (0,react_.useState)();
    const [loadingUsage, setLoadingUsage] = (0,react_.useState)(false);
    function checkUsage() {
        setLoadingUsage(true);
        (0,requests/* requestUsage */.b6)().then((res)=>setUsage(res)).finally(()=>{
            setLoadingUsage(false);
        });
    }
    const accessStore = (0,store/* useAccessStore */._X)();
    const enabledAccessControl = (0,react_.useMemo)(()=>accessStore.enabledAccessControl(), // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const promptStore = (0,store_prompt/* usePromptStore */.f5)();
    const builtinCount = store_prompt/* SearchService.count.builtin */.oD.count.builtin;
    const customCount = promptStore.prompts.size ?? 0;
    const showUsage = !!accessStore.token || !!accessStore.accessCode;
    (0,react_.useEffect)(()=>{
        checkUpdate();
        showUsage && checkUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react_.useEffect)(()=>{
        const keydownEvent = (e)=>{
            if (e.key === "Escape") {
                props.closeSettings();
            }
        };
        document.addEventListener("keydown", keydownEvent);
        return ()=>{
            document.removeEventListener("keydown", keydownEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(error/* ErrorBoundary */.S, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default())["window-header"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (settings_module_default())["window-header-title"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (settings_module_default())["window-header-main-title"],
                                children: locales/* default.Settings.Title */.ZP.Settings.Title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (settings_module_default())["window-header-sub-title"],
                                children: locales/* default.Settings.SubTitle */.ZP.Settings.SubTitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (settings_module_default())["window-actions"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (settings_module_default())["window-action-button"],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(clear, {}),
                                    onClick: ()=>{
                                        const confirmed = window.confirm(`${locales/* default.Settings.Actions.ConfirmClearAll.Confirm */.ZP.Settings.Actions.ConfirmClearAll.Confirm}`);
                                        if (confirmed) {
                                            clearSessions();
                                        }
                                    },
                                    bordered: true,
                                    title: locales/* default.Settings.Actions.ClearAll */.ZP.Settings.Actions.ClearAll
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (settings_module_default())["window-action-button"],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload, {}),
                                    onClick: ()=>{
                                        const confirmed = window.confirm(`${locales/* default.Settings.Actions.ConfirmResetAll.Confirm */.ZP.Settings.Actions.ConfirmResetAll.Confirm}`);
                                        if (confirmed) {
                                            resetConfig();
                                        }
                                    },
                                    bordered: true,
                                    title: locales/* default.Settings.Actions.ResetAll */.ZP.Settings.Actions.ResetAll
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (settings_module_default())["window-action-button"],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_close/* default */.Z, {}),
                                    onClick: props.closeSettings,
                                    bordered: true,
                                    title: locales/* default.Settings.Actions.Close */.ZP.Settings.Actions.Close
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default()).settings,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                                title: locales/* default.Settings.Avatar */.ZP.Settings.Avatar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Popover */.J2, {
                                    onClose: ()=>setShowEmojiPicker(false),
                                    content: /*#__PURE__*/ jsx_runtime_.jsx(dist["default"], {
                                        lazyLoadEmojis: true,
                                        theme: dist.Theme.AUTO,
                                        getEmojiUrl: utils/* getEmojiUrl */.qc,
                                        onEmojiClick: (e)=>{
                                            updateConfig((config)=>config.avatar = e.unified);
                                            setShowEmojiPicker(false);
                                        }
                                    }),
                                    open: showEmojiPicker,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (settings_module_default()).avatar,
                                        onClick: ()=>setShowEmojiPicker(true),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(chat/* Avatar */.qE, {
                                            role: "user"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                                title: locales/* default.Settings.SendKey */.ZP.Settings.SendKey,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                    value: config.submitKey,
                                    onChange: (e)=>{
                                        updateConfig((config)=>config.submitKey = e.target.value);
                                    },
                                    children: Object.values(store/* SubmitKey */.mQ).map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: v,
                                            children: v
                                        }, v))
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* ListItem */.HC, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (settings_module_default())["settings-title"],
                                        children: locales/* default.Settings.Theme */.ZP.Settings.Theme
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        value: config.theme,
                                        onChange: (e)=>{
                                            updateConfig((config)=>config.theme = e.target.value);
                                        },
                                        children: Object.values(store/* Theme */.Q2).map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: v,
                                                children: v
                                            }, v))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                                title: locales/* default.Settings.Lang.Name */.ZP.Settings.Lang.Name,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                    value: (0,locales/* getLang */.VQ)(),
                                    onChange: (e)=>{
                                        (0,locales/* changeLang */.t4)(e.target.value);
                                    },
                                    children: locales/* AllLangs.map */.DC.map((lang)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: lang,
                                            children: locales/* default.Settings.Lang.Options */.ZP.Settings.Lang.Options[lang]
                                        }, lang))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                                title: locales/* default.Settings.FontSize.Title */.ZP.Settings.FontSize.Title,
                                subTitle: locales/* default.Settings.FontSize.SubTitle */.ZP.Settings.FontSize.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InputRange, {
                                    title: `${config.fontSize ?? 14}px`,
                                    value: config.fontSize,
                                    min: "12",
                                    max: "18",
                                    step: "1",
                                    onChange: (e)=>updateConfig((config)=>config.fontSize = Number.parseInt(e.currentTarget.value))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                                title: locales/* default.Settings.TightBorder */.ZP.Settings.TightBorder,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.tightBorder,
                                    onChange: (e)=>updateConfig((config)=>config.tightBorder = e.currentTarget.checked)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                                title: locales/* default.Settings.SendPreviewBubble */.ZP.Settings.SendPreviewBubble,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.sendPreviewBubble,
                                    onChange: (e)=>updateConfig((config)=>config.sendPreviewBubble = e.currentTarget.checked)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* List */.aV, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SettingItem, {
                            title: locales/* default.Settings.Prompt.Disable.Title */.ZP.Settings.Prompt.Disable.Title,
                            subTitle: locales/* default.Settings.Prompt.Disable.SubTitle */.ZP.Settings.Prompt.Disable.SubTitle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                checked: config.disablePromptHint,
                                onChange: (e)=>updateConfig((config)=>config.disablePromptHint = e.currentTarget.checked)
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;