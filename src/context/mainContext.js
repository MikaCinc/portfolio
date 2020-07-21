import React, {
    useEffect,
    useContext,
    useState
} from 'react';

import themes from '../themes';

let MainContext;
const { Provider } = MainContext = React.createContext({});

const MainProvider = (props) => {
    const [theme, setTheme] = useState(0);
    const [homeBottomAnimation, setHomeBottomAnimation] = useState(true);

    useEffect(() => {
        if (theme === themes.length) {
            setTheme(0);
            return;
        }

        document.documentElement.style.setProperty('--particles-background', `var(${themes[theme][0]})`);
        document.documentElement.style.setProperty('--revealColor', themes[theme][1]);
        document.documentElement.style.setProperty('--acrylicColor', themes[theme][2]);
        document.documentElement.style.setProperty('--textColor', themes[theme][3]);
        // setTileColor('acrylic');
    }, [theme])

    return (
        <Provider
            value={{
                theme,
                setTheme,
                homeBottomAnimation,
                setHomeBottomAnimation
            }}
        >
            {props.children}
        </Provider>
    )
}

export {
    MainProvider,
};

export default MainContext;