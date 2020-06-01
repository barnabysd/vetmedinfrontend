
import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

{/* <TransitionLink to="/page-2" activeClass="active" className="transition-link">
  Go to page 2
</TransitionLink> */}


const AniCustomLink = React.forwardRef(function Link(children, to, ...other ) {
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
        <AniLink paintDrip to={to} {...other} />
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
});

export default AniCustomLink
