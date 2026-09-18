# Action Media — brief de desenvolvimento

Documento único de contexto. Anexe **só este arquivo** para começar a desenvolver
em uma conversa nova. Ele substitui o protótipo inteiro como ponto de partida.

---

## 1. O que é

SaaS de gestão de mídia para varejo, em três módulos que se alimentam:

1. **Planejamento** — calendário comercial do ano gerado por IA, com sazonalidade
   brasileira, copy e ação definidas por post antes de qualquer arte existir.
2. **Social media** — geração de artes por IA a partir da copy aprovada,
   publicação no Instagram e Facebook, métricas que realimentam o planejamento.
3. **Marketplace de UGC** — creators com portfólio e ranking, envio do produto
   real, pagamento retido liberado só após aprovação da marca.

Público: lojista de varejo físico que fatura a partir de ~R$30 mil/mês e nunca
pagou R$2.500 num serviço manual de social media.

Planos: Planejamento R$500/mês · Completo R$1.500/mês · UGC incluso com taxa de
serviço de 15% a 20% **cobrada da marca, nunca do creator**.

---

## 2. Marca

**Logo:** "Action" em sans geométrico pesado com uma figura humana dentro do "A";
abaixo, placa com gradiente e "Media" em sans leve, com um play no lugar do bojo
do "d". Existem duas versões: texto branco (para fundo escuro) e texto escuro
(para fundo claro).

**Cores da aplicação** — tiradas do gradiente da logo:

| uso | hex |
|---|---|
| primária (botões, ativo, links) | `#594797` |
| primária hover | `#43356F` |
| destaque / secundária | `#914594` |
| barra lateral (fundo) | `#1A1030` |
| item ativo na barra lateral | `#2E2560` |
| texto da barra lateral | `#C6BADF` |
| fundo da aplicação | `#F7F6FB` |
| superfície (cards) | `#FFFFFF` |
| linha / borda | `#E3DEEF` |
| texto principal | `#17122A` |
| texto secundário | `#574C74` |
| texto terciário | `#6E6488` |
| sucesso | `#0D6B45` sobre `#E3F3EB` |
| atenção | `#8A5300` sobre `#FCF0DC` |
| risco | `#A3271E` sobre `#FCEAE7` |

**Tipografia:** Archivo (600/700/800) para títulos · IBM Plex Sans (400/500/600)
para texto · IBM Plex Mono (500/600) para rótulos em caixa alta com
`letter-spacing` alto.

**Regras de interface:** raio de 9px em botões e campos, 12–14px em cards; alvo
de toque mínimo de 44px; barra lateral fixa de 250px; cabeçalho de 70px com
rótulo mono em cima e título em Archivo embaixo.

---

## 3. Telas

Barra lateral em três grupos.

**GERAL**
- `Início` — fila do que precisa de aprovação, calendário do mês, atalhos.
- `Planejamento` — calendário comercial do ano. *(ainda não prototipado)*

**SOCIAL MEDIA**
- `Gerar publicações` — painel esquerdo com o que a IA recebeu (objetivo, copy
  aprovada, produto do catálogo, paleta e tom lidos do Instagram); à direita, 20
  opções geradas para escolher 10, cada uma com botão de refazer. Seleção é
  estado local, com contador "x de 10".
- `Modelos` — biblioteca de modelos por segmento (calçados, moda, restaurante).
  Prova que a estrutura da peça não muda, só o contexto lido da marca.
- `Aprovadas e agenda` — quadro de três colunas: esperando aprovação, aprovadas
  e agendadas, publicadas.
- `Prévia do feed` — celular mostrando a grade do Instagram com as próximas
  publicações no lugar, fila reordenável e equilíbrio do feed por tipo de post.
- `Métricas` — período contra período anterior, alcance por semana, ranking do
  que performou, e o comparativo **arte de IA x vídeo de creator**.

**UGC**
- `Descobrir creators` — filtros (nicho, cidade, nota, prazo) e cards com
  miniatura de portfólio, nota, entregas e valor por vídeo.
- `Perfil do creator` — layout de perfil de Instagram: foto, contadores, abas e
  grade de vídeos.
- `Minhas campanhas` — briefing, etapas por creator (produto enviado → gravado →
  vídeo entregue → aprovado e pago), prévia com marca d'água, valores retidos e
  documentos emitidos.

**Lado do creator** (fora do app da loja)
- `Seja creator` — landing pública com cadastro, portfólio mínimo de 5 vídeos e
  3 marcas, aceite de contrato e de direito de imagem.
- `Painel do creator` — convites abertos com valor e briefing, ganhos retidos e
  liberados, régua de ranqueamento.

---

## 4. Regras de produto que não podem cair

Estas são decisões, não detalhes. Qualquer implementação precisa respeitá-las.

- **Nada vai ao ar sem aprovação do cliente.** Publicar sem aprovar é dano de
  marca, não bug.
- **Sem briefing.** O cliente conecta o Instagram uma vez e a IA lê produtos,
  paleta, tom e identidade. Depois disso ele só escolhe objetivo e aprova. Se
  exigir briefing, ele não usa — atrito é o concorrente real.
