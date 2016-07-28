
var content1 = {
	id : "book1", 
	title : "Code Red",
	category : "Action",
	price : 15.95,
	highlights : ["Action-hacked", " cybercrime-fighting", " ginger ninga"],
	picture_url : "http://www.loopdesigngroup.com/wordpress/wp-content/uploads/Print_CodeRed.jpg" //style="height:80px"//
}

var content2 = {
	id : "book2",
	title : "Cracking the Code",
	category : "Mystery",
	price : 25.95,
	highlights : ["Thought code was whack?", " Methodone for coders"],
	picture_url : "http://thetinylife.com/wp-content/uploads/2013/01/book-cover.jpg" //style="height:80px"
}

var content3 = {
	id : "book3",
	title : "How to Code",
	category : "DIY",
	price : 35.95,
	highlights : ["Easy", " step-by-step guide", " with lots of useless drawings"],
	picture_url : "http://www.sean.co.uk/shared/gfx/bookcovers/superskills250x333.jpg" //style="height:80px"

}

var content4 = {
	id : "album1",
	title : "Going back to Miami",
	category : "Country",
	price : 4.95,
	highlights : ["If you think Trump is a dick...", " meet his Hair-god!", " - Douchebag Heaven"],
	picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e8/8a/bb/e88abbb79808fc2b50a25ae48cc41542.jpg" //style="height:80px">
}

var content5 = {
	id : "album2",
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

var products = [
	Object(books), Object(albums)
]


var addContent = function(){
	for (i=0; i<products.length; i++){
		console.log(products[i]);
		
		$("<div id="+ products[i] + "</div>").append();			
			var t = $('<li>');
			t.html('Title :'+ " " + products[i]['title']);
			$('"#" + products[i]["id"]').append(t);

			var c = $('<li>');
			c.html('Category :'+ " " + products[i]['category']);
			$('"#" + products[i]["id"]').append(c);

			var p = $('<li>');
			p.html('Price :  '+ " " + "$" + products[i]['price']);
			$('"#" + products[i]["id"]').append(p);

			var h = $('<li>');
			h.html('Highlights :'+ " " + products[i]['highlights']); 
			$('"#" + products[i]["id"]').append(h);

			var l = $('<div>')
			l.html("<img class='pic' src =" + products[i]['picture_url'] + ">");
			$('"#" + products[i]["id"]').append(l);
	
		};
	};

window.onload = addContent()


 

	
			//HOW DO I INSERT THE ACUTAL KEY VALUES FOR EACH OBJECT???//





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


