import React from 'react'

export default ({ authenticated }) => (
    <div>
        Hello World {authenticated ? 'private': 'public'}
    </div>
)