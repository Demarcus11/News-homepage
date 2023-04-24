# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop View](https://drive.google.com/uc?export=view&id=1BPxLh31MpoEfNROx93teus7EFW_v_mq4)

![Mobile View View](https://drive.google.com/uc?export=view&id=1_Dh_hIZ8N132P6n0buk6n937zNU3CXc0)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/News-homepage.git)
- Live Site URL: [Live](https://demarcus11.github.io/News-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

visually hidden class to make image hamburger menus more accessible

```css
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Using min() function with width to create a container class

```css
.container {
  --max-width: 70rem;
  --padding: 1rem;

  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
}
```

Using inset property to shorthand position (auto to omitted values), Using a background image for the hamburger menu instead of having the image in the HTML

```css
@media (max-width: 600px) {
  .primary-nav {
    display: none;

    position: fixed;
    inset: 0 0 0 auto;
    width: 60%;
    background-color: #fff;
    padding-inline: var(--mobile-nav-padding-inline);
  }

  body[data-overlay]::before {
    content: "";
    position: fixed;
    inset: 0;
    background-color: rgb(0, 0, 0, 0.4);
  }

  .nav-list {
    --gap: 2rem;

    flex-direction: column;
    align-items: start;
    margin-top: var(--mobile-nav-spacing-top);
  }

  .nav-list a {
    font-weight: var(--fw-bold);
  }

  .primary-nav[data-visible] {
    display: block;
    position: fixed;
  }

  .mobile-nav-toggle {
    position: fixed;
    display: block;
    cursor: pointer;
    background: transparent;
    border: 0;
    z-index: 1;
    right: 2rem;
    width: 2rem;
    aspect-ratio: 1;

    background-image: url("assets/images/icon-menu.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    background-image: url("assets/images/icon-menu-close.svg");
  }
}
```

Using focus-within selector on buttons to change inside a button when focusing

```css
.button:focus-within {
  background-color: var(--clr-nuetral-900);
}
```

Using grid-auto-flow and grid-auto-columns to create flexible grid columns

```css
@media (min-width: 600px) {
  .articles {
    grid-auto-flow: column;
    grid-auto-columns: 3fr;
  }
}
```

Accessible nav using data-attributes and aria

```js
const navToggle = document.querySelector(".mobile-nav-toggle"),
  primaryNav = document.querySelector(".primary-nav"),
  body = document.querySelector("body"),
  primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  body.toggleAttribute("data-overlay");
});
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)
