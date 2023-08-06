import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

function Header() {
  return (
    <>
      <Head>
        <title>Game-App</title>
        <meta
          name='description'
          content='A game app for KPM'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='game.ico' />
      </Head>
      <Script
        referrerPolicy='origin'
      />
    </>
  );
}

export default Header;
