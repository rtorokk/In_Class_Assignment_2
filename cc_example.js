// Task 1

let products = [
    { name: "laptop", price: 1200, category: "electronics" },
    {name : "Phone", price: 800, category: "electronics"},
    {name: "desk Chair", price: 150 , category: "furniture"},
];


function getProductsByCategory(products, category) {
     return products.filter(product => product.category === category);
    }
    

    console.log(getProductsByCategory(products, "electronics"));


// Task 2

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }
    ))
}

console.log(applyDiscount(products, 0.1));

// Task 3:

function sum3(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
let someObj = { x: 1, y: 2, z: 3 };

console.log(sum3(...numbers));


// Task 3

let sales = [250, 400, 150, 900, 1200] ;
function calculateTotalRevenue(sales) {

    return sales.reduce((total, sale ) => total + sale, 0);
}

console.log(calculateTotalRevenue(sales));

// Task 4

let employee = {
    name: "john doe",
    salary: 50000,
    position: "manager"
};

console.log(employee);// first time to see no change

function updateSalary(employee, percentageIncrease) {
    employee.salary += employee.salary * percentageIncrease;
        
    }

    updateSalary(employee, 0.1);
console.log(employee);// second time to see the change
    
