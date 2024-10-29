
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
                    <h3 className='fs-2 fw-larger bg-muted p-3'>Synchronizing....</h3>
                )
            }
        </div>
    )
}

export default Card
