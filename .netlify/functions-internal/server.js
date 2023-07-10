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
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
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
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
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
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
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
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
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
          lineNumber: 91,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
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
          responseStatusCode = 500, shellRendered && console.error(error);
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
var tailwind_default = "/build/_assets/tailwind-EIDVB5PK.css";

// app/components/layout.tsx
var import_remix = require("@clerk/remix"), import_react_icons = require("@radix-ui/react-icons"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  let { userId } = (0, import_remix.useAuth)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex min-h-screen flex-col bg-[#212529] p-1 text-gray-100 md:p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "fixed left-0 right-0 top-0 z-10 flex flex-wrap items-center justify-around gap-2  bg-gray-800 p-1 text-gray-100 shadow-md ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center text-xl font-bold md:text-2xl", children: "ACMG Variant Classifications" }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 10,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "hidden items-center gap-1 md:flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 15,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 14,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/criterion", children: "Criterion" }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 19,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 17,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "variants", children: "Variants" }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 23,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 21,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/calculator", children: "Calculator" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/kdb", children: "KDB" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 29,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/beta", children: "Beta" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 33,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full justify-center md:w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-semibold flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-in", children: "Sign In" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-up", children: "Sign Up" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "relative mt-20 flex-1", children }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "fixed bottom-0 left-0 right-0 z-50 flex h-10 items-center  justify-center bg-gray-800 text-gray-100 shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex flex-col  items-center gap-1 font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_icons.GitHubLogoIcon, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            rel: "noopener noreferrer",
            target: "_blank",
            href: "https://github.com/Derick80",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: "Github" }, void 0, !1, {
              fileName: "app/components/layout.tsx",
              lineNumber: 58,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 53,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex flex-col  items-center gap-1 font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm ", children: "Copyright" }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 63,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: [
          " ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 61,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex flex-col  items-center gap-1 font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_icons.TwitterLogoIcon, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            rel: "noopener noreferrer",
            target: "_blank",
            href: "https://twitter.com/GeneticsStar",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: "Twitter" }, void 0, !1, {
              fileName: "app/components/layout.tsx",
              lineNumber: 77,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 72,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/root.tsx
var import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Variant Classifications" },
  {
    name: "description",
    content: "ACMG Variant Classifications Powered by Remix-run"
  },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "charset", content: "utf-8" }
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
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix2.ClerkApp)(App), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)();

// app/routes/kdb.$pdfId.edit-abstract.tsx
var kdb_pdfId_edit_abstract_exports = {};
__export(kdb_pdfId_edit_abstract_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node");

// app/server/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/routes/kdb.$pdfId.edit-abstract.tsx
async function action({ request, params }) {
  let pdfId = params.pdfId;
  console.log("pdfId", pdfId);
  let abstract = (await request.formData()).get("abstract");
  return await prisma.pdfLibrary.update({
    where: {
      id: pdfId
    },
    data: {
      abstract
    }
  }) ? (0, import_node3.redirect)("/kdb") : (0, import_node3.json)({ error: "There was an error updating the abstract" });
}

// app/routes/variants_.$id.annotate.tsx
var variants_id_annotate_exports = {};
__export(variants_id_annotate_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
async function loader2({ request, params }) {
  return (0, import_node4.json)({});
}

// app/routes/kdb_.$pdfId_.annotate.tsx
var kdb_pdfId_annotate_exports = {};
__export(kdb_pdfId_annotate_exports, {
  action: () => action2,
  default: () => AnnotatePdfRoute,
  loader: () => loader3
});
var import_react_label = require("@radix-ui/react-label"), import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_zod = require("zod"), import_zodix = require("zodix");

// app/components/kdb-components/pdf-library-list.tsx
var import_react_icons2 = require("@radix-ui/react-icons"), import_react5 = require("@remix-run/react"), import_framer_motion = require("framer-motion"), import_react6 = __toESM(require("react"));

// app/components/kdb-components/pdf-edit-abstract.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function EditAbstract({ pdfId }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react4.Form,
    {
      className: "z-10 flex flex-col",
      method: "post",
      action: `/kdb/${pdfId}/edit-abstract`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "abstract", children: "Abstract" }, void 0, !1, {
            fileName: "app/components/kdb-components/pdf-edit-abstract.tsx",
            lineNumber: 11,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "textarea",
            {
              name: "abstract",
              id: "abstract",
              cols: 30,
              rows: 10
            },
            void 0,
            !1,
            {
              fileName: "app/components/kdb-components/pdf-edit-abstract.tsx",
              lineNumber: 12,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/kdb-components/pdf-edit-abstract.tsx",
          lineNumber: 10,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/components/kdb-components/pdf-edit-abstract.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/kdb-components/pdf-edit-abstract.tsx",
      lineNumber: 5,
      columnNumber: 9
    },
    this
  );
}

// app/components/kdb-components/pdf-library-list.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function PdfList({ pdfLibrary }) {
  var _a;
  let [edit, setEdit] = import_react6.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " flex w-full flex-col gap-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: "flex w-full flex-col items-stretch gap-4 rounded-md  border-2 p-1 ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center justify-between gap-2  text-xs md:flex-row md:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-center text-base font-bold", children: pdfLibrary.title }, void 0, !1, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 27,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "hidden text-xs font-bold md:block", children: [
            "(",
            pdfLibrary.pubYear,
            ")"
          ] }, void 0, !0, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordianTriggerBar, { kdbEntry: pdfLibrary, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full flex-col items-start gap-2  px-4 py-2 md:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative h-full w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "img",
              {
                src: pdfLibrary.internalPdfUrl.replace(
                  ".pdf",
                  ".webp"
                ),
                alt: "pdf"
              },
              void 0,
              !1,
              {
                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                lineNumber: 40,
                columnNumber: 29
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "absolute right-0 top-0 flex flex-col items-center rounded-md  px-2 font-bold text-black hover:bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_react5.Link,
                {
                  to: pdfLibrary.internalPdfUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Download"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 48,
                  columnNumber: 33
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_icons2.DownloadIcon, {}, void 0, !1, {
                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                lineNumber: 55,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 36,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "flex h-full w-full px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex list-none flex-col gap-2 text-teal-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Abstract:" }, void 0, !1, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 61,
              columnNumber: 33
            }, this),
            pdfLibrary.abstract ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs", children: pdfLibrary.abstract }, void 0, !1, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 65,
              columnNumber: 37
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs", children: "no abstract" }, void 0, !1, {
                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                lineNumber: 70,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: () => setEdit(!0), children: "add abstract" }, void 0, !1, {
                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                lineNumber: 71,
                columnNumber: 41
              }, this),
              edit ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                EditAbstract,
                {
                  pdfId: pdfLibrary.id
                },
                void 0,
                !1,
                {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 75,
                  columnNumber: 45
                },
                this
              ) : null
            ] }, void 0, !0, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 69,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Authors:" }, void 0, !1, {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 83,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs", children: pdfLibrary.authors.join(", ") }, void 0, !1, {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 86,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                lineNumber: 82,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "PMID:" }, void 0, !1, {
                    fileName: "app/components/kdb-components/pdf-library-list.tsx",
                    lineNumber: 92,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs", children: pdfLibrary.pmid }, void 0, !1, {
                    fileName: "app/components/kdb-components/pdf-library-list.tsx",
                    lineNumber: 95,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 91,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "PMCID:" }, void 0, !1, {
                    fileName: "app/components/kdb-components/pdf-library-list.tsx",
                    lineNumber: 100,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs", children: pdfLibrary.pmcid }, void 0, !1, {
                    fileName: "app/components/kdb-components/pdf-library-list.tsx",
                    lineNumber: 103,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 99,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_react5.Link,
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    to: pdfLibrary.internalPdfUrl,
                    className: "text-xs",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Download PDF" }, void 0, !1, {
                      fileName: "app/components/kdb-components/pdf-library-list.tsx",
                      lineNumber: 113,
                      columnNumber: 45
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/kdb-components/pdf-library-list.tsx",
                    lineNumber: 107,
                    columnNumber: 41
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_react5.Link,
                  {
                    to: `/kdb/${pdfLibrary.id}/annotate`,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "annotate:" }, void 0, !1, {
                      fileName: "app/components/kdb-components/pdf-library-list.tsx",
                      lineNumber: 121,
                      columnNumber: 49
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/kdb-components/pdf-library-list.tsx",
                    lineNumber: 118,
                    columnNumber: 45
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 117,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                lineNumber: 90,
                columnNumber: 37
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "div",
                {
                  className: "flex flex-col gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Notes:" }, void 0, !1, {
                      fileName: "app/components/kdb-components/pdf-library-list.tsx",
                      lineNumber: 131,
                      columnNumber: 45
                    }, this),
                    (_a = pdfLibrary == null ? void 0 : pdfLibrary.pdfNotes) == null ? void 0 : _a.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      "div",
                      {
                        className: "flex flex-col gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: note.notes } }, void 0, !1, {
                            fileName: "app/components/kdb-components/pdf-library-list.tsx",
                            lineNumber: 140,
                            columnNumber: 59
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                            import_react5.Link,
                            {
                              to: `/kdb/${note.pdfLibraryId}/annotate`,
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Edit:" }, void 0, !1, {
                                fileName: "app/components/kdb-components/pdf-library-list.tsx",
                                lineNumber: 145,
                                columnNumber: 49
                              }, this)
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/kdb-components/pdf-library-list.tsx",
                              lineNumber: 142,
                              columnNumber: 59
                            },
                            this
                          )
                        ]
                      },
                      note.id,
                      !0,
                      {
                        fileName: "app/components/kdb-components/pdf-library-list.tsx",
                        lineNumber: 137,
                        columnNumber: 57
                      },
                      this
                    ))
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/kdb-components/pdf-library-list.tsx",
                  lineNumber: 128,
                  columnNumber: 44
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 81,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 60,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ]
    },
    pdfLibrary.id,
    !0,
    {
      fileName: "app/components/kdb-components/pdf-library-list.tsx",
      lineNumber: 22,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/kdb-components/pdf-library-list.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
function AccordianTriggerBar(props) {
  let { children, kdbEntry } = props, [open, setOpen] = import_react6.default.useState(!1), toggleOpen = (0, import_react6.useCallback)(() => {
    setOpen((open2) => !open2);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-2 rounded-md md:gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center justify-between gap-2 text-xs md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center gap-1 md:items-start ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Journal" }, void 0, !1, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 182,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold", children: kdbEntry.journal }, void 0, !1, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 183,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grow" }, void 0, !1, {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 185,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordianNavBar, { kdbEntry }, void 0, !1, {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 187,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grow" }, void 0, !1, {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 188,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center  gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Publication Year" }, void 0, !1, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 191,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold", children: [
          "(",
          kdbEntry.pubYear,
          ")"
        ] }, void 0, !0, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 194,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 190,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center gap-1 pl-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: toggleOpen,
          "aria-label": "Search database",
          className: "rounded-md p-2 text-teal-400 transition-all duration-300 hover:backdrop-blur-sm",
          children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center gap-1 md:items-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold", children: "Hide Details" }, void 0, !1, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 205,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_icons2.ChevronUpIcon, {}, void 0, !1, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 208,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 204,
            columnNumber: 29
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center gap-1 md:items-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold", children: "View Details" }, void 0, !1, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 212,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_icons2.ChevronDownIcon, {}, void 0, !1, {
              fileName: "app/components/kdb-components/pdf-library-list.tsx",
              lineNumber: 215,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/kdb-components/pdf-library-list.tsx",
            lineNumber: 211,
            columnNumber: 29
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 197,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 196,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/kdb-components/pdf-library-list.tsx",
      lineNumber: 180,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_framer_motion.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_framer_motion.motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { type: "tween" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex  flex-col items-stretch", children }, void 0, !1, {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 230,
          columnNumber: 25
        }, this)
      },
      kdbEntry.id,
      !1,
      {
        fileName: "app/components/kdb-components/pdf-library-list.tsx",
        lineNumber: 223,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/kdb-components/pdf-library-list.tsx",
      lineNumber: 221,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/kdb-components/pdf-library-list.tsx",
    lineNumber: 179,
    columnNumber: 9
  }, this);
}
function AccordianNavBar({ kdbEntry }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-bold underline", children: "Links" }, void 0, !1, {
      fileName: "app/components/kdb-components/pdf-library-list.tsx",
      lineNumber: 243,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-2 text-xs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react5.Link,
        {
          to: `https://pubmed.ncbi.nlm.nih.gov/${kdbEntry.pmid}/`,
          className: "text-xs font-bold hover:cursor-pointer",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "PubMed"
        },
        void 0,
        !1,
        {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 246,
          columnNumber: 17
        },
        this
      ),
      kdbEntry.pmcid ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react5.Link,
        {
          to: `https://www.ncbi.nlm.nih.gov/pmc/${kdbEntry.pmcid}/`,
          className: "text-xs font-bold hover:cursor-pointer",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "PMC"
        },
        void 0,
        !1,
        {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 255,
          columnNumber: 21
        },
        this
      ) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react5.Link,
        {
          to: `https://doi.org/${kdbEntry.doi}`,
          className: "text-xs font-bold hover:cursor-pointer",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "DOI"
        },
        void 0,
        !1,
        {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 264,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react5.Link,
        {
          to: kdbEntry.semanticScholarUrl,
          className: "text-center text-xs font-bold hover:cursor-pointer",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Semantic Scholar"
        },
        void 0,
        !1,
        {
          fileName: "app/components/kdb-components/pdf-library-list.tsx",
          lineNumber: 272,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/kdb-components/pdf-library-list.tsx",
      lineNumber: 245,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/kdb-components/pdf-library-list.tsx",
    lineNumber: 242,
    columnNumber: 9
  }, this);
}

