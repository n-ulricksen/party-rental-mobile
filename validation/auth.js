export function validateRegistration(email, password, password2) {
  let errorMessage = '';

  if (!email || !password || !password2) {
    errorMessage = 'Email/password fields cannot be left empty.';
  } else if (password !== password2) {
    errorMessage = 'Passwords must match.';
  }

  return errorMessage;
}

export function validateLogin(email, password) {
  let errorMessage = '';

  if (!email || !password) {
    errorMessage = 'Email/password fields cannot be left empty.';
  }

  return errorMessage;
}
