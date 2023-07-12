import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

const CarouselEntityCard = ({
  children,
  stackProps,
}: {
  children: JSX.Element[];
  stackProps?: StackProps;
}) => {
  return (
    <VStack
      padding='5'
      border='1px black solid'
      margin='2'
      minWidth='150px'
      minHeight='150px'
      className='carousel-entity'
      borderRadius={'xl'}
      {...stackProps}
    >
      {children}
    </VStack>
  );
};
export default CarouselEntityCard;
