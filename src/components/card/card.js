import Image from 'next/image';
import styles from './card.module.scss';
import Button from '../button/button';
import ConditionalRenderer from '../conditional-renderer';
// import { iconTypes } from '../ButtonIcon/ButtonIcon';


 
const Card = ({buttonText, className, label, title, summary, href}) => {
  return (
    <div className={`${styles.cardWrap} ${className || ''}`}>
    <div className={`${styles.card}`}>
      <div className={styles.cardImageWrap}>
        <div className={styles.cardImage}>
          <Image src={'/download.png'}
        alt='Placeholder Image'
        fill={true} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <ConditionalRenderer condition={label}>
        <div className={`${styles.cardLabel} h6 mb-10 c-orange`}>{label}</div>
        </ConditionalRenderer>
        <ConditionalRenderer condition={title}>
        <h3 className={`${styles.cardTitle} h3 mb-20`}>{title}</h3>
        </ConditionalRenderer>
        <ConditionalRenderer condition={summary}>
        <p className={styles.cardSummary}>{summary}
        </p>
        </ConditionalRenderer>
        <ConditionalRenderer condition={href}>
          <Button href={href}>
            Read More
          </Button> 
          </ConditionalRenderer>
      </div>
    </div>
    </div>
  );
};

export default Card;
