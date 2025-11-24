app.get('/StudentCourse', (req, res) => {
  res.render('student-course', {
    userRole: req.session.role,  // "Student", "Faculty", etc.
    availableCourses: [
      { id: "CS101", name: "Intro to CS" },
      { id: "MATH210", name: "Calculus II" }
    ],
    enrolledCourses: [
      { id: "ENG150", name: "English Comp" }
    ]
  });
});
