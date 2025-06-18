export type TrainerProps = {
    name: string,
    age: number,
    specialty?: string
}

function Trainer({name, age, specialty}: TrainerProps) {

    return ( <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Specialty: {specialty}</p>
    </div> );
}

export default Trainer;