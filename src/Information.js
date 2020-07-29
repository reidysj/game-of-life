import React from 'react'

const Information = () => {

    return(
        <>
        <h1>Conway's Game of Life</h1>
        <h2>A Cellular Automaton Simulation</h2>
        <p>Conway's Game of Life is a single player game played on a grid of any size and any dimension</p>
        <p>This simulation uses just two dimensions and simulates the relatively simple rules of the game:</p>
        <ul>
            <li>If a cell on the board is alive and has 2 or 3 neighbors, it is allowed to remain alive.</li>
            <li>If a cell on the board is dead and has exactly 3 neighbors, it comes back to life.</li>
            <li>All other cells either die or remain dead.</li>
        </ul>
        <p>This simulation assumes that edge cells do not 'wrap around,' instead counting the border as 'dead' neighbors.</p>
        </>
    )
}
export default Information