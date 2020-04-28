import {registerAsArtist, SpecialityRequest} from '../../api/artist.api';
import {registerAsCustomer} from '../../api/customer.api';
import {hideLoadingOverlay, showLoadingOverlay} from "./ui";

export const registerCustomer = () => {
    return dispatch => {
        dispatch(showLoadingOverlay());
        const promise = registerAsCustomer();
        handleRegisterResult(promise, dispatch);
    };
};

export const registerArtist = (category: string, specialities: SpecialityRequest[]) => {
    return dispatch => {
        dispatch(showLoadingOverlay());
        const promise = registerAsArtist(category, specialities);
        handleRegisterResult(promise, dispatch);
    };
};

const handleRegisterResult = (promise, dispatch) => {
    promise.then(() => window.location.reload())
        .catch(() => dispatch(hideLoadingOverlay()));
};