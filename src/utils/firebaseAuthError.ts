export enum FirebaseErrorMessage {
  WEAK_PASSWORD = "Password must be at least 6 characters.",
  UNKNOWN_ERROR = "Unknown error. Please, reload page.",
  WRONG_PASSWORD = "Incorrect password!",
  USER_NOT_FOUND = "User does not exist!",
  EMAIL_IN_USE = "Email already in use!",
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/weak-password":
      return FirebaseErrorMessage.WEAK_PASSWORD;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_NOT_FOUND;
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_IN_USE;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
