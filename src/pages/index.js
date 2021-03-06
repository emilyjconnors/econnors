import React from 'react'
import { Link, graphql } from 'gatsby'
import { Element } from "react-scroll";

import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import SpaceshipCallout from '../components/SpaceshipCallout';
import Projects from '../components/Projects';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab,far)
import '../styles/shared.css';

class Index extends React.Component {
    render() {
        const { data } = this.props

        return (
            <div className="page-content">
                <Hero />
                <Element name="AboutMe"><AboutMe /></Element>
                <Element name="Spaceship"><SpaceshipCallout /></Element>
                <Element name="Projects"><Projects /></Element>
                <Element name="Contact">
                    <div className="footer-section" id="Contact">
                        <h3>Contact Me</h3>
                        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field"/>
                            </label>
                            </p>
                            <input type="email" name="email" placeholder="E-mail" required />
                            <input type="submit" value="Submit" />
                            <textarea name="message" placeholder="Message..." required></textarea>
                        </form>
                        <div className="social-icons">
                            <a href="mailto:ejconnors90@gmail.com?Subject=Hello%20Emily" target="_blank" className="social-icon">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                            </a>
                            <a href="https://www.linkedin.com/in/emilyjconnors/" target="_blank" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            </a>
                            <a href="https://github.com/emilyjconnors" target="_blank" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                            <a href="https://www.facebook.com/e.conn90" target="_blank" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                            <a href="https://www.instagram.com/e.conn90/" target="_blank" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </div>
                    </div>
                </Element>
            </div>
        )
    }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
