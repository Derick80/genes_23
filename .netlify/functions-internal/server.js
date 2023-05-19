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
var tailwind_default = "/build/_assets/tailwind-JMMVCRLA.css";

// app/components/layout.tsx
var import_remix = require("@clerk/remix"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  let { userId } = (0, import_remix.useAuth)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex min-h-screen flex-col bg-gray-900 p-1 text-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "fixed left-0 right-0 top-0 z-50 flex flex-wrap items-center justify-between gap-2  shadow-md bg-gray-800 p-1 text-gray-100 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-2xl font-bold", children: "ACMG Variant Classifications" }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "li",
          {
            className: "font-semibold",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Home" }, void 0, !1, {
              fileName: "app/components/layout.tsx",
              lineNumber: 15,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 12,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "li",
          {
            className: "font-semibold",
            children: [
              "            ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/criterion", children: "Criterion" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 19,
                columnNumber: 24
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "li",
          {
            className: "font-semibold",
            children: [
              "            ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "variants", children: "Variants" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 23,
                columnNumber: 24
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-out", children: "Sign Out" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 28,
          columnNumber: 28
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1 text-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-in", children: "Sign In" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-up", children: "Sign Up" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "mt-20 relative flex-1", children }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "fixed left-0 right-0 bottom-0 z-50 h-10 justify-center flex  items-center bg-gray-800 text-gray-100 shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "li",
        {
          className: "font-semibold",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react2.Link,
            {
              to: "/https://github.com/Derick80",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: "Github" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 43,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/layout.tsx",
          lineNumber: 40,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-1 font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm ", children: "Copyright" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: [
          " ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "li",
        {
          className: "font-semibold",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react2.Link,
            {
              to: "/https://twitter.com/Derick80",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: "Twitter" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 60,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 58,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/layout.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 38,
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

// app/constants/bayes-table.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function BayesTable() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-1/2 flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "w-1/2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "text-left", children: "Category" }, void 0, !1, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 7,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "text-left", children: "Total Score" }, void 0, !1, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/constants/bayes-table.tsx",
      lineNumber: 6,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/constants/bayes-table.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Pathogenic" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " >10" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " Likely Pathogenic" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " 6-9" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Uncertain Significance" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "0-5" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Likely Benign" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: " -1-6" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: "Benign" }, void 0, !1, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "text-left", children: [
          " ",
          ">=",
          "-7"
        ] }, void 0, !0, {
          fileName: "app/constants/bayes-table.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", {}, void 0, !1, {
        fileName: "app/constants/bayes-table.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/constants/bayes-table.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs text-gray-500", children: "*Note: This is a beta version of the ACMG classification tool. Please use with caution. Based on Tavtigian 2020" }, void 0, !1, {
      fileName: "app/constants/bayes-table.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/constants/bayes-table.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/constants/bayes-table.tsx",
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
        id: "0",
        value: "",
        label: "Pick a Criterion"
      },
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
        id: "0",
        value: "",
        label: "Pick a Criterion"
      },
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
        id: "0",
        value: "",
        label: "Pick a Criterion"
      },
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
        id: "0",
        value: "",
        label: "Pick a Criterion"
      },
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
  return import_react5.default.useEffect(() => (document.addEventListener("mouseleave", handleClickOutside), () => {
    document.removeEventListener("mouseleave", handleClickOutside);
  }), []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex min-h-screen flex-col  p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        ref: calculatorRef,
        className: "flex w-full flex-col items-center gap-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "h3",
            {
              className: "text-2xl font-bold",
              children: "ACMG Classification"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/variants_.$id.annotate.tsx",
              lineNumber: 153,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-bold", children: [
            " ",
            criterias
          ] }, void 0, !0, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 156,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-bold", children: [
            "Total Score: ",
            totals !== 0 ? totals : 0
          ] }, void 0, !0, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-bold", children: [
            "Classification: ",
            classification
          ] }, void 0, !0, {
            fileName: "app/routes/variants_.$id.annotate.tsx",
            lineNumber: 160,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/variants_.$id.annotate.tsx",
        lineNumber: 149,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BayesTable, {}, void 0, !1, {
        fileName: "app/routes/variants_.$id.annotate.tsx",
        lineNumber: 163,
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
                  lineNumber: 171,
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
                      lineNumber: 188,
                      columnNumber: 19
                    },
                    this
                  ))
                },
                population.id,
                !1,
                {
                  fileName: "app/routes/variants_.$id.annotate.tsx",
                  lineNumber: 178,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/variants_.$id.annotate.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                Button,
                {
                  variant: "primary_filled",
                  size: "base",
                  type: "submit",
                  children: "Submit"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/variants_.$id.annotate.tsx",
                  lineNumber: 205,
                  columnNumber: 10
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                Button,
                {
                  variant: "warning_filled",
                  size: "base",
                  type: "button",
                  onClick: () => setReset(!reset),
                  children: "Reset"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/variants_.$id.annotate.tsx",
                  lineNumber: 212,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/variants_.$id.annotate.tsx",
              lineNumber: 204,
              columnNumber: 10
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/variants_.$id.annotate.tsx",
          lineNumber: 165,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/variants_.$id.annotate.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants_.$id.annotate.tsx",
    lineNumber: 148,
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

// app/routes/criterion_.$splat.tsx
var criterion_splat_exports = {};
__export(criterion_splat_exports, {
  action: () => action2,
  default: () => EditIndex,
  loader: () => loader3
});
var import_remix3 = require("@clerk/remix"), import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_zod = require("zod");

// app/functions.ts
var import_react6 = require("@remix-run/react"), import_react7 = require("react");
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
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
  let { criterionName, definition, evidenceType, example, criterionBaseWeight, caveat } = formData;
  if (await prisma.criterion.update({
    where: {
      id: criterionId
    },
    data: {
      criterionName,
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
  let data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react8.Form,
    {
      className: "flex w-full max-w-2xl flex-col gap-2 rounded-md border p-4  ",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "criterionName", children: "Criterion Name" }, void 0, !1, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            className: "border-2 border-gray-400 rounded-md p-2 text-black",
            type: "text",
            name: "criterionName",
            id: "criterionName",
            placeholder: "criterionName",
            defaultValue: data.criterion[0].criterionName
          },
          void 0,
          !1,
          {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 107,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "definition", children: "Definition" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              className: "border-2 border-gray-400 rounded-md p-2 text-black",
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
              lineNumber: 119,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "evidenceType", children: "Evidence Type" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 129,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              className: "border-2 border-gray-400 rounded-md p-2 text-black",
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
              lineNumber: 132,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "example", children: "Example" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              className: "border-2 border-gray-400 rounded-md p-2 text-black",
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
              lineNumber: 145,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "criterionBaseWeight", children: "Criterion Base Weight" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 155,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "select",
            {
              className: "border-2 border-gray-400 rounded-md p-2 text-black",
              name: "criterionBaseWeight",
              id: "criterionBaseWeight",
              defaultValue: data.criterion[0].criterionBaseWeight,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "P", children: "Supporting" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 164,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "M", children: "Moderate" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 165,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "S", children: "Strong" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 166,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "VS", children: "Very Strong" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 167,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "SA", children: "Stand Alone" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 168,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 158,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 154,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "caveat", children: "Caveat" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 172,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              className: "border-2 border-gray-400 rounded-md p-2 text-black",
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
              lineNumber: 175,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 171,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { variant: "warning_filled", size: "large", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 186,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion_.$splat.tsx",
      lineNumber: 100,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/criterion_.$splat.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/criterion.help.tsx
var criterion_help_exports = {};
__export(criterion_help_exports, {
  default: () => CriterionHelpRoute,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
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
  let data = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      className: `
flex`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-2xl font-bold", children: "Criterion Help" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-xl font-bold", children: "Evidence Types" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-2", children: data.parsedEvidenceTypes.map((criterion) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { className: "text-lg font-bold", children: criterion.evidenceType }, void 0, !1, {
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
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

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
    vaf: "0.5"
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
    vaf: "0.5"
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
    vaf: "0.5"
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
    vaf: "0.5"
  }
];

// app/routes/variants.tsx
var import_react10 = require("@remix-run/react"), import_react_icons = require("@radix-ui/react-icons"), import_react11 = __toESM(require("react")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader5({ request, params }) {
  return (0, import_node6.json)({ variants });
}
function VariantRoute() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "flex flex-1 flex-col items-center gap-2 px-20 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-6xl font-bold", children: "Variant" }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    data.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VariantSummaryCard, { variant }, variant.id, !1, {
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
function VariantCardFront({ variant }) {
  let [flip, setFlip] = import_react11.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex  w-full flex-col gap-1 rounded-md border-2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md p-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Link, { to: `/variants/${variant.id}`, children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h5", { className: "text-xl font-bold text-gray-900", children: variant.symbol }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.cdna }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.aa }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: "ClassificationHolder" }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-col items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h5", { className: " text-base", children: "Details" }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.zygosity }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            variant.vaf,
            "% VAF"
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 56,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function VariantCardBack({ variant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border-red-500  p-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h5", { className: "text-xl font-bold text-gray-900", children: variant.symbol }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 91,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.hgvs }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.protein }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 90,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
              "chr",
              variant.chr,
              ":",
              variant.pos,
              variant.ref,
              ">",
              variant.alt
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.gnomad }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-col gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "div",
              {
                className: `flex flex-col gap-2
               rounded-md p-1
            `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h5", { className: "text-left text-xs font-semibold text-gray-500", children: "inSilico" }, void 0, !1, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 112,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xs text-gray-500", children: "Combined:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 116,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xs text-gray-500", children: sortInSilico({
                      polyphen: variant.polyphen,
                      sift: variant.sift
                    }) }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 117,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 115,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xs text-gray-500", children: "SIFT:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 125,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.sift }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 126,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xs text-gray-500", children: "PolyPhen:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 127,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.polyphen }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 129,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 124,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/variants.tsx",
                lineNumber: 107,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-row gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h5", { className: "text-xs font-semibold text-gray-500", children: "Inheritance:" }, void 0, !1, {
                fileName: "app/routes/variants.tsx",
                lineNumber: 136,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.inheritance === "Autosomal Dominant" ? "A.D" : "A.R" }, void 0, !1, {
                fileName: "app/routes/variants.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 86,
      columnNumber: 5
    },
    this
  );
}
function VariantSummaryCard({ variant }) {
  let [flip, setFlip] = import_react11.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border p-2",
      children: [
        flip ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VariantCardBack, { variant }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 157,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VariantCardFront, { variant }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_icons.DotsVerticalIcon, {}, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 162,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => setFlip(!flip), children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_icons.InfoCircledIcon, {}, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 164,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 163,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 161,
          columnNumber: 7
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 152,
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader6({ request, params }) {
  let id = params.id;
  if (console.log(id, "id"), !id)
    return (0, import_node7.redirect)("/variants");
  let variant = await variants.find((variant2) => variant2.id === id);
  return variant ? (0, import_node7.json)({ variant }) : (0, import_node7.redirect)("/variants");
}
function VariantRoute2() {
  let data = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "flex flex-1 flex-col items-center gap-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-6xl font-bold", children: "Variant" }, void 0, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Link, { to: `/variants/${data.variant.id}/annotate`, children: "annotate" }, void 0, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(VariantSummaryCard, { variant: data.variant }, data.variant.id, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/variants.$id.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
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

// app/routes/criterion.tsx
var criterion_exports = {};
__export(criterion_exports, {
  default: () => Criterio,
  loader: () => loader7
});
var import_react_icons2 = require("@radix-ui/react-icons"), import_node8 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_react14 = __toESM(require("react"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
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
  }), columnNames = criterion.reduce(
    (acc, cur) => (acc.includes(cur.evidenceType) || acc.push(cur.evidenceType), acc),
    []
  );
  return (0, import_node8.json)({ criterion, columnNames });
}
function Criterio() {
  let data = (0, import_react13.useLoaderData)();
  return console.log(data, "data"), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex min-h-screen w-full flex-col p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Documentation" }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: "This page is a work in progress. Please check back later for more information." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: "Individual Criterion are grouped by Evidence Type. Click on the Evidence Type to see the Criterion." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: "To Edit a Criterion, click on the Criterion Name." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2 p-1", children: data.columnNames.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "div",
      {
        className: "items-cener flex w-full flex-col gap-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CriteriaFetcher, { searchParam: column }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 85,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this)
      },
      column,
      !1,
      {
        fileName: "app/routes/criterion.tsx",
        lineNumber: 80,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function CriteriaFetcher({ searchParam }) {
  var _a;
  let criterion = (_a = (0, import_react13.useMatches)().find((match) => match.pathname === "/criterion")) == null ? void 0 : _a.data.criterion, byEvidenceType = criterion == null ? void 0 : criterion.filter((criterion2) => criterion2.evidenceType === searchParam), [open, setOpen] = import_react14.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      className: `flex w-full flex-col gap-2 p-1 ${open ? "rounded-md border border-gray-500" : "rounded-md border"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            className: "flex flex-row items-center gap-2",
            onClick: () => setOpen(!open),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-xl font-bold", children: searchParam }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 118,
                columnNumber: 9
              }, this),
              open ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_icons2.ChevronUpIcon, {}, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 120,
                columnNumber: 19
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_icons2.ChevronDownIcon, {}, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 120,
                columnNumber: 39
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 114,
            columnNumber: 7
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2 p-1", children: byEvidenceType == null ? void 0 : byEvidenceType.map((criterion2) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Link, { to: `/criterion/${criterion2.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-xl font-bold", children: criterion2.criterionName }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 130,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FormatDefinition, { definition: criterion2.definition }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          criterion2.example ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: [
            " ",
            "Example: ",
            criterion2.example
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 140,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 139,
            columnNumber: 19
          }, this) : null,
          criterion2.caveat ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: [
            " Caveat: ",
            criterion2.caveat
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 149,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this) : null,
          criterion2.criterionBaseWeight ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: [
            "Criterion Base Weight: ",
            criterion2.criterionBaseWeight
          ] }, void 0, !0, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 155,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 154,
            columnNumber: 19
          }, this) : null
        ] }, criterion2.id, !0, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 108,
      columnNumber: 5
    },
    this
  );
}
function FormatDefinition({ definition }) {
  function sortMe(definition2) {
    return definition2.toString().replace("P:", "Supporting: ").replace("VS:", "Strong: ").replace("M:", "Moderate: ").replace("S:", "Strong: ").replace("SA: ", "Stand alone:");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-500", children: [
    "Definition: ",
    sortMe(definition)
  ] }, void 0, !0, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 184,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Sign In route" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_remix4.SignIn, { routing: "path", path: "/sign-in" }, void 0, !1, {
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
var import_remix5 = require("@clerk/remix"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Sign Up route" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_remix5.SignUp, { routing: "path", path: "/sign-up" }, void 0, !1, {
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

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex min-h-screen flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Documentation, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
function Documentation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Documentation" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "This is a work in progress. Please check back later." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "Generating Criterion" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-xl font-bold", children: "Criterion" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "The ACMG/AMP guidelines are broken down into 28 individual criteria. Each Criterion is assigned an evidenceType Group of which there are 8" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-xl font-bold", children: "Variants" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-gray-500", children: "Variants are the individual mutations that are being evaluated. Each variant is assigned a classification based on the criteria." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/beta.tsx
var beta_exports = {};
__export(beta_exports, {
  default: () => Beta
});
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Beta() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: ""
    },
    void 0,
    !1,
    {
      fileName: "app/routes/beta.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7WPNOHHA.js", imports: ["/build/_shared/chunk-LKOPCC2G.js", "/build/_shared/chunk-GUPKMWBY.js", "/build/_shared/chunk-ABY47LC6.js", "/build/_shared/chunk-CFE6LQDT.js", "/build/_shared/chunk-J2OVIFEL.js", "/build/_shared/chunk-HH3BOLTW.js", "/build/_shared/chunk-MQESCB4Y.js", "/build/_shared/chunk-R6ILELA2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7BBB3CIJ.js", imports: ["/build/_shared/chunk-74GLOYDA.js", "/build/_shared/chunk-GJCQINV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FOZJTYA2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/beta": { id: "routes/beta", parentId: "root", path: "beta", index: void 0, caseSensitive: void 0, module: "/build/routes/beta-SF7XFLQY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion": { id: "routes/criterion", parentId: "root", path: "criterion", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion-HRAQQRQE.js", imports: ["/build/_shared/chunk-DGY3TVHI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion.help": { id: "routes/criterion.help", parentId: "routes/criterion", path: "help", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion.help-UHTBNG7X.js", imports: ["/build/_shared/chunk-GJCQINV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion_.$splat": { id: "routes/criterion_.$splat", parentId: "root", path: "criterion/:splat", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion_.$splat-LJGC6PQ5.js", imports: ["/build/_shared/chunk-D2JCSPI6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-7RJQYL3R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-HTQUL2LL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants": { id: "routes/variants", parentId: "root", path: "variants", index: void 0, caseSensitive: void 0, module: "/build/routes/variants-Q2EMX6SE.js", imports: ["/build/_shared/chunk-PJEQKWFB.js", "/build/_shared/chunk-DGY3TVHI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants.$id": { id: "routes/variants.$id", parentId: "routes/variants", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/variants.$id-PBL2Y57X.js", imports: ["/build/_shared/chunk-GJCQINV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants_.$id.annotate": { id: "routes/variants_.$id.annotate", parentId: "root", path: "variants/:id/annotate", index: void 0, caseSensitive: void 0, module: "/build/routes/variants_.$id.annotate-NV77G47Y.js", imports: ["/build/_shared/chunk-D2JCSPI6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "d602f956", hmr: { runtime: "/build/_shared/chunk-J2OVIFEL.js", timestamp: 1684462325498 }, url: "/build/manifest-D602F956.js" };

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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/beta": {
    id: "routes/beta",
    parentId: "root",
    path: "beta",
    index: void 0,
    caseSensitive: void 0,
    module: beta_exports
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
