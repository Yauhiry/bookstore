import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { SignInFormValues, SignUpFormValues } from "types";
import { FirebaseError } from "firebase/app";

interface UserState {
  userName: string | null;
  email: string | null;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  errorMessage: string | null;
  isAuth: boolean;
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

const initialState: UserState = {
  userName: null,
  email: null,
  isLoading: "idle",
  errorMessage: null,
  isAuth: false,
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
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
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
  },
});

export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;
