import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';


//render which route component, then rest of the props
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Route
        //rest of the props
            {...rest}
            //if we have a user, then we render props, if not, then redirect user to login route
			render={(routeProps) => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={'/home'} />)}
		/>
	);
};

export default PrivateRoute;