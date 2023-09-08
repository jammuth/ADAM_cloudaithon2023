import { defineStore } from 'pinia';

const assets = [];

export const useAssetStore = defineStore('AssetStore', {
  state: () => {
    return {
      assets,
    };
  },
  // actions
  actions: {},
  // getters
  getters: {},
});
