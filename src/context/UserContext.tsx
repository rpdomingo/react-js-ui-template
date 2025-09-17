import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'approver' | 'reviewer' | 'requestor';

interface User {
  id: string;
  name: string;
  role: UserRole;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const defaultUser: User = {
  id: '1',
  name: 'Jane Approver',
  role: 'approver',
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');
  return ctx;
};