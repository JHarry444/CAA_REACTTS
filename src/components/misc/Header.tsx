import { Link } from "react-router-dom";

function Header({ updateTheme }: { updateTheme: () => void }) {
    return (<header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/externalData">External Data</Link>
            <Link to="/trainerSearch">Trainer Seach</Link>
            <Link to="/Counter">Counter</Link>
            <Link className="" to="/liftingState">Lifting State</Link>
            <Link to="/server">External Data - Server</Link>
            <button id="themeToggle" onClick={updateTheme} >Toggle theme</button>

        </nav>

    </header>);
}

export default Header;