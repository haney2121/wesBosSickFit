import App, { Container } from 'next/app';
import Page from '../components/Page';

//custom app to wrap all my pages for state use
class MyApp extends App {
  render() {
    //Components are every file inside of pages
    const { Component } = this.props;
    return (
      <Container>
        {/* custom page componet to wrap around all pages */}
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
