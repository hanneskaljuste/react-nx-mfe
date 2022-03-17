import styles from './PlacesList.module.scss';

/* eslint-disable-next-line */
export interface PlacesListProps {}

export function PlacesList(props: PlacesListProps) {
  return (
    <div className={styles['container']}>
      <h3>Welcome to PlacesList!</h3>
    </div>
  );
}

export default PlacesList;
