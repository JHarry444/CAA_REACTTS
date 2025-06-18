import { useSearchParams } from "react-router-dom";
import trainers from "../../data/data.json";
import Trainer from "../misc/Trainer";
import { v4 as uuidv4 } from 'uuid';

function QueryTrainer() {
    const [query] = useSearchParams();
    return (<>
        <h2>Query Trainer</h2>
        {
            trainers.filter(({name, age, specialty}) => {
                if (query.get("name") && name !== query.get("name")) return false;
                if (query.get("age") && age !== parseInt(query.get("age")!)) return false;
                if (query.get("specialty") && specialty !== query.get("specialty")) return false;
                return true;
            }).map((trainer) => <Trainer key={uuidv4()} name={trainer.name} age={trainer.age} specialty={trainer.specialty} />)
        }
    </>);
}

export default QueryTrainer;