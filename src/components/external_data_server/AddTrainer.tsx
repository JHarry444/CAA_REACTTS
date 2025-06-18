import { useRef, useState } from "react";
import type { TrainerTypeServer } from "./TrainerContainerServer";
import './trainerForm.css';

function AddTrainer({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<TrainerTypeServer[]>> }) {
    const [trainer, setTrainer] = useState({
        name: "",
        age: "",
        specialty: ""
    });


    const nameRef = useRef<HTMLInputElement>(null);

    return (<form id="trainerForm" onSubmit={async (e) => {
        e.preventDefault();
        const newTrainer = { name: trainer.name, age: parseInt(trainer.age), specialty: trainer.specialty }
        debugger;

        try {
            const res = await fetch("http://localhost:8080/trainers", {
                method: "post",
                body: JSON.stringify(newTrainer),
                headers: { "Content-Type": "application/json" }
            });
            if (res.status !== 201) throw new Error("Failed to add trainer: " + res.statusText);

            const json = await res.json();

            setTrainers(trainers => [...trainers, json]);
        } catch (error) {
            console.error(error);
        }
        setTrainer({ name: "", age: "", specialty: "" });
        nameRef.current!.focus();
    }}>
        <div className="formInput">
            <label htmlFor="trainerName">Name</label>
            <input ref={nameRef} type="text" name="name" id="trainerName" 
            value={trainer.name} onChange={e => setTrainer(currentTrainer => ({ ...currentTrainer, name: e.target.value }))} required />
        </div>
        <div className="formInput">
            <label htmlFor="trainerAge">Age</label>
            <input type="number" name="age" id="trainerAge" 
            value={trainer.age} onChange={e => setTrainer(currentTrainer => ({ ...currentTrainer, age: e.target.value }))} required />
        </div>
        <div className="formInput">
            <label htmlFor="trainerSpecialty">Specialty</label>
            <input type="text" name="specialty" id="trainerSpecialty" value={trainer.specialty} onChange={e => setTrainer(currentTrainer => ({ ...currentTrainer, specialty: e.target.value }))} />
        </div>
        <div>
            <button>Add Trainer</button>
        </div>

    </form>);
}

export default AddTrainer;