import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useAuth } from "~/lib/firebase";

export const SignInButton = ({text, handleAction }: any) => {


  return (
    <button
      onClick={handleAction}
      type="button"
      className="btn btn-outline btn-secondary"
    >
      {text}
    </button>
  );
};
