import styles from './Header.module.scss';
import cls from 'classnames';

import Container from 'components/Container';

const Header = () => {
  return (
    <Container>
      <div className={styles.header}>
        <div className={styles.headers}>
          <h1>Simple minimalist</h1>
          <h2>Michał Warchoł</h2>
          <h3>Your next frontend developer</h3>
        </div>
        <div className={styles.circleBig}></div>
        <div className={cls(styles.circleSmall, styles.circleSmallOne)}></div>
        <div className={cls(styles.circleSmall, styles.circleSmallTwo)}></div>
      </div>
    </Container>
  );
};

export default Header;
