let numRegEx = /\d/;

export const validacionName = (name) => (name.length < 2 || numRegEx.test(name));

export const validacionEmail = (email) => (email.length < 7);

export const validacionContent = (content) => (content.length < 10);
