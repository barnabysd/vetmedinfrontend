
import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

{/* <TransitionLink to="/page-2" activeClass="active" className="transition-link">
  Go to page 2
</TransitionLink> */}

/*
a {
  background-color: red;
box-shadow: 0 5px 0 darkred;
color: white;
padding: 1em 1.5em;
position: relative;
text-decoration: none;
text-transform: uppercase;
}

a:hover {
background-color: #ce0606;
cursor: pointer;
}

a:active {
box-shadow: none;
top: 5px;
}
*/




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
