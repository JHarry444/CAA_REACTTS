import { Link } from "react-router-dom";
import ThemeContext from "../../themeContext";
import { useContext } from "react";

function Header() {

    const { theme, updateTheme } = useContext(ThemeContext);

    return (<header>
        <nav>
            <Link className={theme} to="/">Home</Link>
            <Link className={theme} to="/externalData">External Data</Link>
            <Link className={theme} to="/trainerSearch">Trainer Seach</Link>
            <Link className={theme} to="/Counter">Counter</Link>
            <Link className={theme} to="/liftingState">Lifting State</Link>
            <Link className={theme} to="/server">External Data - Server</Link>
            <Link className={theme} to="/context">Context</Link>
            <Link className={theme} to="/kids">Kids</Link>
            <button id="themeToggle" onClick={updateTheme} >Toggle theme</button>

        </nav>

    </header>);
}

export default Header;