import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneSound } from 'react-icons/ai';
import { BsFillVolumeMuteFill } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import CarouselEntityCard from './CarouselEntityCard';
import { Entity } from './common';

type Props = {
  data: Entity;
  onSoundToggle: () => void;
  onRemove: () => void;
};

/** the component to be displayed for already added devices
 */
const SoundEntity = ({ data, onSoundToggle, onRemove }: Props) => {
  return (
    <CarouselEntityCard>
      <Icon
        className='icon-button'
        as={data.muted ? BsFillVolumeMuteFill : AiTwotoneSound}
        width='64px'
        height='64px'
        onClick={onSoundToggle}
      ></Icon>
      <Text
        color={'black'}
        textColor={'black'}
        fontSize='20px'
        whiteSpace={'nowrap'}
      >
        {data?.name}
      </Text>

      <HStack className='icon-button' onClick={onRemove}>
        <Icon
          as={IoMdRemoveCircleOutline}
          width='16px'
          height='16px'
          color={'red'}
          mr={'-1'}
        ></Icon>
        <Text
          color={'red'}
          textColor={'red'}
          fontWeight='bold'
          fontSize='14px'
          userSelect='none'
          fontFamily={'Lucida Console'}
        >
          {`Remove`}
        </Text>
      </HStack>
    </CarouselEntityCard>
  );
};

export default SoundEntity;
