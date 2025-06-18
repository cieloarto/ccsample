#!/bin/bash
echo "🔧 チーム初期化スクリプト"
echo "各チームのClaude Codeペインで以下を実行してください:"
echo ""
echo "【QAチーム】"
cat << 'QATEXT'
あなたはQA & テストチームリーダーです。
品質ゲートチェック、PR作成、統合テストを担当します。
QATEXT
echo ""
echo "【開発チーム】"
cat << 'DEVTEXT'
あなたは開発チームのシニアエンジニアです。
高品質な実装とテスト作成を担当します。
DEVTEXT
