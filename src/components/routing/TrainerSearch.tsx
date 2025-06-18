import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrainerSearch() {
    const navigate = useNavigate();

    const [id, setId] = useState<string>();

    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    // const [specialty, setSpecialty] = useState("");

    const [trainerData, setTrainerData] = useState({
        name: "",
        age: 0,
        specialty: ""
    });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let url = "/queryTrainer?";
        const params = [];
        if (trainerData.name) params.push("name=" + trainerData.name);
        if (trainerData.age) params.push("age=" + trainerData.age);
        if (trainerData.specialty) params.push("specialty=" + trainerData.specialty);

        navigate(url + params.join("&&"));
    }
    return (<>
        <section>
            <h2>By ID</h2>
            <label htmlFor="trainerId">ID:
                <input type="number" id="trainerId" value={id} onChange={e => setId(e.target.value)} />
            </label>
            <button onClick={() => navigate("/trainerByID/" + id)}>Search</button>
        </section>
        <section>
            <h2>By Everything Else</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="trainerName">Name:
                    <input type="text" id="trainerName" value={trainerData.name} onChange={e => setTrainerData(trainerData => ({ ...trainerData, name: e.target.value }))} required />
                </label>
                <br />
                <label htmlFor="trainerAge">Age:
                    <input type="number" id="trainerAge" min={0} max={100} step={1} value={trainerData.age}
                        onChange={e => setTrainerData(trainerData => ({ ...trainerData, age: parseInt(e.target.value) }))}  />
                </label>
                <br />
                <label htmlFor="trainerSpecialty">Specialty:
                    <input type="text" id="trainerSpecialty" value={trainerData.specialty} onChange={e => setTrainerData(trainerData => ({ ...trainerData, specialty: e.target.value }))} />
                </label>
                <br />
                <button>Search</button>
            </form>
        </section>
    </>);
}

export default TrainerSearch;