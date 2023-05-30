/*
const allLinks = document.getElementsByTagName("a");

const filterLinks = Array.from(allLinks).filter((allLinks) =>
{
  return allLinks.href.includes(".zip") && allLinks.href.includes("@");
});

filterLinks.forEach((allLinks) => {
  console.log(allLinks.href);
});

filterLinks.forEach((allLinks) => {
  const warning = document.createElement("span");
  warning.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16" style="fill:red;">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  `;
  allLinks.parentNode.insertBefore(warning, allLinks.nextSibling);
  allLinks.href = "javascript:void(0)";
  allLinks.style.pointerEvents = "none";
  allLinks.style.color = "red";
});

*/

// New code

// Icon exclamation triangle
const warning = 
  `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  fill="currentColor" class="bi bi-exclamation-triangle-fill" 
  viewBox="0 0 16 16" style="fill:red;">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 
    1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 
    .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 
    5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg><span>`;

function processLinks() {
  // We obtain all the links
  let allLinks = document.links;

  // Iterate over the links to select those containing ".zip" and "@".
  for(let i=0; i<allLinks.length; i++) {
    let link = allLinks[i].href;
    if(link.includes(".zip") && link.includes("@")) {
      
      allLinks[i].href = "javascript:void(0)"; // Disable links
      allLinks[i].style.pointerEvents = "none"; // Disables clicks
      allLinks[i].style.color = "red"; // Sets the link color to red

      // Includes the exclamation icon
      allLinks[i].insertAdjacentHTML('afterend', warning)
    }
  }
}

// We execute the function when loading the page
processLinks();

// We create an instance of MutationObserver
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // We run the function to process the new links
    processLinks();
  });    
});

// Configure the observer options
let config = { childList: true, subtree: true };

// We start the observation of the target node
observer.observe(document.body, config);

