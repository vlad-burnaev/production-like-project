import './styles/index.scss'
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/Router/ui/AppRouter";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])} >
            <Navbar />
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default App;