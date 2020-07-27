## Sub-indices for finding neighbors:
Corners: 0, n-1, (n^2)-n, (n^2)-1
Top Row: 1, 2, ..., n-2
Left Row: j where j%n===0
Right Row: j where (j+1)%n===0
Bottom Row: (n^2)-n+1 through (n^2)-2
Center Pieces: All others

## Corner neighbors:
0's: 1, n, n+1
n-1's: j-1, j+j, j+n
(n^2)-n's: j-n, j-n+1, j+1
(n^2)-1's: (n^2)-2, (n^2)-n-2, (n^2)-n-1

## Edge neighbors:
Top: j-1, j+1, j+n-1, j+n, j+n+1
Left: j-n, j+n, j+1, j-n+1, j+n+1
Right: j-1, j-n, j-n-1, j+n-1, j+n
Bottom: j-1, j+1, j-n, j-n+1, j-n-1

## Center neighbors (all):
j-n, j-n-1, j-n+1, j-1, j+1, j+n-1, j+n, j+n+1

# Data brainstorm
- Definitely two arrays: current and working
* Stop forgetting that this pattern will allow you to compare and alter without goofing things * 
- Array of objects?
{
    isAlive: [true or false]
}

in a time interval:

for each item in the working array:
    keep a count of living neighbors
    if alive
        if !2 or !3 neighbors in the displayed array
            die
    if dead
        if 3 neighbors
            live

        

