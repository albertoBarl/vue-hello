const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      photo:
        "https://i.pinimg.com/736x/d2/4b/be/d24bbe79387549086d159aa4462bf4c9--pixel-art-templates-minion.jpg",
    };
  },
}).mount("#HELLO");
