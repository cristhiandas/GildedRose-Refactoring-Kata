class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(function(item){

      const sulfaras = item.name == 'Sulfuras, Hand of Ragnaros'

      const agedBrie = item.name == 'Aged Brie'

      const backstagePass = item.name == 'Backstage passes to a TAFKAL80ETC concert'

      const normalItems = !agedBrie && !backstagePass

      let belowMaxQuality = () => item.quality < 50

      let reduceQuality = () => {
        item.quality -= 1
      }

      let increaseQuality = () => {
        item.quality += 1
      }

      let backstagePasses = () => {
          belowMaxQuality() ? increaseQuality() :false
          item.sellIn < 10 && belowMaxQuality() ? increaseQuality() : false;
          item.sellIn < 5 && belowMaxQuality() ? increaseQuality() : false;
          item.sellIn < 0 ? item.quality -= item.quality : false
      }

      let agedBries = () => {
          belowMaxQuality() ? increaseQuality() : false
          item.sellIn < 0 && belowMaxQuality() ? increaseQuality() : false
      }

      let normalItem = () => {
          item.quality > 0 ? reduceQuality() : false
          item.sellIn < 0 ? reduceQuality() : false
      }

      let specialItem = () => {
        agedBrie ? agedBries() : false
        backstagePass ? backstagePasses() : false
      }

      if (!sulfaras) {
        item.sellIn -= 1;
        normalItems ? normalItem() : specialItem()
      }
    });
    return this.items;
  }
}
