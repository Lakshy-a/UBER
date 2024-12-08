import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";
import http from "http";
import cors from "cors";

app.use(cors());

const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
