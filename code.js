var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ]
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
}

function SayMyName(){
    console.log("Students");
    for (var i=0; i<users['Students'].length;i++){
        n = i+1;
        var numLetters = users.Students[i].first_name.length+users.Students[i].last_name.length;
        console.log(n,'-',users.Students[i].first_name,users.Students[i].last_name,'-',numLetters);
    }
    console.log("Instructors");
    for(var k =0;k<users['Instructors'].length;k++){
        m=k+1;
        var numLetters = users.Instructors[i].first_name.length+users.Instructors[i].last_name.length;
        console.log(m,'-',users.Instructors[i].first_name,users.Instructors[i].last_name,'-',numLetters);
    }
}
SayMyName();