// import ButtonLink from './ButtonLink';
// import { Envelope } from '@styled-icons/fa-solid';
import {Instagram as InstagramIcon} from '@styled-icons/fa-brands'
import Link from './Link';
import {LinkedinIn as LinkedinIcon} from '@styled-icons/fa-brands'
import React from 'react';
import {Twitter as TwitterIcon} from '@styled-icons/fa-brands'
// import scrollToElement from 'scroll-to-element';
import styled from 'styled-components';

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  svg {
    color: white;
    width: 1em;
    height: 1em;
    padding: 1.5em;
  }

  ${({ relative }) => relative && `
    position: relative;
  `}
`;

function Social(props) {
  const { edges } = props;
  const linkedin = edges.find((o) => o.node.type === 'linkedin');
  const twitter = edges.find((o) => o.node.type === 'twitter');
  const mail = edges.find((o) => o.node.type === 'mail');
  const instagram = edges.find((o) => o.node.type === 'instagram');


  return (
    <IconWrapper relative={props.relative}>
    <Link aria-label={instagram.node.type} to={instagram.node.url}>
        <InstagramIcon />
      </Link>
      <Link aria-label={linkedin.node.type} to={linkedin.node.url}>
        <LinkedinIcon />
      </Link>
      <Link aria-label={twitter.node.type} to={twitter.node.url}>
        <TwitterIcon />
      </Link>
      {/* <ButtonLink
        aria-label={mail.node.type}
        onClick={() => {
          scrollToElement(mail.node.url);
        }}
      >


        </ButtonLink> */}
    </IconWrapper>
  );
}

export default Social;
