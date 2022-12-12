const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
	/*
		Write your if/else code here. In each block use .push() to insert
		the correct string into the finishedFood array.
	*/

    /* When the array item is "beef patty" push "burger to finishedFood"
    When its "egg" push "biscuit"
    when its "potato" push "fries" */

    if (ingredient === "beef patty") {
        finishedFood.push("burger");
    } else if (ingredient === "egg") {
        finishedFood.push("biscuit");
    } else if (ingredient === "potato") {
        finishedFood.push("fries");
    }
}

console.log(finishedFood)