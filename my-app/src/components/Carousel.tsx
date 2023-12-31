import { Flex, HStack } from '@chakra-ui/react';
import { cloneDeep } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import Arrow from './Arrow';
import { possibleEntities } from '../data/fakeData';
import SoundEntity from './SoundEntity';
import SoundEntityAdder from './SoundEntityAdder';

/** the complete Carousel component
 */
const Carousel = () => {
  const [enabledEntities, setEnabledEntities] = useState(possibleEntities);

  useEffect(() => {
    setEnabledEntities(possibleEntities);
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);

  // component that will be rerendered each time a device is added/ removed
  const CarouselScrollable = useMemo(() => {
    const children: JSX.Element[] = [];

    const addOrRemove = (index: number) => {
      let enabledEntitiesCopy = cloneDeep(enabledEntities);

      // use the index to change this entity in the carousel to be enabled
      enabledEntitiesCopy = enabledEntitiesCopy.map((eec) => {
        if (enabledEntitiesCopy[index].name === eec.name) {
          eec.added = !eec.added;
        }
        return eec;
      });

      setEnabledEntities(enabledEntitiesCopy);
    };

    enabledEntities.forEach((enabledEntity, index) => {
      // show a different component depending on if the device has been added yet or not
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
            onRemove={() => addOrRemove(index)}
          ></SoundEntity>
        );
      } else {
        children.push(
          <SoundEntityAdder
            onAdd={() => addOrRemove(index)}
            name={enabledEntity.name}
          />
        );
      }
    });

    return (
      <Flex
        ref={ref}
        width='800px'
        overflow={'scroll'}
        overflowY='hidden'
        className='scrollable'
      >
        {children}
      </Flex>
    );
  }, [enabledEntities]);

  return (
    <HStack width='1000px'>
      <>
        <Arrow
          type='previous'
          onClick={() => {
            if (ref.current) {
              ref.current.scrollLeft -= 100;
            }
          }}
        />
        {CarouselScrollable}
        <Arrow
          type='next'
          onClick={() => {
            if (ref.current) {
              ref.current.scrollLeft += 100;
            }
          }}
        />
      </>
    </HStack>
  );
};

export default Carousel;
