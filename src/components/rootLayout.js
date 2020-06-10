import React from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"

export default function RootLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Oswald:200,400,500,600,700&display=swap" />
               <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins:200,400,500,600,700&display=swap" />
      </Helmet>
      {children}
    </>
  )
}