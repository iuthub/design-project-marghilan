/* This .js file consists of codes that are used for index.html
in order to make it dynamically generated.                 */

//=== Declaration of web page elements in the form of array as global variables. ===//
// Below they are used in several functions. 

var menuItemsLeft = ["Home", "Clothing", "Shoes", "Accessories","Gadgets"];
var clothingItems = ["Casual","Sportwear","Suits"];
var shoesItems = ["Boots", "Slippers", "Sneakers"];
var accessoriesItems = ["Bags", "Sunglasses", "Watches"];
var gadgetsItems = ["Audio & Tech Accessories"];
var menuItemsRight = ["Blog", "Branches", "Contact", "shopping_cart"];
var modalItems = ["SIGN IN", "My Bag: 0 Items", "Your shopping bag is currently empty. To view the items in your bag across all devices, please sign in on each device."];
//Here I concatinated two arrays and removed last element of the second one. 
var mobileMenuItems = menuItemsLeft.concat(menuItemsRight.slice(0, 3));


 // This main anonymous function is used for window.onload event.//
 // It generates html elements when page is loaded completely //
 window.onload = function(){
 	function menuLeft(){
		/* for each 'item' inside the menuItemsLeft variable do... 
		It means each item inside the array is observed and necessary
		modifications are done */
		menuItemsLeft.forEach((item)=>{

			//creating li and a tags for navigation
			var li = document.createElement("li");
			var a = document.createElement("a");

			/* if "item" in menuItemsLeft is equal to "home", add
			'href' attribute as 'index.html' and add materialize's class 'active';
			else set 'dropdown-button' class(materialize) and 'data-activates'
				attributes to 'a' tag */
			if (item.toLowerCase() === "home") {
				li.setAttribute("class", "active");
				a.setAttribute("href", "index.html");
			} else {
				a.setAttribute("class", "dropdown-button");
				a.setAttribute("href", item.toLowerCase()+".html");
				a.setAttribute("data-activates", item.toLowerCase());
			};

			//adding item to 'a' tag as inner element
			a.innerHTML = item;

			//adding 'a' tag to 'li' tag as a child element
			li.appendChild(a);

			//adding 'li' tag to 'id' parameter as a child element			
			indexMenu.appendChild(li);
		});
	};
	// calling menu function with parameters
	menuLeft();

	//from JQuery library to initialize dropdown effect
	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
	    constrainWidth: false, // Does not change width of dropdown to that of the activator
	    hover: true, // Activate on hover
	    gutter: 0, // Spacing from edge
	    belowOrigin: true, // Displays dropdown below the button
	    alignment: 'left', // Displays dropdown with edge aligned to the left of button
	    stopPropagation: false // Stops event propagation
	});

	// function to generate dropdown elements
	function dropDown(itemNames, id, locationHash){
		itemNames.forEach((item)=>{

			//creating li and a tags for dropdown-content
			var a = document.createElement("a");
			var li = document.createElement("li");

			//setting links of dropdown element's
			a.setAttribute("href", locationHash+item.toLowerCase());

			//adding item to 'a' tag as inner element	
			a.innerHTML = item;

			//adding 'a' tag to 'li' tag as a child element
			li.appendChild(a);

			//adding 'li' tag to 'id' parameter as a child element
			id.appendChild(li);	
		});
	};

	//calling dropdown function 
	dropDown(clothingItems, clothing, "clothing.html#");
	dropDown(shoesItems, shoes, "shoes.html#");
	dropDown(accessoriesItems, accessories, "accessories.html#");
	
	

	//function for right side menu
	function menuRight(){
		menuItemsRight.forEach((item)=>{

			//creating li and a tags for menu elements 
			var li = document.createElement("li");
			var a = document.createElement("a");
			
			/* if item from 'menuItemsRight' array is equal to 'shopping_cart'
			then add to 'a' tag: "href='#modal1'", "id='myShoppingCard'" ... etc.
			and create i element with 'material-icons-left' class. 'a' appends 
			'i' as a child.   */
			if(item == "shopping_cart"){
				var i = document.createElement("i");
				a.setAttribute("href", "#modal1");
				a.setAttribute("id", "myShoppingCard");
				a.setAttribute("class", "btn tooltipped waves-effect waves-light btn modal-trigger");
				a.setAttribute("data-position", "bottom");
				a.setAttribute("data-delay", "50");
				a.setAttribute("data-tooltip", "My shopping card");
				i.setAttribute("class", "material-icons left" )
				i.innerHTML = item;
				a.appendChild(i);
				/* else use 'item' itself to create "href" */
			}else{
				li.setAttribute("class", "hide-on-med-and-down");
				a.setAttribute("href", item.toLowerCase()+".html");
				a.innerHTML = item;
			};

			//adding 'a' tag to 'li' tag as a child element
			li.appendChild(a);

			//rightMenu id appends 'li' as a child element
			rightMenu.appendChild(li);
		});
	};
	//calling menuRight function
	menuRight();

	/* This function is used to create modal when user clicks
	shopping_cart icon or add_to_cart button */
	function modal(){
		//creating necessary elements to structure modal
		var iDiv = document.createElement('div');
		var i2Div = document.createElement('div');
		var h4 = document.createElement('h4');
		var p = document.createElement('p');
		var a = document.createElement('a');

		//modalItems array's element are being added to specific tags 
		h4.innerHTML = modalItems[1];
		p.innerHTML = modalItems[2];
		a.innerHTML = modalItems[0];

		//adding link and classes(materialize) to tags
		iDiv.setAttribute("class", "modal-content");
		i2Div.setAttribute("class", "modal-footer");
		a.setAttribute("class", "modal-action modal-close waves-effect waves-green btn-flat");
		a.setAttribute("href", "sign_in.html");

		//adding elements to tags as a child element
		iDiv.appendChild(h4);
		iDiv.appendChild(p);

		i2Div.appendChild(a);

		modal1.appendChild(iDiv);
		modal1.appendChild(i2Div);
	};
	//calling modal function 
	modal();


	/* 'menuFroMobile' function generates menu when user's screen width 
	is less then 993px */
	function menuForMobile(){
		mobileMenuItems.forEach((item)=>{
			//creating 'li' and 'a' elements
			var li = document.createElement("li");
			var a = document.createElement("a");

			/* if 'item' from mobileMenuItems's array is 'Home'
			set class(materialize) and links to 'li' and 'a' tags */
			if (item.toLowerCase() === "home"){
				li.setAttribute("class", "active");
				a.setAttribute("href", "index.html");
			//on other case use 'item' itself for linking 
			}else{
				a.setAttribute("href", item.toLowerCase()+".html");
			};

			//defining parent and child elements
			a.innerHTML = item;
			li.appendChild(a);
			mobileDemo.appendChild(li);
		});
	};
	menuForMobile();

}






