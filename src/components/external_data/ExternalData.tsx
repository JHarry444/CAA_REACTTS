import trainers from "../data/data.json";
import { v4 as uuidv4 } from 'uuid';
import Trainer from "../misc/Trainer";

function ExternalData() {
    return (<>
        <h2>External Data</h2>
        {
            trainers.map((trainer) => <Trainer key={uuidv4()} name={trainer.name} age={trainer.age} specialty={trainer.specialty} />)
        }
        {
            trainers.map(({ name }) => {
                let id = uuidv4();
                return <p key={id} id={id}>{name}</p>;
            })
        }
    </>);
}

export default ExternalData;