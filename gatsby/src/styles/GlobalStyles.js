import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #10272E;
        --green: #8CC63F;
        --dark-green: #7CAD3B;
        --gray: #FCFBFB;
        --dark-gray: #9B9B9B;
        font-size: 18px;
        @media only screen and (max-width: 650px) {
          font-size: 16px;
        }
    }
  /* Fixes the image in hero seciton */
  .styled-image {
    margin-top: -4rem;
    @media only screen and (min-width: 650px) {
      position: absolute !important;
      bottom: 0;
      width: 100%;
      height: auto;
    }
  }
    /* Position and sizing of burger button */
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  right: 24px;
  top: 24px;
}
 
/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: var(--blue);
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}
 
/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}
 
/* Color/shape of close button cross */
.bm-cross {
  background: var(--blue);
}
 
/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}
 
/* General sidebar styles */
.bm-menu {
  background: #fff;
  padding: 2.5em .5em 0;
  font-size: 1.15em;
}
 
/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}
 
/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
}
 
/* Individual item */
.bm-item {
  display: inline-block;
}
 
/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`
export default GlobalStyles;