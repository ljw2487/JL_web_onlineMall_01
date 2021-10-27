let $cFirstItems = $('.navArea>.centerBox>ul:first-child>li')
let $cSecond = $('.navArea>.centerBox>ul:first-child>li>ul')

// 1. 一级中子元素 划入事件 - 展开二级
// .filter(':not(:animated)') 用于终止
$cFirstItems.mouseenter(function () { 
  $(this).children().eq(1).stop(true).slideDown("fast")
});

$cFirstItems.mouseleave(function () { 
  $(this).children().eq(1).stop(true).slideUp("fast")
});

// 2. 二级中子元素 划入事件 - 展开三级


// 3. 划出三级 隐藏三级


// 4. 划出二级 隐藏二级