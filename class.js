//es5
function language(name, country) {
  this.name = name;
  this.country = country;
  this.greet = () => {
    return `Say Hi to ${name}`;
  };
}

//Es6
class language1 {
  //add declaration
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  greet = () => {
    return `Say Hi to ${this.name}`;
  };
}

var French = new language1("French", "France");
console.log(French);
console.log(French.greet());
//language1 { name: '', country: '', greet: f}
