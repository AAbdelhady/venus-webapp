import {USER_ACTION_DIALOG as userActionDialogActionTypes} from '../actions/actionTypes';
import {DialogType} from '../../components/user-action-dialog/UserActionDialog';

interface State {
    show: boolean;
    dialogType: DialogType | null;
    dialogProps: any;
}

export interface Action {
    type: string;
    dialogProps?: any;
}

const initialState: State = {
    show: false,
    dialogType: null,
    dialogProps: {}
};

const openUserActionDialog = (dialogType: DialogType, dialogProps: any): State => ({
    show: true,
    dialogType: dialogType,
    dialogProps: dialogProps
});

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case userActionDialogActionTypes.CLOSE_USER_ACTION_DIALOG:
            return initialState;
        case userActionDialogActionTypes.OPEN_LOGIN_DIALOG:
            return openUserActionDialog(DialogType.LOGIN, {});
        case userActionDialogActionTypes.OPEN_REGISTER_DIALOG:
            return openUserActionDialog(DialogType.REGISTER, {});
        case userActionDialogActionTypes.OPEN_CREATE_BOOKING_DIALOG:
            return openUserActionDialog(DialogType.CREATE_BOOKING, action.dialogProps);
        case userActionDialogActionTypes.OPEN_BOOKING_DIALOG:
            return openUserActionDialog(DialogType.BOOKING, action.dialogProps);
        case userActionDialogActionTypes.OPEN_APPOINTMENT_DIALOG:
            return openUserActionDialog(DialogType.APPOINTMENT, action.dialogProps);
        default:
            return state;
    }
};

export default reducer;