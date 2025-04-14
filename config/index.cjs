/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa56240231caeff7c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '72cb3d9ab89045f96dd6dbf7b69f0566',

  PROVINCE: '广东',
  CITY: '东莞',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojvM-6pxQwkWc3LYy9W6aBpTLVgg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1EoEL9L8g9wwHLBNKBhg93Ybhe4_UtIQ5m7raa1QNCs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '10-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2004', date: '10-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2025', date: '01-31',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2025-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-01-31' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '5R2Xf4My_0J_pzRg5PwM_slO-WWSkShR-XbqytIfqnE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojvM-6lHk9GCumYK5cDk_2NVVTVg',
    }
  ],

}

module.exports = USER_CONFIG

