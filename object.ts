// object literal
const object1 = { name: "Oliver", age: 22 };

// object1 is not "object" type.
// object1 is "{ name: "Oliver", age: 22 }" type.

// Object.create
//  non-primitive type
const object2 = Object.create({ name: "Oliver", age: 22 });

declare function create(o: object | null):void;
create({ prop: 0 });
create(null); 
// not available below
// create(49); 
// create("string");
// create(false);
// create(undefined);
