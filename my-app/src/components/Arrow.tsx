import { Flex, Icon, Text } from '@chakra-ui/react';
import { startCase } from 'lodash';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CarouselEntityCard from './CarouselEntityCard';

type ArrowProps = { type: 'previous' | 'next'; onClick: () => void };

const Arrow = ({ type, onClick }: ArrowProps) => {
  return (
    <Flex onClick={onClick}>
      <CarouselEntityCard
        stackProps={{ minWidth: '100px', minHeight: '100px' }}
      >
        <Icon
          className='icon-button'
          as={type === 'previous' ? AiOutlineArrowLeft : AiOutlineArrowRight}
          width='64px'
          height='64px'
        ></Icon>
        <Text color={'black'} textColor={'black'} fontSize='20px'>
          {startCase(type)}
        </Text>
      </CarouselEntityCard>
    </Flex>
  );
};

export default Arrow;
