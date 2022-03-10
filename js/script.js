var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


let mainEl = document.querySelector("main") // returns an array (really a node list)

console.log(mainEl)
 
// mainEl[0] 
mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = "SEI Rocks!"
console.log(mainEl)

mainEl.setAttribute("class", "flex-ctr")

let topMenuEl = document.querySelector("#top-menu")

console.log(topMenuEl)

topMenuEl.style.height = ("100%")

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.setAttribute("class", "flex-around")

for (const texter of menuLinks) {
    const links = document.createElement("a")
    links.setAttribute("href", texter.href)
    links.innerHTML = texter.text
    topMenuEl.append(links)
}