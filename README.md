# Web_Project
一个web在线商城的项目

> 自制手办商城，用于练习`css`,`js`,`jQuery`,`mySQL`以及服务器搭建等技术
>
> ` 项目已转移至vue -> jl_web_figuremall `

#### 使用组件
- express

  - 用于创建server，传参等操作

  ```
  npm install express
  ```

- mySQL

  - 用于在JS中操作数据库

  ```
  npm install mysql
  ```

- swiper

  - 通过引入css和js文件，创建swiper框架，创建swiper对象，添加参数

  ```html
  <link rel="stylesheet" href="../css/swiper-bundle.min.css">
  <body>
  	<!-- Swiper -->
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
      <script src="../js/swiper-bundle.min.js"></script>
      <script>
          var swiper = new Swiper(".mySwiper", {
          });
      </script>
  </body>
  ```

  详情参考：[Swiper中文网](https://www.swiper.com.cn/)

- ...

#### 项目文件

- html
  - index.html (homepage)
  - login.html (login & register)
  - product.html
  - productDetail.html
  - myDetail.html
- css
  - stylesheet.css (scss)
- js
  - app.js (run server) - node app.js
  - nav.js 
- sql

