<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
/* 清除默认样式 */

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
dl,
dt,
dd,
input,
textarea {
  padding: 0;
  margin: 0;
}

body {
  // padding-top: constant(safe-area-inset-top);
  // padding-left: constant(safe-area-inset-left);
  // padding-right: constant(safe-area-inset-right);
  // padding-bottom: constant(safe-area-inset-bottom);
  // 禁止浏览器点击选中蓝色背景
  // -moz-user-select: none;
  // /*火狐*/
  // -webkit-user-select: none;
  // /*webkit浏览器*/
  // -ms-user-select: none;
  // /*IE10*/
  // -khtml-user-select: none;
  // /*早期浏览器*/
  // user-select: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;
  height: 100%;
  // position: relative;
  color: #666666;
  background: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #666;
}

img {
  vertical-align: top;
  border: none;
}

div,
input,
textarea {
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input[type=number] {
  -moz-appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

textarea {
  resize: none;
}

.w {
  width: 1000px;
  margin: 0 auto;
}

.clearfix:after {
  content: '';
  display: block;
  clear: both;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

i,
em {
  font-style: normal;
}
.cur{
  cursor: pointer;
}

/* 以下是字体和css公共设置 */

// @font-face {
//     font-family: Han-Body;
//     src: url-loader('./../fonts/hanBody.ttf');
// }
html {
  // 字体类型 ,
  // font-family: "PingFangSC-Medium", "Microsoft YaHei", "Helvetica Neue", "Helvetica", "Hiragino Sans GB", Arial, sans-serif;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0 1000px white inset;
}

//清除浮动
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}

.cursor {
  cursor: pointer;
}

// svg
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}

// 表格操作链接
.form-operation-part {
  a {
    display: inline-block;
    margin: 0 10px;
  }
}

.top-filter {
  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px 10px 0;

    input {
      height: 30.5px;
      line-height: 30.5px;
    }
  }
}

aside {
  background: #eef1f6;
  padding: 8px 24px;
  margin-bottom: 20px;
  border-radius: 2px;
  display: block;
  line-height: 24px;
  font-size: 14px;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  >div{
    margin-bottom: 16px;
  }
  h4{
    font-weight: bolder;
    color: black;
    // font-size: 16px;
  }
  a {
    color: #337ab7;
    cursor: pointer;

    &:hover {
      color: rgb(32, 160, 255);
    }
  }
}

// vue-contextmenu 鼠标右键样式
.nav-icon-fontawe{
  left: 5px !important;
  font-size: 15px;
  margin-left: 5px;
}

// 抽屉左右边距
.dwawer-inner{
  margin: 0 20px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
