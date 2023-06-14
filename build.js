const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./server.js"],
    bundle: true,
    minify: true,
    platform: "node",
    external: ["pg-hstore"],
    outfile: "dist/server.js",
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
