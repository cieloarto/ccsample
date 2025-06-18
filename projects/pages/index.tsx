import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Grid from '../components/ui/Grid';
import Sidebar from '../components/layout/Sidebar';
import { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
  { label: 'ホーム', href: '/', icon: '🏠' },
  { label: 'サービス', href: '/services', icon: '⚙️' },
  { label: '会社情報', href: '/about', icon: 'ℹ️' },
  { label: 'ブログ', href: '/blog', icon: '📝' },
  { label: 'お問い合わせ', href: '/contact', icon: '📧' },
];

const HomePage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Layout
        title="ホーム"
        description="Next.jsで構築された革新的なWebアプリケーション"
      >
        <div style={{ marginBottom: '2rem' }}>
          <Grid.Container maxWidth="xl">
            <Grid.Row gap="lg" align="center">
              <Grid.Col span={12} md={8}>
                <section>
                  <h1>革新的なソリューションへようこそ</h1>
                  <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                    私たちは最新のテクノロジーを使用して、
                    お客様のビジネスを次のレベルに押し上げる
                    カスタムソリューションを提供しています。
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button size="lg">
                      今すぐ始める
                    </Button>
                    <Button variant="outline" size="lg">
                      詳細を見る
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      onClick={handleSidebarToggle}
                    >
                      サイドバーを開く
                    </Button>
                  </div>
                </section>
              </Grid.Col>
              <Grid.Col span={12} md={4}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  height: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem'
                }}>
                  🚀
                </div>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </div>

        <Grid.Container>
          <Grid.Row gap="lg">
            <Grid.Col span={12}>
              <h2>主要機能</h2>
              <p style={{ marginBottom: '2rem' }}>
                私たちのプラットフォームが提供する主要な機能をご覧ください。
              </p>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row gap="lg">
            <Grid.Col span={12} md={4}>
              <Card variant="elevated" hoverable>
                <Card.Header>
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
                    ⚡
                  </div>
                  <h3 style={{ textAlign: 'center', margin: 0 }}>高速パフォーマンス</h3>
                </Card.Header>
                <Card.Content>
                  <p>
                    最新の最適化技術により、
                    高速で応答性の高いユーザー体験を提供します。
                  </p>
                  <ul>
                    <li>サーバーサイドレンダリング</li>
                    <li>画像最適化</li>
                    <li>コード分割</li>
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" size="sm" fullWidth>
                    詳細を見る
                  </Button>
                </Card.Footer>
              </Card>
            </Grid.Col>

            <Grid.Col span={12} md={4}>
              <Card variant="elevated" hoverable>
                <Card.Header>
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
                    📱
                  </div>
                  <h3 style={{ textAlign: 'center', margin: 0 }}>レスポンシブデザイン</h3>
                </Card.Header>
                <Card.Content>
                  <p>
                    あらゆるデバイスで美しく動作する
                    レスポンシブなインターフェースを提供します。
                  </p>
                  <ul>
                    <li>モバイルファースト</li>
                    <li>タブレット対応</li>
                    <li>デスクトップ最適化</li>
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" size="sm" fullWidth>
                    詳細を見る
                  </Button>
                </Card.Footer>
              </Card>
            </Grid.Col>

            <Grid.Col span={12} md={4}>
              <Card variant="elevated" hoverable>
                <Card.Header>
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
                    🔒
                  </div>
                  <h3 style={{ textAlign: 'center', margin: 0 }}>セキュリティ</h3>
                </Card.Header>
                <Card.Content>
                  <p>
                    最高レベルのセキュリティ機能により、
                    お客様のデータを安全に保護します。
                  </p>
                  <ul>
                    <li>暗号化通信</li>
                    <li>セキュアヘッダー</li>
                    <li>アクセス制御</li>
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" size="sm" fullWidth>
                    詳細を見る
                  </Button>
                </Card.Footer>
              </Card>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row gap="lg" style={{ marginTop: '3rem' }}>
            <Grid.Col span={12} md={6}>
              <Card variant="outlined" padding="lg">
                <h3>お客様の声</h3>
                <blockquote style={{ 
                  fontStyle: 'italic', 
                  borderLeft: '4px solid var(--primary-color)',
                  paddingLeft: '1rem',
                  margin: '1rem 0'
                }}>
                  「このプラットフォームのおかげで、
                  私たちのビジネスプロセスが劇的に改善されました。
                  使いやすく、信頼性が高く、サポートも素晴らしいです。」
                </blockquote>
                <cite style={{ color: 'var(--text-secondary)' }}>
                  — 田中様、株式会社ABC
                </cite>
              </Card>
            </Grid.Col>

            <Grid.Col span={12} md={6}>
              <Card variant="outlined" padding="lg">
                <h3>始め方</h3>
                <ol style={{ paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    アカウントを作成する
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    プロジェクトをセットアップする
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    チームメンバーを招待する
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    最初の機能を実装する
                  </li>
                </ol>
                <Button variant="primary" fullWidth style={{ marginTop: '1rem' }}>
                  無料で始める
                </Button>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Layout>

      <Sidebar
        navigationItems={navigationItems}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default HomePage;