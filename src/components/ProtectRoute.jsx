import { useAuth } from '@/contexts/Auth';
import { element } from 'prop-types';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function ProtectRoute({ children }) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    toast('로그인 된 사용자만 이용 가능한 페이지입니다.', {
      position: 'top-right',
      icon: '🚨',
      ariaProps: {
        role: 'alert',
        'aria-live': 'polite',
      },
    });

    return <Navigate to="/signin" />;
  }

  return children;
}

ProtectRoute.propTypes = {
  children: element, // React.ReactElement (JSX)
};

export default ProtectRoute;