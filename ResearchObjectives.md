### Be able to describe the rules of the game.
The game is played in a grid of any size (although generally described as a grid of infinite size) and any dimension (although usually 2D). The rules are relatively simple:
    1. Living cells with two or three living neighbors survive into the next generation. (Homeostasis)
    2. Living cells with more than three living neighbors die in the next generation. (Overpopulation)
    3. Dead cells with exactly three living neighbors come to life in the next generation. (Regeneration)
    4. Any other cells will either die (Underpopulation) or remain dead (No change)
(See My Notes section for a version of these rules that is simplified for algorithm implementation)

### Be able to explain cellular automata and their use cases.
Cellular automata are programs, typically in a 2D grid space, though other dimensions are possible, in which rules are applied to describe the changes to the state of a cell, generally based on the state of that cell's neighbor(s). Neighbors may either be crosswise or include diagonals. This is where double buffering comes into play: each round produces an entirely new grid instead of modifying the current grid. Each new grid is referred to as a generation.
Cellular automata can be used in many different fields of scientific research, from biology and chemistry to computer processing.

### Be able to analyze the Turing Completeness of the game.
Turing Complete simply means that, given enough time and space, a set of rules is capable of answering any question answerable by any Turing Machine. It is possible to generate a logical gate (NAND) using one of the constructs that can form as a result of the game's rules (Glider Gun). Using a series of these gates, one would be able to perform any number of computations that are possible on a machine.

### Understand double buffering
Double buffering involves displaying one 'view' to the user and doing work on a second 'view' in the background. The user only sees the view that was previously completed in the background and never sees the transition from old buffer to new buffer. Once the work is done on the hidden buffer, that data is displayed and the previously displayed buffer becomes the 'working' buffer. 
* Advantage: Won't overwrite the pixels and lose track of generations
