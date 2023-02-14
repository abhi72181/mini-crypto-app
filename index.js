// console.log("hello");
let url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

fetch(url).then((data)=>data.json()).then((val)=>{
    console.log(val);
   displayData(val)
})

function displayData(val){
// console.log(val,"val");
    val.forEach((e)=>{
        let tbody=document.querySelector("tbody")
        let tr=document.createElement("tr")
        let td=document.createElement("td")
        let div=document.createElement("div")
        div.setAttribute("class","firstDiv")
        let img=document.createElement("img")
        img.setAttribute("width",30)
        img.setAttribute("height",30)
        img.src=e.image
        let coinName=document.createElement("p")
        coinName.innerText=e.name
        let price=document.createElement("td")
        price.innerText=e.current_price

        let marketCap=document.createElement("td")
        marketCap.innerText=e.market_cap

        let high24H=document.createElement("td")
        high24H.innerText=e.high_24h
        let low24H=document.createElement("td")
        low24H.innerText=e.low_24h

        div.append(img,coinName)
        td.append(div)
        tr.append(td,price,marketCap,high24H,low24H)
        tbody.append(tr)
    })
   

}