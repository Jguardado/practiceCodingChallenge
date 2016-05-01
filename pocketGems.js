/*

Suppose you have a 2-D grid. Each point is either land or water. There is also a
start point and a goal. There are now keys that open up doors. Each key corresponds to one door.
Implement a function that returns the shortest path from the start to the goal using land tiles,
keys and open doors.

USE DIJKSTRA PATH FINDING ALGORITHM
https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

The map will be passed as an array of strings.
A map can have the following tiles.
0 = Water
1 = Land
2 = Start
3 = Goal
uppercase = door
lowercase = key

Ex:
Start is at coordinate (0,1)
MAP_1 = ['02111',
         '00001',
         '00003']

*/
