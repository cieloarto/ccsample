# zsh用のプロンプト設定
if [ -n "$ZSH_VERSION" ]; then
    export PS1='%F{green}Dev>%f '
else
    export PS1='Dev> '
fi
