import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './MainSlider.module.scss';
import './MainSliderCustom.scss';

import firstCaste from './../../assets/images/firstCaste.png';
import castleDragon from "./../../assets/images/Castle_of_the_Dragon's_Vigil.png";
import casteNecromancy from './../../assets/images/Grim_Citadel_of_the_Necromancer.png';
import casteForest from './../../assets/images/Fortress_of_Enshrouded_Mist.png';
import castleMoon from './../../assets/images/Moonlight_Bastion_of_the_Guardians.png';
import castleForgotten from './../../assets/images/Castle_of_Forgotten_Whispers.png';
import castleIronGuard from './../../assets/images/Citadel_of_the_Iron_Guard.png';

export const MainSlider = () => {
  return (
    <div className={styles.containerMainSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='mainSlider'
      >
        <SwiperSlide>
          <div className={styles.containerSlider}>
            <div className={styles.containerSliderImage}>
              <img className={styles.containerSliderImg} src={casteForest}></img>
            </div>
            <div className={styles.containerSliderContent}>
              <h1 className={styles.containerSliderTitle}>Fortress of Enshrouded Mist</h1>
              <p className={styles.containerSliderDesc}>
                This ancient fortress, shrouded in dense mist and legends of cursed
                spirits, stands on the edge of the Shadow Kingdom. According to tales, it
                was once a bastion of power, but now lies abandoned, filled with
                mysterious traps and magical artifacts awaiting the bold explorer who
                dares to venture into its dark corridors.
              </p>
              <a className={styles.containerSliderBtn}> CLAIM ON D&amp;D BEYOND </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className={styles.containerSlider}>
            <div className={styles.containerSliderImage}>
              <img className={styles.containerSliderImg} src={castleDragon}></img>
            </div>
            <div className={styles.containerSliderContent}>
              <h1 className={styles.containerSliderTitle}>
                Castle of the Dragon's Vigil
              </h1>
              <p className={styles.containerSliderDesc}>
                Perched on a steep cliff peak, this castle serves as the last defensive
                bastion against dragon invasion. Its walls are reinforced with magical
                barriers, and on the courtyard stand mighty ballistae and catapults, ready
                to repel attacks from the air. Within, treasures and legendary weapons can
                be found, useful in the battle against the colossal beasts.
              </p>
              <a className={styles.containerSliderBtn}> CLAIM ON D&amp;D BEYOND </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className={styles.containerSlider}>
            <div className={styles.containerSliderImage}>
              <img className={styles.containerSliderImg} src={casteNecromancy}></img>
            </div>
            <div className={styles.containerSliderContent}>
              <h1 className={styles.containerSliderTitle}>
                Grim Citadel of the Necromancer
              </h1>
              <p className={styles.containerSliderDesc}>
                This dark and forbidding citadel, situated amidst a graveyard of spirits
                and monsters, serves as the stronghold of a powerful necromancer. The
                castle is surrounded by a field of corpse blood, where undead minions roam
                in service to their master. Inside, one can find laboratories filled with
                macabre experiments and deadly traps guarding the necromancer's most
                precious treasures. Only the bravest or most reckless adventurers will
                dare to venture into this dreadful place.
              </p>
              <a className={styles.containerSliderBtn}> CLAIM ON D&amp;D BEYOND </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.containerSlider}>
            <div className={styles.containerSliderImage}>
              <img className={styles.containerSliderImg} src={castleMoon}></img>
            </div>
            <div className={styles.containerSliderContent}>
              <h1 className={styles.containerSliderTitle}>
                Moonlight Bastion of the Guardians
              </h1>
              <p className={styles.containerSliderDesc}>
                Perched high above the dark forests, this bastion serves as the last line
                of defense against hordes of undead that have risen from their graves. Its
                towers shimmer in the moonlight, and guards stand watch on its walls,
                ready to face all manner of dark creatures. Within, ancient artifacts lie
                hidden, offering protection against the forces of darkness, which may hold
                the key to victory against the evil forces.
              </p>
              <a className={styles.containerSliderBtn}> CLAIM ON D&amp;D BEYOND </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.containerSlider}>
            <div className={styles.containerSliderImage}>
              <img className={styles.containerSliderImg} src={castleForgotten}></img>
            </div>
            <div className={styles.containerSliderContent}>
              <h1 className={styles.containerSliderTitle}>
                Castle of Forgotten Whispers
              </h1>
              <p className={styles.containerSliderDesc}>
                Amidst misty swamps and ancient ruins stands this mysterious castle, whose
                walls could tell a thousand-year-old tale. According to legend, it is here
                that the spirits of ancestors are trapped, and in its dungeons, forbidden
                secrets of ancient wizards are hidden. Uncovering the truth hidden behind
                the veil of silence may lead to gaining extraordinary power, but will you
                dare to confront the ghosts of past ages?
              </p>
              <a className={styles.containerSliderBtn}> CLAIM ON D&amp;D BEYOND </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.containerSlider}>
            <div className={styles.containerSliderImage}>
              <img className={styles.containerSliderImg} src={castleIronGuard}></img>
            </div>
            <div className={styles.containerSliderContent}>
              <h1 className={styles.containerSliderTitle}>Citadel of the Iron Guard</h1>
              <p className={styles.containerSliderDesc}>
                This immense, monumental citadel rises above rocky cliffs overlooking the
                turbulent sea. It is the home of elite soldiers who serve as protection
                against raids by barbarian hordes. Its walls are built of unyielding iron,
                and within the courtyard sprawl barracks where soldiers hone their skills
                in anticipation of the enemy's arrival. The interior of the citadel hides
                treasures acquired during numerous battles, but can you survive the trial
                to claim them?
              </p>
              <a className={styles.containerSliderBtn}> CLAIM ON D&amp;D BEYOND </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
