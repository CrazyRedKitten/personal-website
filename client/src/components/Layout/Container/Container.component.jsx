import React, {useContext} from "react";
import './Container.style.css'
import ThemeContext from "../../../context/theme/ThemeContext";

const Container = ({children, style}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return <div className={`Container-${darkMode ? 'Dark' : 'Light'}`} style={style}>{children}</div>
};

export default Container;