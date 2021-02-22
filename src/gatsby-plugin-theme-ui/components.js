import React from "react"
import ProjectCard from "../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, icon,icon1, button,children }) => (
    <ProjectCard link={link} title={title}  icon={icon} icon1={icon1} button={button}>
      {children}
    </ProjectCard>
  ),
}

export default components
