import mongoose from "mongoose";

const stuSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  batch: String,
  course: String,
  email: String,
  mentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentors",
  },
});

const Student = mongoose.model("Student", stuSchema);
export default Student;
