import {v4 as uuidv4} from 'uuid';
import Trainer from '../misc/Trainer';

function ListTrainers({trainers}: {trainers: TrainerType[]}) {
    return ( <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)"}}>
        {trainers.map(({name ,age, specialty}) => <Trainer key={uuidv4()} name={name} age={age} specialty={specialty}/>)}
    </div>  );
}



export default ListTrainers;