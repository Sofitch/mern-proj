import { useState } from 'react'
import { useChoreosContext } from '../hooks/useChoreosContextHook'

const ChoreoForm = () => {
    const {dispatch} = useChoreosContext()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => { // reaching out to api
        e.preventDefault() // default would be refreshing the page

        const choreo = {title, author, difficulty}
        const response = await fetch('/api/choreos', {
            method: 'POST',
            body: JSON.stringify(choreo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const json = await response.json() // createChoreo returns a json
        if (response.ok) { 
            setTitle('')
            setAuthor('')
            setDifficulty('')
            setError(null)
            console.log('new choreo created')
            // a successful createChoreo returns the new choreo
            dispatch({type: 'CREATE_CHOREO', payload: json})
        }
        else { setError(json.error) }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Choreo</h3>
            
            <label>Song title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} /* if it changes from outside the form */
            />

            <label>Choreographer:</label>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
            />

            <label>Difficulty:</label>
            <input
                type="number"
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
            />

            <button>Add Choreo</button>
            {error && <div className="error">{error}</div> }
        </form>
    )
}

export default ChoreoForm