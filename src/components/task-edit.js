import {
  DAYS,
  COLORS
} from './../const.js';

import {createElement} from '../utils.js';

const initTags = [`repeat`, `cinema`, `entertaiment`];

const createTaskEditTemplate = () => {
  let taskEditTemplate = [];
  taskEditTemplate.push(
      `<article class="card card--edit card--yellow card--repeat">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
  
          <div class="card__textarea-wrap">
            <label>
              <textarea class="card__text" placeholder="Start typing your text here..." name="text">Here is a card with filled data</textarea>
            </label>
          </div>
  
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">yes</span>
                </button>
  
                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input class="card__date" type="text" placeholder="" name="date" value="23 September 11:15 PM">
                  </label>
                </fieldset>
  
                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">no</span>
                </button>
  
                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">`);
  for (const day of DAYS) {
    taskEditTemplate.push(
        `<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-4" name="repeat" value="${day}">
       <label class="card__repeat-day" for="repeat-mo-4">${day}</label>`
    );
  }

  taskEditTemplate.push(
      `</div>
                </fieldset>
              </div>
  
              <div class="card__hashtag">
                <div class="card__hashtag-list">`
  );
  for (const tag of initTags) {
    taskEditTemplate.push(
        `<span class="card__hashtag-inner">
                    <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                    <p class="card__hashtag-name">
                      #${tag}
                    </p>
                    <button type="button" class="card__hashtag-delete">
                      delete
                    </button>
                  </span>`
    );
  }
  taskEditTemplate.push(
      `</div>
  
                <label>
                  <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here">
                </label>
              </div>
            </div>
  
            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
              `);
  for (const color of COLORS) {
    taskEditTemplate.push(
        `<input type="radio" id="color-${color}-4" class="card__color-input card__color-input--${color} visually-hidden" name="color" value="${color}">
       <label for="color-${color}-4" class="card__color card__color--${color}">${color}</label>`
    );
  }
  taskEditTemplate.push(
      `</div>
            </div>
          </div>
  
          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
  taskEditTemplate = taskEditTemplate.join(`\n`);
  return taskEditTemplate;
};

export default class TaskEdit {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createTaskEditTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
