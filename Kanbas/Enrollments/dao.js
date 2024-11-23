import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex(enroll => enroll.user === userId && enroll.course === courseId);
    if (index !== -1) {
        enrollments.splice(index, 1);
    }
}