import React, { useState } from 'react';
import Modal from 'react-modal';
export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>Report Games</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Description Comment</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description Comment" />
          </div>
          <button type="submit" class="btn btn-primary my-2">Submit</button>
        </form>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}