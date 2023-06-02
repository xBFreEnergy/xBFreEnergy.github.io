function loadNews() {
        fetch('/assets/data/news.json')
          .then(response => response.json())
          .then(data => {
              if (data.length === 0) {
                  const element = document.querySelector('[data-md-component="announce"]');
                  element.style.display = 'none'
              } else {
                  const new_container = document.getElementById("news-container")
                  data.forEach((item) => {
                      let a = document.createElement('a');
                      let atext = document.createTextNode(`${item.new}`);
                      a.setAttribute('href', `${item.url}`);
                      a.setAttribute('class', "new-text");
                      a.appendChild(atext);
                      let li = document.createElement("li");
                      li.appendChild(a);
                      new_container.appendChild(li);
                  })

                  // get variables
                  const root = document.documentElement;
                  getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
                  let marqueeContent = document.querySelector("ul.marquee-content");
                  root.style.setProperty("--marquee-elements", marqueeContent.children.length);
                  let width = 0
                  for (let i = 0; i < marqueeContent.children.length; i++) {
                      width = width + marqueeContent.children[i].offsetWidth
                  }
                  let viewportWidth = window.innerWidth;

                  if (width / viewportWidth < 1) {
                      root.style.setProperty("--marquee-traslation", 100);
                  } else {
                      root.style.setProperty("--marquee-traslation", (width + 10 * marqueeContent.children.length) / marqueeContent.offsetWidth * 100);
                  }
                  root.style.setProperty("--marquee-animation-duration", 20);
              }
          })
      }

document.addEventListener("DOMContentLoaded", loadNews);