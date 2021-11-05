/* eslint-disable no-unused-vars */
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
  return (
    <Container>
      <DestinationData>
        <DestinationList>
          <button
            type="button"
            onClick={() => onSelect('Moon')}
            key={name}
            className={selected.includes('Moon') ? 'selected' : ''}>
            Moon
          </button>
          <button
            type="button"
            onClick={() => onSelect('Mars')}
            key={name}
            className={selected.includes('Mars') ? 'selected' : ''}>
            Mars
          </button>
          <button
            type="button"
            onClick={() => onSelect('Europa')}
            key={name}
            className={selected.includes('Europa') ? 'selected' : ''}>
            Europa
          </button>
          <button
            type="button"
            onClick={() => onSelect('Titan')}
            key={name}
            value={name}
            className={selected.includes('Titan') ? 'selected' : ''}>
            Titan
          </button>
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
