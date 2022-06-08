import styled from "styled-components";
import { Title } from "./../../atoms/Title";
import { Project } from "./../../molecules/Project";
import PortfolioDemo from './../../../assets/video/portfolio-demo.mp4'

const projects = [{
    demo: PortfolioDemo, name: `Portfolio website`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper erat urna, at porttitor 
eros pellentesque non. Nunc blandit nibh in odio condimentum, ut cursus augue pharetr. Cras 
semper erat urna, at porttitor eros pellentesque non.`, technologies: `Built with Next Js, React, Styled Components`, url: `http://example.com`, repository: `http://github.example.com`
},
{
    demo: PortfolioDemo, name: `Portfolio website`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper erat urna, at porttitor 
eros pellentesque non. Nunc blandit nibh in odio condimentum, ut cursus augue pharetr. Cras 
semper erat urna, at porttitor eros pellentesque non.`, technologies: `Built with Next Js, React, Styled Components`, url: `http://example.com`, repository: `http://github.example.com`
},
{
    demo: PortfolioDemo, name: `Portfolio website`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper erat urna, at porttitor 
eros pellentesque non. Nunc blandit nibh in odio condimentum, ut cursus augue pharetr. Cras 
semper erat urna, at porttitor eros pellentesque non.`, technologies: `Built with Next Js, React, Styled Components`, url: `http://example.com`, repository: `http://github.example.com`
}
]

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 100px);
    max-height: auto;
    margin-top: 100px;
    h1{
        text-align: start;
        margin-bottom: 0.8em;
    }

`

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
`




export const Work = () => {
    return (
        <Container>
            <Title text={`What've I build`} />
            <ProjectsContainer>
                {projects.map((project, i) =>
                    <Project
                        key={i}
                        projectDemo={project.demo}
                        projectName={project.name}
                        projectDescription={project.description}
                        projectTechnologies={project.technologies}
                        projectUrl={project.url}
                        projectRepository={project.repository}
                        align={i % 2 === 0 ? 'start' : 'end'} />
                )
                }
            </ProjectsContainer>
        </Container>
    )

}