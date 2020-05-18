// import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import React from 'react';

function  contactDynamicFormik() {
    const [state, setState] = React.useState({})


    /*
    https://github.com/gatsbyjs/gatsby/issues/10382
    */

    // validate={values => {
    //     let errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}

    const handleChange = (e) => {
        console.log("etk ", e.target.name);
        console.log("etv ",e.target.value);
      setState({ ...state, [e.target.name]: e.target.value })
    }

  const handleSubmit = async (e) => {
      console.log(JSON.stringify(state))
        e.preventDefault()
        const val = await fetch('https://api.formik.com/submit/collect-score/scorecollector', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
        })
        console.log(val)
  }

    return (
        <Layout>
        <SEO title="About" />
         <h1>Contact</h1>
         <Link to="/">Back to home</Link>
      <form onSubmit={handleSubmit}>
        <label for="name">Enter your name: </label>
        <input type="text" name="name" value={state.name} onChange={handleChange} />
      
        <label for="email">Enter your email: </label>
        <input type="text" name="email" value={state.email} onChange={handleChange} />
      
        <button type="submit">Submit</button>
      </form>
      </Layout>
    );
  
}

export default contactDynamicFormik;
