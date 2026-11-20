let promise = new Promise(function(resolve, reject){
	let food = true;
	if(food){
		resolve("Food is Available");
	}
	else{
		reject("Food is Over");
	}
});
promise.then(function(food1){
	console.log(food1);
});
promise.catch(function(err){
	console.log(err);
});