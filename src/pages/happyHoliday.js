
import React from "react"
import JuegoMDX from "../sections/juego"
import {Link , Button} from "theme-ui" 
import { DiscussionEmbed } from 'disqus-react';
import Header from "../components/header"

import Layout from "../components/layout"


const happyholiday = () => (
  <Layout>
<div>

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

      
    <JuegoMDX/>
  
        
    <Link href="https://oswiil.itch.io/christmastime" >
      <Button 
        variant="buttons.secondary"
        aria-label="BullAcademy">ICHIO</Button>
        </Link>

        <DiscussionEmbed
    shortname='example'
    config={
        {
          url: "http://localhost:8000/happyHoliday",
          identifier: "article-id",
          title: "Bull Academy"
        }
    }
>
  </DiscussionEmbed>
    </div>
</div>
</Layout>
    
)
export default happyholiday