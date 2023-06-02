function loadSponsors() {
    const element = document.querySelector('[data-md-component="xbfree-sponsor"]');
    if (element) {
        fetch("../assets/data/sponsors.json")
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

                const ks = ["gold", "silver", "bronze", "open-source", "donations"]
                ks.forEach((item) => {
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
                                si.setAttribute("src", `${avatar}`)
                                si.setAttribute("style", `height: ${data[item]["height"]}`)
                                sa.appendChild(si)
                            })
                        }
                    }
                })
            })
    }
}

document.addEventListener("DOMContentLoaded", loadSponsors);