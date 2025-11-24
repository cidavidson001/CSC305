app.get("/student-courses", (req, res) => {
  const user = req.session.userId || "student1";
  const role = req.session.role;

  let enrolledCourses = students[user] ? students[user].enrolled : [];

  res.render("student-course", {
    userRole: role,
    enrolledCourses: enrolledCourses,
    availableCourses: availableCourses
  });
});
