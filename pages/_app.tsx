import { Box, ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import {  NotificationProvider } from '@web3uikit/core';
import { MoralisProvider } from 'react-moralis';

import React from 'react'
import "@fontsource/zcool-kuaile";
import '@fontsource/poppins'
import './pages.css';
const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const theme = extendTheme({ 
  fonts: {
    heading: `'Zcool Kuaile', sans-serif`,
    body: `'Poppins', sans-serif`,
  }, });
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    let handleResize;
    if (typeof global.window !== 'undefined') {
      handleResize = function () {
        setWindowSize({
          width: global.window.innerWidth,
          height: global.window.innerHeight,
        });
      };

      global.window.addEventListener('resize', handleResize);

      handleResize();
    }
  }, []);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <MoralisProvider
      appId="Ule3vKGffPvCeljv5O1GMC28a3A7OGebTRQZmDhG"
      serverUrl="https://e7e8lhnsdker.usemoralis.com:2053/server"
    >
      <NotificationProvider>
        <ChakraProvider resetCSS theme={theme}>
          <WagmiConfig client={client}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
              {isLoading ? (
                <Box
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: windowSize.width < 800 ? '35%' : '40%',
                    paddingTop: '22%',
                    backgroundColor: 'white',
                    flex: 1,
                    height: windowSize.height,
                    width: windowSize.width,
                  }}
                > 
                 
                </Box>
              ) : (
                <Component
                  overflow={'hidden'}
                  overflowX={'hidden'}
                  overflowY={'hidden'}
                  width={windowSize.width}
                  height={windowSize.height}
                  {...pageProps}
                />
              )}
            </SessionProvider>
          </WagmiConfig>
        </ChakraProvider>
      </NotificationProvider>
    </MoralisProvider>
  );
};

export default MyApp;
