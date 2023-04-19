import styles from "./SignUp.module.css";

export const SignUp = ({ ...props }) => {
  return (
    <form action="">
    <div className={styles["signup"]}>
      <div className={styles["content2"]}>
        <div className={styles["don-t-have-an-account-"]}>
          Don’t have an account?
        </div>

        <div className={styles["log-in"]}>Log In</div>

        <div className={styles["sign-up"]}>Sign Up</div>
      </div>

      <div className={styles["rectangle-16"]}></div>

      <input type="text" placeholder="example@gmail.com" className={styles["frame-14"]}>
                
      </input>

      <div className={styles["content"]}>
        <div className={styles["input1"]}>
          <div className={styles["example-gmail-com"]}>example@gmail.com</div>
        </div>

        <div className={styles["input2"]}>
          <div className={styles["enter-password"]}>Enter Password</div>
        </div>

        <div className={styles["forgot-password-"]}>Forgot Password?</div>

        <div className={styles["login-button"]}>
          <div className={styles["signup2"]}>SignUp</div>
        </div>

        <div className={styles["or"]}>
          <div className={styles["rectangle-53"]}></div>

          <div className={styles["rectangle-54"]}></div>

          <div className={styles["or2"]}>Or</div>
        </div>

        <div className={styles["google"]}>
          <img className={styles["image-9"]} src="image-9.png" />

          <div className={styles["signup-with-google"]}>SignUp with Google</div>
        </div>
      </div>

      <img className={styles["illustration-1"]} src="illustration-1.png" />
    </div>
    </form>
  );
};

export default SignUp;