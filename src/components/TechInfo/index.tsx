/* eslint-disable no-unused-vars */
import data from '../../data.json';
import { Container, LaunchDescription } from './styles';

type TechProps = {
  name: string;
  description: string;
  image: string;
  selected: string;
  onSelect: (value: string) => void;
};

export default function TechInfo({
  name,
  description,
  image,
  selected,
  onSelect,
}: TechProps) {
  const tech = data.technology;

  return (
    <Container>
      <div>
        {tech.map((item, index) => (
          <button
            type="button"
            onClick={() => onSelect(item.name)}
            key={item.name}
            value={item.name}
            className={selected.includes(item.name) ? 'selected' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
      <LaunchDescription>
        <h2>THE TERMINLOGY ...</h2>
        <h1>{name}</h1>
        <p>{description}</p>
      </LaunchDescription>
      <div>
        <img src={image} alt={name} />
      </div>
    </Container>
  );
}
