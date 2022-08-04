# Có 6 phương thức tĩnh (static) trong class Promise
1. Promise.all : muốn nhiều promise thực hiện song song và đợi cho đến khi tất cả chúng sẵn sàng.
    
    Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
    ]).then(console.log); // 1,2,3 - khi các promise thành phần được giải quyết

2. Promise.allSettled : chỉ cần đợi cho tất cả các promise được giải quyết, bất kể kết quả là thành công hay lỗi. Mảng kết quả có hai trường hợp sau:
~
    {status:"fulfilled", value:result} - để có phản hồi thành công,
    {status:"rejected", reason:error} - cho các lỗi.
~

3. Promise.race : chỉ đợi promise đã giải quyết đầu tiên và nhận được kết quả (hoặc lỗi) của promise đó.
- Promise đầu tiên là nhanh nhất. Vì vậy, promise đó trở thành kết quả cuối cùng. Sau khi promise đầu tiên được giải quyết, tất cả các kết quả / lỗi khác đều được bỏ qua.

4. Promise.any : Chỉ đợi promise thành công đầu tiên được thực hiện và nhận được kết quả đó.
- Nếu tất cả các promise đã cho đều bị từ chối, thì promise trả về sẽ bị từ chối với AggregateError - một đối tượng lỗi đặc biệt lưu trữ tất cả các lỗi của promise trong thuộc tính errors.

5. Promise.resolve :
- Promise.resolve(value): Phương thức này được sử dụng để đảm bảo tính tương thích, khi một hàm mong đợi kết quả trả về là promise.

6. Promise.reject
- Promise.reject(error) tạo ra một promise bị từ chối với error như sau:
` let promise = new Promise((resolve, reject) => reject(error)); `