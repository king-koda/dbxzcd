import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: JSX.Element[];
  stackProps?: StackProps;
};

const CarouselEntityCard = ({ children, stackProps }: Props) => {
  return (
    <VStack
      padding='5'
      border='2px solid'
      borderColor={'gray.100'}
      backgroundColor={'gray.200'}
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
