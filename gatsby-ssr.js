/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import RootLayout from './src/components/rootLayout'
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>

// import React from "react"

// const defaultTheme = "light"
// export const ThemeContext = React.createContext(defaultTheme)

// export const wrapRootElement = ({ element }) => {
//   return (
//     <ThemeContext.Provider value={defaultTheme}>
//       {element}
//     </ThemeContext.Provider>
//   )
// }
