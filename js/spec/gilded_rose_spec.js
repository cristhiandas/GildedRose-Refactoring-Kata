describe('Gilded Rose', function () {
  describe('isSulfaras', function () {
    it('should return true if passed sulfuras', function () {
      const gildedRose = new Shop([ {name: 'Sulfuras', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isSulfaras(name)).toEqual(true)
    })

    it('should return false if passed NOT sulfuras', function () {
      const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isSulfaras(name)).toEqual(false)
    })
  })

  describe('isAgedBrie', function () {
    it('should return true if passed Aged Brie', function () {
      const gildedRose = new Shop([ {name: 'Aged Brie', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isAgedBrie(name)).toEqual(true)
    })

    it('should return false if passed NOT Aged Brie', function () {
      const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isAgedBrie(name)).toEqual(false)
    })
  })

  describe('isBackstagePass', function () {
    it('should return true if passed Backstage passes', function () {
      const gildedRose = new Shop([ {name: 'Backstage passes', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isBackstagePass(name)).toEqual(true)
    })

    it('should return false if passed NOT Backstage passes', function () {
      const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isBackstagePass(name)).toEqual(false)
    })
  })

  describe('isBackstagePass', function () {
    it('should return true if passed Backstage passes', function () {
      const gildedRose = new Shop([ {name: 'Backstage passes', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isBackstagePass(name)).toEqual(true)
    })

    it('should return false if passed NOT Backstage passes', function () {
      const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isBackstagePass(name)).toEqual(false)
    })
  })

  describe('isConjured', function () {
    it('should return true if passed Conjured', function () {
      const gildedRose = new Shop([ {name: 'Conjured whatevs', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isConjured(name)).toEqual(true)
    })

    it('should return false if passed NOT Conjured', function () {
      const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isConjured(name)).toEqual(false)
    })
  })

  describe('isNormal', function (){
    it('should return true if passed normal item', function () {
      const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isNormal(name)).toEqual(true)
    })

    it('should return false if passed special item', function () {
      const gildedRose = new Shop([ {name: 'Conjured', sellIn: 0, quality: 80} ])
      name = gildedRose.items[0].name
      expect(gildedRose.isNormal(name)).toEqual(false)
    })
  })

  it('should have the same name', function () {
    const gildedRose = new Shop([ {name: 'foo', sellIn: 0, quality: 0} ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('Should change the sellin date of an item', function () {
    const gildedRose = new Shop([ new Item('foo', 2, 2) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(1)
  })

  it('Should change the quality of an item', function () {
    const gildedRose = new Shop([ new Item('foo', 2, 6) ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(5)
  })

  it("Shouldn't change the quality of an item if lower than 0", function () {
    const gildedRose = new Shop([ new Item('foo', 2, 0) ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(0)
  })

  it('Should change the quality of an item x2 if passed date', function () {
    const gildedRose = new Shop([ new Item('foo', 0, 6) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(4)
  })

  it("Should increase the quality of the 'Aged Brie'", function () {
    const gildedRose = new Shop([ new Item('Aged Brie', 1, 6) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(7)
  })

  it("Should increase the quality of the 'Aged Brie' x2 if passed date", function () {
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 6) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(8)
  })

  it('have max quality of 50 Aged Brie', function () {
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 50) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(50)
  })

  it('have max quality of 50 Aged Brie', function () {
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 48) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(50)
  })

  it('have max quality of 50 Aged Brie', function () {
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 49) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(50)
  })

  it('have max quality of 50 Backstage passes', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 49) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(50)
  })

  it('drop quality to 0 if sellIn day pass for Backstage passes', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('Backstage increases quality', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(10)
    expect(items[0].quality).toEqual(11)
  })

  it('Backstage increases quality x2 between the 5 and the 10 day', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(12)
  })

  it('Backstage increases quality x2 between the 5 and the 10 day', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(5)
    expect(items[0].quality).toEqual(12)
  })

  it('Backstage increases quality x2 between the 5 and the 10 day', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(13)
  })

  it('Backstage increases quality x2 between the 5 and the 10 day', function () {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(13)
  })

  it('Conjured items degrade in Quality twice as fast as normal items', function () {
    const gildedRose = new Shop([ new Item('Conjured mana cake', 1, 10) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(8)
  })

  it('Conjured items degrade until quality reaches 0', function () {
    const gildedRose = new Shop([ new Item('Conjured mana cake', 1, 1) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(0)
  })

  it('Conjured items degrade until quality reaches 0', function () {
    const gildedRose = new Shop([ new Item('Conjured mana cake', 0, 0) ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it("Should not change any value for 'Sulfuras'", function () {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 50) ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].quality).toEqual(50)
    expect(items[0].sellIn).toEqual(0)
  })

  it("Should not change any value for 'Sulfuras' even if date passes", function () {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', -1, 50) ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].quality).toEqual(50)
    expect(items[0].sellIn).toEqual(-1)
  })
})
