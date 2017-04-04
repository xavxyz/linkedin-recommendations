import React from 'react';
import ReactDOM from 'react-dom/server';
import { ApolloClient, ApolloProvider, renderToStringWithData } from 'react-apollo';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import 'isomorphic-fetch';

import { WebApp } from 'meteor/webapp';

import App from '../components/App';

const Body = ({ content, state }) => (
  <body>
    <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    <style
      dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};`,
      }}
    />
  </body>
);

// note: if there would be several routes, the matching would be done here
const serverRendering = async (req, res, next) => {
  const client = new ApolloClient();

  const component = (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

  try {
    const content = await renderToStringWithData(component);
    const initialState = { apollo: client.getInitialState() };

    const html = <Body content={content} state={initialState} />;

    // actually appending it to the end result
    req.dynamicBody = ReactDOM.renderToString(html);

    // append the head tags
    // note: could be done with react-helmet, but considering there is only
    // one route, this is statically defined here.
    req.dynamicHead = `<title>Xavier's Linkedin Recommendations</title>`;

    next();
  } catch (error) {
    console.error('[server-rendering error]', error.stack); // eslint-disable-line no-console
    res.writeHead(500);
    res.write('Server-rendering error');
    res.end();
  }
};

// attach the handler to webapp
WebApp.connectHandlers.use(serverRendering);
