import { Link } from "react-router-dom";

function Header() {
    return (<header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/externalData">External Data</Link>
            <Link to="/trainerSearch">Trainer Seach</Link>
            <Link to="/Counter">Counter</Link>
            <Link className="" to="/liftingState">Lifting State</Link>

        </nav>
    </header>);
}

export default Header;