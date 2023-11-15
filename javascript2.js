
// 1 ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე


for (let a = 5; a <=100; a++) {
    const element = a;
    
    console.log(element);
    
   } 

//  2  მოცემულია მასივი:
//    let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
//    ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
for (let i = 0; i < array1.length; i++) {
    const shedegi = array1[i];
    if (shedegi > 0 && shedegi < 10)
    console.log(shedegi);
    
}

//  3 მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let a = 0; a < array2.length; a++) {
    const element = array2[a];
    console.log(element);
    if (element == 5) {
        
        console.log("aris");
        break
        
    }
    
}

//  მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3= [1, 2, 3, 4, 5];
// for (let i = 0; i < array3.length; i++) {
//     const element = array3[i];
//     console.log(element);

    let sum = 0
    array3.forEach(array3=> sum += array3)
    console.log(sum);

    //  5 მოცემულია მასივი:
    //  let array4= [1, 2, 3, 4, 5];
    //  ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

    let array4 = [1, 2, 3, 4, 5];
    let sum1 = 0
    array4.forEach(array4=> sum1+= array4)
    let avg = sum1/array4.length
    console.log(avg);

    // 6 მოცემულია მასივი
    // გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
    // let array5 = [1, 2, 3, 7, 6, 9];

    let array5 = [1, 2, 3, 7, 6, 9];

    for (let i = 0; i < array5.length; i++) {
        const element = array5[i];
        if (element == 7) {
            continue
                       
        }
        console.log(element);
        
    }


    // 7   მოცემულია ობიექტი:

    let user = {
        firstName: "giorgi",
        lastName: "smith",
        Age: 20 ,
        studentStatus: "active"

        }

        console.log(user.studentStatus);

        let userbracket = {
            firstName: "giorgi",
            lastName: "smith",
            Age: 20 ,
            studentStatus: "active"
    
            }
            console.log(userbracket["studentStatus"]);

            // 8 მოცემულია ობიექტი :თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
            // hello;
            // თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
            // თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
            // ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

            let user1 = {
                Name1: "giorgi",
                age1: 20 ,
                studentStatus1:"active"
            }
            //    console.log(user1.age1);
               if (user1.age1 < 22 && user1.studentStatus1 == "active")   {
                console.log("hello");
                
               }
               if (user1.Name1 == "giorgi") {
                console.log("hello  giorgi");
                
               }
               
                if (user1.studentStatus1 == "active") {
                    console.log("hello world");
                    
                } else {
                    console.log("Error");
                    
                }

//  9 let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//  1.ამოიღეთ მარტო ლუწი რიცხვები
//  2.ამოიღეთ კენტი რიცხვები 

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
 for (let i = 0; i < array.length; i++) {
    const element = array[i];
     if (element % 2 == 0) {
        console.log(element);
        
     }
    
 }

//  10  მოცემულია მასივი :კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

 let user9 = [
    {userName2: "giorgi9" , status2: "false "},
    {userName3: "levani" , status3: "false"},
    {userName4: "Anna ", status4: "true"}
 ]
 for (let i = 0; i < user9.length; i++) {
    const element4 = user9[i];
    console.log(element4);    
 }
 
 //    ვერ გავაკეთე :)))
 
 
                
                
               
               
            
                
                
            
             
            





    
    



   