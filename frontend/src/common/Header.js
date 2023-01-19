import React from "react";

import { Link } from "react-router-dom";

function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="lg:border-b-2 lg:border-gray-200 flex items-center justify-between flex-wrap p-6">
            
            <div className="flex items-center flex-shrink-0 text-dark-grey mr-6">
                <span className="font-semibold text-xl tracking-tight">OpenGraph Image API</span>
            </div>

            <div className="block lg:hidden">
                <button 
                
                    onClick={() => setNavbarOpen(navbarOpen => !navbarOpen)}

                    className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 
                    hover:text-gray-600 hover:boder-gray-800">
                        
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                        Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className={"lg:flex flex-grow items-right" + (navbarOpen ? " w-full flex": "hidden")}>

                <div className="flex flex-row lg:flex-row list-none lg:ml-auto mr-auto">
                   
                    <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 
                    hover:text-dark-gray mr-4 sm:w-auto">
                        <span role="img" aria-label="Profile">👤</span>Profile
                    </Link>

                    <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 
                    hover:text-dark-gray mr-4 sm:w-auto">
                        <span role="img" aria-label="Sign Up">✍️</span>Sign up
                    </Link>

                </div>
            </div>

        </nav>
    );
}

export default Header;