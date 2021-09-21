const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let counter = 0;

for (const char of arr) {
 
  setTimeout(() => {
    process.stdout.write(`${char}`);  
  }, counter );
  counter += 500;
}



