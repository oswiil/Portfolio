/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
      <SVG icon="illustrator" width={100}  color="icon_orange" left="89%" top="1%" /> 
      <SVG icon="unity" width={200}  color="white" left="89%" top="50%" /> 
        <SVG icon="wordpress" width={90} color="icon_blue" left="75%" top="75%" />   
      </UpDown>
      <UpDownWide>
      <SVG icon="git" width={90} color="icon_black" left="10%" top="1%" />
        <SVG icon="android" width={50}  color="icon_green" left="20%" top="80%" />
      </UpDownWide>
   
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
