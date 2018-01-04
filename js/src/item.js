class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  newItem() {
    return {name: this.name, sellIn: this.sellIn, quality: this.quality}
  }
}
