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

      if (!sulfaras) {
        item.sellIn = item.sellIn - 1;
        if ( !agedBrie && !backstagePass) {
          if (item.quality > 0) {
              item.quality -= 1;
          } if (item.sellIn <0 ) {
              item.quality -= 1;
          }
        } else {
          if (item.quality < 50 ) {
            item.quality += 1;
            if (item.sellIn < 0 && item.quality < 50) {
              item.quality += 1;
            }
            if (backstagePass) {
              if (item.sellIn < 10 && item.quality < 50) {
                  item.quality += 1;
              }
              if (item.sellIn < 5 && item.quality < 50) {
                  item.quality += 1;
              }
            }
          }
          if (item.sellIn < 0 && backstagePass) {
            item.quality -= item.quality;
          }
        }
      }
    });
    return this.items;
  }
}
