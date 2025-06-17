function TrainerSearch() {
    // saved for later
    return ( <>
    <section>
        <h2>By ID</h2>
        <label htmlFor="trainerId">
            <input type="text" id="trainerId" />
        </label>
        <button>Search</button>
    </section>
    <section>
        <h2>By Everything Else</h2>
        <label htmlFor="trainerName">
            <input type="text" id="trainerName" />
        </label>
        <label htmlFor="trainerAge">
            <input type="number" id="trainerAge" min={0} max={100} step={1} />
        </label>
        <label htmlFor="trainerSpecialty">
            <input type="text" id="trainerSpecialty" />
        </label>
        <button>Search</button>
    </section>
    </> );
}

export default TrainerSearch;