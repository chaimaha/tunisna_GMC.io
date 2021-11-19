const { default: AdminBro } = require("admin-bro");
const { buildRouter } = require("@admin-bro/express");

const express = require("express");
const app = express();

const adminBro = new AdminBro({
  databases: [],
  rootPath: "/admin",
});

const router = buildRouter(adminBro);
module.exports = router;
