const arr = [4,5,6,7,8];
//1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
const newArr = arr.filter(num => num > 5);
console.log(newArr)
//2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const sum = arr.reduce((total,item)=>total+item,0);
console.log(sum)
//3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
let V = 3;
if (arr.includes(V)) {
  console.log(V);
} else {
  console.log("không tìm thấy");
}
//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
let tatCaLonHon0 = arr.every((element) => {
    return element > 0;
  });
  if (tatCaLonHon0) {
    console.log("Tất cả các phần tử trong mảng đều lớn hơn 0");
  } else {
    console.log("Có ít nhất một phần tử không lớn hơn 0");
  }
  //5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
  let phanTuDauTien = arr.find((element) => {
    return element > 3;
  });
  
  console.log(phanTuDauTien);
  //6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
  const [first, ...rest] = arr;

console.log(first); 
console.log(rest); 
//7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

const persons = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ];
  
  for (const { name, age } of persons) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  //8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
  function tinhTong(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  console.log(tinhTong(1, 2, 3, 4, 5))
 // 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
 function chaoMung(...ten) {
    return `Welcome, ${ten.join(", ")}, ...`;
  }
  
  console.log(chaoMung("John", "Jane", "Bob"));
  // 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
  const book = {
    title: "Tiêu đề sách",
    author: "Tác giả",
    pages: 200,
    displayInfo() {
      console.log(`Tiêu đề: ${this.title}`);
      console.log(`Tác giả: ${this.author}`);
      console.log(`Số trang: ${this.pages}`);
    }
  };

  book.displayInfo();