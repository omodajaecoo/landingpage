import { defineStore } from 'pinia';

interface NavState {
  visible: boolean;
  name: string
  activeBrand: string
}

export const useNavStore = defineStore({
  id: 'nav',
  state: (): NavState => ({
    visible: false,
    name: '',
    activeBrand: 'ALL',
  }),
  actions: {
    async setNav(show: boolean, name: string = '') {
      this.visible = show;
      this.name = show ? name : '';
      console.log(this.visible, this.name, 999)
    },
    setActiveBrand(brand: string) {
      this.activeBrand = brand;
    }
  }
})