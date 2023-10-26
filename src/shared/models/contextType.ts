import React from 'react';

export type ContextType = {
    projects: Project[];
    skillsIcon: SkillsIcon[];
    routes: string[][];
}


type Project = {
    title:string;
    img?:string;
    url:string;
}

type SkillsIcon = {
    icon: React.JSX.Element ;
    color:string;
}


