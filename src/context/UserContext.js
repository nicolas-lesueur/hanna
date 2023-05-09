import React, {createContext, useState} from "react";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  // the value that will be given to the context
  const [userId, setUserId] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState('auto');

  //this is an hack for quick demo purpose
  const [messages, setMessages] = useState(15);
  const [notifications, setNotifications] = useState(3);


  const getData = () => {
    return ({
      userId, setUserId,
      isConnected, setIsConnected,
      email, setEmail,
      firstName, setFirstName,
      lastName, setLastName,
      language, setLanguage,
      theme, setTheme,
      messages, setMessages,
      notifications, setNotifications
    });
  }




  const setData = (data) => {
      if (data.hasOwnProperty('userId')){setUserId(data.userId)};
      if (data.hasOwnProperty('isConnected')){setIsConnected(data.isConnected)};
      if (data.hasOwnProperty('email')){setEmail(data.email)};
      if (data.hasOwnProperty('firstName')){setFirstName(data.firstName)};
      if (data.hasOwnProperty('lastName')){setLastName(data.lastName)};
      if (data.hasOwnProperty('language')){setLanguage(data.language)};
      if (data.hasOwnProperty('theme')){setTheme(data.theme)};
      if (data.hasOwnProperty('messages')){setTheme(data.messages)};
      if (data.hasOwnProperty('notifications')){setTheme(data.notifications)};
  }

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider 
      value={
        { 
          getData, setData, 
          userId,setUserId, 
          isConnected,setIsConnected,
          email,setEmail,
          firstName, setFirstName,
          lastName, setLastName,
          language, setLanguage,
          theme, setTheme,
          messages, setMessages,
          notifications, setNotifications
        }
      }>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };