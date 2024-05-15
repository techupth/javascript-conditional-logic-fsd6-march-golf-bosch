function calculateStudentGrade(score) {
// Start coding here
//คะแนน 0 - 59 จะได้เกรด F
//คะแนน 60 - 69 จะได้เกรด D
//คะแนน 70 - 79 จะได้เกรด C
//คะแนน 80 - 89 จะได้เกรด B
//คะแนน 90 - 100 จะได้เกรด A
//กรณีที่ไม่ตรงกับเงื่อนไขใด ๆ เลย จะได้เกรด F
if(score >=90){
  return "A"
}else if(score >=80 && score<=89){
  return "B"
}else if(score >=70 && score<=79){
  return "C" 
}else if(score >=60 && score<=69){
  return "D"
}else if(score<=50){
  return "F"
}else{
  return "F"
}

}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);

