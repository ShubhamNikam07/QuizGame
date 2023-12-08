import { Link } from "react-router-dom"
export const Home = ()=>{
    return(
        <div className="bg-[#6b21a8] w-full h-[400px] flex flex-col items-center gap-8 " >
           <span className="font-extrabold text-2xl text-white  mt-24 ">
           Embark on Epic Adventures: Your Ultimate Gaming Experience Awaits
           </span>
           <p className="text-white text-lg">
"Dive into a world of excitement and challenges in our immersive game app.<br/> Unleash your skills, conquer obstacles, and rise to the top. Are you ready for the ultimate gaming thrill?"
           </p>
           <Link to={"/quiz"}>
                        <li className="list-none py-2 px-4 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600"> Start Quiz </li>
            </Link>
        </div>
    )
}