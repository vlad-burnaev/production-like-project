import './styles/index.scss'
import { classNames } from "shared/lib/classNames";
import { Navbar, Sidebar } from "widgets";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])} >
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;