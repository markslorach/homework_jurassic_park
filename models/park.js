const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }

Park.prototype.name = function () {
    return this.name;
}

Park.prototype.ticketPrice = function (){
    return this.ticketPrice;
}

Park.prototype.dinosaurs = function (){
    return this.dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1)
}



module.exports = Park;