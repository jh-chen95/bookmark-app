const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

// Show modal, focus on input
function showModal() {
    modal.classList.add("show-modal");
    websiteNameEl.focus();
}


// Modal event listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
    // Close modal
    modal.classList.remove("show-modal");
});
window.addEventListener("click", (event) => {
    event.target === modal ? modal.classList.remove("show-modal") : false
});

// Validate form
function validate(nameValue, urlValue) {
    const expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
    if (!nameValue || !urlValue) {
        alert("Please submit values for both fields.");
        return false;
    }
    if (!urlValue.match(expression)) {
        alert("Please provide a valid web address");
        return false;
    }
    // Valid
    return true;
}

// Handle data from form
function storeBookmark(event) {
    event.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!urlValue.includes("http://") && !urlValue.includes("https://")) {
        urlValue = `https://${urlValue}`;
    }
    
    if (!validate(nameValue, urlValue)) {
        return false;
    }
}

// Event listener
bookmarkForm.addEventListener("submit", storeBookmark);