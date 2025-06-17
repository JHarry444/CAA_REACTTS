import { useSearchParams } from "react-router-dom";
import trainers from "./data.json";
import Trainer from "./Trainer";
import { v4 as uuidv4 } from 'uuid';

function QueryTrainer() {
    const [query] = useSearchParams();
    return (<>
        <h2>Query Trainer</h2>
        {
            trainers.filter(trainer => {
                if (query.get("name") && trainer.name !== query.get("name")) return false;
                if (query.get("age") && trainer.name !== query.get("age")) return false;
                if (query.get("specialty") && trainer.name !== query.get("specialty")) return false;
                return true;
            }).map((trainer) => <Trainer key={uuidv4()} name={trainer.name} age={trainer.age} specialty={trainer.specialty} />)
        }
    </>);
}

export default QueryTrainer;