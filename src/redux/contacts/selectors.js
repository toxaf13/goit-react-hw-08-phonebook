import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.tasks.loading;

export const selectFilter = state => state.tasks.filter;

export const selectItems = state => state.tasks.items;


//export const selectContacts = createSelector(
//   [selectItems, selectFilter],
//   (items, filter) => {
//     if (filter === '') return items;
//     const filteredArray = items.filter(item => {
//       const filtered = filter.toLowerCase();
//       return item.name.toLowerCase().includes(filtered);
//     });
//     return filteredArray;
//   }
// );