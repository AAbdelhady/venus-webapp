import React, {useState} from 'react';
import SpecialityEntry from './speciality-entry/SpecialityEntry';
import {Speciality} from '../../../../models/speciality.model';
import Button from '@material-ui/core/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ArtistSpecialityPicker = (props) => {
    const [specialityList, setSpecialityList] = useState<Speciality[]>([]);
    const addSpeciality = (speciality: Speciality) => setSpecialityList([...specialityList, speciality]);
    const removeSpeciality = (speciality: Speciality) => {
        const updatedSpecialityList = specialityList.filter(s => s.name !== speciality.name);
        setSpecialityList(updatedSpecialityList);
    };
    return (
        <div>

            {specialityList.map(s => {
                return (
                    <Row key={s.name}>
                        <Col xs={8}>
                            <p key={s.name}>{s.name}: {s.price}</p>
                        </Col>
                        <Col sm={{span: 1, offset: 2}}>
                            <Button color="primary" onClick={() => removeSpeciality(s)}>-</Button>
                        </Col>
                    </Row>
                )
            })}
            <SpecialityEntry add={addSpeciality} remove={removeSpeciality}/>
            <Button color="primary" onClick={() => props.submit(specialityList)}>Next</Button>
        </div>
    );
};

export default ArtistSpecialityPicker;