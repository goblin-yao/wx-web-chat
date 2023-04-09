(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 22:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fjunping_yao_2Fworkspace_others_2Fai_chat_2Fwx_web_chat_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2FwaVxcL29wZW5haSguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii86bmV4dERhdGEoX25leHQvZGF0YS9bXi9dezEsfSk_2FL2FwaS9vcGVuYWkoLmpzb24pPyJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2FwaVxcL2NoYXQtc3RyZWFtKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiLzpuZXh0RGF0YShfbmV4dC9kYXRhL1teL117MSx9KT8vYXBpL2NoYXQtc3RyZWFtKC5qc29uKT8ifV0_3D_)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page  }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
}

//# sourceMappingURL=error.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/utils.js
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (v !== undefined) {
                headers.append(key, v);
            }
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    if (headers) {
        for (const [key, value] of headers.entries()){
            result[key] = value;
            if (key.toLowerCase() === "set-cookie") {
                result[key] = splitCookiesString(value);
            }
        }
    }
    return result;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    [waitUntilSymbol] = [];
    [passThroughSymbol] = false;
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){}
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}

//# sourceMappingURL=fetch-event.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    let domainItem;
    if (domainItems) {
        if (detectedLocale) {
            detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems){
            var ref, ref1;
            // remove port if present
            const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
            if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale)=>locale.toLowerCase() === detectedLocale))) {
                domainItem = item;
                break;
            }
        }
    }
    return domainItem;
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return `${prefix}${pathname}${query}${hash}`;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return `${pathname}${suffix}${query}${hash}`;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    if (locale && locale !== defaultLocale && (ignorePrefix || !pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !pathHasPrefix(path.toLowerCase(), "/api"))) {
        return addPathPrefix(path, `/${locale}`);
    }
    return path;
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    var ref;
    return (ref = !Array.isArray(headers == null ? void 0 : headers.host) && (headers == null ? void 0 : headers.host) || parsed.hostname) == null ? void 0 : ref.split(":")[0].toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    if (pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
    }
    return path;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _nextConfig;
    const { basePath , i18n , trailingSlash  } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
    }
    if (i18n) {
        const pathLocale = normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyzeUrl();
    }
    analyzeUrl() {
        var ref, ref1, ref2, ref3, ref4;
        const pathnameInfo = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined
        });
        this[Internal].domainLocale = detectDomainLocale((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref1 = ref.i18n) == null ? void 0 : ref1.domains, getHostname(this[Internal].url, this[Internal].options.headers));
        const defaultLocale = ((ref2 = this[Internal].domainLocale) == null ? void 0 : ref2.defaultLocale) || ((ref3 = this[Internal].options.nextConfig) == null ? void 0 : (ref4 = ref3.i18n) == null ? void 0 : ref4.defaultLocale);
        this[Internal].url.pathname = pathnameInfo.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = pathnameInfo.basePath ?? "";
        this[Internal].buildId = pathnameInfo.buildId;
        this[Internal].locale = pathnameInfo.locale ?? defaultLocale;
        this[Internal].trailingSlash = pathnameInfo.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var ref, ref5;
        if (!this[Internal].locale || !((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref5 = ref.i18n) == null ? void 0 : ref5.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyzeUrl();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}

//# sourceMappingURL=next-url.js.map
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var cookies = __webpack_require__(768);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js


//# sourceMappingURL=cookies.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        validateURL(url);
        super(url, init);
        this[INTERNALS] = {
            cookies: new cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            url: new NextURL(url, {
                headers: toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            })
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].url;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url.toString();
    }
}

//# sourceMappingURL=request.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js



