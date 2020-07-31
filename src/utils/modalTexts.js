export const options = [
  { name: 'howTo', text: 'How to Play'},
  { name: "rules", text: "Read the Rules" },
  { name: "cells", text: "Read About Cellular Automata" },
  { name: "turing", text: "Read About Turing Completeness" },
  { name: "buffer", text: "Read About Double Buffering" },
];

export const text = {
  howTo: {
    title: "How to Play",
    text: "There's no 'right' way to play, so just go wild. Start filling in cells by clicking on them, and when you're satisfied, click run simulation. The number of generations that the simulation has gone through will update at the top. There are several ways to fill in cells: simply click to add single cells, click the random grid button on the right for a randomly generated grid, or try one of the stamps on the left. Make sure to check out the other options as well!"
  },
  rules: {
    title: "Conway's Game of Life",
    text:
      "Conway's Game of Life is a single player game played on a grid of any size and any dimension. This simulation uses just two dimensions and simulates the relatively simple rules of the game: If a cell on the board is alive and has 2 or 3 neighbors, it is allowed to remain alive. If a cell on the board is dead and has exactly 3 neighbors, it comes back to life. All other cells either die or remain dead. This simulation assumes that edge cells do not 'wrap around,' instead counting the border as 'dead' neighbors.",
  },
  cells: {
    title: "Cellular Automata",
    text:
      "Cellular automata are programs, typically in a 2D grid space, though other dimensions are possible, in which rules are applied to describe the changes to the state of a cell, generally based on the state of that cell's neighbor(s). Neighbors may either be crosswise or include diagonals. This is where double buffering comes into play: each round produces an entirely new grid instead of modifying the current grid. Each new grid is referred to as a generation. Cellular automata can be used in many different fields of scientific research, from biology and chemistry to computer processing.",
  },
  turing: {
    title: "Turing Completeness",
    text:
      "Turing Complete simply means that, given enough time and space, a set of rules is capable of answering any question answerable by any Turing Machine. It is possible to generate a logical gate (NAND) using one of the constructs that can form as a result of the game's rules (Glider Gun). Using a series of these gates, one would be able to perform any number of computations that are possible on a machine.",
  },
  buffer: {
    title: "Double Buffering",
    text:
      "Double buffering involves displaying one 'view' to the user and doing work on a second 'view' in the background. The user only sees the view that was previously completed in the background and never sees the transition from old buffer to new buffer. Once the work is done on the hidden buffer, that data is displayed and the previously displayed buffer becomes the 'working' buffer. The advantage is that you won't overwrite the pixels and lose track of generations",
  },
};
