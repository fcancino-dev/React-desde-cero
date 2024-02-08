import { useState } from "react"

export function TwitterFollowCard({children, name, username="unknow"}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing 
        ? "tw-followCard-button is-following" 
        : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const avatarUrl = `https://unavatar.io/${username}`

    return (  

        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={ avatarUrl } 
                    alt="un avatar cualquiera" />
                <div className="tw-followCard-info">
                    <strong> {name} </strong>
                    <strong> {children} </strong>
                    <span 
                        className="tw-followCard-infoUsername"
                    >
                        @{/* {formatUserName(username)} */username}
                    </span>
                </div>
            </header>
            <aside>
                <button 
                    className={buttonClassName} onClick={handleClick}
                >
                    {text}
                </button>
            </aside>
        </article>
    )
} 