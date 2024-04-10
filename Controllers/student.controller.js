import Student from "../Models/student.schema.js";

export const createStudent = async (req, res) => {
  try {
    const students = new Student(req.body);
    await students.save();
    res.status(201).json({
      message: "Student created Successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({ error: "Error in Create Student" });
  }
};

export const getStudentAll = async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the data",
    });
  }
};

export const getStudentAssigned = async (req, res) => {
  try {
    const stuId = req.params.id;
    const { mentId } = req.body;
    const student = await Student.findByIdAndUpdate(
      stuId,
      { mentId: mentId },
      { new: true }
    );
    res.status(200).json({
      message: "Assigned the Mentor Succesfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Assigning the Mentors",
    });
  }
};

export const getStudentAssignedMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).populate("mentId");
    res.status(200).json({
      message: "Fetched Succesfully",
      Mentor: student.mentId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error Fetching the Mentors",
    });
  }
};
