import mongoose from "mongoose";

const mentSchema = mongoose.Schema({
  name: String,
  course: String,
  email: String,
  stuId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Mentor = mongoose.model("Mentors", mentSchema);
export default Mentor;
