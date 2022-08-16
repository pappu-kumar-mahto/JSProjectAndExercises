function findMaxProfit(priceArray) {
    let maxProfit = 0
    let minSoFar = priceArray[0]
    for (let i = 0; i <= priceArray.length-1; i++){
        minSoFar = Math.min(minSoFar, priceArray[i])
        let profit = priceArray[i] - minSoFar
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
}
console.log(findMaxProfit([]))