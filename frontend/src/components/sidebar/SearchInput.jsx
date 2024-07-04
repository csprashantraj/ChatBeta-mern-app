import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form action="" className="flex item-center gap-2">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
            <button type='submit' className="btn btn-circle bg-sky-500 text-white">
                <IoSearch className="w-6 h-6 outline-none"/>
            </button>
        </form>
    );
};

export default SearchInput


// import { IoSearch } from "react-icons/io5";

// const SearchInput = () => {
//     return (
//         <form action="" className="flex item-center gap-2 p-2">
//             <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//             <button type='submit' className="btn btn-circle bg-sky-500 text-white">
//                 <IoSearch className="w-6 h-6 outline-none"/>
//             </button>
//         </form>
//     );
// };

// export default SearchInput
