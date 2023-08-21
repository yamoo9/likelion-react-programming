import { Link } from 'react-router-dom';
import Logo from './Logo';

function Heading() {
  return <h1>
    <Link to="/">
      <Logo size={40} className="text-blue-300" />
    </Link>
  </h1>;
}

export default Heading;
