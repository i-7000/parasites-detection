/*
☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
☆                                                                                                 ☆
☆  系 统：蠕虫卵识别                                                                               ☆
☆  日 期：2023-08                                                                                 ☆
☆  开 发：i7000                                                                                   ☆
☆                                                                                                 ☆
☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
*/
Page({
    data: {
      imgurl: "",
      itemData: []
    },
  banquan: function () {
    wx.navigateToMiniProgram({
      appId: 'wx0dad5b4f2d845d51',
      path: '',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
    onLoad: function() {
        var res_imgurl = wx.getStorageSync("res_imgurl");
        var res_data = wx.getStorageSync("res_data");
         //res_data = res_data.toString();//强制转换为字符串
         res_data.replace(RegExp("http", "g"), "https");//全部替换
         console.log("替换后："+res_data);
         res_data = JSON.parse(res_data);

      var itemData = res_data["result"];
        this.setData({
          imgurl: res_imgurl,
          itemData: itemData,
          result_num: res_data["result_num"]
        });
      for (var a = this.data.itemData, s = [], e = 0, o = a.length; e < o; e++) {
            var i = (100 * Number(a[e].score)).toFixed(2);
            s.push(i);
        }
        this.setData({
            score: s
        }), console.log(this.data.itemData);
        
    }
});