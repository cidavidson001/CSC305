var express = require('express');
var router = express.Router();

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

/* Render role-specific page that displays the ID*/
router.get('/role/:role/:id', function(req, res, next) {
  const role = req.params.role;
  const id = req.params.id;
  res.render('role', { title: `Role: ${role}`, role, id });
});

module.exports = router;
