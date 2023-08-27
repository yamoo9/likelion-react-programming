import { Link } from 'react-router-dom';
import { FramerLogo } from './Logo';

function Heading() {
  return (
    <h1>
      <Link to="/">
        <FramerLogo size={70} className="text-blue-300" />
      </Link>
    </h1>
  );
}

export default Heading;
