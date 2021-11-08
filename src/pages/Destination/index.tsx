import { useCallback, useLayoutEffect, useState } from 'react';

import destinationIntro, { destinationSelect } from '../../animations/destination';
import DestinationInfo from '../../components/DestinationInfo';
import Header from '../../components/Header';
import data from '../../data.json';
import { Container, Content, PickDestination } from './styles';

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState('Moon');
  const [isSelected, setIsSelected] = useState(false);

  const destination = data.destinations.filter(
    (destination) => destination.name === selectedPlanet,
  );

  const handleChange = useCallback((value: string) => {
    setSelectedPlanet(value);
    setIsSelected(true);
  }, []);

  useLayoutEffect(() => {
    destinationIntro();
  }, [destinationIntro]);

  useLayoutEffect(() => {
    if (isSelected === true) {
      destinationSelect();
      setIsSelected(false);
    }
  }, [isSelected]);

  return (
    <Container>
      <Header />
      <Content>
        <PickDestination>
          <h2>01</h2>
          <p>PICK YOUR DESTINATION</p>
        </PickDestination>
        {destination.map((dest) => (
          <DestinationInfo
            key={dest.name}
            image={dest.images.png}
            name={dest.name}
            description={dest.description}
            distance={dest.distance}
            travel={dest.travel}
            onSelect={handleChange}
            selected={selectedPlanet}
          />
        ))}
      </Content>
    </Container>
  );
}
