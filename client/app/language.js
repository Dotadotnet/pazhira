export default class language {
  info = [
    {
      name: "فارسی",
      lang: "fa",
      loc: "IR",
      dir: "rtl",
      img: "/countries/IR.png",
      emoji: "🇮🇷"
    },

    {
      name: "English",
      lang: "en",
      loc: "US",
      dir: "ltr",
      img: "/countries/GB.png",
      emoji: "🇬🇧"
    },
    {
      name: "Türkçe",
      lang: "tr",
      loc: "TR",
      dir: "ltr",
      img: "/countries/TR.png",
      emoji: "🇹🇷"
    },
    {
      name: "عربي",
      lang: "ar",
      loc: "SA",
      dir: "rtl",
      img: "/countries/SA.png",
      emoji: "🇸🇦"
    },
    {
      name: "Русский",
      lang: "ru",
      loc: "RU",
      dir: "ltr",
      img: "/countries/RU.png",
      emoji: "🇷🇺"
    }
  ];
  def = "fa";
  selected = null;
  constructor(lang) {
    this.info.forEach((item) => {
      if (item.lang == lang) {
        this.selected = item;
      }
    });
    if (!this.selected) {
      this.info.forEach((item) => {
        if (item.lang == this.def) {
          this.selected = item;
        }
      });
    }
  }
  getInfo() {
    return this.selected;
  }
}
