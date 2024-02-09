import { useState } from "react"

export function TwitterFollowCard({children, name, username="unknow", initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isHover, setIsHover] = useState(false);


    const text = isHover && isFollowing ? "Dejar de seguir" :isFollowing ? "Siguiendo" : "Seguir" 
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
                    className={buttonClassName} 
                    onClick={handleClick}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {text}
                </button>
            </aside>
        </article>
    )
} 