import { create } from "zustand";

interface AddPropertyModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useAddPropertyModal = create<AddPropertyModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
