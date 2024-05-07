import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function HeaderAndFooterWrapper({children}) {

    const [headerAndFooter, setHeaderAndFooter] = useState(true)

    const location = useLocation()

    useEffect(()=>{

        console.warn("current location:", location)
        if(location.pathname==="/admin/signup"){
            setHeaderAndFooter(false)
        }

        else if(location.pathname==="/admin/login"){
            setHeaderAndFooter(false)
        }

        if(location.pathname==="/admin/dashboard"){
            setHeaderAndFooter(false)
        }

        else{
            setHeaderAndFooter(true)
        }
    }, [location])

  return (
    <div>{headerAndFooter && children}</div>
  )
}

export default HeaderAndFooterWrapper
