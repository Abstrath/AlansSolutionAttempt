import React from 'react';

export function NavBar(props) {  
    return (  
    <div className="navbar">
        <div className="list">
          <button>
            New Note
          </button>
        </div>
        <div className="list">
          <button>
            Edit Note
          </button>
        </div>
        <div className="list">
          <button>
            Delete Note
          </button>
        </div>
        <div className="list">
          <button>
            View Notes
          </button>
        </div>
  </div>
    );
}