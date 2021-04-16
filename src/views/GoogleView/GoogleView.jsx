import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import Loader from 'components/Loader';

const GoogleView = () => {
    const dispatch = useDispatch();
    const googleCredentials = {
        name: useSelector(authSelectors.getUsername),
        email: useSelector(authSelectors.getUserEmail)
    }
 
    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem('token'));
        if (token) {
            dispatch(authOperations.googleAuth(token));
        }
    }, [dispatch])

    useEffect(() => {
        const newUser = {
            email: googleCredentials.email,
            password: googleCredentials.name
        }
        if (newUser.email) {
            dispatch(authOperations.logIn(newUser));
        }
    }, [dispatch, googleCredentials.email, googleCredentials.name])
    
    return (
        <Loader/>
    )
}

export default GoogleView