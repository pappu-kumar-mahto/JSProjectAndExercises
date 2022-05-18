let orderPlace = document.getElementById('orderPlace')
let chefRecieve = document.getElementById('chefRecieve')
let pizzaSause = document.getElementById('pizzaSause')
let firstCheeze = document.getElementById('firstCheeze')
let toppingAdded = document.getElementById('toppingAdded')
let secondCheeze = document.getElementById('secondCheeze')
let pizzaBaked = document.getElementById('pizzaBaked')
let oreganoAdded = document.getElementById('oreganoAdded')
let packageAtCounter = document.getElementById('packageAtCounter')
let finalCall = document.getElementById('finalCall')

const executeOrder = (callback) => {
	const orderNo = document.getElementById('orderId').value
	// console.log(orderNo + ': Order Placed')
	orderPlace.innerText = orderNo + ': Order Placed'
	orderPlace.style.transition= "all 2s ease-in-out"
	orderPlace.style.display = 'block'
	orderPlace.style.color= "#700391"
	orderPlace.style.background = '#14e356'
	

	setTimeout(() => {
		// console.log(orderNo + ': Chef received the order and started preparing')
		chefRecieve.innerText = orderNo + ': Chef received the order and started preparing'
		chefRecieve.style.transition= "all 2s ease-in-out"
		chefRecieve.style.display = 'block'
		chefRecieve.style.color = '#700391'
		chefRecieve.style.background = '#14e356'
		setTimeout(() => {
			// console.log(orderNo + ': Pizza Sauce added')
			pizzaSause.innerText = orderNo + ': Pizza Sauce added'
			pizzaSause.style.transition= "all 2s ease-in-out"
			pizzaSause.style.display = 'block'
			pizzaSause.style.color = '#700391'
			pizzaSause.style.background = '#14e356'
			setTimeout(() => {
				// console.log(orderNo + ': First layer of cheeze added')
				firstCheeze.innerText = orderNo + ': First layer of cheeze added'
				firstCheeze.style.transition= "all 2s ease-in-out"
				firstCheeze.style.display = 'block'
				firstCheeze.style.color = '#700391'
				firstCheeze.style.background = '#14e356'
				setTimeout(() => {
					// console.log(orderNo + ': Toppings added')
					toppingAdded.innerText = orderNo + ': Toppings added'
					toppingAdded.style.transition= "all 2s ease-in-out"
					toppingAdded.style.display = 'block'
					toppingAdded.style.color = '#700391'
					toppingAdded.style.background = '#14e356'
					setTimeout(() => {
						// console.log(orderNo + ': Second layer of cheeze added')
						secondCheeze.innerText = orderNo + ': Second layer of cheeze added'
						secondCheeze.style.transition= "all 2s ease-in-out"
						secondCheeze.style.display = 'block'
						secondCheeze.style.color = '#700391'
						secondCheeze.style.background = '#14e356'
						setTimeout(() => {
							// console.log(orderNo + ': Pizza baked!')
							pizzaBaked.innerText = orderNo + ': Pizza baked!'
							pizzaBaked.style.transition= "all 2s ease-in-out"
							pizzaBaked.style.display = 'block'
							pizzaBaked.style.color = '#700391'
							pizzaBaked.style.background = '#14e356'
							setTimeout(() => {
								// console.log(orderNo + ': Oregano added and packed')
								oreganoAdded.innerText = orderNo + ': Oregano added and packed'
								oreganoAdded.style.transition= "all 2s ease-in-out"
								oreganoAdded.style.display = 'block'
								oreganoAdded.style.color = '#700391'
								oreganoAdded.style.background = '#14e356'
								setTimeout(() => {
									// console.log(orderNo + ': Package received at counter')
									packageAtCounter.innerText = orderNo + ': Package received at counter'
									packageAtCounter.style.transition= "all 2s ease-in-out"
									packageAtCounter.style.display = 'block'
									packageAtCounter.style.color = '#700391'
									packageAtCounter.style.background = '#14e356'
									setTimeout(() => {
										finalCall.style.display = 'block'
										finalCall.style.color = '#700391'
										finalCall.style.transition= "all 2s ease-in-out"
										finalCall.style.background = '#14e356'
										callback()
									},2000)
									
								}, 2000)

							}, 8000)

						}, 15000)

					}, 5000)

				}, 12000)

			}, 5000)

		}, 10000)
		
	}, 2000)
}

