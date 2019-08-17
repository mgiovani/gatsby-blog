---
title: "O que é RegEx?"
path: "/blog/o-que-e-regex"
date: "2019-08-11"
author: "Giovani"
coverImage: "../images/o-que-e-regex-cover.png"
excerpt: "Uma pequena introdução ao que é uma RegEx e como usá-la."
tags: ["regex", "tutorial"]
---

## Introdução

Uma RegEx (**reg**ular **ex**pression) nada mais é que a definição de um padrão a ser buscado em um texto ou string qualquer. Com isso tais padrões podem ser usados para extração ou validação de dados, entre outras coisas.

Apesar da definição ser simples, as expressões regulares têm fama de serem complexas e difíceis de se usar e a verdade é que é uma ferramenta bem simples de se aprender, mas difícil de se dominar.

Existe uma clara diferença entre buscar por um dígito:
```regex
\d
```
Ou buscar por um número de telefone em um dos padrões nacionais mais comuns:
```regex
^(\+[1-9]{2})?((?<!0)(\(?[1-9]{2}\)?)?|0[1-9]{2})(?:\s*)\d{4,5}-?\d{4}$
```

Tudo bem que a regex acima possa ter se tornado um pouco complicada, mas ela seria capaz de encontrar qualquer um dos seguintes números em um texto: 
- +5538994898261
- 038994898261
- (38)994898261
- 994898261
- (38)99489-8261
- 99489-8261

Este texto será apenas sobre a sintaxe básica das expressões regulares e a partir daqui você poderá se aprofundar no mundo das regexes.

## Como utilizar

As regexes estão presentes em muitas ferramentas de edição de texto ou afins (e.g. o Vim, VS Code e Notepad++), mas se preferir testar os padrões no próprio navegador eu recomendo o site [Regex101](https://regex101.com). O site apresenta um campo para informar a sua expressão regular e outro para informar qual será o 'texto alvo' da sua regex, além disso, ainda possui do lado direito: explicação de como a busca foi feita, quais padrões foram encontrados e uma colinha para suas regexes.

O uso básico das expressões está ligado a saber os operadores lógicos, operadores quantitativos e classes de busca disponíveis. Tá, mas o que é cada um desses?

### Classes

As classes seriam como uma lista de opções para que o conteúdo case com a regex de busca. As classes são declaradas com o uso de colchetes. Por exemplo, `[A-Z]` busca por uma letra no intervalo de A a Z na [tabela unicode de caracteres](https://unicode-table.com/pt/). 

Com base na tabela percebemos que apenas letras maiúsculas são capturadas. Para encontrar maiúsculas ou minúsculas seria necessário descrever `[A-Za-z]`.

Alguns exemplos:

| Símbolo   | Significado                                     | Examplo de regex | Exemplo de captura                               |
|:---------:|:-----------------------------------------------:|:----------------:|:------------------------------------------------:|
| `[]`      | Encontra um dos caracteres dentro dos colchetes | `[ABCD]`         | Uma das primeiras 4 letras do alfabeto maiúsculo |
| `-`       | Indicador de intervalo da classe                | `[a-z]`          | Qualquer uma das letras do alfabeto minúsculo    |
| `^`       | Operador de negação                             | `[^a]`           | Qualquer coisa que não seja um a                 |

### Quantificadores

Se você está testando essas expressões no Regex101 deve ter percebido que apenas a primeira letra maiúscula ficou destacada no texto como sendo uma captura, e é aqui que entram os quantificadores. Alguns símbolos especiais são responsáveis por dizer quantas vezes uma classe pode se repetir dentro de um texto.

Se for acrescentado um `{2}` na frente de uma classe, você estará buscando por uma repetição de 2 vezes daquela classe. Por exemplo, `[A-Z]{2}` pode significar a sigla de um estado brasileiro. Você pode buscar por um número não exato de vezes utilizando `*` (0 ou mais vezes) ou `+` (1 ou mais vezes) e até `?` (0 ou 1 vez).

Alguns exemplos:

| Símbolo | Significado              | Examplo de regex | Exemplo de captura      |
|:-------:|:------------------------:|:----------------:|:-----------------------:|
| `+`     | Uma ou mais ocorrências  | `[ABCD]+`        | ABCD                    |
| `*`     | Zero ou mais ocorrências | `A*`             | AAAAAA                  |
| `{2,5}` | De 2 a 5 ocorrências     | `[abcd]{2,5}`    | abcd                    |
| `?`     | Zero ou uma ocorrência   | `A?`             | Pode conter ou não um A |

### Operadores lógicos

É possível utilizar operadores lógicos para realizar buscas com regex, como, por exemplo `A|B` que busca por uma letra A ou letra B no texto alvo.

**Obs.**: O único operador lógico que tratarei aqui é o `|` por questão de simplicidade, mas existem outros.

### Abreviações e caracteres especiais

Como algumas classes são frequentemente utilizadas, existem algumas abreviações para facilitar nossa vida na hora de escrever ou ler uma regex. Existem também alguns caracteres especiais que podem nos ajudar a definir uma busca mais rígida ou flexível.

Alguns exemplos:

| Símbolo |                           Significado                          | Examplo de uso |         Exemplo de captura        |
|:-------:|:--------------------------------------------------------------:|:--------------:|:---------------------------------:|
|   `\d`  |                         Mesmo que [0-9]                        |      `\d+`     |               12345               |
|   `\w`  |                     Mesmo que [A-Za-z0-9_]                     |      `\w*`     |             AaaaA123_             |
|   `\s`  | Casa com espaços em branco (espaço, tab, quebra de linha, etc) |  `[abcd]{2,5}` |                abcd               |
|   `^`   |                        Início de string                        |      `^A`      | Casa com um A no início da string |
|   `$`   |                          Fim de string                         |      `A$`      |   Casa com um A no fim da string  |
|   `.`   |        Qualquer caractere **exceto** uma quebra de linha       |      `.+`      |            ABC0123#$%_            |


## Encerramento:

A ideia deste post foi apresentar o maravilhoso mundo das expressões regulares, mas isso é apenas a ponta do iceberg. Existem dezenas de outras funções que podem ser combinadas para realizar tarefas sensacionais com regex então não pare por aqui!

Agora é com você, leia mais sobre regex nos links abaixo e tente melhorar a regex de números de telefone que coloquei no início do post. [Boa sorte](https://i.pinimg.com/originals/79/59/c8/7959c88552251758fe3390e87b2f6bef.jpg)!

- [Conteúdos de regex - Regular-Expressions.info](https://www.regular-expressions.info/tutorialcnt.html)
- [Livro: Introdução às Expressões Regulares - Michael Fitzgerald](https://www.amazon.com.br/Introdução-Expressões-Regulares-Michael-Fitzgerald/dp/8575223305)
- [Usos para regexes - Rexegg](https://www.rexegg.com/regex-uses.html)
- [Grupos e outras funções - Rexegg](https://www.rexegg.com/regex-disambiguation.html)
