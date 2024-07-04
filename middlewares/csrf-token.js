function addCsrfToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken(); // token available in all views
  next(); // forwards the control to next middleware
}

module.exports = addCsrfToken;
