/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    unstable_dev: true,
  },
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
