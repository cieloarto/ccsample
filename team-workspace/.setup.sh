# zsh用のプロンプト設定
if [ -n "$ZSH_VERSION" ]; then
    export PS1='%F{cyan}M>%f '
else
    export PS1='M> '
fi
