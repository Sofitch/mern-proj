import { useEffect, useState } from 'react'

// components
import ChoreoDetails from '../components/ChoreoDetails'
import ChoreoForm from '../components/ChoreoForm'

const Home = () => {
    const [choreos, setChoreos] = useState(null)

    useEffect(() => {
        const fetchChoreos = async () => { /* avoid main function from being async */
            const response = await fetch('/api/choreos/')
            const json = await response.json()

            if (response.ok) {
                setChoreos(json) /* updates 'choreos' */
            }
        }
        fetchChoreos()
    }, []) /* empty dependecy array means it only fires once, when the component first renders */

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