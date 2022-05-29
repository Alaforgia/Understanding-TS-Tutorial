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
