import { defineStore } from 'pinia';

interface HeaderState {
  headerTheme: 'dark' | 'light';
  currentPath: string;
}

export const useHeaderStore = defineStore({
  id: 'header',
  state: (): HeaderState => ({
    headerTheme: 'dark',
    currentPath: '',
  }),
  actions: {
    setHeaderTheme(theme: 'dark' | 'light') {
      this.headerTheme = theme;
    },
    setPath(path: string) {
      this.currentPath = path;
      sessionStorage.setItem('currentPath', path);
    }
  }
})