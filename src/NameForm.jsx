import {useRef} from "react";
import {useGitHubContext} from "./GitHubContext.jsx";

export const NameForm = () => {
    const formRef = useRef(null);
    const { isLoading, fetchUser } = useGitHubContext();
    const handleSubmit = async () => {
        const username = formRef.current.value;
        if (username.trim()){
            await fetchUser(username.trim())
            formRef.current.value ='';
        }
    }
    return(
      <>
          <input id="nameForm" type="text" placeholder="GitHub username" ref={formRef}/>
          <button onClick={handleSubmit} disabled={isLoading}>Get</button>
      </>
    );
}