/*==============My CODES that didn't work properly================*/
// rightMenu();
	// function menuRight(id, pageName){
	// 	menuItemsLeft.forEach((item)=>{

	// 		var li = document.createElement("li");
	// 		var a = document.createElement("a");

	// 		if (item.toLowerCase() === "home") {
	// 			a.setAttribute("href", "index.html");
	// 		} else if (item.toLowerCase() === pageName.toLowerCase()){
	// 			li.setAttribute("class", "active");
	// 			a.setAttribute("href", item.toLowerCase+".html");
	// 		} else {
	// 			a.setAttribute("class", "dropdown-button");
	// 			a.setAttribute("href", "#!");
	// 			a.setAttribute("data-activates", item.toLowerCase());
	// 		};


	// 		a.innerHTML = item;

	// 		li.appendChild(a);

	// 		id.appendChild(li);
	// 	});
// 	};

// 	function menuAll(){
// 		pageNames.forEach((pageName)=>{
// 			switch (pageName) {
// 				case "index":
// 				menuIndex();
// 				break;
// 				case "clothing":
// 				menu(clothingMenu, pageName);
// 				break;
// 				case "shoes":
// 				menu(shoesMenu, pageName);
// 				break;			
// 				case "accessories":
// 				menu(accessoriesMenu, pageName);
// 				break;

