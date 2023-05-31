var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 82,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-H4LWUBTW.css";

// app/components/layout.tsx
var import_remix = require("@clerk/remix"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  let { userId } = (0, import_remix.useAuth)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex min-h-screen flex-col bg-gray-900 p-1 text-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "fixed left-0 right-0 top-0 z-50 flex flex-wrap items-center justify-between gap-2  bg-gray-800 p-1 text-gray-100 shadow-md ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-2xl font-bold", children: "ACMG Variant Classifications" }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/criterion", children: "Criterion" }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "variants", children: "Variants" }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/calculator", children: "Calculator" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/beta", children: "Beta" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "wip", children: "WIP" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-out", children: "Sign Out" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 35,
          columnNumber: 28
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-semibold flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-in", children: "Sign In" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-up", children: "Sign Up" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "relative mt-20 flex-1", children }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "fixed bottom-0 left-0 right-0 z-50 flex h-10 items-center  justify-center bg-gray-800 text-gray-100 shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/https://github.com/Derick80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: "Github" }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-1 font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm ", children: "Copyright" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: [
          " ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/https://twitter.com/Derick80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: "Twitter" }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Variant Classifications" },
  {
    name: "description",
    content: "ACMG Variant Classifications Powered by Remix-run"
  },
  { name: "viewport", content: "width=device-width, initial-scale=1" }
], links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
async function loader(args) {
  return (0, import_ssr.rootAuthLoader)(args, ({ request }) => {
    let { userId } = request.auth;
    return userId ? {
      loadUser: !0
    } : (0, import_node2.json)({}, { status: 401 });
  });
}
function App() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix2.ClerkApp)(App), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)();

