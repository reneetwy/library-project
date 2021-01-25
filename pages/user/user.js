Page({

  data: {
  
  },
  onLoad: function() {
   
  },
  login: function(e) {
    console.log(e)
    let user_info = e.detail.userInfo
    this.setData({user:user_info})

  }
})

