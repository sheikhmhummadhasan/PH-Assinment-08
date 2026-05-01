import CardOfCource from '@/Compnent/CardOfCource';
import Cource from '@/Compnent/Cource';
import CourceCard from '@/Compnent/CourceCard';
import Hero_sec from '@/Compnent/Hero_sec';
import Marquery from '@/Compnent/Marquery';
import UnderMark from '@/Compnent/UnderMark';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero_sec></Hero_sec>
      <CardOfCource></CardOfCource>
      <Cource></Cource>
      <Marquery></Marquery>
      <CourceCard></CourceCard>
      <UnderMark></UnderMark>
    </div>
  );
};

export default page;