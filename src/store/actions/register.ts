import {ArtistRequest, registerAsArtist} from '../../api/artist.api';
import {registerAsCustomer} from '../../api/customer.api';
import {hideLoadingOverlay, showLoadingOverlay} from "./ui";

export const registerCustomer = () => {
    return dispatch => {
        dispatch(showLoadingOverlay());
        const promise = registerAsCustomer();
        handleRegisterResult(promise, dispatch);
    };
};

export const registerArtist = (artistRequest: ArtistRequest) => {
    return dispatch => {
        dispatch(showLoadingOverlay());
        const promise = registerAsArtist(artistRequest);
        handleRegisterResult(promise, dispatch);
    };
};

const handleRegisterResult = (promise, dispatch) => {
    promise.then(() => window.location.reload())
        .catch(() => dispatch(hideLoadingOverlay()));
};