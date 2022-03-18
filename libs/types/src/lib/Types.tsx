import styles from './Types.module.scss';

/* eslint-disable-next-line */
export interface TypesProps {}

export function Types(props: TypesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Types!</h1>
    </div>
  );
}

export default Types;
