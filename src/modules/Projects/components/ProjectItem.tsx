function ProjectItem({title,img,url}: {title: string,img?:string,url:string }){
    return (
        <li className="w-56 h-52 bg-[#333] mb-6 relative rounded-lg">
            <a href={url} target="_blank">
                <figure className="w-full h-full">
                    <img src={img} alt={title} className="w-full h-full rounded-lg"/>
                </figure>
                <div className="absolute bottom-0 p-2 w-full bg-[#33333386] rounded-lg">
                    <h3>{title}</h3>
                </div>
            </a>
        </li>
    )
}


export {
    ProjectItem
}