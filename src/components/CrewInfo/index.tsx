/* eslint-disable no-unused-vars */
import data from '../../data.json';
import { Container, CrewImage, CrewInfos, CrewSelection } from './styles';

type CrewProps = {
  role: string;
  name: string;
  bio: string;
  selected: string;
  image: string;
  onSelect: (name: string) => void;
};

export default function CrewInfo({
  role,
  name,
  bio,
  image,
  selected,
  onSelect,
}: CrewProps) {
  const crews = data.crew;

  return (
    <Container>
      <CrewInfos>
        <h2>{role}</h2>
        <h1>{name}</h1>
        <p>{bio}</p>
      </CrewInfos>
      <CrewImage>
        <img src={image} alt="crew" />
      </CrewImage>
      <CrewSelection>
        {crews.map(({ name }) => (
          <button
            key={name}
            type="button"
            value={name}
            onClick={() => onSelect(name)}
            className={selected.includes(name) ? 'selected' : ''}
          />
        ))}
      </CrewSelection>
    </Container>
  );
}
