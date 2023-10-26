import { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import { Link } from "react-router-dom"

function Navbar() {
    const {routes} = useContext(AppContext)
    return (
        <header className="flex justify-between items-center bg-[#333]">
            <div className=" mx-5 px-2"></div>
            <div>
                <nav>
                    <ul className="flex items-center p-2">
                        {
                            routes.map(([title,route])=>(
                                <li className="m-2 text-white">
                                    <Link to={route}

                                    className="cursor-pointer"
                                    >{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export {
    Navbar
}