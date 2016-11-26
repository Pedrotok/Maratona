Maratona de Programação UnB/CIC 2016 - Classe Laser
===================================================

Múltiplos de 3
--------------

**Categoria**: _Matemática_
**Tópico Principal**: _Divisibilidade_
**Dificuldade**: Fácil

Embora este seja um problema de matemática, sobre divisibilidade, a implementação
em si depende da manipulação de strings, uma vez que a entrada (com até 1.000
dígitos decimais) extrapola a capacidade de variáveis do tipo `int` e 
`long long`.

Uma vez lido o valor de `N` como uma string, para a obtenção dos dígitos 
`d` cada caractere `c` deve ser 
convertido, individualmente, para seu valor inteiro correspondente, o que 
pode ser feito através da subtração do valor `'0'`:
```C++
    int d = c - '0';
```

Por fim, para ver se a soma dos dígitos é ou não múltiplo de três, basta 
usar o operador `%`: se o resto da divisão da soma por 3 for zero, 
`N` será múltiplo de 3.
Números Perfeitos
-----------------

**Categoria**: _Iniciante_
**Tópico Principal**: _I/O_
**Dificuldade**: Fácil

Problema raro em maratonas, devido a ausência de entrada. A solução consiste em
simplesmente imprimir os números dados, na formatação indicada.
Color Combo
-----------

**Categoria**: _Iniciante_
**Tópico Principal**: _Estrutura de Seleção_
**Dificuldade**: Fácil

Problema simples de seleção. O bônus pode ser determinado a partir da quantidade
_N_ de peças destruídas:
```C++
    int bonus;

	if (N <= 3)
		bonus = 0;
	else if (N <= 7)
		bonus = 25;
	else
		bonus = 50;
```

De posse do valor do bônus, a pontuação final pode ser calculada em duas
etapas: o acréscimo por peça acima de três e a aplicação do bônus.
```C++

	int total = B + (N - 3)*100;
	total += (bonus*total)/100;
```

Por fim, basta apenas ter cuidado com o caso especial onde o total é igual a
1: o "s" do final da mensagem deve ser omitido.
Dominós
-------

**Categoria**: _Matemática_
**Tópico Principal**: _Combinação_
**Dificuldade**: Fácil

Este é um problema de análise combinatória simples, e pode ser resolvido com
duas abordagens. A primeira consiste em observar que são _n + 1_ valores
possíveis, e cada um deste valores deve ser combinado com os demais, gerando
_n(n + 1)_ peças. Contudo, este produto conta cada peças duas vezes, então é
preciso dividir este total por 2, obtendo _n(n + 1)/2_. Agora é preciso somar
as "buchas" (peças com os dois valores idênticos), que são mais _n + 1_. 
Portanto, o total seria de _n(n + 1)/2 + (n + 1) = (n + 2)(n + 1)/2_.

A segunda abordagem, mais direta, considera este problema um problema de 
combinação, dois a dois, com repetição, de _n + 1_ elementos, o que dá
_CR(n + 1, 2) = ((n + 1) + 2 - 1, 2) = (n + 2, 2) = (n + 2)(n + 1)/2_. 
Elementos
---------

**Categoria**: _Iniciante_
**Tópico Principal**: _Estruturas de seleção_
**Dificuldade**: Fácil

Este problema pode ser resolvido através de uma série de comandos `if`, mas
há uma forma mais sintética de expressar as relações entre os elementos. Para
isso, declare um vetor/_array_ de strings como abaixo:
```C++
const string elements[] {"Fogo", "Agua", "Terra", "Ar", "Fogo", "Agua"};
```

Pode-se observar que, na ordem em que estão, cada elemento, a partir da posição
1 (Água) até a penúltima (Fogo), tem à sua esquerda o elemento que é vulnerável
e à direita o resistente. Assim, se _A == B_, o dano final é _D_; caso 
contrário, determine o índice _i_ de _A_ no vetor _elements_: se 
_B = elements[i - 1]_, o dano é dobrado; se _B = elements[i + 1]_, reduzido
à metade. Se não for nenhum dos dois casos, o dano será igual a zero.

O índice _i_ de _A_ pode ser encontrado através das expressões abaixo:
```C++
int i = 0;

while (elements[++i] != A);
```
Empilhando Caixas
-----------------

**Categoria**: _Iniciante_
**Tópico Principal**: _Pilhas_
**Dificuldade**: Fácil

Embora o problema utilize o conceito de pilhas, é possível resolvê-lo sem
necessariamente implementar ou usar uma pilha. A questão é manter o registro
da última caixa que foi empilhada (_C_), a massa já empilhada (_m_) e a 
quantidade de caixas já empilhadas (_n_).

A primeira caixa deve ser sempre empilhada, de modo que teremos _C = C1_,
_m = C1, n = 1_.
Para as demais caixas _Cj_, basta verificar as duas condições descritas no
problema e empilhar se possível:
```C++

    if (n < 6 and Cj <= C)
    {
        C = Cj;
        m += Cj;
        ++n;
    }
```

Ao final, basta imprimir a mensagem com o valor de _m_.

Ímpa ou pá?
-----------

**Categoria**: _Iniciante_
**Tópico Principal**: _Operadores Aritméticos_
**Dificuldade**: Fácil

Problema simples: basta decidir se a soma _S = L + P_ é impar (Lucas vence) ou
par (Pedro vence). Esta verificação pode ser feita de duas forma: pelo
operador resto da divisão (`%`)
```C++
    printf("%s\n", (S % 2 == 0 ? "Pedro" : "Lucas"));
```
ou pelo operador `&` ('e' _bit_ a _bit_)
```C++
    printf("%s\n", (S & 1 ? "Lucas" : "Pedro"));
```
Impressão em dupla face
-----------------------

**Categoria**: _Iniciante_
**Tópico Principal**: _Estruturas de Seleção_
**Dificuldade**: Fácil

Primeiramente, deve se definir se a página estará em branco ou não. Este fato
depende apenas do número de páginas a serem impressas: caso seja ímpar, o topo
estará em branco.

A segunda etapa é definir o número da página do topo, caso não esteja em branco.
Este número é igual a soma _I + N - 1_, onde o _-1_ aparece porque o número da
página inicial entra também na contagem da impressão. Em código C/C++
```C++
    if (N & 1)
        printf("Pagina em branco\n");
    else
        printf("%d\n", I + N - 1);
```
