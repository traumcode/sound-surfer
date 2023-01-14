import { Router } from '~/router/Router';
import { setupFirebase } from '~/lib/firebase';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSignIn, useSignOut } from '~/contexts/UserContext';
import {authorizeAttempt} from '../apis/spotify';

function Main() {
    const { signIn } = useSignIn();
    const { signOut } = useSignOut();

    useEffect(() => {

        authorizeAttempt()
        setupFirebase();

        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);

                signIn(user);
            } else {
                signOut();
            }
        });
    }, []);

    return (
        <main>
            <Router />
        </main>
    );
}

export default Main;