const response_INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var ref;
    if (init == null ? void 0 : (ref = init.request) == null ? void 0 : ref.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[response_INTERNALS] = {
            cookies: new cookies.ResponseCookies(this.headers),
            url: init.url ? new NextURL(init.url, {
                headers: toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[response_INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}

//# sourceMappingURL=response.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = `${baseURL.protocol}//${baseURL.host}`;
    return `${relative.protocol}//${relative.host}` === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextDefaultLocale",
    "__nextIsNotFound", 
];
const EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(searchParams, extended) {
    for (const name of INTERNAL_QUERY_NAMES){
        searchParams.delete(name);
    }
    if (extended) {
        for (const name of EXTENDED_INTERNAL_QUERY_NAMES){
            searchParams.delete(name);
        }
    }
    return searchParams;
}

//# sourceMappingURL=internal-utils.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js

/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment.startsWith("(") && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment.startsWith("@")) {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = `${RSC}, ${NEXT_ROUTER_STATE_TREE}, ${NEXT_ROUTER_PREFETCH}`;
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
]; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js











class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ],
    [
        FETCH_CACHE_HEADER
    ], 
];
async function adapter(params) {
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = fromNodeHeaders(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    // Strip internal query parameters off the request.
    stripInternalSearchParams(requestUrl.searchParams, true);
    const request = new NextRequestHint({
        page: params.page,
        input: String(requestUrl),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response = await params.handler(request, event);
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect) {
        const redirectURL = new NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : NextResponse.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol])
    };
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}

//# sourceMappingURL=adapter.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fjunping.yao%2Fworkspace_others%2Fai-chat%2Fwx-web-chat&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2FwaVxcL29wZW5haSguanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii86bmV4dERhdGEoX25leHQvZGF0YS9bXi9dezEsfSk%2FL2FwaS9vcGVuYWkoLmpzb24pPyJ9LHsicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2FwaVxcL2NoYXQtc3RyZWFtKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiLzpuZXh0RGF0YShfbmV4dC9kYXRhL1teL117MSx9KT8vYXBpL2NoYXQtc3RyZWFtKC5qc29uKT8ifV0%3D!

        

        enhanceGlobals()

        var mod = __webpack_require__(90)
        var handler = mod.middleware || mod.default;

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fjunping_yao_2Fworkspace_others_2Fai_chat_2Fwx_web_chat_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2FwaVxcL29wZW5haSguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii86bmV4dERhdGEoX25leHQvZGF0YS9bXi9dezEsfSk_2FL2FwaS9vcGVuYWkoLmpzb24pPyJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2FwaVxcL2NoYXQtc3RyZWFtKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiLzpuZXh0RGF0YShfbmV4dC9kYXRhL1teL117MSx9KT8vYXBpL2NoYXQtc3RyZWFtKC5qc29uKT8ifV0_3D_(opts) {
          return adapter({
              ...opts,
              page: "/middleware",
              handler,
          })
        }
    

/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "middleware": () => (/* binding */ middleware)
});

// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(301);
// EXTERNAL MODULE: ./node_modules/spark-md5/spark-md5.js
var spark_md5 = __webpack_require__(426);
var spark_md5_default = /*#__PURE__*/__webpack_require__.n(spark_md5);
;// CONCATENATED MODULE: ./app/api/access.ts

function getAccessCodes() {
    const code = process.env.CODE;
    try {
        const codes = (code?.split(",") ?? []).filter((v)=>!!v).map((v)=>spark_md5_default().hash(v.trim()));
        return new Set(codes);
    } catch (e) {
        return new Set();
    }
}
const ACCESS_CODES = getAccessCodes();
const IS_IN_DOCKER = process.env.DOCKER;

;// CONCATENATED MODULE: ./middleware.ts



