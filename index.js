const perguntas = [
    {
      question: "Qual é o principal objetivo do gerenciamento de custos em um projeto?",
      options: [
        { text: 'Garantir que o projeto seja concluído o mais rapidamente possível', isCorrect: false },
        { text: 'Assegurar que os custos do projeto não excedam o orçamento aprovado', isCorrect: true },
        { text: 'Maximizar a qualidade do produto final, independentemente dos custos', isCorrect: false },
        { text: 'Minimizar o escopo do projeto para reduzir despesas', isCorrect: false },
      ]
    },

    {
      question: "No gerenciamento de custos, o que representa a linha de base dos custos?",
      options: [
        { text: 'O custo total real gasto até o momento no projeto', isCorrect: false },
        { text: 'A estimativa inicial de custos sem considerar contingências', isCorrect: false },
        { text: 'O orçamento aprovado, ajustado para quaisquer mudanças autorizadas', isCorrect: true },
        { text: 'O valor máximo que pode ser gasto sem necessidade de aprovação adicional', isCorrect: false }
      ]
    },

    {
      question: "Qual das seguintes alternativas é uma entrada para o processo de estimativa de custos?",
      options: [
        { text: 'Registro das lições aprendidas', isCorrect: false },
        { text: 'Declaração do escopo do projeto', isCorrect: true },
        { text: 'Relatório de desempenho do trabalho', isCorrect: false },
        { text: 'Solicitações de mudança aprovadas', isCorrect: false }
      ]
    },

    {
      question: "O que é a reserva de contingência em um orçamento de projeto?",
      options: [
        { text: 'Uma quantia destinada a cobrir custos de escopo adicional solicitado pelo cliente', isCorrect: false },
        { text: 'Uma reserva para custos inesperados que podem ocorrer durante o projeto', isCorrect: true },
        { text: 'O montante reservado para o pagamento de bônus à equipe do projeto', isCorrect: false },
        { text: 'Uma quantia destinada a cobrir despesas administrativas gerais', isCorrect: false }
      ]
    },

    {
      question: "Qual das seguintes opções representa uma técnica de controle de custos?",
      options: [
        { text: 'Caminho Crítico', isCorrect: false },
        { text: 'Análise de Valor Agregado', isCorrect: true },
        { text: 'Estrutura Analítica do Projeto (EAP)', isCorrect: false },
        { text: 'Diagrama de Ishikawa', isCorrect: false }
      ]
    },

    {
      question: "Qual documento é essencial para definir e controlar os custos de um projeto?",
      options: [
        { text: 'Termo de Abertura do Projeto', isCorrect: false },
        { text: 'Plano de Gerenciamento de Custos', isCorrect: true },
        { text: 'Registro de Riscos', isCorrect: false },
        { text: 'Declaração de Encerramento do Projeto', isCorrect: false },
      ]
    },

    {
      question: "O que é o Custo Real (CR) em um projeto?",
      options: [
        { text: 'O valor estimado para concluir o projeto', isCorrect: false },
        { text: 'O total de custos planejados desde o início do projeto', isCorrect: false },
        { text: 'O montante efetivamente gasto até um determinado momento', isCorrect: true },
        { text: 'O orçamento total aprovado para o projeto', isCorrect: false },    
      ]
    },

    {
      question: "Qual dos seguintes fatores pode impactar diretamente os custos de um projeto?",
      options: [
        { text: 'Mudanças no escopo do projeto', isCorrect: true },
        { text: 'Reuniões frequentes da equipe', isCorrect: false },
        { text: 'A contratação de fornecedores experientes', isCorrect: false },
        { text: 'O uso de metodologias ágeis', isCorrect: false },
      ]
    },

    {
      question: "Qual métrica do gerenciamento de custos indica se o projeto está dentro do orçamento?",
      options: [
        { text: 'Índice de Desempenho de Prazos (SPI)', isCorrect: false },
        { text: 'Índice de Desempenho de Custos (CPI)', isCorrect: true },
        { text: 'Taxa de Retorno do Investimento (ROI)', isCorrect: false },
        { text: 'Indicador de Eficiência Operacional', isCorrect: false },
      ]
    },

    {
      question: "O que é a Reserva de Gerenciamento em um orçamento de projeto?",
      options: [
        { text: 'Uma quantia reservada para riscos identificados e planejados', isCorrect: false },
        { text: 'O valor destinado a cobrir custos administrativos do projeto', isCorrect: false },
        { text: 'Uma reserva para riscos desconhecidos ou imprevistos', isCorrect: true },
        { text: 'O dinheiro economizado no final do projeto', isCorrect: false },
      ]
    },

  ]


  let currentQuestionIndex = 0;
  let nAcertos = 0

  function displayQuestion() {
    const questionElement = document.getElementById("question")
    const optionsElement = document.getElementById("options")
    const questionObj = perguntas[currentQuestionIndex]

    questionElement.textContent = questionObj.question
    questionElement.classList.remove("certa", "errada")

    optionsElement.innerHTML = ''

    questionObj.options.forEach((option, index) => {
      const button = document.createElement('button')
      button.textContent = option.text;
      button.className = 'option';
      button.onclick = () => checkAnswer(option.isCorrect)
      optionsElement.appendChild(button);
    });
  }

  function checkAnswer(isCorrect) {
    const optionsElement = document.getElementById("options")
    const buttons = optionsElement.querySelectorAll(".option")
    const questionElement = document.getElementById('question')
    const correctAnswers = document.getElementById('contador')
    document.getElementById("totalPerguntas").textContent = `/${perguntas.length}` 

    buttons.forEach(button => {
      button.disabled = true;
      if (isCorrect) {
        button.style.backgroundColor = "green";
        questionElement.classList.add('certa')
      } else {
        button.style.backgroundColor = "red";
        questionElement.classList.add('errada')
      }
    })

    if (isCorrect) {
      nAcertos++
    }

    correctAnswers.textContent = nAcertos

    currentQuestionIndex++;
    if (currentQuestionIndex < perguntas.length) {
      setTimeout(displayQuestion, 1500);
    } else {
        document.getElementById("question").textContent = "Quiz Finalizado!"
        document.getElementById("options").innerHTML = ""
    }
  }

  displayQuestion();