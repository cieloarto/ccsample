# 数独アプリケーション システム設計書

## 1. システムアーキテクチャ概要

### 1.1 全体構成
```
┌─────────────────────────────────────────────┐
│              Presentation Layer              │
│  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Pages     │  │      Components         │ │
│  │ (Next.js)   │  │   (React + TypeScript)  │ │
│  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│              Business Logic Layer           │
│  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Hooks     │  │       Utils             │ │
│  │ (Custom)    │  │  (Game Logic & Rules)   │ │
│  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│              Data Layer                     │
│  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Context   │  │    Local Storage        │ │
│  │ (State Mgmt)│  │   (Persistence)         │ │
│  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### 1.2 技術スタック
- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript 5
- **UI**: React 19
- **スタイリング**: Tailwind CSS 4
- **状態管理**: React Context + useReducer
- **データ永続化**: LocalStorage
- **開発ツール**: ESLint, TypeScript Compiler

## 2. ディレクトリ構造

```
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── sudoku/
│   │   │   ├── page.tsx                 # メインゲームページ
│   │   │   └── layout.tsx               # 数独専用レイアウト
│   │   ├── layout.tsx                   # グローバルレイアウト
│   │   └── globals.css                  # グローバルスタイル
│   ├── components/
│   │   ├── sudoku/
│   │   │   ├── Cell.tsx                 # 個別セルコンポーネント
│   │   │   ├── GridBlock.tsx            # 3x3ブロックコンポーネント
│   │   │   ├── SudokuGrid.tsx           # 9x9グリッドコンポーネント
│   │   │   ├── NumberPad.tsx            # 数字入力パッド
│   │   │   ├── GameControls.tsx         # ゲーム制御ボタン
│   │   │   ├── GameStats.tsx            # 統計表示
│   │   │   ├── DifficultySelect.tsx     # 難易度選択
│   │   │   └── HintButton.tsx           # ヒント機能
│   │   └── ui/
│   │       ├── Button.tsx               # 共通ボタン
│   │       ├── Modal.tsx                # モーダル
│   │       └── LoadingSpinner.tsx       # ローディング
│   ├── contexts/
│   │   └── SudokuContext.tsx            # 数独ゲーム状態管理
│   ├── hooks/
│   │   ├── useSudoku.ts                 # 数独ゲームロジック
│   │   ├── useTimer.ts                  # タイマー機能
│   │   ├── useLocalStorage.ts           # ローカルストレージ
│   │   └── useKeyboardNavigation.ts     # キーボード操作
│   ├── utils/
│   │   ├── validation.ts                # 数独ルールバリデーション
│   │   ├── generator.ts                 # パズル生成アルゴリズム
│   │   ├── solver.ts                    # 数独解答アルゴリズム
│   │   ├── candidates.ts                # 候補数字計算
│   │   ├── storage.ts                   # ストレージ操作
│   │   └── constants.ts                 # 定数定義
│   └── types/
│       ├── sudoku.ts                    # 数独関連型定義
│       └── index.ts                     # 型エクスポート
└── public/
    └── sounds/                          # 効果音ファイル（将来拡張）
```

## 3. データモデル設計

### 3.1 基本型定義

```typescript
// types/sudoku.ts

// 数独の値（0は空セル）
export type SudokuValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// 9x9グリッド
export type SudokuGrid = SudokuValue[][];

// セルの状態
export interface CellState {
  value: SudokuValue;
  isInitial: boolean;      // 初期問題の数字か
  isSelected: boolean;     // 選択中か
  hasError: boolean;       // エラーがあるか
  candidates: number[];    // 候補数字
  showCandidates: boolean; // 候補数字を表示するか
}

// セル位置
export interface CellPosition {
  row: number;
  col: number;
}

// 難易度
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

// ゲーム状態
export enum GameStatus {
  SETUP = 'setup',         // 初期設定中
  PLAYING = 'playing',     // プレイ中
  PAUSED = 'paused',       // 一時停止
  COMPLETED = 'completed', // 完了
  ERROR = 'error'          // エラー状態
}

// ゲームデータ
export interface GameData {
  grid: CellState[][];
  initialGrid: SudokuGrid;
  selectedCell: CellPosition | null;
  difficulty: Difficulty;
  status: GameStatus;
  stats: GameStats;
  settings: GameSettings;
}

// 統計情報
export interface GameStats {
  startTime: number;
  currentTime: number;
  elapsedTime: number;
  errorCount: number;
  hintsUsed: number;
  moveCount: number;
}

// ゲーム設定
export interface GameSettings {
  showCandidates: boolean;
  highlightRelated: boolean;
  showTimer: boolean;
  enableHints: boolean;
  autoValidate: boolean;
}
```

### 3.2 状態管理構造

```typescript
// contexts/SudokuContext.tsx

export interface SudokuState extends GameData {}

