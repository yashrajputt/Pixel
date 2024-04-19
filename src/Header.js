
import { Link } from "react-router-dom";
import { HEADER_LOGO } from "./utils/imageUrls";

const Header =()=>{
    return <div className=" w-screen">
        <div className="md:flex w-full m-0 justify-between bg-black">
            <div className="md:ml-4">
                <img className="h-20 w-22 mx-auto" src={HEADER_LOGO} alt="logo" />
            </div>
            <div className="md:mr-12 border border-black">
                <ul className="md:mt-7 text-center mb-2">
                    <li className=" inline p-4 text-white"><Link className="hover:text-blue-400 hover:font-bold" to={"/"}>Home</Link></li>
                    <li className=" inline p-4 text-white"><Link to={"/Popular"} className="hover:text-blue-400 hover:font-bold">Popular</Link> </li>
                    <li className=" inline p-4 text-white"><Link className="hover:text-blue-400 hover:font-bold" to={"/toprated"}>Top Rated</Link></li>
                    <li className=" inline p-4 text-white"><Link className="hover:text-blue-400 hover:font-bold" to={"/people"}>People</Link></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;