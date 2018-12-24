  $(document).ready(function () {
  	$(".reg_btn1").click(function () {
      $(".title").text("Become a Grazeo Affiliate");
      $(".lead").text("And earn money by sharing ads through your social media");
      $(".custom_btn").attr("href", "http://www.facebook.com/")
      	$(this).addClass('active').siblings().removeClass('active');
    });
    $(".reg_btn2").click(function () {
      $(".title").text("Become a Seller");
      $(".lead").text("And only pay marketing for actual sales");
      $(".custom_btn").attr("href", "http://www.google.com/")
      	$(this).addClass('active').siblings().removeClass('active');
    });
  }); 