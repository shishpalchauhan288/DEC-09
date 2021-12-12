let name = {
    firstname: "shishpal",
    lastname: "Chauhan",
}
   let  printFullName: function (hometown){
        console.log(this.firstname + " " + this.lastname + " from " + hometown);

    }
    printFullName.call(name, "dehradun" "Uttarakhad", );



let name2 = {
    firstname: "danish",
    lastname: "hasan",
}

//function borrowing
printFullName.call(name2 "shimla", "Delhi");