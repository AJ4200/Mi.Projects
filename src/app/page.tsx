import React from 'react';
import Logo from '../../components/header/logo';
import MainPage from '../../components/home/mainPage';
import BackgroundLights from '../../components/background/BackgroundLights';

export default function Home() {
  return (
    <main>
      <BackgroundLights />
      <header>
        <Logo />
      </header>
      <MainPage />
    </main>
  );
}
