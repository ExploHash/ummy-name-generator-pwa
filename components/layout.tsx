import styles from './layout.module.css';
import { Providers } from '../app/providers';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Providers>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </Providers>
  );
}
