import { useEffect } from 'react'
import { useChoreosContext } from '../hooks/useChoreosContextHook'

// components
import ChoreoDetails from '../components/ChoreoDetails'
import ChoreoForm from '../components/ChoreoForm'

const Home = () => {
    const {choreos, dispatch} = useChoreosContext()

    useEffect(() => {
        const fetchChoreos = async () => { /* avoid main function from being async */
            const response = await fetch('/api/choreos/')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CHOREOS', payload: json}) /* updates 'choreos' */
            }
        }
        fetchChoreos()
    }, [dispatch]) /* dependency array: fires when the component renders + when dispatch changes */

    return (
        <div className="home">
            <div className='choreos'>
                { choreos && choreos.map((choreo) => (
                    <ChoreoDetails key={choreo._id} choreo={choreo}/>
                ))}
            </div>
            <div className='choreoForm'>
                <ChoreoForm/>
            </div>
        </div>
    )
}

export default Home