import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs);
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-6 w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
                <h1 className="text-3xl font-semibold text-center mb-4">
                    SignUp to
                    <span className="text-blue-800"> ChatBeta</span>
                </h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2 pb-0">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    {/* Gender checkbox goes here*/}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to={'/login'} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-800" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
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