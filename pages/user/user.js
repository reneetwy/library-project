Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    // View whether user authorization is obtained
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // User authorization is obtained. You can directly call the `getUserInfo` API to get the profile photo and alias.
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  }
})