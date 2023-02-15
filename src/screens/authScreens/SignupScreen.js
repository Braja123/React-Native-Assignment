import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { createUser } from "../../util/auth";

function SignupScreen() {
  // so when first time it loads authenication will be false.
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const createSignUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      //   await createUser(email, password);
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed!",
        "Could not create user, please check your input and try again later!"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={createSignUpHandler} />;
}

export default SignupScreen;
