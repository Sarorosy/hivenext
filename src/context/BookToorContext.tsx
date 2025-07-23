// context/BookTourContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type BookTourContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BookTourContext = createContext<BookTourContextType | undefined>(undefined);

export const BookTourProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookTourContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </BookTourContext.Provider>
  );
};

export const useBookTour = () => {
  const context = useContext(BookTourContext);
  if (!context) throw new Error("useBookTour must be used within a BookTourProvider");
  return context;
};
