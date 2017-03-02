import { Mode } from './mode';
import { get } from 'mosi/client';

export class Extension extends Mode {
  async onEnter (event) {
    return await externalEvent(event);
  }
  async onExit (event) {
    return await externalEvent(event);
  }
  async keydown (event) {
    return await externalEvent(event);
  }
  async keypress (event) {
    return await externalEvent(event);
  }
  async keyup (event) {
    return await externalEvent(event);
  }
  async focusin (event) {
    return await externalEvent(event);
  }
  async focusout (event) {
    return await externalEvent(event);
  }
  async click (event) {
    return await externalEvent(event);
  }
  async mousedown (event) {
    return await externalEvent(event);
  }
  async scroll (event) {
    return await externalEvent(event);
  }
  async saka (event) {
    return await externalEvent(event);
  }
}

async function externalEvent (event) {
  try {
    return await (get(1, 'externalEvent', { mode: this.mode, event: serializeEvent(event) })).v;
  } catch (e) {
    throw e;
  }
}

function serializeEvent (event) {
  return 'blah';
}