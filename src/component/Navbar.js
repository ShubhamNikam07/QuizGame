import { Link } from "react-router-dom"
export const Navbar =()=>{
    return(
        <div className="bg-orange-300 text-xl font-medium p-2 mt-12">
            <ul className="flex flex-row justify-between  ml-14">
                <Link to={"/"}>
                    <img src="" alt="logoImage"></img>
                </Link>
                <div className="flex flex-row gap-12 mr-11">
                    <Link to={"/"}>
                        <li> Home</li>
                    </Link>
                    <Link to={"/quiz"}>
                        <li className=""> Start Quiz </li>
                    </Link>
                </div>
            </ul>
        </div>
    )
} 