/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import Inner from "../elements/inner"
import Content from "../elements/content"
const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
    
    <Box as="header" variant="header">
      
      
   
      
     <Flex sx={{ p:3, justifyContent:'center', alignItems:'center',color: `text`, a: { color: `text` }}}>
      <br />
     
      <img width="40" height="40" src="https://i.ibb.co/C2sTRFz/FOTO-PERFIL-edit.png"  alt="Mi cara" />
      <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 20 }}
          href="/"
        >
          Oscar | Portfolio
        </Link>
 
      <button sx={{float: `right`}}
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Claro` : `Oscuro`}
      </button>
    
          </Flex>
       
      
    </Box>

    
  )
}

export default Header
