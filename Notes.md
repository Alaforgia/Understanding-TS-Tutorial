<!-- TS Notes -->

Tuple: JS does not have. [1, 2] - this is a tuple. Usually a number, then a string.
const x: {
[number, string] - Tuple type
}

Enum: JS does not have. enum {NEW, OLD}. Automatically enumerated global constant identifiers.
Assigns labels to numbers.

Any Type: \* Doesn't tell typescript anything. Store any type of value, non-specific. Any is "like" vanilla JS.
It just allows anything to be acceptable. TS wants to be more strict, unlike JS.

Union types: allows for multiple types to be applied to same parameters.

Literal types: A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

Type Aliases: Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.
