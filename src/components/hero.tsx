/** @jsx jsx */
import { jsx, Link , Button} from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import scrollTo from 'gatsby-plugin-smoothscroll';
import SVG from "./svg"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
               
         
      </UpDown>
      
      <UpDownWide>  

     
      </UpDownWide>
      
      
        
    </Divider>
    <Content sx={{ variant: `texts.bigger`, alignItems:`center` }} speed={0.4} offset={offset} factor={factor}>
      
      <Inner>
      <Intro />
     <div sx={{  display:'flex', justifyContent:'center' }}>
     
      <a href="https://www.buymeacoffee.com/oswil"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=oswil&button_colour=fe9706&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"/></a>
         
          <Button variant={"buttons.toggle"} onClick={() => scrollTo('#aqui')}>Ver más</Button>
          
  
    </div>
      </Inner>
    
    </Content>
  </div>
)

export default Hero
