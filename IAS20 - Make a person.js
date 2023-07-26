const Person = function(first, last) {
    // Complete the method below and implement the others similarly
  let firstName = first;
  let lastName = last;
      
  this.getFirstName = function() {
    return firstName;
  };
  
  this.getLastName = function() {
    return lastName;
  };
  
  this.getFullName = function() {
    return firstName + " " + lastName;  
  };
  
  this.setFirstName = function(first) {
    firstName = first;
  
  };
  this.setLastName = function(last) {
    lastName = last;
  
  };
  this.setFullName = function(first, last) {
      firstName = first;
      lastName = last;
    }       
  };
  
  var bob = new Person('Bob', 'Ross');
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  