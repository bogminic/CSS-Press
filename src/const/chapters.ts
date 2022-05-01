import { Chapter } from "../models/Game";

export const chapters: Chapter[] = [
  {
    chapterName: 'Text',
    levels: [
      {
        levelName: 'font-family',
        instructions: 'There is a paragraph of this article that seems to be from another story. You can fix it using&nbsp;<code>font-family</code> property.<br/> <br/>Please note that font-family specifies the font and its fallbacks, separated by commas.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'font-family: "Turret Road";',
        solution: 'font-family:Crimson Text;',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam.</p>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus,volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <p>Integer non mollis lorem, ut dignissim augue et la es integer at semper erat mo en placerat purus ac diam elementum pretium metus a diam eget.</p>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p><misprint>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</misprint></p>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.  Morbi at massa eu dolor convallis feugiat.  Morbi at massa eu dolor convallis feugiat  Morbi at massa eu dolor convallis feugiat.  Morbi at massa eu dolor convallis feugiat condimentum ipsum hendrerit id.</p>
        </div>
      `
      },
      {
        levelName: 'font-size',
        instructions: 'Let\'s help the tiny paragraph from there to grow up! <code>Font-size</code> should be the magic potion you need.',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 1,
        startHighlightCode: 2,
        error: 'font-size: 12px;',
        solution: 'font-size:16px;',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus,volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <p>Integer non mollis lorem, ut dignissim augue et la es integer at semper erat mo en placerat purus ac diam elementum, nec feugiat neque faucibus esta nod. Ppurus ac diam elementum, nec feugiat neque faucibus.</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p><misprint>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</misprint></p>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit elit.</p>
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
        solution: 'font-style:italic;',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q><misprint>Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</misprint></q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc.</p>
        </div>
      `
      },
      {
        levelName: 'font-family, font-size, font-style',
        instructions: 'Our second quote doesn\'t look as stilish as the first one. Use all the font properties you learned so far (<code>font-family</code>, <code>font-size</code>, <code>font-style</code>) to beautify it!',
        beforeCode: '.misprint {',
        afterCode: '}',
        linesOfCode: 3,
        startHighlightCode: 2,
        error: ' font-style: bold; font-size: 10px; font-family: Arial;',
        solution: 'font-family: Fira Sans; font-size: 16px; font-style: italic;',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <q>Integer non mollis lorem, ut dignissim augue. Integer at semper erat. In placerat purus ac diam elementum, nec feugiat neque faucibus.</q>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q><misprint>Eligendi asa voluptates minus sollicitudin a diam eget. Aliquam est est.</misprint></q>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc.</p>
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
        error: ' font-weight: 100;',
        solution: 'font-weight: bold;',
        articleContent: `
        <h2>Insert your article title here</h2>
        <div>
          <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ulamcorper. Alala bala portocala Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
          <h3>First article subtitle</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi asa voluptates minus sollicitudin a diam eget. Sed pretium metus ac odio pellentesque non mollis lorem volutpat eget eros in amet consectetur sollicitudin a diam. Fusce lobortis ante eget finibus bibendum. Donec mauris purus, etc. Aliquam est est, sollicitudin a diam eget dacia est.</p>
          <h3><misprint>First article subtitle</misprint></h3>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt?</p>
          <p>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu.</p>
        </div>
      `
      }
    ]
  }
]

export const maxNoOfCodeLinesSide = 13;