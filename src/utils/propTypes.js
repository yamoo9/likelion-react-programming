export function string(props, propName, componentName) {
  const propValue = props[propName];
  const propType = typeof propValue;

  if (propType !== 'string' && propType !== 'undefined') {
    throw new Error(`
      ${componentName} 컴포넌트 ${propName} 속성(prop) 타입의 기댓값은 string 또는 undefined 입니다.
      하지만 전달된 ${propName} 속성 타입은 ${propType.toString()} 입니다.
    `);
  }
}


const PropTypes = {
  string,
};

export default PropTypes;

// import { string } from '@/utils/propTypes'
// import PropTypes from '@/utils/propTypes'