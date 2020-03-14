import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {random} from '../../../utils/common';
import classes from './Select.module.scss';

interface Props {
    options?: any[];
    textProperty: string;
    valueProperty: string;
    label: string;
    name: string;
    value: any;
    style?: any;
    onChange(event);
}

const Select = (props: Props) => {
    const options = props.options ? props.options : [];
    const selectId = `select-${random()}`;
    const label = props.label ? <InputLabel htmlFor={selectId}>{props.label}</InputLabel> : null;
    const currentValue = props.value ? props.value : '';
    return (
        <FormControl style={props.style} className={classes.Container}>
            {label}
            <MuiSelect name={props.name} value={currentValue} onChange={props.onChange} className="w-100" inputProps={{id: selectId}}>
                {options?.map(s =>
                    <option key={`${selectId}-option-${random()}`} value={s[props.valueProperty]}>{s[props.textProperty]}</option>
                )}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;