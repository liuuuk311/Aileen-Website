import { Box, Flex } from 'grid-styled';
import styled, { css } from 'styled-components';

import About from '../components/About';
import Certifications from '../components/Certifications';
import ContactForm from '../components/ContactForm';
import Educations from '../components/Educations';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import HeroText from '../components/HeroText';
import Languages from '../components/Languages';
import Layout from '../components/Layout';
import { Parallax } from 'react-parallax';
import Projects from '../components/Projects';
import React from 'react';
import Social from '../components/Social';
import Talks from '../components/Talks';
import { graphql } from 'gatsby';
import media from '../utils/style';

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #4dacbf;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #e6f3f6;
      }
    `}
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  padding: 0 0 1rem 0;
  font-weight: 800;
  ${media.xs`
    font-size:1.5em;
  `}
`;

const IndexPage = ({ data }) => {
  return (<Layout>
    {/* <Hero videos={data.videos} poster={data.poster.edges[0].node.fluid.srcWebp}> */}
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges}/>
    </Hero>
    <Section id="about-me">
      <h1>About Me</h1>
      <About fluid={data.me.edges[0].node.fluid}/>
    </Section>
    <Section id="projects" dark>
      <SectionTitle>My Projects</SectionTitle>
      <Projects edges={data.allProjectJson.edges} />
    </Section>
    {/* Immagine per le talks */}
    <Parallax bgImage={data.talk.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"talk-parallax-img"} >
    
      <div style={{ height: '750px' }} />
    </Parallax>
    <Section id="talks">
      <SectionTitle>My Talks</SectionTitle>
      <Talks edges={data.allTalksJson.edges} />
    </Section>
    <Parallax bgImage={data.fieldwork.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"parallax-img"}>
      <div style={{ height: '750px' }} />
    </Parallax>
    <Section id="experience" dark>
      <SectionTitle>My Experience</SectionTitle>
      <Experience edges={data.allExperienceJson.edges} />
    </Section>
    <Parallax bgImage={data.microscope.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"parallax-img"}>
      <div style={{ height: '750px' }} />
    </Parallax>
    <Section id="education">
      <SectionTitle>My Education</SectionTitle>
      <Educations edges={data.allEducationJson.edges} />
    </Section>
    <Parallax bgImage={data.turtle.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"boat-parallax-img"}>
      <div style={{ height: '750px' }} />
    </Parallax>
    <Section id="certifications" dark>
      <SectionTitle>My Certifications</SectionTitle>
      <Certifications edges={data.allCertificationsJson.edges} />
    </Section>
    <Parallax bgImage={data.diving.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"last-parallax-img"}>
      <div style={{ height: '750px' }} />
    </Parallax>
    <Section id="languages">
      <SectionTitle>My Languages</SectionTitle>
      <Languages edges={data.allLanguagesJson.edges} />
    </Section>
    <Section id="contact" dark>
      <SectionTitle>Contact Me</SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ContactForm />
          
        </Box>
      </Flex>
    </Section>
  </Layout>
  )
}
export default IndexPage;

export const pageQuery = graphql`
  query indexQuery {
    allSocialJson {
      edges {
        node {
          url
          type
        }
      }
    }
    allTalksJson {
      edges {
        node {
          id
          title
          event
          location
          link
          date 
        }
      }
    }
    allExperienceJson {
      edges {
        node {
          id
          company
          title
          start
          end
          location
          description
        }
      }
    }
    allCertificationsJson {
      edges {
        node {
          name
          id
          issued
          authority
          logo
        }
      }
    }
    allLanguagesJson {
      edges {
        node {
          code
          id
          level
          name
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/seashore/" } } }
    ) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    me: allImageSharp(
      filter: { original: { src: { regex: "/me/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    fieldwork: allImageSharp(
      filter: { original: { src: { regex: "/fieldwork/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    talk: allImageSharp(
      filter: { original: { src: { regex: "/test/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    diving: allImageSharp(
      filter: { original: { src: { regex: "/diving/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    microscope: allImageSharp(
      filter: { original: { src: { regex: "/microscope/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    turtle: allImageSharp(
      filter: { original: { src: { regex: "/sea_sighting/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allEducationJson {
      edges {
        node {
          id
          school
          program
          start
          end
          description
          location
        }
      }
    }
    allProjectJson {
      edges {
        node {
          id
          title
          link
          description
        }
      }
    }
  }
`;
