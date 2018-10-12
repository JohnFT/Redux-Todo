
import * as formFilter from './filter.actions';

const stateInitial: formFilter.filterValid = 'all';

export function filterReducer(state = stateInitial, action: formFilter.actions): formFilter.filterValid {
    switch (action.type) {

        case formFilter.SET_FILTER:
            return action.filter

        default:
            return state;
    }
}