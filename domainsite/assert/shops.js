function getShops() {
  let url = 'https://blog.xindu.site/apis/api.plugin.halo.run/v1alpha1/plugins/plugin-afdian/afdian/listPlansAndSales'
  let httpRequest = new XMLHttpRequest()//第一步：建立所需的对象
  httpRequest.open('GET', url, true)//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
  httpRequest.send()//第三步：发送请求  将请求参数写在URL中
  /**
   * 获取数据后的处理程序
   */
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      let json = httpRequest.responseText//获取到json字符串，还需解析
      let jsonSource = JSON.parse(json)
      let sale_list = jsonSource['data']['sale_list']
      console.log(sale_list)
      let sales_shop = document.getElementById('sales_shop')
      const htmlList = []
      for (let i = 0; i < sale_list.length; i++) {
        let sale = sale_list[i]
        let name = sale['name']
        let pic = sale['pic']
        let desc = sale['desc']
        let plan_id = sale['plan_id']
        const html = '<div class="card">\n' +
          '        <div class="card__border"></div>\n' +
          '        <div style="margin: 0 auto">\n' +
          '          <img src="' + pic + '" alt="" class="decoration__img card__border_img">\n' +
          '        </div>\n' +
          '        <div class="card_title__container">\n' +
          '          <span class="card_title">' + name + '</span>\n' +
          '          <div class="card_paragraph">\n' + desc + '</div>\n' +
          '          <hr class="line" />\n' +
          '          <a href="https://afdian.com/item/' + plan_id.toString() + '" target=\"_blank\"><button class="button">跳转购买</button></a>\n' +
          '        </div>\n' +
          '      </div>'
        htmlList[i] = html
      }
      const diyHtml = '<div class="card">\n' +
        '        <div class="card__border"></div>\n' +
        '        <div style="margin: 0 auto">\n' +
        '          <img src="https://redirect.cnkj.site:8099/Lmo3me.webp?type=blog" alt="咸鱼" class="decoration__img card__border_img">\n' +
        '        </div>\n' +
        '        <div class="card_title__container">\n' +
        '          <span class="card_title">咸鱼</span>\n' +
        '          <div class="card_paragraph">' +
        '             更多服务咸鱼购买' +
        '              <img src="https://redirect.cnkj.site:8099/2WsCaG.webp?type=blog" alt="carolcoral">\n' +
        '          </div>\n' +
        '          <hr class="line" />\n' +
        '          <a href="https://m.tb.cn/h.gKSlvBk?tk=P9vA36GWgJ7 HU7632" target="_blank"><button class="button">跳转购买</button></a>\n' +
        '        </div>\n' +
        '      </div>'
      htmlList[sale_list.length] = diyHtml
      for (let i = 0; i < htmlList.length; i++) {
        let ele = htmlList[i]
        console.log(ele)
        sales_shop.insertAdjacentHTML('beforebegin', ele)
      }
    }
  }
}

window.onload = function() {
  getShops()
}
