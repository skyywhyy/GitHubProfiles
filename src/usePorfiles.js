import {useState} from "react";

export const useProfiles =() =>{
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchUser = async (username) =>{
        if (!username) return;
        const isDuplicated = users.some(
            (user) => user.login.toLowerCase() === username.toLowerCase()
        );
        if (isDuplicated) {
            setError(`user ${username} already exists`);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            let response = await fetch(`https://api.github.com/users/${username}`)
            if (response.status === 404) {
                setError(`user ${username} not  found`);
                setIsLoading(false);
                return;
            }
            response = await response.json();
            console.log(response);
            const {id, login, name, followers, avatar_url, public_repos, created_at} = response;

            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
            const reposData = await reposResponse.json();

            const latestRepos = reposData.map(repo => ({
                id: repo.id,
                name: repo.name,
                url: repo.html_url
            }));
            setUsers([
                ...users,
                {
                    id,
                    login,
                    name,
                    followers,
                    avatar_url,
                    public_repos,
                    created_at,
                    repositories: latestRepos,
                }
            ]);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }

    };
    return {users, fetchUser, isLoading, error};
};