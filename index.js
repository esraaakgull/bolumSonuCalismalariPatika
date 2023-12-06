const hobbiesDiv = document.getElementById("hobbiesDiv");
let hobbies = {
    Movies: [
        {
            title: "In Time",
            link: "https://www.google.com/search?q=in+time&oq=in+t&aqs=chrome.0.35i39i355i512i650j46i39i512i650j69i60l3j69i65l3.1220j0j7&sourceid=chrome&ie=UTF-8"
        },
        {
            title: "The Shawshank Redemption",
            link: "https://www.google.com/search?q=the+shawshank+redemption&sca_esv=588364199&sxsrf=AM9HkKmj91skO9EOcXgoUcfsMi2q3-7-IQ%3A1701870374531&ei=JntwZbP2H6G8xc8PyfKjsAM&gs_ssp=eJzj4tDP1Tcwz8orMWD0kijJSFUozkgsB-K8bIWi1JTU3IKSzPw8ANYsDKQ&oq=the+shaws&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXRoZSBzaGF3cyoCCAAyCBAuGMsBGIAEMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMhcQLhjLARiABBiXBRjcBBjeBBjgBNgBAUj3GVAAWIMQcAB4AZABAJgBzgGgAYYLqgEFMC44LjG4AQPIAQD4AQHCAgoQIxiABBiKBRgnwgIMECMYgAQYigUYExgnwgIKEC4YgAQYigUYQ8ICChAAGIAEGIoFGEPCAgUQABiABMICBRAuGIAEwgILEC4YgAQYxwEYrwHCAgQQIxgnwgILEC4YgAQYxwEY0QPCAggQLhiABBjLAcICFxAuGIAEGMsBGJcFGNwEGN4EGOAE2AEB4gMEGAAgQYgGAboGBggBEAEYFA&sclient=gws-wiz-serp"
        },
        {
            title: "Interstellar",
            link: "https://www.google.com/search?q=interstellar&sca_esv=588364199&sxsrf=AM9HkKn2bT4x_mFdVoYeT_7aRngAV5XPyA%3A1701870405322&ei=RXtwZdWdE-eMxc8PkoG0iAc&oq=intersrt&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGludGVyc3J0KgIIADIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIHEAAYgAQYCjIKEAAYgAQYigUYQzIHEAAYgAQYCjIKEAAYgAQYigUYQzIHEAAYgAQYCjIKEAAYgAQYigUYQzIHEAAYgAQYCjIHEAAYgAQYCkiXEVAAWKIHcAB4AZABAJgB4QGgAagLqgEFMC41LjO4AQPIAQD4AQHCAgoQLhiABBiKBRgnwgIKECMYgAQYigUYJ8ICDBAjGIAEGIoFGBMYJ8ICChAuGIAEGIoFGEPCAgUQLhiABMICBRAAGIAEwgIXEC4YgAQYigUYlwUY3AQY3gQY4ATYAQHCAgoQLhhDGIAEGIoFwgILEC4YgAQYxwEY0QPCAhkQLhiABBiKBRhDGJcFGNwEGN4EGOAE2AEBwgIIEAAYgAQYywHCAggQLhiABBjLAcICDhAuGK8BGMcBGMsBGIAEwgIOEC4YgAQYywEYxwEY0QPCAgoQABiABBjLARgKwgIHEC4YgAQYCsICGRAuGEMYgAQYigUYlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBugYGCAEQARgU&sclient=gws-wiz-serp"
        }
    ],
    Series: [
        {
            title: "Prison Break",
            link: "https://www.google.com/search?q=prison+break&oq=prison+break&aqs=chrome.0.0i271j46i512j0i512l5j46i512j0i512l2.4875j0j9&sourceid=chrome&ie=UTF-8"
        },
        {
            title: "How I Met Your Mother",
            link: "https://www.google.com/search?q=himym&sca_esv=588364199&sxsrf=AM9HkKlXe-3WARpXcj6rHAxOGaIJHffH1Q%3A1701870441728&ei=aXtwZciFLJOpxc8PgLqbmA0&ved=0ahUKEwiI3oe5-fqCAxWTVPEDHQDdBtMQ4dUDCBA&uact=5&oq=himym&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWhpbXltMgoQIxiABBiKBRgnMgwQIxiABBiKBRgTGCcyCBAuGMsBGIAEMggQABiABBjLATIIEC4YgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIXEC4YywEYgAQYlwUY3AQY3gQY4ATYAQFIkg1QAFi3CXAAeAGQAQCYAb0BoAHEBqoBAzAuNbgBA8gBAPgBAcICBRAAGIAEwgILEC4YgAQYxwEY0QPCAgoQLhiABBiKBRhDwgIUEC4YgAQYxwEYrwEYmAUYngUYmQXCAgsQLhiABBjHARivAcICBRAuGIAEwgIHEAAYgAQYCsICGRAuGIAEGIoFGEMYlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBugYGCAEQARgU&sclient=gws-wiz-serp"
        },
        {
            title: "Lupin",
            link: "https://www.google.com/search?q=lupin&oq=lupin&aqs=chrome..69i57j0i271l2.707j0j9&sourceid=chrome&ie=UTF-8"
        },
        {
            title: "La Casa De Papel",
            link: "https://www.google.com/search?sca_esv=588364199&sxsrf=AM9HkKkua79KekyaHWc6IIBQR3Re3Uau8g:1701870545176&q=la+casa+de+papel&spell=1&sa=X&ved=2ahUKEwjv17Hq-fqCAxU3Z_EDHTQOCZ8QBSgAegQICRAC&biw=627&bih=615&dpr=1"
        }
    ],
    Books: [
        {
            title: "Körlük",
            link: "https://www.google.com/search?q=k%C3%B6rl%C3%BCk+kitab%C4%B1&sca_esv=588364199&sxsrf=AM9HkKmHYrgv9GeKXw0Ytt6H5L1Q_Y6wFA%3A1701870566857&ei=5ntwZaXwM6--xc8P2sym4AE&ved=0ahUKEwil-9z0-fqCAxUvX_EDHVqmCRwQ4dUDCBA&uact=5&oq=k%C3%B6rl%C3%BCk+kitab%C4%B1&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGvDtnJsw7xrIGtpdGFixLFIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEA4gMEGAAgQQ&sclient=gws-wiz-serp"
        },
        {
            title: "Bana İkimizi Anlat",
            link: "https://www.google.com/search?q=k%C3%B6rl%C3%BCk+kitab%C4%B1&sca_esv=588364199&sxsrf=AM9HkKmHYrgv9GeKXw0Ytt6H5L1Q_Y6wFA%3A1701870566857&ei=5ntwZaXwM6--xc8P2sym4AE&ved=0ahUKEwil-9z0-fqCAxUvX_EDHVqmCRwQ4dUDCBA&uact=5&oq=k%C3%B6rl%C3%BCk+kitab%C4%B1&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGvDtnJsw7xrIGtpdGFixLFIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEA4gMEGAAgQQ&sclient=gws-wiz-serp"
        },
        {
            title: "Hayat Kaybettiğin Yerden Başlar",
            link: "https://www.google.com/search?q=hayat+kaybetti%C4%9Fin+yerden+ba%C5%9Flar&oq=hayat+kaybetti%C4%9Fin+yerden+ba%C5%9Flar&aqs=chrome.0.69i59j0i19i512l9.7275j0j9&sourceid=chrome&ie=UTF-8"
        },
        {
            title: "Genç Bir Doktorun Anıları",
            link: "https://www.google.com/search?q=gen%C3%A7+bir+doktorun+an%C4%B1lar%C4%B1+kitab%C4%B1&sca_esv=588364199&sxsrf=AM9HkKn4uphIqskDbYQsghyOOErUfYAyxg%3A1701870629066&ei=JXxwZePMA4KhwPAPu9OrgAU&ved=0ahUKEwij87GS-vqCAxWCEBAIHbvpClAQ4dUDCBA&uact=5&oq=gen%C3%A7+bir+doktorun+an%C4%B1lar%C4%B1+kitab%C4%B1&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGdlbsOnIGJpciBkb2t0b3J1biBhbsSxbGFyxLEga2l0YWLEsTIIEAAYgAQYywEyBhAAGBYYHjIGEAAYFhgeSMkPUIEDWPgNcAF4AZABAJgB5QGgAf8IqgEFMC42LjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICDhAAGOQCGNYEGLAD2AEBwgIZEC4YgAQYigUYQxjHARjRAxjIAxiwA9gBAsICExAuGIAEGIoFGEMYyAMYsAPYAQLCAhYQLhiABBiKBRhDGNQCGMgDGLAD2AECwgIIEC4YgAQYywHCAhcQLhiABBjLARiXBRjcBBjeBBjgBNgBA8ICCBAAGAgYHhgN4gMEGAAgQYgGAZAGELoGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp"
        }
    ]
}

Object.keys(hobbies).forEach(hobby => {
    const elementOl = document.createElement("ol");
    const elementLi = document.createElement("li");
    elementLi.innerText = hobby;
    elementOl.appendChild(elementLi)
    const elementUl = document.createElement("ul");
    for (let j = 0; j < hobbies[hobby].length; j++) {
        const innerElementLi = document.createElement("li");
        const innerLink = document.createElement("a");
        innerLink.href = hobbies[hobby][j].link; // Set the href attribute for inner links
        innerLink.textContent = hobbies[hobby][j].title; // Set inner link text content
        innerElementLi.appendChild(innerLink); // Append inner anchor element to the list item
        elementUl.appendChild(innerElementLi);
    }
    elementOl.appendChild(elementUl)
    hobbiesDiv.appendChild(elementOl);
})