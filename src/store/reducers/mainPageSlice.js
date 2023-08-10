import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  dataProducts: [
    {
      id: 1,
      name: "enim labore anim",
      price: "$282",
      description:
        "Pariatur pariatur amet sit nulla culpa commodo minim enim cupidatat aute quis do nostrud exercitation. Proident irure ut Lorem fugiat nostrud minim occaecat aliqua irure ea elit Lorem cillum labore. Nisi ullamco reprehenderit nostrud quis culpa excepteur amet in sint occaecat aliquip id enim officia. Consequat sunt pariatur eiusmod ut ad esse sint laboris sit veniam nisi officia aliqua. Officia irure mollit excepteur cupidatat. Lorem incididunt in et eu.\r\n",
    },
    {
      id: 2,
      name: "est labore do",
      price: "$141",
      description:
        "In aliqua nisi consectetur velit occaecat labore esse officia ad consequat aute enim anim magna. Ipsum eiusmod incididunt commodo minim minim deserunt aute sunt cillum consequat. Ullamco labore est voluptate quis qui culpa duis dolore ut voluptate duis ullamco. Ipsum incididunt reprehenderit sit laborum. Irure eu nostrud ea minim amet. Sint ipsum ea consequat sint amet ea sit id esse ex nulla consectetur exercitation.\r\n",
    },
    {
      id: 3,
      name: "dolore labore ex",
      price: "$166",
      description:
        "Ut consequat proident est anim pariatur exercitation cupidatat deserunt eiusmod aute. Et qui commodo nisi dolor do incididunt magna enim officia labore aliquip ad et eu. Reprehenderit veniam aliqua officia excepteur aliqua in nostrud. Lorem aute occaecat amet ex enim. Occaecat in commodo tempor et tempor pariatur et minim. Irure culpa reprehenderit et commodo aliquip quis enim consectetur sit nostrud consequat.\r\n",
    },
    {
      id: 4,
      name: "enim proident tempor",
      price: "$244",
      description:
        "Aliqua consectetur pariatur ea tempor sunt amet consequat ullamco aliqua. Commodo adipisicing nostrud culpa aliquip sint. Qui eu ex nulla tempor enim. Sit cillum nulla cillum sit tempor culpa sint voluptate ut proident laborum duis sit. Eu sint est id ad ut voluptate non. Lorem pariatur reprehenderit ea minim minim id. Pariatur sit pariatur est ea sunt.\r\n",
    },
    {
      id: 5,
      name: "fugiat qui eu",
      price: "$269",
      description:
        "Adipisicing aliquip laborum anim eiusmod occaecat non laborum id do consequat irure ea anim esse. Irure ut pariatur consequat ut. Excepteur aliquip adipisicing id mollit laborum consequat incididunt. In dolor veniam reprehenderit ullamco elit. Ad ad nulla duis excepteur non pariatur sint occaecat nostrud qui consectetur nostrud ea. Magna et aute nostrud quis commodo.\r\n",
    },
    {
      id: 6,
      name: "excepteur velit officia",
      price: "$142",
      description:
        "Ullamco aliqua irure incididunt mollit anim. Cupidatat do incididunt eu qui labore cupidatat ipsum. Sint labore voluptate incididunt deserunt amet tempor proident id officia. Elit eiusmod consequat in mollit nisi occaecat deserunt aliquip labore aliquip.\r\n",
    },
    {
      id: 7,
      name: "labore elit dolore",
      price: "$293",
      description:
        "Magna aliqua ullamco consectetur cillum amet Lorem laboris aliquip laborum id. Reprehenderit eu commodo consectetur pariatur exercitation dolore aliqua. Aute sunt enim aliquip est do magna et reprehenderit laboris consequat non mollit dolor.\r\n",
    },
    {
      id: 8,
      name: "ut voluptate ex",
      price: "$175",
      description:
        "Magna ut cillum duis esse qui Lorem. Ullamco ut aliqua exercitation est id occaecat velit ipsum do ex dolor veniam. Fugiat occaecat tempor occaecat sit consequat adipisicing occaecat. Cillum laboris sit ipsum ex non quis laboris enim nisi ad esse nulla anim. Dolor minim enim ex exercitation cillum eu amet.\r\n",
    },
    {
      id: 9,
      name: "ea qui incididunt",
      price: "$112",
      description:
        "Voluptate dolor minim exercitation non qui irure anim non esse ea. Adipisicing esse ullamco eu nostrud adipisicing sunt in cillum sunt ut reprehenderit laboris ex. Fugiat ea anim tempor dolore culpa sit nisi elit dolore cillum. Cupidatat fugiat anim do laborum. Occaecat reprehenderit elit voluptate et ipsum dolor ullamco laboris. Do amet Lorem irure officia ullamco consequat.\r\n",
    },
    {
      id: 10,
      name: "do sunt id",
      price: "$144",
      description:
        "Quis ullamco et minim mollit qui exercitation reprehenderit irure et consequat nisi. Anim minim mollit occaecat reprehenderit deserunt. Fugiat excepteur do laborum nisi enim cillum. Irure magna ad anim cillum quis nulla veniam commodo pariatur Lorem dolor excepteur.\r\n",
    },
  ],
  cart: [],
};




const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changeDataProducts: (state, action) => {
      state.dataProducts = action.payload;
    },
    changeCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});
export const { changeDataProducts, changeCart } = mainPageSlice.actions;
export default mainPageSlice.reducer;
