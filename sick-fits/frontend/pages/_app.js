import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

//custom app to wrap all my pages for state use
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    //getting data before render to display on load
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    //Components are every file inside of pages
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        {/* custom page componet to wrap around all pages */}
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
