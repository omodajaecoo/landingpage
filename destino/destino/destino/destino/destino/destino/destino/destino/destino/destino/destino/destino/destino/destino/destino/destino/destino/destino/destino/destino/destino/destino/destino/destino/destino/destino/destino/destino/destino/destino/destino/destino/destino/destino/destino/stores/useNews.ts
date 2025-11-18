import { defineStore } from 'pinia'
interface Res { 
  id: string;
  updateTime: string;
  title: string;
  subTitle: string;
  imageUrl: string;
}
interface IRes { 
  newsList: Res[];
}
export const useNewsStore = defineStore({
  id: 'news',
  state: ():IRes => ({ newsList: [] }),
  actions: {
    setNewsList(list: Res[]) { 
      this.newsList = list
    }
  },
  persist: true // 启用持久化
})