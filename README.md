# LuminaPay Project Introduction 📄
LuminaPay is an innovative cryptocurrency payment platform designed to provide comprehensive payment solutions for businesses and individual users.

- **Welcome to the LuminaPay project! Please select your preferred language:**:
- **欢迎来到 LuminaPay 项目！请选择您喜欢的语言：**:

- [English](README.md)
- [中文](README-zh.md)

## Features 🌟
- ✅ Supports cryptocurrency payments (currently only supports TRX chain tokens/contracts)
- ❎ Supports dynamic addition of supported tokens/contracts/chains
- ❎ Data analysis and management with detailed financial report statistics
- ❎ Wallet blacklist management

## Why Choose Open Source? 🤔

1. Personal developer, not much time for maintenance and development
2. Open source project, relies only on [sponsorship donations](), lacks motivation

### How to Deploy? 🚀

**(1) Clone the project code:**
```bash
git clone https://github.com/lumina-pay/lumimaPay
cd lumimaPay/
```

**(2) Install core dependencies:**
```bash
npm install
```

**(3) Modify configuration:**
The template for the configuration file is located in the root directory as `.env.example`. Copy this template to create the final effective `.env` file:
```bash
cp .env.example .env
```

Then fill in the configuration in `.env`. Below are explanations for the default configurations, which can be customized as needed:

```bash
# Database URL
DATABASE_URL=prisma://xxxx
# TRX chain API endpoint, if using the same chain, no need to modify
TRXSCAN_ENDPOINT=https://apilist.tronscanapi.com/api/new/token_trc20/transfers
# Protocol address for USDT on the TRX chain, if using the same chain and token, no need to modify
TRX_USDT_TOKEN=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
# Wallet address on the TRX chain
TRX_WALLET=xxxx
# Admin page username and password
HTTP_BASIC_AUTH=admin:lumimaPay
# Current service domain
HOST=http://localhost:3000
```

**(4) Configure the database:**
> This project uses [supabase](https://supabase.com/) as the database. If you have questions, contact the author for support.

```bash
npx prisma db push
```

**(5) Run:**

```bash
npx run dev
```

## Contact Us 📞

If you have any questions or suggestions, feel free to contact us via:
- Email: [workautoman@proton.me](mailto:workautoman@proton.me)

We look forward to working with you to create a safe, efficient, and convenient payment platform! 🚀

## Source Code Reference and Thanks for the Support 🙏
[uka](https://github.com/tans/uka) Currently, only BSC chain coins/contracts are supported