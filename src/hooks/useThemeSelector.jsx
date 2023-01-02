import {useEffect, useState} from "react";

function useThemeSelector() {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.children[0].setAttribute("data-theme", localStorage.getItem("theme"));
    }, [theme]);

    return { theme, setTheme };
}

export default useThemeSelector;