# データベース設計書

## 1. データベース概要

### 1.1 設計方針
このNext.js簡単アプリケーションは、要件定義書に基づき**データベースを使用しない**静的サイト構成を採用します。

### 1.2 データ管理方式
- **静的データ**: JSON/YAML ファイル
- **動的データ**: ブラウザのローカルストレージ
- **設定データ**: 環境変数・設定ファイル

## 2. データ構造設計

### 2.1 静的コンテンツデータ

#### 2.1.1 サイト設定データ
```typescript
// data/config/site.json
interface SiteConfig {
  siteName: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    social: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  };
  navigation: NavigationItem[];
}

interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}
```

#### 2.1.2 ページコンテンツデータ
```typescript
// data/content/pages.json
interface PageContent {
  slug: string;
  title: string;
  description: string;
  content: string;
  meta: {
    keywords: string[];
    ogImage?: string;
  };
  createdAt: string;
  updatedAt: string;
}
```

#### 2.1.3 ブログデータ（推奨機能）
```typescript
// data/content/blog-posts.json
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  categories: string[];
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  meta: {
    readingTime: number;
    wordCount: number;
    ogImage?: string;
  };
}
```

### 2.2 フォームデータ

#### 2.2.1 コンタクトフォーム
```typescript
// types/forms.ts
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  consent: boolean;
}
```

#### 2.2.2 検索データ
```typescript
// types/search.ts
interface SearchQuery {
  query: string;
  filters?: {
    category?: string;
    tags?: string[];
    dateRange?: {
      start: string;
      end: string;
    };
  };
  timestamp: string;
}
```

## 3. ファイル構成

### 3.1 データディレクトリ構造
```
data/
├── config/
│   ├── site.json           # サイト基本設定
│   ├── navigation.json     # ナビゲーション設定
│   └── seo.json           # SEO設定
├── content/
│   ├── pages/             # ページコンテンツ
│   │   ├── home.json
│   │   ├── about.json
│   │   └── contact.json
│   ├── blog/              # ブログ記事（推奨機能）
│   │   ├── posts.json
│   │   └── categories.json
│   └── assets/            # アセット情報
│       └── images.json
└── schemas/               # JSONスキーマ
    ├── site-config.schema.json
    ├── page-content.schema.json
    └── blog-post.schema.json
```

### 3.2 設定ファイル例

#### 3.2.1 サイト設定 (data/config/site.json)
```json
{
  "siteName": "Next.js Simple App",
  "description": "Next.jsで構築したシンプルなWebアプリケーション",
  "url": "https://example.com",
  "author": {
    "name": "開発者名",
    "email": "developer@example.com",
    "social": {
      "github": "https://github.com/username",
      "twitter": "https://twitter.com/username"
    }
  },
  "navigation": [
    { "label": "ホーム", "href": "/" },
    { "label": "アバウト", "href": "/about" },
    { "label": "コンタクト", "href": "/contact" }
  ]
}
```

#### 3.2.2 ページコンテンツ (data/content/pages/home.json)
```json
{
  "slug": "home",
  "title": "ホーム",
  "description": "Next.js簡単アプリケーションのホームページ",
  "content": "# ようこそ\n\nNext.jsで構築したシンプルなWebアプリケーションです。",
  "meta": {
    "keywords": ["Next.js", "React", "TypeScript", "Webアプリ"],
    "ogImage": "/images/og-home.jpg"
  },
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

## 4. データアクセス層

### 4.1 データフェッチ関数
```typescript
// lib/data/content.ts
export async function getSiteConfig(): Promise<SiteConfig> {
  const data = await import('@/data/config/site.json');
  return data.default;
}

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    const data = await import(`@/data/content/pages/${slug}.json`);
    return data.default;
  } catch {
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await import('@/data/content/blog/posts.json');
  return data.default.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
```

### 4.2 ローカルストレージ管理
```typescript
// lib/storage/local-storage.ts
export class LocalStorageManager {
  static setItem<T>(key: string, value: T): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getItem<T>(key: string): T | null {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  static removeItem(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
```

## 5. データバリデーション

### 5.1 JSONスキーマ
```json
// data/schemas/site-config.schema.json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "siteName": { "type": "string" },
    "description": { "type": "string" },
    "url": { "type": "string", "format": "uri" },
    "author": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "email": { "type": "string", "format": "email" },
        "social": {
          "type": "object",
          "properties": {
            "github": { "type": "string", "format": "uri" },
            "twitter": { "type": "string", "format": "uri" }
          }
        }
      },
      "required": ["name", "email"]
    }
  },
  "required": ["siteName", "description", "url", "author"]
}
```

### 5.2 TypeScript型ガード
```typescript
// lib/validators/content.ts
export function isSiteConfig(obj: any): obj is SiteConfig {
  return (
    typeof obj === 'object' &&
    typeof obj.siteName === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.url === 'string' &&
    typeof obj.author === 'object'
  );
}
```

## 6. キャッシュ戦略

### 6.1 ビルド時データ取得
- getStaticProps でのデータプリフェッチ
- JSON ファイルの静的インポート
- Next.js の増分静的再生成 (ISR) 活用

### 6.2 ブラウザキャッシュ
- コンテンツデータの適切なキャッシュヘッダー設定
- Service Worker による オフライン対応（将来機能）

## 7. 将来的なデータベース移行

### 7.1 移行候補
1. **Headless CMS**: Strapi, Contentful, Sanity
2. **データベース**: PostgreSQL, MongoDB
3. **サーバーレス DB**: PlanetScale, Supabase

### 7.2 移行時の考慮事項
- 現在のJSON構造をそのまま活用可能
- TypeScript型定義の再利用
- データマイグレーションスクリプトの作成

## 8. バックアップ・メンテナンス

### 8.1 データバックアップ
- Git によるバージョン管理
- データファイルの定期的なバックアップ
- 本番データとの同期管理

### 8.2 データ整合性
- JSONスキーマによる検証
- CI/CD でのデータ検証自動化
- TypeScript コンパイル時の型チェック