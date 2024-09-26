import React from 'react'
import SignIn from './SignIn'

import { useState } from 'react'
import SignUp from './SignUp'
const AuthComponent = () => {
    const [signIn, setsignIn] = useState(false)
    return (
        <div><SignIn />
            <SignUp /></div>
    )
}

export default AuthComponent