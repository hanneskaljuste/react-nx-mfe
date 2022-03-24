import styles from './MainNavigation.module.scss';

/* eslint-disable-next-line */
export interface MainNavigationProps {
  children: React.ReactNode;
}

export const MainNavigation: React.FunctionComponent = ({ children }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className={styles['brand-logo']}>
          LOGO
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {children}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
