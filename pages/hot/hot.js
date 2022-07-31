// pages/hot/hot.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabstype:'实战排行',
    tabtype:'周',
    reweek:[],
    remonth:[],
    pathweek:[],
    pathmonth:[],
    showlist:[],
  },Tagschange(e){
    const tags=e.target.dataset.type;
    const tag=this.data.tabtype;
    
    this.setData({tabstype:tags});
    // this.setData({showlist: e.target.dataset.type=='实战排行' ? this.reweek : this.pathweek})
    this.ChangeTag(tags,tag);
  },Tagchange(e){
    const tag=e.target.dataset.type;
    const tags=this.data.tabstype;
 
    // this.setData({showlist: e.target.dataset.type=='周' ? (this.data.tabstype=='实战排行' ? this.reweek : this.pathweek) : (this.data.tabstype=='实战排行' ? this.remonth : this.pathmonth)})
    this.setData({tabtype: e.target.dataset.type})
    this.ChangeTag(tags,tag);
  },ChangeTag(tags,tag){
    // console.log(tags,tag);
let showlist=[];
if(tags=='实战排行'){
tag=='周' ? showlist=this.data.reweek : showlist=this.data.remonth
}else{
  tag=='周' ? showlist=this.data.pathweek : showlist=this.data.pathmonth
}
this.setData({showlist})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var thar=this;
    wx.request({
      //远程接口获取数据
      url: 'https://www.fastmock.site/mock/13f02988b79ff508a5ea5b244b5a08fd/wx/api/getlist',
      success(res){

        const {data:{data}}=res;
        console.log(data)
        // console.log(this.listdata)
        const {reweek,remonth,pathweek,pathmonth}=data;
        thar.setData({reweek,remonth,pathweek,pathmonth});
        thar.setData({showlist:thar.data.reweek})
        console.log(thar.data.showlist)
      }})
    // console.log(this.data.pathmonth)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})