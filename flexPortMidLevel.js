/*
Your Irish pizza and kebab restaurant is doing very well. Not only is the restaurant
full almost every night, but there are also an ever increasing number of deliveries to
be made, all over town. To meet this demand, you realize that it will be necessary to
separate the delivery service from the restaurant. A new large kitchen, only for baking
pizzas and being a base for deliveries, has to be established somewhere in town.

The main cost in the delivery service is not the making of the pizza itself, but the time
it takes to deliver it. To minimize this, you need to carefully plan the location of the new
kitchen. To your help you have a database of all last year’s deliveries. For each location
in the city, you know how many deliveries were made there last year. The kitchen location will
be chosen based on the assumption that the pattern of demand will be the same in the future.

Your city has a typical suburban layout – an orthogonal grid of equal-size square blocks.
All places of interest (delivery points and the kitchen) are considered to be located at
street crossings. The distance between two street crossings is the Manhattan distance, i.e., the
number of blocks you have to drive vertically, plus the number of blocks you have to drive
horizontally. The total cost for a delivery point is its Manhattan distance from the kitchen,
times the number of deliveries to the point. Note that we are only counting the distance from
the kitchen to the delivery point. Even though we always drive directly back to the kitchen after
a delivery is made, this (equal) distance is not included in the cost measure.

Input
On the first line, there is a number, 1≤n≤201≤n≤20, indicating the number of test cases.
Each test case begins with a line with two integers, 1≤x≤1001≤x≤100, 1≤y≤1001≤y≤100, indicating
the size of the two-dimensional street grid. Then follow yy lines, each with xx integers,
0≤d≤10000≤d≤1000, indicating the number of deliveries made to each street crossing last year.

Output
For each test case, output the least possible total delivery cost (the sum of all delivery
costs last year), assuming that the kitchen was located optimally. There should be one line for
each test case, with an integer indicating the cost, followed by a single space and the word
“blocks”.

Sample Input 1
2
4 4
0 8 2 0
1 4 5 0
0 1 0 1
3 9 2 0
6 7
0 0 0 0 0 0
0 1 0 3 0 1
2 9 1 2 1 2
8 7 1 3 4 3
1 0 2 2 7 7
0 1 0 0 1 0
0 0 0 0 0 0

Sample Output 1
55 blocks
162 blocks

*/
