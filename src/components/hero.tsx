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
import "../styles/styles.css"
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
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="1 0 800 338.05" preserveAspectRatio="none">
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
    
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>   
    
      <div class="css-typing"> 
      <Intro />
      </div>  
      </Inner>
      <div sx={{ position: 'fixed', mt: '20%', ml: '50%', Zindex:-2}}>
      <img src="https://svgshare.com/i/UQ8.svg" width="170%"/>
      <UpDown>
      <SVG icon="illustrator" width={5} color="icon_black" left="150%" top="-20%" />
      <SVG icon="java" width={5} color="icon_black" left="170%" top="30%" />
      </UpDown>
      <UpDownWide>
      <SVG icon="git" width={10} color="icon_black" left="-60%" top="-20%" />
    
      </UpDownWide>
      
      </div>
    </Content>
    
   
  </div>
)

export default Hero
