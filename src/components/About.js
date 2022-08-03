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
                   I am a marine scientist and I combine my passion and expertise with science outreach and education.
                </Paragraph>
                <Paragraph>
                    Currently, I am working as a communication and social media officer for an Italian NGO that develops creative projects for the conservation of the marine environment.
                </Paragraph>
                <Paragraph>
                   Throughout my studies, I gained practical experience in shorebirds and marine mammal research, while writing blog posts and creating content for social media and videos to convey my work.
                </Paragraph>
                <Paragraph>
                   I am moved by a strong desire to learn and get involved by always giving my best effort. Some of my distinguishing skills include self-motivation, adaptability, reliability and organisation.
                </Paragraph>
            </Description>
        </Container>
    );
}

export default About;
