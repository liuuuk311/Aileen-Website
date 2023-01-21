import Link from './Link';
import React from 'react';
import media from '../utils/style';
import styled from 'styled-components';

const Item = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2.5em;
  ${media.xs`
    width: 90%;
  `}
`;

const Program = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
  ${media.xs`
    float:none;
  `}
`;

const Duration = styled.div`
  display: block;
  float: right;
  clear: both;
  ${media.xs`
    float:none;
  `}
`;

const School = styled.div`
  display: block;
  clear: both;
  text-align: left;
  ${media.xs`
    text-align:center;
  `}
`;


function Talks(props) {
  const { edges } = props;
  return (
    <>
      {edges.map(({ node: item }) => (
        <Item key={item.id}>
          <Duration>
            {item.date}
          </Duration>
          <Program>{item.title}</Program>
          <School><strong>{item.event}</strong> - <em>{item.location}</em> {item.link ? <span style={{margin: "1rem"}}><Link to={item.link}>Watch the talk</Link></span> : undefined}</School>
        </Item>
      ))}
    </>
  );
}

export default Talks;
