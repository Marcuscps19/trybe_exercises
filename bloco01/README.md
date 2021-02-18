*Arquivo contendo os exercícios e os logs*

## Unix & Bash Parte 1 - Exercícios - Criação de arquivos e diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.
2. Crie um arquivo de texto com o nome trybe.txt .

3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
 
4. Renomeie o arquivo trybe.txt .

5. Dentro de unix_tests , crie um novo diretório chamado backup .

6. Mova o arquivo trybe_backup.txt para o diretório backup .

7. Dentro de unix_tests , crie um novo diretório chamado backup2 .

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta back8-up2 .

9. Apague a pasta backup .

10. Renomeie a pasta backup2 para backup .

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

12. Apague o diretório backup .

13. Limpe o terminal.

*Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado skills.txt :*

*Internet*
*Unix*
*Bash*
*HTML*
*CSS*
*JavaScript*
*React*
*SQL*

14. Mostre na tela as 5 primeiras skills do arquivo skills.txt .

15. Mostre na tela as 4 últimas skills do arquivo skills.txt .

16. Apague todos os arquivos que terminem em .txt .

 **Logs**

#### 1585  mkdir unix_tests
#### 1586  cd unix_tests/
#### 1587  touch trybe.txt
#### 1588  cp trybe.txt trybe_backup.txt
#### 1589  ls
#### 1590  mkdir backup
#### 1591  cd ..
#### 1592  ls
#### 1593  cd unix_tests/
#### 1594  ls
#### 1595  mv trybe_backup.txt backup
#### 1596  mkdir backup2
#### 1597  mv backup/trybe_backup.txt backup2
#### 1598  ls
#### 1599  rmdir backup
#### 1600  mv backup2 backup
#### 1601  ls
#### 1602  pwd
#### 1603  man pwd
#### 1604  ls
#### 1605  rm -r backup/
#### 1606  clear
#### 1607  cat > skills.txt
#### 1608  head -5 skills.txt 
#### 1609  tail -4 skills.txt 
#### 1610  rm *.txt

## Unix & Bash Parte 1 - Exercícios - Manipulação & Busca

1. Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

[curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"]

2. Mostre todo o conteúdo do arquivo countries.txt na tela.

3. Mostre o conteúdo de countries.txt , página por página, até encontra a Zambia .

4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .

5. Busque por Brazil no countries.txt .

6. Busque novamente por brazil , mas agora utilizando o lower case .

*Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.*

7. Busque pelas frases que não contenham a palavra fox .

8. Conte o número de palavras do arquivo phrases.txt .

9. Conte o número de linhas do arquivo phrases.txt .

10. Crie os arquivos empty.tbt e empty.pdf .

11. Liste todos os arquivos do diretório unix_tests .

12. Liste todos os arquivos que terminem com txt .

13. Liste todos os arquivos que terminem com tbt ou txt .

14. Acesse o manual do comando ls .

 **Logs**
 
#### 1663  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
####  1664  cat countries.txt 
####  1665  less countries.txt 
####  1666  grep Brazil countries.txt 
####  1667  grep -i brazil
####  1668  grep -i brazil countries.txt
####  1669  cat phrases.txt
####  1670  cat > phrases.txt
####  1671  grep -v 'fox' phrases.txt 
####  1672  wc -w phrases.txt 
####  1673  wc -c phrases.txt 
####  1674  wc -l phrases.txt 
####  1675  touch empty.tbt
#### 1676  touch empty.pdf
####  1677  ls
####  1678  ls *.txt
####  1679  ls *.t?t
####  1680  man ls
 
## Unix & Bash Parte 2 - Exercícios - Comandos de Input e Output

1. Navegue até a pasta unix_tests ;

2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

4. Conte quantas linhas tem o arquivo skills2.txt .

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.

7. Conte o número de linhas que contêm as letras br .

8. Conte o número de linhas que não contêm as letras br .

9. Adicione dois nomes de países ao final do arquivo phrases2.txt .

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

11. Ordene o arquivo bunch_of_things.txt .

 **Logs**
 
####  1721  cd unix_tests/
####  1722  ls
####  1723  cat > skills2.txt
####  1724  cat >> skills2.txt 
####  1725  sort < skills2.txt 
####  1726  wc -l skills2.txt 
####  1727  sort skills2.txt | head -3 > topskills.txt
####  1728  cat topskills.txt 
####  1729  cat > phrases2.txt 
####  1730  grep'br' phrases2.txt | wc -l
####  1731  grep 'br' phrases2.txt | wc -l
####  1732  grep 'Vinho' phrases2.txt | wc -l
####  1733  grep -v 'br' phrases2.txt | wc -l
#### 1734  cat >> phrases2.txt 
####  1735  cat phrases2.txt countries.txt > bunch_of_things.txt
####  1736  cat bunch_of_things.txt 
####  1737  sort bunch_of_things.txt 
####  1738  cat bunch_of_things.txt 
####  1739  man sort
####  1740  sort bunch_of_things.txt -o bunch_of_things.txt 
####  1741  cat bunch_of_things.txt 
 
## Unix & Bash Parte 2 - Exercícios - Permissões 

1. Navegue até a pasta unix_tests ;

2. Rode o comando ls -l e veja quais as permissões dos arquivos;

3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;

*Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt*

4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;

*Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt*

5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .

*Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt*

 **Logs**

####  1758 ls -l 
####  1759  chmod 666 bunch_of_things.txt 
####  1760  ls -l
####  1761  chmod 444 bunch_of_things.txt 
####  1762  ls -l
####  1763  chmod 644 bunch_of_things.txt 
####  1764  ls -l

## Unix & Bash Parte 2 - Exercícios - Processos e Jobs

1. Liste todos os processos;

2. Agora use o comando sleep 30 & ;

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;

4. Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

5. Crie um processo em background que rode o comando sleep por 300 segundos.

6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

*Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.*

7. Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.

*Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal).*

8. Retome a execução do processo sleep 100 em background com o comando bg .

9. Termine a execução de todos os processos sleep (mate os processos) .

 **Logs**
 
####  1772  ps
####  1773  sleep 30 &
####  1774  ps
####  1775 sleep 30
####  1776  ps
####  1777  bg 1
####  1778  sleep 300 &
####  1779  sleep 200
####  1780  sleep 100
####  1781  jobs
####  1782  fg 2
####  1783  jobs
####  1784  bg 4
####  1785  kill %1
####  1786  kill -9 2
####  1787  kill -9 3

## Unix & Bash Parte 2 - Exercícios - O despertar do terminal

 **Logs**
 
####  1823  sudo apt-get install cmatrix
####  1824  cmatrix
####  1825  sudo apt-get install fortune
####  1826  ls
####  1827  cd unix_tests/
####  1828  fortune > fortune.txt
####  1829  cat fortune.txt 
####  1830  wc -w  fortune.txt
####  1831  sudo apt-get install sl
####  1832  sl
####  1833  sl -F
####  1834  sudo apt-get install cowsay
####  1835  cowsay Hello World!
####  1836  fortune | cowsay
####  1837  factor 42
####  1838  fortune | rev | cowsay 
####  1839  telnet towel.blinkenlights.nl


 
