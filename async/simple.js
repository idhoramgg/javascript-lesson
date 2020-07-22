let CART = "";

function getUser() {
	if(sessionStorage.getItem('isAuthenticated')) {
		// display basket count
		let count = 0;
		let currUserId = sessionStorage.getItem('currUserId');
		let currentUserCartKey = 'cart_' + currUserId;
		count = JSON.parse(localStorage.getItem(currentUserCartKey || "[]")).length;
		document.getElementById('basket').innerHTML = count;
		document.getElementById('loginButton').style.display = 'none';
		document.getElementById('cartName').innerHTML = sessionStorage.getItem('currUserName') + '\'s Cart';

	} else {
		document.getElementById('cartName').innerHTML = "Cart";
		document.getElementById('logoutButton').style.display = 'none';
		document.getElementById('basket-container').style.display = 'none';
		getAll();
	};
	// getting all products on the main page.
	getAll();
}

// Fetch Cart page
function getCart() {
	if(sessionStorage.getItem('isAuthenticated')) {
		window.location = '/cart/cart.html'
	} else {
		alert("You must login to use cart");
		window.location = '../auth/login.html';
	}
}

function getAll() {
	renderProducts();
	document.getElementById('cat-all').classList.add('active');
	document.getElementById('cat-rom').classList.remove('active');
	document.getElementById('cat-hum').classList.remove('active');
	document.getElementById('cat-mot').classList.remove('active');
	document.getElementById('cat-best').classList.remove('active');
}

function getRomance() {
	renderProducts('Romance');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-rom').classList.add('active');
	document.getElementById('cat-mot').classList.remove('active');
	document.getElementById('cat-best').classList.remove('active');
	document.getElementById('cat-hum').classList.remove('active');
}


function getHumor() {
	renderProducts('Humor');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-mot').classList.remove('active');
	document.getElementById('cat-rom').classList.remove('active');
	document.getElementById('cat-best').classList.remove('active');
	document.getElementById('cat-hum').classList.add('active');
}
function getMotivation() {
	renderProducts('Motivation');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-rom').classList.remove('active');
	document.getElementById('cat-hum').classList.remove('active');
	document.getElementById('cat-best').classList.remove('active');
	document.getElementById('cat-mot').classList.add('active');
}
function getBest() {
	renderProducts('Best Seller');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-best').classList.add('active');
	document.getElementById('cat-rom').classList.remove('active');
	document.getElementById('cat-hum').classList.remove('active');
	document.getElementById('cat-mot').classList.remove('active');
}

// render products based on given categories
async function renderProducts(cat) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	// let data = JSON.parse(localStorage.getItem('products'));
    const API = `https://5e92be81bbff810016969173.mockapi.io/api/v1/books`
    const options = {
        method: "GET"
    }
    let response = await fetch(API, options)
	let data = await response.json()
	
    data.forEach(item => {
		let btnModal = document.createElement('button')
		btnModal.setAttribute('id', 'open')
		btnModal.setAttribute('class', 'cta-btn')
		btnModal.textContent = 'Detail'
		if(cat) {
			if(item.category === cat) {
				productContainer.innerHTML += `
					<div class="product-item">
						<div class="prod-image">
							<img src="${item.image}" alt="">
						</div>
						<div class="prod-data">
							<span id="prod-title">${item.title}</span>
							<span id="prod-price">$ ${item.price}</span>
							<p id="prod-description">${item.author} - ${item.category}</p>
							<div class="holder">
								<div class="left"> 
									<form action="javascript:addToCart('${item.id}')" class="cart-btn">
										<button class="btn" id="add-to-cart" type="submit">Add to cart</button>
									</form>
								</div> 
								<div class="right"> 
									<button onclick="toggleModal(${item.id})"class="btn cta-btn" id="open">Detail</button>
								</div>
							</div>
						</div>
					</div>
			`;
			}
		} else {
			productContainer.innerHTML += `
					<div class="product-item">
						<div class="prod-image">
							<img src="${item.image}" alt="">
						</div>
						<div class="prod-data" >
							<span id="prod-title">${item.title}</span>
							<span id="prod-price">$ ${item.price}</span>
							<p id="prod-description">${item.author} - ${item.category}</p>
							<div class="holder">
								<div class="left"> 
									<form action="javascript:addToCart('${item.id}')" class="cart-btn">
										<button class="btn" id="add-to-cart" type="submit">Add to cart</button>
									</form>
								</div> 
								<div class="right"> 
									<button onclick="toggleModal(${item.id})"class="btn cta-btn" id="open">Detail</button>
								</div>
							</div>
						</div>
					</div>
			`;
		}
	});

}
function addToCart(prodId) {
	if(sessionStorage.getItem('isAuthenticated')) {
		let currUserId = sessionStorage.getItem('currUserId');
		let currentUserCartKey = 'cart_' + currUserId;
		CART = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
		let isAlreadyInCart = CART.some(item => item.id === prodId);
		if(isAlreadyInCart) {
			CART.forEach(item => {
				if(item.id === prodId) {
					item.count++;
				}
			})
		} else {
			CART.push({"id":prodId,"count":1});
		}
		localStorage.setItem(currentUserCartKey, JSON.stringify(CART));
		window.alert("Succesfully Added");
		window.location.reload();
	} else {
		window.alert("You must login first.")
	}
}

