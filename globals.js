import {JSDOM} from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html>');
const {window} = dom;
const {document} = window;

globalThis.window = window;
globalThis.document = document;
