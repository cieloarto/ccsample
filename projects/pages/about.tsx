import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Grid from '../components/ui/Grid';

const AboutPage: React.FC = () => {
  return (
    <Layout
      title="会社情報"
      description="私たちの会社について詳しく知る"
    >
      <Grid.Container>
        <Grid.Row gap="lg">
          <Grid.Col span={12}>
            <h1>私たちについて</h1>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              私たちは革新的なテクノロジーソリューションを提供する会社です。
              お客様のビジネスの成長を支援することが私たちの使命です。
            </p>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row gap="lg">
          <Grid.Col span={12} lg={8}>
            <Card variant="elevated" padding="lg">
              <h2>私たちのミッション</h2>
              <p>
                最新のテクノロジーを活用して、世界中の企業がデジタル変革を
                成功させるお手伝いをすることです。私たちは、シンプルで
                使いやすく、強力なソリューションを提供します。
              </p>
              
              <h3>コアバリュー</h3>
              <ul>
                <li><strong>革新:</strong> 常に最新の技術を追求し、新しいソリューションを開発</li>
                <li><strong>品質:</strong> 高品質な製品とサービスの提供にコミット</li>
                <li><strong>顧客中心:</strong> お客様のニーズを第一に考えた開発</li>
                <li><strong>透明性:</strong> オープンで誠実なコミュニケーション</li>
              </ul>

              <h3>私たちの歩み</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    2020
                  </div>
                  <div>
                    <strong>会社設立</strong><br />
                    小さなチームで革新的なアイデアからスタート
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    2021
                  </div>
                  <div>
                    <strong>最初の製品リリース</strong><br />
                    MVP をリリースし、初期のお客様からフィードバックを獲得
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    2022
                  </div>
                  <div>
                    <strong>チーム拡大</strong><br />
                    開発チームを拡大し、より多くの機能を提供開始
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    2023
                  </div>
                  <div>
                    <strong>グローバル展開</strong><br />
                    国際市場への展開を開始
                  </div>
                </div>
              </div>
            </Card>
          </Grid.Col>

          <Grid.Col span={12} lg={4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Card variant="outlined">
                <Card.Header>
                  <h3 style={{ margin: 0 }}>数字で見る会社</h3>
                </Card.Header>
                <Card.Content>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                      100+
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>満足したお客様</div>
                  </div>
                  
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                      50+
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>完了したプロジェクト</div>
                  </div>
                  
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                      15
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>チームメンバー</div>
                  </div>
                </Card.Content>
              </Card>

              <Card variant="elevated">
                <Card.Header>
                  <h3 style={{ margin: 0 }}>お問い合わせ</h3>
                </Card.Header>
                <Card.Content>
                  <p>
                    私たちのサービスについてご質問がございましたら、
                    お気軽にお問い合わせください。
                  </p>
                </Card.Content>
                <Card.Footer>
                  <Button variant="primary" fullWidth>
                    お問い合わせ
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Layout>
  );
};

export default AboutPage;