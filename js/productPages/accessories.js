/* This .js file consists of my own codes that are used for accessories.html
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

//Special variables for product-image generation.
var images = [ '1','2','3'];
var images2 = [ '4','5','6'];
var images3 = [ '7','8','9'];
var images4 = [ '10','11','12'];
var images5 = [ '13','14','15'];
var prices = ["USD 89.50", "USD 89.00", "USD 102.90","USD 83.90", "USD 98.90", "USD 215.00","USD 199.90", "USD 149.00", "USD 79.50","USD 350.50", "USD 69.50", "USD 165.90","USD 400.00", "USD 98.90", "USD 100.00","USD 83.90"];
var productDescription = ["Hideaway Check Tucker Slim Fit Sport Shirt <br> VINEYARD VINES", "Tucker Patriots Point Slim Fit Plaid Sport Shirt <br> VINEYARD VINES", "'Cass' Quilted Jacket <br> BRIXTON","Paradise Creek CPO Shirt Jacket <br > TOMMY BAHAMA", "Blane Regular Fit Plaid Sport Shirt <br > BARBOUR", "'Essential' Tailored Fit Mixed Media Vest <br> BARBOUR", "Crewneck Merino Wool Sweater <br >NORDSTROM MEN'S SHOP", "Cotton & Cashmere V-Neck Sweater <br> NORDSTROM MEN'S SHOP","Hideaway Check Tucker Slim Fit Sport Shirt <br> VINEYARD VINES", "Tucker Patriots Point Slim Fit Plaid Sport Shirt <br> VINEYARD VINES", "'Cass' Quilted Jacket <br> BRIXTON","Paradise Creek CPO Shirt Jacket <br > TOMMY BAHAMA", "Blane Regular Fit Plaid Sport Shirt <br > BARBOUR", "'Essential' Tailored Fit Mixed Media Vest <br> BARBOUR", "Crewneck Merino Wool Sweater <br >NORDSTROM MEN'S SHOP", "Cotton & Cashmere V-Neck Sweater <br> NORDSTROM MEN'S SHOP","Cotton & Cashmere V-Neck Sweater <br> NORDSTROM MEN'S SHOP"];


 // This main function is used for DOMContentLoaded event and //
//             it is called at the end of the page.         //

function ready(){
	//menu function with id and pageName parameters
	function menu(id, pageName){
		/* for each 'item' inside the menuItemsLeft variable do... 
		It means each item inside the array is observed and necessary
		modifications are done */
		menuItemsLeft.forEach((item)=>{

			//creating li and a tags for navigation
			var li = document.createElement("li");
			var a = document.createElement("a");

			/* if "item" in menuItemsLeft is equal to "home", add
			href attribute as index.html; else if it is equal to
			pageName parameter, add "active" "class"(materialize) to 'li' tag
			and	item.html attribute to "a" tag; else add to "a" tag  
			"dropdown-button" class(materialize),link and "data-activates" attributes*/
			if (item.toLowerCase() === "home") {
				a.setAttribute("href", "index.html");
			} else if (item.toLowerCase() === pageName){
				li.setAttribute("class", "active");
				a.setAttribute("href", item.toLowerCase()+".html");
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
			id.appendChild(li);
		});
	};
	// calling menu function with parameters
	menu(accessoriesMenu, "accessories");

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

			/* if 'item' from mobileMenuItems's array is 'accessories'
			set class(materialize) and links to 'li' and 'a' tags */
			if (item.toLowerCase() === "accessories"){
				li.setAttribute("class", "active");
				a.setAttribute("href", "accessories.html");
			//else if it is 'home' set another link to 'a'
			}else if (item.toLowerCase() === "home"){
				a.setAttribute("href", "index.html");
				//on other cases use 'item' itself for linking 
			}else{
				a.setAttribute("href", item.toLowerCase()+".html");
			};

			//defining parent and child elements
			a.innerHTML = item;
			li.appendChild(a);
			mobileDemo.appendChild(li);
		});
	};
	//calling 'menuForMobile' function
	menuForMobile();

	/* This  function generates tabs for accessories.html */
	function tabs(){
		var ul  = document.createElement("ul");

		//setting materialize's classes to 'ul' tag
		ul.setAttribute("class", "tabs tabs-transparent");

		//for each element inside 'accessoriesItems' do...
		accessoriesItems.forEach((item)=>{

			//creating 'a' and 'li' tags
			var li = document.createElement("li");
			var a = document.createElement("a");

			//setting 'tab' class(materialize) and "href", to 'li' and 'a' elements 
			li.setAttribute("class", "tab");
			a.setAttribute("href", "#"+item.toLowerCase());

			//defining which is parent element and which is child element
			a.innerHTML = item;
			li.appendChild(a);
			ul.appendChild(li);
			productTab.appendChild(ul);
		});
	};
	//calling 'tabs' function
	tabs();

	/* This function was the most difficult task for me. It generates
	product page's main content. It is univesal function in this web site's 
	case and is used several times */

	/* productGenerator function with parameters: 
	1. rowImg - one of the arrays with a range of numbers
	2. rowNumber -special 'id' in html file where generation will happen
	3. imgfolder - name of the folder with images */ 
	function productGenerator(rowImg, rowNumber, imgfolder){
		rowImg.forEach((item)=>{

			/*creating necessary elements and setting materialize classes
			to structure the content */
			var divRow = document.createElement("div");
			divRow.setAttribute("class", "row");
			var divCol = document.createElement("div");
			divCol.setAttribute("class", "col s12 m6 l4");
			var divCard = document.createElement("div");
			divCard.setAttribute("class", "card");
			var divCardImage = document.createElement("div");
			divCardImage.setAttribute("class", "card-image");
			var divCardContent = document.createElement("div");
			divCardContent.setAttribute("class","card-content");
			var img = document.createElement("img"); 
			img.setAttribute("class", "materialboxed");
			var span = document.createElement("span");
			span.setAttribute("class", "card-title");
			var a = document.createElement("a");
			a.setAttribute("class", "btn-floating halfway-fab waves-effect waves-light red modal-trigger");
			a.setAttribute("href", "#modal1");
			var i = document.createElement("i");
			i.setAttribute("class", "material-icons");
			i.innerHTML = "add_shopping_cart";
			a.appendChild(i);
			var p = document.createElement("p");

			/*defining the source of the image by using 'imgfolder' and
			'item' name */
			img.setAttribute("src", "images/"+imgfolder+"/"+item+".jpg");

			/* adding 'item' to span as a child. As 'item' in the
			arrays is typeof string, we need to convert it to Integer */
			span.innerHTML = prices[parseInt(item)];
			
			//adding elements to special 'tags' as a child element  
			divCardImage.appendChild(img);
			divCardImage.appendChild(span);
			divCardImage.appendChild(a);

			p.innerHTML = productDescription[parseInt(item)];
			divCardContent.appendChild(p);

			divCard.appendChild(divCardImage);
			divCard.appendChild(divCardContent);
			divCol.appendChild(divCard);
			
			//adding 'divCol' to element with 'rowNumber' id as a child element
			rowNumber.appendChild(divCol);
		});		
	};

	//calling productGenerator with certain parameters
	productGenerator(images, row1, "bags");
	productGenerator(images2, row2, "bags");
	productGenerator(images3, row3, "bags");
	productGenerator(images4, row4, "bags");
	productGenerator(images5, row5, "bags");
	productGenerator(images, row6, "sunglasses");
	productGenerator(images2, row7, "sunglasses");
	productGenerator(images3, row8, "sunglasses");
	productGenerator(images4, row9, "sunglasses");
	productGenerator(images5, row10, "sunglasses");
	productGenerator(images, row11, "watches");
	productGenerator(images2, row12, "watches");
	productGenerator(images3, row13, "watches");
	productGenerator(images4, row14, "watches");
	productGenerator(images5, row15, "watches");
/* When function is called depending on given parameter values 
approximately this code will be generated inside the html file.			

<div class="col s12 m6 l4">
	<div class="card">
		<div class="card-image">
			<img class="materialboxed" src="images/bags/1.jpg">
			<span class="card-title">USD 83.90</span>	
			<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
		</div>
		<div class="card-content">
			<p>Hideaway Check Tucker Slim Fit Sport Shirt <br> VINEYARD VINES</p>
		</div>
	</div>
</div>                                                                   */                           



};

//calling main 'ready' function for 'DOMContentLoaded' event
document.addEventListener("DOMContentLoaded", ready);
