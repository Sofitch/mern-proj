import { ChoreoContext } from '../context/choreos';
import { useContext } from 'react'

export const useChoreosContext = () => {
    const context = useContext(ChoreoContext)

    // verify that we are inside the ChoreosContextProvider
    if (!context) {
        throw Error("useChoreosContext hook must be used inside a ChoreoContextProvider")
    }

    return context
}