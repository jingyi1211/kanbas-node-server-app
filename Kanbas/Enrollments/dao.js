// import Database from "../Database/index.js";
// export function enrollUserInCourse(userId, courseId) {
//     const { enrollments } = Database;
//     enrollments.push({ _id: Date.now(), user: userId, course: courseId });
// }

// export function unenrollUserFromCourse(userId, courseId) {
//     const { enrollments } = Database;
//     const index = enrollments.findIndex(enroll => enroll.user === userId && enroll.course === courseId);
//     if (index !== -1) {
//         enrollments.splice(index, 1);
//     }
// }
import model from "./model.js";
export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}
