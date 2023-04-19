import styles from "./Sado.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
export const Sado = ({ ...props }) => {
  return (
    <div className={styles["sado"]}>
      <Header></Header>
      <div className={styles["mainsado-w-o-line"]}>
        <div className={styles["mainsado"]}>
          <img className={styles["imm"]} src="imm.png" />
          <svg
            className={styles["shade"]}
            width="1512"
            height="341"
            viewBox="0 0 1512 341"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H1512V341H0V0Z" fill="url(#paint0_linear_60_292)" />
            <defs>
              <linearGradient
                id="paint0_linear_60_292"
                x1="773.889"
                y1="-10.7743"
                x2="767.342"
                y2="341.008"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#4E3934" />
              </linearGradient>
            </defs>
          </svg>

          <div className={styles["sad-"]}>Sadō</div>
        </div>

        <div className={styles["contents"]}>
          <div className={styles["contents-w-o-scroll"]}>
            <div
              className={
                styles[
                  "sado--also-known-as-chanoyu-or-the-japanese-tea-ceremony--is-a-traditional-japanese-cultural-activity-that-involves-the-ceremonial-preparation-and-presentation-of-matcha--a-powdered-green-tea--the-sado-process-is-deeply-rooted-in-japanese-culture-and-has-been-practiced-for-centuries--it-emphasizes-harmony--respect--purity--and-tranquillity-"
                ]
              }
            >
              Sado, also known as Chanoyu or the Japanese tea ceremony, is a
              traditional Japanese cultural activity that involves the
              ceremonial preparation and presentation of matcha, a powdered
              green tea. The sado process is deeply rooted in Japanese culture
              and has been practiced for centuries. It emphasizes harmony,
              respect, purity, and tranquillity.
            </div>

            <div className={styles["process"]}>
              <div className={styles["process2"]}>Process</div>

              <div className={styles["process-content"]}>
                <div
                  className={
                    styles[
                      "purification--the-host-cleans-and-purifies-the-tea-utensils-and-the-tea-room--including-the-hearth--tea-container--tea-bowl--and-other-utensils--gathering--the-host-gathers-the-necessary-utensils--including-the-tea-container--natsume---tea-scoop--chashaku---tea-whisk--chasen---and-tea-bowl--chawan---preparation--the-host-heats-water-in-a-kettle-and-prepares-the-tea-by-scooping-the-powdered-tea-from-the-tea-container-into-the-tea-bowl--mixing--the-host-adds-hot-water-to-the-tea-bowl-and-then-mixes-the-tea-with-the-tea-whisk-until-it-becomes-frothy--serving--the-host-presents-the-tea-bowl-to-the-first-guest--who-bows-to-the-host--receives-the-bowl--and-drinks-the-tea--the-guest-then-wipes-the-rim-of-the-bowl-with-a-cloth-and-passes-it-to-the-next-guest--and-the-process-is-repeated-until-all-guests-have-had-a-drink--closing--the-host-cleans-and-returns-the-utensils-to-their-proper-places--and-the-guests-express-their-gratitude-to-the-host-for-the-ceremony--it-s-worth-noting-that-there-are-many-variations-of-the-sado-tea-ceremony--and-the-specific-steps-and-techniques-may-differ-depending-on-the-school-or-style-of-sado-practiced-"
                    ]
                  }
                >
                  <b>Purification:</b> The host cleans and purifies the tea utensils
                  and the tea room, including the hearth, tea container, tea
                  bowl, and other utensils.
                  <br />
                  <br />
                  <b>Gathering:</b> The host gathers the necessary utensils, including
                  the tea container (natsume), tea scoop (chashaku), tea whisk
                  (chasen), and tea bowl (chawan).
                  <br />
                  <br/>
                  <b>Preparation:</b> The host heats water in a kettle and prepares the
                  tea by scooping the powdered tea from the tea container into
                  the tea bowl.
                  <br />
                  <br />
                  <b>Mixing:</b> The host adds hot water to the tea bowl and then mixes
                  the tea with the tea whisk until it becomes frothy.
                  <br />
                  <br/>
                  <b>Serving:</b> The host presents the tea bowl to the first guest,
                  who bows to the host, receives the bowl, and drinks the tea.
                  The guest then wipes the rim of the bowl with a cloth and
                  passes it to the next guest, and the process is repeated until
                  all guests have had a drink.
                  <br />
                  <br />
                  <b>Closing:</b> The host cleans and returns the utensils to their
                  proper places, and the guests express their gratitude to the
                  host for the ceremony.
                  <br />
                  <br/>
                  It&#039;s worth noting that there are many variations of the
                  sado tea ceremony, and the specific steps and techniques may
                  differ depending on the school or style of sado practiced.
                </div>
              </div>
            </div>

            <div
              className={
                styles[
                  "sado-is-not-just-a-simple-act-of-drinking-tea--but-it-is-an-art-form-and-a-way-of-life-that-promotes-harmony--respect--and-mindfulness--it-is-a-beautiful-expression-of-japanese-culture-and-values-"
                ]
              }
            >
              Sado is not just a simple act of drinking tea, but it is an art
              form and a way of life that promotes harmony, respect, and
              mindfulness. It is a beautiful expression of Japanese culture and
              values.
            </div>

            <div className={styles["watch-buttons"]}>
              <a href="">
              <div className={styles["watch-a-video"]}>
                <div className={styles["frame-1"]}>
                  <div className={styles["watch-a-video2"]}>WATCH A VIDEO</div>
                </div>
              </div>
              </a>
              <a href="">
              <div className={styles["watch-in-vr"]}>
                <div className={styles["frame-12"]}>
                  <div className={styles["watch-in-vr2"]}>WATCH IN VR</div>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

      <div className={styles["scrol"]}>
        <div className={styles["line-1"]}></div>
      </div>
      
    </div>
  );
};
export default Sado