// 			};

// 			$('.dropdown-button').dropdown({
// 				inDuration: 300,
// 				outDuration: 225,
//     constrainWidth: false, // Does not change width of dropdown to that of the activator
//     hover: true, // Activate on hover
//     gutter: 0, // Spacing from edge
//     belowOrigin: false, // Displays dropdown below the button
//     alignment: 'left', // Displays dropdown with edge aligned to the left of button
//     stopPropagation: false // Stops event propagation
// });
// 		});

// 	menuAll();
// 	menuIndex();


// 	// menuClothing.forEach((item)=>{
// 	// 	var a = document.createElement("a");
// 	// 	var li = document.createElement("li");

// 	// 	a.setAttribute("href", "clothing.html#"+item.toLowerCase());

// 	// 	a.innerHTML = item;

// 	// 	li.appendChild(a);

// 	// 	clothing.appendChild(li);
// 	// });

// 	// menuShoes.forEach((item)=>{
// 	// 	var a = document.createElement("a");
// 	// 	var li = document.createElement("li");

// 	// 	a.setAttribute("href", "shoes.html#"+item.toLowerCase());

// 	// 	a.innerHTML = item;

// 	// 	li.appendChild(a);

// 	// 	shoes.appendChild(li);
// 	// });

// 	// menuAccessories.forEach((item)=>{
// 	// 	var a = document.createElement("a");
// 	// 	var li = document.createElement("li");

// 	// 	a.setAttribute("href", "accessories.html#"+item.toLowerCase());

// 	// 	a.innerHTML = item;

// 	// 	li.appendChild(a);

// 	// 	accessories.appendChild(li);
// 	// });



// window.onload =function(){

// 	menuItemsRight.forEach((item)=>{
// 			var li = document.createElement("li");
// 			var a = document.createElement("a");
// 			var i = document.createElement("i");
// 		// if(item.toLowerCase === "shopping_card"){

// 		// 	a.setAttribute("class", "btn tooltipped waves-effect waves-light btn modal-trigger");
// 		// 	a.setAttribute("data-position", "bottom");
// 		// 	a.setAttribute("data-delay", "50");
// 		// 	a.setAttribute("data-tooltip", "My shopping card");
// 		// 	i.setAttribute("class", "material-icons left" )
// 		// 	i.innerHTML = item;
// 		// 	a.appendChild(i);
// 		// }else{
// 		// 	li.setAttribute("class", "hide-on-med-and-down");
// 		// 	// a.setAttribute("href", (item.toLowerCase === "sign in") ? "sign_in.html" : "contact.html");
// 		// 	a.innerHTML = item;
// 		// };
// 		i.innerHTML = item;
// 		a.appendChild(i);

// 		li.appendChild(a);
// 		rightMenu.appendChild(li);
// 		});
// 	};
// 	;

// }




