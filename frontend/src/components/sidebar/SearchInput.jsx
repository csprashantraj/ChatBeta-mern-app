import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;

        if(search.length < 3) {
            return toast.error('search term must be at least 3 characters long');
        }

        const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(!conversation) {
            return toast.error('No such user found');
        }

        setSelectedConversation(conversation);
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit} action="" className="flex item-center gap-2">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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
