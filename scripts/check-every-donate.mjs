import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import { givingMethods, directDonateUrl } from '../preview-v4/src/content/giving.js'
const source = fs.readFileSync(new URL('../preview-v4/src/lib/everyDonate.js', import.meta.url), 'utf8')
  .replace('export function', 'function') + '\ninstallEveryDonate(window, document)'
let passed = 0
const test = (name, run) => { run(); passed++; console.log(`PASS ${name}`) }
function environment({ apiReady = true, failInit = false, failShow = false } = {}) {
  const nodes = new Map(), listeners = [], calls = { create: 0, show: 0 }
  const api = {
    createWidget(options) { calls.create++; calls.options = options; if (failInit) throw Error('init') },
    showWidget() { calls.show++; if (failShow) throw Error('show') },
  }
  const document = {
    baseURI: 'https://hope1source.org/',
    getElementById(id) { return nodes.get(id) || null },
    createElement(tagName) { return { tagName, events: {}, addEventListener(type, fn) { this.events[type] = fn } } },
    body: { appendChild(node) { nodes.set(node.id, node) } },
    addEventListener(type, fn) { assert.equal(type, 'click'); listeners.push(fn) },
  }
  const window = apiReady ? { everyDotOrgDonateButton: api } : {}
  const context = vm.createContext({ document, window, URL, Object })
  const run = () => vm.runInContext(source, context)
  run()
  const click = (href, flags = {}, attributes = [], target = '') => {
    const anchor = { href, target, hasAttribute(name) { return attributes.includes(name) } }
    const event = { button: 0, defaultPrevented: false, target: { nodeType: 1, closest() { return anchor } }, preventDefault() { this.defaultPrevented = true }, ...flags }
    for (const listener of listeners) listener(event)
    return event
  }
  return { calls, nodes, listeners, window, api, click, run }
}
for (const suffix of ['', '/', '#donate', '#/donate']) test(`generic profile ${suffix} opens the popup`, () => {
  const e = environment()
  assert(e.click(`https://www.every.org/hope-with-love${suffix}`).defaultPrevented)
  assert.equal(e.calls.show, 1)
  assert.equal(e.calls.options.defaultFrequency, 'monthly')
  assert.equal(e.calls.options.requireShareInfo, true)
  assert.equal(e.calls.options.primaryColor, '#c94b2c')
  assert.equal(JSON.stringify(e.calls.options.addAmounts), '[50,100,250]')
})
for (const option of givingMethods) test(`${option.method} uses the exact direct URL`, () => {
  const u = new URL(option.href)
  assert.equal(u.origin, 'https://www.every.org')
  assert.equal(u.pathname, '/hope-with-love')
  assert.equal(u.searchParams.get('method'), option.method)
  assert.equal(u.searchParams.get('require_share_info'), 'true')
  assert.equal(u.hash, '#/donate')
  const e = environment(); assert(!e.click(option.href).defaultPrevented); assert.equal(e.calls.show, 0)
})
for (const query of ['method=bank', 'utm_campaign=winter', 'amount=100', 'success_url=https%3A%2F%2Fhope1source.org%2Fthank-you', 'designation=Food', 'frequency=ONCE', 'unknown=future']) test(`preserve ${query}`, () => {
  assert(!environment().click(`https://www.every.org/hope-with-love?${query}#/donate`).defaultPrevented)
})
for (const url of [
  'https://www.every.org/hope-with-love/f/test#/donate',
  'https://www.every.org/hope-with-love-other',
  'https://www.every.org/other',
  'https://www.every.org.example.com/hope-with-love',
  'http://www.every.org/hope-with-love',
  'https://user@www.every.org/hope-with-love',
  'https://www.every.org/hope-with-love#/donate/stock',
]) test(`do not intercept ${url}`, () => assert(!environment().click(url).defaultPrevented))
for (const modifier of ['metaKey', 'ctrlKey', 'shiftKey', 'altKey']) test(`preserve ${modifier}`, () => assert(!environment().click('https://www.every.org/hope-with-love', { [modifier]: true }).defaultPrevented))
test('middle click', () => assert(!environment().click('https://www.every.org/hope-with-love', { button: 1 }).defaultPrevented))
test('prior event handling', () => { const e = environment(); e.click('https://www.every.org/hope-with-love', { defaultPrevented: true }); assert.equal(e.calls.show, 0) })
for (const attribute of ['download', 'data-every-direct']) test(`preserve ${attribute}`, () => assert(!environment().click('https://www.every.org/hope-with-love', {}, [attribute]).defaultPrevented))
for (const target of ['_blank', '_parent', '_top', 'donation']) test(`preserve target ${target}`, () => assert(!environment().click('https://www.every.org/hope-with-love', {}, [], target).defaultPrevented))
test('explicit self target', () => assert(environment().click('https://www.every.org/hope-with-love', {}, [], '_self').defaultPrevented))
test('duplicate installation', () => { const e = environment({ apiReady: false }); e.run(); assert.equal(e.nodes.size, 2); assert.equal(e.listeners.length, 1) })
test('script unavailable', () => assert(!environment({ apiReady: false }).click('https://www.every.org/hope-with-love').defaultPrevented))
test('delayed script', () => { const e = environment({ apiReady: false }); e.window.everyDotOrgDonateButton = e.api; e.nodes.get('every-donate-btn-js').events.load(); e.nodes.get('every-donate-btn-js').events.load(); assert.equal(e.calls.create, 1); assert(e.click('https://www.every.org/hope-with-love').defaultPrevented) })
test('initialization throws', () => assert(!environment({ failInit: true }).click('https://www.every.org/hope-with-love').defaultPrevented))
test('opening throws', () => assert(!environment({ failShow: true }).click('https://www.every.org/hope-with-love').defaultPrevented))
test('API disappears', () => { const e = environment(); e.window.everyDotOrgDonateButton = null; assert(!e.click('https://www.every.org/hope-with-love').defaultPrevented) })
test('repeated clicks / newly rendered anchors', () => { const e = environment(); e.click('https://www.every.org/hope-with-love'); e.click('https://www.every.org/hope-with-love'); assert.equal(e.calls.show, 2) })
test('visible escape hatch remains direct', () => assert(!environment().click(directDonateUrl).defaultPrevented))
for (const route of ['', 'for-backers/']) test(`${route || 'home'} statically includes every option and fallback`, () => {
  const html = fs.readFileSync(new URL(`../dist/v4/${route}index.html`, import.meta.url), 'utf8')
  for (const option of givingMethods) assert(html.includes(option.href.replaceAll('&', '&amp;')))
  assert(html.includes('Continue on Every.org'))
  assert(html.includes('Monthly is selected'))
  assert(html.includes('share your contact information with Hope with Love'))
  assert.equal((html.match(/id="asset-giving-title"/g) || []).length, 1)
  assert(!html.includes('0% fees'))
})
console.log(`${passed} donation checks passed. Stubbed vendor API, not live checkout or payment testing.`)
