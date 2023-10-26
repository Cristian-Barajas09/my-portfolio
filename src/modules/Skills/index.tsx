import { useContext } from "react";
import { AppContext } from "../../shared/context/AppContext";

function Skills() {
    const { skillsIcon } = useContext(AppContext);

    return (
        <section
        className='text-white mb-5 flex justify-center items-center flex-col h-full'
        id='skills'
        >
            <div
            className='bg-[#333] w-1/2 text-center p-2 mb-5 rounded-lg'>
                My Skills
            </div>
            <div className='bg-[#333] p-5 rounded-lg flex '>
                {
                    skillsIcon.map((skill, index) => (
                        <div
                        key={index}
                        className={`${skill.color} text-4xl mx-3 hover:cursor-pointer`}
                        >
                            {skill.icon}
                        </div>
                    ))
                }
            </div>
        </section>
    );
}


export {
    Skills
};