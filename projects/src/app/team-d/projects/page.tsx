export default function TeamDProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ECサイト リニューアルプロジェクト",
      client: "株式会社テックソリューション",
      period: "2024年1月 - 2024年6月",
      status: "完了",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      description: "既存のECサイトを最新技術でリニューアル。ユーザビリティの向上と売上30%アップを実現。"
    },
    {
      id: 2,
      title: "社内業務システム開発",
      client: "グローバル商事株式会社",
      period: "2024年4月 - 2024年10月",
      status: "進行中",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      description: "従来の手作業を自動化し、業務効率を70%向上させる社内システムを開発中。"
    },
    {
      id: 3,
      title: "モバイルアプリ開発",
      client: "フィットネス株式会社",
      period: "2024年7月 - 2024年12月",
      status: "開発中",
      technologies: ["React Native", "Firebase", "TypeScript"],
      description: "ユーザーの健康管理をサポートするモバイルアプリケーションを開発。"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "完了":
        return "bg-green-100 text-green-800";
      case "進行中":
        return "bg-blue-100 text-blue-800";
      case "開発中":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">チームD プロジェクト実績</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          私たちが手がけた主要プロジェクトをご紹介します。お客様のビジネス成長に貢献した実績をご覧ください。
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-1">クライアント: {project.client}</p>
                <p className="text-gray-600">期間: {project.period}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{project.description}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2">使用技術</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
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

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">新しいプロジェクトをお探しですか？</h2>
        <p className="text-gray-600 mb-6">
          チームDの実績をご覧いただき、ありがとうございます。
          新しいプロジェクトのご相談は、お気軽にお問い合わせください。
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          プロジェクトを相談する
        </a>
      </div>
    </main>
  );
}