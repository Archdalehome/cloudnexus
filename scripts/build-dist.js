// 生成单文件产物 dist/worker.js（用于 Cloudflare 控制台「手动上传 / 粘贴」部署）
//   用法：npm run build:dist
//   说明：与 README「方式二」里的 esbuild 命令等价。
//        ⚠️ 采用「手动上传」方式时**每次改完代码都必须重新构建**，
//        否则控制台里粘贴的仍是旧代码 —— 表现为「页面看起来完全没有更新」
//        （例如权限开关还是旧的勾选框、缺少新增的客户列表区块等）。
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const OUT = path.join("dist", "worker.js");
const OUT_DIR = path.dirname(OUT);

try {
  // 优先使用本地已安装的 esbuild（wrangler 的依赖里自带）
  const esbuild = require("esbuild");
  esbuild.buildSync({
    entryPoints: ["src/index.js"],
    bundle: true,
    format: "esm",
    target: "es2022",
    minify: true,
    charset: "utf8", // 保留中文不转义（否则体积翻倍）
    legalComments: "none",
    external: ["cloudflare:sockets"], // Workers 内置模块：QQ 邮箱 SMTP 发信要用
    outfile: OUT,
  });
} catch (e) {
  console.log("本地未找到 esbuild（" + e.message + "），改用 npx 构建…");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  execFileSync(
    "npx",
    [
      "--yes",
      "esbuild@0.24.0",
      "src/index.js",
      "--bundle",
      "--format=esm",
      "--target=es2022",
      "--minify",
      "--charset=utf8",
      "--legal-comments=none",
      "--external:cloudflare:sockets",
      "--outfile=" + OUT,
    ],
    { stdio: "inherit" }
  );
}

const kb = Math.round(fs.statSync(OUT).size / 1024);
console.log("✅ 已生成 " + OUT + "（" + kb + " KB）");
console.log("   请将该文件的全部内容粘贴到 Cloudflare 控制台的 Worker 编辑器中并 Save and Deploy。");
