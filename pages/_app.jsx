import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import LoadingSpinner from "../components/LoadingSpinner";
import '../styles/global.css';

const App = ({ Component, pageProps }) => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const userInfo = true;
    //TODO: CREATE LOGIN AUTHENTICATION
    if (router.pathname !== "/login" && !userInfo) {
     router.push("/login");
    }
     setIsLoading(false)  
  }, [])

  if(isLoading) {
    return <LoadingSpinner />
   } else {
    return (
      <Component {...pageProps} />
    );
   }
};

export default App;
