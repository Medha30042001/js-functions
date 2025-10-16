/*
Q: 14
Food Delivery App Discount
Write a function named calculateFinalPrice that calculates the final price of a food order after applying a discount.

Submission Guidelines
Once Completed, submit the code directly in the box below

The function should take the following parameters:

orderAmount (a number): The total price of the order.
discountCode (a string, optional): A discount code that determines the discount percentage.
Rules:

If the discountCode is "SAVE10", apply a 10% discount.
If the discountCode is "SAVE20", apply a 20% discount.
If no discount code is provided, apply no discount.
Please ensure the minimun order value is 500, if it less, then return a message Please add tems of Rs. <diffrenece amount> to get discount
Return the final price rounded to two decimal places.

Example:

calculateFinalPrice(1000, "SAVE10"); // Should return 900
calculateFinalPrice(2000, "SAVE20"); // Should return 1600
calculateFinalPrice(150);          // Should return `Please add items of Rs. 350 to get discount`
Submission Guidelines
Once Completed, submit the code directly in the box below
*/
