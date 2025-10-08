import { defineStore } from 'pinia';

interface FooterState {
  footerTheme: 'dark' | 'light';
  currentPath: string;
  showCookie: boolean;
}

export const useFooterStore = defineStore({
  id: 'footer',
  state: (): FooterState => ({
    footerTheme: 'light',
    currentPath: '',
    showCookie: false,
  }),
  actions: {
    setFooterTheme(theme: 'dark' | 'light') {
      this.footerTheme = theme;
    },
    setPath(path: string) {
      this.currentPath = path;
    },
    setShowCookie(show: boolean) {
      this.showCookie = show;
    }
  }
})