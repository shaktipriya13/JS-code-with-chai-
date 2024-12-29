// Date is usually calculated in milliseconds in javascript
// console.log(Temporal.Now.instant()); -proposal

// date: diff methods gives dates in diff. formats...choose the one format u need to display ur date in

let myDate=new Date(); //gives current instance date nd time
console.log(myDate);
// 2024-11-01T07:58:13.639Z

console.log(myDate.toString());
// Fri Nov 01 2024 13:28:13 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// Fri Nov 01 2024

console.log(myDate.toISOString());
// 2024-11-01T08:00:10.894Z

console.log(myDate.toJSON());
// 2024-11-01T08:00:38.243Z

console.log(myDate.toLocaleDateString());
//  1/11/2024

console.log(myDate.toLocaleString());
// 1/11/2024, 1:31:34 pm  ☕

console.log(myDate.toLocaleTimeString());
// 1:32:08 pm

// datatype of date in js is object☕
console.log(typeof myDate);


// to declare a specific date
// note: Months start from zero in javascript in array form
const mydate2=new Date(-1,2023,0,23);
console.log(mydate2.toDateString()); //Mon Jan 23 2023


/*
! Here’s a detailed explanation of each parameter in the Date(year, monthIndex, day, hour, minute, second, millisecond) constructor in JavaScript:

1. Year (year)
Type: Integer
Description: Represents the year of the date. It can be positive (for years A.D.) or negative (for years B.C.).
Example:
2023 refers to the year 2023 A.D.
-1 refers to the year 1 B.C.
Usage: new Date(2023, 0, 1) creates a date for January 1, 2023.

2. Month (monthIndex)
Type: Integer (0-11)
Description: Represents the month of the year. Months are zero-indexed:
0 = January
1 = February
2 = March
...
11 = December
Example: new Date(2023, 0, 1) creates a date for January 1, 2023, while new Date(2023, 11, 1) creates a date for December 1, 2023.

3. Day (day)
Type: Integer
Description: Represents the day of the month. The valid range is typically from 1 to 31 depending on the month and year.
Behavior: If you provide a value of 0, it refers to the last day of the previous month.
Example:
new Date(2023, 0, 1) refers to January 1, 2023.
new Date(2023, 0, 0) refers to December 31, 2022.
4. Hour (hour)
Type: Integer (0-23)
Description: Represents the hour of the day in a 24-hour format.
Example:
new Date(2023, 0, 1, 0) represents midnight (00:00) on January 1, 2023.
new Date(2023, 0, 1, 23) represents 11 PM (23:00) on January 1, 2023.
5. Minute (minute)
Type: Integer (0-59)
Description: Represents the minutes past the hour.
Example:
new Date(2023, 0, 1, 0, 30) represents 12:30 AM (midnight plus 30 minutes) on January 1, 2023.
6. Second (second)
Type: Integer (0-59)
Description: Represents the seconds past the minute.
Example:
new Date(2023, 0, 1, 0, 30, 45) represents 12:30:45 AM on January 1, 2023.
7. Millisecond (millisecond)
Type: Integer (0-999)
Description: Represents the milliseconds past the second.
Example:
new Date(2023, 0, 1, 0, 30, 45, 500) represents 12:30:45.500 AM on January 1, 2023.
*/
const myDate3 = new Date(2023, 11, 25, 10, 30, 15, 500);
console.log(myDate3.toLocaleDateString()); // Outputs: Mon Dec 25 2023 10:30:15 GMT+0000 (Coordinated Universal Time)


/* Note
If you omit any of the parameters after the year and monthIndex, they will default to zero:

The default for day is 1.
The default for hour, minute, second, and millisecond is 0. */

const myDate2 = new Date(2023, 0); // January 1, 2023, 00:00:00.000

// to write date in dd-yy-mm format, month starts from 1
let date4=new Date("2024-01-23"); //yy-mm-dd syntax
console.log(date4.toLocaleString()); //23/1/2024, 5:30:00 am

let date5=new Date("03-08-2003");
console.log(date5.toLocaleString());  //8/3/2003, 12:00:00 am

// in order to design poles, timestamps are used
let myTime=Date.now();
console.log(myTime); //1730453261879 (in milliseconds)
// We cannot get exact time in javascript. We can get only milliseconds. Thus, in order to compare two timelines, we can see the current milliseconds And the milliseconds from the time being

// In above example my time shows the time from the epoch time to the current time

let createdDate = new Date("2003-07-13");
console.log(createdDate.getTime()); //1058054400000

// Comparisons are always done in millisecond
console.log(Date.now()); //1730453877835 (time in milliseconds)
console.log(Math.floor((Date.now())/1000)); //1730453877835 (time in seconds)
/* Conversion to years
const myDate=new Date("02-03-2003");
console.log(Math.floor(((((myDate.getTime())/1000)/60)/24)/365));

const d1=Date.now();
console.log(Math.floor((((d1/1000)/60)/24)/365));

*/
let newDate= new Date(); //date is an object
console.log(newDate);
console.log(newDate.getMonth()+1); //month starts from 0 //nov -10
console.log(newDate.getHours());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay());


// String interpolation means backtics
// To get suggestions in vs code press ctrl+space
// Following can be done to customize date and time format. You. using the local string property.
newDate.toLocaleString('default',{
    weekday:"long", //ctrl+space,
    // timeZone:
})