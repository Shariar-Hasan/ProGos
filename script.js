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
              <img src=${data.cardImagePath} alt=${data.title} title=${
      data.title
    } style="padding-bottom: 2.8rem" />
            </div>
            <div class="card_content">
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