export type SudokuAction = 
  | { type: 'NEW_GAME'; difficulty: Difficulty }
  | { type: 'RESET_GAME' }
  | { type: 'SELECT_CELL'; position: CellPosition }
  | { type: 'INPUT_NUMBER'; value: SudokuValue }
  | { type: 'CLEAR_CELL' }
  | { type: 'TOGGLE_CANDIDATES'; position: CellPosition }
  | { type: 'SET_CANDIDATE'; position: CellPosition; value: number }
  | { type: 'HINT_REQUEST' }
  | { type: 'PAUSE_GAME' }
  | { type: 'RESUME_GAME' }
  | { type: 'UPDATE_TIMER' }
  | { type: 'SAVE_GAME' }
  | { type: 'LOAD_GAME'; gameData: GameData };
```

## 4. コンポーネント設計

### 4.1 コンポーネント階層

```
SudokuPage
├── GameStats
├── DifficultySelect
├── SudokuGrid
│   └── GridBlock (9個)
│       └── Cell (9個)
├── NumberPad
├── GameControls
│   ├── NewGame Button
│   ├── Reset Button
│   ├── Pause/Resume Button
│   └── HintButton
└── GameModal (条件付き表示)
```

### 4.2 主要コンポーネント仕様

#### Cell Component
```typescript
interface CellProps {
  cellState: CellState;
  position: CellPosition;
  onCellClick: (position: CellPosition) => void;
  isRelatedCell: boolean;
  className?: string;
}
```

#### SudokuGrid Component
```typescript
interface SudokuGridProps {
  grid: CellState[][];
  selectedCell: CellPosition | null;
  onCellClick: (position: CellPosition) => void;
  highlightRelated: boolean;
}
```

#### NumberPad Component
```typescript
interface NumberPadProps {
  onNumberClick: (value: SudokuValue) => void;
  onClearClick: () => void;
  candidateMode: boolean;
  onCandidateToggle: () => void;
  disabled: boolean;
}
```

## 5. データフロー設計

### 5.1 状態更新フロー

```
User Action → Component Event → Context Action → Reducer → State Update → Component Re-render
```

### 5.2 主要データフロー

1. **ゲーム初期化フロー**
   ```
   NEW_GAME action → Generator.generatePuzzle() → State Update → Grid Render
   ```

2. **数字入力フロー**
   ```
   Cell Click → SELECT_CELL → NumberPad Click → INPUT_NUMBER → 
   Validation Check → Error Check → State Update → UI Update
   ```

3. **バリデーションフロー**
   ```
   Input → Validation.checkRow/Column/Block → Error Detection → 
   Error State Update → Visual Feedback
   ```

## 6. アルゴリズム設計

### 6.1 パズル生成アルゴリズム
```typescript
// utils/generator.ts

class SudokuGenerator {
  // 1. 完全な解答グリッドを生成
  generateSolution(): SudokuGrid;
  
  // 2. 難易度に応じて数字を削除
  createPuzzle(solution: SudokuGrid, difficulty: Difficulty): SudokuGrid;
  
  // 3. 解の唯一性をチェック
  hasUniqueSolution(puzzle: SudokuGrid): boolean;
}
```

### 6.2 バリデーションアルゴリズム
```typescript
// utils/validation.ts

export class SudokuValidator {
  // 行のバリデーション
  isValidRow(grid: SudokuGrid, row: number, value: number): boolean;
  
  // 列のバリデーション  
  isValidColumn(grid: SudokuGrid, col: number, value: number): boolean;
  
  // 3x3ブロックのバリデーション
  isValidBlock(grid: SudokuGrid, row: number, col: number, value: number): boolean;
  
  // 全体のバリデーション
  isValidMove(grid: SudokuGrid, row: number, col: number, value: number): boolean;
  
  // ゲーム完了チェック
  isComplete(grid: SudokuGrid): boolean;
}
```

### 6.3 候補数字計算アルゴリズム
```typescript
// utils/candidates.ts

export class CandidateCalculator {
  // セルの候補数字を計算
  getCandidates(grid: SudokuGrid, row: number, col: number): number[];
  
  // 全グリッドの候補数字を更新
  updateAllCandidates(grid: CellState[][]): CellState[][];
  
  // ヒント用：次の手がかりを提供
  getHint(grid: SudokuGrid): CellPosition | null;
}
```

## 7. パフォーマンス最適化

### 7.1 レンダリング最適化
- `React.memo`でコンポーネントのメモ化
- `useMemo`で計算結果のキャッシュ
- `useCallback`でイベントハンドラーの最適化

### 7.2 状態管理最適化
- 必要最小限の状態更新
- 関連セルのみの再描画
- デバウンス処理でタイマー更新頻度制御

### 7.3 アルゴリズム最適化
- バリデーション結果のキャッシュ
- 候補数字の差分更新
- パズル生成の並列化

## 8. エラーハンドリング

### 8.1 エラー分類
- **入力エラー**: 無効な数字配置
- **生成エラー**: パズル生成失敗
- **保存エラー**: LocalStorage書き込み失敗

### 8.2 エラー処理戦略
- エラーバウンダリーでアプリクラッシュ防止
- ユーザーフレンドリーなエラーメッセージ
- フォールバック処理の実装

## 9. テスト戦略

### 9.1 単体テスト
- バリデーション関数
- パズル生成アルゴリズム
- 候補数字計算

### 9.2 統合テスト
- コンポーネントインタラクション
- 状態管理フロー
- データ永続化

### 9.3 E2Eテスト
- ゲーム完了フロー
- 各難易度のプレイテスト
- モバイル操作テスト