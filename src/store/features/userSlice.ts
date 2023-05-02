import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  EmailAuthProvider,
  User,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  AccountFormValue,
  NewPasswordFormValue,
  PasswordResetFormValue,
  SignInFormValues,
  SignUpFormValues,
} from "types";
import { FirebaseError } from "firebase/app";

interface UserState {
  userName: string | null;
  userEmail: string | null;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  errorMessage: string | null;
  isAuth: boolean;
  passwordChanged: boolean;
}

export const fetchSignUpUser = createAsyncThunk<
  Pick<UserState, "userName" | "userEmail">,
  SignUpFormValues,
  { rejectValue: string }
>("user/fetchSignUpUser", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser as User, { displayName: name });
    return {
      userName: user.displayName,
      userEmail: user.email,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "userName" | "userEmail">,
  SignInFormValues,
  { rejectValue: string }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return {
      userName: user.displayName,
      userEmail: user.email,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignOutUser = createAsyncThunk<void, undefined, { rejectValue: string }>(
  "user/fetchSignOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const fetchResetUserPassword = createAsyncThunk<
  undefined,
  PasswordResetFormValue,
  { rejectValue: string }
>("user/fetchResetUserPassword", async ({ email }, { rejectWithValue }) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchNewPassword = createAsyncThunk<
  undefined,
  NewPasswordFormValue,
  { rejectValue: string }
>("user/fetchNewPassword", async ({ password }, { rejectWithValue }) => {
  try {
    const oobCode = (await new URLSearchParams(window.location.search).get("oobCode")) as string;
    await confirmPasswordReset(auth, oobCode, password);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchAccountUpdate = createAsyncThunk<
  Pick<UserState, "userName" | "userEmail">,
  AccountFormValue,
  { rejectValue: string }
>(
  "user/fetchAccountUpdate",
  async ({ name, email, password, newPassword }, { rejectWithValue }) => {
    try {
      const credential = await EmailAuthProvider.credential(
        auth.currentUser?.email as string,
        password,
      );
      await reauthenticateWithCredential(auth.currentUser as User, credential);
      if (name && name !== auth.currentUser?.displayName) {
        await updateProfile(auth.currentUser as User, { displayName: name });
      }
      if (email && email !== auth.currentUser?.email) {
        await updateEmail(auth.currentUser as User, email);
      }
      if (newPassword) {
        await updatePassword(auth.currentUser as User, newPassword);
      }
      const user = auth.currentUser as User;
      return {
        userEmail: user.email,
        userName: user.displayName,
      };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

const initialState: UserState = {
  userName: null,
  userEmail: null,
  isLoading: "idle",
  errorMessage: null,
  isAuth: false,
  passwordChanged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuth(state, { payload }: PayloadAction<User>) {
      state.userName = payload.displayName;
      state.userEmail = payload.email;
      state.isAuth = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
      state.passwordChanged = false;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.userEmail = payload.userEmail;
      state.userName = payload.userName;
      state.isLoading = "succeeded";
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.userEmail = payload.userEmail;
      state.userName = payload.userName;
      state.isLoading = "succeeded";
      state.isAuth = true;
      state.passwordChanged = false;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
        state.passwordChanged = false;
      }
    });
    builder.addCase(fetchSignOutUser.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
    });
    builder.addCase(fetchSignOutUser.fulfilled, (state) => {
      state.userEmail = null;
      state.userName = null;
      state.isLoading = "succeeded";
      state.isAuth = false;
    });
    builder.addCase(fetchSignOutUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchResetUserPassword.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
      state.passwordChanged = false;
    });
    builder.addCase(fetchResetUserPassword.fulfilled, (state) => {
      state.isLoading = "succeeded";
    });
    builder.addCase(fetchResetUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchNewPassword.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
    });
    builder.addCase(fetchNewPassword.fulfilled, (state) => {
      state.isLoading = "succeeded";
      state.passwordChanged = true;
    });
    builder.addCase(fetchNewPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchAccountUpdate.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
    });
    builder.addCase(fetchAccountUpdate.fulfilled, (state, { payload }) => {
      state.userEmail = payload.userEmail;
      state.userName = payload.userName;
      state.isLoading = "succeeded";
    });
    builder.addCase(fetchAccountUpdate.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
      }
    });
  },
});

export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;
