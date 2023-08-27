import styles from './Container.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.responsiveContainer}>{children}</div>
    </div>
  );
};

export default Container;
