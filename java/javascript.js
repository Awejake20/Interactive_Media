var changeDog=function()
{d3.select("img")
.attr("src","https://ids.si.edu/ids/deliveryService?max_w=800&id=NPM-0_052985_274_1a")}

var changeCat=function()
{d3.select("img")
.attr("src","https://ids.si.edu/ids/deliveryService?max_w=800&id=HMSG-83.66")}

var changeDino=function()
{d3.select("img")
.attr("src","https://static01.nyt.com/images/2016/10/21/science/21TB-dinosaur2/21TB-dinosaur2-superJumbo.png")}

var hoverCat=function()
{d3.select("#catheader")
.attr("class","hoverCat")}
var leaveCat=function()
{d3.select("#catheader")
.attr("class","pet")}

var hoverDog=function()
{d3.select("#dogheader")
.attr("class","hoverDog")}
var leaveDog=function()
{d3.select("#dogheader")
.attr("class","pet")}

var hoverSecret=function()
{d3.select("#secret")
.attr("class","hoverSecret")}
var leaveSecret=function()
{d3.select("#secret")
.attr("class","secretBox")}

d3.select("#catheader")
.on("click",changeCat)

d3.select("#dogheader")
.on("click",changeDog)

d3.select("#catheader")
.on("mouseenter",hoverCat)
d3.select("#catheader")
.on("mouseleave",leaveCat)

d3.select("#dogheader")
.on("mouseenter",hoverDog)
d3.select("#dogheader")
.on("mouseleave",leaveDog)

d3.select("#secret")
.on("mouseenter",hoverSecret)
d3.select("#secret")
.on("mouseleave",leaveSecret)

d3.select("#secret")
.on("click",changeDino)