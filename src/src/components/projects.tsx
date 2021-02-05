/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDown, UpDownWide } from "../styles/animations"
import BackgroundSlider from "react-background-slider"
// @ts-ignore
import ProjectsMDX from "../sections/projects"
var images = [


    "https://i.ibb.co/7tC99Qw/efe-kurnaz-Rn-CPi-Xixoo-Y-unsplash.jpg" ,
    "https://i.ibb.co/f8hw1sS/glenn-carstens-peters-P1qy-Ef1g0-HU-unsplash.jpg",
    ];

   
const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div id="middle">
    <Divider
     
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
    
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <BackgroundSlider  images={images}
      duration={10} transition={2}/>
          <ProjectsMDX />
          
        </div>
        
      </Inner>
    </Content>
    
    <Divider speed={0.1} offset={offset} factor={factor}>
   
      <UpDown>
       
      </UpDown>
      <UpDownWide>
      
      </UpDownWide>
      
    </Divider>
  </div>
)

export default Projects
