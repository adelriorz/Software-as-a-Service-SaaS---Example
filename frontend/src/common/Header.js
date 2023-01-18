import React from 'react';

function Header() {
    return (
        <nav className='flex items-center justify-between flex-wrap p-6'>
            <div className='flex items-center flex-shrink-0 text-dark-grey mr-6'>
                <span className='font-semibold text-xl tracking-tight'>OpenGraph Image API</span>
            </div>

            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 
                hover:text-gray-600 hover:boder-gray-600'>
                    <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>
                        Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path></svg>
                </button>
            </div>

        </nav>
    );
}

export default Header;