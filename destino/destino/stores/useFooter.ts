import { defineStore } from 'pinia';

interface FooterState {
  currentPath: string;
  showCookie: boolean;
}

export const useFooterStore = defineStore({
  id: 'footer',
  state: (): FooterState => ({
    currentPath: '',
    showCookie: false,
  }),
  actions: {
    setPath(path: string) {
      this.currentPath = path;
    },
    setShowCookie(show: boolean) {
      this.showCookie = show;
    }
  }
})