<template>
<body>
<div class="hero is-info is-bold">
  <div class="hero-body">
      <div class="container">
         <h1 class="title">気温グラフ</h1>
         <h2 class="subtitle">各部屋の気温をみてみよう</h2>
      </div>
  </div>
</div>
<section class="level">
  <div class="level-left"></div>
  <div class="level-right">
    <div class="level-item tabs">
      <ul>
        <li class="is-active"><a>気温</a></li>
          <li><a>株価</a></li>
          <li><a>CO2</a></li>
        </ul>
     </div>
  </div>
  <div class="level-right">
    <div class="level-item">
      <a class="button is-greylight">フォロー</a>
    </div>
  </div>
</section>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="select" id="area_select_area">
        </div>
        <div class="select" id="data_type_select_area">
        </div>
        <canvas id="myChart1"></canvas>
      </div>
      <div class="column">
        <canvas id="myChart2"></canvas>
      </div>
  </div>
  <div>
    日別気温一覧
  </div>
  <table class="table" id="table">
    <thead id="thead">
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>
  </div>
</template>

<style>
.box {
    width: 800px;
}
.container {
    overflow: hidden;
}
</style>