<!-- TS Notes -->

_Tuple_: JS does not have. [1, 2] - this is a tuple. Usually a number, then a string.
const x: {
[number, string] - Tuple type
}

_Enum_: JS does not have. enum {NEW, OLD}. Automatically enumerated global constant identifiers.
Assigns labels to numbers.

_Any Type_: \* Doesn't tell typescript anything. Store any type of value, non-specific. Any is "like" vanilla JS.
It just allows anything to be acceptable. TS wants to be more strict, unlike JS.

_Union Types_: allows for multiple types to be applied to same parameters.

_Literal Types_: A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

_Type Aliases_: Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type.

Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.

_Function Types_: Type Function tells JS that what the var receives has to be a function.
TS will accept the function printResult, but it is not a function that takes two arguments
Function types are created with the arrow function from JS.
Function types allow us to describe which types of functions specifically we want to use somewhere.

_Type Unknown_: Tells TS that the var doesn't have a type yet, but will have one at some point. A var with type unknown cannot
be equal or set to a var that has a more specific type like string. Unknown isn't like type Any, it is more restrictive.
Type Unknown is the better choice over type Any. It requires more specificity, using an if check allows you circumvent the type Unknown
to other Types. Type unknown shouldn't be used all the time, but it is better than type Any.

_Never Type_: 
