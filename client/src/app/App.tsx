import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/contexts/UserContext';
import Main from '~/app/Main';

import { Provider } from 'react-redux';
import store from '../store/';

export const App = () => {
    return (
        <Provider store={store}>
            <HelmetProvider>
                <AuthProvider>
                    <Main />
                </AuthProvider>
            </HelmetProvider>
        </Provider>
    );
};
