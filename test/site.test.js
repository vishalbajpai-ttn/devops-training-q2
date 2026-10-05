const fs = require("fs");
const path = require("path");
const assert = require("assert");

const indexPath = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(indexPath, "utf8");

assert.ok(html.includes("DevOps Training"), "index.html must include DevOps Training");
assert.ok(html.includes("GitHub Actions"), "index.html must mention GitHub Actions");
assert.ok(html.includes('id="version"'), "index.html must include version element");

console.log("All tests passed.");
