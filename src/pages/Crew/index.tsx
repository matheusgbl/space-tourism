import { useCallback, useState } from 'react';

import CrewInfo from '../../components/CrewInfo';
import Header from '../../components/Header';
import data from '../../data.json';
import { Container, Content, CrewMeeting } from './styles';

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState('Douglas');

  const crews = data.crew.filter((crew) => crew.name.includes(selectedCrew));

  const handleChange = useCallback((value: string) => {
    setSelectedCrew(value);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <CrewMeeting>
          <h2>02</h2>
          <p>MEET YOUR CREW</p>
        </CrewMeeting>
        {crews.map((crew) => (
          <CrewInfo
            bio={crew.bio}
            image={crew.images.png}
            name={crew.name}
            role={crew.role}
            key={crew.name}
            onSelect={handleChange}
            selected={selectedCrew}
          />
        ))}
      </Content>
    </Container>
  );
}
