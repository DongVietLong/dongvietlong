let x = 20.245;

 console.log(Number.MAX_SAFE_INTEGER); // số an toàn lớn nhất
console.log(Number.MIN_SAFE_INTEGER); //số an toàn nhỏ nhất
console.log(Number.NEGATIVE_INFINITY); //số âm vô cùng
console.log(Number.NaN);//số không xác định
console.log(Number.POSITIVE_INFINITY);//số dương vô cùng
console.log( Number.isFinite(111))// kiểm tra có phải là số hữu hạn không   (Infinity, -Infinity,NaN trả về false)
console.log( Number.isFinite("111")) // kiểm tra có phải là kiểu dữ liệu number ko
console.log( Number.isFinite(111))
console.log( Number.isNaN("e")) // kiểm tra có phải là NAN
console.log( Number.isNaN(111))
console.log(x.toString());
console.log(x.toFixed(2)); //làm tròn số
console.log(x.toExponential(3)); //chuyển thành số mũ
console.log(x.toPrecision(7)); //cho phép độ dài của số


let string1 = 'bạn bè là \'friend\'';
let string2 =string1 +'good';
let string3 =string1.concat(" ","good") // congogj hai chuỗi
console.log(string2);
console.log(string3);
console.log(string2.length); //đo độ dài 
console.log(string2.slice(0,-6));//lấy chuỗi kí tự .slice(stt start,stt end)
console.log(string2.substring(20,-2));
console.log(string1.substr(6,9));// lấy chuỗi kí tự.substr(stt start,độ dài lấy)
console.log(string1.replace('là','is')); //thay thế 1 chuỗi kí tự,sẽ tạo ra môt chuỗi mới,
 //chỉ thay chuỗi đầu tiên thấy, phân biệt in hoa inh thường
console.log(string1.toUpperCase()); // viết hoa toàn bộ 
console.log('ABc'.toLowerCase()); // viết thườngtoàn bộ 
console.log('   a b c d '.trim()); // bỏ khoảng trắng ở hai đầu chuỗi
console.log('ab'.padStart(5,'$')); //thêm số lượng kí tự ở trước  cho đủ độ dài
let a ='a b c a b c'.indexOf('a',1); //đưa ra vị trí trong chuỗi, sau vị trí đặt ko tìm thấy sẽ trả về =-1.a
let b ='a b c a b c'.search('b'); //đưa ra vị trí đầu tiên trong chuỗi, ko tìm thấy sẽ trả về =-1.a
let c ='accv accd accb acr'.match(/acc/g); // đưa các string giống ra thành array.Tòm kiếm dưới dạng chính quy : / /g
let d ='accv accd accb acr'.includes(accv); //kiểm tra xem có chuỗi giống không nếu có thì true ko có thì false
delete (1,2,3,4)[]