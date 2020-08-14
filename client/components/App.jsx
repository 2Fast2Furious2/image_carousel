/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Header from './Header.jsx';
import NavButtons from './NavButtons.jsx';

const HeadingWrapper = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const InnerWrapper = styled.div`
  background-color: inherit;
  display: block;
  height: 100%;
  width: 100%;
`;

const MiddleWrapper = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const OuterDiv = styled.div`
  background-color: rgb(247, 247, 247);
  border-bottom: 1px solid rgb(221, 221, 221);
  display: block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  margin: 0;
  padding: 0;
`;

const OuterWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 40px;
  padding-top: 40px;
  max-width:1280px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedListings: [],
      isLoading: true,
      renderedListings: [],
    };
    this.getListings = this.getListings.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios.get('/suggestedListings')
      .then((response) => {
        const suggestedListings = response.data;
        console.log(suggestedListings);
        this.setState({ suggestedListings, isLoading: false });
        this.renderPage(1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderPage(page) {
    if (page === 1) {
      const firstPage = this.state.suggestedListings.slice(0, 4);
      this.setState({ renderedListings: firstPage });
    } else if (page === 2) {
      const secondPage = this.state.suggestedListings.slice(4, 8);
      this.setState({ renderedListings: secondPage });
    } else if (page === 3) {
      const thirdPage = this.state.suggestedListings.slice(8, 12);
      this.setState({ renderedListings: thirdPage });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (<div> . . .</div>);
    }
    return (
      <OuterDiv>
        <OuterWrapper>
          <MiddleWrapper>
            <HeadingWrapper>
              <Header />
              <NavButtons renderPage={this.renderPage} />
            </HeadingWrapper>
            <Carousel carousel={this.state.renderedListings} />
          </MiddleWrapper>
        </OuterWrapper>
      </OuterDiv>
    );
  }
}

export default App;
