import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import {Auth0Provider} from "@auth0/auth0-react";
import React from "react";
import "reflect-metadata"

export default function App({ Component, pageProps }: AppProps) {
  return (<UserProvider>
    <Auth0Provider
        domain="uom-cs-1n654czqhchvmyq5.eu.auth0.com"
        clientId="l84pzyk35ZLskVStqWv3fzo9vwP3oowT"
        redirectUri={"/dashboard"}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  </UserProvider>);
}
