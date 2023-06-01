function loadSponsors() {
    fetch("sponsors.json")
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                const element = document.querySelector('[data-md-component="xbfree-sponsor"]');
                element.style.display = 'none'
                return
            }

            const element = document.querySelector('[data-md-component="xbfree-sponsor"]');
            let article_sponsor = document.createElement("div");
            article_sponsor.setAttribute("class", "md-content__inner md-typeset")
            element.appendChild(article_sponsor)

            const premium_sponsor = document.createElement("div");
            premium_sponsor.setAttribute("class", "mdx-premium")
            article_sponsor.appendChild(premium_sponsor)

            // console.log(data["gold"]["sponsors"])
            // // Gold sponsors
            // if (data["gold"]["sponsors"].length !== 0) {
            //     const gold_text = document.createElement("div");
            // }
            const ks = ["gold", "silver", "bronze", "open-source", "donations"]
            ks.forEach((item) => {
              // console.log(data[item])
                if (item === "donations") {
                    if (Object.keys(data[item].sponsors).length > 0) {
                        let pa = document.createElement("p")
                        let s = document.createElement('strong');
                        let st = document.createTextNode(`${data[item].desc}`)
                        pa.appendChild(s)
                        s.appendChild(st)
                        let sponsorship = document.createElement("div")
                        sponsorship.setAttribute("class", "mdx-premium mdx-sponsorship")
                        sponsorship.appendChild(pa)
                        article_sponsor.appendChild(sponsorship)
                        let sponsorship__list = document.createElement("div")
                        sponsorship__list.setAttribute("class", "mdx-sponsorship__list")
                        sponsorship.appendChild(sponsorship__list)

                        data[item].sponsors.forEach((sponsor) => {
                            let spit = document.createElement("a")
                            spit.setAttribute("class", "mdx-sponsorship__item")
                            spit.setAttribute("title", `@${sponsor}`)
                            let spi = document.createElement("img")
                            spi.setAttribute("src", `https://github.com/${sponsor}.png?size=30`)
                            spit.appendChild(spi)
                            sponsorship__list.appendChild(spit)
                        })
                    }
                } else {
                    if (Object.keys(data[item].sponsors).length > 0) {
                        let pa = document.createElement("p")
                        let s = document.createElement('strong');
                        let st = document.createTextNode(`${data[item].desc}`)
                        pa.appendChild(s)
                        s.appendChild(st)
                        premium_sponsor.appendChild(pa)

                        console.log(Object.keys(data[item].sponsors), 'sponsors')
                        let skeys = Object.keys(data[item].sponsors)
                        let sp = document.createElement("p")
                        premium_sponsor.appendChild(sp)
                        skeys.forEach((sk) => {
                            let sa = document.createElement("a")
                            sa.setAttribute("target", "_blank")
                            sa.setAttribute("title", `${sk}`)
                            sa.setAttribute("href", `${data[item].sponsors[sk]["href"]}`)
                            sp.appendChild(sa)

                            let si = document.createElement("img")
                            si.setAttribute("alt", `${sk}`)
                            var avatar
                            if (Object.keys(data[item].sponsors[sk]).includes("avatar")) {
                                avatar = data[item].sponsors[sk]["avatar"]
                            } else {
                                let imgn = sk.toLowerCase().replace(" ", "-")
                                avatar = `https://raw.githubusercontent.com/squidfunk/mkdocs-material/master/.github/assets/sponsors/sponsor-${imgn}.png`
                            }
                            si.setAttribute("src",`${avatar}`)
                            si.setAttribute("style",`height: ${data[item]["height"]}`)
                            sa.appendChild(si)
                        })

                        // let sponsorship = document.createElement("div")
                        // sponsorship.setAttribute("class", "mdx-sponsorship")
                        // article_sponsor.appendChild(sponsorship)
                        // let sponsorship__list = document.createElement("div")
                        // sponsorship__list.setAttribute("class", "mdx-sponsorship__list")
                        // sponsorship.appendChild(sponsorship__list)
                        //
                        // data[item].sponsors.forEach((sponsor) => {
                        //     let spit = document.createElement("a")
                        //     spit.setAttribute("class", "mdx-sponsorship__item")
                        //     spit.setAttribute("title", `@${sponsor}`)
                        //     let spi = document.createElement("img")
                        //     spi.setAttribute("src", `https://github.com/${sponsor}.png?size=30`)
                        //     spit.appendChild(spi)
                        //     sponsorship__list.appendChild(spit)
                        // })




                    }
                }
            })

            // data.forEach((item) => {
            //   console.log(Object.keys(item))
            //
            //     if (Object.keys(item.sponsors).length > 0 && item.type !== "donations") {
            //         let pa = document.createElement("p")
            //         let s = document.createElement('strong');
            //         let st = document.createTextNode(`${item.desc}`)
            //         pa.appendChild(s)
            //         s.appendChild(st)
            //         premium_sponsor.appendChild(pa)
            //     }
            //
            //
            // })



            // const sponsors_container = document.querySelector('[data-md-component="xbfree-sponsor"]');
            // data.forEach((item) => {
            //     console.log(item)
            //   let a = document.createElement('a');
            //   let atext = document.createTextNode(`${item.new}`);
            //   a.setAttribute('href', `${item.url}`);
            //   a.setAttribute('class', "new-text");
            //   a.appendChild(atext);
            //   let li = document.createElement("li");
            //   li.appendChild(a);
            //   new_container.appendChild(li);
            // })

            // // get variables
            // const root = document.documentElement;
            // getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
            // let marqueeContent = document.querySelector("ul.marquee-content");
            // root.style.setProperty("--marquee-elements", marqueeContent.children.length);
            // let width = 0
            // for(let i=0; i<marqueeContent.children.length - 1; i++) {
            //   width = width + marqueeContent.children[i].offsetWidth
            // }
            // let viewportWidth = window.innerWidth;
            //
            // if (width/viewportWidth < 1) {
            //     root.style.setProperty("--marquee-traslation", 100);
            // } else {
            //     root.style.setProperty("--marquee-traslation", width/viewportWidth * 100 +50);
            // }
            // root.style.setProperty("--marquee-animation-duration", 20 );
        })
}

/**
 * HTML API: If current script has container(s) specified, initialise Termynal.
 */
loadSponsors()
console.log(document.currentScript.hasAttribute('data-termynal-container'))
// if (document.currentScript.hasAttribute('data-termynal-container')) {
//     const containers = document.currentScript.getAttribute('data-termynal-container');
//     containers.split('|')
//         .forEach(container => new Termynal(container))
// }