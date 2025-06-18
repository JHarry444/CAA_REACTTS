import { useEffect, useState } from "react";
import AddTrainer from "./AddTrainer";
import ListTrainers from "./ListTrainers";
export type TrainerTypeServer = {
    id: string,
    name: string,
    age: number,
    specialty: string
}
function TrainerContainerServer() {
    const [trainers, setTrainers] = useState<TrainerTypeServer[]>([]);
    const [filter, setFilter] = useState("");
    // careful - infinite loop
    const getTrainers = () => {
        fetch("http://localhost:8080/trainers")
            .then(res => res.json())
            .then(json => setTrainers(json))
            .catch(err => console.error(err));
    }

    // componentDidMount -> only runs on the initial load, not on re-renders
    // useEffect(() => {
    //     getTrainers();
    // }, []);
    // componentDidUpdate (at least for filter)
    useEffect(() => {
        getTrainers();
    }, [filter]);

    // componentWillUnmount
    useEffect(() => {
        const myInterval = setInterval(getTrainers, 5_000);

        return () => {
            console.log("Component unmounted");
            return clearInterval(myInterval);
        }
    }, []);

    return (
        <>
            <h2> Trainers with persistence</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr", columnGap: "1em" }}>
                <AddTrainer setTrainers={setTrainers} />
                <div>
                    <label htmlFor="filter">Filter: </label>
                    <input type="text" name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)} />
                    <ListTrainers trainers={trainers.filter(trainer => trainer.name.toLowerCase().startsWith(filter.toLowerCase()))} />
                </div>

            </div>
        </>
    );
}

export default TrainerContainerServer;