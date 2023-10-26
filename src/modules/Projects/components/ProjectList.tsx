import React from "react"

function ProjectList({children}:React.PropsWithChildren) {
    return (
        <ul className="w-full p-2 ml-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {children}
        </ul>
    )
}


export {
    ProjectList
}