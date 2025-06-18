import styled from 'styled-components';
import {GlobalStyles,MyRoutes,Sidebar} from './index.js';
import {Device} from './styles/breakpoints';
function App() {
  return (
  <Container>
    <GlobalStyles/>
    <section className="contentSidebar"><Sidebar/></section>
    <section className="contentMenuHamburger">🍕</section>
    <section className="contentRouters"><MyRoutes/></section>
    </Container>
  );
}
const Container= styled.main`
display: grid;
grid-template-columns: 1fr;
background-color:black;
.contentSidebar{
  display: none;
  background-color: rgba(78,45,78,0.5);
}
.contentMenuHamburger{
  position: absolute;
background-color: rgba(115, 160, 111, 0.5);
}
.contentRouters{
  background-color: rgba(48, 74, 129, 0.5);
  grid-column: 1;
  width: 100%;
}
@media ${Device.tablet}{
  grid-template-columns: 88px 1fr;
  .contentSidebar{
    display: initial;
  }
  .contentMenuHamburger{
    display: none;
  }
.contentRouters{
  grid-column: 2;
}
}`;
export default App
