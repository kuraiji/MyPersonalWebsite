interface Project {
    title: string;
    description: string;
    cover: string;
    link: string;
}

export const getProjects = () : Array<Project> => {
    return Projects;
}

const Projects: Array<Project> = [
    {   title: "Doktor Golem's Radical Robot",
        description: "test",
        cover: "test",
        link: "test"}];