/*<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="keywords" content="Boots, Slippers, Sneakers">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="css/fonts.css">
	<link rel="stylesheet" href="css/materialize.css">
	<link rel="stylesheet" href="css/index.css">
	<link rel="shortcut icon" href="images/b.ico" />
	<title>Shoes | MODEST</title>
</head>
<body class="bgshoes">
	<header>
		<nav class="nav-extended">
			<div class="nav-wrapper">
				<a href="index.html" class="brand-logo center">MODEST</a>
				<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
				<ul id="shoesMenu" class="left hide-on-med-and-down">
					<li><a href="index.html">Home</a></li>
					<li><a  class="dropdown-button" href="clothing.html" data-activates="clothing">Clothing</a></li>
					<li  class="active"><a href="#!" data-activates="shoes">Shoes</a></li>
					<li><a class="dropdown-button" href="#!" data-activates="accessories">Accessories</a></li>
				</ul>
				<ul id="clothing" class="dropdown-content">
					<li><a href="#!">Casual</a></li>
					<li><a href="#!">Sportwear</a></li>
					<li><a href="#!">Wedding suits</a></li>
				</ul>
				<ul id="shoes" class="dropdown-content">
					<li><a href="#!">Boots</a></li>
					<li><a href="#!">Slippers</a></li>
					<li><a href="#!">Sneakers</a></li>
				</ul>
				<ul id="accessories" class="dropdown-content">
					<li><a href="#!">Bags</a></li>
					<li><a href="#!">Sunglasses</a></li>
					<li><a href="#!">Watches</a></li>
				</ul>
				<ul class="right">
					<li><a href="#modal1" id="myShoppingCard"class="btn tooltipped waves-effect waves-light btn modal-trigger" data-position="bottom" data-delay="50" data-tooltip="My shopping card"><i class="material-icons left">shopping_cart</i></a></li>
					<div id="modal1" class="modal">
						<div class="modal-content">
							<h4>My Bag: 0 Items</h4>
							<p>Your shopping bag is currently empty. To view the items in your bag across all devices, please sign in on each device.</p>
						</div>
						<div class="modal-footer">
							<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">SIGN IN</a>
						</div>
					</div>
				</ul>
				<ul class="right hide-on-med-and-down">
					<li><a href="#">Contact</a></li>
					<li><a href="#" id="signIn">SIGN IN</a></li>
				</ul>
				<ul class="side-nav" id="mobile-demo">
					<li><a href="index.html">Home</a></li>
					<li class="active"><a href="#">Clothing</a></li>
					<li><a href="#">Shoes</a></li>
					<li><a href="#">Accessories</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<div class="nav-content">
				<ul class="tabs tabs-transparent">
					<li class="tab"><a href="#casual">Casual</a></li>
					<li class="tab"><a href="#sportwear">Sportwear</a></li>
					<li class="tab"><a href="#suits">Suits</a></li>
				</ul>
			</div>
		</nav>
	</header>
	<!-- MY Page;s BODY -->
	<main>
		<div id="casual" class="container section">
			<div class="row">
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<img class="materialboxed" src="images/casual/1.jpg">
							<span class="card-title">USD 83.90</span>	
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
						</div>
						<div class="card-content">
							<p>Hideaway Check Tucker Slim Fit Sport Shirt <br> VINEYARD VINES</p>
						</div>
					</div>
				</div>
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<img class="materialboxed" src="images/casual/2.jpg">
							<span class="card-title">USD 83.90</span>	
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
						</div>
						<div class="card-content">
							<p>Tucker Patriots Point Slim Fit Plaid Sport Shirt <br> VINEYARD VINES</p>
						</div>
					</div>
				</div>
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<img class="materialboxed" src="../styles/images/casual/3.jpg">
							<span class="card-title">USD 83.90</span>	
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
						</div>
						<div class="card-content">
							<p>'Cass' Quilted Jacket <br> BRIXTON</p>
						</div>
					</div>
				</div>
			</div>
	<!--2--><div class="row" id="image-tes">
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<img class="materialboxed" src="../styles/images/casual/4.jpg">
							<span class="card-title">USD 83.90</span>	
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
						</div>
						<div class="card-content">
							<p>Paradise Creek CPO Shirt Jacket <br>TOMMY BAHAMA</p>
						</div>
					</div>
				</div>
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<img class="materialboxed" src="../styles/images/casual/5.jpg">
							<span class="card-title">USD 83.90</span>	
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
						</div>
						<div class="card-content">
							<p>Blane Regular Fit Plaid Sport Shirt <br>BARBOUR</p>
						</div>
					</div>
				</div>
				<div class="col s12 m6 l4">
					<div class="card">
						<div class="card-image">
							<img class="materialboxed" src="../styles/images/casual/6.jpg">
							<span class="card-title">USD 83.90</span>	
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
						</div>
						<div class="card-content">
							<p>'Essential' Tailored Fit Mixed Media Vest <br>BARBOUR</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	<div id="sportwear" class="col s12">Sprt</div>
	<div id="suits" class="col s12">Wedding </div>
	<a id="scrollToTop" href="#">bedberberbrebr</a>
	</main>
	
<footer></footer>        


<!--Scripts  -->
<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="js/materialize.js"></script>
<script type="text/javascript" src="js/menuOthers.js"></script>
<script type="text/javascript" src="js/product_page.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>*/