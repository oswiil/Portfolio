/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"

import SVG from "./svg"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
       <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
        <SVG icon="illustrator" width={150}  color="icon_orange" left="70%" top="70%" /> 
        </Link>  
        <SVG icon="git" width={150} color="icon_black" left="25%" top="70%" />
        <SVG icon="android" width={150}  color="icon_green" left="40%" top="70%" />
        <SVG icon="wordpress" width={150} color="icon_blue" left="55%" top="70%" />    
      </UpDown>
      <UpDownWide>      
       
      </UpDownWide>
      
     
        
    </Divider>
    <Content sx={{ variant: `texts.bigger`, alignItems:`center` }} speed={0.4} offset={offset} factor={factor}>
      
      <Inner>
      <Intro />
     
      
      </Inner>
    
    </Content>
  </div>
)

export default Hero
