import { ReactNode } from 'react';
import styles from '@/styles/components/Main.module.scss';

interface MainProps {
  children?: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
        { children }
    </main>
  );
};

export default Main;