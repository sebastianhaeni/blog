import Typography from "typography"
import LincolnTheme from "typography-theme-lincoln"

LincolnTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    '.gatsby-highlight': {
      fontSize: "0.7em",
    },
  }
}

delete LincolnTheme.googleFonts

const typography = new Typography(LincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
