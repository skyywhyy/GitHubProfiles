import './App.css'
import {UserCard} from "./UserCard.jsx";
import {NameForm} from "./NameForm.jsx";
import {useGitHubContext} from "./GitHubContext.jsx";
import {Header} from "./Header.jsx";


export const App = () => {

    const {users, isLoading, error} = useGitHubContext()
    return (
        <>
            <Header/>
            <NameForm/>
            {error && <div className="error-message">{error}</div>}
            {users.length === 0 && !isLoading
                ?
                (<div className="info"> no data</div>)
                :
                (<ol>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user}/>
                    ))}
                </ol>)
            }

        </>
    );
}