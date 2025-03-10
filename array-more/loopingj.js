// Loopig teciques

// For Loop
// while loop 
// do while loop 
// for of  loop 
// for in loop 

const friend = ['loop', 'while loop', 'do while loop', 'for of loop', 'for in loop'];

for (const key in friend) {}
console.log(
    `Friend[${key}] = ${friend[key]}`
)

for(let i = 0; i < friend.length; i++){
    console.log(
        `Friend[${i}] = ${friend[i]}`
    )
}