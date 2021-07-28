import useSWR, {mutate} from "swr";

const useTheme = () => {
    const { data } = useSWR('theme', ()=>{return window.localStorage.getItem("theme");});
    let theme = "";
    if(data) theme = data;
    return theme
}

export const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem('theme', newTheme);
    const returned = mutate('theme');
}

export default useTheme;