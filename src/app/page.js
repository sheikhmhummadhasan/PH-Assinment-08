import CardOfCource from '@/Compnent/CardOfCource';
import Cource from '@/Compnent/Cource';
import CourceCard from '@/Compnent/CourceCard';
import Hero_sec from '@/Compnent/Hero_sec';
import Instractor from '@/Compnent/Instractor';
import Marquery from '@/Compnent/Marquery';
import Stay from '@/Compnent/Stay';
import UnderMark from '@/Compnent/UnderMark';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero_sec></Hero_sec>
      <CardOfCource></CardOfCource>
      <Instractor></Instractor>
      <Cource></Cource>
      <Marquery></Marquery>
   
      <UnderMark></UnderMark>
      <Stay></Stay>
    </div>
  );
};

export default page;