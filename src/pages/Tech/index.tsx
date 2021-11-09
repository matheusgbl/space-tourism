import { useCallback, useLayoutEffect, useState } from 'react';

import techIntro, { techSelect } from '../../animations/tech';
import Header from '../../components/Header';
import TechInfo from '../../components/TechInfo';
import data from '../../data.json';
import { Container, Content, SpaceLaunch } from './styles';

export default function Technology() {
  const [selectedLaunch, setSelectedLaunch] = useState('Launch');
  const [isSelected, setIsSelected] = useState(false);

  const techs = data.technology.filter((destination) =>
    destination.name.includes(selectedLaunch),
  );

  const handleChange = useCallback((value: string) => {
    setSelectedLaunch(value);
    setIsSelected(true);
  }, []);

  useLayoutEffect(() => {
    techIntro();
  }, [techIntro]);

  useLayoutEffect(() => {
    if (isSelected === true) {
      techSelect();
      setIsSelected(false);
    }
  }, [isSelected]);

  return (
    <Container>
      <Header />
      <Content>
        <SpaceLaunch>
          <h2>03</h2>
          <p>SPACE LAUNCH 101</p>
        </SpaceLaunch>
        {techs.map((tech) => (
          <TechInfo
            description={tech.description}
            image={tech.images.portrait}
            landscapeImg={tech.images.landscape}
            name={tech.name}
            onSelect={handleChange}
            selected={selectedLaunch}
            key={tech.name}
          />
        ))}
      </Content>
    </Container>
  );
}
