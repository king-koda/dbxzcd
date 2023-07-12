import { Flex, HStack } from '@chakra-ui/react';
import { cloneDeep } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import Arrow from './Arrow';
import { possibleEntities } from '../data/fakeData';
import SoundEntity from './SoundEntity';
import SoundEntityAdder from './SoundEntityAdder';

const Carousel = () => {
  const [enabledEntities, setEnabledEntities] = useState(possibleEntities);

  useEffect(() => {
    setEnabledEntities(possibleEntities);
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);

  const CarouselScrollable = useMemo(() => {
    const children: JSX.Element[] = [];

    enabledEntities.forEach((enabledEntity, index) => {
      if (enabledEntity?.added) {
        children.push(
          <SoundEntity
            data={enabledEntity}
            onSoundToggle={() => {
              let enabledEntitiesCopy = cloneDeep(enabledEntities);

              // use the index to change this entity in the carousel to be enabled
              enabledEntitiesCopy = enabledEntitiesCopy.map((eec, eecIndex) => {
                if (index === eecIndex) {
                  eec.muted = !eec.muted;
                }
                return eec;
              });

              setEnabledEntities(enabledEntitiesCopy);
            }}
            onRemove={() => {
              let enabledEntitiesCopy = cloneDeep(enabledEntities);

              // use the index to change this entity in the carousel to be enabled
              enabledEntitiesCopy = enabledEntitiesCopy.map((eec) => {
                if (enabledEntitiesCopy[index].name === eec.name) {
                  eec.added = false;
                }
                return eec;
              });

              setEnabledEntities(enabledEntitiesCopy);
            }}
          ></SoundEntity>
        );
      } else {
        children.push(
          <SoundEntityAdder
            onAdd={() => {
              let enabledEntitiesCopy = cloneDeep(enabledEntities);

              // use the index to change this entity in the carousel to be enabled
              enabledEntitiesCopy = enabledEntitiesCopy.map((eec) => {
                if (enabledEntitiesCopy[index].name === eec.name) {
                  eec.added = true;
                }
                return eec;
              });

              setEnabledEntities(enabledEntitiesCopy);
            }}
            name={enabledEntity.name}
          />
        );
      }
    });

    return (
      <Flex
        ref={ref}
        width='500px'
        overflow={'scroll'}
        overflowY='hidden'
        className='scrollable'
      >
        {children}
      </Flex>
    );
  }, [enabledEntities]);

  return (
    <HStack width='800px'>
      <>
        <Arrow
          type='previous'
          onClick={() => {
            if (ref.current) {
              ref.current.scrollLeft -= 50;
            }
          }}
        />
        {CarouselScrollable}
        <Arrow
          type='next'
          onClick={() => {
            if (ref.current) {
              ref.current.scrollLeft += 50;
            }
          }}
        />
      </>
    </HStack>
  );
};

export default Carousel;
