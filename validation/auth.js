export function validateRegistration(user) {
  const { email, password, password2 } = user;
  let errorMessage = '';

  if (!email || !password || !password2) {
    errorMessage = 'Email/password fields cannot be left empty.';
  } else if (password !== password2) {
    errorMessage = 'Passwords must match.';
  }

  return errorMessage;
}

export function validateLogin(user) {
  const { email, password } = user;
  let errorMessage = '';

  if (!email || !password) {
    errorMessage = 'Email/password fields cannot be left empty.';
  }

  return errorMessage;
}
