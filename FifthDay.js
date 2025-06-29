/*
Create a system to sort and categorize a user's shopping list
*/
const groceries = {
    fruits: [],
    dairy: [],
    frozen: [],
    sweets: []
}

let currentState = 'start';

let userItem;
let validatedResponse;

console.log('Script started');
while (currentState !== 'end') {
    switch (currentState) {
        case 'start':
            console.log('First user interaction.');

            alert('Welcome to your personal grocery list organizer!');
            alert('Here you can list everything you want to buy and we’ll automatically organize it for you!');
            currentState = 'collectItem';
            break;

        case 'collectItem':
            console.log('Collecting item from user.');

            userItem = prompt('What item would you like to add?');
            validatedResponse = validateUserInput(userItem);

            if (!validatedResponse) {
                console.log('User entered invalid value');
                alert('Please enter a valid item.');
                break; // Forces the loop to repeat
            }

            console.log(`Valid input received: ${userItem}`);
            currentState = 'collectCategory';
            break;

        case 'collectCategory':
            console.log('Defining category for the item.');
            const userCategory = prompt('What category does this item belong to? 1- Fruits, 2- Dairy, 3- Frozen, 4- Sweets');
            validatedResponse = validateUserInput(userCategory);

            switch (validatedResponse) {
                case '1': // FRUITS
                    console.log('Category set as Fruits');
                    groceries.fruits.push(userItem.trim());
                    console.log(`Added to Fruits: ${groceries.fruits}`);
                    currentState = 'askToAddMore';
                    break;

                case '2': // DAIRY
                    console.log('Category set as Dairy');
                    groceries.dairy.push(userItem.trim());
                    console.log(`Added to Dairy: ${groceries.dairy}`);
                    currentState = 'askToAddMore';
                    break;

                case '3': // FROZEN
                    console.log('Category set as Frozen');
                    groceries.frozen.push(userItem.trim());
                    console.log(`Added to Frozen: ${groceries.frozen}`);
                    currentState = 'askToAddMore';
                    break;

                case '4': // SWEETS
                    console.log('Category set as Sweets');
                    groceries.sweets.push(userItem.trim());
                    console.log(`Added to Sweets: ${groceries.sweets}`);
                    currentState = 'askToAddMore';
                    break;

                default:
                    alert('Please enter a valid number!');
            }
            break;

        case 'askToAddMore':
            console.log('Checking if user wants to continue.');
            const userResponse = prompt('Would you like to add more items? 1- Yes, 2- No');
            validatedResponse = validateUserInput(userResponse);

            switch (validatedResponse) {
                case '1':
                    console.log('User chose to continue');
                    currentState = 'collectItem';
                    break;

                case '2':
                    console.log('User chose to finish');
                    currentState = 'showFinalList';
                    break;

                default:
                    console.log('Invalid response');
                    alert('Please enter a valid number!');
            }
            break;

        case 'showFinalList':
            console.log(`Final organized list:
                Fruits: ${groceries.fruits}
                Dairy: ${groceries.dairy}
                Frozen: ${groceries.frozen}
                Sweets: ${groceries.sweets}`);
            alert(`Here’s your final organized list:
                Fruits: ${groceries.fruits}
                Dairy: ${groceries.dairy}
                Frozen: ${groceries.frozen}
                Sweets: ${groceries.sweets}`);
            currentState = 'end';
            break;
    }
}
console.log('Script ended.');

// Abstraction for validating and cleaning user input
function validateUserInput(userInput) {
    if (!userInput || userInput.trim() === '') {
        console.log('User did not enter a value');
        return;
    } else {
        console.log('Trimming whitespace from user input');
        return userInput.trim();
    }
}