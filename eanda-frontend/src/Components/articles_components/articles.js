import sobre_img from "./3D_Cover.png";
import metodologia_img from "./3D_Open_Book.png";

const sobre = `Em 2008, Anthony Oladipo criou a E and A Idiomas, focada principalmente em profissionais que
precisavam de apoio imediato, não somente na língua inglesa, mas também em adequar seu
conhecimento técnico a esta segunda língua; para reuniões, conference calls, entre outras
necessidades que uma escola de inglês padrão não consegue suprir. As aulas são lecionadas online
com extrema flexibilidade de horários e dias.

Esses clientes estavam em vários níveis hierárquicos, mas, devido à crescente economia, não
possuíam tempo para deslocar-se até uma escola.

As escolas, até então, ofereciam produtos e cursos já pré-programados, com limitada ou inexistente
adaptabilidade ao cliente e suas necessidades.

O nome "E and A Idiomas" foi escolhido em homenagem às minhas duas filhas. Seus nomes são:
“Ekundayo” and “Ayotunde”`;

const profissionalismo = `PROFISSIONALISMO
Ética e respeito ao aluno e ao mercado`

const entusiasmo = `ENTUSIASMO
Amor pelo ensino e pelo trabalho`

const adaptabilidade = `ADAPTABILIDADE
Fazemos sempre o melhor para atender o cliente`

const conhecimento = `CONHECIMENTO
Desenvolvimento e melhoria constante`

const metodologia = ` Construtivismo - “Common European Frame Work”

O principal objetivo da “abordagem comunicativa” no aprendizado de um segundo idioma é alterar o foco da aprendizagem; dentro da educação tradicional sempre se focou, principalmente, na acuidade da gramática, deixando em segundo plano a comunicação em si. Em suma, aprendizes de uma segunda língua eram experts em verificação, correção e tradução da língua, mas, em grande maioria, se sentiam incapazes de se comunicar na língua alvo.

A abordagem comunicativa apresenta um conjunto de técnicas a serem adotadas pelo professor, as quais possibilitam a condução da aula onde seu papel passa a ser de um mediador, deixando de ser o foco maior, passando a intermediar o andamento das atividades. Para isso, é necessário que o profissional esteja preparado e vigilante às necessidades de cada aluno — que serão as mais diversas — para que, assim, seja possível estabelecer um ambiente criativo e participativo. Em outras palavras, a preparação da aula se baseia, com muito mais peso, nas necessidades, interesses e anseios do aluno.

Conclui-se o material de onboarding agradecendo sua participação e interesse em fazer parte dessa equipe. Somos um grupo extremamente motivado a superar as barreiras técnicas e comuns existentes em todas as escolas de inglês, oferecendo algo muito maior que ensinar-se uma língua. Utilizando a abordagem comunicativa, o aprendizado ocorre naturalmente por meio do estudo de temas relacionados à realidade do aluno.

Assim, trazemos mais relevância ao aproximar o idioma do dia-a-dia do aluno. Temas e situações de negócios são abrodados em vários níveis e atendendo diferentes necessidades.

Programas flexíveis que atendem a níveis específicos de necessidades e se adaptam ao ritmo e velocidade do aluno.`;

const plano_de_carreira = `Ao observar comprometimento, criatividade e, principalmente, desejo de crescer, a escola propões atividades extras com pagamento à parte que envolverão muito além de lecionar.`;

const responsabilidades = ["Trabalhar com produção de materiais", "Produção de vídeos, aulas online ou outras mídias", "Fazer parte da equipe andragógica e de treinamento", "Salário hora-aula competitivo", "Treinamento pago", "O aumento de salário é baseado na obtenção de KPIs [Key Performance Indicators"];

const treinamentos_e_workshops = `A E and A Idiomas preza pelo constante desenvolvimento e aprimoramento de sua equipe, oferecendo treinamentos e workshops recorrentes e remunerados, focados em metodologia, didática, procedimentos, entre outros. O objetivo é evoluir, crescer como profissionais e oferecer uma entrega acima das expectativas de nossos clientes.

Por conseguinte, é notória a necessidade de que todos os colaboradores da E and A Idiomas participem dessas atividades; estas não são obrigatórias, mas irão definir decisivamente na continuidade da parceria entre a escola e o professor.`;

const articles = [
  {
    id: 1,
    title: ["Sobre Nós", "Nossos Valores"],
    content: [sobre, profissionalismo, entusiasmo, adaptabilidade, conhecimento],
    image: sobre_img,
    matcher: "/about",
  },
  {
    id: 2,
    title: ["Metodologia", "Plano de Carreira", "Responsabilidades", "Treinamentos e Workshops"],
    content: [metodologia, plano_de_carreira, responsabilidades, treinamentos_e_workshops],
    image: metodologia_img,
    matcher: "/methodology",
  },
];

export default articles;