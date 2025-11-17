var express = require('express');
var router = express.Router();

//---Part 2 Data---
const students = {
  "1001": { name: "Manuel Roncero", major: "Mathematics", gpa: 3.4},
  "1002": { name: "Zackery Carver", major: "Data Science", gpa: 3.2},
  "1003": { name: "Caleb Davidson", major: "Theatre", gpa: 3.1}, 
};

const faculty = { 
  "2001": { name: "Dr. Sorrells", department: "Mathematics"},
  "2002": { name: "Dr. Brown", department: "Computer Science"},
  "2003": { name: "Dr. Mangum", department: "Data Science"},
};

const registrarInfo = {
  officeHours: "Mon-Fri, 8 AM - 4 PM", 
  location: "Administration Building, Room 109",
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* Handle form submission and redirect to role-specific page */
router.post('/submit', function(req, res, next) {
  const id = (req.body.id || '').trim();
  const role = (req.body.role || '').trim();

  if (!id || !role) {
    /* simple validation: go back with a message (could be improved)*/
    return res.render('index', { title: 'Enter ID and Role', error: 'Please provide both ID and role.' });
  }

  /* Redirect to a role-specific URL*/
  res.redirect(`/role/${encodeURIComponent(role)}/${encodeURIComponent(id)}`);
});

//---Part 2 Role Pages---
/* Render role-specific page that displays the ID*/
router.get('/role/:role/:id', function(req, res, next) {
  const role = req.params.role;
  const id = req.params.id;

  let info = null;

  if (role === "student") {
    info = students[id] || null;
  }
  else if (role === "faculty") {
    info = faculty[id] || null;
  }
  else if (role === "registrar") {
    info = registrarInfo;
  }
  
  res.render('role', { 
    title: `Role: ${role}`, 
    role, 
    id,
    info
  });
});

module.exports = router;
