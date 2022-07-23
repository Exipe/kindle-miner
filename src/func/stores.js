import { writable } from "svelte/store";

export const INITIAL = "INITIAL";
export const READY = "READY";

export const Status = writable({
    state: INITIAL,
    vocab: []
});