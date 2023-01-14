import React from 'react';
import { Margaret } from '~/assets/svgs/avatars/Margaret';
import { SignInButton } from '~/auth/SignInButton';
import { SignOutButton } from '~/auth/SignOutButton';
import { useAuthState } from '~/contexts/UserContext';

export const NavBar = () => {
    const { state } = useAuthState();
    console.log(state.state);

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>discover</a>
                    </li>
                    <li>
                        <a>manifest</a>
                    </li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                {state.state === 'SIGNED_IN' ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Margaret />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <SignOutButton />
                            </li>
                        </ul>
                    </div>
                ) : (
                    <SignInButton />
                )}
            </div>
        </div>
    );
};
