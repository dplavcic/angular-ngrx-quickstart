import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromItems from './items/items.reducer';

export interface AppState {
  items: fromItems.ItemsState
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItems.itemsReducer
};

// -------------------------------------------------------------------
// ITEMS SELECTORS
// -------------------------------------------------------------------
export const selectItemItemsState = createFeatureSelector<fromItems.ItemsState>('items');

export const selectItemIds = createSelector(
  selectItemItemsState,
  fromItems.selectItemIds
);
export const selectItemEntities = createSelector(
  selectItemItemsState,
  fromItems.selectItemEntities
);
export const selectAllItems = createSelector(
  selectItemItemsState,
  fromItems.selectAllItems
);
export const selectItemTotal = createSelector(
  selectItemItemsState,
  fromItems.selectItemTotal
);
export const selectCurrentItemId = createSelector(
  selectItemItemsState,
  fromItems.getSelectedItemId
);

export const selectCurrentItem = createSelector(
  selectItemEntities,
  selectCurrentItemId,
  (itemEntities, itemId) => {
    const emptyItem = { id: null, name: '', price: 0, description: '' };
    return itemId ? itemEntities[itemId] : emptyItem;
  }
);
