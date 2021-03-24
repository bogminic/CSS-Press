import './Instructions.scss';

interface InstructionsProps {
  
}

function Instructions(props: InstructionsProps) {

  return (
    <div className="instructions">
      <div className="instructions__header">
        <div className="instructions__title">
          <div className="instructions__chapter">TEXT</div>
          <div className="instructions__separator">|</div>
          <div className="instructions__level">font-family</div>
        </div>
        <div className="instructions__lines">
          <div className="instructions__lines--50"></div>
          <div className="instructions__lines--100"></div>
        </div>
      </div>
      <div className="instructions__content">
        There is a paragraph of this article that seems to be from another story. You can fix it using&nbsp;
        <code className="instructions__keyword">font-family</code> property.
        <br/> <br/>
        Please note that font-family specifies the font and its fallbacks, separated by commas.
      </div>
    </div>
  );
}

export default Instructions;
