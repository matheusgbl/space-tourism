/* eslint-disable no-unused-vars */
import data from '../../data.json';
import {
  Container,
  DestinationData,
  DestinationDetails,
  DestinationList,
  DistanceAndTravel,
} from './styles';

type DestinationProps = {
  image: string;
  name: string;
  selected: string;
  description: string;
  distance: string;
  travel: string;
  onSelect: (name: string) => void;
};

export default function DestinationInfo({
  image,
  name,
  selected,
  description,
  distance,
  travel,
  onSelect,
}: DestinationProps) {
  const destination = data.destinations;

  return (
    <Container>
      <DestinationData>
        <DestinationList>
          {destination.map(({ name }) => (
            <button
              type="button"
              onClick={() => onSelect(name)}
              key={name}
              value={name}
              className={selected.includes(name) ? 'selected' : ''}>
              {name}
            </button>
          ))}
        </DestinationList>
        <DestinationDetails>
          <h1>{name}</h1>
          <p className="description">{description}</p>
          <div className="separation-line"></div>
          <DistanceAndTravel>
            <div className="distance">
              <p>AVG. DISTANCE</p>
              <p>{distance}</p>
            </div>
            <div className="travel">
              <p>EST. TRAVEL TIME</p>
              <p>{travel}</p>
            </div>
          </DistanceAndTravel>
        </DestinationDetails>
      </DestinationData>
      <img src={image} alt="planet" />
    </Container>
  );
}
