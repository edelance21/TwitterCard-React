import { useState } from "react";

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);


    const imgSrc = `https://unavatar.io/x/${userName}`
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-Button is-following" : "tw-followCard-Button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }


    return(
        <article className='ed-followCard'>
            <header className='ed-followCard-header'>
                <img
                className='ed-followCard-avatar' 
                alt="Imagen avatar"
                src={imgSrc} />
                <div className='ed-followCard-info'>
                    {children}
                    <span className='ed-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followcard-following">{text}</span>
                    <span className="tw-followcard-unFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}