const data = [
  {
    name1: "sujal",
    age: 20,
    course:"cse",
    gender: "male",
    study:[{projectname:"Cravings", timeline:2, role:"frond-end"}],
  },
  {
     name2: "rohit",
    age: 19,
    course:"cs-it",
    gender: "male",
     study:[{projectname:"Cravings", timeline:2, role:"frond-end"},
            { projectname: "map", timeline:4, role:"backend"},
     ],
      
  },
  {
     name3: "sagar",
    age: 20,
    course:"mech",
    gender: "male",
     study:[{projectname:"newOne", timeline:6, role:"ppt"}],
  },
  {
     name4: "abhishek",
    age: 20,
    course:"civil",
    gender: "male",
    study:[{projectname:"database", timeline:9, role:"mainPerson"}],
  },
];

//   console.log(data);
  data[1].age= 34;
  data[2].age =45;
//   data[3].gender="male2";

  console.log(data);

var  name1 ="rohit";
var marks= 88;

console.log("student with name:",name1,"secore", marks);
console.log(`student with name ${name1}`);



  
  
  