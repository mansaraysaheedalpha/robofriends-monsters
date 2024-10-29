
import CardList from '../CardList/cardlist.component';
import './card.styles.css';

const Card = ({ filteredRobots }) => {
    return (
        <div className='card-container'>
            {
                filteredRobots.length > 0 ? (
                    filteredRobots.map(robot =>
                    (
                        <CardList key={robot.id} robot={robot} />
                    )
                    )
                ) : (
                    <h4>Synchronizing...</h4>
                )
            }
        </div>
    )
}

export default Card
