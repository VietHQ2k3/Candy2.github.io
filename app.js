document.addEventListener("DOMContentLoaded", function() {
  var wap = document.querySelectorAll(".cau");
  var currentIndex = 0;

  // Hàm hiển thị phần tử tiếp theo và ẩn phần tử hiện tại
  function showNextItem() {
    // Ẩn phần tử hiện tại
    wap[currentIndex].classList.add("hide");

    // Tăng chỉ số để hiển thị phần tử tiếp theo
    currentIndex++;

    // Nếu đã hiển thị hết tất cả các phần tử, quay lại phần tử đầu tiên
    if (currentIndex >= wap.length) {
      return;
    }

    // Hiển thị phần tử tiếp theo
    wap[currentIndex].classList.remove("hide");

    // Gọi lại hàm sau 6 giây
    setTimeout(showNextItem, 6000);
  }

  // Hiển thị phần tử đầu tiên sau 6 giây
  setTimeout(showNextItem, 6000);

  setTimeout(function() {
    document.getElementById("Button").style.display = "block";
}, 13000); // Thời gian đợi 17 giây (17,000 milliseconds)

setTimeout(function() {
  document.getElementById("cuoi1").style.display = "block";
}, 16000); // Thời gian đợi 17 giây (17,000 milliseconds)

setTimeout(function() {
  document.getElementById("cuoi2").style.display = "block";
}, 19000); // Thời gian đợi 17 giây (17,000 milliseconds)

var cuoi1 = document.getElementById("cuoi1");
        setTimeout(function() {
            cuoi1.style.display = "none";
        }, 19000); // Thời gian đợi 16 giây (16,000 milliseconds)
});

