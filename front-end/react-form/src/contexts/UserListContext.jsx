import React, { useContext } from 'react';

const UserListContext = React.createContext([[],()=>{}]);

export function UserListContextProvider (props) {
    const [userList, setUserList] = React.useState([]);

    return <UserListContext.Provider value={[userList,setUserList]}>
        {props.children}
    </UserListContext.Provider>
}

export function useUserListContext () {
    return useContext(UserListContext)
}
