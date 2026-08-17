// ACESSIBILIDADE: CONTROLE DE FONTE
let tamanhoFonteAtual = 16;
const tamanhoMinimo = 12;
const tamanhoMaximo = 22;

const btnAumentar = document.getElementById('btn-fonte-aumentar');
const btnDiminuir = document.getElementById('btn-fonte-diminuir');
const btnTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('icone-tema');

btnAumentar.addEventListener('click', () => {
    if (tamanhoFonteAtual < tamanhoMaximo) {
        tamanhoFonteAtual += 2;
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
    }
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonteAtual > tamanhoMinimo) {
        tamanhoFonteAtual -= 2;
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
    }
});

// ACESSIBILIDADE: TEMA CLARO E ESCURO
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
    const eTemaClaro = document.body.classList.contains('tema-claro');
    iconeTema.textContent = eTemaClaro ? '☀️' : '🌙';
});