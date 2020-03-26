export function validateUserProfile(user) {
  const { firstName, lastName, phoneNumber } = user;
  let errorMessage = '';

  if (!firstName || !lastName || !phoneNumber) {
    errorMessage = 'Name and phone number fields cannot be left empty.';
  }

  return errorMessage;
}
