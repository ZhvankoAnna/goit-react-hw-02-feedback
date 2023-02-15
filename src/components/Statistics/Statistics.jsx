import { BsEmojiNeutral, BsEmojiHeartEyes, BsEmojiFrown } from 'react-icons/bs';
import { BiAbacus, BiBarChartAlt2 } from 'react-icons/bi';
import css from 'components/Statistics/statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={css.box}>
        <BsEmojiHeartEyes className={css.icon} />
        <p className={css.text}>Good: {good}</p>
      </div>
      <div className={css.box}>
        <BsEmojiNeutral className={css.icon} />
        <p className={css.text}>Neutral: {neutral}</p>
      </div>
      <div className={css.box}>
        <BsEmojiFrown className={css.icon} />
        <p className={css.text}>Bad: {bad}</p>
      </div>
      <div className={css.box}>
        <BiAbacus className={css.icon} />
        <p className={css.text}>Total: {total()}</p>
      </div>
      <div className={css.box}>
        <BiBarChartAlt2 className={css.icon} />
        <p className={css.text}>
          Positive Feedback:{' '}
          {total() === 0 ? '0' : Math.floor(positivePercentage())}%
        </p>
      </div>
    </>
  );
};

export default Statistics;
