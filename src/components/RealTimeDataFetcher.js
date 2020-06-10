import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

const RealTimeDataFetcher = () => {
  // Build Time Data Fetching
//   const gatsbyRepoData = useStaticQuery(graphql`
//     query {
//       github {
//         repository(name: "gatsby", owner: "gatsbyjs") {
//           id
//           nameWithOwner
//           url
//         }
//       }
//     }
//   `)
  // Client-side Runtime Data Fetching
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars
  }, [])

  return (
    <section>
      <p>
        Build Time Data: Gatsby repo{` `}
        {/* <a href={gatsbyRepoData.github.repository.url}>
          {gatsbyRepoData.github.repository.nameWithOwner}
        </a> */}
      </p>
      <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
    </section>
  )
}

export default RealTimeDataFetcher