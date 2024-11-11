const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");
const CatApi = require("./routes/categories");
const PodcastApi = require("./routes/podcast");
const cors = require("cors");


require("dotenv").config(); // Load environment variables from a .env file.
require("./conn/conn"); // Establish a connection to the database.

app.use(cors({  // Set up CORS with specific origin and credentials.
    origin: ["http://localhost:5173"],
    credentials:true,
}));
app.use(express.json());  // Enable parsing of incoming JSON requests.
app.use(cookieParser());  // Enable cookie parsing for requests.
app.use("/uploads", express.static("uploads"));

//all routes
app.use("/api/v1", userApi);
app.use("/api/v1", CatApi);
app.use("/api/v1", PodcastApi);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
});