const config = {
    matcher: [
        "/api/openai",
        "/api/chat-stream"
    ]
};
function middleware(req) {
    const accessCode = req.headers.get("access-code");
    const token = req.headers.get("token");
    const hashedCode = spark_md5_default().hash(accessCode ?? "").trim();
    console.log("[Auth] allowed hashed codes: ", [
        ...ACCESS_CODES
    ]);
    console.log("[Auth] got access code:", accessCode);
    console.log("[Auth] hashed access code:", hashedCode);
    if (ACCESS_CODES.size > 0 && !ACCESS_CODES.has(hashedCode) && !token) {
        return server.NextResponse.json({
            error: true,
            needAccessCode: true,
            msg: "Please go settings page and fill your access code."
        }, {
            status: 401
        });
    }
    // inject api key
    if (!token) {
        const apiKey = process.env.OPENAI_API_KEY;
        if (apiKey) {
            console.log("[Auth] set system token");
            req.headers.set("token", apiKey);
        } else {
            return server.NextResponse.json({
                error: true,
                msg: "Empty Api Key"
            }, {
                status: 401
            });
        }
    } else {
        console.log("[Auth] set user token");
    }
    return server.NextResponse.next({
        request: {
            headers: req.headers
        }
    });
}


/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getHostname = getHostname;
function getHostname(parsed, headers) {
    var ref;
    return (ref = !Array.isArray(headers == null ? void 0 : headers.host) && (headers == null ? void 0 : headers.host) || parsed.hostname) == null ? void 0 : ref.split(":")[0].toLowerCase();
} //# sourceMappingURL=get-hostname.js.map


/***/ }),

/***/ 623:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = detectDomainLocale;
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    let domainItem;
    if (domainItems) {
        if (detectedLocale) {
            detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems){
            var ref, ref1;
            // remove port if present
            const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
            if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale)=>locale.toLowerCase() === detectedLocale))) {
                domainItem = item;
                break;
            }
        }
    }
    return domainItem;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 468:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeLocalePath = normalizeLocalePath;
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = addLocale;
var _addPathPrefix = __webpack_require__(811);
var _pathHasPrefix = __webpack_require__(387);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/api"))) {
        return (0, _addPathPrefix).addPathPrefix(path, `/${locale}`);
    }
    return path;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addPathPrefix = addPathPrefix;
var _parsePath = __webpack_require__(863);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    return `${prefix}${pathname}${query}${hash}`;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 749:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addPathSuffix = addPathSuffix;
var _parsePath = __webpack_require__(863);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    return `${pathname}${suffix}${query}${hash}`;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.formatNextPathnameInfo = formatNextPathnameInfo;
var _removeTrailingSlash = __webpack_require__(759);
var _addPathPrefix = __webpack_require__(811);
var _addPathSuffix = __webpack_require__(749);
var _addLocale = __webpack_require__(465);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addPathSuffix).addPathSuffix(pathname, "/") : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getNextPathnameInfo = getNextPathnameInfo;
var _normalizeLocalePath = __webpack_require__(468);
var _removePathPrefix = __webpack_require__(609);
var _pathHasPrefix = __webpack_require__(387);
function getNextPathnameInfo(pathname, options) {
    var _nextConfig;
    const { basePath , i18n , trailingSlash  } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
        info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
    }
    if (i18n) {
        const pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 863:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parsePath = parsePath;
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pathHasPrefix = pathHasPrefix;
var _parsePath = __webpack_require__(863);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = (0, _parsePath).parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removePathPrefix = removePathPrefix;
var _pathHasPrefix = __webpack_require__(387);
function removePathPrefix(path, prefix) {
    if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
    }
    return path;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 759:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeTrailingSlash = removeTrailingSlash;
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 768:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RequestCookies: () => RequestCookies,
  ResponseCookies: () => ResponseCookies
});
module.exports = __toCommonJS(src_exports);

