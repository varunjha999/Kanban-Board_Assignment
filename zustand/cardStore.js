import create from "zustand";

export const useCardStore = create((set) => ({
  cardsData: {
    boards: [],
  },
  editPanel: {
    id: "0",
    content: "",
    label: "1",
    stats: "",
    show: false,
    keySwitch: 1,
  },

  //Filter
  filteredCards: [],
  setFilter: (data) =>
    set({
      filteredCards: data,
    }),

  //Cards
  setCards: (data) =>
    set({
      cardsData: data,
    }),

  addCard: (newCard) => {
    set((state) => ({
      cardsData: {
        boards: [...state.cardsData.boards, newCard],
      },
    }));
  },

  //Edit
  trigEditCard: (newCard) =>
    set({
      editPanel: newCard,
    }),

  closeEdit: () =>
    set({
      editPanel: {
        id: "0",
        content: "",
        label: "1",
        stats: "",
        show: false,
        keySwitch: 1,
      },
    }),

  //Drag&Drop
  columns: [
    { id: "0", title: "To Do", stats: "todo", items: [] },
    { id: "1", title: "In Progress", stats: "in progress", items: [] },
    { id: "2", title: "To Review", stats: "review", items: [] },
    { id: "3", title: "Completed", stats: "completed", items: [] },
    { id: "4", title: "Cancelled", stats: "cancel", items: [] },
  ],
}));
