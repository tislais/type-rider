import React, { useEffect } from 'react'

export default function Sandbox() {
    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            console.log(e);
        })
    })
    return (
        <div>
            Hello
        </div>
    )
}
