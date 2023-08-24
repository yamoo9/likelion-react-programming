import { oneOf } from 'prop-types';

function GoToButton({
  direction /* 'down' | 'up' */,
  label /* string */,
  // 나머지 전달된 속성(prop)을 모은 객체
  // rest props
  ...restProps
}) {
  // 문 또는 식
  // let className = '';
  // if (direction === 'down') {
  //   className = 'scrollDown';
  // } else {
  //   className = 'scrollUp';
  // }

  return (
    <button
      type="button"
      // className={className}
      /* 식만 사용 가능 */
      className={direction === 'down' ? 'scrollDown' : 'scrollUp'}
      aria-label={label}
      title={label}
      {...restProps}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}

GoToButton.propTypes = {
  direction: oneOf(['down', 'up']),
};

export default GoToButton;
