function makeid(l) {
  // write your code here
	return Math.random().toString(36).substring(2, 2 + l);
}

const l = prompt("Enter a number.");
alert(makeid(l));
