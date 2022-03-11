/////////////
// Version 1 menuLinks
/////////////

// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

/////////////
// Version 2 menuLinks
/////////////

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

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

let subMenuEl = document.querySelector("#sub-menu")

subMenuEl.style.height = "100%"

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

subMenuEl.setAttribute("class", "flex-around")

subMenuEl.style.position = "absolute"

subMenuEl.style.top = "0"

let showingSubMenu = false;

let topMenuLinks = topMenuEl.children
console.log(topMenuLinks)

topMenuEl.addEventListener("click", function(e) {

  e.preventDefault();

  if (e.target.tagName !== "A") {
    return
  } else {
    console.log(e.target.innerHTML);
  };

// console.dir(e.target)

  if (e.target.className === "active") {
    // 1. remove the "active" class from the clicked <a> element.
    e.target.className.remove("active");
    // 2. set the showingSubMenu to false
    showingSubMenu = false;
    // 3. Set the CSS top property of the subMenuEl to 0
    subMenuEl.style.top = "0";
    // 4. return
    return
  }
  // 5.4 Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the "active" class exists or not.
  for(let a of topMenuLinks){
    a.className = "";
    // console.log(a.className)
    // console.log(topMenuLinks)
  } ;

  // 5.5 Next the event listener should add a class name of active to the <a> element that was clicked
  e.target.classList.add("active");
  
  // 5.6 Set showingSubMenuto trueif the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
  if(e.target.classList === "sub-links"){
  showingSubMenu = "true"
  }  

})
