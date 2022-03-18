import { Link } from 'react-router-dom';
import styles from './MainNavigationItem.module.scss';

/* eslint-disable-next-line */
export interface MainNavigationItemProps {
  link: string;
  href: string;
}

export const MainNavigationItem: React.FunctionComponent<
  MainNavigationItemProps
> = ({ link, href }) => {
  return (
    <li>
      <Link to={href}>{link}</Link>
    </li>
  );
};

export default MainNavigationItem;
