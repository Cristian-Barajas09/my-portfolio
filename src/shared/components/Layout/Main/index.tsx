import React from "react";
import { Navbar } from "../Navbar";

function Main({children}:React.PropsWithChildren){
    return (
        <>
        <Navbar/>
        <main className="bg-[#222] h-screen">
            {children}
        </main>
        </>
    );
}


export {
    Main
}