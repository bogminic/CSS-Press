import { IChapter } from "../models/Game";

export const chapters: IChapter[] = [
  {
    chapterName: 'Text',
    levels: [
      {
        levelName: 'font-size',
        instructions: 'Let\'s help the tiny paragraph from there to grow up! <code>Font-size</code> should be the magic potion you need.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'font-size: 12px;',
        solutions: [['font-size', '16px', '1em']],
        tipSelector: 'p',
        tipInfo: 'Characters dimension is 16px',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <p>Integer non mollis lorem, ut dignissim augue et la es integer at semper erat mo en placerat purus ac diam elementum, nec feugiat neque faucibus esta nod. Ppurus ac diam elementum, nec feugiat.</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p class="misprint">Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit elit.Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in ete el.</p>
        </div>
      `
      },
      {
        levelName: 'font-style',
        instructions: 'Our second quote doesn\'t look as stilish as the first one, isn\'t it? <code>Font-style</code> can be the solution for you!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'font-style: normal;',
        solutions: [['font-style', 'italic']],
        tipSelector: 'q',
        tipInfo: 'Font face is italic',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <img src="https://dummyimage.com/347x75/f1b681/000.jpg" alt="Image" />
          <p>Volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q class="misprint">Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc.</p>
        </div>
      `
      },
      {
        levelName: 'font-family',
        instructions: 'There is a paragraph of this article that seems to be from another story. You can fix it using&nbsp;<code>font-family</code> property.<br/> <br/>Please note that font-family specifies the font and its fallbacks, separated by commas.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'font-family: "Turret Road";',
        solutions: [['font-family', '"CrimsonText"']],
        tipSelector: 'p',
        tipInfo: 'Font name is "Crimson Text"',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam.</p>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus,volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p class="misprint">Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.  Morbi at massa eu dolor convallis feugiat.  Morbi at massa eu dolor convallis feugiat  Morbi at massa eu dolor convallis feugiat.  Morbi at massa eu dolor convallis feugiat condimentum ipsum hendrerit id.</p>
        </div>
      `
      },
      {
        levelName: 'font-size, font-style, font-family,',
        instructions: 'Our second quote doesn\'t look as stilish as the first one. Use all the font properties you learned so far (<code>font-family</code>, <code>font-size</code>, <code>font-style</code>) to beautify it!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 3,
        startHighlightCode: 2,
        error: 'font-size: 10px; font-style: normal; font-family: Source Code Pro;',
        solutions: [['font-size', '16px', '1em'], ['font-style', 'italic'], ['font-family', '"PlayfairDisplay"']],
        tipSelector: 'q',
        tipInfo: 'Characters dimension is 16px, font face is italic and font name is "Playfair Display"',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q class="misprint">Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat.</p>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? </p>
        </div>
      `
      },
      {
        levelName: 'font-weight',
        instructions: 'Why is that subtitle thiner than the others? Should be a mistake! Use <code>font-weight</code> property to adjust it!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'font-weight: 100;',
        solutions: [['font-weight', 'bold']],
        tipSelector: 'h3',
        tipInfo: 'Font boldness is bold',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum.</p>
          <h3>First article subtitle</h3>
          <img src="https://dummyimage.com/347x75/f1b681/000.jpg" alt="Image" />
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est.</p>
          <h3 class="misprint">First article subtitle</h3>
          <img src="https://dummyimage.com/347x75/f1b681/000.jpg" alt="Image" />
          <p>Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
        </div>
      `
      },
      {
        levelName: 'color',
        instructions: 'That red paragraph is really standing out for no reason. Let\'s display it properly via <code>color</code> property!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'color: red;',
        solutions: [['color', 'black', '#000000', 'rgb(0,0,0)', 'rgba(0,0,0,1)']],
        tipSelector: 'p',
        tipInfo: 'Color is black',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <img src="https://dummyimage.com/347x150/f1b681/000.jpg" alt="Image" />
          <p>Integer non mollis lorem, ut dignissim augue et la es integer at semper erat mo en placerat purus ac diam elementum, nec feugiat neque faucibus esta nod. Ppurus ac diam elementum, nec feugiat neque faucibus.</p>
          <p class="misprint">Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit elit.</p>
        </div>
      `
      },
      {
        levelName: 'font-weight, color',
        instructions: 'The second subtitle of the article is red and thiner than the first one and this really makes no sense. <code>Font-weight</code> and <code>color</code> properties will help you to fix the wrong one!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 2,
        startHighlightCode: 2,
        error: 'font-weight: 100; color: red;',
        solutions: [['font-weight', 'bold'], ['color', 'black', '#000000']],
        tipSelector: 'h3',
        tipInfo: 'Font boldness is bold and color is black',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <h3>First article subtitle</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <h3 class="misprint">First article subtitle</h3>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
        </div>
      `
      },
      {
        levelName: 'font-size, font-style, font-family, font-weight, color',
        instructions: 'Ouch! Look at that paragraph that stands out!Use all font properties learned by now (<code>font-size</code>, <code>font-family</code>, <code>font-style</code>, <code>font-weight</code>, <code>color</code>) to make it be a normal paragraph.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 4,
        startHighlightCode: 2,
        error: 'font-size: 20px; font-family: "Turret Road"; font-style: italic; font-weight: 800; color: blue;',
        solutions: [['font-size', '16px', '1em'], ['font-family', '"CrimsonText"'], ['font-style', 'normal'], ['font-weight', 'normal'], ['color', 'black', '#000000', 'rgb(0,0,0)', 'rgba(0,0,0,1)']],
        tipSelector: 'p',
        tipInfo: 'Characters dimension is 16px, font name is "Crimson Text", font face is normal, font boldness is normal and color is black',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <p class="misprint">Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu, sollicitudin a diam eget, maximus pretium lectu.</p>
        </div>
      `
      },
      {
        levelName: 'line-height',
        instructions: 'The quote from the right is harder to be read than the other one, isn\'t it? That\'s because of the small distance between the rows. Make it more accessible using <code>line-height</code> property!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'line-height: 0.7em',
        solutions: [['line-height', '20px', '1,25em']],
        tipSelector: 'q',
        tipInfo: 'Distance between lines of text is 20px',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie.</p>
          <img src="https://dummyimage.com/347x75/f1b681/000.jpg" alt="Image" />
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem.</p>
          <q class="misprint">Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc.</p>
        </div>
      `
      },
      {
        levelName: 'text-align',
        instructions: 'What\'s the purpose of that right-aligned text? None! Let\'s correct it using <code>text-align</code> property!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'text-align: right;',
        solutions: [['text-align', 'left']],
        tipSelector: 'p',
        tipInfo: 'Text is aligned to left',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p class="misprint">Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit.</p>
        </div>
      `
      },
      {
        levelName: 'line-height, text-align',
        instructions: 'Oh, oh! The second subtitle looks really broken! You can fix it by using the last two CSS properties you just learned: <code>line-height</code> and <code>text-align</code>.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 2,
        startHighlightCode: 2,
        error: 'line-height: 5.5em; text-align: center;',
        solutions: [['line-height', '1.15em', '18.4px'], ['text-align', 'left']],
        tipSelector: 'h3',
        tipInfo: 'Distance between lines of text is 1.15em and text is aligned to left',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <h3>First article subtitle</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <h3 class="misprint">First article subtitle</h3>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
        </div>
      `
      },
      {
        levelName: 'text-decoration',
        instructions: '<code>text-decoration</code> property will help you to underline the second subtitle of this article.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'text-decoration: underline;',
        solutions: [['text-decoration', 'none']],
        tipSelector: 'h3',
        tipInfo: 'Subtitle is not underlined',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <h3>First article subtitle</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <h3 class="misprint">First article subtitle</h3>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
        </div>
      `
      },
      {
        levelName: 'text-transform',
        instructions: 'Sometimes we want to change the capitalization of the text. Let\'s capitalize the second article\'s title via <code>text-transform</code> property!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'text-transform: uppercase;',
        solutions: [['text-transform', 'capitalize']],
        tipSelector: 'h3',
        tipInfo: 'Subtitle is capitalized',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <h3>Loremipsum</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <h3 class="misprint">Morelorem</h3>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
        </div>
      `
      },
      {
        levelName: 'text-decoration, text-transform',
        instructions: 'Look at that subtitle from the second column! It should mark a new section - as the first subtitle does - but, instead, it is uppercased and cut with a line. Let\'s repair it using the most recently learned 2 properties: <code>text-decoration</code> and <code>text-transform</code>!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 2,
        startHighlightCode: 2,
        error: 'text-decoration: line-through; text-transform: uppercase;',
        solutions: [['text-decoration', 'none'], ['text-transform', 'none']],
        tipSelector: 'h3',
        tipInfo: 'Subtitle is not uppercased and overlined',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <h3>Loremipsum</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <h3 class="misprint">Morelorem</h3>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
        </div>
      `
      },
      {
        levelName: 'line-height, text-align, text-decoration, text-transform',
        instructions: 'The second quote looks really bad, isn\'t it? Taking as a model the first one, use <code>line-height</code>, <code>text-align</code>, <code>text-decoration</code> and <code>text-transform</code> properties with the appropriate values.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 4,
        startHighlightCode: 2,
        error: 'line-height: 3em; text-align: right; text-decoration: underline; text-transform: uppercase;',
        solutions: [['line-height', '20px', '1.25em'], ['text-align', 'left'], ['text-decoration', 'none'], ['text-transform', 'none']],
        tipSelector: 'q',
        tipInfo: 'Quote is aligned to left, the distance between its lines is 20px and it is not uppercased or underlined',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie.</p>
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus.</p>
          <img src="https://dummyimage.com/347x150/f1b681/000.jpg" alt="Image" />
          <q class="misprint">Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      `
      },
      {
        levelName: 'font-size, font-family, text-align, text-transform',
        instructions: 'The last paragraph isn\'t displayed like the others at all. To make it be part of the same article, <code>font-family</code>, <code>font-size</code>, <code>text-align</code> and <code>text-transform</code> should be the solution for you!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 4,
        startHighlightCode: 2,
        error: 'font-size: 25px; font-family: "Turret Road"; text-align: center; text-transform: uppercase;',
        solutions: [['font-size', '16px', '1em'], ['font-family','"CrimsonText"'], ['text-align', 'justify'], ['text-transform', 'none']],
        tipSelector: 'p',
        tipInfo: 'Characters dimension is 16px, font name is "Crimson Text", alignment is justified and text is not uppercased',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
          <p>Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <p>Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
          <p class="misprint">Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
        </div>
      `
      },
      {
        levelName: 'line-height, ..., text-transform',
        instructions: 'Oh, wow! What a huge difference between the first quote and the second one. This is not ok at all! Let\'s practice here the CSS text properties you already learned: <code>font-family</code>, <code>font-size</code>, <code>font-style</code>, <code>font-weight</code>, <code>color</code>, <code>line-height</code>, <code>text-align</code>, <code>text-decoration</code> and <code>text-transform</code>.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 9,
        startHighlightCode: 2,
        error: 'font-family: Turret Road, cursive; font-size: 26px; font-style: normal; font-weight: 900; color: red; line-height: 3em; text-align: center; text-decoration: underline; text-transform: lowercase;',
        solutions: [['font-family', '"PlayfairDisplay"'], ['font-size', '16px', '1em'], ['font-style', 'italic'], ['font-weight', '300'], ['color', 'black', '#000000', 'rgb(0,0,0)', 'rgba(0,0,0,1)'], ['line-height', '20px', '1.25em'], ['text-align', 'left'], ['text-decoration', 'none'], ['text-transform', 'none']],
        tipSelector: 'q',
        tipInfo: 'Font name is Playfair Display, characters dimension is 16px, font face is italic, boldness is 300, color is black, the distance between lines is 20px, text is aligned to left, not underlined and not lowercased',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie.</p>
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet.</p>
          <q class="misprint">Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis, etc.</p>
          <img src="https://dummyimage.com/347x100/f1b681/000.jpg" alt="Image" />
        </div>
      `
      },
    ]
  }

]

export const maxNoOfCodeLinesSide = 13;