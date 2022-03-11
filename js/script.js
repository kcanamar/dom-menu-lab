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

topMenuEl.addEventListener("click", function(e) {

  e.preventDefault();

  if (e.target.tagName !== "A") {
    return
  } else {
    console.log(e.target.innerHTML);
  };

  
  if (e.target.className === "active") {
    e.target.className.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return
  }
  
  for(let a of topMenuLinks){
    a.className = "";
    // console.log(a.className)
    // console.log(topMenuLinks)
  } ;

  e.target.classList.add("active");
  
  // 5.6 Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
   
  // console.dir("this is the event target", e.target)
  // console.log(`this is ${topMenuLinks}`)

  let aIndex = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);

  // console.log(`aIndex ${aIndex}`);
  if(menuLinks[aIndex].subLinks !== undefined){
  showingSubMenu = true
  } else { showingSubMenu = false; }

  // Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7

  let link = menuLinks[aIndex] 

  // 5.7 
  let buildSubMenu = function(link) {
     subMenuEl.style.top = "100%" 
    }

  if (showingSubMenu === true) {
    buildSubMenu(link)
    // console.log("hurray sub link")
  } else { subMenuEl.style.top = 0}
})