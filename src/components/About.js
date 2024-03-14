import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"

import media from '../utils/style';

const Paragraph = styled.p`
    margin: 1rem 0;
    text-align: start;
    ${media.md`
        text-align: center;
    `}
`;

const Avatar = styled(Img)`
    flex-basis:33.33%;
    margin: 0 5rem 0 0;
    ${media.md`
        flex-basis: 100%;
        margin: 0;
    `}
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin 0 auto;
    max-width: 1200px;
    ${media.md`
        flex-direction: column;
    `}
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis:66.66%;
    padding: 0 1rem;
    ${media.md`
        flex-basis: 100%;
    `}
`;

function About(props) {
    const { fluid } = props;
    return (
        <Container>
            <Avatar fixed={fluid} imgStyle={{ objectFit: "contain" }} />
            <Description>
                <Paragraph>
                   I am a marine scientist with expertise and passion for science communication and education.
                </Paragraph>
                <Paragraph>
                    Throughout my studies, I conducted research projects focused on shorebirds and marine mammals, while developing a strong interest in science dissemination by creating videos and other contents for social media.
                </Paragraph>
                <Paragraph>
                   Currently, I am working as a communication and social media manager for a non-profit organization dedicated to the effective conservation of Italian seas through innovative outreach and conservation projects.
                </Paragraph>
                <Paragraph>
                    I am moved by a strong desire to learn and get involved by always giving my best effort. Some of my distinguishing skills include self-motivation, adaptability, reliability and organization.
                </Paragraph>
            </Description>
        </Container>
    );
}

export default About;
