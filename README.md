### 1、部分路由文件
| 请求方法 | 请求路径                     | get参数                 | post参数                                   | 备注                       |
| ---- | ------------------------ | --------------------- | ---------------------------------------- | ------------------------ |
| GET  | /                        | ----                  | ----                                     | 渲染首页                     |
| GET  | /register                | ----                  | ----                                     | 渲染注册页面                   |
| GET  | /login                   | ----                  | ----                                     | 渲染登录页面                   |
| POST | /register                | ----                  | email,password,nickname,secretQuestion,secret | 进行用户注册                   |
| POST | /login                   | ----                  | email,password                           | 验证邮箱和密码是否正确              |
| GET  | /login/forget            | ----                  | ----                                     | 渲染验证密保问题首页               |
| POST | /login/forget            | ----                  | email,secretQuestion,secret              | 验证密保问题是否正确               |
| GET  | /login/forget/upPassword | email                 | ----                                     | 渲染修改密码页面                 |
| POST | /login/forget/upPassword | ----                  | email,password                           | 修改密码后提交                  |
| GET  | /stetings/profile        | ----                  | ----                                     | 个人主页页面                   |
| POST | /stetings/profile        | ----                  | email，nickname，bio，gender，birthday，avatar | 提交更改个人信息                 |
| GET  | /stetings/admin          | ----                  | ----                                     | 渲染设置页面                   |
| POST | /changePwd               | ----                  | email,password                           | 验证原始密码是否正确               |
| POST | /changePwd1              | ----                  | email,password                           | 修改密码                     |
| POST | /delect                  | ----                  | email                                    | 删除用户                     |
| GET  | /topic/new               | ----                  | ----                                     | 渲染添加话题页面                 |
| GET  | /logout                  | ----                  | ----                                     | 退出登录                     |
| GET  | /topic/show              | publisher_id，topic_id | ----                                     | 根据发布者id和话题id查询topic数据并显示 |
| POST | /comment  

