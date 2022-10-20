import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Footer: Component = () => (
  <FooterStyle>
    Made with 💖 by <a href="http://www.github.com/davedbase">David Di Biase</a>{' '}
    from the <a href="https://www.solidjs.com">SolidJS Core</a> based on
    Brittney Postma's Bubble Pop.
  </FooterStyle>
);

const FooterStyle = styled('div')`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  width: 60%;
  left: 50%;
  margin-left: -30%;
  text-align: center;
  padding-bottom: var(--size-2);
  color: var(--white);
  font-weight: var(--font-weight-9);
`;

export default Footer;
