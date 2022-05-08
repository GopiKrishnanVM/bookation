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
  {
    _id: "2",
    name: "அவளென் பெரும்போதை",
    slug: "avalen-perumbodhai",
    price: "₹143",
    author: { _id: "efgh", name: "Poetu Bee" },

    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/bookation-cee3a.appspot.com/o/Avalen.jpg?alt=media&token=1f90be58-79ab-49f1-ad4d-af71edfbe805",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
    description:
      "Intha Puthagthil kamathaiyum kaadhalaiyum enathu mozhiyil mozhinthirukkiuren. Kadhal matrum kamathin paal konda ungal ennangal intha puthagathil azhagaga izhaikkapattirukindrana",
    providers: [
      {
        name: "Amazon",
        description: "Amazon Paper black.",
        links: [
          {
            title: "Paper back",
            link: "https://www.amazon.in/dp/1639202781/?tag=003014-21",
          },
          {
            title: "Kindle Edition",
            link: "https://www.amazon.in/dp/B08MTP67RK/?tag=0010e75-21",
          },
        ],
      },
      {
        name: "Notion Press",
        description: "Notion Press book publications.",
        links: [
          {
            title: "Paper back",
            link: "https://notionpress.com/read/avalen-perumbodhai",
          },
        ],
      },
    ],
  },
  {
    _id: "3",
    name: "தீர்ந்துவிட்டாள்",
    slug: "Theernthuvittal",
    price: "₹179",
    author: { _id: "ijhk", name: "Poetu Bee" },

    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/bookation-cee3a.appspot.com/o/Theernthuvittak.jpg?alt=media&token=d3cffa77-f4c5-474d-902c-60116536c6b2",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
    description:
      "In the first book love, lust, love,I, who wrote it all mixed up as friendly,You can feel , what I would have written in this book through that topic on this book.You may find out in the end. Come and tell me if you come to know. Go on.",
    providers: [
      {
        name: "Amazon",
        description: "Amazon Paper black.",
        links: [
          {
            title: "Paper back",
            link: "https://www.amazon.in/dp/1638060002/?tag=003014-21",
          },
          {
            title: "Kindle Edition",
            link: "https://www.amazon.in/dp/B08T7V7PWG/?tag=003014-21",
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
