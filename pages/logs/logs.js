//logs.js
const util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    logs: [],
    test1: [] 
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    } 
    )

    this.setData({
      test1: app.globalData.userInfo

    })
   // var getAppInfo = app.globalData.userInfo;
   // console.log(getAppInfo)
    
  }
})
