import { ApolloClient, InMemoryCache,HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error';
const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
    headers: {
    //   authorization: `Bearer ${tokenValue}`
    }
  });
  const apolloclient = new ApolloClient({
    link: from([httpLink]),
    cache
  });
  
  export default apolloclient;