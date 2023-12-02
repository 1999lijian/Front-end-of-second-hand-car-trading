// 内容显示切换效果
window.onload = function () {
  // 根据ID 获取元素
  // 最新上架
  var new_arrival = document.getElementById("new_arrival");
  var new_arrivals = document.getElementById("new_arrivals");
  // 准新车
  var quasi_new_car = document.getElementById("quasi_new_car");
  var quasi_new_cars = document.getElementById("quasi_new_cars");

  // 初始化显示页面一打开就显示 最新上架的内容
  new_arrival.setAttribute("style", "");
  new_arrivals.style.display = "block";

  // 如果鼠标碰到准新车 （鼠标悬停时onmouseover 和悬停离开后onmouseout的方法）
  quasi_new_car.onmouseout = quasi_new_car.onmouseover = function () {
    // 恢复最新上架原始样式
    new_arrival.setAttribute("style", "");
    new_arrivals.style.display = "none";

    quasi_new_car.setAttribute("style", "");
    quasi_new_cars.style.display = "block";
  };

  // 如果鼠标碰到最新上架 （鼠标悬停时onmouseover 和悬停离开后onmouseout的方法）
  new_arrival.onmouseout = new_arrival.onmouseover = function () {
    // 恢复准新车原始样式
    quasi_new_car.setAttribute("style", "");
    quasi_new_cars.style.display = "none";

    new_arrival.setAttribute("style", "");
    new_arrivals.style.display = "block";
  };
};
