// Dados das redações COM SEUS LINKS REAIS
const redacoes = [
    { 
        id: 1, 
        titulo: "Redação 1 - Por que procedimentos estéticos estão aumentando entre os jovens", 
        descricao: "O início da minha jornada na escrita", 
        arquivo: "file:///C:/Users/Joao/Downloads/1-Por%20que%20procedimentos%20est%C3%A9ticos%20est%C3%A3o%20aumentando%20entre%20os%20jovens.pdf" 
    },
    { 
        id: 2, 
        titulo: "Redação 2 - Acessibilidade e inclusão de pessoas com deficiência no Brasil", 
        descricao: "Desenvolvendo o pensamento crítico", 
        arquivo: "file:///C:/Users/Joao/Downloads/2-%20Acessibilidade%20e%20inclus%C3%A3o%20de%20pessoas%20com%20defici%C3%AAncia%20no%20Brasil%20(1).pdf" 
    },
    { 
        id: 3, 
        titulo: "Redação 3 - Principais fatores que influenciam na qualidade de vida e no bem-estar da população", 
        descricao: "Aprendendo a defender minhas ideias", 
        arquivo: "file:///C:/Users/Joao/Downloads/3-%20Principais%20fatores%20que%20influenciam%20na%20qualidade%20de%20vida%20e%20no%20bem-estar%20da%20popula%C3%A7%C3%A3o.pdf" 
    },
    { 
        id: 4, 
        titulo: "Redação 4 - As mudanças climáticas no Brasil e seus desafios", 
        descricao: "Ampliando meus horizontes literários", 
        arquivo: "file:///C:/Users/Joao/Downloads/4-As%20mudan%C3%A7as%20clim%C3%A1ticas%20no%20Brasil%20e%20seus%20desafios.pdf" 
    },
    { 
        id: 5, 
        titulo: "Redação 5 - As consequências do descarte de lixo eletrônico", 
        descricao: "Descobrindo a força da linguagem", 
        arquivo: "file:///C:/Users/Joao/Downloads/5-As%20consequ%C3%AAncias%20do%20descarte%20de%20lixo%20eletr%C3%B4nico.pdf" 
    },
    { 
        id: 6, 
        titulo: "Redação 6 - O consumo de ultraprocessados e suas consequências para a saúde", 
        descricao: "Reflexões sobre minha evolução", 
        arquivo: "file:///C:/Users/Joao/Downloads/6-%20O%20consumo%20de%20ultraprocessados%20e%20suas%20consequ%C3%AAncias%20para%20a%20sa%C3%BAde.pdf" 
    },
    { 
        id: 7, 
        titulo: "Redação 7 - Fatores e efeitos da dependência em jogos de aposta", 
        descricao: "Lidando com temas complexos", 
        arquivo: "file:///C:/Users/Joao/Downloads/7-%20Fatores%20e%20efeitos%20da%20depend%C3%AAncia%20em%20jogos%20de%20aposta.pdf" 
    },
    { 
        id: 8, 
        titulo: "Redação 8 - A importância do trabalho voluntário no combate à desigualdade social", 
        descricao: "Relacionando leituras e vivências", 
        arquivo: "file:///C:/Users/Joao/Downloads/8-A%20import%C3%A2ncia%20do%20trabalho%20volunt%C3%A1rio%20no%20combate%20%C3%A0%20desigualdade%20social.pdf" 
    },
    { 
        id: 9, 
        titulo: "Redação 9 - Adultização Infantil – Consequências da perda irreparável da Infância", 
        descricao: "Desenvolvendo meu estilo único", 
        arquivo: "file:///C:/Users/Joao/Downloads/9-%20Adultiza%C3%A7%C3%A3o%20Infantil%20%E2%80%93%20Consequ%C3%AAncias%20da%20perda%20irrepar%C3%A1vel%20da%20Inf%C3%A2ncia.pdf" 
    },
    { 
        id: 10, 
        titulo: "Redação 10 - Caminhos para combater o etarismo nas relações sociais", 
        descricao: "Abordando questões existenciais", 
        arquivo: "file:///C:/Users/Joao/Downloads/10-%20Caminhos%20para%20combater%20o%20etarismo%20nas%20rela%C3%A7%C3%B5es%20sociais.pdf" 
    },
    { 
        id: 11, 
        titulo: "Redação 11 - A importância da educação financeira para os jovens", 
        descricao: "Exercitando o pensamento crítico", 
        arquivo: "file:///C:/Users/Joao/Downloads/11-%20A%20import%C3%A2ncia%20da%20educa%C3%A7%C3%A3o%20financeira%20para%20os%20jovens.pdf" 
    },
    { 
        id: 12, 
        titulo: "Redação 12 - Desafio para a valorização da cultura popular brasileira", 
        descricao: "Preparando-me para o final", 
        arquivo: "file:///C:/Users/Joao/Downloads/12-%20Desafio%20para%20a%20valoriza%C3%A7%C3%A3o%20da%20cultura%20popular%20brasileira.pdf" 
    },
    { 
        id: 13, 
        titulo: "Redação 13 - Caminhos para a universalização do saneamento básico no Brasil", 
        descricao: "Reunindo conhecimentos adquiridos", 
        arquivo: "file:///C:/Users/Joao/Downloads/13-%20Caminhos%20para%20a%20universaliza%C3%A7%C3%A3o%20do%20saneamento%20b%C3%A1sico%20no%20Brasil.pdf" 
    },
    { 
        id: 14, 
        titulo: "Redação 14 - O papel do esporte como ferramenta de transformação social", 
        descricao: "Projetando sonhos e planos", 
        arquivo: "file:///C:/Users/Joao/Downloads/14-%20O%20papel%20do%20esporte%20como%20ferramenta%20de%20transforma%C3%A7%C3%A3o%20social.pdf" 
    },
    { 
        id: 15, 
        titulo: "Redação 15 - Quem sou eu no mundo?", 
        descricao: "Minha última redação do ano", 
        arquivo: "file:///C:/Users/Joao/Downloads/15-Quem%20sou%20eu%20no%20mundo.pdf" 
    }
];

// Menu Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Carregar redações - FUNÇÃO QUE FUNCIONA
function carregarRedacoes() {
    const grid = document.getElementById('redacoesGrid');
    
    redacoes.forEach(redacao => {
        const card = document.createElement('div');
        card.className = 'redacao-card fade-in';
        card.innerHTML = `
            <h3>${redacao.titulo}</h3>
            <p>${redacao.descricao}</p>
            <a href="${redacao.arquivo}" target="_blank" class="btn">
                <i class="fas fa-file-pdf"></i> Ler Redação
            </a>
            <br>
            <small style="color: #666; margin-top: 10px; display: block;">
                <i class="fas fa-info-circle"></i> Para voltar: feche a janela do PDF
            </small>
        `;
        grid.appendChild(card);
    });
}

// Busca em tempo real
document.getElementById('search').addEventListener('input', function(e) {
    const termo = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.redacao-card');
    
    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descricao = card.querySelector('p').textContent.toLowerCase();
        
        if (titulo.includes(termo) || descricao.includes(termo)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Rolagem suave - FUNÇÃO CORRIGIDA
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Ativar links do menu durante a rolagem
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarRedacoes();
    
    // Adicionar delay para animação
    const cards = document.querySelectorAll('.fade-in');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});