import React, { useEffect } from "react";
import './KiplingPoem.css';
import emptyroomimg from '../images/empty-room.jpg'
import boy from '../images/boy.png'

const KiplingPoem = () => {
  const kiplingPoem = `<p>If you can <span>keep</span> your head when all about you    
    Are <span>losing</span> theirs and <span>blaming</span> it on you; 
    If you can <span>trust</span> yourself when all men <span>doubt</span> you,    
    But make <span>allowance</span> for their doubting too; 
    If you can <span>wait</span> and not be tired by waiting,    
    Or, being <span>lied</span> about, don't deal in <span>lies</span>, 
    Or, being <span>hated</span>, don't give way to <span>hating</span>,    
    And yet don't look too good, nor talk too wise;
    If you can <span>dream</span>—and not make dreams your <span>master</span>; 
    If you can <span>think</span>—and not make thoughts your <span>aim</span>; 
    If you can meet with <span>triumph</span> and <span>disaster</span>    
    And treat those two <span>impostors</span> just the same; 
    If you can bear to hear the <span>truth</span> you've spoken    
    <span>Twisted</span> by knaves to make a <span>trap</span> for fools, 
    Or watch the things you gave your life to <span>broken</span>,    
    And <span>stoop</span> and build 'em up with wornout tools;
    If you can make one <span>heap</span> of all your <span>winnings</span>    
    And <span>risk</span> it on one turn of pitch-and-toss, 
    And <span>lose</span>, and start again at your beginnings    
    And never breathe a word about your <span>loss</span>; 
    If you can <span>force</span> your heart and nerve and <span>sinew</span>    
    To <span>serve</span> your turn long after they are gone, 
    And so <span>hold on</span> when there is nothing in you    
    Except the <span>Will</span> which says to them: "Hold on";
    If you can <span>talk</span> with crowds and keep your <span>virtue</span>,    
    Or <span>walk</span> with kings—nor lose the common <span>touch</span>; 
    If neither <span>foes</span> nor loving friends can hurt you;    
    If all men <span>count</span> with you, but none too much; 
    If you can fill the unforgiving <span>minute</span> 
    With sixty seconds' worth of distance <span>run</span>—    
    Yours is the <span>Earth</span> and everything that's in it, 
    And—which is more—you'll be a <span>Man</span>, my son!     -Rudyard Kipling</p>`;

  useEffect(() => {
    const textDivs = document.querySelectorAll(".text");

    if (textDivs.length > 0) {
      textDivs.forEach((div) => {
        div.innerHTML = kiplingPoem;
      });
    }

    const contentDiv = document.querySelector(".content");
    if (contentDiv) {
      const adjustContentSize = () => {
        const viewportWidth = window.innerWidth;
        const baseWidth = 1000;
        const scaleFactor =
          viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
        contentDiv.style.transform = `scale(${scaleFactor})`;
      };

      window.addEventListener("load", adjustContentSize);
      window.addEventListener("resize", adjustContentSize);

      return () => {
        window.removeEventListener("load", adjustContentSize);
        window.removeEventListener("resize", adjustContentSize);
      };
    }
  }, []);

  return (
    <div className="container">
      <div className="content" style={{ display: "block", width: "1000px", height: "562px" }}>
        <div className="container-full">
          <div className="animated hue"></div>
          <img
            className="backgroundImage"
            src={emptyroomimg}
            alt="Background"
          />
          <img
            className="boyImage"
            src={boy}
            alt="Boy"
          />
          <div className="container">
            <div className="cube">
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left text"></div>
              <div className="face right text"></div>
              <div className="face front"></div>
              <div className="face back text"></div>
            </div>
          </div>
          <div className="container-reflect">
            <div className="cube">
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left text"></div>
              <div className="face right text"></div>
              <div className="face front"></div>
              <div className="face back text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KiplingPoem;
