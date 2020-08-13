import React from "react"
import { Helmet } from "react-helmet"

export default function RootLayout({ children }) {
  return (
    <>
      <Helmet>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />

        <link href="https://github.com/constancecchen/object-fit-polyfill/blob/master/dist/objectFitPolyfill.min.js" />
        
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Oswald:200,400,500,600,700&display=swap" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins:200,400,500,600,700&display=swap" />
      </Helmet>
      {children}
    </>
  )
}