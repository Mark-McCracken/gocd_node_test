import * as moment from "moment";
import * as fs from "fs";
const id = process.pid;
const processType = `run_process`;
const version = 'beta';
const dateFormatted = moment().format("YYYY-MM-DD Do HH:mm:ss");
const timeFormatted = moment().format("YYYY_MM_DD_HH_mm_ss");

console.log(`Running process`);
console.log(`Process ID: ${id}`);
console.log(dateFormatted);
console.log(version);

fs.writeFileSync(`./logs/${processType}/${process.pid}_${timeFormatted}`, `PID: ${id}\t${processType}\t${version}\t${new Date()}\n`);

console.log(`all done`);
