import React from 'react';

export const chapters = [
    {
        chapterName: 'Text',
        levels: [{
            levelName: 'font-family',
            instructions: (visibility: string) => (
                <React.Fragment>
                    There is a paragraph of this article that seems to be from another story.You can fix it  
                    using bla bla bla <code className="instructions__keyword" onMouseOver={() => {visibility = 'show'}} onMouseLeave={() => {visibility = 'hide'}}>font-family
                        <div className={"instructions__popup " + (visibility === 'show'? 'instructions__popup--show': 'instructions__popup--hide')}> 
                              - specifies the font and its fallbacks, separated by comma <br></br> 
                              - specific-font-family | generic-font-family | initial | inherit <br></br>
                              - font-family: Times, serif;
                        </div>
                    </code> property.
                    <br></br>
                    <br></br>
                    Please note that font-family specifies the font and its fallbacks, separated by commas.
                </React.Fragment>
            ),
            beforeCode: 'misprint',
            afterCode: '} <br> .asd { color: red; /n }',
            linesOfCode: 1,
            startHighlightCode: 2,
            articleContent: (selector: string) => (
                <React.Fragment>
                    <h2>Insert your article title here</h2>
                    <div>
                        <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
                        <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus,volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
                        <p>Integer non mollis lorem, ut dignissim augue et la es integer at semper erat mo en placerat purus ac diam elementum, nec feugiat neque faucibus esta nod. Ppurus ac diam elementum, nec feugiat neque faucibus.</p>
                        <p className={selector === 'misprint'? 'misprint': ''}>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
                        <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit elit.</p>
                    </div>
                </React.Fragment>)
        }, {
            levelName: 'font-size',
            instructions: () => (
                <React.Fragment>
                    <p>Let\'s help the tiny paragraph from there to grow up! <code className="instructions__keyword">Font-size</code> should be the magic potion you need.</p>
                </React.Fragment>
            ) ,
            beforeCode: '.misprint',
            afterCode: '}',
            linesOfCode: 1,
            startHighlightCode: 2,
            articleContent: (selector: string) => (
                <React.Fragment>
                    <h2>Insert your article title here</h2>
                    <div>
                        <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
                        <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus,volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
                        <p>Integer non mollis lorem, ut dignissim augue et la es integer at semper erat mo en placerat purus ac diam elementum, nec feugiat neque faucibus esta nod. Ppurus ac diam elementum, nec feugiat neque faucibus.</p>
                        <p className={selector === 'misprint'? 'misprint': ''}>Fusce tincidunt risus eget magna pretium placerat. Maecenas et tempus mauris. Aliquam est est, sollicitudin a diam eget, maximus pretium lectu. Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit nostrum assumenda maxime aperiam quos voluptas voluptates minus, labore nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Fusce lobortis ante eget finibus bibendum. Donec mauris purus, volutpat eget eros in, vestibulum ullamcorper ipsum. Sed pretium metus ac odio pellentesque, sed convallis ante molestie. Praesent sagittis venenatis diam, eu condimentum ipsum hendrerit id. Morbi at massa eu dolor convallis feugiat.</p>
                        <p>Dolor sit amet consectetur adipisicing elit. Nihil id corrupti neque praesentium blanditiis suscipit elit.</p>
                    </div>
                </React.Fragment>)
        }]
    }
]

export const maxNoOfCodeLinesSide = 13;