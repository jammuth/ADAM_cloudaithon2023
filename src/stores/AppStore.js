import { defineStore } from 'pinia';

const assetDefinition = {
  metadata: {
    name: 'default',
    title: 'folder',
    type: 'folder',
  },
  sections: [
    {
      name: 'id',
      separator: 'solid',
      data: {
        'instance-id': 'i-a13d471cf347',
        owner: 'James A',
        region: 'eu-west-1a',
      },
    },
    {
      name: 'cost',
      separator: 'dotted',
      data: { cost: '$12,345.67pm', age: '144 days' },
    },
  ],
};

const currentColor = {full_class:"w-full h-full"}

export const useAppStore = defineStore('AppStore', {
  state: () => {
    return {
      assetDefinition,currentColor
    };
  },
  // actions

  // getters
  getters: {
    currentStyle() {
      return assetDefinition.metadata.type;
    },
  },
});
