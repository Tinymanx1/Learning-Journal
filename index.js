const viewMoreBtn = document.getElementById("view-more-btn")

viewMoreBtn.addEventListener("click", function() {
    for (card of document.querySelectorAll("#extra")){
        card.classList.remove("hidden")
    }
    viewMoreBtn.style.display = "none"
})


