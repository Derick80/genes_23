/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  tailwind: true,
  serverModuleFormat: 'cjs',
  future: {
    v2_errorBoundary: false,
    v2_routeConvention: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    unstable_dev: true,
  },
  ignoredRouteFiles: ["**/.*"],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.ts"
      : undefined,
  serverBuildPath: ".netlify/functions-internal/server.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
