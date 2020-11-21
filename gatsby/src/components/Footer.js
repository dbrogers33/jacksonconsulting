import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: var(--blue);
    color: white;
    padding: 1rem;
    .credits {
        text-align: center;
    }
`

export default function Footer() {
  return (
    <FooterWrapper>
        <p className="credits">&copy; {new Date().getFullYear()} Jackson Consulting Firm, LLC. Website by <a href="https://denhamrogers.com">Denham Rogers</a></p>
    </FooterWrapper>
  );
}