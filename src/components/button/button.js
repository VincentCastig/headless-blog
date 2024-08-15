import Link from 'next/link';
import styles from './button.module.scss';

const Button = ({ href, children, icon }) => {
    if (href) {
        return <Link href={href} className={styles.button}>{children}</Link>
    }
  return (
    <button href={href} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
