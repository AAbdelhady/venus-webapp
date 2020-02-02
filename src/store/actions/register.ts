import {registerAsArtist} from '../../api/artist.api';
import {registerAsCustomer} from '../../api/customer.api';
import {showLoadingOverlay, hideLoadingOverlay} from "./ui";

export const register = (isArtist: boolean) => {
    return dispatch => {
        dispatch(showLoadingOverlay());
        const promise = isArtist ? registerAsArtist() : registerAsCustomer();
        promise.then(() => window.location.reload())
            .catch(() => dispatch(hideLoadingOverlay()));
    };
};