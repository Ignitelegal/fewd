
var content1 = {
	id : "book_1", 
	title : "Code Red",
	category : "Action",
	price : 15.95,
	highlights : ["Action-hacked", " cybercrime-fighting", " ginger ninga"],
	picture_url : "http://www.loopdesigngroup.com/wordpress/wp-content/uploads/Print_CodeRed.jpg" //style="height:80px"//
}

var content2 = {
	id : "book_2",
	title : "Cracking the Code",
	category : "Mystery",
	price : 25.95,
	highlights : ["Thought code was whack?", " Methodone for coders"],
	picture_url : "http://thetinylife.com/wp-content/uploads/2013/01/book-cover.jpg" //style="height:80px"
}

var content3 = {
	id : "book_3",
	title : "How to Code",
	category : "DIY",
	price : 35.95,
	highlights : ["Easy", " step-by-step guide", " with lots of useless drawings"],
	picture_url : "http://www.sean.co.uk/shared/gfx/bookcovers/superskills250x333.jpg" //style="height:80px"

}

var content4 = {
	id : "album_1",
	title : "Going back to Miami",
	category : "Country",
	price : 4.95,
	highlights : ["If you think Trump is a dick...", " meet his Hair-god!", " - Douchebag Heaven"],
	picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e8/8a/bb/e88abbb79808fc2b50a25ae48cc41542.jpg" //style="height:80px">
}

var content5 = {
	id : "album_2",
	title : "The Currie Brothers",
	category : "Tragic",
	price : 5.95,
	highlights : ["Accordian-plaing", "Rangas", "- Hot Stuff!"],
	picture_url : "https://s-media-cache-ak0.pinimg.com/564x/63/e6/65/63e665a454bd6c4fa2ab86a114966ac8.jpg" //style="height:80px">
}

var books = [
	Object(content1), Object(content2), Object(content3)
]

var albums = [
	Object(content4), Object(content5)
]

//^ DO I ACTUALLY NEED THIS? ^ //

var setSize = function (pic){
	pic.html('<style="height:80px">');
}

var t = $('<li>');
t.html('Title :'+ " " + content1['title']);

var c = $('<li>');
c.html('Category :'+ " " + content1['category']);

var p = $('<li>');
p.html('Price :'+ " " + "$" + content1['price']);

var h = $('<li>');
h.html('Highlights :'+ " " + content1['highlights']); 

var l = $('<div>')
l.html("<img class='pic' src =" + content1['picture_url'] + ">"); //id=pic

var addContent = function() {
	$("#book1").append(t);
	$("#book1").append(c);
	$("#book1").append(p);
	$("#book1").append(h);
	$("#book1").append(l);
}

	
			//HOW DO I INSERT THE ACUTAL KEY VALUES FOR EACH OBJECT???//


window.onload = addContent;


/* 
$(function(){
	$("#book1").html('<img src="http://www.loopdesigngroup.com/wordpress/wp-content/uploads/Print_CodeRed.jpg" style="height:80px" />')
}
$('#nameBook1').html(.append('testContent');
*/


/* var content = $(books);

var addToPage = function(content) {
	append("<div id=" + object["id"] + " class=" + object["category"] + " </div>");
			$("#" + object["id"]).append("<div class='title'>"+ object["title"] +"</div>");
			$("#" + object["id"]).append("<div class='category'>"+ object["category"] +"</div>");
			$("#" + object["id"]).append("<div class='price'>"+ object["price"] +"</div>");
			$("#" + object["id"]).append("<div class='highlights'>"+ object["highlights"] +"</div>");
			$("#" + object["id"]).append("<div class='picture_url'>"+ object["picture_url"] + "</div>");
};

$("#book1").addToPage; */


