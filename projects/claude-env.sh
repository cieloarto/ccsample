#!/bin/bash
# Claude Pro Dev環境設定

export PROJECT_NAME="my-project"
export WORKSPACE_DIR="/Users/masa/dev/test/ccsample/projects"
export SCRIPT_DIR="/Users/masa/dev/claude-automation"
export SESSION_NAME="claude-dev"

# 関数読み込み
source "/Users/masa/dev/claude-automation/claude-functions.sh" 2>/dev/null || true
source "/Users/masa/dev/claude-automation/claude-qa.sh" 2>/dev/null || true
source "/Users/masa/dev/claude-automation/claude-workflow.sh" 2>/dev/null || true

# ヘルプ表示
show_help() {
    echo "📚 利用可能なコマンド:"
    echo ""
    echo "【開発フロー】"
    echo "  requirements '<プロジェクト説明>'  - 要件定義開始"
    echo "  design                            - 設計フェーズ開始"
    echo "  implementation                    - 実装フェーズ開始"
    echo ""
    echo "【タスク管理】"
    echo "  task-assign <番号> '<説明>' '<ブランチ>' - タスク割り当て"
    echo "  qa-check <チーム> '<ブランチ>'          - QAチェック"
    echo ""
    echo "【その他】"
    echo "  status    - 現在の状態表示"
    echo "  clear-all - 全バッファクリア"
    echo "  help      - このヘルプ表示"
}

# 簡易コマンド
status() {
    echo "📊 現在の状態:"
    echo "  プロジェクト: my-project"
    echo "  作業ディレクトリ: /Users/masa/dev/test/ccsample/projects"
    echo "  セッション: claude-dev"
}

clear-all() {
    tmux list-panes -t "claude-dev" -F "#{pane_id}" | while read -r pane; do
        tmux clear-history -t "claude-dev:$pane"
    done
    echo "✅ 全バッファをクリアしました"
}

# エイリアス
alias help='show_help'

echo "🎯 Claude Development Manager Ready!"
echo "コマンドを入力してください (help でヘルプ表示)"
echo ""
