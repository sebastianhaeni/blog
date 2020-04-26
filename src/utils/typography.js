import Typography from "typography"
import LincolnTheme from "typography-theme-lincoln"

delete LincolnTheme.googleFonts

const typography = new Typography(LincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