// src/serialize.ts
function serialize(c) {
  const attrs = [
    "path" in c && c.path && `Path=${c.path}`,
    "expires" in c && c.expires && `Expires=${c.expires.toUTCString()}`,
    "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
    "domain" in c && c.domain && `Domain=${c.domain}`,
    "secure" in c && c.secure && "Secure",
    "httpOnly" in c && c.httpOnly && "HttpOnly",
    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
  ].filter(Boolean);
  return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
}
function parseCookieString(cookie) {
  const map = /* @__PURE__ */ new Map();
  for (const pair of cookie.split(/; */)) {
    if (!pair)
      continue;
    const splitAt = pair.indexOf("=");
    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
    try {
      map.set(key, decodeURIComponent(value ?? "true"));
    } catch {
    }
  }
  return map;
}
function parseSetCookieString(setCookie) {
  if (!setCookie) {
    return void 0;
  }
  const [[name, value], ...attributes] = parseCookieString(setCookie);
  const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(
    attributes.map(([key, value2]) => [key.toLowerCase(), value2])
  );
  const cookie = {
    name,
    value: decodeURIComponent(value),
    domain,
    ...expires && { expires: new Date(expires) },
    ...httponly && { httpOnly: true },
    ...typeof maxage === "string" && { maxAge: Number(maxage) },
    path,
    ...samesite && { sameSite: parseSameSite(samesite) },
    ...secure && { secure: true }
  };
  return compact(cookie);
}
function compact(t) {
  const newT = {};
  for (const key in t) {
    if (t[key]) {
      newT[key] = t[key];
    }
  }
  return newT;
}
var SAME_SITE = ["strict", "lax", "none"];
function parseSameSite(string) {
  string = string.toLowerCase();
  return SAME_SITE.includes(string) ? string : void 0;
}

// src/request-cookies.ts
var RequestCookies = class {
  constructor(requestHeaders) {
    this._parsed = /* @__PURE__ */ new Map();
    this._headers = requestHeaders;
    const header = requestHeaders.get("cookie");
    if (header) {
      const parsed = parseCookieString(header);
      for (const [name, value] of parsed) {
        this._parsed.set(name, { name, value });
      }
    }
  }
  [Symbol.iterator]() {
    return this._parsed[Symbol.iterator]();
  }
  get size() {
    return this._parsed.size;
  }
  get(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(name);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed);
    if (!args.length) {
      return all.map(([_, value]) => value);
    }
    const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter(([n]) => n === name).map(([_, value]) => value);
  }
  has(name) {
    return this._parsed.has(name);
  }
  set(...args) {
    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
    const map = this._parsed;
    map.set(name, { name, value });
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value2]) => serialize(value2)).join("; ")
    );
    return this;
  }
  delete(names) {
    const map = this._parsed;
    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value]) => serialize(value)).join("; ")
    );
    return result;
  }
  clear() {
    this.delete(Array.from(this._parsed.keys()));
    return this;
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
  }
};

