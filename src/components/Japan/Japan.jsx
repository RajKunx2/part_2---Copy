// import styles from './Japan.module.css'
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
// import React from 'react'
// import { useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
// import { motion, useAnimation } from 'framer-motion'

// export const Japan = () => {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({ threshold: 0.4 })

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible')
//     }
//   }, [controls, inView])

//   return (
//     <>
//       <div className={styles['japan']}>
//         <div className={styles['mainjapan']}>
//           <Header></Header>
//           <img
//             className={styles['japan-wallpaper']}
//             src='japan-wallpaper.png'
//           />
//           <svg
//             className={styles['sample-shade-japan']}
//             width='1505'
//             height='709'
//             viewBox='0 0 1505 709'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M0 0.5H1505V708.5H0V0.5Z'
//               fill='url(#paint0_linear_60_343)'
//             />
//             <defs>
//               <linearGradient
//                 id='paint0_linear_60_343'
//                 x1='682.132'
//                 y1='91.7623'
//                 x2='687.231'
//                 y2='724.98'
//                 gradientUnits='userSpaceOnUse'
//               >
//                 <stop stopOpacity='0' />
//                 <stop offset='1' stopOpacity='0.8' />
//               </linearGradient>
//             </defs>
//           </svg>

//           <div className={styles['japan2']}>Japan</div>
//         </div>

//         <div className={styles['japanlist']}>
         
//             <motion.div 
//             ref={ref}
//             initial={{  x: "-100vw" }}
//             animate={{  x: 0 }}
//             transition={{ duration: 2, origin: 1 }}

//             className={styles['places-of-japan-grouped']}>
//               <div className={styles['rectangle-44']}></div>

//               <div className={styles['contentp']}>
//                 <img
//                   className={styles['romeo-a-slil9ezjwuc-unsplash-1']}
//                   src='romeo-a-slil9ezjwuc-unsplash-1.png'
//                 />

//                 <div className={styles['contentplace']}>
//                   <div className={styles['places-of-japan']}>
//                     Places of Japan
//                   </div>

//                   <div
//                     className={
//                       styles[
//                         'japan-is-a-country-of-diverse-and-beautiful-places--including-the-bustling-metropolis-of-tokyo--the-rich-cultural-heritage-of-kyoto--the-iconic-mount-fuji--and-the-stunning-natural-landscapes-of-hokkaido--among-others-'
//                       ]
//                     }
//                   >
//                     Japan is a country of diverse and beautiful places,
//                     including the bustling metropolis of Tokyo, the rich
//                     cultural heritage of Kyoto, the iconic Mount Fuji, and the
//                     stunning natural landscapes of Hokkaido, among others.
//                   </div>

//                   <div className={styles['group-4']}>
//                     <div className={styles['tokyo']}>Tokyo</div>

//                     <div className={styles['kyto']}>Kyto</div>

//                     <div className={styles['osaka']}>Osaka</div>
//                   </div>

//                   <div className={styles['group-3']}>
//                     <div className={styles['rectangle-4']}></div>

//                     <div className={styles['see-more']}>SEE MORE</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//           <div className={styles['cuisines-of-japan-grouped']}>
//             <div className={styles['rectangle-442']}></div>

//             <div className={styles['contentc']}>
//               <img className={styles['image-1']} src='image-1.png' />

//               <div className={styles['contentcusine']}>
//                 <div className={styles['cuisines-of-japan']}>
//                   Cuisines of Japan
//                 </div>

//                 <div
//                   className={
//                     styles[
//                       'japanese-cuisine-is-known-for-its-fresh-ingredients--artful-presentation--and-diverse-flavors--popular-dishes-include-sushi--ramen--udon--tempura--yakitori--and-teriyaki--japanese-cuisine-also-features-unique-ingredients-such-as-wasabi--miso--and-seaweed-'
//                     ]
//                   }
//                 >
//                   Japanese cuisine is known for its fresh ingredients, artful
//                   presentation, and diverse flavors. Popular dishes include
//                   sushi, ramen, udon, tempura, yakitori, and teriyaki. Japanese
//                   cuisine also features unique ingredients such as wasabi, miso,
//                   and seaweed.
//                 </div>

