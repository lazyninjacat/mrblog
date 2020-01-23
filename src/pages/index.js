import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "MR Blog!!"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img
          style={{ margin: 0 }}
          src="./assets/lazyninjacat_avatar.png"
          alt="lazyninjacat"
        />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          Welcome to my developer learning blog. This is the home page which I
          will delete as soon as I can figure out how, haha.
        </p>
        <p>
          This blog is built with Gatsby.js with Netlify CMS, also deployed on
          Netlify. Cool...
        </p>
        <p>Now I'm gonna go figure out how to work this thing!!</p>
        <Link to="/blog/">
          <Button marginTop="45px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
