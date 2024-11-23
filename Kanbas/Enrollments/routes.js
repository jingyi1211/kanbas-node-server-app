import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    // Route to enroll a user in a course
    app.post("/api/enrollments/enroll", (req, res) => {
        const { userId, courseId } = req.body;
        const status = dao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });

    // Route to unenroll a user from a course
    app.post("/api/enrollments/unenroll", (req, res) => {
        const { userId, courseId } = req.body;
        const status = dao.unenrollUserFromCourse(userId, courseId);
        res.send(status);
    });
}
