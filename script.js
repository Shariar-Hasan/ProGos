// after the page load event
document.addEventListener("DOMContentLoaded", () => {
  // All selectors
  const cardWrapper = document.querySelector("#cardsWrapper");
  dataset.forEach((data) => {
    let li = document.createElement("li");
    li.classList.add("cards_item");
    li.innerHTML = `
          <div class="card">
            <div class="card_image">
              <img src=${data.cardImagePath}  title="Added by ${
      data.addedBy
    }" alt=${data.title} style="padding-bottom: 0" />
            </div>
            <div class="card_content">
            <h4 class="text-center">${data.title}</h4>
              <div class="box">
                ${data.sizes
                  .map(
                    (size) =>
                      `<a
                    href=${size.folderPath + data.slug + "." + size.format}
                    style="text-decoration: none"
                    title=${size.title}
                    download=${"ProGos-" + data.slug + "-" + size.title}
                    >
                    <button class="btn card_btn">${size.title}</button>
                  </a>`
                  )
                  .join("")}
              </div>
            </div>
          </div>
    `;
    cardWrapper.appendChild(li);
  });
});

// before the page load event
// document.addEventListener("load", () => {});
