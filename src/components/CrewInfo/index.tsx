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
    <Container className="crew_container">
      <CrewImage className="crew_img_mobile">
        <img src={image} alt="crew" className="crew_img_mobile1" />
      </CrewImage>
      <CrewInfos className="crew_text">
        <h2>{role}</h2>
        <h1>{name}</h1>
        <p>{bio}</p>
      </CrewInfos>
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
      <CrewImage className="crew_img">
        <img src={image} alt="crew" className="crew_img1" />
      </CrewImage>
    </Container>
  );
}
