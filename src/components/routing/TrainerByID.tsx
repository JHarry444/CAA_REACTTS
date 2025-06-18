import { useParams } from "react-router-dom";
import trainers from "../data/data.json";
import Trainer from "../misc/Trainer";

function TrainerByID() {

    let { id } = useParams(); // works anywhere inside a router
    let parsedId = id ? parseInt(id, 10) : 0;

    if (!parsedId) {
        return (<h3>Error: Missing id!</h3>)
    } else {
        return (<>
            <h2>Trainer with an id of: {id}</h2>
            {
                trainers.
                    filter(trainer => trainer.id == parsedId)
                    .map((trainer) => <Trainer key={trainer.id} name={trainer.name} age={trainer.age} specialty={trainer.specialty} />)
            }
        </>);
    }
}

export default TrainerByID;