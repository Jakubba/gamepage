import React from 'react';
import styles from './CategoryBlok.module.scss';

import imgKnight from './../../assets/images/category/categoryKnights.png';
import imgDemons from './../../assets/images/category/categoryDemons.png';
import imgHeadHunters from './../../assets/images/category/categoryHeadHunters.png';
import imgWizards from './../../assets/images/category/categoryWizards.png';
import imgOrks from './../../assets/images/category/categoryOrks.png';
import imgDragons from './../../assets/images/category/categoryDragons.png';
import imgNecromancy from './../../assets/images/category/categoryNecromancy.png';
import imgDarkLords from './../../assets/images/category/categoryDarkLords.png';
import imgBackground from './../../assets/images/backgroundForest.png';

export const CategoryBlok = () => {
  return (
    <div className={styles.categoryBlok}>
        <picture className={styles.categoryBackground}>
            <img className={styles.categoryBackgroundImg} src={imgBackground} alt="" />
        </picture>
      <h2 className={styles.categoryTitle}>Latest Features & Announcements</h2>
      <div className={styles.categoryList}>
        <a href='#' className={styles.categoryItem}>
          <img src={imgDragons} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Dragons</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgDemons} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Demons</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgOrks} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Orks</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgNecromancy} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Necromancy</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgHeadHunters} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Head Hunters</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgKnight} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Knights</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgWizards} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Wizards</h4>
        </a>
        <a href='#' className={styles.categoryItem}>
          <img src={imgDarkLords} className={styles.categoryItemImg}></img>
          <h4 className={styles.categoryItemTitle}>Dark lords</h4>
        </a>
      </div>
    </div>
  );
};
