const ChoreoDetails = ({ choreo }) => {
    return (
        <div className="choreo-details">
            <h4>{choreo.title}</h4>
            <p><strong>Author: </strong>{choreo.author}</p>
            <p><strong>Difficulty: </strong>{choreo.difficulty}</p>
            <p>{choreo.createdAt}</p>
        </div>
    )
}

export default ChoreoDetails