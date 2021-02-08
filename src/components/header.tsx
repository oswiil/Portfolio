/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
    <Box as="header" variant="header">
     
      <br />
      <Flex
        sx={{
          position:`absolute`,
          alignItems: `left`,
          ml: 4,
          
          justifyContent: `center`,
          color: `text`,
          fontWeight: `bold`,
          a: { color: `text` },
        }}
      >
      <img width="40" height="40" src="https://i.ibb.co/C2sTRFz/FOTO-PERFIL-edit.png"  alt="Mi cara" />
      <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="/"
        >
          Oscar | Portfolio
        </Link>
     
      </Flex>
      <Flex
        sx={{
          outline:`none`,
          justifyContent:`center`,
          mr:0,
          mt: 0,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {` `}

        <div  sx={{display: `block`, mx: `auto`, mb: 3 }}></div>
        {` `}
        <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: 20, mb: 3 }}
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
