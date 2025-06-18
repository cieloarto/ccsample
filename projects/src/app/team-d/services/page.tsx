export default function TeamDServicesPage() {
  const services = [
    {
      id: 1,
      title: "Webアプリケーション開発",
      icon: "🌐",
      description: "モダンなWebアプリケーションを開発します。React、Next.js、Vue.jsなどの最新技術を活用し、高性能でユーザーフレンドリーなアプリケーションを提供します。",
      features: [
        "レスポンシブデザイン",
        "高速パフォーマンス",
        "SEO最適化",
        "PWA対応"
      ],
      technologies: ["React", "Next.js", "Vue.js", "TypeScript"]
    },
    {
      id: 2,
      title: "モバイルアプリ開発",
      icon: "📱",
      description: "iOS・Android両対応のモバイルアプリケーションを開発します。ネイティブアプリからクロスプラットフォーム開発まで、お客様のニーズに合わせて最適な技術を選択します。",
      features: [
        "iOS・Android対応",
        "ネイティブ性能",
        "オフライン対応",
        "プッシュ通知"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      id: 3,
      title: "バックエンド開発",
      icon: "⚙️",
      description: "スケーラブルで安全なバックエンドシステムを構築します。マイクロサービスアーキテクチャやクラウドネイティブな設計で、拡張性の高いシステムを提供します。",
      features: [
        "API開発",
        "データベース設計",
        "認証・認可",
        "監視・ログ管理"
      ],
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"]
    },
    {
      id: 4,
      title: "クラウドインフラ構築",
      icon: "☁️",
      description: "AWS、GCP、Azureなどの主要クラウドプラットフォームでのインフラ構築・運用をサポートします。コスト最適化とパフォーマンス向上を実現します。",
      features: [
        "Infrastructure as Code",
        "CI/CDパイプライン",
        "監視・アラート",
        "セキュリティ対策"
      ],
      technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]
    },
    {
      id: 5,
      title: "UI/UXデザイン",
      icon: "🎨",
      description: "ユーザー中心のデザインで、使いやすく美しいインターフェースを提供します。ユーザビリティテストを通じて最適なユーザーエクスペリエンスを実現します。",
      features: [
        "ユーザーリサーチ",
        "プロトタイピング",
        "ユーザビリティテスト",
        "デザインシステム"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"]
    },
    {
      id: 6,
      title: "システム保守・運用",
      icon: "🔧",
      description: "開発後の継続的なサポートとメンテナンスを提供します。24時間365日の監視体制で、システムの安定稼働を保証します。",
      features: [
        "24時間監視",
        "定期メンテナンス",
        "セキュリティアップデート",
        "パフォーマンス最適化"
      ],
      technologies: ["Monitoring Tools", "Log Analysis", "Automation", "Security"]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">チームD サービス一覧</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          チームDが提供する技術サービスをご紹介します。お客様のビジネス課題に合わせて、
          最適なソリューションをご提案いたします。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md border p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{service.icon}</span>
              <h2 className="text-2xl font-semibold">{service.title}</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">主な機能・特徴</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">使用技術</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">カスタムソリューション</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          上記のサービス以外にも、お客様固有の課題に対応したカスタムソリューションも提供しています。
          まずはお気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            サービスを相談する
          </a>
          <a
            href="/team-d/projects"
            className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            実績を見る
          </a>
        </div>
      </div>
    </main>
  );
}