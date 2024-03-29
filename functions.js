// 1. Attach this file functions.js to the index.html file

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

// 3. Create a function that calculates the volume of a rectangular prism.
//    The function should accept the width, height and length as arguments
//    and return the volume of that rectangular prism.
//    The volume of a rectangular prism is the width * height * length

// 4. Create a function that calculates the area of a circle.
//    The function should accept the radius of the circle as an argument
//    and return the area of that circle.
//    The area of a circle is the value of π * radius^2

// 5. Create a function that calculates the volume of a sphere.
//    The function should accept the radius of the sphere as an argument
//    and return the volume.
//    The volume of a circle is: 4/3 *  π * radius^3

// 6. Use console.log to test each function and output to the JavaScript console
//    Here are the values to test and the expected results
//    -- Area of rectangle that is 5 wide and 22 tall: 110
//    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
//    -- Area of a circle that with a radius of 7.2: 162.8601631620949
//    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109

function areaOfRectangle(x, y) {
    return x * y
}
console.log(areaOfRectangle(5, 22))

function volumeOfPrism(width, height, length) {
    return width * height * length
}
console.log(volumeOfPrism(4.5, 12.5, 17.4))

function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius,2)
}
console.log(areaOfCircle(7.2))

function volumeOfSphere(radius) {
    return Math.PI * (4/3) * Math.pow(radius,3)
}
console.log(volumeOfSphere(7.2))
