import './cardlist.styles.css';

const CardList = (props) => {
    const { name, email, id } = props.robot
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={`https://robohash.org/${id}?set=set2`} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title fs-3 fw-bold">{name}</h5>
                <p className="card-text fs-5">{email}</p>
            </div>
        </div>

    )
}

export default CardList