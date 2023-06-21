const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.species = function () {
  return this.species;
}

Dinosaur.prototype.diet = function () {
  return this.diet;
}

Dinosaur.prototype.guestsAttractedPerDay = function (){
  return this.guestsAttractedPerDay;
}

module.exports = Dinosaur;
