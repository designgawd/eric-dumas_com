import ProjectCard from "./card";

function Projects() {

    return (
        <section className="mt-8 mb-8">
            <div>
                <h3 className="text-amber-50 text-2xl md:text-3xl font-bold py-8">Some Creative Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects;