
var content1 = {
	id : 'content1',
	type : 'book', 
	title : "Code Red",
	category : "Action",
	price : 15.95,
	highlights : ["Action-hacked", " cybercrime-fighting", " ginger ninga"],
	picture_url : "http://www.loopdesigngroup.com/wordpress/wp-content/uploads/Print_CodeRed.jpg" //style="height:80px"//
}

var content2 = {
	id : 'content2',
	type : 'book',
	title : "Cracking the Code",
	category : "Mystery",
	price : 25.95,
	highlights : ["Thought code was whack?", " You'll need rehab after this one!"],
	picture_url : "http://thetinylife.com/wp-content/uploads/2013/01/book-cover.jpg" //style="height:80px"
}

var content3 = {
	id : 'content3',
	type : 'book',
	title : "How to Code",
	category : "DIY",
	price : 35.95,
	highlights : ["simple ", " step-by-step guide", " with lots of useless drawings"],
	picture_url : "http://www.sean.co.uk/shared/gfx/bookcovers/superskills250x333.jpg" //style="height:80px"

}

var content4 = {
	id : 'content4',
	type : 'album',
	title : "Going back to Miami",
	category : "Country",
	price : 4.95,
	highlights : ["Reckon Trump was a dick?", " ...meet his Hair-god!", " - Douchebag Heaven"],
	picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e8/8a/bb/e88abbb79808fc2b50a25ae48cc41542.jpg" //style="height:80px">
}

var content5 = {
	id : 'content5',
	type : 'album',
	title : "The Currie Brothers",
	category : "Tragic",
	price : 5.95,
	highlights : ["Accordian-playing", " Ranga twins", "  - Hot Stuff!"],
	picture_url : "https://s-media-cache-ak0.pinimg.com/564x/63/e6/65/63e665a454bd6c4fa2ab86a114966ac8.jpg" //style="height:80px">
}

//create array containing all products - use for stock availability//
var products = [
	Object(content1), 
	Object(content2), 
	Object(content3),
	Object(content4),
	Object(content5)
];

//sort current products by type (and push to book or album array)//
var books = [];
var albums = [];
function sortProduct(){
	for (var i=0; i<products.length; i++){
		var eachProduct = products[i];
			if (eachProduct.type === 'book') {
			books.push(eachProduct);
			} 
			else {
			albums.push(eachProduct);
			};
		};
};

//hide product shelves on load and execute sort function to create obj for Books and Albums//
$(window).load(function(){
	$('#bookshelf').hide();
	$('#musicshelf').hide();
	sortProduct();
	});	


//create function to loop through Book objects, hide musicshelf and show bookshelf after appending each Book//
var showBooks = function(){
	$('#musicshelf').hide();
	$('div #bookshelf').children("div").remove();
	$('#bookshelf').css({display:'block'});
	
	for (var i=0; i<books.length; i++){
		var product = books[i];
  		
  		var $newProduct = $('<div>').addClass('col-4').attr('id', product.id);
  		$('div #bookshelf').append($newProduct);
		
  		var l = $('<div>');
		l.html("<img class='pic' src =" + product.picture_url + ">");
		$("#" + product.id).append(l);

		var t = $('<li>');
		t.html('Title :'+ " " + product.title);
		$("#" + product.id).append(t);

		var c = $('<li>');
		c.html('Category :'+ " " + product.category);
		$("#" + product.id).append(c);

		var p = $('<li>');
		p.html('Price :  '+ " " + "$" + product.price);
		$("#" + product.id).append(p);
	
		var h = $('<li>');
		h.html('Our thoughts :'+ " " + product.highlights); 
		$("#" + product.id).append(h);
		};
	};

//create function to loop through Album objects, hide bookshelf and show musicshelf after appending each Album//
var showAlbums = function(){
	$('#bookshelf').hide();
	$('div #musicshelf').children("div").remove();
	$('#musicshelf').css({display:'block'});
	
	for (var i=0; i<albums.length; i++){	
		var product = albums[i];
  		
  		var $newProduct = $('<div>').addClass('col-4').attr('id', product.id);
  		$('div #musicshelf').append($newProduct);

 		var l = $('<div>');
		l.html("<img class='pic' src =" + product.picture_url + ">");
		$("#" + product.id).append(l);

 		var t = $('<li>');
		t.html('Title :'+ " " + product.title);
		$("#" + product.id).append(t);

		var c = $('<li>');
		c.html('Category :'+ " " + product.category);
		$("#" + product.id).append(c);

		var p = $('<li>');
		p.html('Price :  '+ " " + "$" + product.price);
		$("#" + product.id).append(p);

		var h = $('<li>');
		h.html('Our thoughts :'+ " " + product.highlights); 
		$("#" + product.id).append(h);
		};
	};
/*

//CONSIDER MAKING THESE FUNCTIONS MORE EFFICIENT BY USING A SINGLE 'ADDCONTENT' FUNCTION FOR EACH PRODUCT TYPE
	- would need to make addContent function an object in which var product is defined by reference to nav selected//

	  var addContent = function(obj){
			$("<div id=" + obj.id + "</div>").append();			

				var t = $('<li>');
				t.html('Title :'+ " " + product['title']);
				$('"#" + obj.id').append(t);

				var c = $('<li>');
				c.html('Category :'+ " " + product['category']);
				$('"#" + obj.id').append(c);

				var p = $('<li>');
				p.html('Price :  '+ " " + "$" + product['price']);
				$('"#" + obj.id').append(p);

				var h = $('<li>');
				h.html('Highlights :'+ " " + product['highlights']); 
				$('"#" + obj.id').append(h);

				var l = $('<div>');
				l.html("<img class='pic' src =" + product['picture_url'] + ">");
				$('"#" + obj.id').append(l);
			};
		$(product).addContent();
*/		
$(document).ready(function(){
	
	$('.nav #booklist').click(function(){
		showBooks();
		});
	$('.nav #albumlist').click(function(){
		showAlbums();
		});
	$('.nav #home').click(function(){
 	 	$('.nav li').attr('class','');
 		$('.nav #home').addClass('active');
		$('#musicshelf').hide();
		$('#bookshelf').hide();
		});
	});
