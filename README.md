Rube Goldberg for Printing Hello World
====================

The project aims to display the text "Hello World" as an svg of images that is "animated" instead of simple text or anything like that.

It uses google image search APIs to look up each images for each letter of a phrase (in this case, Hello World) and then saves those into a dictionary for look up of each individual letter. 

It then recreates the letters on screen using an ascii art generator and then animates the color by using a timer to constantly shift the colors around. 

![alt tag](http://www.prism.gatech.edu/~dchi3/helloworld/pipeline.png)

Here is the URL for the project: 
http://www.prism.gatech.edu/~dchi3/helloworld/

The following APIs and tools were used: 
* http://patorjk.com/software/taag/#p=display&f=Doh&t=Hello%20World
* Google Image Search API
* D3
* JQuery
