import styles from "./Login.module.scss";
import React from "react";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <img
          src="/public/img/logos/logo_yard_sale.svg"
          alt="logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new passwrd for your account</p>
        <form action="/" className={styles.form}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className={`${styles.input} input-password`}
          />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className={`${styles.input} input-password`}
          />
          <input
            type="submit"
            value="Confirm"
            className={`${styles.primary_button} ${styles.login_button}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
