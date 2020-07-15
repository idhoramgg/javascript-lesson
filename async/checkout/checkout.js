const getAllData = async () => {
	const API = `https://5e92be81bbff810016969173.mockapi.io/api/v1/books`
	const response = await fetch(API)
	let data = response.json()
	return data
}

async function renderCheckout() {
	// let data = JSON.parse(localStorage.getItem('products'));
	let data = await getAllData()
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
	if(cart.length > 0) {
		let cartArr = cart.map(item => {
			for(let i = 0; i < data.length; i++) {
				if(data[i].id === item.id) {
					return {...data[i], quantity:item.count}
				}
			}
		});
		let rowContainer = document.getElementById('checkout-table-row');
		rowContainer.innerHTML = "";
		let total = 0;
		cartArr.forEach((item, index) => {
			total += (+item.quantity * +item.price);
			rowContainer.innerHTML += `
			<tr>
				<td class="t-row">${index + 1}</td>
				<td class="t-row">${item.title}</td>
				<td class="t-row">$ ${item.price}</td>
				<td class="t-row">${item.quantity}</td>
				<td class="t-row">$ ${+item.quantity * +item.price}</td>
			</tr>
			`;
		});
		document.getElementById('total').innerHTML = total;
	} else {
		document.getElementById('confirmPurchase').style.display = 'none';
	}



}
function confirmPurchase() {
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	localStorage.setItem(currentUserCartKey, JSON.stringify([]));
	window.alert('Thank You for purchase.');
	window.location = '/index.html';
}
