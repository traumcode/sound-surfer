import React, { ChangeEvent, useState } from 'react';
import { SignInButton } from '~/auth/SignInButton';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
        <div className="w-full flex flex-wrap bg-soundsurfer-background">
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                    <img src={'https://i.ibb.co/N17p4J3/logoss.png'} alt="" className="h-20 w-20" />
                </div>

                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 ">
                    <p className="text-center text-soundsurfer-text text-3xl font-light">Let's ride some waves !</p>
                    <form className="flex flex-col pt-3 md:pt-8">
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

            <div className="w-1/2">
                {/* <img
                        className="object-cover w-full h-screen hidden md:block"
                        src="https://i.ibb.co/NrzK63F/layered-wav2es-haikei.png"
                        alt="Background"
                    /> */}
            </div>
        </div>
    );
}
