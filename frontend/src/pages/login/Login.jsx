const Login = () => {
    return (
        // add w-<num> to add width property to this div
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-6 w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
                <h1 className="text-3xl font-semibold text-center ">
                    Login
                    <span className="text-blue-800"> ChatBeta</span>
                </h1>

                <form action="">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter password" 
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Don't have an account?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-800">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;



// const Login = () => {
//     return (
//         // add w-<num> to add width property to this div
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className="p-6 w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
//                 <h1 className="text-3xl font-semibold text-center ">
//                     Login
//                     <span className="text-blue-800"> ChatBeta</span>
//                 </h1>

//                 <form action="">
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input 
//                             type="password"
//                             placeholder="Enter password" 
//                             className="w-full input input-bordered h-10"
//                         />
//                     </div>
//                     <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Don't have an account?
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2 bg-blue-800">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;