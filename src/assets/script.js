import { useEffect, useState } from "react"

const Script = () => {
    // Show/hide Sidebar Toggle
    const [showHideSidebar, setShowHideSidebar] = useState(true)

    // Check dimensions
    const [widthPage, setWidthPage] = useState(window.innerWidth)
    useEffect(() => {
        const updateDimensions = () => {
            setWidthPage(window.innerWidth)
        }

        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    })

    return {
        showHideSidebar, setShowHideSidebar, 
        widthPage
    }
}

export default Script