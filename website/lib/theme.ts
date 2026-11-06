export const THEME_STORAGE_KEY = "semester-theme";
export const THEME_EVENT = "semester-theme";

/**
 * Läuft vor dem ersten Zeichnen: Hell ist Standard (unabhängig von der System-Einstellung),
 * Dunkel nur nach ausdrücklicher Wahl. Verhindert ein Aufblitzen des falschen Schemas.
 */
export const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==='dark'){document.documentElement.dataset.theme='dark'}}catch(e){}})();`;
