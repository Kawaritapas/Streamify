# Streamify


1] Client directory
the client directory consist of the react application , where we have components First run this directory by
setting the path to this directory in terminal and hit NPM START to start development server on port 3000

2]API directory(JSON SERVER)
this is a json server my app uses this to create a new stream, edit the stream and delete the stream (RESTFULL CONVENTION)
its important before running the development server to run this json server in your terminal by setting the appropriate path 
then hit NPM START

3]RTMP PROTOCOL SERVER
this is a communication protocol mainly used for live streaming and audio streaming if you want to start a live stream it is important 
to start this node-rtmp-server by setting appropriate path and hit NPM START

IMPORTANT NOTE - APP TESTED WITH OBS STUDIO APPLICATION (a tool used for streaming live )
1] set to custom server in obs settings 
2] set the url to http://localhost:3000
3] enter the stream key in this case our stream key is the id of the stream EXAMPLE- http://localhost:3000/stream/2 - the 2 is the stream key
