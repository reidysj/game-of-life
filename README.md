# Conway's Game of Life

## Objectives Checklists

### Research Tasks

[x] Be able to describe the rules to the Game of Life.
[x] Be able to explain cellular automata and describe their use cases.
[x] Be able to analyze the Turing Completeness of the Game of Life
[x] Understand double buffering

### 'Major' Implementation Tasks

[] Create a unique, professional web application suitable for a portfolio.
[x] Implement a visualization of the Game of Life
[x] Utilize double buffering to implement the game

### MVP Checklist (Some overlap here)
[x] Research Conway's Game of Life, how it works, why it's useful, and Turing Completeness
[x] Homepage should include:
    [x] Grid
    [x] Grid cells with:
        [x] Properties
            [x] Current state (alive or dead)
            [x] Clickable to allow user to set up initial configuration
                [x] Do not allow clicking while simulation is running
        [x] Behaviors
            [x] Ability to switch between alive and dead as according to above
    [x] Display of current generation being displayed
        [x] Use a timeout function to build the next generation of cells and update accordingly
    [x] Buttons to start and stop the animation
    [x] Button to clear the grid
[] Behind the scenes should include:
    [x] An appropriate data structure for holding a grid of cells atleast 25x25
    [x] Implement the following basic steps:
        [x] For each cell in the current generation:
            [x] Examine the state of all eight neighbors
            [x] Apply the rules
            [x] ONLY ONCE THE ABOVE LOOP IS COMPLETED:
                [x] Swap the current and next grids
                [x] Repeat until an action indicates that the simulation should stop
    [x] Break these tasks down into appropriate subtasks
    [x] Use double buffering to update the grid
    [x] Either wrap around to the far side or assume all edge cells are permanently dead.
        [] Make sure this has been documented.
[x] Implement at least three custom features (more options in original readme)
    [x] Allow users to change the dimension of the grid
    [x] Allow users to specify the speed of the simulation
    [x] Add an option that creates a random initial configuration that users can run.
[] About page
    [] Include a section/seperate page/modal/whatever that describes the two main rules
[] Stretch goals
    [] See original readme
[] Code and repo quality
    [] Not a requirement but a strong sugesstion

    


## My Notes
### Simplified rules for easier implemation:
If the cell is alive and has 2 or 3 neighbors, it remains alive. Else, the alive cell dies.
If the cell is dead and has exactly 3 neighbors, it comes alive. Else, the dead cell remains dead.
### Double buffer implementation:
Use two arrays of data. One is the current view. The other is the next frame. Swap them back and forth.