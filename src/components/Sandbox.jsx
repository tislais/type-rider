import React, { useEffect } from 'react'

export default function Sandbox() {
    useEffect(() => {
        // window.addEventListener('keydown', (e) => {
        //     console.log('DOWN', `---> ${e.key} <---`, e);
        // })
        // window.addEventListener('keyup', (e) => {
        //     console.log('UP', `---> ${e.key} <---`, e);
        // })
        window.addEventListener('keypress', (e) => {
            console.log('PRESS', `---> ${e.key} <---`, e);
        })
    })
    return (
        <div>
            Hello
        </div>
    )
}
