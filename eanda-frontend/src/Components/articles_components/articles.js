import sobre_img from "../about_components/3D_Cover.png";
import metodologia_img from "../methodology_components/3D_Open_Book.png";

const sobre = `A E and A Idiomas, foca principalmente em profissionais que
precisavam de apoio imediato, não somente na língua inglesa, mas também em adequar seu
conhecimento técnico a esta segunda língua.`;

const metodologia = `O principal objetivo da “abordagem comunicativa” no aprendizado de um segundo idioma é alterar o foco da aprendizagem; dentro da educação tradicional sempre se focou, principalmente, na acuidade da gramática, deixando em segundo plano a comunicação em si.Em suma, aprendizes de uma segunda língua eram experts em verificação, correção e tradução da língua, mas, em grande maioria, se sentiam incapazes de se comunicar na língua alvo.`;

const articles = [
  {
    id: 1,
    title: ["Sobre Nós"],
    content: sobre,
    image: sobre_img,
    matcher: "/about",
  },
  {
    id: 2,
    title: ["Nossa Metodologia"],
    content: metodologia,
    image: metodologia_img,
    matcher: "/methodology",
  },
];

export default articles;