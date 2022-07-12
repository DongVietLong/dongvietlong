# t3h-reactjs
- 👋 Hi, I’m Hồ Việt Mỹ

- Câu 1 : 
 - Spread operator là ba dấu chấm ( ...), có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy
 - Ex : var numbOne = [1, 2, 3];
 -     var numbTwo = [4, 5, 6];
 - //lấy các value của numbOne và numbTow thành value của  numberSum => mình muốn lấy tất cả các value của 2 biến khác nhau thì mình sẽ dùng Spread operator 
 -     var numbSum = [...numbOne, ...numbTwo];
 - Rest operator lấy các thuộc tính của oj khi loại trừ
 - Destructuring là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array.
 -   Có hai loại Destructuring: Destructuring Objects và Destructuring Arrays  
  -   
![Destructuring](https://user-images.githubusercontent.com/89347153/178330917-18626f5c-b34e-4e8b-9541-407a15c315f3.png)

  //mình muốn lấy những thuộc tính trong vehicleOne nhưng k phải tất cả thì mình sẽ dùng Destructuring để lấy những thuộc tính mình cần 
  
  - Câu 2 : 
  - trường hợp k cử dụng "use strict" nó sé là undefined hoặc là windown
  - sử dụng "use strict" thì nó sẽ trỏ đến đối tượng chưa oj đó 
  - khi mình tạo một oj mới thì this sẽ đc set cho oj mới đc tạo
  - call(một kiểu string) vs apply(mảng) cho phép set giá trị của this khi gọi function.
  
  - Câu 3:
  - tham chiếu của biến con vẫn bị thay dổi  vì do childer ( em nghĩ nó là một oj khi mình Spread operator thì childer nó đc lưu ở trong heap)
  - em nghĩ dùng arowfuction 
 
  

