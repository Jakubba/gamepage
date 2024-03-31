import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import newLogo from './../../assets/images/logoCastle.png';
import facebookIcons from './../../assets/icons/facebook.svg';
import discordIcons from './../../assets/icons/discord-svgrepo-com.svg';

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuShow = () => {
    setIsMenuActive(!isMenuActive);

    const btnHamMenu = document.querySelector(`.${styles.hamMenuBtn}`);
    btnHamMenu.classList.toggle(`${styles.openMenu}`);

    const menuList = document.querySelector(`.${styles.navbarListMainCategory}`);
    menuList.classList.toggle(`${styles.activeListMenu}`);
    if (!isMenuActive) {
      const subcategories = document.querySelectorAll(`.${styles.navbarListSubcategory}`);
      subcategories.forEach((subcategory) => {
        subcategory.classList.remove(`${styles.activeListSubcategory}`);
      });
    }
  };
  const toggleActiveClass = (event) => {
    const subCategory = event.currentTarget.parentElement.querySelector(
      `.${styles.navbarListSubcategory}`
    );
    subCategory.classList.toggle(`${styles.activeListSubcategory}`);
  };

  const closeSubCategory = (event) => {
    const subCategory = event.currentTarget.closest(`.${styles.navbarListSubcategory}`);
    if (subCategory) {
      subCategory.classList.remove(styles.activeListSubcategory);
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarBox}>
          <div className={styles.logoContainer}>
            <img src={newLogo} alt='logo' />
          </div>
          <nav className={styles.navbarListMainCategory}>
            <ul>
              <li>
                <span
                  className={styles.navbarListMainCategoryTitle}
                  onClick={toggleActiveClass}
                >
                  Products
                </span>
                <div className={styles.navbarListSubcategory}>
                  <ul>
                    <button
                      className={styles.btnCloseListItemSubcategory}
                      onClick={closeSubCategory}
                    >
                      X
                    </button>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Products</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Where to Start</span>
                        </li>
                        <li>
                          <span>Tablettop RPG</span>
                        </li>
                        <li>
                          <span>Digital Games</span>
                        </li>
                        <li>
                          <span>Board & Card Games</span>
                        </li>
                        <li>
                          <span>All</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Partners</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Miniatures</span>
                        </li>
                        <li>
                          <span>Merchandise</span>
                        </li>
                        <li>
                          <span>Fiction</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Support</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Customer Support</span>
                        </li>
                        <li>
                          <span>Store & Event Locator</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span
                  className={styles.navbarListMainCategoryTitle}
                  onClick={toggleActiveClass}
                >
                  Gameplay
                </span>
                <div className={styles.navbarListSubcategory}>
                  <ul>
                    <button
                      style={{ background: 'red' }}
                      className={styles.btnCloseListItemSubcategory}
                      onClick={closeSubCategory}
                    >
                      X
                    </button>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>
                        Getting started
                      </span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>What is D&D</span>
                        </li>
                        <li>
                          <span>How to Play</span>
                        </li>
                        <li>
                          <span>Choosing a Race</span>
                        </li>
                        <li>
                          <span>Choosing a Class</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Resourse</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Charakter Sheets</span>
                        </li>
                        <li>
                          <span>Basic Rules</span>
                        </li>
                        <li>
                          <span>Digital Tools</span>
                        </li>
                        <li>
                          <span>DMsGuild</span>
                        </li>
                        <li>
                          <span>For Educators</span>
                        </li>
                        <li>
                          <span>Stay at Home/Play at Home</span>
                        </li>
                        <li>
                          <span>Systems Reference Document</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span
                  className={styles.navbarListMainCategoryTitle}
                  onClick={toggleActiveClass}
                >
                  Story
                </span>
                <div className={styles.navbarListSubcategory}>
                  <ul>
                    <button
                      className={styles.btnCloseListItemSubcategory}
                      onClick={closeSubCategory}
                    >
                      X
                    </button>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>
                        Current Stories
                      </span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>The Wild Beyond the Witchlight </span>
                        </li>
                        <li>
                          <span>Icewind Dale: Rime of the Frostmaiden</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>
                        Story Archive
                      </span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Descent Into Avernus</span>
                        </li>
                        <li>
                          <span>Waterdeep</span>
                        </li>
                        <li>
                          <span>Tomb of Annihilation</span>
                        </li>
                        <li>
                          <span>Curse of Strahd</span>
                        </li>
                        <li>
                          <span>Storm King's Thunder</span>
                        </li>
                        <li>
                          <span>Rage of Demons</span>
                        </li>
                        <li>
                          <span>Elemental Evil</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Lore</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>The Legend of Drizzt</span>
                        </li>
                        <li>
                          <span>Notable Figures</span>
                        </li>
                        <li>
                          <span>Monsters</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span
                  className={styles.navbarListMainCategoryTitle}
                  onClick={toggleActiveClass}
                >
                  Events
                </span>
                <div className={styles.navbarListSubcategory}>
                  <ul>
                    <button
                      className={styles.btnCloseListItemSubcategory}
                      onClick={closeSubCategory}
                    >
                      X
                    </button>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>
                        Events & Conventions
                      </span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>All Events</span>
                        </li>
                        <li>
                          <span>Virtual Play Weekends</span>
                        </li>
                        <li>
                          <span>Extra Life</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>
                        Adventurers League
                      </span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Overview</span>
                        </li>
                        <li>
                          <span>DM Info</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Community</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Discord</span>
                        </li>
                        <li>
                          <span>Facebook</span>
                        </li>
                        <li>
                          <span>Twitch</span>
                        </li>
                        <li>
                          <span>Youtube</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span
                  className={styles.navbarListMainCategoryTitle}
                  onClick={toggleActiveClass}
                >
                  Articles
                </span>
                <div className={styles.navbarListSubcategory}>
                  <ul>
                    <button
                      className={styles.btnCloseListItemSubcategory}
                      onClick={closeSubCategory}
                    >
                      X
                    </button>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Articles</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>News</span>
                        </li>
                        <li>
                          <span>D&D Studio Blog</span>
                        </li>
                        <li>
                          <span>Sage Advice</span>
                        </li>
                        <li>
                          <span>Unearthed Arcana</span>
                        </li>
                        <li>
                          <span>All</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Galleries</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Wallpaper</span>
                        </li>
                        <li>
                          <span>Comics</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Support</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Customer Support</span>
                        </li>
                        <li>
                          <span>Store & Event Locator</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span
                  className={styles.navbarListMainCategoryTitle}
                  onClick={toggleActiveClass}
                >
                  Media
                </span>
                <div className={styles.navbarListSubcategory}>
                  <ul>
                    <button
                      className={styles.btnCloseListItemSubcategory}
                      onClick={closeSubCategory}
                    >
                      X
                    </button>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>
                        Livestreams
                      </span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Black Dice Society</span>
                        </li>
                        <li>
                          <span>Tablettop RPG</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className={styles.navbarListSubcategoryTitle}>Podcasts</span>
                      <ul className={styles.navbarListItemSubcategory}>
                        <li>
                          <span>Dragon Talk</span>
                        </li>
                        <li>
                          <span>Dungeon Delve</span>
                        </li>
                        <li>
                          <span>All</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <button className={styles.hamMenuBtn} onClick={menuShow}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={styles.navbarListSocialMedia}>
            <li>
              <img src={facebookIcons}></img>Instagram
            </li>
            <li>
              <img src={discordIcons}></img>Discord
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
