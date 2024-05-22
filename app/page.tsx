// pages/index.js
import Head from 'next/head'
import {Link} from "next-view-transitions";

export default function Home() {
  return (
      <div>
        <Head>
          <title>LuminaPay</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* 标题部分 */}
          <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">欢迎来到 LuminaPay</h1>
              <p className="text-2xl">一个创新的第四方支付平台，为您提供全方位的支付解决方案。</p>
              <div className="mt-8 flex justify-center space-x-4">
                <Link href="https://lumina-pay.vercel.app/shop" className="bg-white text-purple-700 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300">赞助</Link>
              </div>
            </div>
          </section>

          {/* 功能特点部分 */}
          <section id="features" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">功能特点 🌟</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">USDT支付</h3>
                  <p>支持TRX链的USDT支付，提供安全、便捷的支付方式。</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">综合支付服务</h3>
                  <p>支持银行卡、移动支付、电子钱包、跨境支付等多种支付方式。</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">用户自定义收款渠道</h3>
                  <p>自由绑定银行账户、第三方支付平台或电子钱包，实现个性化支付管理。</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">数据分析与管理</h3>
                  <p>利用大数据和AI技术，对交易数据进行深度分析，提供详细的财务报表和用户行为分析。</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">风险控制</h3>
                  <p>通过先进的风控系统，对支付交易进行实时监控，识别并预防潜在的欺诈行为。</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">资金管理</h3>
                  <p>提供账户管理、资金结算、对账服务等全方位的资金管理服务。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 未来计划部分 */}
          <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">未来计划 🌟</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">定制化解决方案</h3>
                  <p>根据不同行业和企业的特定需求，提供个性化的支付解决方案。</p>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">跨境支付支持</h3>
                  <p>支持多种货币和跨境支付渠道，帮助企业开拓国际市场，实现全球化经营。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 开源理念部分 */}
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">开源理念 👐</h2>
              <p className="mb-8">LuminaPay 致力于开源，推动技术创新，吸引更多开发者和企业参与，共同打造一个强大的支付平台。</p>
              <div className="flex justify-center">
                <a href="https://github.com/lumina-pay/lumimaPay" className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">访问 GitHub 仓库</a>
              </div>
            </div>
          </section>

          {/* 参与共创部分 */}
          <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">如何参与共创 🤝</h2>
              <p className="mb-8">欢迎所有对支付技术感兴趣的开发者和企业参与 LuminaPay 的共创。通过代码贡献、文档编写、社区支持和功能建议，共同定义平台的发展方向。</p>
              <div className="flex justify-center">
                <a href="https://github.com/lumina-pay/lumimaPay" className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">开始贡献</a>
              </div>
            </div>
          </section>

          {/* 联系我们部分 */}
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">联系我们 📞</h2>
              <p className="mb-8">如果你有任何问题或建议，欢迎通过以下方式联系我们：</p>
              <ul className="list-none">
                <li className="mb-4"><strong>邮件：</strong><Link  href="mailto:workautoman@proton.me">workautoman@proton.me</Link></li>
                <li className="mb-4"><strong>Github：</strong><Link href="https://github.com/lumina-pay/lumimaPay">Issues</Link></li>
              </ul>
            </div>
          </section>
        </main>

        {/* 尾部部分 */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 LuminaPay. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}