// app/routes/variants_.$id.annotate.tsx
var variants_id_annotate_exports = {};
__export(variants_id_annotate_exports, {
  action: () => action,
  default: () => BetaRoute,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_react5 = __toESM(require("react"));

// app/components/button.tsx
var import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Button({
  size = "base",
  variant = "primary_filled",
  children,
  className,
  ...props
}) {
  let sizeClasses = {
    base: "px-4 py-2",
    large: "px-6 py-3",
    small: "px-2 py-1",
    tiny: "px-1 py-1 text-xs"
  }, variantClasses = {
    success: "rounded border-2  border-green-500 dark:text-slate-50 hover:bg-green-600 hover:border-green-600 hover:text-slate-50 capitalize",
    warning: "rounded border-2 border-orange-200 dark:text-slate-50 hover:bg-orange-300 hover:border-orange-200 hover:text-slate-50 capitalize",
    danger: "rounded border-2 border-red-500 dark:text-slate-50 hover:bg-red-600 hover:border-red-600 hover:text-slate-50 capitalize",
    primary: "rounded border-2  border-blue-500 capitalize dark:text-slate-50 hover:bg-blue-600 hover:border-blue-600 hover:text-slate-50 capitalize",
    ghost: "hover:bg-slate-50 hover:text-slate-500 capitalize hover:border-2",
    success_filled: "rounded border-2 bg-green-500 border-green-500 text-slate-50 hover:bg-green-600 hover:border-green-600 capitalize",
    warning_filled: "rounded border-2 bg-orange-500 border-orange-500  hover:bg-orange-300 hover:border-orange-300 capitalize ",
    danger_filled: "rounded border-2 bg-red-500 border-red-500 text-slate-50 hover:bg-red-600 hover:border-red-600 capitalize",
    primary_filled: "rounded border-2 bg-blue-500 border-blue-500 text-slate-50 hover:bg-blue-600 hover:border-blue-600",
    icon_filled: "rounded border-2 bg-slate-500 border-slate-500 text-slate-50 hover:bg-slate-600 hover:border-slate-600",
    icon_unfilled: "font-semibold text-slate-500 hover:bg-slate-50 dark:text-slate-50",
    icon_text_filled: "rounded border-2 bg-slate-500 border-slate-500 text-slate-50 hover:bg-slate-600 hover:border-slate-600 capitalize flex flex-row items-center gap-2",
    icon_text_unfilled: "font-semibold text-slate-500 hover:bg-slate-900 capitalize dark:text-slate-50 flex flex-row items-center gap-2"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      className: (0, import_clsx.default)(
        "flex h-fit w-fit flex-row items-center gap-2 rounded-md text-xs font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-transparent disabled:hover:bg-transparent disabled:hover:text-slate-500",
        sizeClasses[size],
        variantClasses[variant],
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/button.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}

// app/components/bayes-table.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function BayesTable() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-1/2 flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "w-1/2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "text-left", children: "Category" }, void 0, !1, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 7,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "text-left", children: "Total Score" }, void 0, !1, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 6,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Pathogenic" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " >10" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " Likely Pathogenic" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " 6-9" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Uncertain Significance" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "0-5" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Likely Benign" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " -1-6" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Benign" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: [
          " ",
          ">=",
          "-7"
        ] }, void 0, !0, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", {}, void 0, !1, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs text-gray-500", children: "*Note: This is a beta version of the ACMG classification tool. Please use with caution. Based on Tavtigian 2020" }, void 0, !1, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/bayes-table.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/bayes-table.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/constants/consts.ts
var criteria = [
  {
    id: "1",
    name: "Population",
    strength: [
      {
        id: "1",
        value: "P_2",
        label: "PM2"
      },
      {
        id: "2",
        value: "P_1",
        label: "PM2_Supporting"
      },
      {
        id: "3",
        value: "B_8",
        label: "BA1"
      },
      {
        id: "4",
        value: "B_4",
        label: "BS1"
      },
      {
        id: "1",
        value: "P_4",
        label: "PS4"
      },
      {
        id: "9",
        value: "B_4",
        label: "BS2"
      }
    ]
  },
  {
    id: "1.1",
    name: "Computational and Predictive",
    strength: [
      {
        id: "4",
        value: "B_1",
        label: "BP4"
      },
      {
        id: "10",
        value: "B_1",
        label: "BP1"
      },
      {
        id: "12",
        value: "B_1",
        label: "BP7"
      },
      {
        id: "4.5",
        value: "P_1",
        label: "PP3"
      },
      {
        id: "11",
        value: "B_1",
        label: "BP3"
      },
      {
        id: "7",
        value: "P_2",
        label: "PM4"
      },
      {
        id: "8",
        value: "PM_5",
        label: "PM5"
      },
      {
        id: "1",
        value: "P_8",
        label: "PVS1"
      },
      {
        id: "2",
        value: "P_4",
        label: "PVS1_Strong"
      },
      {
        id: "3",
        value: "P_2",
        label: "PVS1_Moderate"
      },
      {
        id: "4",
        value: "P_1",
        label: "PVS1_Supporting"
      },
      {
        id: "5",
        value: "P_4",
        label: "PS1"
      }
    ]
  },
  {
    id: "2",
    name: "Functional",
    strength: [
      {
        id: "1",
        value: "P_4",
        label: "PS3"
      },
      {
        id: "2",
        value: "B_4",
        label: "BS3"
      },
      {
        id: "6",
        value: "P_2",
        label: "PM1"
      },
      {
        id: "9",
        value: "P_1",
        label: "PP2"
      }
    ]
  },
  {
    id: "4.1",
    name: "Segregation",
    strength: [
      {
        id: "5",
        value: "P_1",
        label: "PP1"
      },
      {
        id: "10",
        value: "B_4",
        label: "BS4"
      }
    ]
  },
  {
    id: "4.5",
    name: "De Novo",
    strength: [
      {
        id: "0.5",
        value: "P_4",
        label: "PS2"
      },
      {
        id: "3",
        value: "P_2",
        label: "PM6"
      }
    ]
  },
  {
    id: "4.6",
    name: "Allelic",
    strength: [
      {
        id: "7",
        value: "B_1",
        label: "BP2"
      },
      {
        id: "4",
        value: "P_2",
        label: "PM3"
      }
    ]
  },
  {
    id: "4",
    name: "Other Database",
    strength: [
      {
        id: "1",
        value: "P_1",
        label: "PP5"
      },
      {
        id: "2",
        value: "B_1",
        label: "BP6"
      }
    ]
  },
  {
    id: "5",
    name: "Other Data",
    strength: [
      {
        id: "6",
        value: "P_1",
        label: "PP4"
      },
      {
        id: "8",
        value: "B_1",
        label: "BP5"
      }
    ]
  }
];

// app/server/functions.server.ts
async function parseACMGAnnotation(array) {
  let dataTypes = [];
  for (let key in array)
    if (array.hasOwnProperty(key)) {
      let element = array[key], data = {
        id: key,
        name: element,
        breakdown: {
          category: element.split("", 1)[0],
          strength: Number(element.split("_", 2)[1])
        }
      };
      dataTypes.push(data);
    }
  return dataTypes.map((item) => item.breakdown);
}
async function reduceAndCalcACMGCategory(array) {
  let pathogenicCriteria = array.filter((item) => item.category === "P"), benignCriteria = array.filter((item) => item.category === "B"), pathogenicStrength = pathogenicCriteria.reduce((acc, item) => acc += item.strength, 0), benignStrength = benignCriteria.reduce((acc, item) => -1 * (acc += item.strength), 0), total = pathogenicStrength + benignStrength, realTotal = total <= -7 ? "B" : total <= -2 ? "LB" : total <= 5 ? "VUS" : total <= 9 ? "LP" : "P";
  return {
    pathogenicCriteria,
    benignCriteria,
    pathogenicStrength,
    benignStrength,
    total,
    realTotal
  };
}
async function getACMGClassification(array) {
  let t1 = await parseACMGAnnotation(array);
  return await reduceAndCalcACMGCategory(t1);
}

// app/routes/variants_.$id.annotate.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader2({ request, params }) {
  if (!params.id)
    return (0, import_node3.redirect)("/variants");
  let populationData = criteria.find(
    (criteria2) => criteria2.name === "Population"
  ), functionalData = criteria.find(
    (criteria2) => criteria2.name === "Functional"
  ), proteinData = criteria.find((criteria2) => criteria2.name === "Protein"), reputableSourceData = criteria.find(
    (criteria2) => criteria2.name === "ReputableSource"
  ), caseLevelData = criteria.find(
    (criteria2) => criteria2.name === "CaseLevel"
  );
  return (0, import_node3.json)({
    populationData,
    functionalData,
    proteinData,
    reputableSourceData,
    caseLevelData
  });
}
async function action({ request }) {
  let formData = await request.formData(), population = formData.get("population"), functional = formData.get("functionalComputational"), protein = formData.get("protein"), reputableSource = formData.get("reputableSource"), caseLevel = formData.get("caseLevel"), data = Object.fromEntries(formData.entries());
  console.log(data, "data");
  let totals = await getACMGClassification(data);
  return console.log(totals, "totals"), (0, import_node3.json)({ message: "updated" });
}
function BetaRoute() {
  let [criterias, setCriterias] = import_react5.default.useState([]), [totals, setTotals] = import_react5.default.useState(0), [classification, setClassification] = import_react5.default.useState("No classification"), [dropdown, setDropdown] = import_react5.default.useState(!1), optionsRef = import_react5.default.useRef(null), [reset, setReset] = import_react5.default.useState(!1), formRef = import_react5.default.useRef(null), calculatorRef = import_react5.default.useRef(null);
  import_react5.default.useEffect(() => {
    var _a;
    reset && ((_a = formRef.current) == null || _a.reset());
  }, [reset]);
  function handleChoices(event) {
    let { name, value } = event.target, subcategory = value.substring(0, 1), score = Number(value.slice(-1)), shortenedEvidenceType = name.split(" ")[0], newCriteria = [...criterias];
    if (newCriteria.some((criteria2) => criteria2.startsWith(shortenedEvidenceType))) {
      let index = newCriteria.findIndex(
        (criteria2) => criteria2.startsWith(shortenedEvidenceType)
      );
      newCriteria[index] = shortenedEvidenceType + "_" + subcategory + "_" + score;
    } else
      newCriteria.push(shortenedEvidenceType + "_" + subcategory + "_" + score);
    setCriterias(newCriteria), console.log(newCriteria, "newCriteria");
    let trimmedCriteria = newCriteria.map((criteria2) => criteria2.slice(-3));
    console.log(trimmedCriteria, "trimmedCriteria");
    let total = getNumbers(trimmedCriteria).reduce((a, b) => a + b, 0);
    console.log(total, "total"), setTotals(total), total <= -7 ? setClassification("Benign") : total >= -6 && total <= -1 ? setClassification("Likely Benign") : total >= 0 && total <= 5 ? setClassification("Uncertain Significance") : total >= 6 && total <= 9 ? setClassification("Likely Pathogenic") : total >= 10 ? setClassification("Pathogenic") : setClassification("No Classification");
  }
  let handleClickOutside = (event) => {
    optionsRef.current && !optionsRef.current.contains(event.target) && setDropdown(!1);
  };
  import_react5.default.useEffect(() => (document.addEventListener("mouseleave", handleClickOutside), () => {
    document.removeEventListener("mouseleave", handleClickOutside);
  }), []);
  function handleReset() {
    setReset(!reset);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex min-h-screen flex-col  p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        ref: calculatorRef,
        className: "flex w-full flex-col items-center gap-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-2xl font-bold", children: "ACMG Classification" }, void 0, !1, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 152,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-bold", children: [
            " ",
            criterias
          ] }, void 0, !0, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 153,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-bold", children: [
            "Total Score: ",
            totals !== 0 ? totals : 0
          ] }, void 0, !0, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 154,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-bold", children: [
            "Classification: ",
            classification
          ] }, void 0, !0, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/variants_.$id.annotate.tsx",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BayesTable, {}, void 0, !1, {
        fileName: "app/routes/variants_.$id.annotate.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_react4.Form,
        {
          id: "form",
          ref: formRef,
          method: "post",
          className: "flex w-1/2 flex-col gap-1",
          children: [
            criteria.map((population) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "label",
                {
                  className: "text-left font-semibold capitalize",
                  children: population.name
                },
                population.id,
                !1,
                {
                  fileName: "app/routes/variants_.$id.annotate.tsx",
                  lineNumber: 170,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "select",
                {
                  "data-state": dropdown,
                  id: "select",
                  title: population.name,
                  className: "rounded-md border border-gray-300 text-black",
                  name: population.name,
                  onChange: handleChoices,
                  children: population.strength.map((strength) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "option",
                    {
                      ref: optionsRef,
                      "data-category-type": strength.value.slice(0, 1),
                      "data-etype": population.name,
                      placeholder: "Pick a Criterion",
                      value: strength.value,
                      defaultChecked: !1,
                      children: strength.label
                    },
                    strength.id,
                    !1,
                    {
                      fileName: "app/routes/variants_.$id.annotate.tsx",
                      lineNumber: 187,
                      columnNumber: 19
                    },
                    this
                  ))
                },
                population.id,
                !1,
                {
                  fileName: "app/routes/variants_.$id.annotate.tsx",
                  lineNumber: 177,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/variants_.$id.annotate.tsx",
              lineNumber: 169,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "primary_filled", size: "base", type: "submit", children: "Submit" }, void 0, !1, {
                fileName: "app/routes/variants_.$id.annotate.tsx",
                lineNumber: 203,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                Button,
                {
                  variant: "warning_filled",
                  size: "base",
                  type: "button",
                  onClick: handleReset,
                  children: "Reset"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/variants_.$id.annotate.tsx",
                  lineNumber: 206,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/variants_.$id.annotate.tsx",
              lineNumber: 202,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/variants_.$id.annotate.tsx",
          lineNumber: 162,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/variants_.$id.annotate.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants_.$id.annotate.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function getNumbers(trimmedCriteria) {
  let myArray = [];
  return trimmedCriteria.forEach((criteria2) => {
    if (criteria2.startsWith("B")) {
      let number = -Number(criteria2.slice(-1));
      myArray.push(number);
    } else if (criteria2.startsWith("P")) {
      let number = Number(criteria2.slice(-1));
      myArray.push(number);
    }
  }), myArray;
}

// app/routes/criteria-dropdown.tsx
var criteria_dropdown_exports = {};
__export(criteria_dropdown_exports, {
  default: () => CheckBoxes
});
var import_react_icons = require("@radix-ui/react-icons"), import_react6 = __toESM(require("react")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function CheckBoxes({
  data,
  setIsOpen,
  handleCheckboxChange
}) {
  let [open, setOpen] = import_react6.default.useState(!1), [selected, setSelected] = import_react6.default.useState([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex w-72 flex-col gap-2 rounded-md border-2 p-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between gap-2", children: [
      data[0].value,
      selected.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: item.label }, item.value, !1, {
        fileName: "app/routes/criteria-dropdown.tsx",
        lineNumber: 31,
        columnNumber: 18
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          onClick: () => {
            setOpen(!open);
          },
          children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_icons.ChevronUpIcon, {}, void 0, !1, {
            fileName: "app/routes/criteria-dropdown.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_icons.ChevronDownIcon, {}, void 0, !1, {
            fileName: "app/routes/criteria-dropdown.tsx",
            lineNumber: 39,
            columnNumber: 39
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/criteria-dropdown.tsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/criteria-dropdown.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    open && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: data.map((criterion) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "input",
        {
          className: "flex h-[25px] w-[25px] appearance-none items-center  justify-center rounded-[4px] border-2 bg-white shadow-[0_2px_10px] outline-none",
          name: criterion.value,
          value: criterion.label,
          onChange: handleCheckboxChange,
          type: "checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/criteria-dropdown.tsx",
          lineNumber: 48,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-base leading-none", children: criterion.label }, void 0, !1, {
        fileName: "app/routes/criteria-dropdown.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/criteria-dropdown.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-[8px]", children: criterion.definition }, void 0, !1, {
        fileName: "app/routes/criteria-dropdown.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, criterion.value, !0, {
      fileName: "app/routes/criteria-dropdown.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/criteria-dropdown.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/criteria-dropdown.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/criterion_.$splat.tsx
var criterion_splat_exports = {};
__export(criterion_splat_exports, {
  action: () => action2,
  default: () => EditIndex,
  loader: () => loader3
});
var import_remix3 = require("@clerk/remix"), import_node4 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_zod = require("zod");

// app/functions.ts
var import_react7 = require("@remix-run/react"), import_react8 = require("react");
async function validateAction({
  request,
  schema: schema2
}) {
  let body = Object.fromEntries(await request.formData());
  try {
    return { formData: schema2.parse(body), errors: null };
  } catch (error) {
    return console.log(error), {
      formData: body,
      errors: error.issues.reduce((acc, curr) => {
        let key = curr.path[0];
        return acc[key] = curr.message, acc;
      }, {})
    };
  }
}

// app/server/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/routes/criterion_.$splat.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let searchParam = params.splat || "";
  console.log(searchParam, "searchParam");
  let formattedsearchParam = searchParam.split(" ").join("_").split("_Data").join("_data").toLowerCase();
  console.log(formattedsearchParam, "formattedsearchParam");
  let criterion = await prisma.criterion.findMany({
    where: {
      OR: [
        {
          evidenceType: {
            contains: formattedsearchParam
          }
        },
        {
          id: {
            contains: formattedsearchParam
          }
        }
      ]
    },
    orderBy: {
      evidenceType: "asc"
    }
  });
  return console.log(criterion, "criterion"), (0, import_node4.json)({ criterion, searchParam });
}
var schema = import_zod.z.object({
  criterionName: import_zod.z.string(),
  definition: import_zod.z.string(),
  evidenceType: import_zod.z.string(),
  example: import_zod.z.string(),
  criterionBaseWeight: import_zod.z.string(),
  caveat: import_zod.z.string()
});
async function action2({ request, params }) {
  let criterionId = params.splat;
  if (!import_remix3.useAuth)
    return (0, import_node4.redirect)("/sign-in");
  let { formData, errors } = await validateAction({ request, schema });
  if (errors)
    return (0, import_node4.json)({ errors });
  let {
    criterionName,
    definition,
    evidenceType,
    example,
    criterionBaseWeight,
    caveat
  } = formData;
  if (await prisma.criterion.update({
    where: {
      id: criterionId
    },
    data: {
      label: criterionName,
      definition,
      evidenceType,
      example,
      criterionBaseWeight,
      caveat
    }
  }))
    return (0, import_node4.redirect)("/criterion");
}
function EditIndex() {
  let data = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react9.Form,
    {
      className: "flex w-full max-w-2xl flex-col gap-2 rounded-md border p-4  ",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "criterionName", children: "Criterion Name" }, void 0, !1, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            className: "rounded-md border-2 border-gray-400 p-2 text-black",
            type: "text",
            name: "criterionName",
            id: "criterionName",
            placeholder: "criterionName",
            defaultValue: data.criterion[0].label
          },
          void 0,
          !1,
          {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 109,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "definition", children: "Definition" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              className: "rounded-md border-2 border-gray-400 p-2 text-black",
              type: "text",
              name: "definition",
              id: "definition",
              placeholder: "definition",
              defaultValue: data.criterion[0].definition
            },
            void 0,
            !1,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 121,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "evidenceType", children: "Evidence Type" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 131,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              className: "rounded-md border-2 border-gray-400 p-2 text-black",
              type: "text",
              name: "evidenceType",
              id: "evidenceType",
              placeholder: "evidenceType",
              defaultValue: data.criterion[0].evidenceType
            },
            void 0,
            !1,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 134,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "example", children: "Example" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 144,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              className: "rounded-md border-2 border-gray-400 p-2 text-black",
              type: "text",
              name: "example",
              id: "example",
              placeholder: "...example",
              defaultValue: data.criterion[0].example || ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 147,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "criterionBaseWeight", children: "Criterion Base Weight" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 157,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "select",
            {
              className: "rounded-md border-2 border-gray-400 p-2 text-black",
              name: "criterionBaseWeight",
              id: "criterionBaseWeight",
              defaultValue: data.criterion[0].criterionBaseWeight,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "P", children: "Supporting" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 166,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "M", children: "Moderate" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 167,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "S", children: "Strong" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 168,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "VS", children: "Very Strong" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 169,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "SA", children: "Stand Alone" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 170,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 160,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 156,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "caveat", children: "Caveat" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 174,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              className: "rounded-md border-2 border-gray-400 p-2 text-black",
              type: "text",
              name: "caveat",
              id: "caveat",
              defaultValue: data.criterion[0].caveat || "",
              onChange: (e) => {
                console.log(e.target.value, "e.target.value");
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 177,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 173,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "warning_filled", size: "large", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 188,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion_.$splat.tsx",
      lineNumber: 102,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/criterion_.$splat.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/criterion.help.tsx
var criterion_help_exports = {};
__export(criterion_help_exports, {
  default: () => CriterionHelpRoute,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let criteria2 = await prisma.criterion.groupBy({
    by: ["evidenceType"],
    orderBy: {
      evidenceType: "asc"
    }
  });
  if (!criteria2)
    throw new Error("No Criteria Found");
  let parsedEvidenceTypes = criteria2.map((criterion) => {
    let formattedEvidenceType = criterion.evidenceType.split("_data").join(" Data").split("_").join(" ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return {
      id: Math.random().toString(36).substring(7),
      evidenceType: formattedEvidenceType
    };
  });
  return (0, import_node5.json)({ parsedEvidenceTypes });
}
function CriterionHelpRoute() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: `
flex`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-2xl font-bold", children: "Criterion Help" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-xl font-bold", children: "Evidence Types" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-2", children: data.parsedEvidenceTypes.map((criterion) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "text-lg font-bold", children: criterion.evidenceType }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this) }, criterion.id, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)) }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion.help.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/variants.$id.tsx
var variants_id_exports = {};
__export(variants_id_exports, {
  default: () => VariantRoute2,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/routes/variants.tsx
var variants_exports = {};
__export(variants_exports, {
  VariantCardBack: () => VariantCardBack,
  VariantCardFront: () => VariantCardFront,
  VariantSummaryCard: () => VariantSummaryCard,
  default: () => VariantRoute,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");

// app/constants/variants.ts
var variants = [
  {
    id: "1",
    symbol: "BRCA2",
    transcript: "NM_000059.3",
    hgvs: "NM_000059.3:c.68_69del",
    protein: "NP_000050.2:p.Glu23Valfs*17",
    cdna: "c.68_69del",
    aa: "p.Glu23Valfs*17",
    chr: "13",
    pos: "32315474",
    ref: "CT",
    alt: "C",
    hgnc: "HGNC:1101",
    omim: "OMIM:600185",
    clinvar: "RCV000000000",
    gnomad: "0.0000000000",
    sift: "Deleterious",
    polyphen: "Probably Damaging",
    zygosity: "Heterozygous",
    inheritance: "Autosomal Dominant",
    vaf: "0.5",
    description: "This is a brca2 variant description"
  },
  {
    id: "2",
    symbol: "EGFR",
    transcript: "NM_005228.4",
    hgvs: "NM_005228.4:c.2155G>T",
    protein: "NP_005219.2:p.Glu719*",
    cdna: "c.2155G>T",
    aa: "p.Glu719*",
    chr: "7",
    pos: "55249071",
    ref: "G",
    alt: "T",
    hgnc: "HGNC:3236",
    omim: "OMIM:131550",
    clinvar: "RCV000000000",
    gnomad: "0.0000000000",
    sift: "Deleterious",
    polyphen: "Probably Damaging",
    zygosity: "Heterozygous",
    inheritance: "Autosomal Dominant",
    vaf: "0.5",
    descriptions: "This is a EGFR variant description"
  },
  {
    id: "3",
    symbol: "RYR1",
    transcript: "NM_000540.3",
    hgvs: "NM_000540.2(RYR1):c.1202G>A",
    protein: "NP_001036188.1:p.Arg401His",
    cdna: "c.1202G>A",
    aa: "pp.Arg401His",
    chr: "19",
    pos: "38942483",
    ref: "G",
    alt: "A",
    hgnc: "HGNC:10479",
    omim: "OMIM:180901",
    clinvar: "133030",
    gnomad: "0.0000000000",
    sift: "Deleterious",
    polyphen: "Probably Damaging",
    zygosity: "Heterozygous",
    inheritance: "Autosomal Resessive",
    vaf: "0.5",
    description: "This is a RYR1 variant description"
  },
  {
    id: "4",
    symbol: "TP53",
    transcript: "NM_000546.6",
    hgvs: "NM_000546.5:c.935C>G",
    protein: "NP_000537.3:p.Thr312Ser",
    cdna: "c.935C>G",
    aa: "p.Thr312Ser",
    chr: "17",
    pos: "7576911",
    ref: "C",
    alt: "G",
    hgnc: "HGNC:11998",
    omim: "OMIM:191170",
    clinvar: "RCV000000000",
    gnomad: "0.0000000000",
    sift: "benign",
    polyphen: "benign",
    zygosity: "Heterozygous",
    inheritance: "Autosomal Dominant",
    vaf: "0.5",
    description: "This is a TP53 variant description"
  }
];

// app/routes/variants.tsx
var import_react11 = require("@remix-run/react"), import_react_icons2 = require("@radix-ui/react-icons"), import_react12 = __toESM(require("react")), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader5({ request, params }) {
  return (0, import_node6.json)({ variants });
}
function VariantRoute() {
  let data = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "flex flex-1 flex-col items-center gap-2 px-20 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-6xl font-bold", children: "Variant" }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    data.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContainer, { variant }, variant.id, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var CardContainer = ({ variant }) => {
  let [flip, setFlip] = import_react12.default.useState(!1), handleFlip = (0, import_react12.useCallback)(() => {
    setFlip((flip2) => !flip2);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: "h-[350px] w-[450px] rounded-md border-2 bg-gray-800 p-2 ",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "duration-800 preserve-3d relative h-full w-full transform-gpu items-center transition-transform", children: flip ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardBack, { variant, handleFlip }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardFront, { variant, handleFlip }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    },
    variant.id,
    !1,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
};
function CardFront({
  handleFlip,
  variant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "[ backface-visibility:hidden] absolute flex h-full w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex h-auto w-full grow flex-col justify-between gap-3 overflow-hidden rounded-md border p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Link, { to: `/variants/${variant.id}/annotate`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-xl font-bold text-slate-50", children: variant.symbol }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-1/2 flex-col items-start gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "HGVS:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.hgvs }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "Protein:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.protein }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "cDNA:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.cdna }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-1/2 flex-col items-start gap-2 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "Transcript:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.transcript }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "CPRA:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: [
              "chr",
              variant.chr,
              ":",
              variant.pos,
              variant.ref,
              ">",
              variant.alt
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 96,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "AA:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 102,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.aa }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-center text-xs font-semibold text-slate-50", children: "Description" }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.description }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: handleFlip, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_icons2.InfoCircledIcon, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function CardBack({
  handleFlip,
  variant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "[ backface-visibility:hidden] absolute flex h-full w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex h-auto w-full grow flex-col gap-1 overflow-hidden rounded-md border p-2", children: "back" }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: handleFlip, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_icons2.InfoCircledIcon, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}
function VariantCardFront({ variant }) {
  let [flip, setFlip] = import_react12.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex  w-full flex-col gap-1 rounded-md border-2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: "flex h-[350px] w-[350px] flex-col gap-1 overflow-hidden rounded-md bg-transparent p-2"
    },
    variant.id,
    !1,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 176,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}
function VariantCardBack({ variant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border-red-500  p-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h5", { className: "text-xl font-bold text-gray-900", children: variant.symbol }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 191,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.hgvs }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.protein }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 194,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 190,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex h-full flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
              "chr",
              variant.chr,
              ":",
              variant.pos,
              variant.ref,
              ">",
              variant.alt
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 198,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.gnomad }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 203,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-full flex-col gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-full flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "div",
              {
                className: `flex flex-col gap-2
               rounded-md p-1
            `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h5", { className: "text-left text-xs font-semibold text-gray-500", children: "inSilico" }, void 0, !1, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 212,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: "Combined:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 216,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: sortInSilico({
                      polyphen: variant.polyphen,
                      sift: variant.sift
                    }) }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 217,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 215,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: "SIFT:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 225,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.sift }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 226,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: "PolyPhen:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 227,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.polyphen }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 229,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 224,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/variants.tsx",
                lineNumber: 207,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 206,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-full flex-row gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h5", { className: "text-xs font-semibold text-gray-500", children: "Inheritance:" }, void 0, !1, {
                fileName: "app/routes/variants.tsx",
                lineNumber: 236,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.inheritance === "Autosomal Dominant" ? "A.D" : "A.R" }, void 0, !1, {
                fileName: "app/routes/variants.tsx",
                lineNumber: 239,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 235,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 205,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 196,
          columnNumber: 7
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 186,
      columnNumber: 5
    },
    this
  );
}
function VariantSummaryCard({ variant }) {
  let [flip, setFlip] = import_react12.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border p-2",
      children: [
        flip ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(VariantCardBack, { variant }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 257,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(VariantCardFront, { variant }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 259,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_icons2.DotsVerticalIcon, {}, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 262,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: () => setFlip(!flip), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_icons2.InfoCircledIcon, {}, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 264,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 263,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 261,
          columnNumber: 7
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 252,
      columnNumber: 5
    },
    this
  );
}
function sortInSilico({ polyphen, sift }) {
  let phen = polyphen.toLowerCase(), sifted = sift.toLowerCase();
  return phen === "benign" && sift === "benign" ? "Benign" : phen === "benign" && sifted === "deleterious" || phen === "possibly damaging" && sifted === "tolerated" ? "Likely Benign" : phen === "possibly damaging" && sifted === "deleterious" || phen === "probably damaging" && sifted === "tolerated" ? "Likely Pathogenic" : phen === "probably damaging" && sifted === "deleterious" ? "Pathogenic" : "Unknown";
}

// app/routes/variants.$id.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
async function loader6({ request, params }) {
  let id = params.id;
  if (console.log(id, "id"), !id)
    return (0, import_node7.redirect)("/variants");
  let variant = await variants.find((variant2) => variant2.id === id);
  return variant ? (0, import_node7.json)({ variant }) : (0, import_node7.redirect)("/variants");
}
function VariantRoute2() {
  let data = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "flex flex-1 flex-col items-center gap-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-6xl font-bold", children: "Variant" }, void 0, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Link, { to: `/variants/${data.variant.id}/annotate`, children: "annotate" }, void 0, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(VariantSummaryCard, { variant: data.variant }, data.variant.id, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/variants.$id.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/variants.$id.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants.$id.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/calculator/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => Calculator
});
var import_react14 = require("@remix-run/react"), import_react15 = __toESM(require("react"));

// app/routes/calculator/info.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex min-h-screen flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Documentation, {}, void 0, !1, {
    fileName: "app/routes/calculator/info.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/calculator/info.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
function Documentation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Documentation" }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-gray-500", children: "This is a work in progress. Please check back later." }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-gray-500", children: "Generating Criterion" }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-xl font-bold", children: "Criterion" }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-gray-500", children: "The ACMG/AMP guidelines are broken down into 28 individual criteria. Each Criterion is assigned an evidenceType Group of which there are 8" }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-xl font-bold", children: "Variants" }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-gray-500", children: "Variants are the individual mutations that are being evaluated. Each variant is assigned a classification based on the criteria." }, void 0, !1, {
      fileName: "app/routes/calculator/info.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/calculator/info.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/calculator/route.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Calculator() {
  let strengths = criteria.map((strength) => strength.strength);
  console.log(strengths, "strengths");
  let [criterias, setCriterias] = import_react15.default.useState([]), [criteriaDetail, setCriteriaDetail] = import_react15.default.useState([]), [totals, setTotals] = import_react15.default.useState(0), [classification, setClassification] = import_react15.default.useState("No classification"), [dropdown, setDropdown] = import_react15.default.useState(!1), optionsRef = import_react15.default.useRef(null), formRef = import_react15.default.useRef(null), calculatorRef = import_react15.default.useRef(null);
  function handleChoices(event) {
    let { name, value } = event.target;
    console.log(value, "value");
    let newValue = value.substring(0, value.indexOf("^"));
    console.log(newValue, "newValue");
    let newLabel = value.substring(value.indexOf("^") + 1);
    console.log(newLabel, "newLabel");
    let newCriteriaDetail = [...criteriaDetail];
    newCriteriaDetail.includes(newLabel) || newCriteriaDetail.push(newLabel), setCriteriaDetail(newCriteriaDetail), console.log(newCriteriaDetail, "newCriteriaDetail");
    let subcategory = newValue.substring(0, 1), score = Number(newValue.slice(-1)), shortenedEvidenceType = name.split(" ")[0], newCriteria = [...criterias];
    if (newCriteria.some((criteria2) => criteria2.startsWith(shortenedEvidenceType))) {
      let index = newCriteria.findIndex(
        (criteria2) => criteria2.startsWith(shortenedEvidenceType)
      );
      newCriteria[index] = shortenedEvidenceType + "_" + subcategory + "_" + score;
    } else
      newCriteria.push(shortenedEvidenceType + "_" + subcategory + "_" + score);
    setCriterias(newCriteria), console.log(newCriteria, "newCriteria");
    let trimmedCriteria = newCriteria.map((criteria2) => criteria2.slice(-3));
    console.log(trimmedCriteria, "trimmedCriteria");
    let total = getNumbers2(trimmedCriteria).reduce((a, b) => a + b, 0);
    console.log(total, "total"), setTotals(total), total <= -7 ? setClassification("Benign") : total >= -6 && total <= -1 ? setClassification("Likely Benign") : total >= 0 && total <= 5 ? setClassification("Uncertain Significance") : total >= 6 && total <= 9 ? setClassification("Likely Pathogenic") : total >= 10 ? setClassification("Pathogenic") : setClassification("No Classification");
  }
  let handleClickOutside = (event) => {
    optionsRef.current && !optionsRef.current.contains(event.target) && setDropdown(!1);
  };
  import_react15.default.useEffect(() => (document.addEventListener("mouseleave", handleClickOutside), () => {
    document.removeEventListener("mouseleave", handleClickOutside);
  }), []);
  function handleReset() {
    var _a, _b;
    ((_a = calculatorRef.current) == null ? void 0 : _a.innerText) !== null && setClassification("No Classification"), (_b = formRef.current) == null || _b.reset(), setCriterias([]), setTotals(0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "block", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "div",
      {
        ref: calculatorRef,
        className: "block w-full flex-col items-center gap-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-center text-2xl font-bold", children: "ACMG Classification" }, void 0, !1, {
            fileName: "app/routes/calculator/route.tsx",
            lineNumber: 128,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-xl font-bold", children: [
            "Criterias: ",
            criterias
          ] }, void 0, !0, {
            fileName: "app/routes/calculator/route.tsx",
            lineNumber: 129,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "text-xl font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-xl font-bold", children: [
              " ",
              "Total Score: ",
              totals !== 0 ? totals : 0
            ] }, void 0, !0, {
              fileName: "app/routes/calculator/route.tsx",
              lineNumber: 131,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-xl font-bold", children: [
              " ",
              "Criteria: [",
              criteriaDetail.map((criteria2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: [
                index !== 0 ? ", " : "",
                criteria2
              ] }, index, !0, {
                fileName: "app/routes/calculator/route.tsx",
                lineNumber: 140,
                columnNumber: 15
              }, this)),
              "]"
            ] }, void 0, !0, {
              fileName: "app/routes/calculator/route.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/calculator/route.tsx",
            lineNumber: 130,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-xl font-bold", children: [
            "Classification: ",
            classification
          ] }, void 0, !0, {
            fileName: "app/routes/calculator/route.tsx",
            lineNumber: 148,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/calculator/route.tsx",
        lineNumber: 124,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex w-full flex-col gap-1 md:flex-row md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full border border-blue-500 px-4 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react14.Form,
        {
          id: "form",
          ref: formRef,
          method: "post",
          className: "flex flex-col gap-1",
          children: [
            criteria.map((population) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "label",
                {
                  className: "text-left font-semibold capitalize",
                  children: population.name
                },
                population.id,
                !1,
                {
                  fileName: "app/routes/calculator/route.tsx",
                  lineNumber: 160,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "select",
                {
                  "data-state": dropdown,
                  id: "select",
                  title: population.name,
                  className: "rounded-md border border-gray-300 text-black",
                  name: population.name,
                  onChange: handleChoices,
                  children: population.strength.map((strength) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                    "option",
                    {
                      ref: optionsRef,
                      "data-category-type": strength.value.slice(0, 1),
                      "data-etype": strength.label,
                      placeholder: "Pick a Criterion",
                      id: strength.label,
                      value: strength.value + "^" + strength.label,
                      defaultChecked: !1,
                      children: strength.label
                    },
                    strength.id,
                    !1,
                    {
                      fileName: "app/routes/calculator/route.tsx",
                      lineNumber: 177,
                      columnNumber: 21
                    },
                    this
                  ))
                },
                population.id,
                !1,
                {
                  fileName: "app/routes/calculator/route.tsx",
                  lineNumber: 167,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/calculator/route.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { variant: "primary_filled", size: "base", type: "submit", children: "Submit" }, void 0, !1, {
                fileName: "app/routes/calculator/route.tsx",
                lineNumber: 194,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                Button,
                {
                  variant: "warning_filled",
                  size: "base",
                  type: "button",
                  onClick: handleReset,
                  children: "Reset"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/calculator/route.tsx",
                  lineNumber: 197,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/calculator/route.tsx",
              lineNumber: 193,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/calculator/route.tsx",
          lineNumber: 152,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/calculator/route.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full border border-red-500 px-4 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Index, {}, void 0, !1, {
        fileName: "app/routes/calculator/route.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/calculator/route.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/calculator/route.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/calculator/route.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}
function getNumbers2(trimmedCriteria) {
  let myArray = [];
  return trimmedCriteria.forEach((criteria2) => {
    if (criteria2.startsWith("B")) {
      let number = -Number(criteria2.slice(-1));
      myArray.push(number);
    } else if (criteria2.startsWith("P")) {
      let number = Number(criteria2.slice(-1));
      myArray.push(number);
    }
  }), myArray;
}

// app/routes/criterion.tsx
var criterion_exports = {};
__export(criterion_exports, {
  default: () => Criterio,
  loader: () => loader7
});
var import_react_icons3 = require("@radix-ui/react-icons"), import_node8 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), import_react17 = __toESM(require("react"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  let searchParam = new URLSearchParams(request.url.split("?")[1]).get("searchParam") || "";
  console.log(searchParam, "searchParam");
  let criterion = await prisma.criterion.findMany({
    where: {
      evidenceType: {
        contains: searchParam
      }
    },
    orderBy: {
      evidenceType: "asc"
    }
  });
  console.log(criterion, "criterion");
  let groups = criterion.reduce((acc, cur) => (acc[cur.evidenceType] || (acc[cur.evidenceType] = []), acc[cur.evidenceType].push(cur.weight), acc), {});
  console.log(groups, "groups");
  let columnNames = criterion.reduce(
    (acc, cur) => (acc.includes(cur.evidenceType) || acc.push(cur.evidenceType), acc),
    []
  );
  return (0, import_node8.json)({ criterion, columnNames, groups });
}
function Criterio() {
  let data = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex min-h-screen w-full flex-col p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Documentation" }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "This page is a work in progress. Please check back later for more information. Definitions are based on the ACMG/AMP 2015 Guidelines." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "Individual Criterion are grouped by Evidence Type. Click on the Evidence Type to see the Criterion." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "To Edit a Criterion, click on the Criterion Name." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2 p-1", children: data.columnNames.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        className: "items-cener flex w-full flex-col gap-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CriteriaFetcher, { searchParam: column }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 96,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      },
      column,
      !1,
      {
        fileName: "app/routes/criterion.tsx",
        lineNumber: 91,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function CriteriaFetcher({ searchParam }) {
  var _a;
  let criterion = (_a = (0, import_react16.useMatches)().find((match) => match.pathname === "/criterion")) == null ? void 0 : _a.data.criterion, byEvidenceType = criterion == null ? void 0 : criterion.filter((criterion2) => criterion2.evidenceType === searchParam), [open, setOpen] = import_react17.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "div",
    {
      className: `flex w-full flex-col gap-2 p-1 ${open ? "rounded-md border border-gray-500" : "rounded-md border"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            className: "flex flex-row items-center gap-2",
            onClick: () => setOpen(!open),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-xl font-bold", children: searchParam }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 129,
                columnNumber: 11
              }, this),
              open ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react_icons3.ChevronUpIcon, {}, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react_icons3.ChevronDownIcon, {}, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 131,
                columnNumber: 39
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 125,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2 p-1", children: byEvidenceType == null ? void 0 : byEvidenceType.map((criterion2) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Link, { to: `/criterion/${criterion2.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-xl font-bold", children: criterion2.label }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormatDefinition, { definition: criterion2.definition }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          criterion2.example ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: [
            " ",
            "Example: ",
            criterion2.example
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 149,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this) : null,
          criterion2.caveat ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: [
            " Caveat: ",
            criterion2.caveat
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this) : null,
          criterion2.criterionBaseWeight ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: [
            "Criterion Base Weight: ",
            criterion2.criterionBaseWeight
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 164,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, this) : null,
          criterion2.weight ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: [
            "Weight: ",
            criterion2.weight
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 171,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this) : null
        ] }, criterion2.id, !0, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 119,
      columnNumber: 5
    },
    this
  );
}
function FormatDefinition({ definition }) {
  function sortMe(definition2) {
    return definition2.toString().replace("P:", "Supporting: ").replace("VS:", "Strong: ").replace("M:", "Moderate: ").replace("S:", "Strong: ").replace("SA: ", "Stand alone:");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: [
    "Definition: ",
    sortMe(definition)
  ] }, void 0, !0, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 198,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 197,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "Sign In route" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_remix4.SignIn, { routing: "path", path: "/sign-in" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignUpPage
});
var import_remix5 = require("@clerk/remix"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "Sign Up route" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_remix5.SignUp, { routing: "path", path: "/sign-up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/beta.tsx
var beta_exports = {};
__export(beta_exports, {
  action: () => action3,
  default: () => Beta,
  loader: () => loader8
});
var import_node9 = require("@remix-run/node");
var import_react18 = require("@remix-run/react"), import_react19 = __toESM(require("react")), import_react_icons4 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader8({ request, params }) {
  let criteria2 = await prisma.criterion.findMany();
  return (0, import_node9.json)({ criteria: criteria2 });
}
async function action3({ request, params }) {
  let formData = await request.formData();
  console.log(Object.fromEntries(formData), "formData");
  let population = formData.get("population_data"), functional = formData.get("functional_data"), deNovo = formData.get("de_novo_data"), allele = formData.get("allele_data"), segregation = formData.get("segregation_data"), other = formData.get("other_data"), computational = formData.get("computational_data");
  function getCriteria(item) {
    let [evidenceType, label, weight] = item.split("^");
    return {
      label
    };
  }
  let pop = getCriteria(population);
  return console.log(pop, "pop"), (0, import_node9.json)({
    message: "success"
  });
}
function Beta() {
  let data = (0, import_react18.useLoaderData)(), [checkedBox, setCheckedBox] = import_react19.default.useState([]), [selectedOption, setSelectedOption] = import_react19.default.useState(""), [selected, setSelected] = import_react19.default.useState([]), functionalData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Functional Data"
  ), [open, setOpen] = import_react19.default.useState(!1), bothArrays = [...selected, ...checkedBox];
  console.log(bothArrays, "bothArrays");
  let total = bothArrays.reduce((acc, curr) => acc + curr.weight, 0), [classification, setClassification] = import_react19.default.useState("");
  function getClassificatin(total2) {
    total2 <= -7 ? setClassification("Benign") : total2 >= -6 && total2 <= -1 ? setClassification("Likely Benign") : total2 >= 0 && total2 <= 5 ? setClassification("Uncertain Significance") : total2 >= 6 && total2 <= 9 ? setClassification("Likely Pathogenic") : total2 >= 10 ? setClassification("Pathogenic") : setClassification("No Classification");
  }
  import_react19.default.useEffect(() => {
    getClassificatin(total);
  }, [total]), console.log(classification, "classification");
  let population = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Population Data"
  ), deNovo = data.criteria.filter(
    (criterion) => criterion.evidenceType === "De Novo Data"
  ), alleleData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Allelic Data"
  ), segregationData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Segregation Data"
  ), otherdata = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Other Data"
  ), computationalData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Computational and Predictive Data"
  ), otherdb = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Other Database"
  ), handleCheckboxChange = (e) => {
    let { name, value, checked } = e.target, [evidenceType, label, weight] = value.split("^");
    setCheckedBox(checked ? (prev) => [
      ...prev,
      {
        evidenceType,
        label,
        weight: Number(weight)
      }
    ] : (prev) => prev.filter((criterion) => criterion.label !== label));
  }, handleSelectChange = (e) => {
    let { value } = e.target, [evidenceType, label, weight] = value.split("^");
    evidenceType !== "" && (setSelected(
      (prev) => prev.filter((criterion) => criterion.evidenceType !== evidenceType)
    ), setSelected((prev) => [
      ...prev,
      {
        evidenceType,
        label,
        weight: Number(weight) || 0
      }
    ]));
  }, evidenceTypes = Array.from(
    new Set(data.criteria.map((c) => c.evidenceType))
  );
  return console.log(evidenceTypes, "evidenceTypes"), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-2xl font-bold", children: "ACMG Variant Classification:" }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      classification
    ] }, void 0, !0, {
      fileName: "app/routes/beta.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react18.Form, { method: "post", action: "/beta", className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: population,
            name: "population_data"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 178,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: deNovo,
            name: "de_novo_data"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 184,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: alleleData,
            name: "allele_data"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 189,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: segregationData,
            name: "segregation_data"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 194,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: otherdata,
            name: "other_data"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 199,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: computationalData,
            name: "computational_data"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 204,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          CSelect,
          {
            handleSelectChange,
            criterion: otherdb,
            name: "other_db"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/beta.tsx",
            lineNumber: 209,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "capitalize", children: "functional data" }, void 0, !1, {
              fileName: "app/routes/beta.tsx",
              lineNumber: 216,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "button", onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons4.ChevronUpIcon, { className: "h-6 w-6" }, void 0, !1, {
              fileName: "app/routes/beta.tsx",
              lineNumber: 219,
              columnNumber: 19
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons4.ChevronDownIcon, { className: "h-6 w-6" }, void 0, !1, {
              fileName: "app/routes/beta.tsx",
              lineNumber: 221,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/beta.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/beta.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          open && functionalData.map((criterion) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "capitalize", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "input",
              {
                type: "checkbox",
                name: criterion.evidenceType,
                value: `${criterion.evidenceType}^${criterion.label}^${criterion.weight}`,
                onChange: handleCheckboxChange
              },
              void 0,
              !1,
              {
                fileName: "app/routes/beta.tsx",
                lineNumber: 228,
                columnNumber: 19
              },
              this
            ),
            criterion.label
          ] }, criterion.id, !0, {
            fileName: "app/routes/beta.tsx",
            lineNumber: 227,
            columnNumber: 17
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/beta.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { variant: "primary_filled", size: "base", type: "submit", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/beta.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/beta.tsx",
    lineNumber: 170,
    columnNumber: 5
  }, this);
}
function CSelect({
  handleSelectChange,
  criterion,
  name
}) {
  let [open, setOpen] = import_react19.default.useState(!1), [value, setValue] = import_react19.default.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col gap-2 rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: " capitalize", htmlFor: "gene", children: name.split("_").join(" ") }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "button", onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons4.ChevronUpIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 294,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons4.ChevronDownIcon, { className: "h-6 w-6" }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 296,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/beta.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative ", children: [
      value,
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "hidden", name, value }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: (e) => {
            handleSelectChange(
              e
            ), setOpen(!1);
          },
          className: "abg-red-500 h-6 w-6 rounded-full text-white",
          children: value === "" ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons4.Cross2Icon, {}, void 0, !1, {
            fileName: "app/routes/beta.tsx",
            lineNumber: 314,
            columnNumber: 32
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/beta.tsx",
          lineNumber: 304,
          columnNumber: 9
        },
        this
      ),
      open && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "absolute z-10 w-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { className: "flex flex-col gap-2", children: criterion.map((criterion2) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { className: "capitalize text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "button",
        {
          type: "button",
          value: `${criterion2.evidenceType}^${criterion2.label}^${criterion2.weight}`,
          className: value === criterion2.label ? "bg-blue-100" : "",
          onClick: (e) => {
            let { value: value2 } = e.currentTarget, [evidenceType, label, weight] = value2.split("^");
            setValue(value2), handleSelectChange(
              e
            ), setOpen(!1);
          },
          children: criterion2.label
        },
        void 0,
        !1,
        {
          fileName: "app/routes/beta.tsx",
          lineNumber: 322,
          columnNumber: 21
        },
        this
      ) }, criterion2.id, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 321,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 320,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 318,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/beta.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/beta.tsx",
      lineNumber: 300,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/beta.tsx",
    lineNumber: 287,
    columnNumber: 5
  }, this);
}

// app/routes/wip.tsx
var wip_exports = {};
__export(wip_exports, {
  action: () => action4,
  default: () => Wip,
  loader: () => loader9
});
var import_node10 = require("@remix-run/node"), import_react21 = require("@remix-run/react");

// app/components/accord-drop.tsx
var import_react_icons5 = require("@radix-ui/react-icons"), import_react20 = __toESM(require("react")), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Dropdown = ({ options, onChange, title }) => {
  let [isOpen, setIsOpen] = (0, import_react20.useState)(!1), [selectedOption, setSelectedOption] = (0, import_react20.useState)(null), handleSelect = (option) => {
    setSelectedOption(option), onChange(option), setIsOpen(!1);
  };
  return import_react20.default.useEffect(() => {
    let handleKeyboardEvent = (event) => {
      event.key === "Escape" && setIsOpen(!1);
    };
    return document.addEventListener("keydown", handleKeyboardEvent), () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative flex w-72 flex-col gap-2 rounded-md border-2 p-1", children: [
    title,
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "div",
        {
          className: "flex w-1/2 flex-row   gap-2 items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-xs", children: (selectedOption == null ? void 0 : selectedOption.label) || "Select an option" }, void 0, !1, {
              fileName: "app/components/accord-drop.tsx",
              lineNumber: 45,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "button",
              {
                type: "button",
                className: "",
                onClick: () => setSelectedOption(null),
                children: selectedOption && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_icons5.Cross2Icon, {}, void 0, !1, {
                  fileName: "app/components/accord-drop.tsx",
                  lineNumber: 50,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/accord-drop.tsx",
                lineNumber: 46,
                columnNumber: 6
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/accord-drop.tsx",
          lineNumber: 42,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "button",
        {
          type: "button",
          className: "flex flex-row items-center  gap-2 ",
          onClick: () => setIsOpen(!isOpen),
          children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_icons5.ChevronUpIcon, {}, void 0, !1, {
            fileName: "app/components/accord-drop.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_icons5.ChevronDownIcon, {}, void 0, !1, {
            fileName: "app/components/accord-drop.tsx",
            lineNumber: 62,
            columnNumber: 39
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/accord-drop.tsx",
          lineNumber: 55,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/accord-drop.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "ul",
      {
        className: `absolute left-[50%] top-10 z-10 w-full -translate-x-1/2 transform rounded-md border-2 
                    bg-white p-1
                    text-black`,
        children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "li",
          {
            className: "flex w-full cursor-pointer  flex-col overflow-auto hover:bg-gray-200",
            onClick: () => handleSelect(option),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "items-centser flex flex-col justify-between gap-1 border-b-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-base", children: option.label }, void 0, !1, {
                fileName: "app/components/accord-drop.tsx",
                lineNumber: 81,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-[8px]", children: [
                "Definition:",
                option.definition
              ] }, void 0, !0, {
                fileName: "app/components/accord-drop.tsx",
                lineNumber: 82,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/accord-drop.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          },
          option.value,
          !1,
          {
            fileName: "app/components/accord-drop.tsx",
            lineNumber: 75,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/accord-drop.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/accord-drop.tsx",
        lineNumber: 66,
        columnNumber: 9
      },
      this
    ),
    options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: option.value,
        value: selectedOption == null ? void 0 : selectedOption.label
      },
      option.value,
      !1,
      {
        fileName: "app/components/accord-drop.tsx",
        lineNumber: 92,
        columnNumber: 11
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/components/accord-drop.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}, accord_drop_default = Dropdown;

// app/routes/wip.tsx
var import_react22 = __toESM(require("react"));

// app/constants/acmg-criteria.ts
var specialCases = [
  "PM2_Supporting",
  "PVS1_Supporting",
  "PVS1_Strong",
  "PVS1_Moderate"
], specialConversion = {
  PM2_Supporting: "P",
  PVS1_Supporting: "P",
  PVS1_Strong: "S",
  PVS1_Moderate: "M"
}, extractFirstTwoLetters = (arr) => {
  let firstTwoLetters = [];
  return arr.map((item) => {
    let firstLetter = item[0], firstTwoChars;
    return item.indexOf("_") > -1 && specialCases.includes(item) ? firstTwoChars = item[0] + specialConversion[item] : firstTwoChars = item.substring(0, 2), firstTwoLetters.push(firstTwoChars), firstTwoChars;
  });
};
function convertToNumbers(arr) {
  let strengthValues = {
    V: 5,
    A: 8,
    S: 4,
    M: 2,
    P: 1
  }, totalSum = arr.map((item) => {
    let firstLetter = item[0], secondLetter = item[1], secondNumber = strengthValues[secondLetter];
    return firstLetter === "B" ? -secondNumber : secondNumber;
  }).reduce((sum, value) => sum + value, 0), obj = {};
  return totalSum <= -7 ? obj.classification = "Benign" : totalSum >= -6 && totalSum <= -1 ? obj.classification = "Likely Benign" : totalSum >= 0 && totalSum <= 5 ? obj.classification = "Variant of Uncertain Significance" : totalSum >= 6 && totalSum <= 9 ? obj.classification = "Likely Pathogenic" : totalSum >= 10 && (obj.classification = "Pathogenic"), obj.totalSum = totalSum, obj;
}

// app/routes/wip.tsx
var import_react_icons6 = require("@radix-ui/react-icons"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function loader9({ request, params }) {
  let criteria2 = await prisma.criterion.findMany();
  return (0, import_node10.json)({ criteria: criteria2 });
}
async function action4({ request, params }) {
  let formData = await request.formData();
  console.log(
    Object.fromEntries(formData),
    "formData"
  );
  let pop = formData.get("Population Data"), func = formData.getAll("Functional Data"), comp = formData.get("Computational and Predictive Data"), seg = formData.get("Segregation Data"), deNovo = formData.get("De Novo Data"), allelic = formData.get("Allelic Data"), other = formData.get("Other Data"), patho = formData.get("Other Database");
  return (0, import_node10.json)({
    message: "success"
  });
}
function Wip() {
  let data = (0, import_react21.useLoaderData)(), [open, setOpen] = import_react22.default.useState(!1), [criteriaUsed, setCriteriaUsed] = import_react22.default.useState([]);
  console.log(criteriaUsed, "criteriaUsed");
  let checkboxselected = criteriaUsed.filter((item) => item.type === "Functional Data"), fixedSelectedCriteria = criteriaUsed.map((item) => item.label), reducedSelectedCriteria = extractFirstTwoLetters(fixedSelectedCriteria), transformed = convertToNumbers(reducedSelectedCriteria), functional_data = data.criteria.filter((item) => item.evidenceType === "Functional Data"), woFunctional = data.criteria.filter((item) => item.evidenceType !== "Functional Data"), accordianData = woFunctional.reduce((acc, cur) => (acc.findIndex((item) => item === cur.evidenceType) === -1 && acc.push(cur.evidenceType), acc), []).reduce((acc, cur) => (acc[cur] = woFunctional.filter((item) => item.evidenceType === cur), acc), {}), handleSelect = (option) => {
    let index = criteriaUsed.findIndex((item) => item.type === option.value);
    if (index !== -1) {
      setCriteriaUsed((prev) => {
        let copy = [...prev];
        return copy.splice(index, 1), [...copy, { type: option.value, label: option.label }];
      });
      return;
    }
    setCriteriaUsed((prev) => [
      ...prev,
      { type: option.value, label: option.label }
    ]);
  };
  function handleCheckboxChange(e) {
    let { name, value, checked } = e.target;
    if (checked && checkboxselected.length < 4) {
      setCriteriaUsed((prev) => [...prev, { type: name, label: value }]);
      return;
    }
    setCriteriaUsed((prev) => {
      let copy = [...prev], index = copy.findIndex((item) => item.label === value);
      return index !== -1 && copy.splice(index, 1), [...copy];
    });
  }
  let dropdowns = Object.entries(accordianData).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    accord_drop_default,
    {
      title: key[0],
      options: data.criteria.filter((criterion) => criterion.evidenceType === key[0]).map((criterion) => ({
        value: criterion.evidenceType,
        label: criterion.label,
        definition: criterion.definition
      })),
      onChange: handleSelect
    },
    key[0],
    !1,
    {
      fileName: "app/routes/wip.tsx",
      lineNumber: 146,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center py-2 pb-10 pt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-2xl font-bold", children: "ACMG Criteria Work in Progress" }, void 0, !1, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    criteriaUsed.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-2", children: item.label }, item.type, !1, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 170,
      columnNumber: 11
    }, this)),
    transformed.classification,
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Form, { method: "post", children: [
      dropdowns,
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        CheckBoxes2,
        {
          checkboxselected,
          data: functional_data,
          setIsOpen: setOpen,
          handleCheckboxChange
        },
        void 0,
        !1,
        {
          fileName: "app/routes/wip.tsx",
          lineNumber: 181,
          columnNumber: 3
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/wip.tsx",
        lineNumber: 180,
        columnNumber: 1
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "submit", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/wip.tsx",
        lineNumber: 188,
        columnNumber: 3
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 177,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/wip.tsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}
function CheckBoxes2({
  data,
  setIsOpen,
  handleCheckboxChange,
  checkboxselected
}) {
  let [open, setOpen] = import_react22.default.useState(!1), [selected, setSelected] = import_react22.default.useState([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex w-72 flex-col gap-2 rounded-md border-2 p-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex justify-between gap-2", children: [
      data.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "p-1", children: data[0].evidenceType }, void 0, !1, {
        fileName: "app/routes/wip.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/wip.tsx",
        lineNumber: 223,
        columnNumber: 13
      }, this),
      selected.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: item.label }, item.value, !1, {
        fileName: "app/routes/wip.tsx",
        lineNumber: 232,
        columnNumber: 18
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => {
            setOpen(!open);
          },
          children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react_icons6.ChevronUpIcon, {}, void 0, !1, {
            fileName: "app/routes/wip.tsx",
            lineNumber: 241,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react_icons6.ChevronDownIcon, {}, void 0, !1, {
            fileName: "app/routes/wip.tsx",
            lineNumber: 241,
            columnNumber: 39
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/wip.tsx",
          lineNumber: 235,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 220,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-2", children: checkboxselected.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-2 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "p-1", children: item.label }, void 0, !1, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 249,
      columnNumber: 15
    }, this) }, item.label, !1, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 248,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    open && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col gap-2", children: data.map((criterion) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "label",
        {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "checkbox",
                name: criterion.evidenceType,
                value: criterion.label,
                onChange: handleCheckboxChange
              },
              void 0,
              !1,
              {
                fileName: "app/routes/wip.tsx",
                lineNumber: 264,
                columnNumber: 19
              },
              this
            ),
            criterion.label
          ]
        },
        criterion.evidenceType,
        !0,
        {
          fileName: "app/routes/wip.tsx",
          lineNumber: 260,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-sm", children: criterion.definition }, void 0, !1, {
        fileName: "app/routes/wip.tsx",
        lineNumber: 272,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 259,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/wip.tsx",
      lineNumber: 256,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/wip.tsx",
    lineNumber: 219,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VF4IYYO7.js", imports: ["/build/_shared/chunk-LKOPCC2G.js", "/build/_shared/chunk-GUPKMWBY.js", "/build/_shared/chunk-ABY47LC6.js", "/build/_shared/chunk-TZ27RBAM.js", "/build/_shared/chunk-J2OVIFEL.js", "/build/_shared/chunk-MQESCB4Y.js", "/build/_shared/chunk-HH3BOLTW.js", "/build/_shared/chunk-R6ILELA2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2IXAHHVH.js", imports: ["/build/_shared/chunk-WNJU47PY.js", "/build/_shared/chunk-GJCQINV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/beta": { id: "routes/beta", parentId: "root", path: "beta", index: void 0, caseSensitive: void 0, module: "/build/routes/beta-UVN7MEVI.js", imports: ["/build/_shared/chunk-A5NX5H24.js", "/build/_shared/chunk-D2JCSPI6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/calculator": { id: "routes/calculator", parentId: "root", path: "calculator", index: void 0, caseSensitive: void 0, module: "/build/routes/calculator-WBXJODFZ.js", imports: ["/build/_shared/chunk-RZYARJKT.js", "/build/_shared/chunk-D2JCSPI6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criteria-dropdown": { id: "routes/criteria-dropdown", parentId: "root", path: "criteria-dropdown", index: void 0, caseSensitive: void 0, module: "/build/routes/criteria-dropdown-ZMDEFM5P.js", imports: ["/build/_shared/chunk-A5NX5H24.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion": { id: "routes/criterion", parentId: "root", path: "criterion", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion-ZIVBXQDI.js", imports: ["/build/_shared/chunk-A5NX5H24.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion.help": { id: "routes/criterion.help", parentId: "routes/criterion", path: "help", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion.help-DVN556NV.js", imports: ["/build/_shared/chunk-GJCQINV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion_.$splat": { id: "routes/criterion_.$splat", parentId: "root", path: "criterion/:splat", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion_.$splat-3REZYNGQ.js", imports: ["/build/_shared/chunk-D2JCSPI6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-2DZMBREB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-7YUFWEHQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants": { id: "routes/variants", parentId: "root", path: "variants", index: void 0, caseSensitive: void 0, module: "/build/routes/variants-VDY4MTM7.js", imports: ["/build/_shared/chunk-IXKHEUAX.js", "/build/_shared/chunk-A5NX5H24.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants.$id": { id: "routes/variants.$id", parentId: "routes/variants", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/variants.$id-VVBXGDTD.js", imports: ["/build/_shared/chunk-GJCQINV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants_.$id.annotate": { id: "routes/variants_.$id.annotate", parentId: "root", path: "variants/:id/annotate", index: void 0, caseSensitive: void 0, module: "/build/routes/variants_.$id.annotate-QB7NAKOT.js", imports: ["/build/_shared/chunk-RZYARJKT.js", "/build/_shared/chunk-D2JCSPI6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/wip": { id: "routes/wip", parentId: "root", path: "wip", index: void 0, caseSensitive: void 0, module: "/build/routes/wip-2CR6Y6SS.js", imports: ["/build/_shared/chunk-A5NX5H24.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "52d20e48", hmr: { runtime: "/build/_shared/chunk-J2OVIFEL.js", timestamp: 1685565906775 }, url: "/build/manifest-52D20E48.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, dev = { websocketPort: 3004 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/variants_.$id.annotate": {
    id: "routes/variants_.$id.annotate",
    parentId: "root",
    path: "variants/:id/annotate",
    index: void 0,
    caseSensitive: void 0,
    module: variants_id_annotate_exports
  },
  "routes/criteria-dropdown": {
    id: "routes/criteria-dropdown",
    parentId: "root",
    path: "criteria-dropdown",
    index: void 0,
    caseSensitive: void 0,
    module: criteria_dropdown_exports
  },
  "routes/criterion_.$splat": {
    id: "routes/criterion_.$splat",
    parentId: "root",
    path: "criterion/:splat",
    index: void 0,
    caseSensitive: void 0,
    module: criterion_splat_exports
  },
  "routes/criterion.help": {
    id: "routes/criterion.help",
    parentId: "routes/criterion",
    path: "help",
    index: void 0,
    caseSensitive: void 0,
    module: criterion_help_exports
  },
  "routes/variants.$id": {
    id: "routes/variants.$id",
    parentId: "routes/variants",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: variants_id_exports
  },
  "routes/calculator": {
    id: "routes/calculator",
    parentId: "root",
    path: "calculator",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/criterion": {
    id: "routes/criterion",
    parentId: "root",
    path: "criterion",
    index: void 0,
    caseSensitive: void 0,
    module: criterion_exports
  },
  "routes/variants": {
    id: "routes/variants",
    parentId: "root",
    path: "variants",
    index: void 0,
    caseSensitive: void 0,
    module: variants_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up": {
    id: "routes/sign-up",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/beta": {
    id: "routes/beta",
    parentId: "root",
    path: "beta",
    index: void 0,
    caseSensitive: void 0,
    module: beta_exports
  },
  "routes/wip": {
    id: "routes/wip",
    parentId: "root",
    path: "wip",
    index: void 0,
    caseSensitive: void 0,
    module: wip_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
