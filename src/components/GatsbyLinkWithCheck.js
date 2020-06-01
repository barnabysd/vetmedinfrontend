import { Link as GatsbyLink } from "gatsby"
import { Link as MuiLink } from '@material-ui/core';
import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AniCustomLink = React.forwardRef(function Link(children, to, activeClassName = 'test', partiallyActive = false, ref, ...other ) {
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)
  if (internal) {
    if (file) {
        return (
          <a href={to} {...other}>
            {children}
          </a>
      )
    }
    return (
        <AniLink paintDrip to={to}><MuiLink component={GatsbyLink} ref={ref} {...props} />{children}</AniLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
});
/*
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName = 'test', partiallyActive = false, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    if (file) {
        return (
          <a href={to} {...other}>
            {children}
          </a>
      )
    }
//     <GatsbyLink
//     to={to}
//     activeClassName={activeClassName}
//     partiallyActive={partiallyActive}
//     {...other}
//   >
//     {children}
//   </GatsbyLink>




    return (
        // <AniLink paintDrip to={to}>{children}</AniLink>
         <GatsbyLink
    to={to}
    activeClassName={activeClassName}
    partiallyActive={partiallyActive}
    {...other}
  >
    {children}
  </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
*/
export default AniCustomLink