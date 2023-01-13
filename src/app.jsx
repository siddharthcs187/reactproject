import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5em;
  &:hover {
    color: blue;
  }
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2em;
  background-color: #f5f5f5;
`;

const HeroTitle = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  text-align: center;
`;

const HeroButton = styled(Link)`
  text-decoration: none;
  background-color: blue;
  color: white;
  padding: 0.5em 1em;
  border-radius: 5px;
  &:hover {
    background-color: darkblue;
  }
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavbarContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/services">Services</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </NavbarContainer>
        <HeroContainer>
          <HeroTitle>We help entrepreneurs turn their ideas into successful businesses</HeroTitle>
          <HeroSubtitle>Discover our range of services and resources for startups and growing companies</HeroSubtitle>
          <HeroButton to="/services">Learn more</HeroButton>
        </HeroContainer>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </AppContainer>
    );
  }
}

const Home = () => {
  return (
    <div>
      <p>We provide a range of services and resources for entrepreneurs looking to start or grow their business.</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>Learn more about our company and mission</h1>
      <p>Our company was founded with the goal of helping entrepreneurs turn their ideas into successful businesses. We offer a variety of services and resources to help our clients achieve their goals.</p>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <h1>Explore the services we offer to entrepreneurs</h1>
      <ul>
        <li>Business Plan Creation</li>
        <li>Marketing and Advertising Strategies</li>
        <li>Financial Planning and Analysis</li>
        <li>Networking Opportunities</li>
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Get in touch with us to discuss your project or ideas</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" placeholder="Your email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" placeholder="Your message" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;



