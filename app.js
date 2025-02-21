// _app.js
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    // Wrap the app with SessionProvider
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
