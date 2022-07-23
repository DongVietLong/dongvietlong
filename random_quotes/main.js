let quotes = [
  "Hãy yêu một người có thể vì bạn mà làm tất cả chứ đừng yêu một người chỉ biết diễn tả tương lai!",
  "Con trai trưởng thành khi mất đi người mình yêu. Con gái trưởng thành khi yêu một người.",
  "Bạn không bao giờ nhận ra bạn yêu một người nhiều như thế nào cho đến khi thấy họ yêu một người khác.",
  "Những gì bạn cho đi một cách chân thành thì sẽ mãi là của bạn.",
  "Tình yêu bắt đầu khi 2 người nhìn thấy những mặt tích cực của nhau và kết thúc khi cả hai chỉ còn nhìn thấy những điểm tiêu cực của nhau.",
  "Nếu bạn không thể xây dựng một thành phố thì hãy xây lấy một trái tim hồng.",
  "Yêu thương cho đi là yêu thương có thể giữ được mãi mãi.",
  "Một nụ cười có thể thay đổi một ngày, một cái ôm có thể thay đổi một tuần, một lời nói có thể thay đổi một cuộc sống.",
  "Nếu bạn không thể là Mặt Trời thì cũng đừng làm một đám mây.",
  "Sự chia sẻ và tình yêu thương là điều quý giá nhất trên đời.",
  "Với thế giới, bạn chỉ là một hạt cát nhỏ nhưng với một người nào đó, bạn là cả thế giới của họ.",
  "Người ta có thể quên đi điều bạn nói, nhưng những gì bạn để lại trong lòng họ thì không bao giờ nhạt phai.",
  "Con người trở nên cô đơn vì trong cuộc đời, thay vì xây những chiếc cầu người ta lại xây những bức tường.",
];

function nextQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomElement = quotes[randomIndex];
  document.getElementById("quote").innerHTML = randomElement;
}
