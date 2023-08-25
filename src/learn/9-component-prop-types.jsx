import { useState } from 'react';
import PropTypes from 'prop-types';
import { numberWithComma } from '@/utils';

function ComponentPropTypes() {
  const [screencast, setScreencast] = useState({
    id: 'kciskdfkijc',
    title: '화면 공유',
    // tags: ['zoom', 'screen share', 'online lecture'],
    tags: [
      {
        id: 1,
        content: 'zoom',
      },
      {
        id: 2,
        content: 'screen share',
      },
      {
        id: 3,
        content: 'online lecture',
      },
    ],
    isOnline: true,
    price: 180000,
  });

  const { id, title, tags, isOnline, price } = screencast;

  return (
    <div>
      <h2>ComponentPropTypes</h2>
      <ScreenCast
        id={id}
        title={title}
        tags={tags}
        isOnline={isOnline}
        price={price}
        // {...screencast}
      />
    </div>
  );
}

function ScreenCast(props) {
  return (
    <dl lang="en">
      <dt>ID</dt>
      <dd>{props.id}</dd>
      <dt>Title</dt>
      <dd>{props.title}</dd>
      <dt>Online</dt>
      <dd>{props.isOnline ? '🟢' : '🔴'}</dd>
      <dt>Price</dt>
      <dd>{numberWithComma(props.price)}</dd>
      <dt>Tags</dt>
      <dd>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </dd>
    </dl>
  );
}

// PropTypes
// 컴포넌트 속성(props) 유효성 검사 도구
// 컴포넌트.propTypes = {}
ScreenCast.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string), // string[] | Array<string>
  // tags: PropTypes.arrayOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  // ), // (string|number|boolean)[] | Array<string|number|boolean>
};

export default ComponentPropTypes;
