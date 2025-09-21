const http = require("http")
const fs = require("fs")


const app = http.createServer((request, response)=> {
    const {url, method} = request    
    if(url == "/user" && method == "POST") {
        let data = ""
        request.on("data", (chunk)=> {
            data += chunk
        })
        request.on("end", ()=> {
            const parsedData = JSON.parse(data)
            const readStream = fs.createReadStream("./users.json")
            let users = ""
            readStream.on("data", (chunk)=> {
                users +=chunk
            })
            readStream.on("end", ()=> {
                const parsedUsers = JSON.parse(users)
                const user = parsedUsers.find((user)=> {
                    return user.email == parsedData.email
                })
                if(user) {
                    response.writeHead(409, {"Content-Type": "application/json"})
                    response.end(JSON.stringify({'message': 'email alread exist'}))
                }
                else {
                    parsedUsers.push(parsedData)
                    const writeStream = fs.createWriteStream("./users.json")
                    writeStream.write(JSON.stringify(parsedUsers))
                    response.writeHead(200,  {"content-type": "application/json"})
                    response.end(JSON.stringify({"message": "User added succefully" }))
                }
            })
            
            
        })
    }
    else if(url == "/user" && method == "GET") {
        const readStream = fs.createReadStream("./users.json")
        let users = ""
        readStream.on("data", (chunk)=> {
            users +=chunk
        })
        readStream.on("end", ()=> {
            const parsedUsers = JSON.parse(users)
            response.writeHead(200,  {"content-type": "application/json"})
            response.end(JSON.stringify(parsedUsers))

        })
    }
    else if(url.startsWith("/user") && method == "PATCH") {
      const id = url.split("/")[2]
      if(!id) {
        response.writeHead(400, {"Content-Type": "application/json"})
        response.end(JSON.stringify({"message": "Bad request"}))
      }
      else {
        let data = ""
        request.on("data", (chunk)=> {
            data += chunk;
        })
        request.on("end", ()=> {
            const readStream = fs.createReadStream("./users.json")
            let users = ""
            readStream.on("data", (chunk)=> {
                users +=chunk
            })
            readStream.on("end", ()=> {
                const parsedUsers = JSON.parse(users)
                const parsedData = JSON.parse(data)
                const user = parsedUsers.find(user => user.id == id)
                if(!user) {
                    response.writeHead(404, {"Content-Type": "application/json"})
                    response.end(JSON.stringify({"message": "User Id not found"}))
                }
                else {
            
                    user.age = parsedData.age
                    parsedUsers[parsedUsers.indexOf(user)] = user
                    const writeStream = fs.createWriteStream("./users.json")
                    writeStream.write(JSON.stringify(parsedUsers))
                    response.writeHead(200, {"Content-Type": "application/json"})
                    response.end(JSON.stringify({"message": "User age updated succeffully"}))
                }
                

            })
        })


      }
    }
    else if(url.startsWith("/user") && method == "DELETE") {
        const id = url.split("/")[2]
      if(!id) {
        response.writeHead(400, {"Content-Type": "application/json"})
        response.end(JSON.stringify({"message": "Bad request"}))
      }
      else {
        const readStream = fs.createReadStream("./users.json")
        let users = ""
        readStream.on("data", (chunk)=> {
            users +=chunk
        })
        readStream.on("end", ()=> {
            const parsedUsers = JSON.parse(users)
            const user = parsedUsers.find(user => user.id == id)
            if(!user) {
                response.writeHead(404, {"Content-Type": "application/json"})
                response.end(JSON.stringify({"message": "User Id not found"}))
            }
            else {
                parsedUsers.splice(parsedUsers.indexOf(user), 1)
                const writeStream = fs.createWriteStream("./users.json")
                writeStream.write(JSON.stringify(parsedUsers))
                response.writeHead(200, {"Content-Type": "application/json"})
                response.end(JSON.stringify({"message": "User was deleted succeffully"}))
            }
        })
        

      }
    }
    else if(url.startsWith("/user") && method == "GET") {
        const id = url.split("/")[2]
      if(!id) {
        response.writeHead(400, {"Content-Type": "application/json"})
        response.end(JSON.stringify({"message": "Bad request"}))
      }
      else {
        const readStream = fs.createReadStream("./users.json")
        let users = ""
        readStream.on("data", (chunk)=> {
            users +=chunk
        })
        readStream.on("end", ()=> {
            const parsedUsers = JSON.parse(users)
            const user = parsedUsers.find(user => user.id == id)
            if(!user) {
                response.writeHead(404, {"Content-Type": "application/json"})
                response.end(JSON.stringify({"message": "User Id not found"}))
            }
            else {
                
                response.writeHead(200, {"Content-Type": "application/json"})
                response.end(JSON.stringify(user))
            }
        })
        

      }
    }
})

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})


//PART2:
/*
3. Node js event loop is a part of node js that handle callbacks functions and promises
4. The event queue is the part that handles callbacks promises timers (async code). Callstack is the part that handles the sync code like loop normal variables
The even loop is the one responsible if the code is blocking so it will send it to the callstack if it is not blocking it will send it to the event queue 
5. Node js thread pool is a pool of threads that handles the number of threads. It is set using an env variable UV_THREADPOOL_SIZE
6. handles blocking and not blocking using event loop. If the code is blocking it will execute it in the callstack if it is not blocking it will execute it in event queue 

*/


/*
Bonus

/**
/**
 * @param {number[]} nums
 * @return {number}
 
var majorityElement = function(nums) {
    const majorityCheck = nums.length/2
    for(let i=0;i<nums.length;i++) {
        const numbers =  nums.filter(number => number == number)
        if(numbers.length > 0 && numbers.length > majorityCheck) {
            return numbers[0]
        }
    }
    
};
*/