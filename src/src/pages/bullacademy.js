
import React from "react"
import BlogMDX from "../sections/blog"
import {Link , Button} from "theme-ui" 
import { DiscussionEmbed } from 'disqus-react';
import Header from "../components/header"





const bullacademy = () => (

  <div>

    
    <Header offset={0} factor={1} sx={{ position: "fixed"}} />
  <div style={{
 
    
   justifyContent:"center",
   
    paddingTop: "5%",
    paddingLeft:"20%",
    paddingRight:"20%",
    display:"flex",
    flexDirection:"column",
      
  }}>



    <Link href="/" >
      <Button 
        type="button"
        aria-label="BullAcademy">Volver</Button>
        </Link>
    <BlogMDX/>
    <Link href="/" >
      <Button 
        type="button"
        aria-label="BullAcademy">Volver</Button>
        </Link>

        <DiscussionEmbed
    shortname='example'
    config={
        {
          url: "http://localhost:8000/bullacademy",
          identifier: "article-id",
          title: "Bull Academy"
        }
    }
>
  </DiscussionEmbed>
    </div>

    </div>
    
)
export default bullacademy