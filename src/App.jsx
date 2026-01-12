import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName:'kikobeats',
        name:'Kiko Beats',
        isFollowing: false
    },
    {
        userName:'maria',
        name:'Maria Fernandez',
        isFollowing: false, 
    },
    {
        userName:'ernesto',
        name:'Ernesto El Mexicano',
        isFollowing: false
    },
    {
        userName:'91jack',
        name: "Jack Jeferson",
        isFollowing: false
    }
];


export function App () {
    return (
        <div className='App'>
            {users.map(({ userName, name, isFollowing}) => (
                <TwitterFollowCard
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    key={userName}
                >
                    {name}
                </TwitterFollowCard>
            ))}
        </div>
    )
}