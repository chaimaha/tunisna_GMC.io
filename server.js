require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const SocketServer = require("./socketServer");
const { ExpressPeerServer } = require("peer");
const path = require("path");
const connectDB = require("./Config/ConnectDB");
const comments = require("./models/commentModel");
const posts = require("./models/postModel");
const users = require("./models/userModel");
const notifications = require("./models/notifyModel");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//AdminBro
const { default: AdminBro } = require("admin-bro");
const { buildRouter } = require("@admin-bro/express");
const mongooseAdminBro = require("@admin-bro/mongoose");

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = { resources: [users, posts, comments, notifications] };

const adminBro = new AdminBro(AdminBroOptions);
const router = buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// Socket
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  SocketServer(socket);
});

// Create peer server
ExpressPeerServer(http, { path: "/" });

// Routes
app.use("/api", require("./routes/authRouter"));
app.use("/api", require("./routes/userRouter"));
app.use("/api", require("./routes/postRouter"));
app.use("/api", require("./routes/commentRouter"));
app.use("/api", require("./routes/notifyRouter"));
app.use("/api", require("./routes/messageRouter"));

connectDB();
//HEruku Config
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//server
const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log("Server is running on port", port);
});
