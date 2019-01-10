import React from 'react';
import {Input} from './input.js';
import Popup from 'reactjs-popup';

function NoteTitle(props) {
  return (
     <Popup trigger={<button className="note-title">{props.value}</button>} position="top left">
                  {close => (
                    <div>
                      {/* <a className="close" onClick={close}>
                        &times;
                      </a> */}
                    </div>
       )}
     </Popup>
  );
}

function NoteDetail(props) {
  return (
    <div>
        <div className="note-detail">
            {props.value}
            <Input />
        </div>
    </div>
  );
}


class Note extends React.Component {

    showNote(i) {
      return (
      <div className="note-box">
        <NoteTitle 
          value="This is a value"
          onClick={() => this.props.onClick(i)}
        />
        <NoteDetail
          value="here is some detail"
        />
      </div>
      );
    }

    render() {
        return ( <div className="display">
        <div className="board-row">
          {this.showNote(0)}
          {this.showNote(1)}
          {this.showNote(2)}
          {this.showNote(3)}
        </div>
        <div className="board-row">
          {this.showNote(4)}
          {this.showNote(5)}
          {this.showNote(6)}
          {this.showNote(7)}
        </div>
        <div className="board-row">
          {this.showNote(8)}
          {this.showNote(9)}
          {this.showNote(10)}
          {this.showNote(11)}
        </div>
      </div>
        );
    }
}

export class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Notes: [{
              noteId: Array(12).fill(1),
              notetitle: Array(12).fill("I have a title"),
              notebody: Array(12).fill("I have a body"),
              updatedAt: Array(12).fill("2018-08-01"),
              createdAt: Array(12).fill("2018-08-02"),
            }],
            pageName: ""
        };
    }

    handleClick(i) {
        // const note = this.state.noteId;
        // const noteTitle = this.state.notetitle;
        // const noteBody = this.state.notebody;            
    }

    render() {
      return (
        <div className="corkboard">
          <div className="notes">
            <Note 
              notes={this.state.notes}
              onClick={(i) => this.handleClick(i)}
            />
  
          </div>
          {/* <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div> */}
        </div>
      );
    }
}
