class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    let self = this;

    this.items.forEach(function(item){

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
          item.sellIn < 0 && item.quality > 0 ? reduceQuality() : false
      }

      let conjuredItem = () => {
        normalItem();
        normalItem();
      }

      let specialItem = () => {
        self.isAgedBrie(item.name) ? agedBries() : false
        self.isBackstagePass(item.name) ? backstagePasses() : false
        self.isConjured(item.name) ? conjuredItem() : false
      }

      if (!self.isSulfaras(item.name)) {
        item.sellIn -= 1;
        self.isNormal(item.name) ? normalItem() : specialItem()
      }
    });
    return this.items;
  }

  isSulfaras(name){
    return name.includes('Sulfuras')
  }

  isAgedBrie(name){
    return name.includes('Aged Brie')
  }

  isBackstagePass(name){
    return name.includes('Backstage passes')
  }

  isConjured(name){
    return name.includes('Conjured')
  }

  isNormal(name){
    return (
      !this.isAgedBrie(name) &&
      !this.isBackstagePass(name) &&
      !this.isConjured(name)
    )
  }

  
}
