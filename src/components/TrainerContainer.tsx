import { useState } from "react";
import AddTrainer from "./AddTrainer";
import ListTrainers from "./ListTrainers";

function TrainerContainer() {
    const [trainers, setTrainers] = useState<TrainerType[]>([]);
    return ( <>
    <AddTrainer setTrainers={setTrainers}/>
    <ListTrainers trainers={trainers}/>
    </> );
}

export default TrainerContainer;