- **A taxa de serviço do UGC é cobrada da marca.** O creator recebe 100% do
  combinado. Taxar o creator empurra ele para a concorrência, que é gratuita
  para esse lado.
- **Pagamento retido.** O cliente vê o vídeo com marca d'água, só baixa depois
  de aprovar, e o creator só recebe depois da aprovação. Sem resposta em 7 dias,
  aprova e paga automaticamente.
- **Produto real, nunca similar.** A etiqueta dos Correios é emitida dentro do
  fluxo.
- **Contato direto bloqueado** entre marca e creator, com contrato dos dois
  lados. Mas a defesa real é que ficar dentro custa menos: retenção, nota
  fiscal, direito de imagem e histórico de avaliação.
- **Curadoria de entrada:** 5 vídeos no portfólio e 3 marcas atendidas.
- **Versão 1 funciona sem a API de publicação da Meta:** a plataforma monta o
  post pronto e o cliente publica com um clique. A aprovação da API melhora o
  produto, não destrava ele.

---

## 5. Modelo de dados mínimo

```
Conta            id, nome, plano, instagram_handle, paleta, tom_de_voz, fontes
Produto          id, conta_id, nome, preco, estoque, origem (erp|manual), foto
DataComercial    id, data, nome, nicho, sugestao_de_acao
Post             id, conta_id, data_comercial_id, formato, copy, objetivo,
                 status (gerado|aprovado|agendado|publicado), agendado_para
Arte             id, post_id, url, escolhida (bool), rodada
Metrica          id, post_id, alcance, interacoes, salvamentos, coletada_em

Creator          id, nome, cidade, nichos[], valor_por_video, prazo_dias,
                 nota, entregas, status (pendente|aprovado|suspenso)
PortfolioItem    id, creator_id, url, tipo, marca
Campanha         id, conta_id, briefing, entregaveis, prazo_dias,
                 direito_imagem_meses, status
Participacao     id, campanha_id, creator_id, produto_id, valor,
                 etapa (convidado|aceito|enviado|gravando|entregue|aprovado),
                 rastreio, video_url, aprovado_em, pago_em
Retencao         id, participacao_id, valor_retido, taxa_marca, liberado_em
```

---

## 6. Ordem de construção

O plano do grupo é vender o produto completo e construir por partes, liberando
acesso conforme desenvolve.

1. **Mês 1–2** — planejamento e geração de artes. Entrada no app review da Meta
   no dia 1, em paralelo.
2. **Mês 3** — a social media da agência passa a rodar os clientes atuais dentro
   da plataforma. Beta pago para a base.
3. **Mês 4–5** — publicação automática no Instagram e Facebook, correções do que
   o uso real apontou.
4. **Mês 6–8** — marketplace de UGC: captação de creators, curadoria, retenção
   de pagamento, emissão de nota.
5. **Mês 9–12** — escala fora da base, com tráfego pago ligado só agora.

**Por onde começar de verdade:** o fluxo `conectar Instagram → ler identidade →
gerar 20 artes → aprovar 10 → agendar`. É o núcleo do produto e o que prova a
tese. Tudo o mais depende disso funcionar.

Condição do plano: **1 dev full-time, não fatiado entre projetos.** Foi dev
dividido que atrasou o projeto anterior da casa.

---

## 7. Conteúdo de demonstração

O protótipo usa uma loja fictícia para não expor cliente real:

**Aurora Calçados** — loja de calçados em Belo Horizonte, unidade Iguatemi,
numeração 34 ao 40. Identidade: off-white `#F7F1EA`, areia `#E7D7C6`, terracota
`#C4553A`, quase preto `#241C17`, tipografia serifada, foto em ambiente real,
tom direto sem gíria.

Creator de exemplo: Marina B., Belo Horizonte, moda e calçados, nota 4,9, 23
entregas, R$180 por vídeo.

Outros segmentos usados na tela de modelos: **Ateliê Norte** (moda — grafite,
osso, argila) e **Cantina Salvato** (restaurante — quase preto, dourado,
serifada).

---

## 8. Padrão das peças geradas

Três gramáticas, que se repetem em qualquer segmento:

1. **Editorial escura** — fundo quase preto, foto do produto ao centro,
   manchete serifada clara, filete fino, bloco de preço grande com centavos
   menores, e assinatura embaixo: `UNIDADE X` sobre filete sobre `CIDADE`.
2. **Editorial clara** — fundo claro, etiqueta em pílula no topo, manchete
   pesada em sans com marca-texto colorido numa palavra-chave, subtítulo de uma
   linha, produto sangrando no canto inferior, e pílula de CTA com seta.
3. **Grade de atributos** — fundo claro, manchete serifada, filete curto, foto
   central, grade de 2x2 com ícone redondo e rótulo curto, e botão largo de CTA
   no rodapé.

Uma quarta, para carrossel: **balões de conversa** — pergunta do cliente em
balão neutro, resposta da marca em balão colorido com trechos em negrito.