// src/response-cookies.ts
var ResponseCookies = class {
  constructor(responseHeaders) {
    this._parsed = /* @__PURE__ */ new Map();
    var _a;
    this._headers = responseHeaders;
    const setCookie = ((_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, "set-cookie")) ?? responseHeaders.get("set-cookie") ?? [];
    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
    for (const cookieString of cookieStrings) {
      const parsed = parseSetCookieString(cookieString);
      if (parsed)
        this._parsed.set(parsed.name, parsed);
    }
  }
  get(...args) {
    const key = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(key);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed.values());
    if (!args.length) {
      return all;
    }
    const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter((c) => c.name === key);
  }
  set(...args) {
    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
    const map = this._parsed;
    map.set(name, normalizeCookie({ name, value, ...cookie }));
    replace(map, this._headers);
    return this;
  }
  delete(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this.set({ name, value: "", expires: new Date(0) });
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map(serialize).join("; ");
  }
};
function replace(bag, headers) {
  headers.delete("set-cookie");
  for (const [, value] of bag) {
    const serialized = serialize(value);
    headers.append("set-cookie", serialized);
  }
}
function normalizeCookie(cookie = { name: "", value: "" }) {
  if (cookie.maxAge) {
    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
  }
  if (cookie.path === null || cookie.path === void 0) {
    cookie.path = "/";
  }
  return cookie;
}
function splitCookiesString(cookiesString) {
  if (!cookiesString)
    return [];
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 824:
/***/ ((module, exports, __webpack_require__) => {

var __dirname = "/";
var __WEBPACK_AMD_DEFINE_RESULT__;(()=>{var i={412:function(i,s){
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(e,o){"use strict";var r="0.7.28",a="",n="?",t="function",l="undefined",w="object",d="string",b="major",u="model",c="name",m="type",p="vendor",f="version",h="architecture",g="console",v="mobile",x="tablet",k="smarttv",_="wearable",y="embedded",S=255;var E={extend:function(i,s){var e={};for(var o in i){if(s[o]&&s[o].length%2===0){e[o]=s[o].concat(i[o])}else{e[o]=i[o]}}return e},has:function(i,s){return typeof i===d?s.toLowerCase().indexOf(i.toLowerCase())!==-1:false},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===d?i.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(i,s){i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");return typeof s===l?i:i.substring(0,S)}};var A={rgx:function(i,s){var e=0,r,a,n,l,d,b;while(e<s.length&&!d){var u=s[e],c=s[e+1];r=a=0;while(r<u.length&&!d){d=u[r++].exec(i);if(!!d){for(n=0;n<c.length;n++){b=d[++a];l=c[n];if(typeof l===w&&l.length>0){if(l.length==2){if(typeof l[1]==t){this[l[0]]=l[1].call(this,b)}else{this[l[0]]=l[1]}}else if(l.length==3){if(typeof l[1]===t&&!(l[1].exec&&l[1].test)){this[l[0]]=b?l[1].call(this,b,l[2]):o}else{this[l[0]]=b?b.replace(l[1],l[2]):o}}else if(l.length==4){this[l[0]]=b?l[3].call(this,b.replace(l[1],l[2])):o}}else{this[l]=b?b:o}}}}e+=2}},str:function(i,s){for(var e in s){if(typeof s[e]===w&&s[e].length>0){for(var r=0;r<s[e].length;r++){if(E.has(s[e][r],i)){return e===n?o:e}}}else if(E.has(s[e],i)){return e===n?o:e}}return i}};var N={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var T={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[c,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[c,f],[/opios[\/\s]+([\w\.]+)/i],[f,[c,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[f,[c,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,f],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[f,[c,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[f,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[c,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[f,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[f,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure Browser"],f],[/focus\/([\w\.]+)/i],[f,[c,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[f,[c,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[f,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[c,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[f,[c,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[f,[c,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[c,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 Browser"],f],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],f],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[c,f],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[c],[/;fbav\/([\w\.]+);/i],[f,[c,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[c,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[c,f],[/\bgsa\/([\w\.]+)\s.*safari\//i],[f,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[f,[c,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[c,"Chrome WebView"],f],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[f,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[c,f],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[f,[c,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[f,c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[c,[f,A.str,N.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[c,f],[/(navigator|netscape)\/([\w\.-]+)/i],[[c,"Netscape"],f],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[f,[c,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[c,f]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,E.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[h,/ower/,"",E.lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,E.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[u,[p,"Samsung"],[m,x]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[u,[p,"Samsung"],[m,v]],[/\((ip(?:hone|od)[\s\w]*);/i],[u,[p,"Apple"],[m,v]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[p,"Apple"],[m,x]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[u,[p,"Huawei"],[m,x]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[u,[p,"Huawei"],[m,v]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[u,/_/g," "],[p,"Xiaomi"],[m,v]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[u,/_/g," "],[p,"Xiaomi"],[m,x]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[u,[p,"OPPO"],[m,v]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[u,[p,"Vivo"],[m,v]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[u,[p,"Realme"],[m,v]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[u,[p,"Motorola"],[m,v]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[p,"Motorola"],[m,x]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[u,[p,"LG"],[m,x]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[u,[p,"LG"],[m,v]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[u,[p,"Lenovo"],[m,x]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[u,/_/g," "],[p,"Nokia"],[m,v]],[/droid.+;\s(pixel\sc)[\s)]/i],[u,[p,"Google"],[m,x]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[u,[p,"Google"],[m,v]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[p,"Sony"],[m,v]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[u,"Xperia Tablet"],[p,"Sony"],[m,x]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[u,[p,"OnePlus"],[m,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[u,[p,"Amazon"],[m,x]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[u,"Fire Phone"],[p,"Amazon"],[m,v]],[/\((playbook);[\w\s\),;-]+(rim)/i],[u,p,[m,x]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[u,[p,"BlackBerry"],[m,v]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[u,[p,"ASUS"],[m,x]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[u,[p,"ASUS"],[m,v]],[/(nexus\s9)/i],[u,[p,"HTC"],[m,x]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[p,[u,/_/g," "],[m,v]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[p,"Acer"],[m,x]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[u,[p,"Meizu"],[m,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[p,u,[m,v]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[p,u,[m,x]],[/\s(surface\sduo)\s/i],[u,[p,"Microsoft"],[m,x]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[u,[p,"Fairphone"],[m,v]],[/\s(u304aa)\sbuild/i],[u,[p,"AT&T"],[m,v]],[/sie-(\w*)/i],[u,[p,"Siemens"],[m,v]],[/[;\/]\s?(rct\w+)\sbuild/i],[u,[p,"RCA"],[m,x]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[u,[p,"Dell"],[m,x]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[u,[p,"Verizon"],[m,x]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[u,[p,"Barnes & Noble"],[m,x]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[u,[p,"NuVision"],[m,x]],[/;\s(k88)\sbuild/i],[u,[p,"ZTE"],[m,x]],[/;\s(nx\d{3}j)\sbuild/i],[u,[p,"ZTE"],[m,v]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[u,[p,"Swiss"],[m,v]],[/[;\/]\s?(zur\d{3})\sbuild/i],[u,[p,"Swiss"],[m,x]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[u,[p,"Zeki"],[m,x]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[p,"Dragon Touch"],u,[m,x]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[u,[p,"Insignia"],[m,x]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[u,[p,"NextBook"],[m,x]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[p,"Voice"],u,[m,v]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[p,"LvTel"],u,[m,v]],[/;\s(ph-1)\s/i],[u,[p,"Essential"],[m,v]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[u,[p,"Envizen"],[m,x]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[u,[p,"MachSpeed"],[m,x]],[/[;\/]\s?tu_(1491)\sbuild/i],[u,[p,"Rotor"],[m,x]],[/(shield[\w\s]+)\sbuild/i],[u,[p,"Nvidia"],[m,x]],[/(sprint)\s(\w+)/i],[p,u,[m,v]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[p,"Microsoft"],[m,v]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[p,"Zebra"],[m,x]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[p,"Zebra"],[m,v]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[p,u,[m,g]],[/droid.+;\s(shield)\sbuild/i],[u,[p,"Nvidia"],[m,g]],[/(playstation\s[345portablevi]+)/i],[u,[p,"Sony"],[m,g]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[u,[p,"Microsoft"],[m,g]],[/smart-tv.+(samsung)/i],[p,[m,k]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[p,"Samsung"],[m,k]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[p,"LG"],[m,k]],[/(apple)\s?tv/i],[p,[u,"Apple TV"],[m,k]],[/crkey/i],[[u,"Chromecast"],[p,"Google"],[m,k]],[/droid.+aft([\w])(\sbuild\/|\))/i],[u,[p,"Amazon"],[m,k]],[/\(dtv[\);].+(aquos)/i],[u,[p,"Sharp"],[m,k]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[p,E.trim],[u,E.trim],[m,k]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[m,k]],[/((pebble))app\/[\d\.]+\s/i],[p,u,[m,_]],[/droid.+;\s(glass)\s\d/i],[u,[p,"Google"],[m,_]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[u,[p,"Zebra"],[m,_]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[p,[m,y]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[u,[m,v]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[u,[m,x]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[m,E.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[p,"Generic"]],[/(phone)/i],[[m,v]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[f,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,f],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[c,[f,A.str,N.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[f,A.str,N.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[c,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[c,"Mac OS"],[f,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[c,f],[/\(bb(10);/i],[f,[c,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[f,[c,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[f,[c,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],f],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[c,f],[/(sunos)\s?([\w\.\d]*)/i],[[c,"Solaris"],f],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[c,f]]};var UAParser=function(i,s){if(typeof i==="object"){s=i;i=o}if(!(this instanceof UAParser)){return new UAParser(i,s).getResult()}var r=i||(typeof e!=="undefined"&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:a);var n=s?E.extend(T,s):T;this.getBrowser=function(){var i={name:o,version:o};A.rgx.call(i,r,n.browser);i.major=E.major(i.version);return i};this.getCPU=function(){var i={architecture:o};A.rgx.call(i,r,n.cpu);return i};this.getDevice=function(){var i={vendor:o,model:o,type:o};A.rgx.call(i,r,n.device);return i};this.getEngine=function(){var i={name:o,version:o};A.rgx.call(i,r,n.engine);return i};this.getOS=function(){var i={name:o,version:o};A.rgx.call(i,r,n.os);return i};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return r};this.setUA=function(i){r=typeof i===d&&i.length>S?E.trim(i,S):i;return this};this.setUA(r);return this};UAParser.VERSION=r;UAParser.BROWSER={NAME:c,MAJOR:b,VERSION:f};UAParser.CPU={ARCHITECTURE:h};UAParser.DEVICE={MODEL:u,VENDOR:p,TYPE:m,CONSOLE:g,MOBILE:v,SMARTTV:k,TABLET:x,WEARABLE:_,EMBEDDED:y};UAParser.ENGINE={NAME:c,VERSION:f};UAParser.OS={NAME:c,VERSION:f};if(typeof s!==l){if("object"!==l&&i.exports){s=i.exports=UAParser}s.UAParser=UAParser}else{if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}}var z=typeof e!=="undefined"&&(e.jQuery||e.Zepto);if(z&&!z.ua){var O=new UAParser;z.ua=O.getResult();z.ua.get=function(){return O.getUA()};z.ua.set=function(i){O.setUA(i);var s=O.getResult();for(var e in s){z.ua[e]=s[e]}}}})(typeof window==="object"?window:this)}};var s={};function __nccwpck_require__(e){var o=s[e];if(o!==undefined){return o.exports}var r=s[e]={exports:{}};var a=true;try{i[e].call(r.exports,r,r.exports,__nccwpck_require__);a=false}finally{if(a)delete s[e]}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e=__nccwpck_require__(412);module.exports=e})();

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
class PageSignatureError extends Error {
    constructor({ page  }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
exports.PageSignatureError = PageSignatureError;
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
exports.RemovedPageError = RemovedPageError;
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
}
exports.RemovedUAError = RemovedUAError;

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _detectDomainLocale = __webpack_require__(623);
var _formatNextPathnameInfo = __webpack_require__(786);
var _getHostname = __webpack_require__(60);
var _getNextPathnameInfo = __webpack_require__(422);
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyzeUrl();
    }
    analyzeUrl() {
        var ref, ref1, ref2, ref3, ref4;
        const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined
        });
        this[Internal].domainLocale = (0, _detectDomainLocale).detectDomainLocale((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref1 = ref.i18n) == null ? void 0 : ref1.domains, (0, _getHostname).getHostname(this[Internal].url, this[Internal].options.headers));
        const defaultLocale = ((ref2 = this[Internal].domainLocale) == null ? void 0 : ref2.defaultLocale) || ((ref3 = this[Internal].options.nextConfig) == null ? void 0 : (ref4 = ref3.i18n) == null ? void 0 : ref4.defaultLocale);
        this[Internal].url.pathname = pathnameInfo.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = pathnameInfo.basePath ?? "";
        this[Internal].buildId = pathnameInfo.buildId;
        this[Internal].locale = pathnameInfo.locale ?? defaultLocale;
        this[Internal].trailingSlash = pathnameInfo.trailingSlash;
    }
    formatPathname() {
        return (0, _formatNextPathnameInfo).formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var ref, ref5;
        if (!this[Internal].locale || !((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref5 = ref.i18n) == null ? void 0 : ref5.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyzeUrl();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}
exports.NextURL = NextURL;

//# sourceMappingURL=next-url.js.map

/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _cookies = _interopRequireWildcard(__webpack_require__(768));
Object.keys(_cookies).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _cookies[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _cookies[key];
        }
    });
});
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
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

//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ 953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = void 0;
var _nextUrl = __webpack_require__(961);
var _utils = __webpack_require__(625);
var _error = __webpack_require__(928);
var _cookies = __webpack_require__(993);
const INTERNALS = Symbol("internal request");
__webpack_unused_export__ = INTERNALS;
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils).validateURL(url);
        super(url, init);
        this[INTERNALS] = {
            cookies: new _cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            url: new _nextUrl.NextURL(url, {
                headers: (0, _utils).toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            })
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].url;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new _error.RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new _error.RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url.toString();
    }
}
exports.Im = NextRequest;

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var _nextUrl = __webpack_require__(961);
var _utils = __webpack_require__(625);
var _cookies = __webpack_require__(993);
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var ref;
    if (init == null ? void 0 : (ref = init.request) == null ? void 0 : ref.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies.ResponseCookies(this.headers),
            url: init.url ? new _nextUrl.NextURL(init.url, {
                headers: (0, _utils).toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils).validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils).validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}
exports.x = NextResponse;

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = isBot;
exports.Nf = userAgentFromString;
exports.WE = userAgent;
var _uaParserJs = _interopRequireDefault(__webpack_require__(824));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, _uaParserJs).default(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers  }) {
    return userAgentFromString(headers.get("user-agent") || undefined);
}

//# sourceMappingURL=user-agent.js.map

/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromNodeHeaders = fromNodeHeaders;
exports.splitCookiesString = splitCookiesString;
exports.toNodeHeaders = toNodeHeaders;
exports.validateURL = validateURL;
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (v !== undefined) {
                headers.append(key, v);
            }
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    if (headers) {
        for (const [key, value] of headers.entries()){
            result[key] = value;
            if (key.toLowerCase() === "set-cookie") {
                result[key] = splitCookiesString(value);
            }
        }
    }
    return result;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 301:
/***/ ((module, exports, __webpack_require__) => {

const serverExports = {
  NextRequest: (__webpack_require__(953)/* .NextRequest */ .Im),
  NextResponse: (__webpack_require__(57)/* .NextResponse */ .x),
  userAgentFromString: (__webpack_require__(559)/* .userAgentFromString */ .Nf),
  userAgent: (__webpack_require__(559)/* .userAgent */ .WE),
}

if (typeof URLPattern !== 'undefined') {
  // eslint-disable-next-line no-undef
  serverExports.URLPattern = URLPattern
}

// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = serverExports

// make import { xxx } from 'next/server' work
exports.NextRequest = serverExports.NextRequest
exports.NextResponse = serverExports.NextResponse
exports.userAgentFromString = serverExports.userAgentFromString
exports.userAgent = serverExports.userAgent
exports.URLPattern = serverExports.URLPattern


/***/ }),

/***/ 426:
/***/ ((module) => {

(function (factory) {
    if (true) {
        // Node/CommonJS
        module.exports = factory();
    } else { var glob; }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
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
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
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
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

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
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
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
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
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
     */

    function SparkMD5() {
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
     */
    SparkMD5.prototype.append = function (str) {
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
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
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
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
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
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
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
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
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
     */
    SparkMD5.hash = function (str, raw) {
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
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
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
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
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
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
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
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(22));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map