# LuminaPay 项目介绍 📄
LuminaPay 是一个创新的加密货币支付平台，旨在为企业和个人用户提供全方位的支付解决方案

- **Welcome to the LuminaPay project! Please select your preferred language:**:
- **欢迎来到 LuminaPay 项目！请选择您喜欢的语言：**:


- [English](README.md)
- [中文](README-zh.md)

## 功能特点 🌟
- ✅ 支持虚拟货币支付（暂时仅支持TRON链的币种/合约支付）
- ❎ 支持动态增加支持的币种/合约/链
- ❎ 数据分析与管理，详细的财务报表统计
- ❎ 钱包黑名单管理
- ❎ 使用最新版本nextjs
- ❎ 支持多语言
- 
## 演示 🌟
- [客户端](https://lumima-pay.vercel.app/shop)
- [管理端](https://lumima-pay.vercel.app/admin) 
  - 账号：admin 
  - 密码：LuminaPay

## 为什么选择开源？ 🤔

1. 个人开发者，没有太多时间维护开发
2. 开源项目，只靠[赞助打赏](https://lumima-pay.vercel.app/shop)，没有太多动力

### 如何部署？ 🚀

**(1) 克隆项目代码：**
```bash
git clone https://github.com/lumina-pay/LuminaPay
cd LuminaPay/
```

**(2) 安装核心依赖：**
```bash
npm install
```

**(3) 修改配置：**
配置文件的模板在根目录的`.env.example`中，需复制该模板创建最终生效的 `.env` 文件：
```bash
cp .env.example .env
```

然后在`.env`中填入配置，以下是对默认配置的说明，可根据需要进行自定义修改：

```bash
#数据库地址
DATABASE_URL=prisma://xxxx
#trx链API地址，如果也是同样的链，可以不用修改
TRXSCAN_ENDPOINT=https://apilist.tronscanapi.com/api/new/token_trc20/transfers
#trx链的USDT的协议地址，如果也是同样的链同样的币，可以不用修改
TRX_USDT_TOKEN=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
#trx链的钱包地址
TRX_WALLET=xxxx
#admin 管理页面的账号密码
HTTP_BASIC_AUTH=admin:LuminaPay
#当前服务的域名
HOST=http://localhost:3000
```

**(4) 配置数据库：**
> 该项目使用[supabase](https://supabase.com/)作为数据库，有疑问联系作者赞助支持

```bash
npx prisma db push
```

**(5) 运行：**

```bash
npx run dev
```

## 联系我们 📞

如果你有任何问题或建议，欢迎通过以下方式联系我们：
- 邮件：[workautoman@proton.me](mailto:workautoman@proton.me)

我们期待与你一起，共同打造一个安全、高效、便捷的支付平台！ 🚀

## 源码参考来源，感谢支持 🙏
[uka](https://github.com/tans/uka) 当前仅支持BSC链的币/合约
