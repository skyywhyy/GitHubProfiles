import {createContext, useContext} from "react";
import {useProfiles} from "./usePorfiles.js";


const GitHubContext = createContext(null);
export const GitHubProvider = ({children}) => {
    const gitHubState = useProfiles();
    return (
        <GitHubContext.Provider value={gitHubState}>
            {children}
        </GitHubContext.Provider>
    )
}

export const useGitHubContext = () => {

    const context = useContext(GitHubContext);
    if (!context) {
        throw new Error("useGitHubContext used only in <GitHubProvider>!");
    }
    return context;
}