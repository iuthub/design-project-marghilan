/* This .js file consists of codes that are used for branches.html
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


  // This main function is used for DOMContentLoaded event and //
//             it is called at the end of the page.         //

function ready(){
	//function for generating left side menu items 
 	function menuLeft(){
		/* for each 'item' inside the menuItemsLeft variable do... 
		It means each item inside the array is observed and necessary
		modifications are done */
		menuItemsLeft.forEach((item)=>{

			//creating li and a tags for navigation
			var li = document.createElement("li");
			var a = document.createElement("a");

			/* if "item" in menuItemsLeft is equal to "home", add
			'href' attribute as 'index.html'; else set 'dropdown-button' class(materialize) and 'data-activates'
			attributes to 'a' tag */
			if (item.toLowerCase() === "home") {
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

			//adding 'li' tag to 'signInMenu' as a child element			
			branchesMenu.appendChild(li);
		});
	};
	// calling menu function with parameters
	menuLeft();



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
			/* else if item is equal to 'branches', add materialize framework's
			class to 'li' tag and add hyperreferance to 'a' tag */	
			}else if (item.toLowerCase() == "branches"){
				a.setAttribute("href","branches.html");
				li.setAttribute("class", "active hide-on-med-and-down");
				a.innerHTML = item;
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
				a.setAttribute("href", "index.html");
			//else if it is 'SIGN IN' set another link to 'a'
			}else if(item.toLowerCase() == "branches"){
				li.setAttribute("class", "active");
				a.setAttribute("href", "branches.html");
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

	/*=========DYNAMICALLY GENERATED TABLE========== */

	//declaring the variable as an array to store the data
	var stores = [];

	//function (object) with properties and "print" method
    function Store(ID, Store, Address, phoneNumber){
    //properties of the Store
      this.id = ID;
      this.name = Store;
      this.address = Address;
      this.phonenumber = phoneNumber; 
     //metod "print" that prints strings and properties inside the brackets
      this.print = function(){
        console.log("Store - " + "ID : " + this.id + "\n" + "Store : " + this.name + "\n" + "Address : " + this.address + " \n" + "Phone number : " + this.phonenumber);
      }
    }

    //here every new "Store" object is added to the array "stores"
    stores.push(new Store(1, "MODEST®(C-1)", "22-13, Mustaqillik st., BIY district, Tashkent", "+998(90) 405 45 13"));
    stores.push(new Store(2, "MODEST®(Yunusobod-7)", "4-18, Binkat st., Yunusobod district, Tashkent", "+998(90) 186 59 66"));
    stores.push(new Store(3, "MODEST®(Bodomzor)", "8-3, Amir Temur st., Yunusobod district, Tashkent", "+998(90) 272 91 08"));
    stores.push(new Store(4, "MODEST®(Chorsu)", "7-10, Qoratosh st., Shayhantohur district, Tashkent", "+998(90) 300 36 96"));

    //calling document element by ID in order to manipulate with them
    var btn = document.getElementById("show-stores");
    var tableBody = document.getElementById("table-body");

    //special function to hide button after it does its work, 
    //without this function it would show the table several times
	function hideButton (){
		document.getElementById("show-stores").style.display = "none";
	}

	//when element btn is clicked do...
    btn.addEventListener('click', ()=>{

    //fore= each element in stores do...
      stores.forEach((store)=>{

      	//create "tr" element
        var tableRow = document.createElement("tr");

        //add the combination after  equal sign to tableRow as an inner HTML element
        tableRow.innerHTML = "<th scope='row'>" + store.id + "</th><td>" + store.name + "</td><td>" + store.address + "</td><td>" + store.phonenumber + "</td>";  
        
        //add  tableRow as a child element to tableBody
        tableBody.appendChild(tableRow);

        //print the store
        store.print();

        //calling hideButton function in order to hide button
        hideButton();
      });

    });
}

//calling main 'ready' function for 'DOMContentLoaded' event
document.addEventListener("DOMContentLoaded", ready);
