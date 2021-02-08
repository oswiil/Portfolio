/** @jsx jsx */
import { jsx, Link , Button} from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import scrollTo from 'gatsby-plugin-smoothscroll';
import SVG from "./svg"
import styled from "@emotion/styled"
import { UpDown, UpDownWide ,waveAnimation } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`
const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `100%` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
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
