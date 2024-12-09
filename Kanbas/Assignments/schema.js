import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        points: Number,
        dueDate: Date,
        availableFrom: Date,
        until: Date,
        description: String,
    },
    { collection: "assignments" }
);
export default schema;