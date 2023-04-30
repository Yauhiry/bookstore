import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  User,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  NewPasswordFormValue,
  PasswordResetFormValue,
  SignInFormValues,
  SignUpFormValues,
} from "types";
import { FirebaseError } from "firebase/app";

interface UserState {
  userName: string | null;
  email: string | null;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  errorMessage: string | null;
  isAuth: boolean;
  passwordChanged: boolean;
}

export const fetchSignUpUser = createAsyncThunk<
  Pick<UserState, "userName" | "email">,
  SignUpFormValues,
  { rejectValue: string }
>("user/fetchSignUpUser", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser as User, { displayName: name });
    return {
      userName: user.displayName,
      email: user.email,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "userName" | "email">,
  SignInFormValues,
  { rejectValue: string }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return {
      userName: user.displayName,
      email: user.email,
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

const initialState: UserState = {
  userName: null,
  email: null,
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
      state.email = payload.email;
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
      state.email = payload.email;
      state.userName = payload.userName;
      state.isLoading = "succeeded";
      state.isAuth = true;
      state.passwordChanged = false;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
        state.passwordChanged = false;
      }
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
      state.passwordChanged = false;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.userName = payload.userName;
      state.isLoading = "succeeded";
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchSignOutUser.pending, (state) => {
      state.isLoading = "pending";
      state.errorMessage = null;
    });
    builder.addCase(fetchSignOutUser.fulfilled, (state) => {
      state.email = null;
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
  },
});

export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;
