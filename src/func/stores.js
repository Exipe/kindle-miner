import { writable } from "svelte/store";

export const INITIAL_STATE = "INITIAL";
export const READY_STATE = "READY";

export const Status = writable({
    state: INITIAL_STATE,
    vocab: []
});

const loadHiddenVocab = () => {
    if(localStorage.hiddenVocab) {
        return JSON.parse(localStorage.hiddenVocab);
    } else {
        return [];
    }
};

export const Hidden = writable(loadHiddenVocab());
Hidden.subscribe((value) => {
    console.log("Save hidden", value);
    localStorage.setItem('hiddenVocab', JSON.stringify(value));
});