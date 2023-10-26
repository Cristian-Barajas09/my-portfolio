import React from "react";
import { ContextType } from "../models/contextType";
import {
    SiJavascript,SiExpress,SiPython,SiMysql,SiFlask
} from 'react-icons/si';

import {BiLogoJava} from 'react-icons/bi'


const AppContext = React.createContext<ContextType>({
    projects: [],
    skillsIcon: [],
    routes:[],

});

function AppProvider({children}:React.PropsWithChildren) {
    const projects = [
        {title: 'encriptador',img:'/encriptador.png',url:'https://github.com/Cristian-Barajas09/Challenge-oracle-one'},
        {title: 'conversor', img:'/conversor.png',url:'https://github.com/Cristian-Barajas09/Challenge-2-oracle-one'},
        {title: 'Hotel alura',img:'/hotel_alura.png',url:'https://github.com/Cristian-Barajas09/challenge-3-one-alura-hotel-latam'},
        {title:'TODO Machine',img:'/TODO_Machine.png',url:'https://cristian-barajas09.github.io/curso-react-intro-platzi/'}
    ]

    const routes = [
        ['Home','/'],
        ['About','/about'],
        ['My skills','/skills'],
        ['My projects','/projects'],
    ]

    const skillsIcon = [
        {
            icon: <SiJavascript/>,
            color: 'text-yellow-300'
        },
        {
            icon: <SiExpress/>,
            color: 'text-slate-300'
        },
        {
            icon: <SiPython/>,
            color: 'text-white'
        },
        {
            icon: <SiMysql/>,
            color: 'text-white'
        },{
            icon: <BiLogoJava/>,
            color: 'text-white'
        },{
            icon: <SiFlask/>,
            color: 'text-white'
        }
    
    ]

    return (
        <AppContext.Provider value={
            {
                projects,skillsIcon,routes
            }
        }>
            {children}
        </AppContext.Provider>
    );
}


export {
    AppContext,
    AppProvider
}