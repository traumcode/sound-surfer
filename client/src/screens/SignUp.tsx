import React, { ChangeEvent, useState } from 'react';
import { SignInButton } from '~/auth/SignInButton';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaUserAstronaut } from 'react-icons/fa';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleAction = (id: number) => {
        const authentication = getAuth();
        if (password === confirmPassword) {
            if (id === 2) {
                createUserWithEmailAndPassword(authentication, email, password).then((response: any) => {
                    navigate('/');
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
                });
            }
        } else {
            setConfirmPassword('NOT');
        }
    };
    return (
        <div className="bg-grey-lighter min-h-screen flex justify-center items-center m-10">
            <div className="container max-w-sm mx-auto  flex flex-col items-center justify-center px-2">
                <div className="bg-green-100 px-6 py-8 rounded shadow-md text-black w-1/2">
                    <div className="flex items-center flex-col md:justify-start p-5">
                        <img src="https://i.ibb.co/MkmhGr5/sonicsurfer.png" alt="" className="h-20 w-20" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-center text-soundsurfer-text text-3xl font-light">Let's ride some waves !</p>
                        <p className="text-center text-soundsurfer-text text-2xl font-light">
                            But choose the account type
                        </p>
                        <form className="flex flex-col w-full">
                            <div className="flex flex-row items-center justify-around pt-4">
                                <div className="w-24 flex items-center justify-center flex-col rounded">
                                    <p className="text-center text-soundsurfer-text text-3xl font-light">user</p>
                                    <FaUserAlt className="w-20 h-20" />
                                </div>
                                <div className="w-24 flex items-center justify-center flex-col rounded">
                                    <p className="text-center text-soundsurfer-text text-3xl font-light">artist</p>
                                    <FaUserAstronaut className="w-20 h-20 text-center" />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="lastname" className="text-lg text-soundsurfer-text">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Smith"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-soundsurfer-input text-black mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg text-soundsurfer-text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-soundsurfer-input text-black mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg text-soundsurfer-text">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Confirm Password"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-soundsurfer-input text-black mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label htmlFor="confirm-password" className="text-lg text-soundsurfer-text">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Password"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                        setConfirmPassword(event.target.value)
                                    }
                                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-soundsurfer-input text-black mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <SignInButton handleAction={() => handleAction(2)} />
                            {confirmPassword === 'NOT' ? (
                                <div className="alert alert-error">
                                    <div>
                                        <span>Passwords don't match.</span>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </form>
                        <div className="text-center pt-12 pb-12 font-light text-soundsurfer-text">
                            <p>
                                Already have an account?{' '}
                                <a href="/login" className="underline font-semibold text-soundsurfer-text">
                                    Log in here.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
