"use strict"

const Itemes = [];
Product.all= [];
//First Constructor 
const SelectedItem = function (id, name, filePath, itemFeatures) {
    this.id = id;
    this.name = name;
    this.filePath = filePath;
    this.itemFeatures = itemFeatures;

}
//addItem Function 
SelectedItem.prototype.addItem = function (id, name, filePath, itemFeatures) {

    let newItem = new SelectedItem(id, name, filePath, itemFeatures);
    this.Itemes.push(newItem);
}

//Second Constructor
const Product = function (name, filePath,address,price,rooms,contactus,like, dislike, bought) {
    this.name = name;
    this.filePath = filePath;
    this.address=address;
    this.price=price;
    this.rooms=rooms;
    this.contactus=contactus;
    this.like = like;
    this.dislike = dislike;
    this.bought = bought;
    Product.all.push(this);
}


//create 10 objects
function generateObjects(){

 new Product('Hacienda The Villa','img/p1/img1.jpg','Dubailand','USD 4,999,99','5 Bed,5 Bath,2 parking','600 52 2233',0,0,0);
 new Product('Hattan, Arabian Ranches','img/p2/img1.jpg','Vision Tower, 42nd Floor, Dubai','USD 8,995,000','4/5 Bedrooms,6 Bath , 3 Parking','600 52 4444',0,0,0);
 new Product('Joya Verde Residence','img/p3/img1.jpg','Vision Tower, 42nd Floor, Dubai','USD 495,000 ','1 Bed,1 Bath','600 78 1133',0,0,0);
 new Product('Lila Villas, Arabian Ranches 2','img/p4/img1.jpg','Dubai','USD  3,900,000','5 Bed,4 Bath','700 32 2833',0,0,0);
 new Product('Marina Crown, Dubai Marina','img/p5/img1.jpg','is situated just in front of Westin Hotel','USD 1,450,000','2 Bed ,3 Bath,1 Parking','800 45 233',0,0,0);
 new Product('Nad Al Sheba','img/p6/img1.jpg','in the heart of Nad Al Shebba Second','USD 14,000,000','5 bedrooms,5 Bath,4 Parking','600 77 2133',0,0,0);
 new Product('Oliva, Victory Heights','img/p7/img1.jpg','Vision Tower, 42nd Floor, Dubai','USD 7,200,000','5 Bed,5 Bath,2 Parking','600 66 2133',0,0,0);
 new Product('Picadilly Green, DAMAC Hills ','img/p8/img1.jpg','between Al Qudra Road and Hessa Street','USD 550,000','6 Bed ,7 Bath,2 Parking','900 16 2133',0,0,0);
 new Product('The Aldea, The Villa','img/p9/img1.jpg','Vision Tower, 42nd Floor, Dubai','USD 5,000,000 ','5 Bed,6 Bath,2 Parking','600 44 2133',0,0,0);
 new Product('Villa Myra','img/p10/img1.jpg','Jumeirah Village Circle','USD 450,000','1 Bed,1 Bath,1 Parking','600 33 2663',0,0,0);


}
//call function 
generateObjects();
