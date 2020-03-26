import awsconfig from '../../aws-exports';
import { InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { Auth } from 'aws-amplify';

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext(
  (_request) =>
    new Promise((resolve, _reject) => {
      Auth.currentSession().then((session) => {
        const token = session.getIdToken().getJwtToken();
        resolve({
          headers: { Authorization: token },
        });
      });
    })
);

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
