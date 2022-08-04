## bài 1
        const input =[ 1,2,3,4,5]
        var a =input.map( function (element) {
            return Math.pow(element,2)   
        exponent ) ;

        })
        console.log(a);




## bài 2
        const input2 =[1,-4,12,0,-3,29,-150];

        function sumPositives (variable) {
            let sum=0;
            variable.forEach(element => {        
                if(element > 0){
                    sum += element;
                };
            });
            return sum;
        }
        console.log(sumPositives(input2));




## bài 3 

        const input3 =[12,46,32,64];

        function avg(element) {
            let sum =0;      
            element.forEach(function(number){
                sum +=number;
            })
            return avg = sum / element.length;
        }
        console.log(avg(input3));

        var avgNumber =input3.map(function(number){
            return number/2;
        })
        console.log(avgNumber);





## bài 4

        const input4 = "George Raymond Richard Martin"
        function nameInitials(element) {
            let nameInitials ="" ;
            let arr = element.split(" ");
            arr.forEach((name1) => {
                nameInitials += name1[0];
            })
            return nameInitials;
        }
        var acronym = nameInitials(input4);
        console.log(acronym);





## Bài 5:Tìm số lón nhất ,nhỏ nhất ,độ lệch giữa 2 số 

         const input5 = [
            {
                name : "Jonh",
                age: 13,
            },
            {
                name : "Mark",
                age: 56,
            },
            {
                name : "Rachel",
                age: 45,
            },
            {
                name : "Nate",
                age: 67,
            },
            {
                name : "Jeniffer",
                age: 65,
            }    
        ]

        var ages = input5.map(function(person){
            return person.age;
        }) 
        var   min = ages[4];
        var   max =ages[0];
        for (let i = 0; i < ages.length; ++i) {
            if (max < ages[i]) {
                max = ages[i];
                
        }
        {
            if (min > ages[i]) {
                min = ages[i];
        }}
        };
        console.log([min,max,max-min]);


