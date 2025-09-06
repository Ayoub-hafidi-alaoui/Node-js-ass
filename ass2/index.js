const path = require('node:path');
const fs = require("fs")
const {EventEmitter} = require("events")
const os = require("os")
const {pipeline} = require("stream")
const { promisify } = require("util");
const zlib = require("zlib");



// EX1
const logPath = ()=> {
    return {
        "File": __filename,
        "Dir": __dirname
    }
}
//console.log(logPath())

//EX2:
const extractFileName = (p)=> {
    return path.basename(p)
}

//console.log(extractFileName("/user/files/report.pdf"))

//EX3:
const buildPathFromObject = (object)=> {
    return path.join(...Object.values(object))
}

//console.log(buildPathFromObject({ dir: "/folder", name: "app", ext: ".js"}))

//EX4:

const getFileExtension = (p)=> {
    return path.extname(p)
}

//console.log(getFileExtension("/docs/readme.md"))

//EX5

const extractNameAndExtPath = (p)=> {
    const filename = path.basename(p, path.extname(p))
    const ext = path.extname(p)
    return {
        "Name": filename,
        "Ext": ext
    }
}
//console.log(extractNameAndExtPath("/logs/toto.log"))

//EX6
const isAbsolute = (p)=> {
    return path.isAbsolute(p)
}

//console.log(isAbsolute("/var/log/"))

//EX7

const joinMultipleSegments = (p1, p2)=> {
    return path.join(p1, p2)
}

//console.log(joinMultipleSegments("src/", "test.txt"))

//EX8

const relativePathToAbsolutePath = (p)=> {
    return path.resolve(p)
}

//console.log(relativePathToAbsolutePath("./index.js"))


//EX9
const joinTwoPaths = (p1, p2)=> {
    return path.join(p1, p2)
}

//console.log(joinTwoPaths("/folder1", "folder2/file.txt"))

//EX10
const  deleteAsyncFile = async (path)=> {
   fs.unlink(path, (err)=> {
    if(err) {
    console.log(err)
    return 
    }
    else {
        console.log("The file.txt is deleted.")
    }
   })
}

//console.log(deleteAsyncFile("/Users/ayoubmacbook/Documents/node js/assignements/ass2/test.js"))
// EX 11
const createAFolderAsync  = ()=> {
    try {
        fs.mkdirSync('assets');
        console.log('“Success”');
      } catch (err) {
       console.log(err)
    }
}

//createAFolderAsync()

//EX 12
const welcomeEmitter = new EventEmitter()
welcomeEmitter.on("start", ()=> {
    console.log("Welcome event triggered!")
})


//welcomeEmitter.emit("start")

//EX 13
const loginEmitter = new EventEmitter()

loginEmitter.on("login", (username)=> {
    console.log(`“User logged in: ${username}`)
})

//loginEmitter.emit("login", "ayoub")

//EX 14
const readFileSync = (path)=> {
    const data = fs.readFileSync(path, "utf8")
    console.log("the file content is: ", data)
}


//readFileSync("/Users/ayoubmacbook/Documents/node js/assignements/ass2/note.txt")

//EX15
const writeAsync = (path, content)=> {
    fs.writeFile(path, content, "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
      });
}

// writeAsync("./test.js", "content")

// EX16

const checkDirectoryExist = (path)=> {
    return fs.existsSync(path)
}
//console.log(checkDirectoryExist("toto.txt"))

//EX 17
const osPlatformAndOsArch = ()=> {
    return {
        "Platform": os.platform(),
        "Arch": os.arch()
    }
}

// console.log(osPlatformAndOsArch())

//EX 18
const readFileByChunk = (path)=> {
    const readStream = fs.createReadStream(path, {encoding: "utf8"})
    readStream.on("data", (chunk)=> {
        console.log(chunk)
    })
}
// readFileByChunk("test.js")

//EX 19
const readfileAndWriteToAnotherFile = (readPath, writePath)=> {
    const readStream = fs.createReadStream(readPath, {encoding: "utf8"})
    const writeStream = fs.createWriteStream(writePath, {encoding: "utf8"})
    readStream.pipe(writeStream)
}
// eadfileAndWriteToAnotherFile("./test.js", "./testWrite.js")

//EX 20


const pipe = promisify(pipeline)

async function compressFile(input, output) {
    try {
      await pipe(
        fs.createReadStream(input),   // Read input file
        zlib.createGzip(),                // Compress the data
        fs.createWriteStream(output)  // Write to output file
      );
      console.log("File compressed successfully!");
    } catch (err) {
      console.error("Pipeline failed:", err);
    }
  }


  compressFile("./test.js", "./test.zip")