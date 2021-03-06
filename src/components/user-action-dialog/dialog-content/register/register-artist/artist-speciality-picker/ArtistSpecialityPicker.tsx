import React, {useState} from 'react';
import SpecialityEntry from './speciality-entry/SpecialityEntry';
import Button from '@material-ui/core/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {SpecialityRequest} from '../../../../../../api/artist.api';

const ArtistSpecialityPicker = (props) => {
    const [specialityList, setSpecialityList] = useState<SpecialityRequest[]>([]);
    const addSpeciality = (speciality: SpecialityRequest) => setSpecialityList([...specialityList, speciality]);
    const removeSpeciality = (speciality: SpecialityRequest) => {
        const updatedSpecialityList = specialityList.filter(s => s.name !== speciality.name);
        setSpecialityList(updatedSpecialityList);
    };
    return (
        <div>
            {specialityList.map(s => (
                <Row key={s.name}>
                    <Col xs={8}>
                        <p key={s.name}>{s.name}: {s.price}</p>
                    </Col>
                    <Col sm={{span: 1, offset: 2}}>
                        <Button color="primary" onClick={() => removeSpeciality(s)}>-</Button>
                    </Col>
                </Row>
            ))}
            <SpecialityEntry add={addSpeciality} remove={removeSpeciality}/>
            <Button color="primary" onClick={() => props.submit(specialityList)}>Next</Button>
        </div>
    );
};

export default ArtistSpecialityPicker;