//                 <div className={styles['group-42']}>
//                   <div className={styles['sushi']}>Sushi</div>

//                   <div className={styles['ramen']}>Ramen</div>

//                   <div className={styles['udon']}>Udon</div>
//                 </div>

//                 <div className={styles['group-32']}>
//                   <div className={styles['rectangle-42']}></div>

//                   <div className={styles['see-more2']}>SEE MORE</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <motion.div id=""
//                 ref={ref}
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 1 }}>

//           <div className={styles['folklores-of-japan-grouped']}>
//             <div className={styles['rectangle-443']}></div>

//             <div className={styles['contentf']}>
//               <img className={styles['image-12']} src='image-12.png' />

//               <div className={styles['contentfolklore']}>
//                 <div className={styles['folklores-of-japan']}>
//                   Folklores of Japan
//                 </div>

//                 <div
//                   className={
//                     styles[
//                       'japanese-folklore-is-rich-in-myths--legends--and-supernatural-creatures--popular-stories-include-momotaro-the-peach-boy--the-tale-of-the-samurai-ghost--and-the-story-of-the-koi-fish-that-became-a-dragon--japanese-folklore-also-features-yokai--or-supernatural-beings--such-as-the-kitsune-and-oni-'
//                     ]
//                   }
//                 >
//                   Japanese folklore is rich in myths, legends, and supernatural
//                   creatures. Popular stories include Momotaro the Peach Boy, the
//                   tale of the samurai ghost, and the story of the koi fish that
//                   became a dragon. Japanese folklore also features yokai, or
//                   supernatural beings, such as the kitsune and oni.
//                 </div>

//                 <div className={styles['group-33']}>
//                   <div className={styles['rectangle-43']}></div>

//                   <div className={styles['see-more3']}>SEE MORE</div>
//                 </div>

//                 <div className={styles['group-43']}>
//                   <div className={styles['susanoo']}>Susanoo</div>

//                   <div className={styles['the-bamboo-cutter']}>
//                     The bamboo cutter
//                   </div>

//                   <div className={styles['izanagi-and-izanami']}>
//                     Izanagi and Izanami
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </motion.div>
//           <div className={styles['cultures-of-japan']}>
//             <div className={styles['rectangle-444']}></div>

//             <div className={styles['contentc2']}>
//               <img className={styles['image-19']} src='image-19.png' />

//               <div className={styles['contentculture']}>
//                 <div className={styles['cultures-of-japan2']}>
//                   Cultures of Japan
//                 </div>

//                 <div
//                   className={
//                     styles[
//                       'in-publishing-and-graphic-design--lorem-ipsum-is-a-placeholder-text-commonly-used-to-demonstrate-the-visual-form-of-a-document-or-a-typeface-without-relying-on-meaningful-content--lorem-ipsum-may-be-used-as-a-placeholder-before-final-copy-is-available-'
//                     ]
//                   }
//                 >
//                   In publishing and graphic design, Lorem ipsum is a placeholder
//                   text commonly used to demonstrate the visual form of a
//                   document or a typeface without relying on meaningful content.
//                   Lorem ipsum may be used as a placeholder before final copy is
//                   available.
//                 </div>

//                 <div className={styles['group-34']}>
//                   <a href=''>
//                     <div className={styles['rectangle-45']}></div>

//                     <div className={styles['see-more4']}>SEE MORE</div>
//                   </a>
//                 </div>

//                 <div className={styles['group-73']}>
//                   <div className={styles['sad-']}>Sadō</div>

//                   <div className={styles['shod-']}>Shodō</div>

//                   <div className={styles['hanami']}>Hanami</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   )
// }
// export default Japan

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
export default function Japan(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({threshold:0.4});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
     <motion.div id="places_div"
                ref={ref}
                initial={{  x: "-100vw" }}
                animate={{  x: 0 }}
                transition={{ duration: 2, origin: 1 }}
                className="h-[300px] w-[300px] bg-red-200 mx-auto">
            </motion.div>

    </>
  );
}
