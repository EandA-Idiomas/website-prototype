import sobre_img from "../articles_components/3D_Cover.png";

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

const profissionalismo = `Ética e respeito ao aluno e ao mercado`

const entusiasmo = `Amor pelo ensino e pelo trabalho`

const adaptabilidade = `Fazemos sempre o melhor para atender o cliente`

const conhecimento = `Desenvolvimento e melhoria constante`

const about_content = {
  id: 1,
  title: ["Sobre Nós"],
  content: sobre,
  valores: [profissionalismo, entusiasmo, adaptabilidade, conhecimento],
  image: sobre_img,
  matcher: "/about",
};

export default about_content;