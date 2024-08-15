import Image from 'next/image';
import styles from './card.module.scss';
import Button from '../button/button';
// import { iconTypes } from '../ButtonIcon/ButtonIcon';

 
const Card = ({buttonHref, buttonText}) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.cardImageWrap}>
        <div className={styles.cardImage}>
          <Image src={'/download.png'}
        alt='Placeholder Image'
        fill={true} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={`${styles.label} h6 mb-10 c-orange`}>Product Reviews</div>
        <h3 className={`${styles.cardTitle} h3 mb-20`}>Title of Your Content</h3>
        <p className={styles.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.
        </p>
          <Button href={buttonHref}>
            Read More
          </Button> 
      </div>
    </div>
  );
};

export default Card;
