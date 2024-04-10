import express from "express";
import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";

export const createMentor = async (req, res) => {
  try {
    const mentors = new Mentor(req.body);
    await mentors.save();
    res.status(201).json({
      message: "Mentor created Successfully",
      data: mentors,
    });
  } catch (error) {
    res.status(500).json({ error: "Error in Creating the Mentor" });
  }
};

export const getMentorAll = async (req, res) => {
  try {
    const data = await Mentor.find();
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the data",
    });
  }
};

export const getMentorAssigned = async (req, res) => {
  try {
    const mentId = req.params.id;
    const { stuId } = req.body;
    const mentors = await Mentor.findByIdAndUpdate(
      mentId,
      { stuId: stuId },
      { new: true }
    );
    res.status(200).json({
      message: "Assigned the Students Succesfully",
      mentors,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Assigning the Students",
    });
  }
};

export const getStudentListMent = async (req, res) => {
  try {
    const mentId = req.params.id;
    const students = await Student.find({ mentId: mentId });
    res.status(200).json({
      message: "Fetched the Students Succesfully",
      students,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the Students",
    });
  }
};
