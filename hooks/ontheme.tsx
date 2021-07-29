import useSWR, {mutate} from "swr";

const useTheme = () => {
    const { data } = useSWR('theme', createDefaultTheme);
    return data;
}

const createDefaultTheme = () => {
    let data = window.localStorage.getItem("theme");
    if(data) return data;
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    let theme = "light";
    if(darkThemeMq.matches) theme = "dark";
    localStorage.setItem('theme', theme);
    return theme;
}

export const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem('theme', newTheme);
    mutate('theme').then();
}

export default useTheme;