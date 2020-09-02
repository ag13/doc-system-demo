import { QuestionCircle } from 'react-bootstrap-icons'
import { useLocale } from './useLocale'
import React, { useCallback } from 'react'

const BASE_HELP_URL = 'http://localhost:3000/out'

export const useCSHelp = (helpId, isSection = false, openNewWindow = false) => {
    const [locale] = useLocale()

    let csHelpUrl = `${BASE_HELP_URL}/${locale}`

    if(isSection){
        csHelpUrl = `${csHelpUrl}/index-${locale}.html?contextId=${helpId}`
    }else{
        csHelpUrl = `${csHelpUrl}/${helpId}`
    }

    const handleCSHelpClick = useCallback(() => {
        if(helpId){
            
            if(openNewWindow){
                //open help in new browser window
                const windowName = 'Documentation'
                const windowFeatures = 'height=800,width=800'
                window.open(csHelpUrl, windowName, windowFeatures)
            }else{
                //open help in new browser tab
                window.open(csHelpUrl, '__blank')
            }
            
        }
    }, [helpId, csHelpUrl, openNewWindow])

    return [csHelpUrl, handleCSHelpClick]

}

export const CSHelp = ({helpId, isSection = false, openNewWindow = false}) => {
    const [, handleCSHelpClick] = useCSHelp(helpId, isSection, openNewWindow)

    return (
        <QuestionCircle style={{cursor: 'hand'}} onClick={handleCSHelpClick}/>
    )
}