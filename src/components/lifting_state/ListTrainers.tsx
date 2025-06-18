import {v4 as uuidv4} from 'uuid';
import Trainer from '../misc/Trainer';

function ListTrainers({trainers}: {trainers: TrainerType[]}) {
    return ( <>
        {trainers.map(({name ,age, specialty}) => <Trainer key={uuidv4()} name={name} age={age} specialty={specialty}/>)}
    </>  );
}



export default ListTrainers;