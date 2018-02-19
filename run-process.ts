import * as moment from "moment";
import * as fs from "fs";
const id = process.pid;
const processType = `run_process`;
const version = 'alpha';

console.log(`Running process`);
console.log(`Process ID: ${id}`);

console.log(moment().format("YYYY-MM-DD Do HH:mm:ss"));

console.log(version);

fs.writeFileSync(`./logs/${processType}/${process.pid}`, `PID: ${id}\t${processType}\t${version}\t${new Date()}\n`);

console.log(`all done`);
