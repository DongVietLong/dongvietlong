# String Js: 
-.length kiểm tra độ dài của chuỗi
- .indexOf('') kiểm tra vị trí
- .trim để loại bỏ khoảng trắng
- .split cắt một chuỗi thành 1 aray bằng 1 điểm chung hợp lý
- .slide(thamsodau, thamsocuoi)
- replace(ghi đè) .replace('JS', 'Javascript') : thay thế JS bằng Javascript
- lastIndexOf() trả về chỉ mục (vị trí) của chuỗi chỉ định
- .toUpperCase() .toLowerCase() :chuyển đổi chuỗi thành chữ hoa, và chữ thường
- .search() tìm kiếm giá trị đã chỉ định trong chuỗi và trả về vị trí phù hợp.

# number JS
* các thuộc tính của number
- constructor: Trả về hàm tạo ra instance của đối tượng (object). Mặc định nó là đối tượng Number.
- prototype: Cho phép bạn thêm các thuộc tính và phương thức cho bất kỳ đối tượng nào (Number, Boolean, String và Date,…).
- MAX_VALUE: Trả về số lớn nhất có thể trong JavaScript
- MIN_VALUE: Trả về số gần với số 0 nhất trong JavaScript
- POSITIVE_INFINITY: Trả về giá trị dương vô cực (Infinity)
- NEGATIVE_INFINITY: Trả về giá trị âm vô cực (-Infinity)
* các phương thức của number: 
.toString(): trả về giá trị chuỗi từ giá trị số
.toExponential()  trả về 1 chuỗi được viết với số đc làm tròn bằng cách sử dụng ký hiệu số mũ
.toFixed() trả về 1 chuỗi ký tự đc làm tròn ra dấu thập phân của số chữ số đc chỉ định
.toPrecision() Trả về tổng số chữ số (bao gồm số chữ số ở bên trái và bên phải của dấu thập phân) với độ dài được chỉ định.
.isFinite() Kiểm tra xem một giá trị nào đó có phải là số hữu hạn hay không
.isInteger() Kiểm tra xem một giá trị nào đó có phải là số nguyên hay không
.isNaN() Kiểm tra xem một giá trị nào đó có phải là NaN hay không


# reduce() thực thi một hàm lên các phần tử của mảng
+ reduce() nhận 2 biến truyền vào:
#1. function 
#2. giá trị khởi tạo(biến lưu trữ)

# find() để tìm kiếm các phần tử trong mảng. luôn trả về 1 đối tượng tìm thấy đầu tiên

# filter() để tìm kiếm các phần tử trong mảng. trả về tất cả các đối tượng tìm được
# map() không thay đổi trực tiếp lên mảng gốc
# forEach() duyệt qua từng phần tử của mảng, thay đổi trực tiếp trên mảng
VD: array.forEach(function(item, index) {
console.log(item. index)
}); // sẽ lấy ra từng phần tử(item) và chỉ số(index) của phần tử đó //

# push thêm 1 hoặc nhiều phần tử vào cuối mảng .push('Element1', 'Element2');
# concat nối Array: Mang1.concat(Mang2) hợp nhất Bien2 vào Bien1
