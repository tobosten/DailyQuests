import { createContext } from 'react'

export const QuestObject = createContext({})

const ProjectContext = ({ children }) => {

    return (
        <QuestObject.Provider value={{}}>
            {children}
        </QuestObject.Provider>
    )
}

export default ProjectContext;