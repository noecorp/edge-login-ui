import React from 'react'

import passwordIcon from '../../img/account-settings/password-MW.png'
import pinIcon from '../../img/account-settings/PIN-MW.png'
import recoveryIcon from '../../img/account-settings/recovery-MW.png'
import styles from './AccountManagement.mobileStyle.scss'

export default ({
  account,
  gotoChangePin,
  gotoChangePassword,
  gotoChangePasswordRecovery
}) => {
  if (account.edgeLogin) {
    return (
      <div className={styles.container}>
        <div className={styles.edgeLogin}>
          <p className={styles.text}>
            Please use the Edge Wallet app to change your account settings.
          </p>
          <br />
          <p>
            <a
              href="https://edgesecure.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.airbitzLink}
            >
              Download Edge
            </a>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <p className={styles.header}>Account name:</p>
      <p className={styles.accountName}>{account.username}</p>
      <div className={styles.square} onClick={gotoChangePin}>
        <img src={pinIcon} />
        <p className={styles.label}>Change Pin</p>
      </div>
      <div className={styles.square} onClick={gotoChangePassword}>
        <img src={passwordIcon} />
        <p className={styles.label}>Change Password</p>
      </div>
      <div className={styles.square} onClick={gotoChangePasswordRecovery}>
        <img src={recoveryIcon} />
        <p className={styles.label}>Setup/Change Password Recovery</p>
      </div>
    </div>
  )
}
