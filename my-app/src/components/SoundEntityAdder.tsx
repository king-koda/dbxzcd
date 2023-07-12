import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CarouselEntityCard from './CarouselEntityCard';

type Props = { name: string; onAdd: () => void };

const SoundEntityAdder = (props: Props) => {
  const { name, onAdd } = props;
  return (
    <Flex onClick={onAdd}>
      <CarouselEntityCard>
        <Icon
          as={IoIosAddCircleOutline}
          width='64px'
          height='64px'
          _hover={{ cursor: 'pointer' }}
        ></Icon>
        <Text
          color={'black'}
          textColor={'black'}
          fontSize='20px'
          style={{ userSelect: 'none' }}
        >
          {`${name}`}
        </Text>
      </CarouselEntityCard>
    </Flex>
  );
};

export default SoundEntityAdder;
