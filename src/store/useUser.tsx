import toast from "react-hot-toast";
import { create } from "zustand";
import { altogic } from "src/api/altogic";
import { AltogicAuth, User } from "src/typings/altogic";

interface UserActions {
  login: (response: AltogicAuth) => void;
  logout: () => void;
  setUser: (key: keyof typeof initialStates, value: any) => void;
  checkSession: () => void;
  isPremium: () => boolean;
  validatePremium: (cb: () => void) => void;
}

const initialStates = {
  isAuthenticated: false,
  user: null as User | null,
};

export type UserStates = typeof initialStates;

const useUser = create<UserStates & UserActions>()((set, get) => ({
  ...initialStates,
  setUser: (key, value) => set({ [key]: value }),
  isPremium: () => {
    const user = get().user;

    if (user) return user.type > 0;
    return false;
  },
  logout: () => {
    altogic.auth.signOut();
    toast.success("Logged out.");
    set(initialStates);
  },
  login: response => {
    set({ user: response.user as any, isAuthenticated: true });
  },
  checkSession: async () => {
    const currentSession = altogic.auth.getSession();

    if (currentSession) {
      const dbUser = await altogic.auth.getUserFromDB();

      altogic.auth.setSession(currentSession);
      set({ user: dbUser.user as any, isAuthenticated: true });
    } else {
      if (!new URLSearchParams(window.location.search).get("access_token")) return;

      const data = await altogic.auth.getAuthGrant();
      if (!data.errors?.items.length) {
        set({ user: data.user as any, isAuthenticated: true });
      }
    }
  },
  validatePremium: callback => {
    if (get().isAuthenticated) { 
      return callback();
    }
  },
}));

export default useUser;
