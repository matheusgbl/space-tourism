/* eslint-disable no-unused-vars */
import data from '../../data.json';
import { Container, LaunchDescription, LaunchImage, LaunchSelection } from './styles';

type TechProps = {
  name: string;
  description: string;
  image: string;
  landscapeImg: string;
  selected: string;
  onSelect: (value: string) => void;
};

export default function TechInfo({
  name,
  description,
  image,
  selected,
  landscapeImg,
  onSelect,
}: TechProps) {
  const tech = data.technology;

  return (
    <Container>
      <LaunchImage className="launch_img_landscape">
        <img src={landscapeImg} alt={name} className="launch_img_landscape" />
      </LaunchImage>
      <LaunchSelection className="launch_selection">
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
      </LaunchSelection>
      <LaunchDescription className="launch_description">
        <h2>THE TERMINLOGY ...</h2>
        <h1>{name}</h1>
        <p>{description}</p>
      </LaunchDescription>
      <LaunchImage className="launch_img">
        <img src={image} alt={name} className="launch_img_portrait" />
      </LaunchImage>
    </Container>
  );
}
