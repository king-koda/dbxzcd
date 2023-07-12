import { Flex, Icon, Text } from '@chakra-ui/react';
import { startCase } from 'lodash';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CarouselEntityCard from './CarouselEntityCard';

type ArrowProps = { type: 'previous' | 'next'; onClick: () => void };

const Arrow = (data: ArrowProps) => {
  const [state, setState] = useState(data);
  useEffect(() => {
    setState(data);
  }, [data]);

  return (
    <Flex onClick={state.onClick}>
      <CarouselEntityCard
        stackProps={{ minWidth: '100px', minHeight: '100px' }}
      >
        <Icon
          as={
            state.type === 'previous' ? AiOutlineArrowLeft : AiOutlineArrowRight
          }
          width='64px'
          height='64px'
        ></Icon>
        <Text color={'black'} textColor={'black'} fontSize='20px'>
          {startCase(state?.type)}
        </Text>
      </CarouselEntityCard>
    </Flex>
  );
};

export default Arrow;
