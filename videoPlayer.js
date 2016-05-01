/*

Develop a Video Player
Livestream's video playback experience team builds the clients that are viewed by millions around
the world. This is an opportunity to develop at the forefront of video technology on the modern web,
where technical challenges meet graceful interfaces. The goal of this assignment is to build a simple
video player.


Requirements:
Use JavaScript and/or ActionScript. Don’t use Flex for ActionScript.
Use the Livestream API to fetch necessary data.
Use Git for the project.
Player should provide both types of playback: Live and VoD.
Player should have the following features: play/pause/resume, seek, fullscreen.
Player should be embedded in an HTML page.



Hints and Tips:
If you have problems with CORS, you can use local.livestream.com as a hostname for local development.

We highly recommend the use of a private repository. If you don’t have a GitHub subscription,
Bitbucket (https://bitbucket.org) is also a good option.

Don’t forget the README.md. Instructions and documentation to run and compile your project are a big
plus.

Bonus points will be given for: code structure and project organization, user interface, tests,
specs and documentation, volume feature, quality switching feature, code comments.

If you use ActionScript for the player, you can pass the playback URL via FlashVars. It’s one of
the possible options.

Livestream supports several playback protocols. You can use any of them.

It’s up to you how you mix JavaScript and ActionScript.

It’s up to you which Live Event/VoD to pick for this assignment.



API Details:
Hostname: api.new.livestream.com
Broadcast/Live endpoint: /accounts/:aid/events/:eid/broadcasts/:bid
VoD endpoint: /accounts/:aid/events/:eid/videos/:vid :aid - account id; :eid - event id; :bid - broadcast id; :vid - video id
Example for VoD: api.new.livestream.com/accounts/1818635/events/4577843/videos/106713251
Example for Live: go to livestream.com/watch , find any live event, change URL
to api.new.livestream.com/accounts/:account/events/:event/stream_info , from this response you can find broadcast id. :account - it could be id or alias; :event - it could be id or alias
We appreciate your time and will do our best to check the result of your work.

*/
