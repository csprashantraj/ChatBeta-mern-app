import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[650px] md:w-[900px] rounded-lg overflow-hidden bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home