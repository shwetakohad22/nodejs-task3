import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/db.connect.js";
import mentRouter from "./Routers/mentor.router.js";
import stuRouter from "./Routers/student.router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200)
    .send(`<div style="text-align: center; background-color:#F2EFE5;  padding: 5px;"><h1>Student-Mentor Management</h1></div>
    <div>

    <div><h2 style="text-align: left; background-color:#F2EFE5;  padding: 2px; ">Student Endpoints in POSTMAN</h2></div>

    <ul>

    <li>
    <h3><mark style="background-color:green">POST:</mark> Change the endpoint <mark style="background-color:green"> /api/student/create </mark> to Create a new student</h3>
    </li>

    <li>
    <h3><mark>GET:</mark> Use the endpoint <mark> /api/student/students </mark> to Get all students</h3>
    </li>

    <li>
    <h3><mark style="background-color:lightblue">PUT:</mark> Change the endpoint <mark style="background-color:lightblue"> /api/student/assign/:id </mark> to Assign a mentor to a student</h3>
    </li>

    <li>
    <h3><mark>GET:</mark> Change the endpoint <mark> /api/student/get-particular/:id </mark> to Get the assigned mentor for a student</h3>
    </li>

    </ul>
</div>

<div>

    <div><h2 style="text-align: left; background-color:#F2EFE5;  padding: 2px; ">Mentor Endpoints in POSTMAN</h2></div>
    <ul>

    <li>
    <h3><mark style="background-color:green">POST:</mark> Change the endpoint to <mark style="background-color:green"> /api/mentor/create </mark> to Create a new mentor</h3>
    </li>

    <li>
    <h3><mark style="background-color:red">GET:</mark> Change the endpoint to <mark style="background-color:red"> /api/mentor/mentors </mark> to Get all mentors</h3>
    </li>

    <li>
    <h3><mark style="background-color:lightblue">PUT:</mark> Change the endpoint to <mark style="background-color:lightblue"> /api/mentor/assign/:id </mark> to Assign students to a mentor</h3>
    </li>

    <li>
    <h3><mark>GET:</mark> Change the endpoint to <mark style="background-color:yellow"> /api/mentor/ment-student/:id </mark> to Get students assigned to a specific mentor</h3>
    </li>

    </ul>
    </div>`);
});
app.use("/api/mentor", mentRouter);
app.use("/api/student", stuRouter);
connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("App Listening to port :", port);
});
