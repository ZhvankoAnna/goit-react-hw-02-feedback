import css from './feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);
  return (
    <>
      {names.map(name => (
        <button
          key={name}
          className={css.btn}
          type="button"
          onClick={() => {
            onLeaveFeedback(name);
          }}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;