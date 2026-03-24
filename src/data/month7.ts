import { Recipe } from '../types';

export const month7Recipes: Recipe[] = Array.from({ length: 34 }, (_, i) => ({
  id: `t7-${i + 1}`,
  name: [
    'Arroz com Feijão, Iscas de Carne e Salada de Alface',
    'Macarrão Integral com Molho de Tomate e Frango',
    'Purê de Batata com Peixe Grelhado e Brócolis',
    'Risoto de Legumes com Cubos de Queijo Branco',
    'Omelete de Espinafre com Arroz e Tomate',
    'Carne Moída com Cenoura, Arroz e Feijão Preto',
    'Frango com Quiabo, Polenta e Salada de Tomate',
    'Peixe ao Forno com Batata Doce e Vagem',
    'Macarrão com Brócolis, Alho e Azeite e Ovo Cozido',
    'Arroz de Carreteiro com Legumes Picadinhos',
    'Lentilha com Arroz, Carne Desfiada e Abobrinha',
    'Purê de Mandioquinha com Iscas de Frango e Salada',
    'Batata Assada com Recheio de Carne e Queijo',
    'Arroz com Milho, Feijão e Almôndegas de Frango',
    'Peixe Grelhado com Purê de Abóbora e Arroz',
    'Macarrão com Molho Branco e Ervilhas Frescas',
    'Carne de Panela com Batata, Cenoura e Arroz',
    'Frango Xadrez Adaptado (com pimentão e cebola)',
    'Arroz com Lentilha, Carne e Salada de Repolho',
    'Purê de Inhame com Peixe e Salada de Tomate',
    'Macarrão com Carne Moída e Milho Verde',
    'Arroz Integral com Feijão e Omelete de Legumes',
    'Frango Assado com Batata e Salada de Alface',
    'Peixe com Molho de Tomate, Arroz e Brócolis',
    'Risoto de Frango com Ervilha e Cenoura',
    'Carne Moída com Batata, Arroz e Feijão',
    'Macarrão com Atum, Milho e Azeite de Oliva',
    'Arroz com Feijão, Bife Picadinho e Salada',
    'Purê de Batata Doce com Frango e Vagem',
    'Lentilha com Arroz e Cubos de Carne Grelhada',
    'Macarrão com Abobrinha, Tomate e Queijo',
    'Arroz com Feijão, Ovo Mexido e Salada de Tomate',
    'Frango com Batata, Cenoura e Arroz Integral',
    'Peixe Grelhado com Arroz e Salada de Alface'
  ][i % 34],
  age: '1-3 anos',
  ingredients: [
    'Proteína (Carne/Frango/Peixe/Ovo)',
    'Carboidrato (Arroz/Batata/Macarrão)',
    'Salada/Legumes (Alface/Tomate/Brócolis)',
    'Gordura Saudável (Azeite de Oliva)',
    'Água para acompanhar'
  ],
  instructions: [
    'Prepare a proteína grelhada ou cozida com pouco sal.',
    'Cozinhe o carboidrato até ficar macio.',
    'Pique os legumes em pedaços pequenos adequados para a idade.',
    'Finalize com um fio de azeite de oliva.',
    'Ofereça água durante a refeição.'
  ],
  texture: 'Pedaços pequenos e texturas variadas para estimular a mastigação.',
  month: 7,
  day: i + 1,
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  playfulAlerts: [
    'Água é a melhor amiga do seu corpo! 💧',
    'Comer colorido é comer saúde! 🌈',
    'Mastigue bem para sentir todos os sabores! 😋'
  ]
}));
