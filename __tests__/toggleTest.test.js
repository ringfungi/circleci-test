
const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');
const toggleText = require('../express/toggleText');
const html = fs.readFileSync(path.resolve(__dirname, '../express/index.html'), 'utf8');
let dom;
let container;

beforeAll(() => {
  dom = new jsdom.JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.body;

    global.window = dom.window;
    global.document = dom.window.document;
});

describe('Checking toggleText functionalities', () => {
  it('Initially, textDIV should not be visible', () => {
    const textDiv = container.querySelector('#textDIV');
    // checking initial state as display none
    expect(textDiv.style.display).toBe('none');
  });
  //  This will cover the if
  it('On click, toggleBTN should show textDIV ', () => {
    let textBTN = container.querySelector('#toggleBTN');
    // giving reference function to button as it won't work directly
    textBTN.click = toggleText;
    // clicking on button to call the function as user does on actual UI
    textBTN.click();
    const textDiv = container.querySelector('#textDIV');
    // checking the display is block or not
    expect(textDiv.style.display).toBe('block');
  });

  //  This will cover the else
  it('On click (again), toggleBTN should hide textDIV ', () => {
    let textBTN = container.querySelector('#toggleBTN');
    textBTN.click();
    const textDiv = container.querySelector('#textDIV');
    expect(textDiv.style.display).toBe('none');
  });
});