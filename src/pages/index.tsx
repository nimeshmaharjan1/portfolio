import React from 'react';
import { NextPageWithLayout } from './_app';
import MainLayout from '../shared/layout';

const Home: NextPageWithLayout = () => {
  return <>Home</>;
};

export default Home;
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
