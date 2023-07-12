import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CarouselEntityCard from './CarouselEntityCard';

type Props = { name: string; onAdd: () => void };

const SoundEntityAdder = ({ name, onAdd }: Props) => {
  return (
    <Flex>
      <CarouselEntityCard>
        <Icon
          className='icon-button'
          as={IoIosAddCircleOutline}
          width='64px'
          height='64px'
          onClick={onAdd}
        ></Icon>
        <Text color={'black'} textColor={'black'} fontSize='20px'>
          {`${name}`}
        </Text>
      </CarouselEntityCard>
    </Flex>
  );
};

export default SoundEntityAdder;
