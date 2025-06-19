import { useContext } from "react";
import ThemeContext from "../../themeContext";
function Footer() {

    const { theme } = useContext(ThemeContext);
    return (<footer>
        <nav>
            <h2>{"<Footer>"}</h2>
            <p>{new Date().toLocaleTimeString()}</p>
            <a className={theme} href="http://www.qa.com" target="_blank">QA</a>
        </nav>
    </footer>);
}

export default Footer;