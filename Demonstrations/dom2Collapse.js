// try to do everything possible with HTML, after that, everything possible woth CSS, and, only after that, use javascript
const bt01 = document.querySelector("#bt01");
// direct access
//const collapsibleContent = document.querySelectorAll("section")[0];
// access by the family 
const collapsibleContent = bt01.parentElement.nextElementSibling;

//console.log(collapsibleContent);

bt01.addEventListener("click", function () {
    // let theStyles = window.getComputedStyle(collapsibleContent);
    // console.log(theStyles);
    //let displayValue = window.getComputedStyle(collapsibleContent).getPropertyValue("display");
    // console.log(displayValue);
    /*
    if (collapsibleContent.style.display === "block") {
        collapsibleContent.style.display = "none";
    } else {
        collapsibleContent.style.display = "block";
    }
    */
   /*
    if (collapsibleContent.style.display === "none") {
        collapsibleContent.style.display = "block";
    } else {
        collapsibleContent.style.display = "none";
    }
    */
   /*
    if (displayValue === "none") {
        collapsibleContent.style.display = "block";
    } else {
        collapsibleContent.style.display = "none";
    }
    */
   /*
    if (collapsibleContent.classList.contains("hide")) {
        collapsibleContent.classList.remove("hide")
        bt01.textContent = "Show";
        //collapsibleContent.removeAttribute("class");
    } else {
        collapsibleContent.classList.add("hide");
        bt01.textContent = "Hide";
        //collapsibleContent.setAttribute("class", "hide");
    }
    */
   
   collapsibleContent.classList.toggle("hide");
   /*
   if (collapsibleContent.classList.contains("hide")) {
    this.textContent = "Show";
   } else {
    this.textContent = "Hide";
   }
    */

   this.textContent = (collapsibleContent.classList.contains("hide")) ? "Show" : "Hide";   
});