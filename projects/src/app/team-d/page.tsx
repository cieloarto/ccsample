export default function TeamDPage() {
  const teamMembers = [
    {
      name: "田中 太郎",
      role: "チームリーダー",
      expertise: "フルスタック開発",
      experience: "8年"
    },
    {
      name: "佐藤 花子",
      role: "フロントエンド開発者",
      expertise: "React/Next.js",
      experience: "5年"
    },
    {
      name: "鈴木 一郎",
      role: "バックエンド開発者",
      expertise: "Node.js/Python",
      experience: "6年"
    },
    {
      name: "高橋 美咲",
      role: "UIデザイナー",
      expertise: "UI/UXデザイン",
      experience: "4年"
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">チームD</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        私たちチームDは、革新的なソリューションの開発と高品質なサービスの提供に特化した
        専門チームです。経験豊富なメンバーが連携し、お客様のビジネス成長をサポートします。
      </p>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">チームの特徴</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              技術的専門性
            </h3>
            <p className="text-gray-700">
              最新のテクノロジーと開発手法を駆使し、高品質なシステムを構築します。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              アジャイル開発
            </h3>
            <p className="text-gray-700">
              迅速で柔軟な開発プロセスにより、お客様のニーズに素早く対応します。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              品質保証
            </h3>
            <p className="text-gray-700">
              徹底したテストと品質管理により、信頼性の高いプロダクトを提供します。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              継続的サポート
            </h3>
            <p className="text-gray-700">
              プロジェクト完了後も継続的なサポートとメンテナンスを提供します。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">チームメンバー</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-1">{member.expertise}</p>
              <p className="text-sm text-gray-500">経験年数: {member.experience}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">詳細情報</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/team-d/services"
            className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600">🛠️ サービス一覧</h3>
            <p className="text-gray-700">
              チームDが提供する技術サービスの詳細をご覧いただけます。
            </p>
          </a>
          <a
            href="/team-d/projects"
            className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600">📊 プロジェクト実績</h3>
            <p className="text-gray-700">
              これまでに手がけた主要プロジェクトと成果をご紹介します。
            </p>
          </a>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">チームDにお任せください</h2>
        <p className="text-gray-600 mb-6">
          プロジェクトのご相談や詳細な提案をご希望の方は、お気軽にお問い合わせください。
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          お問い合わせ
        </a>
      </div>
    </main>
  )
}