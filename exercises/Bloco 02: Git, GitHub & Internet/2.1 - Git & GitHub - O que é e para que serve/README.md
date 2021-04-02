## Git e GitHub - O que é e para que serve **

### Instalação

Para instalar o git:

*sudo apt-get install git-all*
*git --version*

### Configuração

Permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o Git aparece e opera.

#### Identidade

Configuração importante, pois permite ver quem foi o responsável por cada commit, e essa configuração é carimbada de forma imutável.
O e-mail deve ser o mesmo usado na criação da conta no GitHub.

*git config --global user.name "Seu nome"*
*git config --global user.email seuemail@exemplo.br*
*git config --list*

#### Editor

Configuração do editor(VS Code) que poderá abrir o arquivo de configurações do Git, o **.giconfig**.

*git config --global core.editor "code --wait"*
*code .gitconfig*

### Gerando chave SSH

Cria uma nova chave SSH utilizando e-mail como rótulo, durante a instalação será perguntado sobre a localização da chave e também deve ser informada uma senha segura.

*ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"*

#### Adicionando chave SSH ao ssh-agent
Primeiro deve ser iniciado o ssh-agent em background:

*eval "$(ssh-agent -s)"*

Em seguida, deve ser adicionado a chave SSH ao ssh-agent:

*ssh-add ~/.ssh/id_rsa*

#### Adicionando chave SSH na conta do GitHub

Como o xclip não vem instalado por padrão na maioria das distribuições, precisaremos instalá-lo usando o comando a seguir:

*sudo apt-get install xclip*

Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto.

*xclip -sel clip < ~/.ssh/id_rsa.pub*

#### Entre no GitHub e siga os passos abaixo:

1. No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings ;
2. Na barra lateral esquerda, clique em SSH and GPG keys ;
3. Clique em New SSH key ou Add SSH key ;
4. No campo Título , adicione um descrição para a nova chave;
5. Cole sua chave dentro do campo Key ;
6. Clique em Add SSH key ;
7. Caso seja solicitado, confirme sua senha do Github.

### Criando um repositório local

Dentro da pasta criada para o repositório:

*git init*

Após criar alguns arquivos e ou modificações:

*git add .*
*git commit -m "Minha primeira alteração"*

#### Criando repositório no GitHub

Adicione um nome ao repositório, após isso clique no botão **Create repository**.
Clique no botão **SSH** e copie a URL gerada para depois fazer a conexão do repositório local com o remoto.

### Conectando repositório local com o remoto

Dentro do diretório do repositório local:

*git remote add origin git@github.com:user-github/repo-name.git*

No lugar de *git@github.com:user-github/repo-name.git* colcoar a chave gerada pelo repositório remoto.

Verifique se funcionou corretamente:

*git remote -v*

#### Sincronizando os repositórios

Os repositórios já estão criados e conectados. Enviando informações do local para o remoto.

*git push origin master*

Dessa maneira os dados estão sincronizados.