// Modal Logic

const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');



// Show modal
const openModal = () => {
	modal.classList.add('show-modal')
}
// open.addEventListener('click', openModal);

const toggleModal = (id) => {
	modal.classList.toggle('show-modal');
	getDataById(id)

}
// Hide modal
const closeModal = () => {
	modal.classList.remove('show-modal')
}
close.addEventListener('click', closeModal);


// dapetin data by ID waktu itemnya di klik.

const getDataById = async (id) => {
	const api = `https://5e92be81bbff810016969173.mockapi.io/api/v1/books/${id}`
	
	const response = await fetch(api)
	let result = await response.json()
	console.log(result);
	let text = `
				<div class="detail-container">
					<div class="detail-kiri"> 
						<img src="${result.image}"width="300px" height="auto">
					</div>
					<div class="detail-kanan">
						<h4> Title : ${result.title} </h4>
						<h4> Author : ${result.author} </h4>
						<h4> Category : ${result.category} </h4>
						<h4> Price : $ ${result.price} </h4> 
						<h4> Synopsis : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic adipisci, nostrum, consequatur consectetur optio assumenda odio error nisi esse beatae explicabo culpa, in excepturi! Harum, tempora blanditiis! Blanditiis quae deserunt ipsam quaerat soluta eius quod error nulla eum voluptate aspernatur, voluptates consectetur perspiciatis vel ducimus veniam. Reprehenderit harum ut molestias, obcaecati fugit quibusdam esse omnis ducimus tempora optio minus libero sequi rerum quod dolore? Dicta eius asperiores repellat reiciendis placeat laboriosam quae impedit id optio autem ut consequuntur quis blanditiis sequi hic officiis est voluptatibus ipsam commodi, at, dolores doloremque harum. Consequuntur, quaerat nesciunt. Quis veniam soluta porro corrupti ipsam?
						</h4>
						<form action="javascript:addToCart('${result.id}')" class="cart-btn">
						<button class="btn" id="add-to-cart" type="submit">Add to cart</button>
						</form>
					</div>	
				</div>
	`
	document.getElementById('modal-content').innerHTML = text

}

	// Logout current user
	function logout() {
		sessionStorage.clear();
		window.location = './index.html'
		}
	

	// function subscribe
	
	let subEmail = document.getElementById('sub').value
	const sendEmail = () => {
		Email.send({
		SecureToken : "99eb83debac400ffe5d506185001da8d",
		To : subEmail,
		From : "warunkBaca@gmail.com",
		Subject : "Email Subscribtion",
		Body : `<html>
		<h2>Congratulation, and many Thanks</h2>
		<strong>Thanks for your subscription to our website</strong>
		<br></br><em>	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis laboriosam qui, placeat incidunt natus expedita laborum cumque culpa, perspiciatis officia architecto quam aliquam mollitia harum dolore saepe id? Aliquam odit ut, numquam ipsam quod tempore assumenda impedit facere dignissimos ea, magnam veritatis quo nam ipsum pariatur reiciendis tempora earum modi!
		</em>
		</html>`
		}).then(
			message => alert("mail sent successfully")
		);
	}



	const getByID = async (id) => {
		let response = await fetch(`https://5e92be81bbff810016969173.mockapi.io/api/v1/books/${id}`)
		let result = await response.json()
		let items = [{
			count : 0,
			id: result.id
		}]
		let jumlahBarang = document.getElementById('jumlahBarang').value;
		items.count = jumlahBarang;

		localStorage.setItem('cart', JSON.stringify(items))


		let cartStorage = JSON.parse(localStorage.getItem('cart' || "[]"))
		
		if(cartStorage.id === result.id){
			items.count = items.count + jumlahBarang
		} else {
			items.push({'id': result.id, 'count': jumlahBarang})
		}
		let countTotal = cartStorage.reduce((count1, count2) => {
			return count1 + count2
		})

		document.getElementById('updateCart').innerHTML = countTotal
	}