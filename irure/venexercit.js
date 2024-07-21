// Assuming custom is an object with some key-value pairs
let custom = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// Example function that retrieves a value based on a provided path (key)
function getValue(path) {
    return custom[path];
}

// Example usage
console.log(getValue("age"));  // Outputs: 30
console.log(getValue("city")); // Outputs: "New York"
console.log(getValue("name")); // Outputs: "John"
