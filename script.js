let general = "English, Mathematics";
let ScienceSubjects = "Physics, Chemistry, Biology, Technical Drawing "
let SocialScienceSubjects = "Accounting, Commerce, Marketing, Geography"
let ArtsSubjects = "Government, Economics, Literature, History"
/*Bolatito just got admitted to Greenfield High School as an Arts student.
To commence her studies, she needs to know the subjects
she will be taking as an Arts student.
All students have to take the General subjects.


Using if…else conditional statement, 
write a program that will help Bolatito determine the subjects 
she will be taking for the session using her class group.
Also, in the case of an invalid class group, your output should be the General subjects
*/
let my_dept='arts';

if (my_dept == 'science') {
    console.log(general +  ',' +  ScienceSubjects)
}
else if (my_dept == 'socialscience') {
    console.log(general + ',' + SocialScienceSubjects)
}
else if (my_dept == 'arts') {
    console.log(general + "," + ArtsSubjects);
}
else {
    console.log(general)
}

for (let i = 1; i < 20; i += 7){
    console.log(i)
}
/* Write a program that takes a positive number (num) 
and finds the power of 2 nearest to that number. 
The program stores the resulting value to pwr. 
Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. 
For example, 2 and 4 4 are both the powers of 2 nearest to 3.
The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”

*/

function powerof2(num) {
    let pwr = Math.pow(2, num);
    console.log(pwr)
    let statement = ` The number ${pwr} is the power of 2 nearest to ${num}.`;
    console.log(statement)
}

powerof2(40)