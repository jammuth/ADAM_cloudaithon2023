import { defineStore } from "pinia";
import axios from "axios";

const assetDefinition = {
  metadata: {
    name: "name",
    title: "title",
    type: "folder",
    color: "",
  },
  sections: [
    {
      name: "example",
      separator: "solid",
      data: {
        item1: "127.0.0.1",
        item2: "James Adams",
        item3: "eu-west-1a",
      },
    },
    {
      name: "example2",
      separator: "solid",
      data: {
        item1: "127.0.0.2",
        item2: "Thomas Adams",
        item3: "eu-west-1b",
      },
    },
  ],
};

const currentColor = { full_class: "w-full h-full" };

export const useAppStore = defineStore("AppStore", {
  state: () => {
    return {
      assetDefinition,
      currentColor,
    };
  },
  // actions
  actions: {
    removeSection(index) {
      if (this.assetDefinition.sections[index] !== undefined) {
        this.assetDefinition.sections.splice(index, 1);
      }
    },
    addNewSection() {
      this.assetDefinition.sections.push({
        name: "new",
        separator: "none",
        data: {},
      });
    },
    addNewData(index) {
      console.log(this.assetDefinition.sections[index].data);
      const count = Object.keys(
        this.assetDefinition.sections[index].data
      ).length;

      this.assetDefinition.sections[index].data["newitem" + count] = "data1";
    },
    removeData(index, key) {
      delete this.assetDefinition.sections[index].data[key];
    },
    async getYML() {
      console.log("axios function called");
      const formData = new FormData();
      formData.append("data", this.assetDefinition);
      const res = await axios.post(
        "//localhost:5173/api/json_to_yml.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    },
  },

  // getters
  getters: {
    currentStyle() {
      return assetDefinition.metadata.type;
    },
  },
});
