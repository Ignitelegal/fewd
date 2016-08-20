
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
	highlights : ["Thought code was whack?", " Youll need rehab after this one!"],
	picture_url : "http://thetinylife.com/wp-content/uploads/2013/01/book-cover.jpg" //style="height:80px"
}

var content3 = {
	id : 'content3',
	type : 'book',
	title : "How to Code",
	category : "DIY",
	price : 35.95,
	highlights : ["Easy", " step-by-step guide", " with lots of useless drawings"],
	picture_url : "http://www.sean.co.uk/shared/gfx/bookcovers/superskills250x333.jpg" //style="height:80px"

}

var content4 = {
	id : 'content4',
	type : 'album',
	title : "Going back to Miami",
	category : "Country",
	price : 4.95,
	highlights : ["Think Trump is a dick?", " ...meet his Hair-god!", " - Douchebag Heaven"],
	picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e8/8a/bb/e88abbb79808fc2b50a25ae48cc41542.jpg" //style="height:80px">
}

var content5 = {
	id : 'content5',
	type : 'album',
	title : "The Currie Brothers",
	category : "Tragic",
	price : 5.95,
	highlights : ["Accordian-playing", " Ranga twins", " Dont take our word for it, these boys are - Hot Stuff!"],
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


$(window).load(function(){
	$('#bookshelf').css({'display':'none'});
	$('#musicshelf').css({'display':'none'});
	sortProduct();
	showBooks();
	showAlbums();//
	});	


var showAlbums = function(){
	$('#musicshelf').css({'display':'block'});
	$('#bookshelf').css({'display':'hidden'});
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
			h.html('Highlights :'+ " " + product.highlights); 
				$("#" + product.id).append(h);


		};
	};


var showBooks = function(){
	$('#bookshelf').css({'display':'block'});
	$('#musicshelf').css({'display':'hidden'});
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
			h.html('Highlights :'+ " " + product.highlights); 
				$("#" + product.id).append(h);
	
		};
	};



/*

//COULD PROBABLY USE A SINGLE ADDCONTENT FUNCTION FOR EITHER PRODUCT TYPE

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


//CANT MAKE THE NAV CLICK TO EXECUTE FUNCTION//

$('#booklist').click(function(){ 
	console.log("working");
	//$('.nav li').attr('class','');
  	//$('.nav li #booklist').addClass('active');
  //	$('#musicshelf').css({'display':'none'});
  //	$('#bookshelf').css({'display':'block'});
 });


$('#albumlist').click(function(){
  $('.nav li').attr('class','');
  $('.nav li #albumlist').addClass('active');
  $('div #musicshelf').show();
  $('div #bookshelf').hide();
})


/*
$('.nav #all').click(function(){
  $('.nav li').attr('class','');
  $('#all').addClass('active');
  $('.product').show();
})
*/


