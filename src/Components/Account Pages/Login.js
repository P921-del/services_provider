import React, { useReducer, useRef, useState } from 'react'
import { IoLogInOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import loginReducer, { initialState } from '../../Reducers/loginReducer';
import { HandelLoginSubmitButton } from '../ExternalFunctions/AccountFunctions/Account';
function Login() {
    const signUp = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginState, dispatch] = useReducer(loginReducer, initialState);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    return (
        <div className='bg-blue-500 w-full sm:h-[600px] md:h-[590px] flex items-center justify-center'>
            <div className='w-[85%] lg:w-1/3
             h-[60%]
              my-auto mx-auto
               bg-[#F5F5F5]'>
                <h1 className='h-1/6 bg-blue-950 flex items-center justify-center text-white font-sans font-bold '>Login</h1>
                <form className='h-[83%]' onSubmit={() => {
                    if (emailInputRef.current && passwordInputRef.current) {
                        HandelLoginSubmitButton(emailInputRef.current.value, passwordInputRef.current.value, loginState, dispatch);
                    }
                }}>
                    <div className='px-2 
                    flex flex-col md:flex-row md:items-center 
                    sm:gap-0 md:gap-10 
                    bg-transparent h-[60%] md:h-1/2 my-3 md:my-0  
                     border-b border-b-slate-300'>
                        <div className='sm:w-full lg:w-[50%]'>
                            <label htmlFor='username' className='block mb-2 text-sm font-sans font-medium text-gray-900 dark:text-white' >User Name:</label>
                            <input id='username' type='email' className='bg-white
                            w-full p-2.5
                             border border-gray-300
                             text-gray-900 text-sm font-sans 
                             rounded-md
                             focus:ring-blue-400
                             focus:border-blue-400
                              dark:bg-gray-700 dark:border-gray-600
                              dark:text-white dark:placeholder-text-gray-400
                              dark:focus:ring-blue-400 dark:focus:border-blue-400
                              placeholder:text-md placeholder:text-gray-500 placeholder:font-sans placeholder:font-normal md:placeholder:text-lg
                             ' placeholder='Usually your email address or username'
                                ref={emailInputRef}
                                autoComplete='false' required />
                        </div>
                        <div className='relative sm:w-full lg:w-[50%]'>
                            <label htmlFor='password' className='block mb-2 text-sm font-sans font-medium text-gray-900 dark:text-white' >Password:</label>
                            {!showPassword ? (<FaEye className=' w-6 h-6 absolute right-[5%] md:right-[5%] z-10 top-[54.5%] '
                                onClick={() => setShowPassword(!showPassword)}
                            />) : (<FaEyeSlash className=' w-6 h-6 absolute right-[5%] top-[54.5%] md:top-[54.5%] md:right-[5%] lg:top-[54.5%] lg:right-[6%] z-10'
                                onClick={() => setShowPassword(!showPassword)}
                            />)}
                            <input id='password' type={showPassword ? ('text') : ('password')} className=' bg-white
                            w-full p-2.5
                             border border-gray-300
                             text-gray-900 text-sm font-sans 
                             rounded-md
                             focus:ring-blue-400
                             focus:border-blue-400
                              dark:bg-gray-700 dark:border-gray-600
                              dark:text-white dark:placeholder-text-gray-400
                              dark:focus:ring-blue-400 dark:focus:border-blue-400
                             '
                                ref={passwordInputRef}
                                autoComplete='false' required />
                        </div>
                    </div>
                    <div className='px-2 
                    flex items-center justify-center gap-2 
                    bg-transparent h-[15%] md:h-[20%]'>
                        <h3 className='text-gray-500 text-sm md:text-md font-sans font-bold cursor-default ' style={{ userSelect: 'none' }}>Don't have an account?</h3>
                        <button className='text-blue-700 text-sm md:text-mds
                         font-sans font-bold
                          hover:underline hover:text-blue-300
                           flex items-center justify-center
                          '
                            onClick={() => signUp('/signUp')}
                        >Sign up!</button>
                    </div>
                    <div className='px-2 flex items-center gap-2 bg-transparent h-[15%] md:h-[20%] my-auto'>
                        <div className='px-2 flex gap-2 bg-transparent h-[90%] my-auto w-3/4'>
                            <button className='w-[95%] p-2 h-full rounded-md text-white sm:text-[14px] md:text-[12px] xl:text-[16px]
                             bg-red-600 hover:bg-red-700
                              font-sans font-bold
                              flex items-center justify-center
                              '
                                onClick={() => signUp('/signUp')}
                            >Forgot Password ?</button>
                            <button className='w-[95%] p-2 h-full rounded-md text-white sm:text-[14px] md:text-[12px] xl:text-[16px] bg-red-600 hover:bg-red-700 font-sans font-bold '
                                onClick={() => signUp('/signUp')}
                            >Forgot Username ?</button>
                        </div>

                        <button className='h-[90%] my-auto md:my-0 mt-1 ml-auto mr-1 md:mr-2
                         w-[20%] md:w-[17%] xl:w-[21%]
                          rounded-md
                          text-white sm:text-[17px] md:text-[12px] lg:text-[16px] xl:text-lg
                          bg-blue-800 hover:bg-blue-900
                            font-sans font-bold
                             flex items-center justify-center
                             '
                            onClick={() => signUp('/signUp')}
                        >
                            <IoLogInOutline className='text-2xl md:text-xl xl:text-2xl inline-block' />
                            <span className='mb-1'>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login