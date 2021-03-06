/** @jsx jsx */
import React from "react"
import { jsx , Link, Button} from "theme-ui"
import { tailwind } from "@theme-ui/presets"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  icon: string
  icon1: string
  button: string

}

const ProjectCard = ({ link, title, children, icon, icon1, button }: ProjectCardProps) => (

  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      
      bg: `divider` ,
      
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `black`,
        transform: `translateY(-20px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div sx={{ display:`flex`,  mt:-5, float:'left' , transition: `all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },}}>
      <Link href={button} >
      <Button 
        type="button"
        aria-label="BullAcademy">Blog</Button>
        </Link>
   
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
      <img src={icon} width="24px" height="24px" alt="tools" />
      <img src={icon1} width="24px" height="24px" alt="tools" />  
     
     
    </div>
   
  </a>
  
 )

export default ProjectCard
