import { useChoreosContext } from '../hooks/useChoreosContextHook'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ChoreoDetails = ({ choreo }) => {
    const {dispatch} = useChoreosContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/choreos/' + choreo._id, {
            method: "DELETE"
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'DELETE_CHOREO', payload: json})
            console.log('choreo deleted')
        }
    }
    
    return (
        <div className="choreo-details">
            <h4>{choreo.title}</h4>
            <p><strong>Author: </strong>{choreo.author}</p>
            <p><strong>Difficulty: </strong>{choreo.difficulty}</p>
            <p>{formatDistanceToNow(new Date(choreo.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ChoreoDetails