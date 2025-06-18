# ヘルプ関数
help() {
    echo "Claude チーム開発環境"
    echo ""
    echo "【ペイン操作】"
    echo "  Ctrl+b → 矢印  : ペイン移動"
    echo "  Ctrl+b → z     : ペイン拡大/縮小"
    echo ""
    echo "【便利なコマンド】"
    echo "  help      : このヘルプを表示"
    echo "  qa        : QAペインでclaudeを起動"
    echo "  dev       : 開発ペインでclaudeを起動"
    echo "  clear-all : 全ペインをクリア"
    echo "  exit-team : セッションを終了"
    echo ""
    echo "【メッセージ送信】"
    echo "  qa-msg \"テストしてください\""
    echo "  dev-msg \"実装してください\""
}
