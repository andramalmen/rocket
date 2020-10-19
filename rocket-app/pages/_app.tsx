/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }: any) {
    return <Component {...pageProps} />;
}

export default MyApp;
