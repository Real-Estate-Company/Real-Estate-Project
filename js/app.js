"use strict"
const Itemes = [];
Product.all= [];
const SelectedItem = function (id, name, filePath, itemFeatures) {
    this.id = id;
    this.name = name;
    this.filePath = filePath;
    this.itemFeatures = itemFeatures;

}

SelectedItem.prototype.addItem = function (id, name, filePath, itemFeatures) {

    let newItem = new SelectedItem(id, name, filePath, itemFeatures);
    this.Itemes.push(newItem);
}

const Product = function (name, filePath, itemFeatures, like, dislike, bought) {
    this.name = name;
    this.filePath = filePath;
    this.itemFeatures = itemFeatures;
    this.like = like;
    this.dislike = dislike;
    this.bought = bought;
    Product.all.push(this);
}

