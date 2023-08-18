import { Link } from 'react-router-dom';
import Logo from './Logo';
// import reactUrl from '@/assets/react.svg?url';
// import reactRaw from '@/assets/react.svg?raw';

// console.log(reactUrl);
// console.log(reactRaw);

function Heading() {
  return <h1>
    <Link to="/">
      <Logo size={40} className="text-blue-300" />
    </Link>
  </h1>;
}

export default Heading;
