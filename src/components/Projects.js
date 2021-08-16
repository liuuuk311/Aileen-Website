import React from 'react';
import styled from 'styled-components';


import media from '../utils/style';

const Item = styled.article`
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  ${media.xs`
  flex-direction: column;
  `}
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1150px;
    align-items: flex-center;
`;

const TextContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  flex: 0 1 50%;

  ${media.xs`
    order: 2 !important;
  `}
`;

const Title = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-size: 1.5em;
  font-weight: 700;
  float: left;
  ${media.xs`
    float: none;
    height: auto;
    font-size: 1em;
  `}
`;


const Description = styled.div`
  display: block;
  clear: both;
  margin: 1rem 0;
`;

const Video = styled.iframe`
  flex: 0 1 50%;
  border-radius: .35em;
  margin: 2rem 0;
  ${media.xs`
    border-radius: 0;
    flex: 0 1 auto;
  `}
`;

function Projects(props) {
  const { edges } = props;

  return (
    <Container> 
      {edges.map(({ node: item }, index) => 
        <Item key={item.id}>
          <TextContainer style={{order: index % 2 === 0 ? 0 : 1}}>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </TextContainer>
          <Video 
              src={item.link} 
              width="360" 
              height="320" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"></Video>
        </Item>
    )}
    </Container>
  );
}

export default Projects;
