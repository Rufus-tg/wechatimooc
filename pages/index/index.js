// index.js
// 获取应用实例
// const app = getApp()

Page({
  data:{
    that:[],
    iconarr:[],
    showIcon:true,
    swiperarr:[],
    projectarr:[],
    searchlist:null,
    searchempty:false
//  iconarr:[{src:'../../resources/推荐.png',title:'推荐'},{src:'../../resources/绿洲_路径_轨迹.png',title:'轨迹'},{src:'../../resources/防护.png',title:'实战'},{src:'../../resources/储值活动.png',title:'活动'}],
//  showIcon:true,
//  swiperarr:[{src:'https://img.mukewang.com/62c650fd09e34f1218000600.png'},{src:'https://img.mukewang.com/62af35af099273e218000600.png'},{src:'https://img.mukewang.com/62d4c68c0971cdcb00000000.png'}],
//  projectarr:[{src:'https://img1.mukewang.com/szimg/5fbf616b09c6210a12000676.png',title:'C语言系统化精讲  重塑编程思想 打造坚实的开发基础',tag:'进阶',usernum:1589,price:299},{src:'https://img1.mukewang.com/szimg/5fdb394608def73a00000000.jpg',title:'Java高级面试突围课 ,一次搞定Java中高级面试的必考点',tag:'高阶',usernum:1137,price:299},{src:'https://img3.mukewang.com/szimg/5ed0bbc908af61c706000338.jpg',title:'数据可视化入门到精通-打造前端差异化竞争力',tag:'进阶',usernum:1278,price:999},{src:'https://img1.mukewang.com/szimg/5fb49a98095edbf712000676.png',title:'2022持续升级 Vue3 从入门到实战 掌握完整知识体系',tag:'进阶',usernum:2534,price:348},{src:'https://img3.mukewang.com/szimg/5f979613090e48bb12000676.png',title:'Go+Python打造电商系统 自研微服务框架 抓紧高薪机遇',tag:'进阶',usernum:422,price:1680}],
  },
  //页面级别的周期函数
  onLoad(){
    var thar=this;
    wx.request({
      //远程接口获取数据
      url: 'https://www.fastmock.site/mock/13f02988b79ff508a5ea5b244b5a08fd/wx/api/getData',
      success(res){

        const {data:{data}}=res;
        console.log(data)
        const {iconarr,swiperarr,projectarr}=data;
        thar.setData({iconarr,swiperarr,projectarr});
     
      }
    })
    //页面被加载到内存里的时候，或者说页面第一次启动的时候执行
    // console.log(app.sayHello(),app.getDate,'indexonLoad')
    // console.log('onLoad')
    //设置转发分享功能
    // wx.showShareMenu({
    //   withShareTicket: true,
    //   menus: ['shareAppMessage', 'shareTimeline']
    // })
  },
  //页面被加载到内存里的时候，或者说页面第一次启动的时候执行
  //并且，页面被渲染完成之后自动执行
  onReady(){
    // console.log('onReady')
  },
  onShow(){
//页面每次被展示的时侯执行
// console.log('onShow')
// wx.showToast({
//   //微信弹窗功能 
//   title: 'title',
// }),
// wx.switchTab({
//   //微信跳转功能
//   url: '/pages/logs/logs',
// }),

  },
  onHide(){
//页面每次被取消展示的时侯执行
// console.log('onHide')
  },
  onPullDownRefresh(){
    //每次下拉刷新时执行
    // console.log('下拉刷新')
  },
  onReachBottom(){
    //页面到最底部时自动执行
    // console.log('到最底部了')
  }, onPageScroll(e){
    //页面滚动中执行
    // console.log('滚动中》》》')
  },
  onShareAppMessage(msg){
    //点击分享按钮时自动执行
    // console.log('正在准备分享')
    // return{
    //   title:'share',
    //   "pagePath": "pages/index/index",
    // }
  },
 shuru(e){  
  const value=e.detail.value;
  let searchlist=null;
if(value){
  searchlist=this.data.projectarr.filter(item => item.title.indexOf(value)>-1)
}
 // value ? this.setData({showIcon:false}):this.setData({showIcon:true})
 this.setData({showIcon: value? false : true,searchlist})
 }})
