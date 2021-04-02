##  Git & GitHub - Entendendo os comandos 
  
 *Foi praticado nesses exercícios diversos comandos no git e GitHub:*
 
 * Criação de branchs
 * Checkout entre branchs
 * Push com branchs diferentes da main
 * Criação de pull requests com interações com outros alunos
 * Resolução de conflitos em arquivos.
 * Merge entre branchs
 
```console
  188 cat trybe_skills.txt
  189 cat >> trybe_skills.txt
  190 git status
  191 git add trybe_skills.txt
  192 git commit -m "Adiciona novas skills ao arquivo trybe-skills.txt"
  193 git push -u origin trybe-skills-changes
  194 git checkout main
  195 git branch
  196 git checkout -b trybe-skills-updates
  197 cat >> trybe_skills.txt
  198 git add trybe_skills.txt
  199 git commit -m "Adiciona novas skills ao arquivo trybe-skills.txt"
  200 git push -u origin trybe-skills-updates
```
