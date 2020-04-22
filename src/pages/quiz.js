import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuizApp from "../components/QuizApp"



const Quiz = () => (
    <Layout>
        <SEO title="Quiz" />
        <QuizApp></QuizApp>
        <Link to="/">Back to home</Link>
    </Layout>
)

export default Quiz;
