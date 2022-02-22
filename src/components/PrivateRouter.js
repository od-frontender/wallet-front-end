// import { Redirect, Route } from 'react-router';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// export default function PrivateRouter({ children, ...routeProps }) {
//   const isToken = useSelector(authSelectors.getToken);
//   return (
//     <Route {...routeProps}>
//       {Boolean(isToken) ? children : <Redirect to="/login" />}
//     </Route>
//   );
// }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isToken = useSelector(authSelectors.getToken);
  return isToken ? children : <Navigate to={redirectTo} />;
}
