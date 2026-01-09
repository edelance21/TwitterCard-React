export function TwitterFollowCard({ userName, children, isFollowing}) {
    const imgSrc = `https://unavatar.io/x/${userName}`


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
                <button className='ed-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}