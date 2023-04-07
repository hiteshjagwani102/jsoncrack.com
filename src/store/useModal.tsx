import { create } from "zustand";

interface ModalActions {
  setVisible: (modal: keyof typeof initialStates) => (visible: boolean) => void;
}

const initialStates = {
  download: false,
};


export type ModalStates = typeof initialStates;

const useModal = create<ModalStates & ModalActions>()(set => ({
  ...initialStates,
  setVisible: modal => visible => {
    set({ [modal]: visible });
  },
}));

export default useModal;
