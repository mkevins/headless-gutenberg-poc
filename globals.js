import {JSDOM} from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html>');
const {window} = dom;
const {document, navigator} = window;

globalThis.window = window;
globalThis.document = document;
globalThis.navigator = navigator;
