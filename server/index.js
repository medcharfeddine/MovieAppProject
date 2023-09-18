import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";
import User from "./src/models/user.model.js"

const app = express();

app.use(cors(
     {
         origin: ["https://movie-app-project-nu.vercel.app"],
         methods: ["POST", "GET"],
         credentials: true
     }
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);
// app.get("/find", async (req, res) => {
//   try {
//     const user = await User.find();
//     res.send(user)
//     // console.log(user)
//     // const { password, ...info } = user._doc;
//     // res.status(200).json(info);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});

//test
