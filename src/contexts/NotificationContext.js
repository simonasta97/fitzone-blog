import { createContext, useState, useCallback } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const addNotification = useCallback((message) => {
    setNotification({ show: true, message });

    setTimeout(() => {
      setNotification({
        show: false,
        message: "",
      });
    }, 5000);
  }, []);

  const hideNotification = useCallback(
    () =>
      setNotification({
        show: false,
        message: "",
      }),
    []
  );

  return (
    <NotificationContext.Provider
      value={{ notification, addNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};