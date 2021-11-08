name_of_students = [];
function submit(){
    var name_1=document.getElementById("name1").value;
    var name_2=document.getElementById("name2").value;
    var name_3=document.getElementById("name3").value;
    var name_4=document.getElementById("name4").value;
    name_of_students.push(name_1);
    name_of_students.push(name_2);
    name_of_students.push(name_3);
    name_of_students.push(name_4);
    console.log(name_of_students);
    document.getElementById("array_name").innerHTML=name_of_students;
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="inline-block";
}
function sort(){
    name_of_students.sort();
    console.log(name_of_students);
    document.getElementById("array_name").innerHTML=name_of_students;
}