let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhh!');
  }
}

user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream()

// O(n/k) = O(n)

//Map --> Gives you some order
//Set --> No duplicate keys
