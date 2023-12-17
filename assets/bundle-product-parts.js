const showMoreBtns = document.querySelectorAll(".product-parts-items .part-info__accordion-header");

if (showMoreBtns.length) {
  showMoreBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const parent = e.currentTarget.parentNode;
      const content = parent.querySelector('.part-info__accordion-content');
        
      content.classList.toggle("hide");
    });
  });
}