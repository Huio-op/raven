import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AppContext from '../AppContext';

import { getCookies } from 'cookies-next';

import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState([]);

  const isUserLoggedIn = () => {
    return getCookies('userData').userData;
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      const userState = isUserLoggedIn();
      if (router.pathname !== '/login' && !userState) {
        router.push('/login').then(() => setIsLoading(false));
      } else if (router.pathname !== '/home' && userState) {
        setLoggedUser(userState);
        // router.push(`/home`).then(() => setIsLoading(false));
        setIsLoading(false);
      } else {
        setLoggedUser(userState);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const initialRender = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else {
      return <Component {...pageProps} />;
    }
  };

  return (
    <AppContext.Provider
      value={{
        loggedUser: loggedUser,
        setLoggedUser: setLoggedUser,
      }}
    >
      <Head>
        <title>Raven</title>
      </Head>
      {initialRender()}
    </AppContext.Provider>
  );
};

export default App;
