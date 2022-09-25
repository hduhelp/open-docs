import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/develop/': [
    '/develop/README.md',
    '/develop/get-access-token.md',
    {
      text: '时间 API',
      collapsible: true,
      children: [
        '/develop/time/time.md',
      ],
    },
    {
      text: '用户 API',
      collapsible: true,
      children: [
        '/develop/user/model.md',
        '/develop/user/info.md',
      ],
    },
    {
      text: '学生/教师 API',
      collapsible: true,
      children: [
        '/develop/teaching/person-info.md',
        '/develop/teaching/student-info.md',
        '/develop/teaching/schedule-now.md',
        '/develop/teaching/schedule.md',
      ],
    },
    {
      text: '教室 API',
      collapsible: true,
      children: [
        '/develop/classroom/empty-classrooms.md',
      ],
    },
    {
      text: '后勤 API',
      collapsible: true,
      children: [
        '/develop/logistics/card.md',
        '/develop/logistics/electric.md',
      ],
    },
    {
      text: '通知 API',
      collapsible: true,
      children: [
        '/develop/notify/notify.md',
      ],
    },
    {
      text: '钉钉 API',
      collapsible: true,
      children: [
        '/develop/dingtalk/new-group.md'
      ],
    },
    {
      text: 'QQ频道 API',
      collapsible: true,
      children: [

      ],
    },
    '/develop/contributing/contributing.md',
    '/develop/deprecated.md'
  ],
}
