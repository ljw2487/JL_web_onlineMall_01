let $navL1_li = $(".navL1 > li")
let $navL2_li = $(".navL2 > li")

// 一级菜单hover关联二级菜单
$navL1_li.hover(
  function () {
    $(this).find('.navL2').stop(true).slideDown(300)
  },
  function () {
    $(this).find('.navL2').stop(true).slideUp(200)
  }
)
// 二级菜单hover关联三级菜单
$navL2_li.hover(
  function () {
    $(this).find('.navL3').stop(true,false).show(300)
  },
  function () {
    $(this).find('.navL3').stop(true,false).hide(200)
  }
)