import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import media from '../utils/style';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Grid = styled.section`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: flex-start;
    margin: 0 15%;

    ${media.md`
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    `}
`;

const Language = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
  ${media.xs`
    float:none;
  `}
`;

const Level = styled.p`
display: block;
letter-spacing: 2px;
font-weight: 700;
float: left;
${media.xs`
  float:none;
`}
`;

const Logo = styled.img`
  display: block;
  margin-bottom: 2rem !important;
  border-radius: .35rem;
`;

function Certifications(props) {
  const { edges } = props;
  const simpleQueryResult = useStaticQuery(graphql`
    {
      padi: allImageSharp(
        filter: { original: { src: { regex: "/padi/" } } }
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
      ielts: allImageSharp(
        filter: { original: { src: { regex: "/ielts/" } } }
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
      dele: allImageSharp(
        filter: { original: { src: { regex: "/dele/" } } }
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
      r: allImageSharp(
        filter: { original: { src: { regex: "/r_lang/" } } }
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
      davinci: allImageSharp(
        filter: { original: { src: { regex: "/davinci/" } } }
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
    }
    `)

  return (
    <Grid>
      {edges.map(({ node: item }) => {

        return (<Item key={item.id}>
            <Row>
              <Logo src={simpleQueryResult[item.logo].edges[0].node.fluid.srcWebp} height={100}/>
            </Row>
            <Row>
              <TextContainer>
                <Language>{item.name}</Language>
                <Level>Issued: {item.issued}</Level>
              </TextContainer>
            </Row>
        </Item>);
      })}
    </Grid>
  );
}

export default Certifications;

