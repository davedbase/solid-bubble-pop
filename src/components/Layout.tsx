import { FlowComponent } from 'solid-js';
import { styled } from 'solid-styled-components';
import Footer from './Footer';

const Layout: FlowComponent = (props) => (
  <>
    <LayoutStyle>{props.children}</LayoutStyle>
    <Footer />
  </>
);

const LayoutStyle = styled('main')`
  display: grid;
  min-height: 100vh;
  place-items: center;
  place-content: center;
  gap: var(--size-4);
`;

export default Layout;
