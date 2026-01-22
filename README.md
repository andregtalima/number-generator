# 🎲 Sorteador de Números

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Uma aplicação web moderna e interativa para sortear números aleatórios com animações suaves e interface elegante.

[Demo](#) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Uso](#-como-usar)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Arquitetura do Código](#-arquitetura-do-código)
- [Customização](#-customização)
- [Responsividade](#-responsividade)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Sorteador de Números** é uma aplicação web gratuita e online que permite gerar números aleatórios de forma rápida e intuitiva. Ideal para sorteios, jogos, rifas, ou qualquer situação que necessite de números aleatórios.

### ✨ Destaques

- 🎨 **Interface Moderna**: Design dark com gradientes vibrantes e animações suaves
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- ⚡ **Performance**: Código otimizado e leve, sem dependências externas
- 🎭 **Animações Elegantes**: Números aparecem com efeitos de rotação e escala
- 🔄 **Controle de Repetição**: Opção para permitir ou não números repetidos

---

## 🚀 Funcionalidades

### Principais Recursos

- ✅ **Definir Intervalo Personalizado**: Escolha o valor inicial e final dos números
- ✅ **Quantidade Configurável**: Defina quantos números deseja sortear
- ✅ **Modo Sem Repetição**: Checkbox para evitar números duplicados
- ✅ **Validação Inteligente**: Sistema robusto de validação de entrada
- ✅ **Animação Sequencial**: Números aparecem um por vez com efeito visual
- ✅ **Histórico de Sorteios**: Contador mostrando "1º resultado", "2º resultado", etc.
- ✅ **Sortear Novamente**: Botão para repetir o sorteio com os mesmos parâmetros
- ✅ **Sanitização de Input**: Aceita apenas números nos campos

### Validações Implementadas

- 🔒 Verifica se todos os campos foram preenchidos
- 🔒 Garante que o valor inicial seja menor que o final
- 🔒 Valida se a quantidade não excede o intervalo disponível
- 🔒 Impede valores negativos ou zero
- 🔒 Remove automaticamente caracteres não numéricos

---

## 🛠 Tecnologias

Este projeto foi desenvolvido com tecnologias web puras, sem frameworks ou bibliotecas externas:

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Estilização moderna com variáveis CSS, Grid, Flexbox e animações |
| **JavaScript (ES6+)** | Lógica da aplicação com funções puras e código modular |

### Fontes Utilizadas

- [Sora](https://fonts.google.com/specimen/Sora) - Títulos e headings
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) - Números sorteados
- [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) - Textos e parágrafos

---

## 📁 Estrutura do Projeto

```
number-generator/
│
├── index.html              # Página principal
├── script.js               # Lógica JavaScript
├── README.md               # Documentação
│
├── assets/                 # Recursos visuais
│   ├── Shapes.png          # Imagem de fundo
│   ├── arrow-right.svg     # Ícone do botão sortear
│   ├── arrow-rotate.svg    # Ícone do botão repetir
│   ├── logo.svg            # Logo da aplicação
│   └── message.svg         # Ícone de informação
│
└── styles/                 # Arquivos CSS
    ├── index.css           # Importações e estilos da página
    ├── global.css          # Variáveis CSS e estilos globais
    ├── header.css          # Estilos do cabeçalho
    ├── main.css            # Estilos do formulário
    └── draw.css            # Estilos dos números sorteados
```

---

## 💻 Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### Opção 1: Clonar o Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/number-generator.git

# Entre no diretório
cd number-generator

# Abra o arquivo index.html no navegador
# Ou use um servidor local (recomendado)
```

### Opção 2: Servidor Local

#### Usando Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Usando Node.js (http-server)

```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute no diretório do projeto
http-server -p 8000
```

#### Usando VS Code

- Instale a extensão **Live Server**
- Clique com botão direito no `index.html`
- Selecione "Open with Live Server"

Acesse: `http://localhost:8000`

---

## 📖 Como Usar

### Passo a Passo

1. **Defina a Quantidade**
   - No campo "Números", digite quantos números deseja sortear
   - Exemplo: `5` para sortear 5 números

2. **Configure o Intervalo**
   - No campo "De", digite o número inicial
   - No campo "Até", digite o número final
   - Exemplo: De `1` até `100`

3. **Escolha o Modo de Repetição**
   - ✅ **Checkbox marcado**: Números não se repetem (padrão)
   - ⬜ **Checkbox desmarcado**: Números podem se repetir

4. **Clique em SORTEAR**
   - Os números aparecerão um por vez com animação
   - Aguarde todos os números serem exibidos

5. **Sortear Novamente** (opcional)
   - Clique no botão "SORTEAR NOVAMENTE" para repetir com os mesmos parâmetros
   - Ou altere os valores e clique em "SORTEAR" novamente

### Exemplos de Uso

#### Exemplo 1: Sorteio de Rifa
```
Números: 3
De: 1
Até: 100
Não repetir: ✅
```
**Resultado**: 3 números únicos entre 1 e 100

#### Exemplo 2: Dados de RPG
```
Números: 5
De: 1
Até: 20
Não repetir: ⬜
```
**Resultado**: 5 números entre 1 e 20 (podem repetir)

#### Exemplo 3: Mega-Sena
```
Números: 6
De: 1
Até: 60
Não repetir: ✅
```
**Resultado**: 6 números únicos entre 1 e 60

---

## 🏗 Arquitetura do Código

### Organização Modular

O código JavaScript está organizado em funções puras e modulares:

```javascript
// Configuração
ANIMATION_DELAY          // Constantes de tempo
elements                 // Referências DOM centralizadas

// Validação e Sanitização
sanitizeNumberInput()    // Remove caracteres não numéricos
validateDrawParams()     // Valida parâmetros do sorteio

// Lógica de Sorteio
generateNumberRange()    // Gera array de números
drawRandomNumbers()      // Sorteia números aleatórios

// Manipulação DOM
createElement()          // Factory de elementos HTML
createNumberElement()    // Cria elemento de número
createRetryButton()      // Cria botão de repetir

// Renderização
displayNumbers()         // Exibe números com animação
renderDrawResult()       // Renderiza resultado completo

// Event Handlers
handleFormSubmit()       // Processa envio do formulário
```

### Fluxo de Dados

```
Input do Usuário
    ↓
Sanitização (remove não-numéricos)
    ↓
Validação (verifica regras)
    ↓
Geração do Pool (cria array de números)
    ↓
Sorteio (seleciona aleatoriamente)
    ↓
Renderização (cria estrutura HTML)
    ↓
Animação (exibe sequencialmente)
    ↓
Botão de Repetir
```

### Padrões Utilizados

- **Factory Pattern**: `createElement()` para criar elementos DOM
- **Callback Pattern**: `displayNumbers()` com callback `onComplete`
- **Module Pattern**: Organização em funções independentes
- **Event Delegation**: Listeners centralizados
- **Recursão com setTimeout**: Animação sequencial

---

## 🎨 Customização

### Variáveis CSS

Todas as cores e estilos estão centralizados em variáveis CSS no arquivo `global.css`:

```css
:root {
  /* Cores de Conteúdo */
  --content-primary: #fff;
  --content-secondary: #c7c9cc;
  --content-brand: #c58de7;
  
  /* Cores de Fundo */
  --bg-primary: #020202;
  --bg-secondary: #111012;
  --bg-brand: #c58de7;
  
  /* Cores Temáticas */
  --pink: #d586e0;
  --blue: #91a1fa;
  --green: #77c0af;
  --lime: #d1dc97;
  --red: #e9a9b3;
  
  /* Tipografia */
  --ff-sora: "Sora", sans-serif;
  --ff-roboto-mono: "Roboto Mono", monospace;
  --ff-roboto-flex: "Roboto Flex", sans-serif;
}
```

### Alterar Velocidade das Animações

No arquivo `script.js`:

```javascript
const ANIMATION_DELAY = 3500;  // Tempo entre números (ms)
const BUTTON_FADE_DELAY = 50;  // Delay do botão (ms)
```

### Customizar Animações CSS

No arquivo `draw.css`, você pode ajustar as animações:

```css
@keyframes rotation {
  /* Modifique a rotação dos números */
}

@keyframes scale {
  /* Ajuste o efeito de escala */
}
```

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints estratégicos:

| Dispositivo | Largura | Características |
|-------------|---------|-----------------|
| **Mobile** | < 700px | Layout vertical, informações no footer |
| **Tablet** | 700px - 949px | Layout adaptado, max-width 80% |
| **Desktop** | ≥ 950px | Layout completo, informações no header |
| **Large Desktop** | ≥ 1200px | Espaçamento otimizado |

### Técnicas Utilizadas

- **Mobile-First**: Design começa pelo mobile
- **CSS Grid & Flexbox**: Layouts flexíveis
- **Media Queries**: Adaptação por tamanho de tela
- **Viewport Units**: Dimensões relativas
- **Clamp()**: Tipografia fluida

---

## 🎯 Boas Práticas Implementadas

### JavaScript

- ✅ Funções puras e reutilizáveis
- ✅ Nomenclatura descritiva e semântica
- ✅ Separação de responsabilidades
- ✅ Tratamento de erros com try-catch
- ✅ Validação robusta de entrada
- ✅ Código modular e escalável
- ✅ Comentários explicativos
- ✅ Uso de const/let (sem var)

### CSS

- ✅ Variáveis CSS para manutenibilidade
- ✅ Organização modular por componente
- ✅ Nomenclatura BEM-like
- ✅ Mobile-first approach
- ✅ Animações performáticas (transform/opacity)
- ✅ Acessibilidade (contraste, foco)

### HTML

- ✅ Estrutura semântica
- ✅ Atributos alt em imagens
- ✅ Labels associados a inputs
- ✅ Meta tags apropriadas

---

## 🐛 Solução de Problemas

### Números não aparecem ao clicar em sortear

**Solução**: Verifique se o JavaScript está carregado corretamente e se não há erros no console do navegador.

### Animações não funcionam

**Solução**: Certifique-se de que o arquivo `draw.css` está sendo importado corretamente.

### Imagens não carregam

**Solução**: Verifique se a pasta `assets/` está no mesmo diretório que o `index.html` e se os caminhos estão corretos.

### Fontes não aparecem

**Solução**: Verifique sua conexão com a internet, pois as fontes são carregadas do Google Fonts.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💜 por [Seu Nome]

---

## 🙏 Agradecimentos

- Google Fonts pela disponibilização das fontes
- Comunidade open source

---

<div align="center">

**[⬆ Voltar ao topo](#-sorteador-de-números)**

Feito com ❤️ e JavaScript

</div>
