import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';


function Home(){
    return (
        <section
        className="flex items-center justify-center gap-11 p-2 mb-5"
        id='about'
        >
            <div className="w-72 h-96 ">
                <img
                src="/photo_portfolio.jpg"
                className="w-full h-full object-cover rounded-lg"
                alt="My photo" />
            </div>

            <div className="w-1/2 bg-[#333] p-5 rounded-lg relative text-white h-96">

                <h1 className='text-3xl mb-5 text-slate-400'>Backend Developer</h1>
                <h2 className='text-4xl mb-5'>Cristian Barajas</h2>

                <p className='text-xl'>hello my name is Cristian barajas, I'm from Venezuela and I'm currently a student of computer engineering</p>

                <div className='flex absolute right-20 bottom-2 gap-2'>
                    <a href="https://github.com/Cristian-Barajas09" target='_blank'>
                    <AiFillGithub className='text-white text-3xl'/>
                    </a>
                   <a href="https://www.linkedin.com/in/cristian-alejandro-barajas-bol%C3%ADvar/" target='_blank'>
                   <AiFillLinkedin className='text-white text-3xl'/>
                   </a>
                </div>
            </div>
        </section>
    )
}


export {
    Home
}