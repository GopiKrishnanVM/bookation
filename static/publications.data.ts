import { IPublicationsModel } from "@/models/publications.model";

export const products: Array<IPublicationsModel> = [
  {
    _id: "1",
    name: "தீதும் நன்றும்",
    slug: "dheethum-nandrum",
    price: "₹150",
    author: { _id: "abcd", name: "Sandhiya Natarajan" },

    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/bookation-cee3a.appspot.com/o/Theethum-Nanrum.jpg?alt=media&token=1cefeae3-29f2-4eae-9deb-2737d107abae",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
    description:
      "Vazkaiel  naam santhikum inbam thunbam yethuvaienum atharku karanam naam mattumey enpathey dheethum nandrum tharum vilakam kavithai vadivil , arthangal niraintha karuthukalum  ungal mun ungalin sinthaiku vazvil enna nernthalum thida manathodu santhika ennal muyandra siru muyarchi , kadhalalum anubavathinalum allamal  yaro oruvarin  neenda payanthil oru nanbanaga , yaro oruvarin aalntha thukkathil  oru aruthalaga  Dheethum nandrum  en siru muyarchi oru valikattiyaga endrum ungalud",
    providers: [
      {
        name: "Amazon",
        description: "Amazon Paper black.",
        links: [
          {
            title: "Paper back",
            link: "https://www.amazon.in/dp/B09Y5GW72D/?tag=0010e75-21",
          },
        ],
      },
      {
        name: "Notion Press",
        description: "Notion Press book publications.",
        links: [
          {
            title: "Paper back",
            link: "https://notionpress.com/store/search_book/1369580",
          },
        ],
      },
    ],
  },
];
