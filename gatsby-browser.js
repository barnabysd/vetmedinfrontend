/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// used by tailwind - not used at moment

//import "./src/styles/globals.css"

// You can delete this file if you're not using it
import React from "react"
import RootLayout from './src/components/rootLayout'
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>

// import React from "react"
// import RootLayout from './src/components/rootLayout'
// import DataStoreCustom from  './src/state/ReduxWrapper'

// export const wrapRootElement = ({ element }) => {
//     return (
//         <RootLayout>{element}</RootLayout>
//         // <DataStoreCustom>{element}</DataStoreCustom>
//     )
// }

// const defaultTheme = "light"
// export const ThemeContext = React.createContext(defaultTheme)

// export const wrapRootElement = ({ element }) => {
//   return (
//     <ThemeContext.Provider value={defaultTheme}>
//       {element}
//     </ThemeContext.Provider>
//   )
// }
