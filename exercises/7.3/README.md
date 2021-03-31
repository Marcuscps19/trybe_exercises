#### Exercícios - Testes unitários

1. A função sum(a, b) retorna a soma do parâmetro a com o b
    - Teste se o retorno de sum(4, 5) é 9
    - Teste se o retorno de sum(0, 0) é 0
    - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
    - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    - Verifique se o array passado por parâmetro não sofreu alterações
    - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
    - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
    - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
    - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

5. Compare dois objetos (JSON) para verificar se são idênticos ou não

6. Escreva a função addOne para passar nos testes já implementados.
 
7. Escreva a função wordLengths para passar nos testes já implementados.

8. Escreva a função sumAllNumbers para passar nos testes já implementados.

9. Escreva a função findTheNeedle para passar nos testes já implementados.

10. (greetThePeople) Use a variável parameter como parâmetro da função, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

11. (removeVowels) Use a variável parameter como parâmetro da função, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

12. (greaterThanTen) Use a variável parameter como parâmetro da função, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

13. (secondThirdSmallest) Use a variável parameter como parâmetro da função, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

#### Bônus

1. Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.

**Requisitos**

Como uma pessoa que compra em máquinas automáticas, eu gostaria de selecionar um item, depositar o pagamento e receber o item e o troco.

**Critérios de aceite**

- Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
- Essa lista deve estar no formato decrescente de valor
- É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
- Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra

**Moedas disponíveis**

As moedas serão representadas pelos valores 200 , 100 , 50 , 20 , 10 , 5 , 2 e 1 . Abaixo, existe uma lista de correspondência com os valores em reais (R$)
    - 200 (R$2)
    - 100 (R$1)
    - 50 (R$0,50)
    - 20 (R$0,20)
    - 10 (R$0,10)
    - 5 (R$0,05)
    - 2 (R$0,02)
    - 1 (R$0,01)

*A quantidade de cada moeda é infinita, imagine que isso é uma simplificação do problema.*

**Exemplo**

Se uma pessoa comprar itens com valor total igual a R$2,15 (ou seja, 215) e pagar R$3 (ou seja, 300), o valor do troco é R$0,85 (ou seja, 85). Para entregar esse troco à pessoa, deve-se retornar as moedas 1x R$0,50, 1x R$0,20, 1x R$0,10 e 1x R$0,05, formando assim a lista [50, 20, 10, 5] .


2. Escreva uma função fatorial para passar nos testes já implementados.

3. Escreva a função remove middle para passas nos testes já implementados.