# Como usar esta pasta no Claude Code

## O jeito certo

Descompacte esta pasta, abra o Claude Code **dentro dela** e mande algo assim:

> Leia o BRIEF.md. Depois leia `telas/Gerar.dc.html` e `telas/Main.dc.html` como
> referência visual e monte uma versão funcional dessas duas telas em Next.js +
> Tailwind. Não leia a pasta `telas/` inteira de uma vez — abra um arquivo por
> vez, conforme for construindo.

O Claude Code lê arquivo do disco sob demanda. **Não anexe os arquivos na
conversa** — foi isso que estourou o limite. Os onze arquivos juntos passam de
300 KB, e anexados de uma vez viram centenas de milhares de tokens antes de você
escrever a primeira linha.

## Regras práticas pra não estourar de novo

- Um arquivo por vez. Cada tela tem entre 17 KB e 39 KB, o que é tranquilo
  sozinho e pesado em bloco.
- Nada de print. Uma captura de tela em alta custa mais que o arquivo inteiro.
  Se precisar mostrar algo visual, mande o `.dc.html` e deixe ele ler o código.
- Comece por uma tela só, feche o ciclo, e só então parta pra próxima.
- Se a conversa começar a ficar longa, abra uma nova e reapresente só o BRIEF.md
  mais a tela da vez.

## O que estes arquivos são — e o que não são

São **fontes de design**, não código de produção. Cada `.dc.html` é um artboard
de um editor de design: o conteúdo fica dentro de uma tag `<x-dc>`, os estilos
são todos inline e aparecem trechos como `{{variavel}}` e `<sc-for>`, que são do
runtime daquele editor.

Ou seja: não tente rodar esses arquivos como aplicação. Use como referência de
layout, espaçamento, cor, tipografia e conteúdo. A marcação interna — flex, grid,
paddings, hierarquia de texto — traduz direto pra JSX ou pro que você preferir.

## Ordem sugerida

1. `Main.dc.html` — a casca: barra lateral, cabeçalho, cards. Feita essa, todas
   as outras herdam a estrutura.
2. `Gerar.dc.html` — o núcleo do produto, com seleção de artes.
3. `Aprovados.dc.html` — quadro de aprovação.
4. `Feed.dc.html` — prévia da grade do Instagram.
5. `Creators.dc.html` e `Perfil.dc.html` — marketplace.
6. `Campanha.dc.html` — fluxo de retenção de pagamento.
7. `SejaCreator.dc.html` e `PainelCreator.dc.html` — lado do creator.
8. `Metricas.dc.html` e `Modelos.dc.html` — podem ficar por último.

## Arquivos

```
BRIEF.md                    contexto do produto, marca, regras e modelo de dados
LEIA-ME.md                  este arquivo
logo-action-media.png       logo com texto branco, para fundo escuro
logo-action-media-dark.png  logo com texto escuro, para fundo claro
telas/*.dc.html             as onze telas do protótipo
```
