// React, Hooks
import { useContext } from "react";

// Context
import { NotificationContext } from "../../../contexts/NotificationContext";

// Other
import { Toast } from "react-bootstrap";


const Notification = () => {
  const { notification, hideNotification } = useContext(NotificationContext);

  if (!notification.show) {
    return null;
  }

  return (
    <Toast
      className="notification d-inline-block m-1"
      bg="Light"
      onClose={hideNotification}
    >
      <Toast.Header>
        <strong className="me-auto">Information</strong>
      </Toast.Header>
      <Toast.Body>{notification.message}</Toast.Body>
    </Toast>
  );
};

export default Notification;