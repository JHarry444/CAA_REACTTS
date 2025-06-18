import { useRef, useState } from "react";

function AddTrainer({ setTrainers }: {setTrainers: React.Dispatch<React.SetStateAction<TrainerType[]>>}) {
    const [trainer, setTrainer] = useState({
        name: "",
        age: "",
        specialty: ""
    });


    const nameRef = useRef<HTMLInputElement>(null);

    return (<form onSubmit={e => {
        e.preventDefault();
        const newTrainer = {name: trainer.name, age: parseInt(trainer.age), specialty: trainer.specialty}
        setTrainers(trainers => [...trainers, newTrainer]);
        setTrainer({name: "", age: "", specialty: ""});
        nameRef.current!.focus();
    }}>
        <label htmlFor="trainerName">Name</label>
        <input ref={nameRef} type="text" name="name" id="trainerName" value={trainer.name} onChange={e => setTrainer(currentTrainer => ({ ...currentTrainer, name: e.target.value }))} />
        <label htmlFor="trainerAge">Age</label>
        <input type="number" name="age" id="trainerAge" value={trainer.age} onChange={e => setTrainer(currentTrainer => ({ ...currentTrainer, age: e.target.value }))} />
        <label htmlFor="trainerSpecialty">Specialty</label>
        <input type="text" name="specialty" id="trainerSpecialty" value={trainer.specialty} onChange={e => setTrainer(currentTrainer => ({ ...currentTrainer, specialty: e.target.value }))} />
        <button>Add Trainer</button>
    </form>);
}

export default AddTrainer;