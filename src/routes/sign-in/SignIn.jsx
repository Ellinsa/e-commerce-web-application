import React from "react";
import {
  signInWithGoogle,
  createUserDocumentWithAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userRef = await createUserDocumentWithAuth(user);
    console.log(userRef);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
