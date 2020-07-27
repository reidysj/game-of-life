# Conway's Game of Life

## Objectives Checklists

### Research Tasks

[x] Be able to describe the rules to the Game of Life.
[x] Be able to explain cellular automata and describe their use cases.
[x] Be able to analyze the Turing Completeness of the Game of Life
[x] Understand double buffering

### 'Major' Implementation Tasks

[] Create a unique, professional web application suitable for a portfolio.
[] Implement a visualization of the Game of Life
[] Utilize double buffering to implement the game


## My Notes
### Simplified rules for easier implemation:
If the cell is alive and has 2 or 3 neighbors, it remains alive. Else, the alive cell dies.
If the cell is dead and has exactly 3 neighbors, it comes alive. Else, the dead cell remains dead.
### Double buffer implementation:
Use two arrays of data. One is the current view. The other is the next frame. Swap them back and forth.