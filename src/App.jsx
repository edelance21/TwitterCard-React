import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {

    return (
        <div className='App'>
            <TwitterFollowCard isFollowing userName="kikobeats">
                <strong>Kiko Beats</strong>
            </TwitterFollowCard>

            <TwitterFollowCard
                isFollowing={false} userName="maria"> 
                <strong>Maria Fernandez</strong>
            </TwitterFollowCard>
            
            <TwitterFollowCard
                isFollowing userName="ernesto">
                    <strong>Ernesto El Mexicano</strong>
            </TwitterFollowCard>
        </div>
    )
}