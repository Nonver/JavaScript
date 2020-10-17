// pages/indexr/indexr.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    triumph:0, /* 获胜次数 */
    imagesUrl:'../image/1.png', /* 机器的石头剪刀布 */
    NameUrl:'../image/w.png', //我的
    txt:'猜一猜谁赢了呀',
    imgArr:['../image/1.png','../image/2.png','../image/3.png']
  },
  
  gameTap:function (e) {
    // 获取点击的是剪刀还是石头或者布
    var i = e.currentTarget.dataset.gameId; //i是0-2
    var B = this.data.imagesUrl.substring(9, 10);// 机器人的图片id
    // 点击切换我的图片为剪刀石头布
    this.setData({
      NameUrl:this.data.imgArr[i]
    })
    clearInterval(this.data.time)// 暂停定时器
    if(i+1 == B){
      this.setData({
        txt:'啊一样的，平局！'
      })
    }else if(i+1==1 && B==3){
      this.setData({
        triumph:this.data.triumph+1,
        txt:'恭喜你赢啦'
      })
    }else if(i+1==2 && B==3){
      this.setData({
        txt:'你输啦，对面是布！'
      })
    }else if(i+1==2 && B==1){
      this.setData({
        triumph:this.data.triumph+1,
        txt:'你赢啦，对面出剪刀！'
      })
    }else if(i+1==3 && B==1){
      this.setData({
        txt:'呜呜呜，又输了'
      })
    }else if(i+1==1 && B==2){
      this.setData({
        txt:'呜呜呜，又输了'
      })
    }else if(i+1==3 && B==2){
      this.setData({
        triumph:this.data.triumph+1,
        txt:'哈哈哈，赢咯'
      })
    }
  },

  // 重置我的图片
  btnAgain:function (){
    this.setData({
      NameUrl:'../image/w.png',
      txt:'猜一猜谁赢了呀'
    })
    this.Tinme()
  },
/* ----------------------------------------石头剪刀布轮播全局函数------------------------------------------ */
Tinme:function(){
  // 定时器，剪刀石头布的轮换
  var thisa = this; // 定义一个this，this在定时器里不可用
  var index = 1;
  var timer = setInterval(function () {
    if(index == 1){
      thisa.setData({
        imagesUrl:'../image/1.png'
      })
      index++
    }else if(index == 2){
      thisa.setData({
        imagesUrl:'../image/2.png'
      })
      index++
    }else if(index == 3){
      thisa.setData({
        imagesUrl:'../image/3.png'
      })
      index=1;
    }
  }, 50);
  this.setData({
    time:timer
  })
  },
  /* ---------------------------------------------------------------------------------- */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Tinme()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})