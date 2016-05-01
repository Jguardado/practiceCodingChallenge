
/*The Playbook
by HACK REACTOR

Menu Interview QuestionsJob Hunt FAQResourcesContributors
Filters Clear filters

Search questions

Category

Position

School
1 of 1 Question  dummy
Dummy Test Runner

Category: JavascriptHTMLCSS
Position: Front-end Developer/Engineer
School: Hack Reactor
Question

The goal of this task is to give us an idea of how you write maintainable code. Feel free to use
whatever tools, languages, and libraries you like!

Your task is to create a test runner that runs automated tests in the browser and reports on their
results as soon as each test completes.

Start by copying the following code. It gives you a series of tests to run, which randomly succeed
or fail after running for a few seconds. Use these exact tests as the inputs to your test runner.

function generateDummyTest() {
 var delay = 7000 + Math.random() * 7000;
 var testPassed = Math.random() > 0.5;

 return function(callback) {
   setTimeout(function() {
     callback(testPassed);
   }, delay);
 };
}

var tests = [
 { description: "commas are rotated properly", run: generateDummyTest() },
 { description: "exclamation points stand up straight", run: generateDummyTest() },
 { description: "run-on sentences don't run forever", run: generateDummyTest() },
 { description: "question marks curl down, not up", run: generateDummyTest() },
 { description: "semicolons are adequately waterproof", run: generateDummyTest() },
 { description: "capital letters can do yoga", run: generateDummyTest() }
];


All 6 tests should be run simultaneously. The user interface should communicate the following,
using whatever design you like:

The current status of each test (Not Started Yet, Running, Passed, or Failed)
How many total tests have passed so far
How many total tests have failed so far
How many total tests are still running
An indication (e.g. "FINISHED!") when all tests have completed running

Initially each test is in the Not Started Yet state, the user must press a button to start them
running. Once they are running, the interface should update in realtime without further user
interaction.

We are more interested in how you solve the problem than if you solve it completely—so please take
the time to produce well-designed, maintainable code that follows good practices. You can also help
us get an idea of how you think about code by writing up any interesting design or implementation
details, contrasting your design with potential alternatives, etc.

If the program is generated using any special tools or languages, please include a Readme with some
brief instructions on how to build it.

Bonus points: find a grammatical mistake in this assignment.*/
