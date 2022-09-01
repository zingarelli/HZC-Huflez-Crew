# HZC | Skateboarding lifestyle 🛹
Site para os amantes de skate e vida urbana do Rio de Janeiro.

Este é um projeto resultante do curso Alura "CSS: dispondo elementos com Flexbox e Grid".

Instrutor: [Matheus Alberto](https://github.com/ikyrie).

O site foi desenvolvido seguindo o padrão de desenvolvimento "mobile first" (estruturação e estilização feitos pensando primeiro em telas de celulares, e depois em telas maiores). Também foi aplicada a nomenclatura de classes utilizando a "metodologia BEM" (Block, Element, Modifier), tornando o CSS mais organizado e minimizando conflitos de classes. 

Visando responsividade, o layout do site é alterado quando a tela possui mais de 940 pixels de largura. No projeto original, a largura mínima era de 1440 pixels, porém, eu decidi alterá-la de modo a atender a telas um pouco menores, como as de laptop ou de tablet em posição paisagem. 

O instrutor desenvolveu a página inicial passo a passo durante o curso, deixando como exercício montar a página de "Picos". O design de todas as telas está [disponível no Figma](https://www.figma.com/file/ibWktwVpnog76rMYOdVhks/Dispondo-elementos-com-flexbox-e-grid?node-id=54%3A2358).

## Página Inicial
O conteúdo principal da página inicial é composta por muitos elementos que se repetem (uma imagem e uma seção com textos e um botão), e que foi chamada de "Card". Alterações no layout dos botões e tamanhos de fonte e de Cards foram tratados utilizando classes nomeadas com modificadores (padrão BEM) e também com ícones.

O Flexbox foi utilizado em algumas tags que continham ícones, de modo a organizar o posicionamento da tag e do ícone, por vezes adicionado com os pseudo-elementos `::before` e `::after`. O Flexbox foi também utilizado para posicionar os elementos no cabeçalho e no menu lateral (sendo que na versão mobile o menu lateral fica escondido e é acionado por um evento de click, tratado com JavaScript).

O GRID foi aplicado para posicionamento dos elementos contidos nos cards e um maior controle das margens e padronização de espaços entre os componentes do layout. Sua aplicação teve mais ênfase na versão para telas maiores, em que o maior espaço de largura possibilitou trabalhar com várias colunas para posicionar diferentes seções na tela, utilizando inclusive a propriedade `grid-template-areas` para "desenhar" a posição de cada componente de maneira mais organizada.

A alteração do layout para telas maiores foi feita com a utilização de media-queries, utilizando também classes personalizadas no CSS para mostrar seções do HTML que não aparecem na versão mobile.

## Página de Picos
Esta página segue um layout semelhante ao da página inicial e, graças à organização do HTML, do padrão BEM e do uso de Flexbox e GRID, muitos elementos puderam ser reaproveitados. Refatorei algumas partes do CSS, para tornar algumas classes mais genéricas, ajudando no reaproveitamento dos estilos, sem necessidade de criar um novo arquivo CSS.

Aproveitei para criar um estilo alternativo ao ícone de notificação, utilizando somente CSS para desenhar um círculo verde, indicando ao usuário que há novas notificações para ele. O círculo pode ser colocado e removido por meio da classe `header__notification--active`.

O destaque nessa página é a presença de um mapa indicando a localização de diversos picos (pistas para se andar de skate) na cidade do Rio de Janeiro. Ao invés de inserir uma imagem, decidi inserir um iframe do Google Maps na mesma localização apontada na imagem, adicionando um aspecto mais interativo à página.

---

# Guia de estilos

Toda a estilização que será usada no projeto dentro do figma.

[Link do projeto no figma](https://www.figma.com/file/ibWktwVpnog76rMYOdVhks/Dispondo-elementos-com-flexbox-e-grid?node-id=54%3A2358)

## Fonte

```html
Open Sans:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap">
```

## Cores

corpo: `#1D232A`

cabeçalho: `#1D232A`

cabeçalho mobile: `#15191C`

menu lateral: `#15191C`

cartão: `#2C343A`

fonte: `#FFFFFF`

fonte alternativa: `#95999C`

links: `#0480DC`

botão: `#0480DC`

sombras: `0px 4px 4px rgba(0, 0, 0, 0.16)`

## Ícones

Estão dentro do arquivo de fonte `icones.ttf`. Para usar, primeiro importe a fonte no projeto usando `@font-face` e depois utilize os códigos abaixo para exibir o ícone.

```css
@font-face {
    font-family: 'icones';
    src: url(../font/icones.ttf);
}
```

> Cuidado com a localização do arquivo `icones.ttf`

Camisas = `\e900`

Carrinho = `\e901`

Inicio = `\e902`

Integrantes = `\e903`

Menu = `\e904`

Moeda = `\e905`

Notificação = `\e906`

Pico = `\e908`

Picos = `\e909`

Pinturas = `\e90a`

Play = `\e90b`

Relogio = `\e90c`

Seta-baixo = `\e90d`

Videos = `\e90e`

Visualizacao = `\e90f`

## Espaçamentos

Espaço interno botão: `8px`

Espaço entre elementos do botão: `8px`

Espaço entre elementos: `16px/8px`

Espaçamento interno do corpo: `16px`

Espaçamento entre o título do cartão de recentes e seus itens: `24px`

## Tamanhos

Tamanho do dispositivo mobile: `360px`

Tamanho do dispositivo desktop: `940px` (alterado, antes era `1440px`)

Largura máxima do conteúdo principal: `1120px`

Largura máxima de um cartão desktop: `256px`

Altura mínima de um cartão: `320px`