// app/components/tiptap.tsx
var import_lucide_react = require("lucide-react"), import_react7 = require("@tiptap/react"), import_starter_kit = __toESM(require("@tiptap/starter-kit")), import_extension_highlight = __toESM(require("@tiptap/extension-highlight")), import_extension_image = __toESM(require("@tiptap/extension-image")), import_extension_underline = __toESM(require("@tiptap/extension-underline")), import_extension_superscript = __toESM(require("@tiptap/extension-superscript")), import_extension_subscript = __toESM(require("@tiptap/extension-subscript")), import_extension_link = __toESM(require("@tiptap/extension-link")), import_react8 = __toESM(require("react")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), MenuBar = ({ editor }) => {
  let addImage = import_react8.default.useCallback(() => {
    let url = window.prompt("URL");
    url && editor.chain().focus().setImage({ src: url }).run();
  }, [editor]), setLink = import_react8.default.useCallback(() => {
    let previousUrl = editor == null ? void 0 : editor.getAttributes("link").href, url = window.prompt("URL", previousUrl);
    if (url !== null) {
      if (url === "") {
        editor == null || editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      editor == null || editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);
  return editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex h-12 w-full flex-row items-center justify-between border-b border-gray-200 bg-gray-100 text-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row gap-2 items-center justify-center text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          className: editor.isActive("bold") ? "is-active" : "",
          onClick: () => editor.chain().focus().toggleBold().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Bold, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 59,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().toggleItalic().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.ItalicIcon, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 66,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().toggleStrike().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.StrikethroughIcon, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 72,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().toggleUnderline().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.UnderlineIcon, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 79,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().toggleSuperscript().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Superscript, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 85,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().toggleSubscript().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Subscript, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 91,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().toggleHighlight().run(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.HighlighterIcon, {}, void 0, !1, {
            fileName: "app/components/tiptap.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/tiptap.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.CodeIcon, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 104,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        className: editor.isActive("heading", { level: 1 }) ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Heading1, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 109,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        className: editor.isActive("heading", { level: 2 }) ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Heading2, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 132,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 122,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        className: editor.isActive("heading", { level: 3 }) ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Heading3, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 145,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 135,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
        className: editor.isActive("heading", { level: 4 }) ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Heading4, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 157,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 148,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
        className: editor.isActive("heading", { level: 5 }) ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Heading5, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 169,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 159,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
        className: editor.isActive("heading", { level: 6 }) ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Heading6, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 181,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 171,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: setLink,
        className: editor.isActive("link") ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Link, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 183,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().unsetLink().run(),
        disabled: !editor.isActive("link"),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.UnlinkIcon, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 195,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 190,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleCode().run(),
        className: editor.isActive("code") ? "is-active" : "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.CodeIcon, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 202,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 197,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        className: editor.isActive("image") ? "is-active" : "",
        type: "button",
        onClick: addImage,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.Image, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 209,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 204,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        className: editor.isActive("bulletList") ? "is-active" : "",
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.List, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 216,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 211,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_lucide_react.ListIcon, {}, void 0, !1, {
          fileName: "app/components/tiptap.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/tiptap.tsx",
        lineNumber: 219,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/tiptap.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) : null;
}, TipTap = ({ content }) => {
  let editor = (0, import_react7.useEditor)({
    extensions: [
      import_starter_kit.default.configure({
        heading: {
          HTMLAttributes: {
            class: "my-custom-heading"
          },
          levels: [1, 2, 3, 4, 5, 6]
        }
      }),
      import_extension_highlight.default.configure({
        HTMLAttributes: {
          class: "bg-yellow-200"
        }
      }),
      import_extension_link.default.configure({
        openOnClick: !1,
        HTMLAttributes: {
          class: "text-blue-500 underline"
        }
      }),
      import_extension_underline.default.configure({
        HTMLAttributes: {
          class: "text-black dark:text-slate-50"
        }
      }),
      import_extension_image.default.configure({
        HTMLAttributes: {
          class: "w-full"
        }
      }),
      import_extension_subscript.default.configure({
        HTMLAttributes: {
          class: "text-black dark:text-slate-50"
        }
      }),
      import_extension_superscript.default.configure({
        HTMLAttributes: {
          class: "text-black dark:text-slate-50"
        }
      })
    ],
    content,
    editorProps: {
      attributes: {
        class: "flex-1 p-4 mx-auto border border-t-0 text-white  w-full h-auto text-sm m-5 focus:outline-non rounded-b-md mt-0 "
      }
    }
  });
  return editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-2 border-2 border-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MenuBar, { editor }, void 0, !1, {
      fileName: "app/components/tiptap.tsx",
      lineNumber: 289,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.EditorContent, { editor }, void 0, !1, {
      fileName: "app/components/tiptap.tsx",
      lineNumber: 290,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "notes", value: (editor == null ? void 0 : editor.getHTML()) || "" }, void 0, !1, {
      fileName: "app/components/tiptap.tsx",
      lineNumber: 291,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/tiptap.tsx",
    lineNumber: 288,
    columnNumber: 9
  }, this) : null;
}, tiptap_default = TipTap;

// app/utilities/utility-functions.ts
var import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
async function validateAction({
  request,
  schema: schema3
}) {
  let body = Object.fromEntries(await request.formData());
  try {
    return { formData: schema3.parse(body), errors: null };
  } catch (error) {
    return console.log(error), {
      formData: body,
      errors: error.issues.reduce(
        (acc, curr) => {
          let key = curr.path[0];
          return acc[key] = curr.message, acc;
        },
        {}
      )
    };
  }
}
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/routes/kdb_.$pdfId_.annotate.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let pdfId = params.pdfId;
  console.log("pdfId", pdfId);
  let pdfLibrary = await prisma.pdfLibrary.findUnique({
    where: {
      id: pdfId
    },
    include: {
      pdfNotes: {
        where: {
          pdfLibraryId: pdfId
        },
        take: 1,
        orderBy: {
          createdAt: "desc"
        }
      }
    }
  });
  if (!pdfLibrary)
    throw new Error("Article not found");
  return (0, import_node5.json)({ pdfLibrary });
}
var schema = import_zod.z.object({
  notes: import_zod.z.string()
});
async function action2({ request, params }) {
  let pdfId = import_zodix.zx.parseParams(params, {
    pdfId: import_zod.z.string().nonempty()
  }).pdfId, { formData, errors } = await validateAction({
    request,
    schema
  });
  if (errors)
    return (0, import_node5.json)(errors, { status: 400 });
  let { notes } = formData;
  return await prisma.pdfLibrary.update({
    where: {
      id: pdfId
    },
    data: {
      pdfNotes: {
        create: {
          notes
        }
      }
    }
  }), (0, import_node5.json)({ message: "success" });
}
function AnnotatePdfRoute() {
  let data = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full w-full flex-col  justify-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Annotate PDF" }, void 0, !1, {
      fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PdfList, { pdfLibrary: data.pdfLibrary }, void 0, !1, {
      fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_label.Label, { htmlFor: "notes", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        tiptap_default,
        {
          content: data.pdfLibrary.pdfNotes.map((note) => note.notes).join("") || "bhi ther"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
          lineNumber: 83,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", children: "Save" }, void 0, !1, {
        fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: data.pdfLibrary.pdfNotes.map((note) => note.notes).join("") || ""
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
        lineNumber: 92,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/kdb_.$pdfId_.annotate.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

// app/routes/criterion_.$splat.tsx
var criterion_splat_exports = {};
__export(criterion_splat_exports, {
  action: () => action3,
  default: () => EditIndex,
  loader: () => loader4
});
var import_remix3 = require("@clerk/remix"), Label2 = __toESM(require("@radix-ui/react-label")), import_node6 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_zod2 = require("zod");

// app/components/button.tsx
var import_clsx2 = __toESM(require("clsx")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      className: (0, import_clsx2.default)(
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
      lineNumber: 66,
      columnNumber: 9
    },
    this
  );
}

// app/routes/criterion_.$splat.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader4({ request, params }) {
  let searchParam = params.splat || "", formattedsearchParam = searchParam.split(" ").join("_").split("_Data").join("_data").toLowerCase(), criterion = await prisma.criterion.findMany({
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
  return (0, import_node6.json)({ criterion, searchParam });
}
var schema2 = import_zod2.z.object({
  criterionName: import_zod2.z.string(),
  definition: import_zod2.z.string(),
  evidenceType: import_zod2.z.string(),
  example: import_zod2.z.string(),
  criterionBaseWeight: import_zod2.z.string(),
  caveat: import_zod2.z.string()
});
async function action3({ request, params }) {
  let criterionId = params.splat;
  if (!import_remix3.useAuth)
    return (0, import_node6.redirect)("/sign-in");
  let { formData, errors } = await validateAction({ request, schema: schema2 });
  if (errors)
    return (0, import_node6.json)({ errors });
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
    return (0, import_node6.redirect)("/criterion");
}
function EditIndex() {
  let data = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react12.Form,
    {
      className: "flex w-full max-w-2xl flex-col gap-2 rounded-md border p-4  ",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          Label2.Root,
          {
            className: "text-xl font-bold text-white",
            htmlFor: "criterionName",
            children: "Criterion Name"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 103,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "definition", children: "Definition" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 118,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "evidenceType", children: "Evidence Type" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 131,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "example", children: "Example" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 144,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "label",
            {
              className: "text-xl font-bold",
              htmlFor: "criterionBaseWeight",
              children: "Criterion Base Weight"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 157,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "select",
            {
              className: "rounded-md border-2 border-gray-400 p-2 text-black",
              name: "criterionBaseWeight",
              id: "criterionBaseWeight",
              defaultValue: data.criterion[0].criterionBaseWeight,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "P", children: "Supporting" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 169,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "M", children: "Moderate" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 170,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "S", children: "Strong" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 171,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "VS", children: "Very Strong" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 172,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "SA", children: "Stand Alone" }, void 0, !1, {
                  fileName: "app/routes/criterion_.$splat.tsx",
                  lineNumber: 173,
                  columnNumber: 25
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/criterion_.$splat.tsx",
              lineNumber: 163,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "text-xl font-bold", htmlFor: "caveat", children: "Caveat" }, void 0, !1, {
            fileName: "app/routes/criterion_.$splat.tsx",
            lineNumber: 177,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              lineNumber: 180,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { variant: "warning_filled", size: "large", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/criterion_.$splat.tsx",
          lineNumber: 191,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion_.$splat.tsx",
      lineNumber: 99,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/criterion_.$splat.tsx",
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

// mdx:routes/kdb.documentation.md
var kdb_documentation_exports = {};
__export(kdb_documentation_exports, {
  attributes: () => attributes,
  default: () => kdb_documentation_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta2
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), attributes = {
  title: "Social Media App V3",
  description: "This is a version # of a social media app",
  heroImage: "/smaV3.png",
  githubLink: "https://github.com/Derick80/blog2023",
  projectLink: "https://derickchoskinson.com",
  pubDate: "May 2023",
  implementations: ["Authentication", "Like system", "Favorite post system", "TipTap text editor"],
  tags: ["Coding", "Remix-run", "Typescript", "Blog", "Prisma", "Tailwindcss"]
};
function MDXContent(props = {}) {
  let _components = Object.assign({
    h3: "h3",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(_components.h3, { children: "STuff here" }, void 0, !1, {
      fileName: "mdx:routes/kdb.documentation.md",
      lineNumber: 19,
      columnNumber: 22
    }, this),
    `
`,
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(_components.li, { children: "Put more things here" }, void 0, !1, {
        fileName: "mdx:routes/kdb.documentation.md",
        lineNumber: 19,
        columnNumber: 97
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/kdb.documentation.md",
      lineNumber: 19,
      columnNumber: 75
    }, this),
    `
`,
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(_components.h3, {}, void 0, !1, {
      fileName: "mdx:routes/kdb.documentation.md",
      lineNumber: 19,
      columnNumber: 183
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/kdb.documentation.md",
    lineNumber: 19,
    columnNumber: 20
  }, this);
  return MDXLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(MDXLayout, { ...props, children: _content }, void 0, !1, {
    fileName: "mdx:routes/kdb.documentation.md",
    lineNumber: 20,
    columnNumber: 22
  }, this) : _content;
}
var kdb_documentation_default = MDXContent, filename = "kdb.documentation.md", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// app/routes/criterion.help.tsx
var criterion_help_exports = {};
__export(criterion_help_exports, {
  default: () => CriterionHelpRoute
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function CriterionHelpRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      className: `
flex`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-2xl font-bold", children: "Criterion Help" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 7,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-xl font-bold", children: "Evidence Types" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 8,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2" }, void 0, !1, {
          fileName: "app/routes/criterion.help.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion.help.tsx",
      lineNumber: 3,
      columnNumber: 9
    },
    this
  );
}

// app/routes/genes.server.ts
var genes_server_exports = {};
__export(genes_server_exports, {
  getFilteredGenes: () => getFilteredGenes
});
async function getFilteredGenes(whereFilter) {
  return await prisma.gene.findMany({
    where: {
      symbol: {
        contains: whereFilter,
        mode: "insensitive"
      }
    },
    include: {
      lofMetrics: !0
    }
  });
}

// app/routes/variants.$id.tsx
var variants_id_exports = {};
__export(variants_id_exports, {
  default: () => VariantRoute2,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/routes/variants.tsx
var variants_exports = {};
__export(variants_exports, {
  VariantCardBack: () => VariantCardBack,
  VariantCardFront: () => VariantCardFront,
  VariantSummaryCard: () => VariantSummaryCard,
  default: () => VariantRoute,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node");

// app/acmg-functions-utilities/variants.ts
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
var import_react13 = require("@remix-run/react"), import_react_icons3 = require("@radix-ui/react-icons"), import_react14 = __toESM(require("react")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader5({ request, params }) {
  return (0, import_node7.json)({ variants });
}
function VariantRoute() {
  let data = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "flex flex-1 flex-col items-center gap-2 px-20 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-6xl font-bold", children: "Variant" }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    data.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CardContainer, { variant }, variant.id, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
var CardContainer = ({ variant }) => {
  let [flip, setFlip] = import_react14.default.useState(!1), handleFlip = (0, import_react14.useCallback)(() => {
    setFlip((flip2) => !flip2);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "div",
    {
      className: "h-[350px] w-[450px] rounded-md border-2 bg-gray-800 p-2 ",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "duration-800 preserve-3d relative h-full w-full transform-gpu items-center transition-transform", children: flip ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CardBack, { variant, handleFlip }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CardFront, { variant, handleFlip }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    },
    variant.id,
    !1,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 36,
      columnNumber: 9
    },
    this
  );
};
function CardFront({
  handleFlip,
  variant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "[ backface-visibility:hidden] absolute flex h-full w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex h-auto w-full grow flex-col justify-between gap-3 overflow-hidden rounded-md border p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react13.Link, { to: `/variants/${variant.id}/annotate`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-xl font-bold text-slate-50", children: variant.symbol }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-1/2 flex-col items-start gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "HGVS:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 69,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.hgvs }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 72,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 68,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "Protein:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 77,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.protein }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 80,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 76,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "cDNA:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 85,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.cdna }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 88,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 84,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-1/2 flex-col items-start gap-2 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "Transcript:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 95,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.transcript }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 98,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 94,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "CPRA:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 103,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: [
              "chr",
              variant.chr,
              ":",
              variant.pos,
              variant.ref,
              ">",
              variant.alt
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 106,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 102,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-xs font-semibold text-slate-50", children: "AA:" }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 112,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.aa }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 115,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 111,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-center text-xs font-semibold text-slate-50", children: "Description" }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 123,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: variant.description }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 126,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/variants.tsx",
        lineNumber: 122,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: handleFlip, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_icons3.InfoCircledIcon, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 134,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 133,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 132,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this);
}
function CardBack({
  handleFlip,
  variant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "[ backface-visibility:hidden] absolute flex h-full w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex h-auto w-full grow flex-col gap-1 overflow-hidden rounded-md border p-2", children: "back" }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 150,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: handleFlip, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_icons3.InfoCircledIcon, {}, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 155,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 154,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/variants.tsx",
      lineNumber: 153,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 149,
    columnNumber: 9
  }, this);
}
function VariantCardFront({ variant }) {
  let [flip, setFlip] = import_react14.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex  w-full flex-col gap-1 rounded-md border-2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "div",
    {
      className: "flex h-[350px] w-[350px] flex-col gap-1 overflow-hidden rounded-md bg-transparent p-2"
    },
    variant.id,
    !1,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 190,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/variants.tsx",
    lineNumber: 189,
    columnNumber: 9
  }, this);
}
function VariantCardBack({ variant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border-red-500  p-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h5", { className: "text-xl font-bold text-gray-900", children: variant.symbol }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.hgvs }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.protein }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 210,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex h-full flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
              "chr",
              variant.chr,
              ":",
              variant.pos,
              variant.ref,
              ">",
              variant.alt
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 214,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.gnomad }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 219,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 213,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full flex-col gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "div",
              {
                className: `flex flex-col gap-2
               rounded-md p-1
            `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h5", { className: "text-left text-xs font-semibold text-gray-500", children: "inSilico" }, void 0, !1, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 230,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: "Combined:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 234,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: sortInSilico({
                      polyphen: variant.polyphen,
                      sift: variant.sift
                    }) }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 237,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 233,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: "SIFT:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 245,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.sift }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 246,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-gray-500", children: "PolyPhen:" }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 249,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.polyphen }, void 0, !1, {
                      fileName: "app/routes/variants.tsx",
                      lineNumber: 253,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/variants.tsx",
                    lineNumber: 244,
                    columnNumber: 29
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/variants.tsx",
                lineNumber: 225,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 224,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full flex-row gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h5", { className: "text-xs font-semibold text-gray-500", children: "Inheritance:" }, void 0, !1, {
                fileName: "app/routes/variants.tsx",
                lineNumber: 260,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-xs text-gray-500", children: variant.inheritance === "Autosomal Dominant" ? "A.D" : "A.R" }, void 0, !1, {
                fileName: "app/routes/variants.tsx",
                lineNumber: 263,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/variants.tsx",
              lineNumber: 259,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 223,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 200,
      columnNumber: 9
    },
    this
  );
}
function VariantSummaryCard({ variant }) {
  let [flip, setFlip] = import_react14.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "div",
    {
      className: "flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border p-2",
      children: [
        flip ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(VariantCardBack, { variant }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 283,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(VariantCardFront, { variant }, void 0, !1, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 285,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row justify-end gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_icons3.DotsVerticalIcon, {}, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 288,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: () => setFlip(!flip), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_icons3.InfoCircledIcon, {}, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 290,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/variants.tsx",
            lineNumber: 289,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/variants.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this)
      ]
    },
    variant.id,
    !0,
    {
      fileName: "app/routes/variants.tsx",
      lineNumber: 278,
      columnNumber: 9
    },
    this
  );
}
function sortInSilico({ polyphen, sift }) {
  let phen = polyphen.toLowerCase(), sifted = sift.toLowerCase();
  return phen === "benign" && sift === "benign" ? "Benign" : phen === "benign" && sifted === "deleterious" || phen === "possibly damaging" && sifted === "tolerated" ? "Likely Benign" : phen === "possibly damaging" && sifted === "deleterious" || phen === "probably damaging" && sifted === "tolerated" ? "Likely Pathogenic" : phen === "probably damaging" && sifted === "deleterious" ? "Pathogenic" : "Unknown";
}

// app/routes/variants.$id.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader6({ request, params }) {
  let id = params.id;
  if (!id)
    return (0, import_node8.redirect)("/variants");
  let variant = await variants.find((variant2) => variant2.id === id);
  return variant ? (0, import_node8.json)({ variant }) : (0, import_node8.redirect)("/variants");
}
function VariantRoute2() {
  let data = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex min-h-screen flex-col items-center justify-center gap-10 py-2 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "flex flex-1 flex-col items-center gap-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-6xl font-bold", children: "Variant" }, void 0, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react15.Link, { to: `/variants/${data.variant.id}/annotate`, children: "annotate" }, void 0, !1, {
        fileName: "app/routes/variants.$id.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        VariantSummaryCard,
        {
          variant: data.variant
        },
        data.variant.id,
        !1,
        {
          fileName: "app/routes/variants.$id.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/variants.$id.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
      fileName: "app/routes/variants.$id.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/variants.$id.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/actions.pdf.ts
var actions_pdf_exports = {};
__export(actions_pdf_exports, {
  action: () => action4
});
var import_node11 = require("@remix-run/node");

// app/server/cloudinary.server.ts
var import_cloudinary = __toESM(require("cloudinary")), import_node9 = require("@remix-run/node"), import_node10 = require("@remix-run/node");
import_cloudinary.default.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
async function uploadPdfToCloudinary(data, filename2) {
  return new Promise(async (resolve, reject) => {
    let uploadStream = import_cloudinary.default.v2.uploader.upload_stream(
      {
        cloud_name: "dch-photo",
        folder: "alleles_pdf",
        use_filename: !0,
        unique_filename: !1,
        public_id: filename2
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );
    await (0, import_node10.writeAsyncIterableToWritable)(data, uploadStream);
  });
}
var pdfUploadHandler = (0, import_node10.unstable_composeUploadHandlers)(
  async ({ name, data, filename: filename2 }) => {
    if (name !== "pdfUrl")
      return;
    let updatedFileName = (filename2 == null ? void 0 : filename2.replace(/\.[^/.]+$/, "")) || "no_file_name";
    console.log(
      "updatedFileName from cloudinary server file",
      updatedFileName
    );
    let uploadedPdf = await uploadPdfToCloudinary(
      data,
      updatedFileName
    );
    return console.log("uploadedPdf from cloudinary server file", uploadedPdf), uploadedPdf.secure_url;
  },
  (0, import_node10.unstable_createMemoryUploadHandler)()
);
async function cloudinaryPdfUpload(request) {
  let formData = await (0, import_node9.unstable_parseMultipartFormData)(
    request,
    pdfUploadHandler
  );
  return console.log(
    Object.fromEntries(formData),
    "formData from cloudinary server file"
  ), formData.get("pdfUrl");
}

// app/routes/actions.pdf.ts
async function action4({ request, params }) {
  let pdfUrl = await cloudinaryPdfUpload(request);
  return console.log("pdfUrl from action function", pdfUrl), (0, import_node11.json)({ pdfUrl });
}

// app/routes/kdb_.$pdfId.tsx
var kdb_pdfId_exports = {};
__export(kdb_pdfId_exports, {
  default: () => KdbPdfItemRoute,
  loader: () => loader7
});
var import_node12 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), import_zod3 = __toESM(require("zod")), import_zodix2 = require("zodix");

// app/server/pdf.server.ts
async function getPMSearchTerm(url) {
  console.log(url, "url from getPMSearchTerm");
  let urlParts = url.split("/");
  return urlParts[urlParts.length - 1].split(".")[0];
}
async function createPdfEntry(data) {
  return await prisma.pdfLibrary.findUnique({
    where: {
      internalPdfUrl: data.internalPdfUrl
    }
  }) ? void 0 : await prisma.pdfLibrary.create({
    data
  });
}
async function getPdfLibraryItem(id) {
  return await prisma.pdfLibrary.findUnique({
    where: {
      id
    }
  });
}
async function getSemanticScholorArticleDetails(pmid) {
  let builtUrl = `https://api.semanticscholar.org/graph/v1/paper/${pmid.startsWith("PMC") ? "pmcid" : "pmid"}:${pmid}?fields=abstract,authors,externalIds,fieldsOfStudy,influentialCitationCount,paperId,title,url,venue,year`;
  console.log(builtUrl, "builtUrl from getSemanticScholorArticleDetails");
  let data = await (await fetch(builtUrl)).json(), dataToReturn = {
    semanticScholarId: data.paperId,
    semanticScholarUrl: data.url,
    title: data.title,
    abstract: data.abstract || "",
    authors: data.authors.map((author) => author.name),
    journal: data.venue,
    pubYear: data.year,
    pmid: data.externalIds.PubMed,
    pmcId: data.externalIds.PubMedCentral || "",
    doi: data.externalIds.DOI
  };
  return console.log(
    dataToReturn,
    "dataToReturn from getSemanticScholorArticleDetails"
  ), dataToReturn;
}

// app/routes/kdb_.$pdfId.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function loader7({ request, params }) {
  console.log("params", params);
  let { pdfId } = import_zodix2.zx.parseParams(params, {
    pdfId: import_zod3.default.string().nonempty()
  }), pdfItem = await getPdfLibraryItem(pdfId);
  if (!pdfItem)
    throw new Error("pdfItem not found");
  console.log(pdfItem.abstract, "pdfItem.abstract");
  let tst = JSON.stringify(pdfItem.abstract, null, 2);
  return console.log("tst", tst), (0, import_node12.json)({ pdfItem });
}
function KdbPdfItemRoute() {
  let data = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-15 mb-10 flex h-full w-full flex-row items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: { __html: data.pdfItem.abstract }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/kdb_.$pdfId.tsx",
        lineNumber: 33,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("details", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("pre", { className: "whitespace-break-spaces", children: JSON.stringify(data.pdfItem.abstract, null, 2) }, void 0, !1, {
      fileName: "app/routes/kdb_.$pdfId.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/kdb_.$pdfId.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/kdb_.$pdfId.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// app/routes/calculator/route.tsx
var route_exports = {};
__export(route_exports, {
  action: () => action5,
  default: () => CalculatorRoute,
  loader: () => loader8
});
var import_node13 = require("@remix-run/node"), import_react19 = require("@remix-run/react");
var import_react20 = __toESM(require("react"));

// app/components/criteria-components/classification-component.tsx
var import_react17 = __toESM(require("react"));

// app/acmg-functions-utilities/acmg-criteria.ts
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
    A: 5,
    S: 4,
    M: 2,
    P: 1
  }, totalSum = arr.map((item) => {
    let firstLetter = item[0], secondLetter = item[1], secondNumber = strengthValues[secondLetter];
    return firstLetter === "B" ? -secondNumber : secondNumber;
  }).reduce((sum, value) => sum + value, 0), obj = {};
  return totalSum <= -7 ? obj.classification = "Benign" : totalSum >= -6 && totalSum <= -1 ? obj.classification = "Likely Benign" : totalSum >= 0 && totalSum <= 5 ? obj.classification = "Variant of Uncertain Significance" : totalSum >= 6 && totalSum <= 10 ? obj.classification = "Likely Pathogenic" : totalSum > 10 ? obj.classification = "Pathogenic" : obj.classification = "Error", obj.totalSum = totalSum, obj;
}

// app/components/criteria-components/classification-component.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ClassificationComponent({
  data,
  setClassificationScore,
  setVariantClassification
}) {
  let [subtotals, setSubtotals] = import_react17.default.useState(0), subtotal = data.reduce((acc, item) => acc + item.weight, 0), criteriaBreakdown = extractFirstTwoLetters(
    data.map((item) => item.label)
  ), transformed = convertToNumbers(criteriaBreakdown);
  return import_react17.default.useEffect(() => {
    setClassificationScore(subtotal), setSubtotals(subtotal), setVariantClassification(transformed.classification);
  }, [
    subtotal,
    setClassificationScore,
    setVariantClassification,
    transformed
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "order-first flex w-full flex-col gap-2 rounded-md border-2 p-1 md:order-none md:w-1/3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-white", children: "Classification Score" }, void 0, !1, {
        fileName: "app/components/criteria-components/classification-component.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-white", children: subtotals }, void 0, !1, {
        fileName: "app/components/criteria-components/classification-component.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/criteria-components/classification-component.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-white", children: "Variant Classification" }, void 0, !1, {
        fileName: "app/components/criteria-components/classification-component.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-white", children: transformed.classification }, void 0, !1, {
        fileName: "app/components/criteria-components/classification-component.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/criteria-components/classification-component.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/criteria-components/classification-component.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

// app/components/criteria-components/my-custom-radix-checkbox.tsx
var import_react_icons4 = require("@radix-ui/react-icons"), import_react18 = __toESM(require("react")), Checkbox = __toESM(require("@radix-ui/react-checkbox")), import_react_icons5 = require("@radix-ui/react-icons"), import_react_label2 = require("@radix-ui/react-label"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function CustomCriteriaCheckBox({
  data,
  handleCheckBoxListCriteriaUsed
}) {
  let [open, setOpen] = import_react18.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex w-full flex-col gap-2 rounded-md border-2 p-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: data[0].evidenceType }, void 0, !1, {
        fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => {
            setOpen(!open);
          },
          children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_icons4.ChevronUpIcon, {}, void 0, !1, {
            fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
            lineNumber: 30,
            columnNumber: 29
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_icons4.ChevronDownIcon, {}, void 0, !1, {
            fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
            lineNumber: 30,
            columnNumber: 49
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
          lineNumber: 24,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    open && data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      Checkbox.Root,
      {
        className: "outlisne-none flex items-center  justify-center rounded-[4px] bg-slate-300 text-black shadow-[0_2px_10px] shadow-black hover:bg-blue-50 focus:shadow-[0_0_0_2px_black]",
        id: item.label,
        name: item.evidenceType,
        onCheckedChange: (e) => {
          handleCheckBoxListCriteriaUsed(
            item.label,
            item.evidenceType,
            item.weight
          );
        },
        value: item.label,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            Checkbox.Indicator,
            {
              className: "text-teal-400",
              id: item.label,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_icons5.CheckIcon, {}, void 0, !1, {
                fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
                lineNumber: 54,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
              lineNumber: 50,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_label2.Label, { className: "pl-[15px] text-[15px] leading-none text-black", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "p-1", children: item.label }, void 0, !1, {
              fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
              lineNumber: 57,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-xs", children: item.definition }, void 0, !1, {
              fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
              lineNumber: 58,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
            lineNumber: 56,
            columnNumber: 29
          }, this)
        ]
      },
      item.label,
      !0,
      {
        fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
        lineNumber: 36,
        columnNumber: 25
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/components/criteria-components/my-custom-radix-checkbox.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/components/criteria-components/my-custom-select.tsx
var import_react_label3 = require("@radix-ui/react-label"), Select = __toESM(require("@radix-ui/react-select")), import_react_icons6 = require("@radix-ui/react-icons"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function CustomCriteriaSelect({
  data,
  options,
  handleListCriteriaUsed
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full flex-col", children: Object.entries(data).map((key, index) => {
    let dataagain = options.filter(
      (item) => item.evidenceType === key[0]
    );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_label3.Label, { className: "text-white", children: key[0] }, key[0], !1, {
        fileName: "app/components/criteria-components/my-custom-select.tsx",
        lineNumber: 44,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "div",
        {
          className: "w-fsull flex items-center justify-between rounded-md border p-2 text-white",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            Select.Root,
            {
              name: key[0],
              onValueChange: (value) => [
                handleListCriteriaUsed(
                  value,
                  key[0],
                  dataagain.filter(
                    (item) => item.label === value && item.evidenceType === key[0]
                  ).map(
                    (item) => item.weight
                  )[0]
                )
              ],
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Select.Trigger, { className: "flex w-full items-center justify-between rounded-md  p-2 text-white", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    Select.Value,
                    {
                      placeholder: "Select",
                      className: "text-black"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/criteria-components/my-custom-select.tsx",
                      lineNumber: 83,
                      columnNumber: 37
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons6.ChevronDownIcon, {}, void 0, !1, {
                    fileName: "app/components/criteria-components/my-custom-select.tsx",
                    lineNumber: 87,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/criteria-components/my-custom-select.tsx",
                  lineNumber: 82,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Select.Content, { className: "overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Select.ScrollUpButton, { className: "text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_icons6.ChevronUpIcon, {}, void 0, !1, {
                    fileName: "app/components/criteria-components/my-custom-select.tsx",
                    lineNumber: 91,
                    columnNumber: 41
                  }, this) }, void 0, !1, {
                    fileName: "app/components/criteria-components/my-custom-select.tsx",
                    lineNumber: 90,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Select.Viewport, { className: "p-[5px]", children: options.filter(
                    (item) => item.evidenceType === key[0]
                  ).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    Select.Item,
                    {
                      value: item.label,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-xs text-black", children: item.label }, void 0, !1, {
                          fileName: "app/components/criteria-components/my-custom-select.tsx",
                          lineNumber: 105,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-xs text-black", children: item.definition }, void 0, !1, {
                          fileName: "app/components/criteria-components/my-custom-select.tsx",
                          lineNumber: 108,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Select.ItemText, { children: item.label }, void 0, !1, {
                          fileName: "app/components/criteria-components/my-custom-select.tsx",
                          lineNumber: 111,
                          columnNumber: 57
                        }, this)
                      ]
                    },
                    item.id,
                    !0,
                    {
                      fileName: "app/components/criteria-components/my-custom-select.tsx",
                      lineNumber: 101,
                      columnNumber: 53
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "app/components/criteria-components/my-custom-select.tsx",
                    lineNumber: 93,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/criteria-components/my-custom-select.tsx",
                  lineNumber: 89,
                  columnNumber: 33
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/criteria-components/my-custom-select.tsx",
              lineNumber: 52,
              columnNumber: 29
            },
            this
          )
        },
        key[0],
        !1,
        {
          fileName: "app/components/criteria-components/my-custom-select.tsx",
          lineNumber: 48,
          columnNumber: 25
        },
        this
      )
    ] }, key[0], !0, {
      fileName: "app/components/criteria-components/my-custom-select.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/criteria-components/my-custom-select.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

// app/components/bayes-table.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function BayesTable() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex w-1/2 flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("table", { className: "w-1/2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("th", { className: "text-left", children: "Category" }, void 0, !1, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 7,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("th", { className: "text-left", children: "Total Score" }, void 0, !1, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 9,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 6,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 5,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: "Pathogenic" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 14,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: " >10" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 15,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: " Likely Pathogenic" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 18,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: " 6-9" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 19,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: "Uncertain Significance" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 22,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: "0-5" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 23,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: "Likely Benign" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: " -1-6" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: "Benign" }, void 0, !1, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 30,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("td", { className: "text-left", children: [
          " ",
          ">=",
          "-7"
        ] }, void 0, !0, {
          fileName: "app/components/bayes-table.tsx",
          lineNumber: 31,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("tr", {}, void 0, !1, {
        fileName: "app/components/bayes-table.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-xs text-gray-500", children: "*Note: This is a beta version of the ACMG classification tool. Please use with caution. Based on Tavtigian 2020" }, void 0, !1, {
      fileName: "app/components/bayes-table.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/bayes-table.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/bayes-table.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/calculator/calculator-documentation.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Documentation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex w-full flex-col gap-2 rounded-md border-2 md:w-1/3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Documentation" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "This is a work in progress. Please check back later." }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-xl font-bold", children: "Known Issues + Future Fixes" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "Cannot unselect criteria. This is a known issue and will be fixed in the future." }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Form isn't hooked up to an action yet but was built on a route that could recieve form data" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Some UI/layout issues including large dropdown menus, lack of actual checkboxes in the checkbox component" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "text-xl font-bold", children: "ACMG Calculator" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "This implementation of the calculator is based on the 2015 ACMG/AMP guidelines and Tavtigian paper using Bayes scores" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "I followed most of the rules but modified the scoring such that a single very strong piece of evidence can not be enough to classify a variant as pathogenic. That means I took the recommended score of 8 and reduced it 2 5. This means that a very strong piece of evidence requires at least 1 supporting piece of evidence to be classified as pathogenic. I think this is in line with the spirit of the guidelines." }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(BayesTable, {}, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "Generating Criterion" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "text-xl font-bold", children: "Criterion" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "The ACMG/AMP guidelines are broken down into 28 individual criteria. Each Criterion is assigned an evidenceType Group of which there are 8" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "text-xl font-bold", children: "Variants" }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "Variants are the individual mutations that are being evaluated. Each variant is assigned a classification based on the criteria." }, void 0, !1, {
      fileName: "app/routes/calculator/calculator-documentation.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/calculator/calculator-documentation.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/calculator/route.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
async function loader8({ request, params }) {
  let criteria = await prisma.criterion.findMany(), functionalData = criteria.filter((item) => item.evidenceType === "Functional Data"), allDataByEvidenceType = criteria.filter((item) => item.evidenceType !== "Functional Data").reduce((acc, item) => {
    let { evidenceType, label, id, definition, weight } = item;
    return acc[evidenceType] || (acc[evidenceType] = []), acc[evidenceType].push({ label, id, evidenceType, definition, weight }), acc;
  }, {});
  return (0, import_node13.json)({ functionalData, allDataByEvidenceType, criteria });
}
async function action5({ request, params }) {
  return (0, import_node13.json)({
    message: "success"
  });
}
function CalculatorRoute() {
  let { functionalData, criteria, allDataByEvidenceType } = (0, import_react19.useLoaderData)(), [listCriteriaUsed, setListCriteriaUsed] = import_react20.default.useState([]), [classificationScore, setClassificationScore] = import_react20.default.useState(0), [variantClassification, setVariantClassification] = import_react20.default.useState(""), calculatorRef = import_react20.default.useRef(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "itesms-center justify-cesnter mb-10 mt-10 flex flex-col gap-2 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_react19.Form,
      {
        method: "post",
        className: "w-full rounded-md border-2 p-1 md:w-1/3 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            CustomCriteriaSelect,
            {
              handleListCriteriaUsed: (value, evidenceType, weight) => {
                let index = listCriteriaUsed.findIndex((item) => item.evidenceType === evidenceType);
                setListCriteriaUsed(index === -1 ? (prev) => [...prev, { evidenceType, label: value, weight }] : (prev) => prev.map((item) => item.evidenceType === evidenceType ? { evidenceType, label: value, weight } : item));
              },
              data: allDataByEvidenceType,
              options: criteria
            },
            void 0,
            !1,
            {
              fileName: "app/routes/calculator/route.tsx",
              lineNumber: 113,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            CustomCriteriaCheckBox,
            {
              handleCheckBoxListCriteriaUsed: (value, evidenceType, weight) => {
                let isPresent = listCriteriaUsed.some((item) => item.label === value);
                setListCriteriaUsed(isPresent ? (prev) => prev.filter((item) => item.label !== value) : (prev) => [...prev, { evidenceType, label: value, weight }]);
              },
              data: functionalData
            },
            void 0,
            !1,
            {
              fileName: "app/routes/calculator/route.tsx",
              lineNumber: 119,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { type: "submit", children: "Submit" }, void 0, !1, {
            fileName: "app/routes/calculator/route.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/calculator/route.tsx",
        lineNumber: 109,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      ClassificationComponent,
      {
        data: listCriteriaUsed,
        setClassificationScore,
        setVariantClassification
      },
      void 0,
      !1,
      {
        fileName: "app/routes/calculator/route.tsx",
        lineNumber: 127,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Documentation, {}, void 0, !1, {
      fileName: "app/routes/calculator/route.tsx",
      lineNumber: 132,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
      fileName: "app/routes/calculator/route.tsx",
      lineNumber: 133,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/calculator/route.tsx",
    lineNumber: 108,
    columnNumber: 9
  }, this);
}

// app/routes/criterion.tsx
var criterion_exports = {};
__export(criterion_exports, {
  default: () => Criterio,
  loader: () => loader9
});
var import_react_icons7 = require("@radix-ui/react-icons"), import_node14 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = __toESM(require("react"));
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function loader9({ request }) {
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
  return (0, import_node14.json)({ criterion, columnNames });
}
function Criterio() {
  let data = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex min-h-screen w-full flex-col p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Documentation" }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: "This page is a work in progress. Please check back later for more information. Definitions are based on the ACMG/AMP 2015 Guidelines." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: "Individual Criterion are grouped by Evidence Type. Click on the Evidence Type to see the Criterion." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: "To Edit a Criterion, click on the Criterion Name." }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col gap-2 p-1", children: data.columnNames.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "div",
      {
        className: "items-cener flex w-full flex-col gap-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CriteriaFetcher, { searchParam: column }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 71,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 70,
          columnNumber: 33
        }, this)
      },
      column,
      !1,
      {
        fileName: "app/routes/criterion.tsx",
        lineNumber: 66,
        columnNumber: 29
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 46,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this);
}
function CriteriaFetcher({ searchParam }) {
  var _a;
  let criterion = (_a = (0, import_react21.useMatches)().find((match) => match.pathname === "/criterion")) == null ? void 0 : _a.data.criterion, byEvidenceType = criterion == null ? void 0 : criterion.filter((criterion2) => criterion2.evidenceType === searchParam), [open, setOpen] = import_react22.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "div",
    {
      className: `flex w-full flex-col gap-2 p-1 ${open ? "rounded-md border border-gray-500" : "rounded-md border"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "button",
          {
            className: "flex flex-row items-center gap-2",
            onClick: () => setOpen(!open),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-xl font-bold", children: searchParam }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 104,
                columnNumber: 21
              }, this),
              open ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_icons7.ChevronUpIcon, {}, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 106,
                columnNumber: 29
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_icons7.ChevronDownIcon, {}, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 106,
                columnNumber: 49
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 100,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col gap-2 p-1", children: byEvidenceType == null ? void 0 : byEvidenceType.map((criterion2) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "div",
          {
            className: "flex flex-col gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react21.Link, { to: `/criterion/${criterion2.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-xl font-bold", children: criterion2.label }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 119,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 118,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                FormatDefinition,
                {
                  definition: criterion2.definition
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/criterion.tsx",
                  lineNumber: 124,
                  columnNumber: 37
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 123,
                columnNumber: 33
              }, this),
              criterion2.example ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: [
                " ",
                "Example: ",
                criterion2.example
              ] }, void 0, !0, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 131,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 130,
                columnNumber: 37
              }, this) : null,
              criterion2.caveat ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: [
                " ",
                "Caveat: ",
                criterion2.caveat
              ] }, void 0, !0, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 140,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 139,
                columnNumber: 37
              }, this) : null,
              criterion2.criterionBaseWeight ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: [
                "Criterion Base Weight:",
                " ",
                criterion2.criterionBaseWeight
              ] }, void 0, !0, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 149,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 148,
                columnNumber: 37
              }, this) : null,
              criterion2.weight ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: [
                "Weight: ",
                criterion2.weight
              ] }, void 0, !0, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 157,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/criterion.tsx",
                lineNumber: 156,
                columnNumber: 37
              }, this) : null
            ]
          },
          criterion2.id,
          !0,
          {
            fileName: "app/routes/criterion.tsx",
            lineNumber: 114,
            columnNumber: 29
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/criterion.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/criterion.tsx",
      lineNumber: 94,
      columnNumber: 9
    },
    this
  );
}
function FormatDefinition({ definition }) {
  function sortMe(definition2) {
    return definition2.toString().replace("P:", "Supporting: ").replace("VS:", "Strong: ").replace("M:", "Moderate: ").replace("S:", "Strong: ").replace("SA: ", "Stand alone:");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-500", children: [
    "Definition: ",
    sortMe(definition)
  ] }, void 0, !0, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 186,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/criterion.tsx",
    lineNumber: 185,
    columnNumber: 9
  }, this);
}

// app/routes/clinvar.tsx
var clinvar_exports = {};
__export(clinvar_exports, {
  default: () => ClinVarIndexRoute,
  loader: () => loader10
});
var import_node15 = require("@remix-run/node"), import_react23 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
async function loader10({ request, params }) {
  let clinvarData = await prisma.clinvar.findMany({
    take: 50
  });
  if (console.log(clinvarData.slice(0, 10)), !clinvarData)
    throw new Error("No clinvar data found");
  return (0, import_node15.json)({ clinvarData });
}
function ClinVarIndexRoute() {
  let data = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("details", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("pre", { className: "text-sm", children: JSON.stringify(data.clinvarData.slice(0, 10), null, 2) }, void 0, !1, {
    fileName: "app/routes/clinvar.tsx",
    lineNumber: 22,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/clinvar.tsx",
    lineNumber: 21,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/clinvar.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/routes/kdb.new.tsx
var kdb_new_exports = {};
__export(kdb_new_exports, {
  action: () => action6,
  default: () => Wip
});
var import_node16 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_react27 = __toESM(require("react"));

// app/components/shared/cloudinary-pdf-uploader.tsx
var import_react24 = require("@remix-run/react"), import_react25 = __toESM(require("react")), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function PdfUploader({ setUrl }) {
  var _a, _b;
  let [selectedFile, setSelectedFile] = import_react25.default.useState(!1), pdfFetcher = (0, import_react24.useFetcher)(), handleDisabledState = () => {
    var _a2;
    return selectedFile || (setSelectedFile(!0), setUrl((_a2 = pdfFetcher.data) == null ? void 0 : _a2.pdfUrl)), !1;
  }, handlePdfUpload = async () => {
    var _a2;
    pdfFetcher.submit({
      pdfUrl: "pdfUrl",
      key: "pdfUrl",
      action: "/actions/pdf"
    }), (_a2 = pdfFetcher.data) != null && _a2.pdfUrl && setUrl(pdfFetcher.data.pdfUrl), setSelectedFile(!0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      pdfFetcher.Form,
      {
        method: "post",
        encType: "multipart/form-data",
        action: "/actions/pdf",
        onChange: handlePdfUpload,
        className: "flex flex-col items-center justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            "input",
            {
              className: "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              type: "file",
              name: "pdfUrl",
              accept: "application/pdf"
            },
            void 0,
            !1,
            {
              fileName: "app/components/shared/cloudinary-pdf-uploader.tsx",
              lineNumber: 40,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { disabled: !selectedFile, type: "submit", children: "Upload" }, void 0, !1, {
            fileName: "app/components/shared/cloudinary-pdf-uploader.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/shared/cloudinary-pdf-uploader.tsx",
        lineNumber: 33,
        columnNumber: 13
      },
      this
    ),
    ((_a = pdfFetcher.data) == null ? void 0 : _a.pdfUrl) && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "input",
      {
        type: "text",
        name: "pdfUrl",
        onChange: void setUrl((_b = pdfFetcher.data) == null ? void 0 : _b.pdfUrl)
      },
      void 0,
      !1,
      {
        fileName: "app/components/shared/cloudinary-pdf-uploader.tsx",
        lineNumber: 52,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/shared/cloudinary-pdf-uploader.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/shared/cloudinary-pdf-uploader.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

// app/routes/kdb.new.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
async function action6({ request, params }) {
  let pdfUrl = (await request.formData()).get("pdfUrl"), searchPmid = await getPMSearchTerm(pdfUrl), data = await getSemanticScholorArticleDetails(searchPmid);
  console.log("data, from semantic scholor", data);
  let {
    semanticScholarId,
    semanticScholarUrl,
    title,
    abstract,
    authors,
    journal,
    pubYear,
    pmid,
    pmcId,
    doi
  } = data, dbData = {
    semanticScholarId,
    semanticScholarUrl,
    title,
    abstract,
    authors,
    journal,
    pubYear: Number(pubYear),
    pmid,
    pmcid: pmcId,
    doi,
    internalPdfUrl: pdfUrl
  }, pdfEntry = await createPdfEntry(dbData);
  return pdfEntry ? (0, import_node16.redirect)(`/kdb/${pdfEntry.id}`) : (0, import_node16.json)({ error: "There was an error uploading the pdf" });
}
function Wip() {
  var _a;
  let actionData = (0, import_react26.useActionData)(), [url, setUrl] = import_react27.default.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-20 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(PdfUploader, { setUrl }, void 0, !1, {
      fileName: "app/routes/kdb.new.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_react26.Form,
      {
        className: "flex w-full flex-col items-center justify-center",
        method: "POST",
        children: [
          ((_a = actionData == null ? void 0 : actionData.pdfEntry) == null ? void 0 : _a.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-red-500", children: actionData.pdfEntry.error }, void 0, !1, {
            fileName: "app/routes/kdb.new.tsx",
            lineNumber: 75,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "submit", children: "Submit" }, void 0, !1, {
            fileName: "app/routes/kdb.new.tsx",
            lineNumber: 79,
            columnNumber: 21
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/kdb.new.tsx",
        lineNumber: 70,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/kdb.new.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/kdb.new.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { children: "Sign In route" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_remix4.SignIn, { routing: "path", path: "/sign-in" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignUpPage
});
var import_remix5 = require("@clerk/remix"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { children: "Sign Up route" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_remix5.SignUp, { routing: "path", path: "/sign-up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});

// app/components/dev-components/welcome.tsx
var import_react28 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function DevelopmentWelcome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "prose prose-invert mx-auto flex h-full w-full flex-col items-center gap-2  rounded-md border-2 p-2 xl:prose-xl", children: [
    "Welcome to my in development site. This site is a work in progress. I am working towards a comprehensive ACMG/AMP variant classification tool.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { children: "Current Features" }, void 0, !1, {
      fileName: "app/components/dev-components/welcome.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react28.Link, { to: "/calculator", children: "ACMG Classification Counter Calculator" }, void 0, !1, {
        fileName: "app/components/dev-components/welcome.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/dev-components/welcome.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: "Variant Classification Score" }, void 0, !1, {
        fileName: "app/components/dev-components/welcome.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dev-components/welcome.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { children: "Future Features" }, void 0, !1, {
      fileName: "app/components/dev-components/welcome.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: "Citations" }, void 0, !1, {
        fileName: "app/components/dev-components/welcome.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: "Documentation " }, void 0, !1, {
        fileName: "app/components/dev-components/welcome.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: "PDF upload and retreival page" }, void 0, !1, {
        fileName: "app/components/dev-components/welcome.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dev-components/welcome.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dev-components/welcome.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(DevelopmentWelcome, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/genes.tsx
var genes_exports = {};
__export(genes_exports, {
  default: () => GenesRoute,
  loader: () => loader11
});
var import_node17 = require("@remix-run/node");

// app/components/gene-search.tsx
var import_react29 = require("@remix-run/react"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function GeneSearch() {
  let navigate = (0, import_react29.useNavigate)(), [searchParams] = (0, import_react29.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("form", { className: "text-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "text", placeholder: "Search for a gene", name: "filter" }, void 0, !1, {
      fileName: "app/components/gene-search.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, !1, {
      fileName: "app/components/gene-search.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/gene-search.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/routes/genes.tsx
var import_react30 = require("@remix-run/react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
async function loader11({ request, params }) {
  let filter = new URL(request.url).searchParams.get("filter");
  console.log(filter, "filter");
  let gene = await getFilteredGenes(filter || "");
  return (0, import_node17.json)({ gene });
}
function GenesRoute() {
  let data = (0, import_react30.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { children: "Genes" }, void 0, !1, {
      fileName: "app/routes/genes.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(GeneSearch, {}, void 0, !1, {
      fileName: "app/routes/genes.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/genes.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/beta.tsx
var beta_exports = {};
__export(beta_exports, {
  default: () => BetaRoute
});
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function BetaRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "" }, void 0, !1, {
    fileName: "app/routes/beta.tsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/blog/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => BlogIndex,
  loader: () => loader12
});
var import_node18 = require("@remix-run/node"), import_react31 = require("@remix-run/react"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
async function loader12({ request, params }) {
  return (0, import_node18.json)({
    message: "Hello from the server!"
  });
}
function BlogIndex() {
  let data = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "", children: "data here" }, void 0, !1, {
    fileName: "app/routes/blog/route.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

// app/routes/kdb.tsx
var kdb_exports = {};
__export(kdb_exports, {
  default: () => KdbIndex,
  loader: () => loader13,
  shouldRevalidate: () => shouldRevalidate
});
var import_react_icons8 = require("@radix-ui/react-icons"), import_node20 = require("@remix-run/node"), import_react34 = require("@remix-run/react");

// app/components/shadcnui/accordion.tsx
var React10 = __toESM(require("react")), AccordionPrimitive = __toESM(require("@radix-ui/react-accordion")), import_lucide_react2 = require("lucide-react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), Accordion = AccordionPrimitive.Root, AccordionItem = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/shadcnui/accordion.tsx",
    lineNumber: 14,
    columnNumber: 5
  },
  this
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_lucide_react2.ChevronDown, { className: "h-4 w-4 transition-transform duration-200" }, void 0, !1, {
        fileName: "app/components/shadcnui/accordion.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/shadcnui/accordion.tsx",
    lineNumber: 27,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/shadcnui/accordion.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  AccordionPrimitive.Content,
  {
    ref,
    className: cn(
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "pb-4 pt-0", children }, void 0, !1, {
      fileName: "app/components/shadcnui/accordion.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/shadcnui/accordion.tsx",
    lineNumber: 46,
    columnNumber: 5
  },
  this
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// app/components/kdb-components/kdb-welcome.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function KdbWelcome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex w-full flex-col items-center gap-2 border-2 border-purple-500 p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "text-2xl", children: "Welcome to the KDB" }, void 0, !1, {
      fileName: "app/components/kdb-components/kdb-welcome.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(AccordionItem, { value: "documentation", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(AccordionTrigger, { className: "text-xl", children: [
        " ",
        "Documentation"
      ] }, void 0, !0, {
        fileName: "app/components/kdb-components/kdb-welcome.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "text-lg", children: "The KDB is a database of knowledge about the effects of variants on human health." }, void 0, !1, {
        fileName: "app/components/kdb-components/kdb-welcome.tsx",
        lineNumber: 19,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/kdb-components/kdb-welcome.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/kdb-components/kdb-welcome.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/kdb-components/kdb-welcome.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/kdb-components/kdb-welcome.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/components/shared/search.tsx
var import_node19 = require("@remix-run/node"), import_react32 = require("@remix-run/react"), import_react33 = __toESM(require("react")), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
var placeholderText = {
  kdb: 'Search the KDB for PMID, PMCID, Author, Title"',
  variants: "Search Variants",
  criterion: "Search Criterion",
  genes: "Search Genes"
};
function Search({ searchSourceName }) {
  let placeholder = placeholderText[searchSourceName];
  console.log("placeholder", placeholder);
  let [searchParams, setSearchParams] = (0, import_react32.useSearchParams)(), formRef = import_react33.default.useRef(null), navigate = (0, import_react32.useNavigate)();
  function handleClear(e) {
    var _a;
    return e.preventDefault(), searchParams.delete("filter"), (_a = formRef.current) == null || _a.reset(), navigate(`/${searchSourceName}/`, {
      replace: !0
    }), (0, import_node19.redirect)(`/${searchSourceName}/`);
  }
  function handleClick(e) {
    let { value } = e.currentTarget;
    return console.log("value", value), value === null ? (setSearchParams(""), navigate(`/${searchSourceName}/`, {
      replace: !0
    })) : setSearchParams(value), navigate(`/${searchSourceName}/?filter=${value}`, {
      replace: !0
    }), (0, import_node19.redirect)(`/${searchSourceName}/?filter=${value}`);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-col  items-center gap-2 border-2 border-purple-500 p-1 md:p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
    import_react32.Form,
    {
      ref: formRef,
      className: "flex w-full flex-col items-center gap-2",
      method: "GET",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "input",
          {
            className: "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            type: "text",
            name: "filter",
            placeholder
          },
          void 0,
          !1,
          {
            fileName: "app/components/shared/search.tsx",
            lineNumber: 65,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
            "button",
            {
              className: "rounded-xl bg-blue-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400",
              type: "submit",
              onClick: (e) => handleClick(e),
              children: "Search"
            },
            void 0,
            !1,
            {
              fileName: "app/components/shared/search.tsx",
              lineNumber: 73,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
            "button",
            {
              className: "w-1/2 rounded-xl bg-red-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400",
              onClick: (e) => handleClear(e),
              type: "submit",
              children: "Clear"
            },
            void 0,
            !1,
            {
              fileName: "app/components/shared/search.tsx",
              lineNumber: 81,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/shared/search.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/shared/search.tsx",
      lineNumber: 60,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/shared/search.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

// app/routes/kdb.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function shouldRevalidate() {
  return !0;
}
async function loader13({ request, params }) {
  let filter = new URL(request.url).searchParams.get("filter");
  console.log("filter", filter);
  let textFilter = {};
  filter && (textFilter = {
    OR: [
      {
        title: {
          contains: filter,
          mode: "insensitive"
        }
      },
      {
        abstract: {
          contains: filter,
          mode: "insensitive"
        }
      },
      {
        pmcid: {
          contains: filter,
          mode: "insensitive"
        }
      },
      {
        pmid: {
          contains: filter,
          mode: "insensitive"
        }
      },
      {
        authors: {
          has: filter
        }
      }
    ]
  });
  let pdfLibrary = await prisma.pdfLibrary.findMany({
    where: {
      ...textFilter
    },
    include: {
      pdfNotes: {
        take: 1,
        orderBy: {
          createdAt: "desc"
        }
      }
    }
  });
  if (!pdfLibrary)
    throw new Error("pdfLibrary not found");
  return (0, import_node20.json)({ pdfLibrary });
}
function KdbIndex() {
  let data = (0, import_react34.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-15 mb-10 flex flex-col justify-center gap-2 overflow-auto md:flex-row ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "itesms-center flex w-full flex-col md:h-full md:w-1/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Search, { searchSourceName: "kdb" }, void 0, !1, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react34.NavLink, { className: "flex flex-col items-center", to: "/kdb/new", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_icons8.FileIcon, {}, void 0, !1, {
          fileName: "app/routes/kdb.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this),
        "Add New PDF"
      ] }, void 0, !0, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react34.Outlet, {}, void 0, !1, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/kdb.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex w-full flex-col items-center   gap-2  md:h-full md:w-4/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(KdbWelcome, {}, void 0, !1, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 94,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "text-2xl font-bold", children: "PDF Library" }, void 0, !1, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 95,
        columnNumber: 17
      }, this),
      data.pdfLibrary.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "text-xl font-bold", children: "No PDFs found. Add a new PDF to get started." }, void 0, !1, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 97,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "text-xl font-bold", children: [
        data.pdfLibrary.length,
        " PDFs found."
      ] }, void 0, !0, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 101,
        columnNumber: 21
      }, this),
      data.pdfLibrary.map((pdf) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(PdfList, { pdfLibrary: pdf }, pdf.id, !1, {
        fileName: "app/routes/kdb.tsx",
        lineNumber: 106,
        columnNumber: 28
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/kdb.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/kdb.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

// app/routes/wip.tsx
var wip_exports = {};
__export(wip_exports, {
  default: () => Wip2
});
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Wip2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
    "div",
    {
      className: "",
      children: "\\"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/wip.tsx",
      lineNumber: 4,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PP4UHFAJ.js", imports: ["/build/_shared/chunk-E67AV4XX.js", "/build/_shared/chunk-LAQBVFSZ.js", "/build/_shared/chunk-SPRRWYPW.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-U562ZY3W.js", imports: ["/build/_shared/chunk-K7GFDEA5.js", "/build/_shared/chunk-4WDQP6XS.js", "/build/_shared/chunk-W4JOHJUN.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-2BELZIX2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/actions.pdf": { id: "routes/actions.pdf", parentId: "root", path: "actions/pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/actions.pdf-K73GFXMQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/beta": { id: "routes/beta", parentId: "root", path: "beta", index: void 0, caseSensitive: void 0, module: "/build/routes/beta-ZKQBQX6U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-2MXJLBCV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/calculator": { id: "routes/calculator", parentId: "root", path: "calculator", index: void 0, caseSensitive: void 0, module: "/build/routes/calculator-J4NROMW2.js", imports: ["/build/_shared/chunk-X6N7A3SZ.js", "/build/_shared/chunk-IXGWQGPG.js", "/build/_shared/chunk-ELWJTL4F.js", "/build/_shared/chunk-4T5KGPBP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/clinvar": { id: "routes/clinvar", parentId: "root", path: "clinvar", index: void 0, caseSensitive: void 0, module: "/build/routes/clinvar-PK4V5VWH.js", imports: ["/build/_shared/chunk-4T5KGPBP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion": { id: "routes/criterion", parentId: "root", path: "criterion", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion-DSBPBBUN.js", imports: ["/build/_shared/chunk-4T5KGPBP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion.help": { id: "routes/criterion.help", parentId: "routes/criterion", path: "help", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion.help-XGTJA4W6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/criterion_.$splat": { id: "routes/criterion_.$splat", parentId: "root", path: "criterion/:splat", index: void 0, caseSensitive: void 0, module: "/build/routes/criterion_.$splat-UW6CKWBM.js", imports: ["/build/_shared/chunk-WNIKL44T.js", "/build/_shared/chunk-JNOKBHGH.js", "/build/_shared/chunk-IXGWQGPG.js", "/build/_shared/chunk-ELWJTL4F.js", "/build/_shared/chunk-4T5KGPBP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/genes": { id: "routes/genes", parentId: "root", path: "genes", index: void 0, caseSensitive: void 0, module: "/build/routes/genes-D7XQFBTD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/genes.server": { id: "routes/genes.server", parentId: "routes/genes", path: "server", index: void 0, caseSensitive: void 0, module: "/build/routes/genes.server-HPSUZRDK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/kdb": { id: "routes/kdb", parentId: "root", path: "kdb", index: void 0, caseSensitive: void 0, module: "/build/routes/kdb-D2Z25DYQ.js", imports: ["/build/_shared/chunk-X6N7A3SZ.js", "/build/_shared/chunk-SHRZ6J4W.js", "/build/_shared/chunk-WNIKL44T.js", "/build/_shared/chunk-ELWJTL4F.js", "/build/_shared/chunk-4T5KGPBP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/kdb.$pdfId.edit-abstract": { id: "routes/kdb.$pdfId.edit-abstract", parentId: "routes/kdb", path: ":pdfId/edit-abstract", index: void 0, caseSensitive: void 0, module: "/build/routes/kdb.$pdfId.edit-abstract-VIGQUX6B.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/kdb.documentation": { id: "routes/kdb.documentation", parentId: "routes/kdb", path: "documentation", index: void 0, caseSensitive: void 0, module: "/build/routes/kdb.documentation-KKWSWYPZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/kdb.new": { id: "routes/kdb.new", parentId: "routes/kdb", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/kdb.new-AJOKW74F.js", imports: ["/build/_shared/chunk-P745DJB6.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/kdb_.$pdfId": { id: "routes/kdb_.$pdfId", parentId: "root", path: "kdb/:pdfId", index: void 0, caseSensitive: void 0, module: "/build/routes/kdb_.$pdfId-HAUR6TPC.js", imports: ["/build/_shared/chunk-P745DJB6.js", "/build/_shared/chunk-SX3R7FK7.js", "/build/_shared/chunk-JNOKBHGH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/kdb_.$pdfId_.annotate": { id: "routes/kdb_.$pdfId_.annotate", parentId: "root", path: "kdb/:pdfId/annotate", index: void 0, caseSensitive: void 0, module: "/build/routes/kdb_.$pdfId_.annotate-GTICRKEM.js", imports: ["/build/_shared/chunk-SHRZ6J4W.js", "/build/_shared/chunk-SX3R7FK7.js", "/build/_shared/chunk-WNIKL44T.js", "/build/_shared/chunk-JNOKBHGH.js", "/build/_shared/chunk-IXGWQGPG.js", "/build/_shared/chunk-ELWJTL4F.js", "/build/_shared/chunk-4T5KGPBP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-R54TUS3T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-CJTF2N2R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants": { id: "routes/variants", parentId: "root", path: "variants", index: void 0, caseSensitive: void 0, module: "/build/routes/variants-VQDKEH2P.js", imports: ["/build/_shared/chunk-FI6GUHDA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants.$id": { id: "routes/variants.$id", parentId: "routes/variants", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/variants.$id-Y2S4C3OE.js", imports: ["/build/_shared/chunk-K7GFDEA5.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/variants_.$id.annotate": { id: "routes/variants_.$id.annotate", parentId: "root", path: "variants/:id/annotate", index: void 0, caseSensitive: void 0, module: "/build/routes/variants_.$id.annotate-ZP5XECGE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/wip": { id: "routes/wip", parentId: "root", path: "wip", index: void 0, caseSensitive: void 0, module: "/build/routes/wip-NHR2RVMG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1f3f7a3c", hmr: void 0, url: "/build/manifest-1F3F7A3C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/kdb.$pdfId.edit-abstract": {
    id: "routes/kdb.$pdfId.edit-abstract",
    parentId: "routes/kdb",
    path: ":pdfId/edit-abstract",
    index: void 0,
    caseSensitive: void 0,
    module: kdb_pdfId_edit_abstract_exports
  },
  "routes/variants_.$id.annotate": {
    id: "routes/variants_.$id.annotate",
    parentId: "root",
    path: "variants/:id/annotate",
    index: void 0,
    caseSensitive: void 0,
    module: variants_id_annotate_exports
  },
  "routes/kdb_.$pdfId_.annotate": {
    id: "routes/kdb_.$pdfId_.annotate",
    parentId: "root",
    path: "kdb/:pdfId/annotate",
    index: void 0,
    caseSensitive: void 0,
    module: kdb_pdfId_annotate_exports
  },
  "routes/criterion_.$splat": {
    id: "routes/criterion_.$splat",
    parentId: "root",
    path: "criterion/:splat",
    index: void 0,
    caseSensitive: void 0,
    module: criterion_splat_exports
  },
  "routes/kdb.documentation": {
    id: "routes/kdb.documentation",
    parentId: "routes/kdb",
    path: "documentation",
    index: void 0,
    caseSensitive: void 0,
    module: kdb_documentation_exports
  },
  "routes/criterion.help": {
    id: "routes/criterion.help",
    parentId: "routes/criterion",
    path: "help",
    index: void 0,
    caseSensitive: void 0,
    module: criterion_help_exports
  },
  "routes/genes.server": {
    id: "routes/genes.server",
    parentId: "routes/genes",
    path: "server",
    index: void 0,
    caseSensitive: void 0,
    module: genes_server_exports
  },
  "routes/variants.$id": {
    id: "routes/variants.$id",
    parentId: "routes/variants",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: variants_id_exports
  },
  "routes/actions.pdf": {
    id: "routes/actions.pdf",
    parentId: "root",
    path: "actions/pdf",
    index: void 0,
    caseSensitive: void 0,
    module: actions_pdf_exports
  },
  "routes/kdb_.$pdfId": {
    id: "routes/kdb_.$pdfId",
    parentId: "root",
    path: "kdb/:pdfId",
    index: void 0,
    caseSensitive: void 0,
    module: kdb_pdfId_exports
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
  "routes/clinvar": {
    id: "routes/clinvar",
    parentId: "root",
    path: "clinvar",
    index: void 0,
    caseSensitive: void 0,
    module: clinvar_exports
  },
  "routes/kdb.new": {
    id: "routes/kdb.new",
    parentId: "routes/kdb",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: kdb_new_exports
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
  "routes/genes": {
    id: "routes/genes",
    parentId: "root",
    path: "genes",
    index: void 0,
    caseSensitive: void 0,
    module: genes_exports
  },
  "routes/beta": {
    id: "routes/beta",
    parentId: "root",
    path: "beta",
    index: void 0,
    caseSensitive: void 0,
    module: beta_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/kdb": {
    id: "routes/kdb",
    parentId: "root",
    path: "kdb",
    index: void 0,
    caseSensitive: void 0,
    module: kdb_exports
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
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
