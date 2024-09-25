Here’s a simple Python program that calculates the factorial of a number:

```python
# Function to calculate factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Input from user
number = int(input("Enter a number: "))

# Check if the number is negative
if number < 0:
    print("Factorial does not exist for negative numbers.")
else:
    print(f"The factorial of {number} is {factorial(number)}")
```

### How it works:
1. **factorial function:** This function recursively calculates the factorial of a number.
2. **Input:** The user is prompted to enter a number.
3. **Negative check:** The program checks if the number is negative because factorials aren't defined for negative numbers.
4. **Output:** The factorial of the entered number is displayed.

This simple program demonstrates basic recursion, user input handling, and conditional logic.