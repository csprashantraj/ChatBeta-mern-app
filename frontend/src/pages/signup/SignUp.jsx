import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-6 w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
                <h1 className="text-3xl font-semibold text-center mb-4">
                    SignUp to
                    <span className="text-blue-800"> ChatBeta</span>
                </h1>
                <form action="">
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter password" 
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input 
                            type="password"
                            placeholder="Confirm password" 
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    {/* Gender checkbox goes here*/}
                    <GenderCheckbox />
                    <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-800">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;


// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className="p-6 w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
//                 <h1 className="text-3xl font-semibold text-center mb-4">
//                     SignUp to
//                     <span className="text-blue-800"> ChatBeta</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label className="label p-2 pb-0">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2 pb-0">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2 pb-0">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input 
//                             type="password"
//                             placeholder="Enter password" 
//                             className="w-full input input-bordered h-10"
//                         />
//                     </div>
//                     <div>
//                         <label className="label p-2 pb-0">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input 
//                             type="password"
//                             placeholder="Confirm password" 
//                             className="w-full input input-bordered h-10"
//                         />
//                     </div>
//                     {/* Gender checkbox goes here*/}
//                     <GenderCheckbox />
//                     <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Already have an account?
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2 bg-blue-800">SignUp</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUp;