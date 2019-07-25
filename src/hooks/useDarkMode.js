import React, { useEffect } from "react";
import useLocalStorage from './useLocalStorage'


const useDarkMode = () => {

    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkMode')

    const darkMode = (value) => {
        setDarkModeEnabled(value)

    }

    useEffect(() => {
        
        if (darkModeEnabled === ('darkMode', true)) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkModeEnabled])

    return [darkModeEnabled, darkMode]
}

export default useDarkMode;