import { useContext } from "react";
import { ProjectItem } from "./components/ProjectItem";
import { ProjectList } from "./components/ProjectList";
import { AppContext } from "../../shared/context/AppContext";



function Projects() {
  const { projects } = useContext(AppContext);
  return (
    <section
    className="text-white mb-3 h-full" id="projects">
        <h2 className="text-center p-2 mb-5 rounded-lg text-xl">
            My Projects
        </h2>
        <div className="flex justify-center items-center ">
          <ProjectList>
            {
              projects.map((project, index) => (
                <ProjectItem
                key={index}
                title={project.title}
                img={project.img}
                url= {project.url}
                />
              ))
            }
          </ProjectList>
        </div>
    </section>
  );
}

export {
    Projects
}