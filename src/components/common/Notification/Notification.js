// React, Hooks
import { useContext } from "react";

// Context
import { NotificationContext } from "../../../contexts/NotificationContext";

// CSS
import style from './Notification.module.css';

const Notification = () => {
  const { notification, hideNotification } = useContext(NotificationContext);

  if (!notification.show) {
    return null;
  }

  return (
    <>
      <div className={style.notiContainer}>
        <div className={style.notiWrapper}>
          <div className={style.notification}>
            <p>{notification.message}</p>
            <button className={style.closeBtn} onClick={hideNotification}>✖</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;