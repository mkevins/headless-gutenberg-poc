import {JSDOM} from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html>');
const {window} = dom;

globalThis.window = window;
