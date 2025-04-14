/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '62E8zyVY14qVcwXRP11BfMV1km8JccV7DbdgalcSYZc',
    title: '亲爱的, 早上好',
    desc: `
    🗓️{{date.DATA}} 
    城市：{{city.DATA}} 
    今天是我们相识的第{marry_day.DATA}}天 
    今天是我们恋爱的第{{love_day.DATA}}天 
    值得纪念：{{birthday_message.DATA}} 
    💗：{{earthy_love_words.DATA}} 
    每日一句😋 
    中文：{{note_ch.DATA}} 
    English：{{note_en.DATA}}
    `
  },
  {
    id: '5R2Xf4My_0J_pzRg5PwM_slO-WWSkShR-XbqytIfqnE',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
