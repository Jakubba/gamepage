import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { MainSlider } from '../components/MainSlider/MainSlider';
import { CategoryBlok } from '../components/CategoryBlok/CategoryBlok';

export const Main = () => {
  return (
    <>
      <Navbar />
      <MainSlider />
      <CategoryBlok />
    </>
  );
};
