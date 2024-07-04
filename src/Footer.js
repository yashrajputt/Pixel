import { HEADER_LOGO } from "./utils/imageUrls";

const Footer =()=>{
    return <div className="bg-black border border-black">
        <div className="lg:flex m-20">
            <div className="m-9"><img className=" h-30 w-40 mx-auto lg:mx-0" src={HEADER_LOGO} alt="" /></div>
            <div className="lg:m-12 text-center text-md text-white"><h1 className="text-xl font-bold text-blue-500">THE BASICS</h1>
                 <h2 >About Pixels</h2>
                 <h2>
                    Contact Us
                 </h2>
                 <h2>Support Forums</h2>
            </div>
            <div className="m-12 text-center text-md text-white"><h1 className="text-xl font-bold text-blue-500">GET INVOLVED</h1>
                 <h2>Add New Movie</h2>
                 <h2>
                    Add New TV Show
                 </h2>
                 
            </div>
            <div className="m-12 text-md text-center text-white"><h1 className="text-xl font-bold text-blue-500">COMMUNITY</h1>
                 <h2>Guidelines</h2>
                 <h2>
                    Discussions
                 </h2>
                 <h2>LeaderBoard</h2>
            </div>
            <div className="m-12 text-md text-center text-white"><h1 className="text-xl font-bold text-blue-500">LEGAL</h1>
                 <h2>Terms of Use</h2>
                 <h2>
                    Privacy Policy
                 </h2>
                 <h2>DMCA Policy</h2>
            </div>
        </div>
    </div>
}
export default Footer;