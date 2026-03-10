export const UserCard = ({user}) => {
    const createdDate = new Date(user.created_at).toDateString();
    return (
        <li className="user-card">
            <img src={user.avatar_url} alt='avatar'/>
            <div className="info-container">
                <div className="info">
                    <span>Name: {user.name}</span>
                    <span>NickName: {user.login}</span>
                    <span>Followers: {user.followers}</span>
                    <span>Public repositories count: {user.public_repos}</span>
                    <span>Created at: {createdDate}</span>
                </div>
                <div className="info">
                    {user.repositories?.length > 0 ? (
                            user.repositories.map((repo) => (
                                <span key={repo.id}><a href={repo.url}>{repo.name}</a></span>
                            ))

                        ) :
                        (
                            <span>No public repositories</span>
                        )
                    }
                </div>
            </div>
        </li>
    )

}