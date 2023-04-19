import styles from "./Footer.module.css";

export const Footer = ({ ...props }) => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["columns"]}>
        <div className={styles["col-1"]}>
          <div className={styles["social"]}>
            <div className={styles["social2"]}>SOCIAL</div>

            <div className={styles["icons"]}>
              <svg
                className={styles["mdi-instagram"]}
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_73_470)">
                  <path
                    d="M8.4048 0.355225H19.7541C24.0777 0.355225 27.5906 3.78642 27.5906 8.00942V19.0948C27.5906 21.1248 26.7649 23.0717 25.2953 24.5071C23.8257 25.9426 21.8325 26.749 19.7541 26.749H8.4048C4.08125 26.749 0.568359 23.3178 0.568359 19.0948V8.00942C0.568359 5.9794 1.39398 4.03253 2.8636 2.59709C4.33322 1.16165 6.32645 0.355225 8.4048 0.355225M8.13458 2.9946C6.84457 2.9946 5.60739 3.49514 4.69521 4.3861C3.78304 5.27707 3.27058 6.48547 3.27058 7.74548V19.3587C3.27058 21.9849 5.44587 24.1096 8.13458 24.1096H20.0243C21.3144 24.1096 22.5515 23.6091 23.4637 22.7181C24.3759 21.8272 24.8883 20.6188 24.8883 19.3587V7.74548C24.8883 5.1193 22.7131 2.9946 20.0243 2.9946H8.13458ZM21.1728 4.97414C21.6207 4.97414 22.0503 5.14793 22.367 5.4573C22.6837 5.76666 22.8617 6.18624 22.8617 6.62375C22.8617 7.06125 22.6837 7.48084 22.367 7.7902C22.0503 8.09956 21.6207 8.27336 21.1728 8.27336C20.7249 8.27336 20.2953 8.09956 19.9786 7.7902C19.6618 7.48084 19.4839 7.06125 19.4839 6.62375C19.4839 6.18624 19.6618 5.76666 19.9786 5.4573C20.2953 5.14793 20.7249 4.97414 21.1728 4.97414ZM14.0795 6.95367C15.8711 6.95367 17.5894 7.64886 18.8564 8.88631C20.1233 10.1238 20.835 11.8021 20.835 13.5521C20.835 15.3021 20.1233 16.9805 18.8564 18.2179C17.5894 19.4554 15.8711 20.1506 14.0795 20.1506C12.2878 20.1506 10.5695 19.4554 9.30257 18.2179C8.03566 16.9805 7.32391 15.3021 7.32391 13.5521C7.32391 11.8021 8.03566 10.1238 9.30257 8.88631C10.5695 7.64886 12.2878 6.95367 14.0795 6.95367M14.0795 9.59305C13.0045 9.59305 11.9735 10.0102 11.2133 10.7526C10.4532 11.4951 10.0261 12.5021 10.0261 13.5521C10.0261 14.6021 10.4532 15.6091 11.2133 16.3516C11.9735 17.0941 13.0045 17.5112 14.0795 17.5112C15.1545 17.5112 16.1855 17.0941 16.9456 16.3516C17.7057 15.6091 18.1328 14.6021 18.1328 13.5521C18.1328 12.5021 17.7057 11.4951 16.9456 10.7526C16.1855 10.0102 15.1545 9.59305 14.0795 9.59305Z"
                    fill="white"
                    fillOpacity="0.67"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_73_470">
                    <rect
                      width="26.8678"
                      height="26.243"
                      fill="white"
                      transform="translate(0.645508 0.43042)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className={styles["---icon--linkedin-"]}>
                <svg
                  className={styles["group"]}
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0819 8.13152C17.9107 8.12756 16.7502 8.3512 15.6668 8.78964C14.5834 9.22809 13.5984 9.87273 12.7681 10.6867C11.9378 11.5006 11.2785 12.4679 10.828 13.5332C10.3775 14.5985 10.1446 15.7408 10.1426 16.8949V25.7486C10.1426 26.108 10.2875 26.4527 10.5454 26.7069C10.8033 26.961 11.1531 27.1038 11.5179 27.1038H14.7268C15.0916 27.1038 15.4414 26.961 15.6993 26.7069C15.9572 26.4527 16.1021 26.108 16.1021 25.7486V16.8949C16.1018 16.4844 16.1893 16.0785 16.3589 15.7036C16.5284 15.3287 16.7763 14.9932 17.0863 14.719C17.3963 14.4448 17.7614 14.2381 18.1579 14.1123C18.5544 13.9865 18.9734 13.9444 19.3875 13.9888C20.1301 14.081 20.8126 14.4385 21.3055 14.9936C21.7984 15.5487 22.0675 16.2628 22.0616 17.0003V25.7486C22.0616 26.108 22.2065 26.4527 22.4644 26.7069C22.7223 26.961 23.0721 27.1038 23.4369 27.1038H26.6459C27.0106 27.1038 27.3604 26.961 27.6183 26.7069C27.8762 26.4527 28.0211 26.108 28.0211 25.7486V16.8949C28.0191 15.7408 27.7862 14.5985 27.3357 13.5332C26.8852 12.4679 26.2259 11.5006 25.3956 10.6867C24.5653 9.87273 23.5803 9.22809 22.4969 8.78964C21.4135 8.3512 20.253 8.12756 19.0819 8.13152Z"
                    fill="white"
                    fillOpacity="0.67"
                  />
                  <path
                    d="M6.01476 9.48584H1.88895C1.1294 9.48584 0.513672 10.0926 0.513672 10.841V25.7478C0.513672 26.4962 1.1294 27.103 1.88895 27.103H6.01476C6.77431 27.103 7.39004 26.4962 7.39004 25.7478V10.841C7.39004 10.0926 6.77431 9.48584 6.01476 9.48584Z"
                    fill="white"
                    fillOpacity="0.67"
                  />
                  <path
                    d="M3.95185 6.77581C5.85071 6.77581 7.39004 5.259 7.39004 3.38791C7.39004 1.51682 5.85071 0 3.95185 0C2.053 0 0.513672 1.51682 0.513672 3.38791C0.513672 5.259 2.053 6.77581 3.95185 6.77581Z"
                    fill="white"
                    fillOpacity="0.67"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles["contact-us"]}>
            <div className={styles["contact-us2"]}>CONTACT US</div>

            <div className={styles["contact-us3"]}>
              <div className={styles["phone---91-1234567890"]}>
                Phone: +91 1234567890
              </div>

              <div className={styles["namexyz-gmail-com"]}>
                namexyz@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className={styles["company"]}>
          <div className={styles["company2"]}>COMPANY</div>

          <div className={styles["company3"]}>
            <div className={styles["about-us"]}>About Us</div>

            <div className={styles["privacy-policy"]}>Privacy Policy</div>

            <div className={styles["terms---conditions"]}>
              Terms &amp; Conditions
            </div>

            <div className={styles["advertise-with-us"]}>Advertise with Us</div>

            <div className={styles["disclaimer"]}>Disclaimer</div>
          </div>
        </div>

        <div className={styles["other-links"]}>
          <div className={styles["other-links2"]}>OTHER LINKS</div>

          <div className={styles["other-links3"]}>
            <div className={styles["home"]}>Home</div>

            <div className={styles["about-us2"]}>About Us</div>

            <div className={styles["testimonials"]}>Testimonials</div>

            <div className={styles["contact-us4"]}>Contact Us</div>
          </div>
        </div>
      </div>

      <div className={styles["_2023-copyrights--made-with-love"]}>
        2023@Copyrights. Made with love
      </div>
    </div>
  );
};
export default Footer;