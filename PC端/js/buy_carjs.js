// 多条件的筛选
$("#select1 dd").click(function () {
  $(this).addClass("selected").siblings().removeClass("selected");
  if ($(this).hasClass("select-all")) {
    $("#selectA").remove();
  } else {
    var copyA = $(this).clone();
    if ($("#selectA").length > 0) {
      $("#selectA a").html($(this).text());
    } else {
      $(".select-result dl").append(copyA.attr("id", "selectA"));
    }
  }
});
$("#select2 dd").click(function () {
  $(this).addClass("selected").siblings().removeClass("selected");
  if ($(this).hasClass("select-all")) {
    $("#selectB").remove();
  } else {
    var copyB = $(this).clone();
    if ($("#selectB").length > 0) {
      $("#selectB a").html($(this).text());
    } else {
      $(".select-result dl").append(copyB.attr("id", "selectB"));
    }
  }
});
$("#select3 dd").click(function () {
  $(this).addClass("selected").siblings().removeClass("selected");
  if ($(this).hasClass("select-all")) {
    $("#selectC").remove();
  } else {
    var copyC = $(this).clone();
    if ($("#selectC").length > 0) {
      $("#selectC a").html($(this).text());
    } else {
      $(".select-result dl").append(copyC.attr("id", "selectC"));
    }
  }
});
$("#selectA").on("click", function () {
  $(this).remove();
  $("#select1 .select-all")
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});
$("#selectB").on("click", function () {
  $(this).remove();
  $("#select2 .select-all")
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});
$("#selectC").on("click", function () {
  $(this).remove();
  $("#select3 .select-all")
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});
$(".select dd").on("click", function () {
  if ($(".select-result dd").length > 1) {
    $(".select-no").hide();
  } else {
    $(".select-no").show();
  }
});
