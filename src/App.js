import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content,Footer,FooterDropDownSection,FooterSection,FooterLinkList} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main';

function App() {
  
  return (
    <div>
    <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://moriohcdn.b-cdn.net/50c9b2830b.png) center / cover'}}>
        <Header transparent title="OYD" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/we">About Us</Link>
                <Link to="/me">What we do?</Link>
                <Link to="/contact">Contact us</Link>
            </Navigation>
        </Header>
        <Drawer title="OYD">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/we">About Us</Link>
                <Link to="/me">What we do?</Link>
                <Link to="/contact">Contact us</Link>
            </Navigation>
        </Drawer>
      
   
    </Layout>
  
   
</div>
<br />




<Content>
          <Main /> 
</Content>

<Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>

</div>
  );
}

export default App;
