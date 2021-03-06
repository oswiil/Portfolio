
import React from "react"
import LotieMDX from "../sections/lotie"
import {Link , Button} from "theme-ui" 
import { DiscussionEmbed } from 'disqus-react';
import Header from "../components/header"
import Layout from "../components/layout"



const lottie = () => (
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

      
    <LotieMDX/>
  
        
   
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
export default lottie