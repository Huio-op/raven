import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import Head from 'next/head'

import {getCookies} from 'cookies-next'

import LoadingSpinner from "../components/LoadingSpinner";
import '../styles/global.css';

const App = ({ Component, pageProps }) => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const isUserLoggedIn = () => {
      return getCookies('userData').userData;
  }

  useEffect(() => {
    setIsLoading(true);
    try {
        const userState = isUserLoggedIn();
        if (router.pathname !== "/login" && !userState ) {
            router.push("/login").then(() => setIsLoading(false));
        } else if (router.pathname !== "/home" && userState) {
            router.push("/home").then(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    } catch (e) {
        console.error(e);
    }
  }, [])

    const initialRender = () => {
        if(isLoading) {
            return <LoadingSpinner />
        } else {
            return (
                <Component {...pageProps} />
            );
        }
    }

    return (
        <div>
            <Head>
                <title>Raven</title>
            </Head>
            {initialRender()}
        </div>
    )


};

export default App;
