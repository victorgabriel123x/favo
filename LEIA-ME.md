# Favo Restaurante e Café · site institucional

## Como abrir

Dê dois cliques em **index.html**. Ele abre direto no navegador, sem instalar nada.

## Como publicar

Suba a pasta `site` inteira para qualquer hospedagem (Hostinger, Vercel, Netlify, GitHub Pages, cPanel).
O arquivo `index.html` precisa ficar na raiz, com a pasta `assets` ao lado dele.

## Como mudar textos, contatos e fotos

Tudo fica em um único arquivo: **assets/dados.js**.

Abra com o Bloco de Notas (ou VS Code), altere apenas o texto entre aspas e salve.
Depois atualize a página no navegador com F5.

Lá dentro você controla:

- nome, slogan e descrição
- WhatsApp (número, texto exibido e a mensagem automática)
- Instagram
- endereço, CEP e o que o mapa procura
- horários de funcionamento
- os textos de todas as seções
- quais fotos aparecem em cada lugar
- os itens do menu de navegação

Não apague vírgulas, chaves `{ }` nem colchetes `[ ]`. Se a página ficar em branco depois de uma edição, foi um desses caracteres.

---

## O que ainda precisa de você

### 1. Fotos do ambiente (as únicas que faltam)

A seção **Ambiente** está com três espaços reservados, porque não havia fotos do salão nos arquivos.
Assim que você salvar os arquivos abaixo dentro de `assets/fotos/`, eles aparecem sozinhos no lugar dos espaços reservados:

| Arquivo | O que deve mostrar |
|---|---|
| `ambiente-salao.jpg` | salão com as mesas postas |
| `ambiente-detalhe.jpg` | um detalhe da decoração |
| `ambiente-externa.jpg` | área externa ou fachada |

Formato ideal: retrato (vertical), cerca de 1000 x 1250 pixels.
Se quiser usar outros nomes, é só trocar em `assets/dados.js`, no bloco `ambiente.fotos`.

### 2. Link do Google Maps (opcional)

O mapa e o botão "Como chegar" já funcionam usando o endereço completo.
Se você tiver o link exato da localização (aquele que aparece em "Compartilhar" no Google Maps), cole em `local.linkPersonalizado` dentro de `assets/dados.js` e ele passa a ter prioridade.

### 3. Endereço do site (quando tiver domínio)

No topo do `index.html` há duas linhas comentadas explicando onde colocar o domínio.
Isso melhora a prévia do link quando alguém compartilha o site no WhatsApp ou no Instagram.

---

## O que já está pronto

- Dez seções conforme o briefing: cabeçalho, principal, sobre, experiência, brunch, ambiente, galeria, horários e localização, chamada final e rodapé
- Menu fixo com fundo translúcido ao rolar e menu de tela cheia no celular
- Botão flutuante de WhatsApp que surge depois da primeira rolagem
- Galeria com ampliação por clique, navegação por teclado (setas e Esc) e foco preso na janela
- Mapa do Google incorporado e botão de rota
- Rolagem suave, animações discretas de entrada e respeito à configuração de movimento reduzido do sistema
- Imagens com carregamento adiado, versões `.webp` e descrições alternativas
- Favicon, Open Graph, dados estruturados de restaurante e título e descrição para buscadores
- Sem cardápio, sem preços, sem reservas, sem carrinho, sem links vazios

## Sobre as fotos

As seis fotos de pratos foram normalizadas para um fundo creme único (`#F1EADD`), exatamente o mesmo tom do fundo do site. É isso que faz os pratos parecerem flutuar na página, sem moldura.
Os pratos, as cores e as proporções não foram alterados. Os arquivos originais continuam intactos na pasta `REFERENCIAS`.

A logo também não foi modificada: apenas recortada nas margens vazias e gerada em três cores (clara, escura e verde) a partir do arquivo original.

## Estrutura

```
site/
  index.html                    página completa (HTML, CSS e JS juntos)
  LEIA-ME.md                    este arquivo
  FILOSOFIA-DE-DESIGN.md        a direção visual usada no projeto
  assets/
    dados.js                    ← o arquivo que você edita
    fotos/                      fotos dos pratos (.webp e .jpg)
    marca/                      logo, favicons, imagem de compartilhamento e padrão
```
